import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HomeSection from "@/components/ui/homeSection";
import SectionSlide from "@/components/ui/sectionSlide";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
       <div className="w-full">
       <SectionSlide />
       </div>
     <HomeSection />
    
    </section>
  );
}
