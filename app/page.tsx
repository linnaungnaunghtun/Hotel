'use client'
import HomeSection from "@/components/ui/homeSection";
import SectionSlide from "@/components/ui/sectionSlide";
import { ReactLenis } from "@studio-freight/react-lenis";


export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <article>
          <section className="grid-cols-1 place-content-center sticky top-0 w-full">
            <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto mb-4 px-2 md:px-4">
              <SectionSlide />
            </div>
          </section>
          <section className="min-h-screen bg-white grid place-content-center sticky top-0 w-full">
            <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto px-2 md:px-4">
              <HomeSection />
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
