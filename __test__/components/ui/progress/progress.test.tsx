/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { Progress } from "@radix-ui/react-progress";


describe("Progress component", () => {
  it("renders without crashing", () => {
    render(<Progress />);
  });

  it("renders with the provided className", () => {
    const { container } = render(<Progress className="custom-progress" />);
    expect(container.firstChild).toHaveClass("custom-progress");
  });

});