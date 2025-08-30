import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1596026339984-e16bfa013cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzU2NDc4OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic couple photo",
      title: "İlk Karşılaşma"
    },
    {
      src: "https://images.unsplash.com/photo-1622277583249-4c1fad490804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBtb21lbnRzfGVufDF8fHx8MTc1NjQ4ODE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wedding photography moments",
      title: "Nişan Fotoğrafları"
    },
    {
      src: "https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzU2NTAwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wedding bouquet",
      title: "Çiçek Seçimi"
    },
    {
      src: "https://images.unsplash.com/photo-1669859084638-58a250915fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBnb2xkfGVufDF8fHx8MTc1NjUwMDc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wedding rings",
      title: "Evlilik Teklifi"
    },
    {
      src: "https://images.unsplash.com/photo-1674924258890-f4a5d99bb28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBlbGVnYW50fGVufDF8fHx8MTc1NjQ2NDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wedding venue",
      title: "Mekan Seçimi"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary font-serif">
            Anılarımız
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Düğüne giden yoldaki güzel anlarımızdan kareler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(photo.src)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm">{photo.title}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>


        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <ImageWithFallback
                src={selectedImage}
                alt="Enlarged photo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}