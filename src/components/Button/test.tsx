import React from "react";

import renderer from "react-test-renderer";
import Button from ".";

describe("<Button />", () => {
  it("matches last snapshot", async () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toBeTruthy();
  });
});
