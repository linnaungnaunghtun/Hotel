"use client"

import { useState } from "react"

import { Card, CardBody } from "@heroui/card"
import Image from "next/image"
import { Button } from "@heroui/button"
import { ArrowLeft, ArrowRight } from "../icons"

const testimonials = [
  {
    name: "JOSEPH STALIN",
    role: "Creative Director",
    image: "https://plus.unsplash.com/premium_photo-1706563800421-eb914707de4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
    quote:
      "The most memorable trip of my life. The guides were knowledgeable, the food was amazing, and the views were breathtaking!",
    indicator: "FIRST",
  },
  {
    name: "TAYLOR BALLAM",
    role: "MOPO STUDIOS",
    image:
      "https://plus.unsplash.com/premium_photo-1668127296366-c336da2eb6d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
    quote:
      "We explored the best of Tokyo, Kyoto, and Osaka, all without the usual travel stress. Truly a trip of a lifetime!",
    indicator: "FIRST",
  },
  {
    name: "ESTHER HOWARD",
    role: "Creative Director",
    image: "https://plus.unsplash.com/premium_photo-1668127296517-40237ca36643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
    quote:
      "The guides were knowledgeable and friendly, and the accommodations were top-notch. Best vacation ever!",
    indicator: "SECOND",
  },
  {
    name: "ESTHER HOWARD",
    role: "Creative Director",
    image: "https://plus.unsplash.com/premium_photo-1668127296901-0e01aab056f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    quote:
      "The guides were knowledgeable and friendly, and the accommodations were top-notch. Best vacation ever!",
    indicator: "SECOND",
  },
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="max-w-[1440px] mx-auto mt-9 px-9 py-16">
      <div className="flex justify-between sm:ml-[290px] items-start mb-16">
        <h2 className="text-xl font-normal leading-tight tracking-tight md:text-6xl">
          Client about
          <br />
          our work
        </h2>
        <p className="text-sm mt-20 mr-[340px] text-black/70">
          From Concept To
          <br />
          Completion
        </p>
      </div>

      <div className="relative">
        <div className="flex flex-row-reverse gap-6 items-center">
       
          <div className="w-[310px] text-black">
            <div className="p-6">
              <div className="aspect-square absolute top-0 -right-10 w-[300px] h-[200px] mb-4 overflow-hidden rounded-xl">
                <Image
                  src={testimonials[currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1].image}
                  alt="Profile"
                  className="object-fill"
                  width={290}
                  height={200}
                
                />
               
              </div>
            <div className="absolute text-white top-32  px-5  ">
            <p className="text-sm font-extrabold">
                -{testimonials[currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1].name}
              </p>
              <p className="text-xs opacity-70">
                {testimonials[currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1].role}
              </p>
            </div>
            </div>
          </div>

      
         <div className="flex flex-row-reverse rounded-3xl gap-6 items-center border">
         <div className="w-[410px] bg-white  shadow-none">
            <div className="p-8 relative">
              <div className="text-7xl text-black/10 absolute top-4 left-4 leading-none">&quot;</div>
              <p className="text-2xl mt-12 mb-8 leading-normal">{testimonials[currentSlide].quote}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 text-sm text-black/70">
                  <span>({testimonials[currentSlide].indicator})</span>
                </div>
              </div>
            </div>
          </div>

   
          <div className="w-[360px] bg-transparent">
            <div className="p-8 bg-transparent">
              <div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-xl">
                <Image
                  src={testimonials[currentSlide].image || ""}
                  alt="Profile" 
                  className="object-cover w-full h-full"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute bottom-20 text-white px-5  ">
                <p className="text-lg font-extrabold">-{testimonials[currentSlide].name}</p>
                <p className="text-md font-medium opacity-80">{testimonials[currentSlide].role}</p>
              </div>
            </div>
          </div>
         </div>

    
          <Card className="w-[240px] bg-[#1C1C27] text-white">
            <CardBody className="p-6">
              <div className="aspect-square w-20 h-20 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={testimonials[currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1].image}
                  alt="Profile"
                  className="object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-sm">
                {testimonials[currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1].name}
              </p>
              <p className="text-xs text-white/70">
                {testimonials[currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1].role}
              </p>
              
            </CardBody>
          </Card>
        </div>

     
        <Button
          isIconOnly
          className="absolute border-2 left-48 top-14 -translate-y-1/2 -translate-x-6 bg-white rounded-full w-16 h-16 shadow-md"
          onPress={prevSlide}
        >
          <ArrowLeft className="size-18" />
        </Button>
        <Button
          isIconOnly
          className="absolute right-64 bottom-14 -translate-y-1/2 translate-x-6 bg-white rounded-full w-16 h-16 shadow-md"
          onPress={nextSlide}
        >
          <ArrowRight className="size-18" />
        </Button>
      </div>
    </div>
  )
}
