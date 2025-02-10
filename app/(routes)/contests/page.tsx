import PlatformCard from "./components/PlatformCard";

const platforms = [
  { name: "LeetCode", slug: "leetcode", icon: "/leetcode_icon.png" },
  { name: "CodeForces", slug: "codeforces", icon: "/icons/codeforces.svg" },
  { name: "CodeChef", slug: "codechef", icon: "/icons/codechef.svg" },
  { name: "AtCoder", slug: "atcoder", icon: "/icons/atcoder.svg" },
];

export default function ContestsPage() {
  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-130px)]">
      <h1 className="text-3xl font-bold text-center mb-8">Choose a Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.slug}
            name={platform.name}
            slug={platform.slug}
            icon={platform.icon}
          />
        ))}
      </div>
    </div>
  );
}
