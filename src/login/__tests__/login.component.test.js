import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import LoginComponent from "../login.component";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const mock = new MockAdapter(axios);

const API = "https://dummyapi.io/data/api/user?limit=10";

global.alert = jest.fn();

const setup = (fillEmail = true) => {
  render(<LoginComponent />);

  const input = screen.getByPlaceholderText("Digite seu e-mail");
  if (fillEmail)
    fireEvent.change(input, { target: { value: "user@email.com" } });
  fireEvent.click(screen.getByText("Entrar"));
};

describe("Login component", () => {
  describe("when email is empty", () => {
    it("shows message asking for email", () => {
      setup(false);

      expect(alert).toHaveBeenCalledWith("please type your e-mail");
    });
  });

  describe("when the request failure", () => {
    beforeEach(() => {
      mock.onGet(API).networkError();
    });

    it("shows an error", async () => {
      setup();

      await waitFor(() =>
        expect(alert).toHaveBeenCalledWith("there was an error!")
      );
    });
  });

  describe("when the request is successful", () => {
    describe("when the email exists", () => {
      beforeEach(() => {
        mock.onGet(API).reply(200, { data: [{ email: "user@email.com" }] });
      });

      it("shows welcome message", async () => {
        setup();

        await waitFor(() => expect(alert).toHaveBeenCalledWith("welcome!"));
      });
    });

    describe("when the email is invalid", () => {
      beforeEach(() => {
        mock.onGet(API).reply(200, { data: [{ email: "dummy@email.com" }] });
      });

      it("shows invalid email message", async () => {
        setup();

        await waitFor(() =>
          expect(alert).toHaveBeenCalledWith("invalid e-mail!")
        );
      });
    });
  });
});
