import { useState } from 'react';
import * as React from 'react'
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { toast } from 'sonner@2.0.3';

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guestCount: '1',
    message: '',
  });
//
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.attendance) {
      toast.error('Lütfen gerekli alanları doldurun.');
      return;
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwE18mOx7xQJ_kPEsBfO8TuzW6q20fceySvWozHA7xNNuZk0kBuKMlXV24jS-9bXHGJlA/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      toast.success("Katılımınız başarıyla kaydedildi!");

      setFormData({
        name: '',
        attendance: '',
        guestCount: '1',
        message: '',
      });
    } catch (err) {
      console.error('Sheets API hatası:', err);
      toast.error("Kayıt sırasında hata oluştu.");
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary font-serif">
            KATILIM
          </h2>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Ad Soyad *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Adınız ve soyadınız"
                  required
                />
              </div>

              <div>
                <Label htmlFor="guestCount">Kaç kişi geleceksiniz?</Label>
                <Select value={formData.guestCount} onValueChange={(value) => setFormData({ ...formData, guestCount: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kişi sayısı" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 kişi</SelectItem>
                    <SelectItem value="2">2 kişi</SelectItem>
                    <SelectItem value="3">3 kişi</SelectItem>
                    <SelectItem value="4">4 kişi</SelectItem>
                    <SelectItem value="5">5+ kişi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Katılım Durumunuz *</Label>
              <RadioGroup 
                value={formData.attendance} 
                onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Evet, kesinlikle katılacağım! 🎉</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="message">Mesajınız</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="İçinizden gelenleri, eğlenceli yorumlarınızı paylaşabilirsiniz 🎉"
                rows={4}
              />
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="px-12">
                Gönder
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
