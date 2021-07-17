import React from "react";
import renderer from "react-test-renderer";
import App from "./components/InitialClone";

describe("<App />", () => {
  it("matches last snapshot", async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
