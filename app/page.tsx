import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import ShowCaseComponent from "@/components/ShowCaseComponent";
import FeatureSectionComponent from "@/components/FeatureSectionComponent";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-between">
      <NavComponent/>
      <main className="w-full md:w-full  mx-auto overflow-hidden ">
        <HeroComponent/>
        <ShowCaseComponent/>
        <FeatureSectionComponent/>
      </main>
      <FooterComponent/>
    </div>
  );
}


// xl:w-[1440px]