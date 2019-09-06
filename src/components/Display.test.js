import React from "react";
// import ReactDOM from "react-dom";

// import App from "../App";
import Display from "./Display";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

afterEach(rtl.cleanup);
describe("<Display />", () => {
  it("renders without crashing", () => {
    rtl.render(<Display />);
  });

  it('renders the word "Balls"', () => {
    const wrapper = rtl.render(<Display />);
    const balls = wrapper.queryByText(/balls/i);
    expect(balls).toBeInTheDocument();
  });

  it('renders the word "Strikes"', () => {
    const wrapper = rtl.render(<Display />);
    const strikes = wrapper.queryByText(/strikes/i);
    expect(strikes).toBeInTheDocument();
  });

  it('Renders proper numbers sent through for balls', () => {
    const wrapper = rtl.render(<Display balls={2}/>);
    const balls = wrapper.queryByText(/balls: 2/i);
    expect(balls).toBeInTheDocument();
  });

  it('Renders proper numbers sent through for strikes', () => {
    const wrapper = rtl.render(<Display strikes={2}/>);
    const strikes = wrapper.queryByText(/strikes: 2/i);
    expect(strikes).toBeInTheDocument();
  });

  it('Renders proper numbers sent through for strikes and balls', () => {
    const wrapper = rtl.render(<Display strikes={1} balls={1}/>);
    const strikes = wrapper.queryByText(/strikes: 1/i);
    const balls = wrapper.queryByText(/balls: 1/i);
    expect(strikes).toBeInTheDocument();
    expect(balls).toBeInTheDocument();
  });



});
