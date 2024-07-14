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
    <div className="">
      <div className="my-16">
        <IconComponent
          image={image}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
        />
      </div>

      <h3 className="font-barlow text-headings leading-headings font-bold w-[327px] h-[56px] mx-auto my-4 text-center md:text-left">
        {title}
      </h3>
      <p className="font-barlowm text-body leading-body text-light-blue text-center w-[327px] h-[104px] mx-auto md:text-left md:w-[281px] md:mx-0" >
        {text}
      </p>
    </div>
  );
}
