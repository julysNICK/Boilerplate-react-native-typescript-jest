import React from "react";

import renderer from "react-test-renderer";
import Display from ".";

describe("<Display />", () => {
  it("matches last snapshot", async () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toBeTruthy();
  });
});
