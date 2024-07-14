import Image from "next/image";
export default function ShowCaseComponent() {
  return (
    <div className="">
      <div className="w-auto h-[193px] grid grid-cols-12 overflow-hidden">
        <Image
          src={"/images/image-phone-and-keyboard.jpg"}
          height={960}
          width={510}
          alt="Image of keyboard with a phone"
          className="rounded-2xl w-[129px] h-[193px] col-span-4 absolute -left-[25px]"
        />
        <Image
          src={"/images/image-glass-and-keyboard.jpg"}
          height={960}
          width={887}
          alt="Image of keyboard with a glass"
          className="rounded-2xl w-[220px] h-[193px] col-span-7 col-start-5"
        />
      </div>

      <div className="mt-16 mb-24">
        <h2 className="text-headingm text-dark-blue font-barlow uppercase leading-headingm w-[255px] h-[108px] mx-auto my-8 text-center">
          mechanical wireless Keyboard
        </h2>
        <p className="text-body text-light-blue font-barlowm leading-body w-[327px] h-[104px] text-center mx-auto">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </div>
  );
}
