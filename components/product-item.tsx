import { cn, formatter } from "@/lib/utils";
import { Eye, Handbag, Heart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

type ProductItemProps = {
  label: string;
  image: string;
  rating: number;
  price: number;
  outOfStock?: boolean;
  sale?: string;
  size?: "sm" | "md";
  className?: string;
};

export default function ProductItem({
  label,
  price,
  rating,
  outOfStock,
  sale,
  image,
  className,
  size = "md",
}: ProductItemProps) {
  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-shadow duration-300 ease-in-out p-0 overflow-hidden relative",
        className
      )}
    >
      <div className="absolute top-2 right-2 flex flex-col gap-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="outline" className="rounded-full size-fit p-2">
          <Heart />
        </Button>
        <Button variant="outline" className="rounded-full size-fit p-2">
          <Eye />
        </Button>
      </div>

      <div className="absolute flex flex-wrap text-white text-sm z-50 top-2 left-2">
        {outOfStock && <span className="bg-gray-900  mr-2 px-2 py-0.75 rounded">Out of Stock</span>}
        {sale && (
          <span className="bg-[#EA4B48] text-white font-medium mr-2 px-2 py-0.75 rounded">
            {sale}
          </span>
        )}
      </div>

      <CardContent
        className={cn("relative", {
          "h-61.5": size === "sm",
          "h-78": size === "md",
        })}
      >
        <Image src={image} alt={label} fill className="object-contain" />
      </CardContent>
      <CardFooter className="p-4 justify-between gap-4">
        <div>
          <p className="text-gray-700">{label}</p>
          <div className="text-base font-medium text-gray-900">{formatter.format(price)}</div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`size-3 ${
                  i < rating ? "text-[#FF8A00] fill-[#FF8A00]" : "text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        <Button
          variant={"ghost"}
          className="rounded-full size-fit p-3 group-hover:bg-primary group-hover:text-white transition-colors ease-in"
        >
          <Handbag />
        </Button>
      </CardFooter>
    </Card>
  );
}
