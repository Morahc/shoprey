import Hero from "@/components/home/hero";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Home Page", () => {
  it("renders the Hero component", () => {
    render(<Hero />);

    expect(screen.getByText(/Welcome to shopery/i)).toBeDefined();

    expect(screen.getByRole("link", { name: /Shop now/i })).toBeDefined();
  });
});
