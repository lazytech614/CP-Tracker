import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {userId} = await request.json();

  if(!userId) return NextResponse.json({ success: false, message: "Missing userId"}, { status: 400 });
  
      const user = await prismadb.user.findUnique({
        where: { id: userId },
        include: { 
          platformAccounts: { 
            include: { 
              platform: true } 
          } 
        },
      });
      if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

      // console.log(userPlatforms?.platformAccounts);

      const platforms = user?.platformAccounts;
      // console.log(platforms);

      if (!platforms) return NextResponse.json({ success: false, message: "Platforms not found" }, { status: 404 });

      return NextResponse.json({success: true, data: platforms }, { status: 200 });
}