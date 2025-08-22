import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductItem from "@/components/product-item";

const mockProps = {
  label: "Nike Air Max",
  price: 120,
  rating: 4,
  outOfStock: false,
  sale: "20% OFF",
  image: "/test-shoe.png",
};

describe("ProductItem", () => {
  it("renders product label and price", () => {
    render(<ProductItem {...mockProps} />);
    expect(screen.getByText("Nike Air Max")).toBeInTheDocument();
    expect(screen.getByText(/\$120/)).toBeInTheDocument();
  });

  it("shows sale badge when sale prop is provided", () => {
    render(<ProductItem {...mockProps} />);
    expect(screen.getByText("20% OFF")).toBeInTheDocument();
  });

  it("shows out of stock badge when outOfStock is true", () => {
    render(<ProductItem {...mockProps} outOfStock={true} />);
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });
});
