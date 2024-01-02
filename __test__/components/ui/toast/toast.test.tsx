/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle} from "@radix-ui/react-toast";


describe("Toast component", () => {
  it("renders without crashing", () => {
    render(<ToastProvider><Toast /></ToastProvider>);
  });



  it("renders ToastAction without crashing", () => {
    render(<ToastAction />);
  });

  it("renders ToastClose without crashing", () => {
    render(<ToastClose />);
  });

  it("renders ToastTitle without crashing", () => {
    render(<ToastTitle />);
  });

  it("renders ToastDescription without crashing", () => {
    render(<ToastDescription />);
  });

  
  it("renders ToastAction without crashing", () => {
    render(<ToastAction />);
  });

  it("renders ToastClose without crashing", () => {
    render(<ToastClose />);
  });

  it("renders ToastTitle without crashing", () => {
    render(<ToastTitle />);
  });

  it("renders ToastDescription without crashing", () => {
    render(<ToastDescription />);
  });
});