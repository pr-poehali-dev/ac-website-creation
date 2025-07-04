import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { CatalogSection } from "@/components/CatalogSection";
import { InstallationSection } from "@/components/InstallationSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";
import { useProductFilters } from "@/hooks/useProductFilters";
import { useCart } from "@/hooks/useCart";
import { products } from "@/data/products";

const Index = () => {
  const {
    selectedArea,
    selectedBrand,
    filteredProducts,
    setSelectedArea,
    setSelectedBrand,
  } = useProductFilters(products);

  const { cartItems, compareItems, addToCart, toggleCompare } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Header cartItems={cartItems} compareItems={compareItems} />
      <HeroSection />
      <CalculatorSection
        selectedArea={selectedArea}
        selectedBrand={selectedBrand}
        onAreaChange={setSelectedArea}
        onBrandChange={setSelectedBrand}
      />
      <CatalogSection
        products={filteredProducts}
        onAddToCart={addToCart}
        onToggleCompare={toggleCompare}
        compareItems={compareItems}
      />
      <InstallationSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
