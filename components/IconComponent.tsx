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
    <div className="bg-orange w-[65px] h-[65px] p-2 rounded-2xl content-center mx-auto md:mx-0">
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
