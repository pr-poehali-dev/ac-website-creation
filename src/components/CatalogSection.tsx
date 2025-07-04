import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/data/products";

interface CatalogSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareItems: Product[];
}

export const CatalogSection = ({
  products,
  onAddToCart,
  onToggleCompare,
  compareItems,
}: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог кондиционеров
          </h3>
          <p className="text-gray-600">Найдено {products.length} моделей</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleCompare={onToggleCompare}
              isInCompare={compareItems.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
