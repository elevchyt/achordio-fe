import { createContext, ReactNode, useState } from "react";

export type UserContextType = {
  username: string;
  rating: number;
  avatar: string;
  setRating: (rating: number) => void;
  setUsername: (username: string) => void;
  setAvatar: (avatar: string) => void;
};

export const UserContext = createContext<UserContextType>({
  username: "",
  rating: 0,
  avatar: "",
  setRating: () => {},
  setUsername: () => {},
  setAvatar: () => {},
});

type ProviderPropsType = {
  children: ReactNode;
};

const UserContextProvider = ({ children }: ProviderPropsType) => {
  const [username, setUsername] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [avatar, setAvatar] = useState<string>("");

  const contextValue = {
    username,
    rating,
    avatar,
    setRating,
    setUsername,
    setAvatar,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
