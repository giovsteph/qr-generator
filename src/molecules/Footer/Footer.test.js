import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders a paragraph of text", () => {
    render(<Footer />);
    const paragraph = screen.getByText(/Lorem ipsum/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders three logos", () => {
    render(<Footer />);
    const logos = screen.getAllByAltText(/logo/i);
    expect(logos).toHaveLength(3);
  });
});
