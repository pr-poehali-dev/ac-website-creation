import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedArea, setSelectedArea] = useState([25]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPower, setSelectedPower] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [compareItems, setCompareItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Daikin FTXS25K",
      power: "2.5 кВт",
      area: "25 м²",
      brand: "Daikin",
      price: 45000,
      image: "/img/8a37c2b9-28ad-474f-9fdc-6a2ecd6a78dd.jpg",
      features: ["Инверторный", "Wi-Fi", "Самоочистка"],
      energyClass: "A+++",
    },
    {
      id: 2,
      name: "Mitsubishi MSZ-AP25VG",
      power: "2.5 кВт",
      area: "25 м²",
      brand: "Mitsubishi",
      price: 52000,
      image: "/img/f9bd0d3b-a1f4-4792-9077-d2f0afb5977c.jpg",
      features: ["Инверторный", "Плазменная очистка", "Тихий режим"],
      energyClass: "A++",
    },
    {
      id: 3,
      name: "LG Dual Cool S09ET",
      power: "2.6 кВт",
      area: "26 м²",
      brand: "LG",
      price: 38000,
      image: "/img/8a37c2b9-28ad-474f-9fdc-6a2ecd6a78dd.jpg",
      features: ["Двойное охлаждение", "Smart ThinQ", "Золотое покрытие"],
      energyClass: "A++",
    },
    {
      id: 4,
      name: "Samsung AR12TXHZAWKNUA",
      power: "3.5 кВт",
      area: "35 м²",
      brand: "Samsung",
      price: 41000,
      image: "/img/f9bd0d3b-a1f4-4792-9077-d2f0afb5977c.jpg",
      features: ["Wind-Free", "Smart Control", "Быстрое охлаждение"],
      energyClass: "A++",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    const matchesArea =
      parseInt(product.area) >= selectedArea[0] &&
      parseInt(product.area) <= selectedArea[0] + 10;
    return matchesBrand && matchesArea;
  });

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const toggleCompare = (product) => {
    setCompareItems((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product],
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Snowflake" className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                КлиматТехника
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#catalog"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#calculator"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Калькулятор
              </a>
              <a
                href="#installation"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Установка
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingCart" className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="GitCompare" className="h-5 w-5" />
                {compareItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 text-xs">
                    {compareItems.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Кондиционеры для вашего комфорта
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Современные системы кондиционирования с профессиональной
              установкой и гарантией
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Snowflake" className="mr-2 h-5 w-5" />
                Подобрать кондиционер
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Калькулятор подбора
            </h3>
            <p className="text-gray-600">
              Подберите идеальный кондиционер для вашего помещения
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calculator" className="mr-2 h-5 w-5" />
                Расчет мощности
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Площадь помещения: {selectedArea[0]} м²</Label>
                <Slider
                  value={selectedArea}
                  onValueChange={setSelectedArea}
                  max={100}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>10 м²</span>
                  <span>100 м²</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Предпочитаемый бренд</Label>
                  <Select
                    value={selectedBrand}
                    onValueChange={setSelectedBrand}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите бренд" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все бренды</SelectItem>
                      <SelectItem value="Daikin">Daikin</SelectItem>
                      <SelectItem value="Mitsubishi">Mitsubishi</SelectItem>
                      <SelectItem value="LG">LG</SelectItem>
                      <SelectItem value="Samsung">Samsung</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Рекомендуемая мощность</Label>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-blue-700">
                      {(selectedArea[0] * 0.1).toFixed(1)} кВт
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Каталог кондиционеров
            </h3>
            <p className="text-gray-600">
              Найдено {filteredProducts.length} моделей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      {product.energyClass}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-600">{product.brand}</p>
                  </div>

                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Icon name="Zap" className="h-4 w-4 mr-1" />
                      {product.power}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Home" className="h-4 w-4 mr-1" />
                      {product.area}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price.toLocaleString()} ₽
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 space-y-2">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => addToCart(product)}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />В
                    корзину
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => toggleCompare(product)}
                  >
                    <Icon name="GitCompare" className="mr-2 h-4 w-4" />
                    {compareItems.find((item) => item.id === product.id)
                      ? "Убрать"
                      : "Сравнить"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section id="installation" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Услуги установки
            </h3>
            <p className="text-gray-600">
              Профессиональный монтаж с гарантией качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Wrench" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Стандартная установка</CardTitle>
                <CardDescription>
                  Монтаж кондиционера в готовые отверстия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Монтаж за 2-3 часа
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Гарантия 2 года
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Тест системы
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    от 8 000 ₽
                  </div>
                  <Button className="w-full">Заказать</Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Icon
                  name="Settings"
                  className="h-12 w-12 text-blue-600 mb-4"
                />
                <CardTitle>Установка с прокладкой</CardTitle>
                <CardDescription>
                  Полный монтаж с созданием отверстий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Создание отверстий
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Прокладка коммуникаций
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Полная настройка
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    от 12 000 ₽
                  </div>
                  <Button className="w-full">Заказать</Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Shield" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Обслуживание</CardTitle>
                <CardDescription>
                  Регулярное ТО и чистка системы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Чистка фильтров
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Диагностика системы
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon
                      name="Check"
                      className="h-4 w-4 mr-2 text-green-500"
                    />
                    Заправка фреона
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    от 3 000 ₽
                  </div>
                  <Button className="w-full">Заказать</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
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
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                  <span>info@climatech.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600" />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-blue-600" />
                  <span>Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</span>
                </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Snowflake" className="h-6 w-6" />
                <span className="text-xl font-bold">КлиматТехника</span>
              </div>
              <p className="text-gray-400">
                Профессиональные решения для климатического комфорта
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Кондиционеры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Сплит-системы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мульти-сплит
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Промышленные
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Установка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Обслуживание
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ремонт
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@climatech.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 КлиматТехника. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
