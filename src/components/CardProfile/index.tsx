import { useState, useEffect } from "react";
import { ContainerCard } from "./styles";
import { getRepoData } from "../../services/api";
import { MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { RepoListType, PropsType } from "./CardProfileType";
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
    navigate(`/Profile/${login}`);
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
