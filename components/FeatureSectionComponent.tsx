import FeatureComponent from "./FeatureComponent";
const featuresDetails = [
  {
    logo: "/shared/icon-compatible.svg",
    title: "HIGHLY COMPATIBLE",
    text: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    iconHeight:20.24,
    iconWidth: 25.14
  },
  {
    logo: "/shared/icon-bluetooth.svg",
    title: "WIRELESS WITH BLUETOOTH",
    text: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
    iconHeight: 27.86,
    iconWidth:  17.68
  },
  {
    logo: "/shared/icon-battery.svg",
    title: `HIGH CAPACITY\nBATTERY`,
    text: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
    iconHeight: 20,
    iconWidth: 31.99
  },
  {
    logo: "/shared/icon-light.svg",
    title: "RGB BACKLIT MODES",
    text: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
    iconHeight: 32,
    iconWidth: 32
  },
];

export default function FeatureSectionComponent() {
  return (
    <div className="md:flex md:flex-wrap md:justify-center xl:w-[1110px] xl:mx-auto">
        {featuresDetails.map((feature, index) => {
            return <FeatureComponent image={feature.logo} title={feature.title} text={feature.text} iconHeight={feature.iconHeight} iconWidth={feature.iconWidth} key={index}/>
        })}
    </div>
  )
}
