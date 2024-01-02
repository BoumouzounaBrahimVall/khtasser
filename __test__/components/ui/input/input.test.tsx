/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "@/components/ui/input";


describe("Input component", () => {
  it("renders without crashing", () => {
    render(<Input />);
  });

  it("renders with the provided className", () => {
    const { container } = render(<Input className="custom-input" />);
    expect(container.firstChild).toHaveClass("custom-input");
  });

  it("renders with the provided type", () => {
    const { container } = render(<Input type="password" />);
    expect(container.firstChild).toHaveAttribute("type", "password");
  });

  it("calls the onChange callback when input value changes", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Input onChange={handleChange} />);
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});