import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const contactInfo = [
  {
    icon: "Phone",
    text: "+7 (495) 123-45-67",
  },
  {
    icon: "Mail",
    text: "info@climatech.ru",
  },
  {
    icon: "MapPin",
    text: "Москва, ул. Примерная, 123",
  },
  {
    icon: "Clock",
    text: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00",
  },
];

export const ContactsSection = () => {
  return (
    <section id="contacts" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
          <p className="text-gray-600">Свяжитесь с нами для консультации</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Свяжитесь с нами</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <Icon
                    name={info.icon as any}
                    className="h-5 w-5 text-blue-600"
                  />
                  <span>{info.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Быстрая консультация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Площадь помещения</Label>
                <Input id="area" placeholder="м²" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Получить консультацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
