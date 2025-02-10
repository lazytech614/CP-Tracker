import { auth } from "@clerk/nextjs/server";

export const GET = async (req: Request) => {
    const {userId} = await auth()
    console.log("UserId", userId);
    return new Response("Hello Next.js!");
};