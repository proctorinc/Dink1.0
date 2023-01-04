import { describe, it, vi } from "vitest";
import { screen, render } from "@/test-utils.jsx";
import Budgets from "../Budgets";
import { mockBudgets } from "@/__mocks__/mock_features/budgets";

describe("Budgets Route", () => {
  it("renders properly", async () => {
    render(<Budgets />);

    const header = await screen.findByText("Budgets");
    const budgetEntries = await screen.findAllByRole("listitem");

    expect(header).toBeInTheDocument();
    expect(budgetEntries).toHaveLength(mockBudgets.length);
    budgetEntries.forEach((entry, i) => {
      expect(entry).toHaveTextContent(mockBudgets[i].name);
    });
  });
});
