/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import renderer from "react-test-renderer";
import Button from ".";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
Enzyme.configure({ adapter: new Adapter() });
// jest.mock("TouchableHighlight", () => {
//   const jestReactNative = require("jest-react-native");
//   return jestReactNative.mockComponent("TouchableHighlight");
// });
describe("<Button />", () => {
  afterEach(cleanup);
  it("matches last snapshot", () => {
    const { getByTestId } = render(
      <Button label="AC" triple listenner={() => jest.fn} />,
    );
    const button = getByTestId("buttonOnly");
    fireEvent(button, "press");
  });
});
