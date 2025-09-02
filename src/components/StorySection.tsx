import { useState } from 'react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { X } from 'lucide-react';

export function StorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="story" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary font-serif">
            Bizim Hikayemiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bazen en güzel hikayeler, beklenmedik anlarda başlar...
          </p>
        </div>

        {/* İlk Karşılaşma ve İlk Randevu */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl mb-3 text-primary">İlk Karşılaşma</h3>
              <p className="text-muted-foreground leading-relaxed">
                2019 yılının Mart ayında, üniversitenin bilgisayar mühendisliği bölümünün birinci sınıfında tanıştık. 
                İlk bakışta bir şeyler farklıydı… O gün akşam, telefonda kendisiyle uzun uzun sohbet ettik. 
                İlk konuşmada bile birbirimizi daha önceden tanıyormuşuz gibi hissettik. 
                Zamanın nasıl geçtiğini anlamadık bile; çünkü o an, sadece bir sohbet değil, bir başlangıçtı bizim için.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-3 text-primary">İlk Randevu</h3>
              <p className="text-muted-foreground leading-relaxed">
                İlk buluşmamız, Zonguldak’ta denizin kıyısında yer alan All In isimli restoranda gerçekleşti. 
                Harika bir ambiyansta, mekânın sakinliği ve deniz manzarası sohbetimize eşlik etti. 
                Her şey o kadar rahattı ki, sanki ilk buluşma değil de uzun zamandır tanışıyor gibiydik. 
                Gecenin sonunda onu yurduna bırakırken içimde tarifsiz bir mutluluk vardı. 
                O akşam, ona olan hislerimin ne kadar derin olduğunu bir kez daha fark ettim.
              </p>
            </Card>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/cicek.jpeg"
              alt="Wedding bouquet"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Evlilik Teklifi ve Düğün Hazırlıkları */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <ImageWithFallback
              src="https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/evlilik3.jpeg"
              alt="Wedding rings"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <Card className="p-6">
              <h3 className="text-xl mb-3 text-primary">Evlilik Teklifi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kocaeli’nin Kandıra ilçesinde, denizin hemen kıyısında, sade ama anlamı çok büyük bir masa hazırlamıştım. 
                Buket o sırada Ankara’da olduğumu sanıyordu. Oysa ben iki gün önceden gelip arkadaşlarımızla beraber her detayıyla ilgilenmiş, 
                o anı unutulmaz kılmak için gizlice hazırlık yapmıştım. 
                Beni karşısında gördüğünde şaşkınlıktan gözyaşlarına hakim olamadı. 
                O an, tüm yorgunluğa ve heyecana değdi. Diz çöktüm ve ona üç kelime söyledim: “Benimle evlenir misin?” 
                Ve o da gülümseyerek, gözleri dolu dolu “Evet” dedi.
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-primary/90 cursor-pointer"
              >
                Bu güzel anımızı izlemek için tıklayınız
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-3 text-primary">Düğün Hazırlıkları</h3>
              <p className="text-muted-foreground leading-relaxed">
                Şimdi de en özel günümüzü planlarken, sizlerle bu mutluluğu paylaşmak istiyoruz. 
                Hayatımızın en güzel gününde yanımızda olmanızı sabırsızlıkla bekliyoruz.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal Video */}
      {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full p-1 z-10 transition hover:scale-110 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src="https://drive.google.com/file/d/1eWv36cCPbJZzaikbYhdF6u4viv8zJj5k/preview"
                width="100%"
                height="600"
                allow="autoplay"
                className="rounded-b"
              ></iframe>
            </div>
          </div>
        )}

    </section>
  );
}
