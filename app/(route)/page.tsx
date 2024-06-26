import AboutSection from "@/components/about";
import ContactUs from "@/components/cta";
import Hero from "@/components/hero";
import Reviews from "@/components/reviews";
import MySkills from "@/components/MySkills";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
  return (
    <main className="flex gap-y-10 flex-col">
      <Hero />
      {/* <AboutSection/> */}
      <MySkills />
      <RecentProjects />
      {/* <Reviews/> */}
      <ContactUs />
    </main>
  );
}
