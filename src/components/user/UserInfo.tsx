import { FC } from "react";

export interface IUserInfoProps {
  user: {
    id: String;
    name: String;
  };
}

export const UserInfo: FC<IUserInfoProps> = ({ user }) => {
  return (
    <div data-testid="user-info">
      <div data-testid="user-id">{user.id}</div>
      <div data-testid="user-name">{user.name}</div>
    </div>
  );
};
