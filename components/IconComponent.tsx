import Image from "next/image";

interface PropTypes {
  image: string;
  iconHeight: number;
  iconWidth: number;
}

export default function IconComponent({
  image,
  iconHeight,
  iconWidth,
}: PropTypes) {
  return (
    <div className="bg-orange w-[65px] h-[65px] rounded-2xl content-center ">
      <Image
        src={image}
        height={iconHeight}
        width={iconWidth}
        alt=""
        className="mx-auto"
      />
    </div>
  );
}
