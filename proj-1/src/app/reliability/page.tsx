import reliabilityImage from "../../../public/reliability.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      imgAlt="welding"
      title="Super high reliability hosting"
      imgData={reliabilityImage}
    />
  );
}