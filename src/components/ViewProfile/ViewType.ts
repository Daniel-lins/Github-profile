export type ProfileType = {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  id: string;
  followers: string;
  following: string;
  bio: string;
  public_repos: string;
};

export type RepoListType = {
  name: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
};
