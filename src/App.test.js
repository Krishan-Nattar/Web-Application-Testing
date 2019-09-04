import React from "react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

describe("<App />", () => {
  it("renders without crashing", () => {
    rtl.render(<App />);
  });

  it("Resets strikes after 3 strikes", () => {
    const wrapper = rtl.render(<App />);
    const strikeButton = wrapper.getByText(/^strike$/i);
    wrapper.getByText(/strikes: 0/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 1/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 2/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 0/i);
  });

  it("Resets balls after 4 balls", () => {
    const wrapper = rtl.render(<App />);
    const ballButton = wrapper.getByText(/^ball$/i);
    wrapper.getByText(/balls: 0/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 1/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 2/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 3/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 0/i);
  });

  it("Resets strikes after 4 balls", () => {
    const wrapper = rtl.render(<App />);
    const strikeButton = wrapper.getByText(/^strike$/i);
    const ballButton = wrapper.getByText(/^ball$/i);

    wrapper.getByText(/balls: 0/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 1/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 2/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 3/i);

    wrapper.getByText(/strikes: 0/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 1/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 2/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 0/i);
    wrapper.getByText(/balls: 0/i);
  });

  it("Resets balls after 3 strikes", () => {
    const wrapper = rtl.render(<App />);
    const strikeButton = wrapper.getByText(/^strike$/i);
    const ballButton = wrapper.getByText(/^ball$/i);

    wrapper.getByText(/strikes: 0/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 1/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 2/i);
    wrapper.getByText(/balls: 0/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 1/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 2/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 3/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 0/i);
    wrapper.getByText(/strikes: 0/i);
  });

  it("Foul increments strikes up to 2, but not further", () => {
    const wrapper = rtl.render(<App />);
    const foulButton = wrapper.getByText(/^foul$/i);

    wrapper.getByText(/strikes: 0/i);
    rtl.fireEvent.click(foulButton);
    wrapper.getByText(/strikes: 1/i);
    rtl.fireEvent.click(foulButton);
    wrapper.getByText(/strikes: 2/i);
    rtl.fireEvent.click(foulButton);
    wrapper.getByText(/strikes: 2/i);
  });

  it("A hit resets strikes", () => {
    const wrapper = rtl.render(<App />);
    const strikeButton = wrapper.getByText(/^strike$/i);
    const hitButton = wrapper.getByText(/^hit$/i);

    wrapper.getByText(/strikes: 0/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 1/i);
    rtl.fireEvent.click(strikeButton);
    wrapper.getByText(/strikes: 2/i);
    rtl.fireEvent.click(hitButton);
    wrapper.getByText(/strikes: 0/i);
  });

  it("A hit resets balls", () => {
    const wrapper = rtl.render(<App />);
    const ballButton = wrapper.getByText(/^ball$/i);
    const hitButton = wrapper.getByText(/^hit$/i);
    
    wrapper.getByText(/balls: 0/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 1/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 2/i);
    rtl.fireEvent.click(ballButton);
    wrapper.getByText(/balls: 3/i);
    rtl.fireEvent.click(hitButton);
    wrapper.getByText(/balls: 0/i);
  });
});
