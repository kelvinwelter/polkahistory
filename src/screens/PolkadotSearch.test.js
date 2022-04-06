import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import TestWrapper from "../helpers/TestWrapper";
import PolkadotSearch from './PolkadotSearch';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with Polkadot texts", () => {
    render(
      <TestWrapper>
        <PolkadotSearch />
      </TestWrapper>,
      container);
    expect(container.textContent).toContain("Know your account balance on any date")
});
