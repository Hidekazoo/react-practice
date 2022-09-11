import { useContext } from "react";
import { UserInfo } from "./User";
import { UserContext } from "./UserContext";
import { UserInputPort } from "./userInputPort";

export const useUserGateway = (): UserInputPort => {
  const context = useContext(UserContext);

  const findUserInfo = async () => {
    const user = context!.user;

    const userInfo: UserInfo = {
      id: user.id,
      name: user.name,
    };
    return userInfo;
  };

  return {
    findUserInfo,
  };
};
