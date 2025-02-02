"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import clsx from "clsx"
import { Chip } from "@heroui/chip"
import { TrendingUp } from "../icons"
import { Link } from "@heroui/link"



interface Feature {
  step: string
  title?: string
  content: string
  image: string
}


export function SectionPopular({
  
  title = "How to get Started",
  description = "Unlocking new avenues for business success through strategic development. Delivering high-quality solutions tailored to your specific needs.",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
  features = [
    {
      step: "Step 1",
      title: "Choose Your Room",
      content: "Browse through our selection of luxurious rooms and suites",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      step: "Step 2",
      title: "Check Availability",
      content: "Select your dates and check room availability",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fHww"
    },
    {
      step: "Step 3",
      title: "Book Your Stay",
      content: "Complete your booking with our secure payment system",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsfGVufDB8fDB8fHww"
    }
  ],
}) {
    
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={clsx("p-4 md:p-5")}>
      <div className="max-w-7xl mx-auto w-full">
        
      <div data-aos="zoom-in" className="text-center px-4 md:px-28 lg:px-60">
            <h1 className="text-2xl  md:text-3xl lg:text-5xl font-bold mb-10">
              <Chip size="lg" variant="bordered">
                {title}
              </Chip>
            </h1>

            <p className="text-xl  md:text-3xl lg:text-4xl">
              {description}
            </p>
          </div>
        

        <div className="flex mt-14 flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div 
                data-aos="fade-right"
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.1 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={clsx(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>

                  <p className="text-sm md:text-lg text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
            <div data-aos="fade-down" className="flex pt-8 justify-center">
           
{/* <button type="submit" className="flex justify-center gap-2 items-center mx-auto  text-lg bg-gray-50  lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-stone-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
  View More ....
  <TrendingUp className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" />
</button> */}

<Link isBlock showAnchorIcon color="primary" href="#">
        View More
 </Link>


            </div>
          </div>

          <div
            className={clsx(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 50, opacity: 0.6, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -50, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                        width={1000}
                        height={500}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}