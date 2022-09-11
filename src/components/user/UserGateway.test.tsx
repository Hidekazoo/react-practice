import { renderHook } from "@testing-library/react";
import { UserContext } from "./UserContext";
import { useUserGateway } from "./useUserGateway";

const { Provider } = UserContext;
const USER_ID = "test";
const USER_NAME = "test name";

describe("UserGateway", () => {
  test("findUserInfoBy", async () => {
    const userInfo = {
      id: USER_ID,
      name: USER_NAME,
    };
    const wrapper = ({ children }: any) => (
      <Provider
        value={{
          user: userInfo,
        }}
      >
        {children}
      </Provider>
    );

    const { result } = renderHook(() => useUserGateway(), { wrapper });
    const actual = await result.current.findUserInfo();
    expect(actual).toEqual({
      ...userInfo,
    });
  });
});
