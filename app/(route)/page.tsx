import Hero from "@/app/(route)/_components/hero";
import RecentProjects from "@/app/(route)/_components/recent-projects";
import MySkills from "./_components/MySkills";
import ContactUs from "./_components/cta";

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
