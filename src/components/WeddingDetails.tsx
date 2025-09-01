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
              <p className="font-medium text-primary">
                13 Eylül 2025 • Kocaeli  
                <br />
                20 Eylül 2025 • Kırşehir
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}