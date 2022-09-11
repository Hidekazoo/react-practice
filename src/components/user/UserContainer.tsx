import { FC } from "react";
import { useUserInfo } from "./useUserInfo";
import { UserInfo } from "./UserInfo";
import { useUserGateway } from "./useUserGateway";

export const UserInfoContainer: FC = () => {
  const userGateway = useUserGateway();
  const { user } = useUserInfo(userGateway);

  return <UserInfo user={user} />;
};
