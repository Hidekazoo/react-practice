import { renderHook, waitFor } from "@testing-library/react";
import { useUserInfo } from "./useUserInfo";
import { UserInputPort } from "./userInputPort";

const USER_ID = "test";
const USER_NAME = "test name";

describe("useUserInfo", () => {
  test("findUserInfoBy", async () => {
    const userInfo = {
      id: USER_ID,
      name: USER_NAME,
    };
    const UserInputPortMock: jest.Mocked<UserInputPort> = {
      findUserInfo: jest.fn().mockResolvedValue(userInfo),
    };
    const { result } = renderHook(() => useUserInfo(UserInputPortMock));

    await waitFor(() => expect(result.current.user?.id).toEqual(USER_ID));
    expect(UserInputPortMock.findUserInfo).toHaveBeenCalledTimes(1);
    expect(result.current.user).toEqual({
      ...userInfo,
    });
  });
});
