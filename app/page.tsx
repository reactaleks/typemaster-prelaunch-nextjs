import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import ShowCaseComponent from "@/components/ShowCaseComponent";
import FeatureSectionComponent from "@/components/FeatureSectionComponent";

export default function Home() {
  return (
    <>
      <NavComponent/>
      <main>
        <HeroComponent/>
        <ShowCaseComponent/>
        <FeatureSectionComponent/>
      </main>
      <FooterComponent/>
    </>
  );
}
