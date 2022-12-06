import { describe, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Funds from "../Funds";
import { BrowserRouter as Router } from "react-router-dom";

const mockedNavigator = vi.fn();
vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Funds Route", () => {
  it("renders funds list", () => {
    render(
      <Router>
        <Funds />
      </Router>
    );
    const fundListLabel = screen.getByRole("heading", {
      name: /funds:/i,
    });
    expect(fundListLabel).toBeInTheDocument();
  });

  it("renders funds chart", () => {
    render(
      <Router>
        <Funds />
      </Router>
    );

    const fundsChart = screen.getByRole("heading", {
      name: /funds chart/i,
    });

    expect(fundsChart).toBeInTheDocument();
  });

  it("renders create fund button", () => {
    render(
      <Router>
        <Funds />
      </Router>
    );

    const createFundButton = screen.getByRole("button", {
      name: /new fund/i,
    });

    expect(createFundButton).toBeInTheDocument();
  });

  it("create fund button navigates to create fund page", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Funds />
      </Router>
    );

    const createFundButton = screen.getByRole("button", {
      name: /new fund/i,
    });

    await user.click(createFundButton);

    expect(mockedNavigator).toHaveBeenCalledWith("/funds/create");
  });
});
