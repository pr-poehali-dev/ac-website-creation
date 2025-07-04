import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { brands } from "@/data/products";

interface CalculatorSectionProps {
  selectedArea: number[];
  selectedBrand: string;
  onAreaChange: (value: number[]) => void;
  onBrandChange: (value: string) => void;
}

export const CalculatorSection = ({
  selectedArea,
  selectedBrand,
  onAreaChange,
  onBrandChange,
}: CalculatorSectionProps) => {
  return (
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
                onValueChange={onAreaChange}
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
                <Select value={selectedBrand} onValueChange={onBrandChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите бренд" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Все бренды</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
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
  );
};
