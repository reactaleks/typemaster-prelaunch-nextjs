import Image from "next/image";
import IconComponent from "./IconComponent";

interface PropTypes {
  image: string;
  title: string;
  text: string;
  iconHeight: number;
  iconWidth: number;
}

export default function FeatureComponent({
  image,
  title,
  text,
  iconHeight,
  iconWidth,
}: PropTypes) {
  return (
    <div className="h-[297px] w-[327px] md:w-[281px] md:h-[289px]  xl:w-[255px] xl:h-[323px] mx-auto flex flex-col justify-between items-center md:items-start my-16 ">
      <div className="xl:px-4">
        <IconComponent
          image={image}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
        />
      </div>

      <h3 className="md:w-[281px] md:h-[56px] xl:px-4 font-barlow text-headings leading-headings font-bold text-center md:text-left">
        {title}
      </h3>
      <p className="md:w-[281px] md:h-[104px] xl:px-4 font-barlowm text-body leading-body text-light-blue text-center md:text-left" >
        {text}
      </p>
    </div>
  );
}
