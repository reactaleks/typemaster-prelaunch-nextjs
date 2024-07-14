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
    <div className="h-[297px] w-[327px] mx-auto flex flex-col justify-between items-center my-16">
      <div className="">
        <IconComponent
          image={image}
          iconHeight={iconHeight}
          iconWidth={iconWidth}
        />
      </div>

      <h3 className="font-barlow text-headings leading-headings font-bold text-center">
        {title}
      </h3>
      <p className="font-barlowm text-body leading-body text-light-blue text-center " >
        {text}
      </p>
    </div>
  );
}
