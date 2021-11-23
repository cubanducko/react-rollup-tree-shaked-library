import { useRed } from "@hooks";

describe("useRed.hook", () => {
  it("returns red hex code", () => {
    expect(useRed()).toBe("#FF0000");
  });
});
