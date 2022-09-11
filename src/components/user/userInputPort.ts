import { UserInfo } from "./User";

export interface UserInputPort {
  findUserInfo: () => Promise<UserInfo>;
}
