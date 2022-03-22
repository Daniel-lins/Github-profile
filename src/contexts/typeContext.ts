export type UserDataType = {
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

export type RepoListType = {
  name: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
};

export type UserContextType = {
  userData: UserDataType | null;
  getUser: () => void;
  user: string;
  setUser: (newState: string) => void;
  userList: UserDataType[];
  repoList: RepoListType[];
};

export type UserContextProps = {
  children: JSX.Element;
};
