import { LineIcon } from "../icons/line";
import ProductItem from "../product-item";

const featuredProducts = [
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
    price: 14.99,
    rating: 4,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="container py-25 space-y-12.5">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-semibold text-gray-900">Featured Products</h1>
        <LineIcon />
      </div>
      <div className="flex gap-5">
        {featuredProducts.map((product, index) => (
          <ProductItem className="flex-1" key={index} {...product} />
        ))}
      </div>
      <div className="flex gap-5"></div>
    </section>
  );
}
