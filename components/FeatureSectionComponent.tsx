import FeatureComponent from "./FeatureComponent";
const featuresDetails = [
  {
    logo: "/shared/icon-compatible.svg",
    title: "HIGHLY COMPATIBLE",
    text: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
  },
  {
    logo: "/shared/icon-bluetooth.svg",
    title: "WIRELESS WITH BLUETOOTH",
    text: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
  },
  {
    logo: "/shared/icon-battery.svg",
    title: "HIGH CAPACITY BATTERY",
    text: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
  },
  {
    logo: "/shared/icon-light.svg",
    title: "RGB BACKLIT MODES",
    text: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
  },
];

export default function FeatureSectionComponent() {
  return (
    <>
        {featuresDetails.map((feature) => {
            return <FeatureComponent image={feature.logo} title={feature.title} text={feature.text}/>
        })}
    </>
  )
}
