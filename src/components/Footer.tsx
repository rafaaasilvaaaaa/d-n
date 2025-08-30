import { Heart, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl mb-4 font-serif">Buket & Mutluhan</h2>
          <p className="text-lg opacity-90 mb-6">
            13 Eylül 2025 • Kocaeli <br />
            20 Eylül 2025 • Kırşehir
          </p>
          <p className="opacity-80 max-w-2xl mx-auto">
            Bu özel günde bizimle birlikte olacağınız için şimdiden teşekkür ederiz. 
            Sevgi dolu bir gün geçireceğiz!
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
         <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <a href="tel:+905393488655" className="text-sm hover:underline">
              Mutluhan: (0539) 348 86 55
            </a>
          </div>

          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <a href="mailto:mutluhancosar.1903@gmail.com" className="text-sm hover:underline">
              mutluhancosar.1903@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <Instagram className="h-5 w-5 mr-2" />
            <a
              href="https://instagram.com/mutluhancosar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              @mutluhancosar
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <Heart className="h-4 w-4 text-rose-300 mr-2 fill-current" />
              <p className="text-sm opacity-80">
                Sevgiyle hazırlandı • 2025
              </p>
              <Heart className="h-4 w-4 text-rose-300 ml-2 fill-current" />
            </div>
            <p className="text-sm opacity-60">
              created by <span className="font-medium">Buket & Mutluhan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}