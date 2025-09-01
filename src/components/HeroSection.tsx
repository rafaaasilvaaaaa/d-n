import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function HeroSection() {
  const scrollToRSVP = () => {
    const element = document.querySelector('#rsvp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://raw.githubusercontent.com/rafaaasilvaaaaa/d-n/main/build/images/hero2.JPG"
          alt="Romantic wedding couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-serif">
            Buket <span className="text-rose-300">&</span> Mutluhan
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-90">
            Birlikte yazacağımız yeni hikayenin başlangıcı
          </p>
          <p className="text-lg md:text-xl opacity-80">
            13 Eylül 2025 • Kocaeli
          </p>
          <p className="text-lg md:text-xl opacity-80">
            20 Eylül 2025 • Kırşehir
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToRSVP}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
          >
            Katılım Bildiriniz
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
            onClick={() => document.querySelector('#details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Detayları Görün
          </Button>
        </div>
      </div>
    </section>
  );
}