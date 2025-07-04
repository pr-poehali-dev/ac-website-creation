import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: "Wrench",
    title: "Стандартная установка",
    description: "Монтаж кондиционера в готовые отверстия",
    features: ["Монтаж за 2-3 часа", "Гарантия 2 года", "Тест системы"],
    price: "от 8 000 ₽",
  },
  {
    icon: "Settings",
    title: "Установка с прокладкой",
    description: "Полный монтаж с созданием отверстий",
    features: [
      "Создание отверстий",
      "Прокладка коммуникаций",
      "Полная настройка",
    ],
    price: "от 12 000 ₽",
  },
  {
    icon: "Shield",
    title: "Обслуживание",
    description: "Регулярное ТО и чистка системы",
    features: ["Чистка фильтров", "Диагностика системы", "Заправка фреона"],
    price: "от 3 000 ₽",
  },
];

export const InstallationSection = () => {
  return (
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
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
