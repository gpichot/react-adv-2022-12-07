import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputControl from "./InputControl";

describe("InputControl", () => {
  it("shows my label and my input", () => {
    render(<InputControl label="Name" name="name" />);

    expect(screen.getByText(/name/i)).toBeVisible();
    expect(screen.getByRole("textbox", { name: /name/i })).toBeVisible();
  });

  it("focus input when click on label", async () => {
    const user = userEvent.setup();

    render(<InputControl label="Name" name="name" />);

    await user.click(screen.getByText(/name/i));

    expect(screen.getByRole("textbox", { name: /name/i })).toHaveFocus();
  });

  it.todo("shows placeholder if no label");
});
