import scaleImage from "../../../public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgAlt="boat"
      title="Scale your app to infinity"
      imgData={scaleImage}
    />
  );
}