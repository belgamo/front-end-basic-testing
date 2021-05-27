// generic-toolbar.test.js
import { getActionLabel } from "../generic-toolbar.helpers";

describe("Generic Toolbar helpers", () => {
  describe("#getActionLabel", () => {
    describe("when entity or method are undefined", () => {
      it("returns Save", () => {
        expect(getActionLabel()).toBe("Save");
      });
    });

    describe("when method is update", () => {
      it("returns Update entity name", () => {
        expect(getActionLabel("category", 2)).toBe("Update category");
      });
    });

    describe("when method is create", () => {
      it("returns Update entity name", () => {
        expect(getActionLabel("employee", 1)).toBe("Create employee");
      });
    });
  });
});
