import StepCard from "./StepCard";

export default function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <StepCard
          step="1"
          title="Connect Your Account"
          description="Easily link your CP profiles."
        />
        <StepCard
          step="2"
          title="Sync Your Data"
          description="Your progress is automatically updated."
        />
        <StepCard
          step="3"
          title="Analyze & Improve"
          description="View detailed analytics and grow your skills."
        />
      </div>
    </section>
  );
}
