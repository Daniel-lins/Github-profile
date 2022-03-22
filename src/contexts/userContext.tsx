import { createContext, useState, useEffect } from "react";
import { getUserData, getRepoData } from "../services/api";
import {
  UserDataType,
  RepoListType,
  UserContextType,
  UserContextProps,
} from "./typeContext";

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
