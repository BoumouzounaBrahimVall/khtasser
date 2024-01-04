/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";


describe("MaxWidthWrapper component", () => {
  it("renders without crashing", () => {
    render(<MaxWidthWrapper />);
    
  });

  it("renders MaxWidthWrapper with the provided className", () => {
    const { container } = render(
      <MaxWidthWrapper className="custom-wrapper" />
    );
    expect(container.firstChild).toHaveClass("custom-wrapper");
  });

  it("renders MaxWidthWrapper with the provided children", () => {
    const { getByText } = render(
      <MaxWidthWrapper>
        <div>Child component</div>
      </MaxWidthWrapper>
    );
    expect(getByText("Child component")).toBeInTheDocument();
  });
});