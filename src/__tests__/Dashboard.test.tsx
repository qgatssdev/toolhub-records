import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

test("full app rendering/navigating", async () => {
  render(<Dashboard />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Welcome Guest/i)).toBeInTheDocument();
  expect(screen.getByText(/Track, manage and monitor/i)).toBeInTheDocument();
});
