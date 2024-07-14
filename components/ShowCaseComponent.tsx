import Image from "next/image"
export default function ShowCaseComponent() {
    return (
        <div>
            <Image src={'/images/image-phone-and-keyboard.jpg'} height={960} width={510} alt="Image of keyboard with a phone"/>
            <Image src={'/images/image-glass-and-keyboard.jpg'} height={960} width={887} alt="Image of keyboard with a glass"/>
            <h2>mechanical wireless
            Keyboard</h2>
            <p>The Typemaster keyboard boasts top-notch build and practical design. 
                It offers a wide variety of switches and keycaps, 
                along with reliable wireless connectivity.</p>
        </div>
    )
}