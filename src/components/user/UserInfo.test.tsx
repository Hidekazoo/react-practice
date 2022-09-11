import { render, screen } from "@testing-library/react";
import { UserInfo } from "./UserInfo";

describe("UserInfo", () => {
  test("ユーザー情報が表示される", () => {
    const user = {
      id: "test",
      name: "test user",
    };
    render(<UserInfo user={user} />);
    expect(screen.getByTestId("user-info")).toBeInTheDocument();
    expect(screen.getByTestId("user-id")).toHaveTextContent(user.id);
    expect(screen.getByTestId("user-name")).toHaveTextContent(user.name);
  });
});
