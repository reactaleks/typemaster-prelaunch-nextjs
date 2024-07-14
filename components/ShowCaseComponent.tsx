import Image from "next/image";
export default function ShowCaseComponent() {
  return (
    <div className="h-[504px] grid grid-cols-24 grid-rows-24">
      <div className="row-span-9 col-span-24 grid grid-cols-12 grid-rows-12 w-full">
        <Image
          src={"/images/image-phone-and-keyboard.jpg"}
          height={960}
          width={510}
          alt="Image of keyboard with a phone"
          style={{objectFit: "cover"}}
          className="rounded-2xl w-[150px] h-[190px] md:w-[225px] md:h-[320px] col-span-4 absolute -left-[25px]"
        />
        <Image
          src={"/images/image-glass-and-keyboard.jpg"}
          height={960}
          width={887}
          alt="Image of keyboard with a glass"
          style={{objectFit: "cover"}}
          className="rounded-2xl w-[205px] h-[190px] md:w-[450px] md:h-[320px] col-span-7 col-start-6"
        />
      </div>

      <div className="row-span-12 col-span-24 row-start-14 grid grid-cols-12 grid-rows-12">
        <h2 className="text-headingm text-dark-blue font-barlow uppercase leading-headingm col-span-6 row-span-6 col-start-4 text-center">
          mechanical wireless Keyboard
        </h2>
        <p className="text-body text-light-blue font-barlowm leading-bodyt row-span-6 row-start-8 col-span-10 col-start-2 text-center">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </div>
  );
}
