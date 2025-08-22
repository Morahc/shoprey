"use client";

import { useState, useEffect } from "react";

import { LineIcon } from "../icons/line";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    image: "/images/testimonial1.png",
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Customer",
    image: "/images/testimonial2.png",
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Customer",
    image: "/images/testimonial3.png",
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  },
  {
    id: 4,
    name: "Robert Fox",
    role: "Customer",
    image: "/images/testimonial1.png",
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  },
  {
    id: 5,
    name: "Dianne Russell",
    role: "Customer",
    image: "/images/testimonial2.png",
    feedback:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  },
];

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="py-25 bg-[#EDF2EE]">
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className="w-full"
      >
        <div className="container space-y-12.5">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <h1>Client Testimonial</h1>
              <LineIcon />
            </div>
            <div className="flex items-center gap-4">
              <CarouselPrevious className="bg-white  text-gray-900" />
              <CarouselNext className="bg-primary text-white" />
            </div>
          </div>

          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col gap-6">
                      <Quote className="fill-primary/30 text-primary size-8" />
                      <p className="text-gray-700">{item.feedback}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image width={56} height={56} src={item.image} alt={item.name} />
                          <div>
                            <p className="font-medium text-base">{item.name}</p>
                            <p className="text-gray-400">{item.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} className={`size-5 text-[#FF8A00] fill-[#FF8A00]`} />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}
