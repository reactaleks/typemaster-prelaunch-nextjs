import BtnComponent from "./BtnComponent";
import Image from "next/image";

export default function NavComponent() {
  return (
    <nav className="w-full h-[48px] mt-8 mb-16">
      <div className="w-[327px] h-[48px] flex flex-row items-center justify-between mx-auto">
        <Image
          src={"/shared/logo.svg"}
          height={40}
          width={40}
          alt="Type Master Logo"
        />
        <BtnComponent btnOrange={false}/>
      </div>
    </nav>
  );
}
