import React from "react";

export interface User {
  id: string;
  name: string;
}

interface IUserContext {
  user: User;
}

export const UserContext = React.createContext<IUserContext | null>(null);
const { Provider } = UserContext;
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const user = {
    id: "userid",
    name: "username",
  };
  return <Provider value={{ user }}>{children}</Provider>;
};
