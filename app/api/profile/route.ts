// // pages/api/profile.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { getSession } from "next-auth/react";
// import prismadb from "@/lib/prismadb"; // adjust the import path based on your project structure

// export async function POST(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Only allow POST requests.
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   // Ensure the user is authenticated.
//   const session = await getSession({ req });
//   if (!session || !session.user?.email) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const { name, email } = req.body;

//   try {
//     // Update the user in the database. You can update other fields as well.
//     const updatedUser = await prismadb.user.update({
//       where: { email: session.user.email },
//       data: { name, email },
//     });
//     return res.status(200).json({ user: updatedUser });
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message });
//   }
// }
