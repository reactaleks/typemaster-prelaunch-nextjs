import Image from "next/image";
import BtnComponent from "./BtnComponent";
export default function HeroComponent() {
  return (
    <div className="relative overflow-hidden md:grid md:grid-cols-24 md:grid-rows-12 md:h-[425px] md:mb-8">
      <div className="w-[327px] h-[286px] grid grid-cols-12 grid-rows-12 mx-auto md:col-span-12 md:col-start-1 md:row-span-12 md:row-start-1">
        <h1 className="font-barlow text-[48px] uppercase leading-[48px] text-dark-blue row-start-1 row-span-4">
          Typemaster Keyboard
        </h1>
        <p className="font-barlowm text-body text-light-blue row-start-6 row-span-3 mt-2 col-span-12">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="row-start-11 col-start-1 col-span-6 row-span-2">
          <BtnComponent btnOrange={true} />
        </div>
        <div className="text-light-blue font-barlowm font-bold text-body uppercase row-start-11 row-span-2 col-start-7 col-span-6 text-center content-center">
          Release on 5/27
        </div>
      </div>
      <div className="relaive h-[331px] md:h-[425px] w-[auto] mt-16 mb-8 md:col-span-12 md:col-start-14 md:row-span-12 md:row-start-1 md:m-0">
        <Image
          src={"/images/image-keyboard.jpg"}
          width={1080}
          height={960}
          alt="Image of typemaster keyboard"
          className="rounded-2xl w-[372ox] h-[331px] md:w-[478px] md:h-[425px] absolute left-[25px] md:left-[400px]"
        />
      </div>
    </div>
  );
}
