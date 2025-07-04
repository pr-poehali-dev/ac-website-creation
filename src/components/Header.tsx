import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Product } from "@/data/products";

interface HeaderProps {
  cartItems: Product[];
  compareItems: Product[];
}

export const Header = ({ cartItems, compareItems }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Snowflake" className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">КлиматТехника</h1>
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
  );
};
