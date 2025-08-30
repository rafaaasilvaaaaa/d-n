import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { WeddingDetails } from './components/WeddingDetails';
import { RSVPSection } from './components/RSVPSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <WeddingDetails />
      <RSVPSection />
      <GallerySection />
      <Footer />
      <Toaster />
    </div>
  );
}