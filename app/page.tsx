import FeaturedProducts from "@/components/home/featured-products";
import Follow from "@/components/home/follow";
import Hero from "@/components/home/hero";
import Testimonial from "@/components/home/testimonial";
import TopCategories from "@/components/home/top-categories";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <FeaturedProducts />
      <TopCategories />
      <Testimonial />
      <Follow />
    </div>
  );
}
