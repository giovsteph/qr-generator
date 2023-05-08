import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders three logos", () => {
    render(<Footer />);
    const logos = screen.getAllByAltText(/logo/i);
    expect(logos).toHaveLength(3);
  });
});
