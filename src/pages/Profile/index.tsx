import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import {
  Container,
  ContainerFollow,
  CardProfilie,
  CardRepositorios,
} from "./styles";

export const Profile = () => {
  const { userData, user, userList, repoList } = useContext(UserContext);
  let navigate = useNavigate();

  const HandleBack = () => {
    navigate("/");
  };
  return (
    <Container>
      <CardProfilie>
        <img src={userData?.avatar_url} alt={userData?.name} />
        <h1> {userData?.name}</h1>
        <p>
          <FaUserAlt /> {userData?.login}{" "}
        </p>
        <p>
          <MdLocationOn /> {userData?.location}
        </p>
        <p>{userData?.bio} </p>
        <ContainerFollow>
          <div>
            <p> Seguindo</p>
            <h2>{userData?.following} </h2>
          </div>
          <div>
            <p> Seguidores</p>
            <h2> {userData?.followers} </h2>
          </div>
          <div>
            <p> Repositórios</p>
            <h2>{userData?.public_repos} </h2>
          </div>
        </ContainerFollow>
        <div>
          <button onClick={HandleBack}> voltar </button>
        </div>
      </CardProfilie>

      <CardRepositorios>
        {repoList.slice(0, 5).map((c) => (
          <div key={c.name}>{c.name}</div>
        ))}
      </CardRepositorios>
    </Container>
  );
};
