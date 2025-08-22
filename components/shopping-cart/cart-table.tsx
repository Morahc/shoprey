import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { X } from "lucide-react";
import Image from "next/image";

const products = [
  {
    name: "Green Capsicum",
    price: 14,
    quantity: 5,
    subtotal: 70,
    images: "/images/green-capsicum.png",
  },
  {
    name: "Red Capsicum",
    price: 14,
    quantity: 5,
    subtotal: 70,
    images: "/images/red-capsicum.png",
  },
];

export default function CartTable() {
  return (
    <Table className="b">
      <TableHeader className="font-medium text-sm text-gray-500 uppercase">
        <TableRow>
          <TableHead className="">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>SubTotal</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="p-5">
        {products.map((product) => (
          <TableRow key={product.name} className="text-base p-5">
            <TableCell className="flex gap-4 items-center">
              <Image src={product.images} alt={product.name} width={100} height={100} />
              {product.name}
            </TableCell>
            <TableCell className="font-medium">{product.price}</TableCell>
            <TableCell>
              <div className="flex items-center justify-start md:justify-center gap-2 border rounded-full p-2 w-fit">
                <Button variant={"secondary"} className="size-8 p-0 rounded-full">
                  −
                </Button>
                <span>{product.quantity}</span>
                <Button variant={"secondary"} className="size-8 p-0 rounded-full">
                  +
                </Button>
              </div>
            </TableCell>
            <TableCell>{product.subtotal}</TableCell>
            <TableCell>
              <Button variant="outline" className="rounded-full size-6">
                <X />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <div className="flex justify-between">
              <Link className={buttonVariants({ variant: "secondary" })} href="/">
                Return to shop
              </Link>
              <Button variant="secondary">Update Cart</Button>
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
