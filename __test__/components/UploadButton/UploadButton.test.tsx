/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UploadButton from "@/components/UploadButton";


describe("UploadButton component", () => {
  it("renders without crashing", () => {
    render(<UploadButton />);
  });

  /*it("opens the dialog when the button is clicked", () => {
    const { getByText } = render(<UploadButton />);
    fireEvent.click(getByText("Upload PDF"));
    expect(getByText("Click to upload or drag and drop")).toBeInTheDocument();
  });

  it("closes the dialog when the dialog trigger is clicked", () => {
    const { getByText, queryByText } = render(<UploadButton />);
    fireEvent.click(getByText("Upload PDF"));
    fireEvent.click(getByText("Cancel"));
    expect(queryByText("Click to upload or drag and drop")).not.toBeInTheDocument();
  });

  it("displays the selected file name in the dialog", () => {
    const { getByText, getByLabelText } = render(<UploadButton />);
    fireEvent.click(getByLabelText("dropzone-file"), { target: { files: [new File(["pdf content"], "test.pdf")] } });
    expect(getByText("test.pdf")).toBeInTheDocument();
  });*/
});