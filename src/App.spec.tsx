import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

jest.useFakeTimers();
describe("<App />", () => {
  it("matches last snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
