import Image from "next/image";
export default function ShowCaseComponent() {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-24 relative  xl:w-[1440px] mx-auto">
      <div className="grid grid-cols-24 relative lg:gap-4 xl:w-[730px] xl:col-span-12 xl:col-start-4 overflow-hidden">

        <div className=" col-span-7 col-start-1
          sm:col-start-4  
          md:col-start-2 md:col-span-8 
          lg:col-start-5 lg:col-span-6
          xl:col-start-1 xl:col-span-9 
          w-[129px] h-[193px] md:rounded-2xl md:w-[255px] md:h-[320px] xl:w-[245px] xl:h-[480px] relative">
          <div className="absolute rounded-r-2xl  opacity-75 bg-[#C95614] w-[129px] h-[193px] md:rounded-2xl md:w-[255px] md:h-[320px] xl:w-[245px] xl:h-[480px]"></div>
          <Image
            src={"/images/image-phone-and-keyboard.jpg"}
            height={960}
            width={510}
            alt="Image of keyboard with a phone"
            style={{objectFit: "cover"}}
            className="
            rounded-r-2xl w-[129px] h-[193px] md:rounded-2xl md:w-[255px] md:h-[320px] xl:w-[245px] xl:h-[480px]
            "
          />
        </div>

        <Image
          src={"/images/image-glass-and-keyboard.jpg"}
          height={960}
          width={887}
          alt="Image of keyboard with a glass"
          style={{objectFit: "cover"}}
          className="rounded-2xl w-[220px] h-[193px] md:w-[450px] md:h-[320px] xl:w-[455px] xl:h-[480px] col-span-14 col-start-9 
          sm:col-start-12  
          lg:col-start-11 lg:col-span-10
          md:col-span-13 md:col-start-11 
          xl:col-span-16 xl:col-start-10" 
        />
      </div>

      <div className="my-12 w-[327px] mx-auto md:flex md:w-[689px] xl:w-[255px] xl:h-[265px] md:items-center md:justify-between xl:flex-col xl:col-span-6 xl:col-start-18">
        <h2 className="w-[255px] xl:w-[255px] xl:h-[108px] mx-auto text-headingm text-dark-blue font-barlow uppercase leading-headingm text-center md:mx-0 md:text-left">
          mechanical wireless Keyboard
        </h2>
        <p className="w-[327px] xl:w-[255px] xl:h-[130px] text-body text-light-blue font-barlowm leading-body my-12 text-center md:text-left xl:my-0">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
      <div className="hidden xl:block xl:absolute w-[255px] h-[240px] -left-[300px] bottom-0">
        <Image src={'/shared/pattern-square.svg'} width={255} height={240} alt=""/>
      </div>
    </div>
  );
}
