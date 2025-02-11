import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { fetchLeetCodeData } from "@/lib/fetchLeetCodeData";

export async function POST(request: Request) {
  try {
    const { userId, handle } = await request.json();

    if (!userId || !handle) {
      return NextResponse.json({ error: "Missing userId or handle" }, { status: 400 });
    }

    const user = await prismadb.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const leetCodeData = await fetchLeetCodeData(handle);

    if (!leetCodeData) {
      return NextResponse.json({ error: "LeetCode data not found" }, { status: 404 });
    }

    const leetCodePlatform = await prismadb.platform.findUnique({
      where: { name: "leetcode" },
    });

    if (!leetCodePlatform) {
      return NextResponse.json({ error: "LeetCode platform not found" }, { status: 404 });
    }

    // Normalize the date to remove the time portion (set to start of day)
    const today = new Date();
    const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const updatedAccount = await prismadb.userPlatformAccount.upsert({
      where: {
        userId_platformId: {
          userId,
          platformId: leetCodePlatform.id,
        },
      },
      update: {
        lastSync: new Date(),
        currentRating: leetCodeData.rating,
        totalProblemsSolved: leetCodeData.totalSolved,
        currentStreak: leetCodeData.currentStreak,
      },
      create: {
        userId,
        platformId: leetCodePlatform.id,
        handle,
        lastSync: new Date(),
        currentRating: leetCodeData.rating,
        totalProblemsSolved: leetCodeData.totalSolved,
        currentStreak: leetCodeData.currentStreak,
      },
    });

    await prismadb.userStats.upsert({
      where: {
        accountId_date: {
          accountId: updatedAccount.id,
          date: todayDateOnly,
        },
      },
      update: {
        rating: leetCodeData.rating,
        problemsSolved: leetCodeData.totalSolved,
        streak: leetCodeData.currentStreak,
      },
      create: {
        accountId: updatedAccount.id,
        date: todayDateOnly,
        rating: leetCodeData.rating,
        problemsSolved: leetCodeData.totalSolved,
        streak: leetCodeData.currentStreak,
      },
      include: {
        account: {
          include: { platform: true },
        },
      },
    });

    return NextResponse.json({ success: true, data: updatedAccount });
  } catch (error: any) {
    console.error("Error syncing LeetCode data:", error);
    const errorMessage = error?.message || "Unknown error";
    return NextResponse.json({ error: errorMessage, success: false }, { status: 500 });
  }
}
