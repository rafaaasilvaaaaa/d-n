import { useState } from 'react';
import * as React from 'react'
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: '1',
    dietaryRestrictions: '',
    song: '',
    message: '',
    transportation: false,
    accommodation: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.attendance) {
      toast.error('Lütfen gerekli alanları doldurun.');
      return;
    }
    
    // Bu gerçek bir uygulamada API'ye gönderilir
    console.log('RSVP Data:', formData);
    toast.success('RSVP\'niz başarıyla gönderildi! Teşekkür ederiz.');
    
    // Formu sıfırla
    setFormData({
      name: '',
      email: '',
      phone: '',
      attendance: '',
      guestCount: '1',
      dietaryRestrictions: '',
      song: '',
      message: '',
      transportation: false,
      accommodation: false
    });
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
                <Label htmlFor="email">E-posta *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123 45 67"
                />
              </div>
              <div>
                <Label htmlFor="guestCount">Kaç kişi geleceksiniz?</Label>
                <Select value={formData.guestCount} onValueChange={(value) => setFormData({ ...formData, guestCount: value })}>
                  <SelectTrigger>
                    <SelectValue />
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
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="maybe" id="maybe" />
                  <Label htmlFor="maybe">Büyük ihtimalle katılacağım</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Maalesef katılamayacağım 😔</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === 'yes' && (
              <>
                <div>
                  <Label htmlFor="dietary">Diyet kısıtlamalarınız var mı?</Label>
                  <Textarea
                    id="dietary"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                    placeholder="Vegetaryen, vegan, alerji vb."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="song">Dans etmek istediğiniz bir şarkı var mı?</Label>
                  <Input
                    id="song"
                    value={formData.song}
                    onChange={(e) => setFormData({ ...formData, song: e.target.value })}
                    placeholder="Şarkı adı ve sanatçısı"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Ek hizmetler</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="transportation"
                        checked={formData.transportation}
                        onCheckedChange={(checked) => setFormData({ ...formData, transportation: checked as boolean })}
                      />
                      <Label htmlFor="transportation">Ulaşım servisi talep ediyorum</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="accommodation"
                        checked={formData.accommodation}
                        onCheckedChange={(checked) => setFormData({ ...formData, accommodation: checked as boolean })}
                      />
                      <Label htmlFor="accommodation">Konaklama konusunda yardım istiyorum</Label>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div>
              <Label htmlFor="message">Özel mesajınız</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Bizim için özel bir mesajınız var mı?"
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