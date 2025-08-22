import Image from "next/image";
import { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";

import { LineIcon } from "../icons/line";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import ProductItem from "../product-item";

const categories = [
  {
    title: "Vegetables",
    number: 165,
    image: "/images/vegetable.png",
  },
  {
    title: "Fresh Fruit",
    number: 137,
    image: "/images/fruits.png",
  },
  {
    title: "River Fish",
    number: 34,
    image: "/images/fish.png",
  },
  {
    title: "Meat",
    number: 165,
    image: "/images/meat.png",
  },
  {
    title: "Water and Drinks",
    number: 48,
    image: "/images/water-and-drinks.png",
  },
  {
    title: "Snacks",
    number: 165,
    image: "/images/snacks.png",
  },
];

const newestProducts = [
  {
    label: "Green Apple",
    image: "/images/green-apple.png",
    price: 14,
    rating: 4,
  },
  {
    label: "Chanise Cabbage",
    image: "/images/chanise-cabbage.png",
    price: 14,
    rating: 4,
  },
  {
    label: "Green Lettuce",
    image: "/images/green-littuce.png",
    price: 14,
    rating: 4,
  },
  {
    label: "Green Chili",
    image: "/images/green-chilli.png",
    price: 14,
    rating: 4,
  },
  {
    label: "Corn",
    image: "/images/corn.png",
    price: 14,
    rating: 4,
  },
];

export default function TopCategories() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="space-y-25">
          <div className="flex flex-col gap-12.5 items-center">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-semibold text-gray-900">Top Category</h1>
              <LineIcon />
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {categories.map((c) => (
                <CategoryItem key={c.title} {...c} />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 auto-rows-[536px] gap-6 w-full">
            <DealCard className="text-white bg-[url(/images/sale-of-the-month.png)]">
              <p className="font-medium uppercase">Best Deals</p>
              <h1 className="font-semibold">Sale of the Month</h1>
              <Button className="text-primary bg-white">
                Shop Now <ArrowRight />
              </Button>
            </DealCard>

            <DealCard className="text-white bg-[url(/images/low-fat-meat.png)]">
              <p className="font-medium uppercase">85% Fat Free</p>
              <h1 className="font-semibold">Low-Fat Meat</h1>
              <p className="text-xl">
                Started at <span className="text-xl font-semibold text-[#FF8A00]">$79.99</span>
              </p>
              <Button className="text-primary bg-white">
                Shop Now <ArrowRight />
              </Button>
            </DealCard>

            <DealCard className="text-gray-900 bg-[url(/images/fresh-fruit.png)]">
              <p className="font-medium uppercase">Summer Sale</p>
              <h1 className="font-semibold">100% Fresh Fruit</h1>
              <p className="text-lg mb-4">
                Up to{" "}
                <span className="bg-gray-900 px-3 py-2.5 text-[#FCC900] rounded">64% OFF</span>
              </p>
              <Button className="text-primary bg-white">
                Shop Now <ArrowRight />
              </Button>
            </DealCard>
          </div>

          <div className="w-full space-y-12.5">
            <div className="flex items-center justify-between">
              <div className="w-full">
                <h1>Newest Products</h1>
                <LineIcon />
              </div>
              <Button variant={"link"} className="text-primary">
                View All <ArrowRight />
              </Button>
            </div>

            <div className="grid lg:grid-cols-5 gap-5 flex-wrap">
              {newestProducts.map((product) => (
                <ProductItem size="sm" key={product.label} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CategoryItemProps = {
  title: string;
  number: number;
  image: string;
};

function CategoryItem({ title, number, image }: CategoryItemProps) {
  return (
    <div className="py-8 px-15 flex flex-col items-center gap-5 rounded-[6px] border group hover:border-primary">
      <Image src={image} alt={title} width={80} height={80} />
      <div className="text-center">
        <p className="text-lg font-medium group-hover:text-primary text-gray-900">{title}</p>
        <p className="text-gray-500">{number} Products</p>
      </div>
    </div>
  );
}

function DealCard({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 py-[35px] rounded-[12px] bg-cover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
