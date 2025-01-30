'use client'
import HomeSection from "@/components/ui/homeSection";
import SectionSlide from "@/components/ui/sectionSlide";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <motion.div
      style={{ y }}
      initial={{ x: 0, y: 0 }}
      transition={{ duration: 1 }}
    >
      <main className="h-full">
        <article className="h-full">
          <section className="grid-cols-1 place-content-center sticky top-0 w-full h-full">
            <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto mb-4 px-2 md:px-4 h-full">
              <SectionSlide />
            </div>
          </section>
          <section className="min-h-screen bg-white grid place-content-center sticky top-0 w-full h-full">
            <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto px-2 md:px-4 h-full">
              <HomeSection />
            </div>
          </section>
        </article>
      </main>
    </motion.div>
  );
}
