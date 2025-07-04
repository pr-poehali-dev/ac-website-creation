import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  features,
  price,
}: ServiceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Icon name={icon as any} className="h-12 w-12 text-blue-600 mb-4" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-600">
              <Icon name="Check" className="h-4 w-4 mr-2 text-green-500" />
              {feature}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <div className="text-2xl font-bold text-gray-900 mb-2">{price}</div>
          <Button className="w-full">Заказать</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
