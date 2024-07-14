import BtnComponent from "./BtnComponent";
import Image from "next/image";

export default function NavComponent() {
  return (
    <nav className="w-full h-[71px] flex justify-between items-center px-9">
      <Image
        src={"/shared/logo.svg"}
        height={40}
        width={40}
        alt="Type Master Logo"
        className="h-[40px] w-[40px] col-span-2 row-span-2 row-start-2 col-start-2"
      />
      <div className="row-span-2 row-start-2 col-start-13 col-span-8">
        <BtnComponent btnOrange={false} />
      </div>
    </nav>
  );
}
