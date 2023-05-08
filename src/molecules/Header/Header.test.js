import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("displays the desktop logo when the screen size is greater than 768px", () => {
    global.innerWidth = 1024;
    render(<Header />);
    const desktopLogo = screen.getByAltText("Desktop Logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("displays the mobile logo when the screen size is less than or equal to 768px", () => {
    global.innerWidth = 640;
    render(<Header />);
    const mobileLogo = screen.getByAltText("Mobile Logo");
    expect(mobileLogo).toBeInTheDocument();
  });

  it("contains a link to the homepage", () => {
    render(<Header />);
    const link = screen.getByRole("link", { href: "/" });
    expect(link).toBeInTheDocument();
  });
});
