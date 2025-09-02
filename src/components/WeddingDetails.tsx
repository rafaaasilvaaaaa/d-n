import { Card } from './ui/card';
import { Calendar, Clock, MapPin, Music, Utensils, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WeddingDetails() {
  const timeline = [
    { time: '14:00', event: 'Misafir karşılama', icon: MapPin },
    { time: '14:30', event: 'Nikah töreni', icon: Calendar },
    { time: '15:30', event: 'Kokteyl & Fotoğraf çekimi', icon: Camera },
    { time: '17:00', event: 'Düğün yemeği', icon: Utensils },
    { time: '19:00', event: 'İlk dans & Eğlence', icon: Music },
    { time: '24:00', event: 'Gece sonu', icon: Clock }
  ];

  return (
    <section id="details" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary font-serif">
            Düğün Detayları
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En özel günümüzün tüm detayları burada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Sol taraf: Davetiye görseli */}
          <div className="flex justify-center lg:justify-end items-start">
            <ImageWithFallback
              src="https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/davetiye-min.jpeg"
              alt="Düğün Davetiyesi"
              className="max-w-lg w-full h-auto rounded-lg shadow-lg"
            />
          </div>


          {/* Sağ taraf: Davet yazısı */}
          <Card className="p-8 space-y-6 shadow-md">
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl font-semibold text-primary">Davetlisiniz</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Hayatlarımızı birleştirdiğimiz bu özel günde, mutluluğumuzu paylaşmanız 
                bizim için çok kıymetli olacak. Ailemizin ve sevdiklerimizin şahitliğinde 
                atacağımız bu adımda sizleri de aramızda görmekten onur duyarız.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-primary">13 Eylül 2025 • Kocaeli</h4>
                <a
                  href="https://www.google.com/maps?q=Yenikent+Mahallesi+2406+Sk+41400+Gebze+Kocaeli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                <iframe
                    src="https://www.google.com/maps?q=Yenikent+Mahallesi+2406+Sk+41400+Gebze+Kocaeli&output=embed"
                    width="100%"
                    height="156"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-md border"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white font-semibold text-sm">Google Maps’te Aç</span>
                  </div>
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-primary">20 Eylül 2025 • Kırşehir</h4>
                <a
                  href="https://www.google.com/maps?q=Kuşdilli,+1334.+Sk.,+40100+Kırşehir+Merkez/Kırşehir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <iframe
                    src="https://www.google.com/maps?q=Kuşdilli,+1334.+Sk.,+40100+Kırşehir+Merkez/Kırşehir&output=embed"
                    width="100%"
                    height="156"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-md border"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white font-semibold text-sm">Google Maps’te Aç</span>
                  </div>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}