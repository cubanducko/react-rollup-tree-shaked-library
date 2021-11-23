import { render, screen } from "@testing-library/react";
import { Red } from "@components";

describe("Red.component", () => {
  it("renders red", () => {
    render(<Red />);

    expect(screen.getByText("I'm a red component")).toBeInTheDocument();
  });
});
