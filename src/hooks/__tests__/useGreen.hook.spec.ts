import { useGreen } from "@hooks";

describe("useGreen.hook", () => {
  it("returns green hex code", () => {
    expect(useGreen()).toBe("#00FF00");
  });
});
