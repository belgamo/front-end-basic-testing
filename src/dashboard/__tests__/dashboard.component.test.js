import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../dashboard.component";

describe("Dashboard component", () => {
  it("increments save counter", () => {
    render(<Dashboard />);

    screen.getByText("You've clicked on save button 0 times!");

    fireEvent.click(screen.getByText("Save"));

    screen.getByText("You've clicked on save button 1 times!");
  });

  it("increments delete counter", () => {
    render(<Dashboard />);

    screen.getByText("You've clicked on delete button 0 times!");

    fireEvent.click(screen.getByText("Delete"));

    screen.getByText("You've clicked on delete button 1 times!");
  });
});
