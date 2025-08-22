import Image from "next/image";
import { EcobazarIcon } from "../icons/ecobazar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FacebookIcon } from "../icons/facebook";
import { TwitterIcon } from "../icons/twitter";
import { PinterestIcon } from "../icons/pinterest";
import { InstagramIcon } from "../icons/instagram";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white flex flex-col">
      <div className="bg-[#F7F7F7] py-12.5">
        <div className="container flex flex-col lg:flex-row justify-between gap-4 lg:items-center text-gray-900">
          <div className="flex items-center gap-2">
            <EcobazarIcon />
            <h1>Ecobazar</h1>
          </div>

          <div>
            <h3 className="font-medium">Subcribe our Newsletter</h3>
            <p className="text-gray-400">Pellentesque eu nibh eget mauris congue mattis matti.</p>
          </div>

          <div className="flex items-center rounded-full overflow-hidden border border-gray-100 bg-white">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 border-none focus:outline-none"
            />
            <Button className="bg-primary rounded-full">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="container space-y-8 lg:space-y-15">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-19.5 py-8 lg:py-20">
          <div className="space-y-4">
            <h1>About Shopery</h1>
            <p className="text-gray-500">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum
              magna congue nec.
            </p>
            <p className="flex gap-x-4">
              <span className="underline decoration-primary underline-offset-10">
                (219) 555-0114
              </span>
              or
              <span className="underline decoration-primary underline-offset-10">
                Proxy@gmail.com
              </span>
            </p>
          </div>

          <div className="flex gap-19.5 justify-between [&>h5]:text-white">
            <div className="space-y-5">
              <h5 className="whitespace-nowrap">My Account</h5>
              <ul className="space-y-3 text-gray-500 text-sm whitespace-nowrap">
                <li>My Account</li>
                <li>Order History</li>
                <li>Shoping Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Helps</h5>
              <ul className="space-y-3 text-gray-500 text-sm whitespace-nowrap">
                <li>Contact</li>
                <li>Faqs</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Proxy</h5>
              <ul className="space-y-3 text-gray-500 text-sm whitespace-nowrap">
                <li>About</li>
                <li>Shop</li>
                <li>Product</li>
                <li>Track Order</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Categories</h5>
              <ul className="space-y-3 text-gray-500 text-sm whitespace-nowrap">
                <li>Fruit & Vegetables</li>
                <li>Meat & Fish</li>
                <li>Bread & Bakery</li>
                <li>Beauty & Health</li>
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <h5>Download our Mobile App</h5>
            <div className="flex gap-2">
              <Image src={"/images/App store.png"} alt="App Store" width={154} height={58} />
              <Image src={"/images/Google Play.png"} alt="Google Play" width={154} height={58} />
            </div>
          </div>
        </div>

        <div className="py-6 border-t flex flex-col lg:flex-row gap-6 justify-between items-center">
          <div className="flex items-center gap-4">
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon />
          </div>

          <p className="text-gray-500">Ecobazar eCommerce © 2021. All Rights Reserved</p>

          <div className="flex items-center gap-2">
            <Image src={"/images/applePay.png"} alt="Apple Pay" height={32} width={45} />
            <Image src={"/images/visa.png"} alt="VIsa" height={32} width={45} />
            <Image src={"/images/discover.png"} alt="Discover Pay" height={32} width={45} />
            <Image src={"/images/mastercard.png"} alt="Mastercard" height={32} width={45} />
            <Image src={"/images/card.png"} alt="Card Pay" height={32} width={45} />
          </div>
        </div>
      </div>
    </footer>
  );
}
