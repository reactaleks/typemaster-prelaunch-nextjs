import Image from "next/image";
import BtnComponent from "./BtnComponent";
export default function HeroComponent() {
  return (
    <div className="grid grid-cols-12 h-[681px] md:h-[425px] grid-rows-12 mb-4 mt-24 md:my-8 relative xl:w-[1440px] xl:mx-auto">
      <div className="w-[327px] h-[286px] flex flex-col justify-between mx-auto col-span-12 row-span-6 row-start-1
      
      md:col-span-6 md:row-start-3
      xl:col-span-4 xl:col-start-2
      mb-12
      ">
        <h1 className="font-barlow text-[48px] uppercase leading-[48px] text-dark-blue">
          Typemaster Keyboard
        </h1>
        <p className="font-barlowm text-body text-light-blue ">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="flex items-center justify-between">
          <BtnComponent btnOrange={true} />
          <div className="text-light-blue font-barlowm font-bold text-body uppercase ">
            Release on 5/27
          </div>
        </div>
      </div>
      <div className="relative col-span-12 row-span-6 row-start-7
      md:col-span-6 md:col-start-7 md:row-start-1
      xl:col-start-7
      ">
        <Image
          src={"/images/image-keyboard.jpg"}
          width={1080}
          height={960}
          alt="Image of typemaster keyboard"
          className="w-[372px] h-[331px] md:w-[478px] md:h-[425px] rounded-3xl absolute -right-[25px] sm:left-[25] md:left-[75px] "
        />
      </div>
      <div className="hidden xl:block xl:absolute w-[255px] h-[240px] col-start-11 row-start-6 -right-[100px] top-[10px]">
        <Image src={'/shared/pattern-square.svg'} width={255} height={240} alt=""/>
      </div>
    </div>
  );
}
