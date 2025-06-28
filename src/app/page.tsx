import homeImg from "@/../public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z-10 inset-0">
        {/* inset-0 makes the container fill the entire viewport */}
        <Hero imgData={homeImg} imgAlt="Car factory" title="Professional Cloud Hosting" />
      </div>
    </div>
  );
}