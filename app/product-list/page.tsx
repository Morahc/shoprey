import { ChevronRight, House, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ProductFilter from "@/components/product-list/product-filter";
import ProductItem from "@/components/product-item";

const crumbs = [
  {
    label: "Category",
  },
  {
    label: "Vegetables",
  },
];

const products = [
  {
    label: "Red Chili",
    price: 14,
    rating: 4,
    image: "/images/red-chilli.png",
  },
  {
    label: "Big Potatos",
    price: 14,
    rating: 4,
    image: "/images/big-potatoes.png",
  },
  {
    label: "Chanise Cabbage",
    price: 14,
    rating: 4,
    image: "/images/chanise-cabbage.png",
  },
  {
    label: "Ladies Finger",
    price: 14,
    rating: 4,
    image: "/images/ladies-fingers.png",
  },
  {
    label: "Red Tomato",
    price: 14,
    rating: 4,
    image: "/images/red-tomato.png",
  },
  {
    label: "Eggplant",
    price: 14,
    rating: 4,
    image: "/images/eggplant.png",
    outOfStock: true,
  },
  {
    label: "Fresh Cauliflower",
    price: 14,
    rating: 4,
    image: "/images/fresh-cauliflower.png",
  },
  {
    label: "Green Apple",
    price: 14,
    rating: 4,
    image: "/images/green-apple.png",
    sale: "20% OFF",
  },
  {
    label: "Fresh Mango",
    price: 14,
    rating: 4,
    image: "/images/fresh-mango.png",
  },
  {
    label: "Green Capsicum",
    price: 14,
    rating: 4,
    image: "/images/green-capsicum.png",
  },
  {
    label: "Green Chili",
    price: 14,
    rating: 4,
    image: "/images/green-chilli.png",
  },
  {
    label: "Green Cucumber",
    price: 14,
    rating: 4,
    image: "/images/green-cucumber.png",
  },
];
export default function ProductList() {
  return (
    <div className="py-6">
      <div className="container space-y-6">
        <ol className="flex items-center gap-x-3">
          <li>
            <Link href="/">
              <House className="size-6 text-gray-500" />
            </Link>
          </li>

          {crumbs.map((crumb, index) => (
            <li key={crumb.label} className="flex items-center gap-x-3">
              <ChevronRight className="text-gray-500" />
              {index === crumbs.length - 1 ? (
                <span className="text-primary capitalize">{crumb.label}</span>
              ) : (
                <p className="text-gray-600 capitalize hover:text-primary">{crumb.label}</p>
              )}
            </li>
          ))}
        </ol>

        <div className="relative h-[358px] w-full rounded-[10px] overflow-hidden">
          <Image src="/images/bannar.png" className="object-cover" fill alt="Shop Banner" />
        </div>

        <ProductFilter />

        <div className="border-y py-4">
          <div className="container flex items-center justify-between">
            <div className="flex gap-6">
              <p className="text-gray-400">Active Filters:</p>
              <p className="flex items-center gap-2 text-gray-900 font-medium">
                Wing Chair <X className="text-gray-400 cursor-pointer" />
              </p>
              <p className="flex items-center gap-2 text-gray-900 font-medium">
                Min $300 - Max 500 <X className="text-gray-400 cursor-pointer" />
              </p>
            </div>
            <p>
              <span className="font-medium">2,547</span> Results found.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductItem key={product.label} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
