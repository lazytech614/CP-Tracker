interface DashboardHeroProps {
  username: string | null | undefined;
}

export default function DashboardHero({ username }: DashboardHeroProps) {
  return (
    <section className="py-8 text-center">
      <h1 className="text-3xl font-bold">Welcome back, {username}!</h1>
      <p className="mt-2 text-gray-600">
        Here's your competitive programming progress overview.
      </p>
    </section>
  );
}
