import performanceImage from "../../../public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgAlt="Welding"
      title="We serve high performance applications"
      imgData={performanceImage}
    />
  );
}