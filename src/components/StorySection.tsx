import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function StorySection() {
  return (
    <section id="story" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary font-serif">
            Bizim Hikayemiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bazen en güzel hikayeler, beklenmedik anlarda başlar...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl mb-3 text-primary">İlk Karşılaşma</h3>
              <p className="text-muted-foreground leading-relaxed">
                2019 yılının Mart ayında, üniversitenin bilgisayar mühendisliği bölümünün birinci sınıfında tanıştık. 
                O gün kendisiyle telefondan iletişime geçtim ve akşam uzun uzun sohbet ettik. İlk konuşmamızda bile 
                birbirimizi çok önceden tanıyormuşuz gibi hissettik, zamanın nasıl geçtiğini anlamadık.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-3 text-primary">İlk Randevu</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bir hafta sonra Mehmet cesaretini topladı ve kahve içmeye davet etti Ayşe'yi. 
                Galata Köprüsü'nde yürüyüş yapıp, küçük bir kafede saatlerce sohbet ettik. 
                O günden sonra her gün biraz daha yakınlaştık.
              </p>
            </Card>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzU2NTAwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wedding bouquet"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669859084638-58a250915fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBnb2xkfGVufDF8fHx8MTc1NjUwMDc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wedding rings"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <Card className="p-6">
              <h3 className="text-xl mb-3 text-primary">Evlilik Teklifi</h3>
              <p className="text-muted-foreground leading-relaxed">
                2023 yılının baharında, Ayşe'nin en sevdiği yer olan Büyükada'da yaptı Mehmet 
                evlilik teklifini. Güneşin batışını izlerken, diz çöküp "Benimle evlenir misin?" 
                diye sordu. Tabii ki cevabımız "Evet!" oldu.
              </p>
              <Button>Bu güzel anımızı izlemek için tıklayınız</Button>
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
    </section>
  );
}