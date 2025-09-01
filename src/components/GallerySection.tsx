import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/cicek.jpeg",
    alt: "Çiçek dekorasyonu",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/detay.jpeg",
    alt: "Hazırlık detayları",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/evlilik1.jpeg",
    alt: "Evlilik hazırlığı 1",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/evlilik2.jpeg",
    alt: "Evlilik hazırlığı 2",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/evlilik3.jpeg",
    alt: "Evlilik hazırlığı 3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/hero2.JPG",
    alt: "Hero arka plan görseli",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/nisan1.jpeg",
    alt: "Nişan töreni",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/nisan2.JPG",
    alt: "Nişan kutlaması",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/nisan3.JPG",
    alt: "Nişan pastası",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/nisannn.jpeg",
    alt: "Nişan detayları",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/uni.JPG",
    alt: "Üniversite anısı",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/rafaaasilvaaaaa/d-n@main/build/images/uni2.JPG",
    alt: "Üniversite yılları",
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