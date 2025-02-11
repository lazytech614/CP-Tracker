import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.platform.upsert({
    where: { name: "leetcode" },
    update: {},
    create: {
      name: "leetcode",
      displayName: "LeetCode",
      apiUrl: "https://leetcode-stats-api.herokuapp.com/",
    },
  });

  // Optionally, insert other platforms
  await prisma.platform.upsert({
    where: { name: "codeforces" },
    update: {},
    create: {
      name: "codeforces",
      displayName: "CodeForces",
      apiUrl: "", // add if needed
    },
  });

  console.log("Database seeding successful!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
