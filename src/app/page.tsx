import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <>
      <HeroSection
        heroHeader='Espacio Arcoiris Crear'
        heroTitle='Animate a Crear con nosotros'
        heroButton='Comprar ahora'
      />
      <ServiceSection/>
      <CategorySection/>
      <ProductSection/>
    </>
  );
}

// transition1: transition-opacity duration-250 ease
// transition2: transition-opacity duration-750 ease

