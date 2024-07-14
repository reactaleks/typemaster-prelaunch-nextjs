import Image from "next/image";
import BtnComponent from "./BtnComponent";
export default function HeroComponent() {
  return (
    <div className="relative overflow-hidden h-[681px] grid grid-cols-24 grid-rows-24 "> 
      <div className="w-[327px] h-[286px] col-span-22 row-span-12 col-start-3 grid grid-cols-12 grid-rows-12">
        <h1 className="font-barlow text-[48px] uppercase leading-[48px] text-dark-blue col-span-12 row-span-4 row-start-1">
          Typemaster Keyboard
        </h1>
        <p className="font-barlowm text-body text-light-blue col-span-12 row-span-3 row-start-6">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="cols-pan-6 row-span-2 col-start-1 row-start-10">
          <BtnComponent btnOrange={true} />
        </div>
        <div className="text-light-blue font-barlowm font-bold text-body uppercase col-span-6 row-span-2 row-start-10 content-center col-start-8">
          Release on 5/27
        </div>
      </div>
      <div className="relative h-[331px]  col-span-24 row-span-12 col-start-3">
        <Image
          src={"/images/image-keyboard.jpg"}
          width={1080}
          height={960}
          alt="Image of typemaster keyboard"
          className="rounded-l-3xl w-[372ox] h-[331px] md:w-[478px] md:h-[425px] "
        />
      </div>
    </div>
  );
}
