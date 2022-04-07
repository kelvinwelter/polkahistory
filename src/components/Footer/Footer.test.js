import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import TestWrapper from "../../helpers/TestWrapper";
import Footer from './index';

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

describe('test the Footer component', () => {
    it("should show DOT address when rendered on Polkadot page", () => {
      render(
        <TestWrapper>
          <Footer onPolkadotPage />
        </TestWrapper>,
        container);
      expect(container.textContent).toContain("12ENWcCZ6PsMPMULpYNhoevt2cVQypcR7sBEujzQJovJVdg8")
    });

    it("should show KSM address when rendered on Kusama page", () => {
        render(
            <TestWrapper>
                <Footer />
            </TestWrapper>,
            container
        );
        expect(container.textContent).toContain("DbGed9Qr9Ht9oEftpFb1gpo4B2SMC7Tcx2jhBVwgtMdM77v")
    });
});
