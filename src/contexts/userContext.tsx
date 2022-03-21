import { createContext, useState, useEffect } from "react";
import { getUserData, getRepoData } from "../services/api";
type UserDataType = {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  id: string;
  followers: string;
  following: string;
  public_repos: string;
  bio: string;
};

type RepoListType = {
  name: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
};

type UserContextType = {
  userData: UserDataType | null;
  getUser: () => void;
  user: string;
  setUser: (newState: string) => void;
  userList: UserDataType[];
  repoList: RepoListType[];
};
type UserContextProps = {
  children: JSX.Element;
};

const initialValue = {
  userData: null,
  setUserData: () => {},
  repoList: [],
  setRepoList: () => {},
  getUser: () => {},
  user: "",
  setUser: () => {},
  userList: [],
};
export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userData, setUserData] = useState<UserDataType | null>(
    initialValue.userData
  );
  const [userList, setUserList] = useState<UserDataType[]>(
    initialValue.userList
  );
  const [user, setUser] = useState(initialValue.user);
  const [repoList, setRepoList] = useState<RepoListType[]>(
    initialValue.repoList
  );

  const getUser = async () => {
    try {
      const data = await getUserData(user);

      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRepo = async () => {
    try {
      const data = await getRepoData(user);
      setRepoList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    {
      userData && setUserList([userData, ...userList]);
    }
  }, [userData]);

  return (
    <UserContext.Provider
      value={{
        getUser,
        setUser,
        user,
        userData,
        userList,
        repoList,
      }}
    >
      {" "}
      {children}
    </UserContext.Provider>
  );
};
