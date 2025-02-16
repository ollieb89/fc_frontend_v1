import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="space-y-8">
        <HeroSection className="pt-8" />
        <FeaturesSection className="pt-16" />
        <HowItWorksSection className="pt-16" />
        <ShowcaseSection className="pt-16" />
        <TestimonialsSection className="pt-16 pb-24" />
      </main>
    </div>
  );
}
