import { describe, it, expect } from "vitest";
import { formatter } from "@/lib/utils";

describe("ProductItem", () => {
  it("should return decimal", () => {
    expect(formatter.format(120)).toBe("$120.00");
  });
  it("should return decimal", () => {
    expect(formatter.format(120.99)).toBe("$120.99");
  });
});
