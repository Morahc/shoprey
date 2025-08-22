import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Hero() {
  return (
    <section>
      <div className="container flex items-center bg-[#EDF2EE] p-25 rounded-[8px] my-6">
        <div className="space-y-2 basis-1/2">
          <p className="text-primary font-medium">Welcome to shopery</p>
          <h1 className="font-semibold text-[72px]">Fresh & Healthy Organic Food</h1>
          <p className="text-lg">Free shipping on all your order. we deliver, you enjoy</p>
          <div className="mb-6">
            <h1 className="w-1/2">
              Sale up to <span className="font-semibold text-[#FF8A00]">30% OFF</span>
            </h1>
            <p className="text-gray-500">Free shipping on all your order. we deliver, you enjoy</p>
          </div>
          <Link
            href="/product-list"
            className={cn(buttonVariants(), "rounded-full h-[51px] text-base font-semibold")}
          >
            Shop now <ArrowRight />
          </Link>
        </div>

        <div className="relative flex-1 h-[500px]">
          <Image
            src="/images/hero-image.png"
            alt="Vegetables"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
