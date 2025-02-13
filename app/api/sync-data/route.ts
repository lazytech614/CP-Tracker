import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { fetchData } from "@/lib/fetchData";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {userId, handle, platform} = body;

        if(!userId) return NextResponse.json({ success: false, message: "Missing userId"}, { status: 400 });
        if(!handle) return NextResponse.json({ success: false, message: "Missing handle"}, { status: 400 });
        if(!platform) return NextResponse.json({ success: false, message: "Missing platform"}, { status: 400 });

        const user = await prismadb.user.findUnique({
            where: {
                id: userId
            }
        });

        if(!user) return NextResponse.json({ success: false, message: "User not found"}, { status: 404 });

        const data = await fetchData(handle, platform);

        if(!data) return NextResponse.json({ success: false, message: "Data not found"}, { status: 404 });

        const platformName = await prismadb.platform.findUnique({
            where: {
                name: platform
            }
        });

        if(!platformName) return NextResponse.json({ success: false, message: "Platform not found"}, { status: 404 });

        const today = new Date();
        const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        const updatedAccount = await prismadb.userPlatformAccount.upsert({
            where: {
              userId_platformId: {
                userId,
                platformId: platformName.id,
              },
            },
            update: {
              lastSync: new Date(),
              currentRating: data.rating || data.contributionPoints || data.result.contribution,
              totalProblemsSolved: data.totalSolved || 0,
              currentStreak: data.currentStreak || 0,
            },
            create: {
              userId,
              platformId: platformName.id,
              handle,
              lastSync: new Date(),
              currentRating: data.rating || data.contributionPoints || data.result.contribution,
              totalProblemsSolved: data.totalSolved || 0,
              currentStreak: data.currentStreak || 0,
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
              rating: data.rating || data.contributionPoints || data.result.contribution,
              problemsSolved: data.totalSolved || 0,
              streak: data.currentStreak || 0,
            },
            create: {
              accountId: updatedAccount.id,
              date: todayDateOnly,
              rating: data.rating || data.contributionPoints || data.result.contribution,
              problemsSolved: data.totalSolved || 0,
              streak: data.currentStreak || 0,
            },
            include: {
              account: {
                include: { platform: true },
              },
            },
          });

          return NextResponse.json({success:true, data:updatedAccount});

    } catch(err) {
        console.log("[SYNC-DATA] Error", err);
        return NextResponse.json({ success: false, message: "Internal server error"}, { status: 500 });
    }
}


