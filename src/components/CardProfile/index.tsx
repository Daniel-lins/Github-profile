import { useState, useEffect } from "react";
import { ContainerCard } from "./styles";
import { getRepoData } from "../../services/api";
import { MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

type RepoListType = {
  name: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
};
type PropsType = {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  id: string;
  followers: string;
  following: string;
  bio: string;
  public_repos: string;
  user: string;
};
export const CardProfile = ({
  name,
  login,
  location,
  avatar_url,
  id,
  followers,
  following,
  bio,
  public_repos,
  user,
}: PropsType) => {
  const [repoList, setRepoList] = useState<RepoListType[]>([]);
  let navigate = useNavigate();

  const HandleNavigate = () => {
    navigate(`/ViewProfile/${login}`);
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
    getRepo();
  }, []);

  return (
    <ContainerCard>
      <img src={avatar_url} onClick={HandleNavigate} alt={`${name} perfil `} />
      <div>
        <h2> {name}</h2>
        <p>
          {login && <FaUserAlt />} {login}
        </p>{" "}
        <span>
          {location && <MdLocationOn />}
          {location}
        </span>
      </div>
    </ContainerCard>
  );
};
