import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Leaderboard from "../pages/Leaderboard/Leaderboard";

test("full app rendering/navigating", async () => {
  render(<Leaderboard />);

  expect(
    screen.getByText(/Monitor overall performance of all Tools/i)
  ).toBeInTheDocument();
});
