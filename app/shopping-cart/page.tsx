import CartTable from "@/components/shopping-cart/cart-table";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ShoppingCart() {
  return (
    <div className="container py-8 pb-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-center">My Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="border border-gray-100 rounded-[8px] px-2 py-4">
              <CartTable />
            </div>

            <div className="border border-gray-100 rounded-[8px] p-5">
              <div className="flex items-center gap-x-6 justify-between">
                <h4 className="font-medium">Coupon Code</h4>

                <div className="flex-1 flex items-center rounded-full overflow-hidden border border-gray-300">
                  <Input
                    placeholder="Enter code"
                    className="flex-grow px-4 h-auto py-2 text-gray-700 placeholder-gray-400 focus:outline-none border-none"
                  />
                  <Button variant="secondary" className="rounded-full bg-gray-800 text-white">
                    Apply Coupon
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 border border-gray-100 rounded-[8px] p-6 h-fit">
            <h4 className="font-medium">Cart Total</h4>
            <ul className="divide-y">
              <li className="flex justify-between py-3">
                <p>Subtotal:</p>
                <p className="font-medium">$84.00</p>
              </li>
              <li className="flex justify-between py-3">
                <p>Shipping:</p>
                <p className="font-medium">Free</p>
              </li>
              <li className="flex justify-between py-3">
                <p>Total:</p>
                <p className="font-semibold text-base">$84.00</p>
              </li>
            </ul>
            <Link href="/shopping-cart/checkout" className={cn(buttonVariants(), "w-full rounded-full h-12.5")}>
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
