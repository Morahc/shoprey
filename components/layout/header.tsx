import { Handbag, Heart, MapPin, PhoneCall, Search } from "lucide-react";
import { EcobazarIcon } from "../icons/ecobazar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center">
        <p className="text-sm text-gray-300 py-3 flex items-center gap-2">
          <MapPin />
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </div>
      <hr />

      <div className="py-6 flex justify-between items-center container">
        <Link href={"/"} className="flex items-center gap-2">
          <EcobazarIcon />
          <h1>Ecobazar</h1>
        </Link>

        <div className="pl-2 flex items-center rounded-[6px] overflow-hidden border border-gray-100 bg-white">
          <Search className="size-10" />
          <Input
            placeholder="Search"
            className="flex-grow px-4 h-auto py-2 text-gray-700 placeholder-gray-400 border-none focus:outline-none"
          />
          <Button className="bg-primary rounded-[6px]">Search</Button>
        </div>

        <div className="flex items-center gap-4">
          <Heart /> |{" "}
          <div className="flex items-center gap-x-3">
            <Link href={"/shopping-cart"} className="flex items-center gap-1">
              <Handbag />
            </Link>
            <div>
              <p className="text-[11px] text-gray-700">Shopping cart:</p>
              <span className="font-medium text-sm text-gray-900">$57.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container flex justify-between">
          <nav>
            <ul className="flex gap-x-8 font-medium text-gray-400">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/product-list"}>Shop</Link>
              </li>
              <li>Pages</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <p className="flex font-medium gap-2 items-center text-white">
            <PhoneCall />
            (219) 555-0114
          </p>
        </div>
      </div>
    </header>
  );
}
