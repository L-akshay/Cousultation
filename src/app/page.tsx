import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero/Hero";
import Features from "@/components/ui/Features/Features";
import Work from "@/components/ui/Work/Work";
import Pricing from "@/components/ui/Pricing/Pricing";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
      <Work />
      <Pricing />
    </Container>
  );
}
