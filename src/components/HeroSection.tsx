import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Кондиционеры для вашего комфорта
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Современные системы кондиционирования с профессиональной установкой
            и гарантией
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
  );
};
