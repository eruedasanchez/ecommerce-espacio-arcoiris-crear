import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import CategorySection from "@/components/CategorySection";

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
    </>
  );
}
