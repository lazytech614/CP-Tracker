export default function AboutContent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="prose lg:prose-xl mx-auto">
        <h2>Our Mission</h2>
        <p>
          At CP Tracker, our mission is to help competitive programmers monitor their progress, analyze performance, and achieve their goals.
          We provide detailed insights and analytics by integrating data from top competitive programming platforms.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>Multi-platform integration with LeetCode, CodeForces, CodeChef, and more.</li>
          <li>Detailed performance analytics and progress tracking.</li>
          <li>Personalized dashboards with charts, stats, and streak tracking.</li>
          <li>Community features to connect with like-minded coders.</li>
        </ul>
        <h2>Our Story</h2>
        <p>
          Founded by competitive programming enthusiasts, CP Tracker was born from the need for a unified platform that consolidates data from various sources, making it easier for programmers to stay motivated and focused on improvement.
        </p>
      </div>
    </section>
  );
}
