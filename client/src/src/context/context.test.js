import React from "react";
import { shallow } from "enzyme";
import Context from "./context";

describe("Context", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Context />);
    expect(wrapper).toMatchSnapshot();
  });
});
