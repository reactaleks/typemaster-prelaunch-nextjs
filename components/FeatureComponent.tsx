import Image from "next/image"


interface PropTypes {
    image: string;
    title: string;
    text: string;
}

export default function FeatureComponent({image,title,text}: PropTypes) {
    return (
        <div>
            <Image src={image} height={65} width={65} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}