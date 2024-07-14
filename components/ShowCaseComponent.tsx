import Image from "next/image";
export default function ShowCaseComponent() {
  return (
    <div className="">
      <div className="w-auto h-[193px] md:h-[320px] grid grid-cols-12 md:grid-cols-24 overflow-hidden">
        <Image
          src={"/images/image-phone-and-keyboard.jpg"}
          height={960}
          width={510}
          alt="Image of keyboard with a phone"
          style={{objectFit: "cover"}}
          className="rounded-2xl w-[129px] h-[193px] md:w-[225px] md:h-[320px] col-span-4 absolute -left-[25px] md:-left-[0] md:relative md:col-start-2 md:col-span-8"
        />
        <Image
          src={"/images/image-glass-and-keyboard.jpg"}
          height={960}
          width={887}
          alt="Image of keyboard with a glass"
          style={{objectFit: "cover"}}
          className="rounded-2xl w-[220px] h-[193px] md:w-[450px] md:h-[320px] col-span-7 col-start-5 md:col-start-10 md:col-span-14"
        />
      </div>

      <div className="mt-16 mb-24 md:flex md:items-center">
        <h2 className="text-headingm text-dark-blue font-barlow uppercase leading-headingm w-[255px] h-[108px] mx-auto my-8 text-center md:text-left">
          mechanical wireless Keyboard
        </h2>
        <p className="text-body text-light-blue font-barlowm leading-body w-[327px] h-[104px] text-center mx-auto md:text-left">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </div>
  );
}
