import { render, screen } from "@testing-library/react";
import { Green } from "@components";

describe("Green.component", () => {
  it("renders green", () => {
    render(<Green />);

    expect(screen.getByText("I'm a green component")).toBeInTheDocument();
  });
});
