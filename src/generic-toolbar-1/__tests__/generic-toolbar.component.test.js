import { render, screen, fireEvent } from "@testing-library/react";
import GenericToolbar from "../generic-toolbar.component";

describe("Generic Toolbar component", () => {
  describe("when onDelete callback is present", () => {
    it("renders delete button", () => {
      const onDelete = jest.fn();
      render(<GenericToolbar onDelete={onDelete} />);

      screen.getByText("Delete");
    });

    it("calls onDelete callback", () => {
      const onDelete = jest.fn();
      render(<GenericToolbar onDelete={onDelete} />);

      fireEvent.click(screen.getByText("Delete"));

      expect(onDelete).toHaveBeenCalled();
    });
  });

  describe("when onSave callback is present", () => {
    it("renders delete button", () => {
      const onSave = jest.fn();
      render(<GenericToolbar onSave={onSave} />);

      screen.getByText("Save");
    });

    it("calls onSave callback", () => {
      const onSave = jest.fn();
      render(<GenericToolbar onSave={onSave} />);

      fireEvent.click(screen.getByText("Save"));

      expect(onSave).toHaveBeenCalled();
    });
  });
});
