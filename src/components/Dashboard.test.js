import React from "react";
import Dashboard from "./Dashboard";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

// afterEach(rtl.cleanup);

describe("<Dashboard />", () => {


  it("Renders without crashing", () => {
    rtl.render(<Dashboard />);
  });

  it("Handles click on strike button", () => {
    const wrapper = rtl.render(<Dashboard handleStrike={()=>console.log('strike button clicked')} />);
    const button = wrapper.getByText(/strike/i);
    expect(button).toBeInTheDocument();
    rtl.fireEvent.click(button);
  });


});
