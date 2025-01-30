"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HomeSection = () => {
  const popular = [
    {
      id: "01",
      img: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fHww",
      title: "Innovative Branding",
      des: "Transforming your brand identity with creative solutions that resonate.",
    },
    {
      id: "02",
      img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fHww",
      title: "Business Growth Strategies",
      des: "Unlocking new avenues for business success through strategic development.",
    },
    {
      id: "03",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8fHww",
      title: "Precision Engineering",
      des: "Delivering high-quality solutions tailored to your specific needs.",
    },
  ];

  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <h3 className="text-sm text-gray-600">Premium Facilities</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Exclusive Premium Facilities
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 text-lg">
            Our exclusive amenities include a luxurious swimming pool and
            breathtaking integrated views. Every corner is meticulously designed
            to create an exceptional ambiance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.map((item) => (
          <div key={item.id} className="space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <motion.article
                key={item.id}
                className="relative group shadow-lg overflow-hidden rounded-xl"
              >
                {/* Image with a slight hover scale effect */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-72 w-full"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={600}
                    width={1200}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-xl"
                  />
                </motion.div>
              </motion.article>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-light">{item.title}</h3>
              <p className="text-gray-600">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
