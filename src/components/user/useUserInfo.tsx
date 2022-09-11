import { useEffect, useState } from "react";
import { UserInfo } from "./User";
import { UserInputPort } from "./userInputPort";

export const useUserInfo = (userInputPort: UserInputPort) => {
  const [user, setUser] = useState<UserInfo>({ id: "", name: "" });

  useEffect(() => {
    const findUserInfoBy = async () => {
      const userInfo = await userInputPort.findUserInfo();
      setUser({
        id: userInfo.id,
        name: userInfo.name,
      });
    };

    findUserInfoBy();
  }, [userInputPort]);

  return {
    user,
  };
};
