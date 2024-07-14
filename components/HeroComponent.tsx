import Image from "next/image"
import BtnComponent from "./BtnComponent"
export default function HeroComponent() {
    return (
        <div>
            <h1>Typemaster
            Keyboard</h1>
            <p>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
            <BtnComponent/>
            <>Release on 5/27</>
            <Image src={'/images/image-keyboard.jpg'} width={1080} height={960} alt="Image of typemaster keyboard"/>
        </div>
    )
}