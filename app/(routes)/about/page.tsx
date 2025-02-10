import AboutHero from "./components/AboutHero";
import AboutContent from "./components/AboutContent";
import Container from "@/components/ui/container";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-130px)]">
      <Container>
        <AboutHero />
        <AboutContent />
      </Container>
    </div>
  );
}
