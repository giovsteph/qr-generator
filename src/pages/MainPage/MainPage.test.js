import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";

describe("MainPage component", () => {
  test("renders the input and button elements", () => {
    render(<MainPage />);
    const inputElement = screen.getByPlaceholderText(
      "Enter your text or url here"
    );
    const buttonElement = screen.getByRole("button", {
      name: /download qr code/i,
    });
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
