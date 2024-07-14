import BtnComponent from "./BtnComponent"
import Image from "next/image"

export default function NavComponent() {
    return (
        <nav>
            <Image src={'/shared/logo.svg'} height={40} width={40} alt="Type Master Logo"/>
            <BtnComponent/>
        </nav>
    )
}