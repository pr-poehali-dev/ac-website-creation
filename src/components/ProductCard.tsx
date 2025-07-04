import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isInCompare: boolean;
}

export const ProductCard = ({
  product,
  onAddToCart,
  onToggleCompare,
  isInCompare,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
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
          <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
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
          onClick={() => onAddToCart(product)}
        >
          <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />В корзину
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => onToggleCompare(product)}
        >
          <Icon name="GitCompare" className="mr-2 h-4 w-4" />
          {isInCompare ? "Убрать" : "Сравнить"}
        </Button>
      </CardFooter>
    </Card>
  );
};
