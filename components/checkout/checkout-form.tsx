"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Card } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastname: z.string().min(2, "Last name must be at least 2 characters").max(50),
  companyName: z.string().optional(),
  address: z.string().min(5, "Address is required"),
  country: z.string().min(2, "Country is required"),
  state: z.string().min(2, "State is required"),
  zipcode: z.string().regex(/^\d{4,10}$/, "Enter a valid zip/postal code"),
  email: z.email("Enter a valid email"),
  phone: z.string().regex(/^\+?[0-9\s\-]{7,15}$/, "Enter a valid phone number"),
  shipTodifferentAddress: z.boolean(),
  orderNotes: z.string().max(500).optional(),
  paymentMethod: z.enum(["cash", "paypal", "amazon"], {
    error: "You need to select a payment method.",
  }),
});

export default function CheckoutForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      companyName: "",
      address: "",
      country: "",
      state: "",
      zipcode: "",
      email: "",
      phone: "",
      shipTodifferentAddress: false,
      orderNotes: "",
      paymentMethod: "cash",
    },
  });

  function onSubmit() {
    alert("Order placed!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h3>Billing Information</h3>

          <div className="grid lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Your street Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country / Region</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>States</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zipcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Zip Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="shipTodifferentAddress"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm text-gray-700">
                    Ship to a different address
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-5">
            <h3>Additional Info</h3>
            <FormField
              control={form.control}
              name="orderNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Notes about your order, e.g. special notes for delivery"
                      className="resize-none h-25"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Card className="space-y-6 h-fit">
          <div className="space-y-3">
            <h4 className="font-medium">Order Summary</h4>
            <ul>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"/images/green-capsicum.png"}
                    alt="Green Capsicum"
                    width={60}
                    height={60}
                  />
                  <p>Green Capsicum x5</p>
                </div>
                <p className="font-medium">$70.00</p>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={"/images/red-capsicum.png"}
                    alt="Red Capsicum"
                    width={60}
                    height={60}
                  />
                  <p>Red Capsicum x1</p>
                </div>
                <p className="font-medium">$70.00</p>
              </li>
            </ul>
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
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Payment Method</h4>
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col"
                    >
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="cash" />
                        </FormControl>
                        <FormLabel className="font-normal">Cash on Delivery</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="paypal" />
                        </FormControl>
                        <FormLabel className="font-normal">Paypal</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="amazon" />
                        </FormControl>
                        <FormLabel className="font-normal">Amazon Pay</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="w-full rounded-full" type="submit">
            Place Order
          </Button>
        </Card>
      </form>
    </Form>
  );
}
