import React from "react";
import Dashboard from "./Dashboard";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

describe("<Dashboard />", () => {


  it("Renders without crashing", () => {
    rtl.render(<Dashboard />);
  });

  it("Handles click on strike button", () => {
    let clicked = jest.fn();
    const wrapper = rtl.render(<Dashboard handleStrike={clicked} />);
    const button = wrapper.getByText(/strike/i);
    rtl.fireEvent.click(button);
    expect(clicked).toBeCalled();
  });

  it("Handles click on ball button", () => {
    let clicked = jest.fn();
    const wrapper = rtl.render(<Dashboard handleBall={clicked} />);
    const button = wrapper.getByText(/ball/i);
    rtl.fireEvent.click(button);
    expect(clicked).toBeCalled();
  });
  it("Handles click on foul button", () => {
    let clicked = jest.fn();
    const wrapper = rtl.render(<Dashboard handleFoul={clicked} />);
    const button = wrapper.getByText(/foul/i);
    rtl.fireEvent.click(button);
    expect(clicked).toBeCalled();
  });

  it("Handles click on hit button", () => {
    let clicked = jest.fn();
    const wrapper = rtl.render(<Dashboard handleHit={clicked} />);
    const button = wrapper.getByText(/hit/i);
    rtl.fireEvent.click(button);
    expect(clicked).toBeCalled();
  });


});
