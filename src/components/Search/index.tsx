import { useContext } from "react";
import { ContainerResult, ContainerInputs } from "./styles";
import imageGithub from "../../assets/github_PNG20.png";
import { UserContext } from "../../contexts/userContext";
import { BsSearch } from "react-icons/bs";
import { CardProfile } from "../../components/CardProfile";

export const Search = () => {
  const { userData, user, setUser, getUser } = useContext(UserContext);
  return (
    <ContainerInputs>
      <div>
        <div className="github">
          <img src={imageGithub} alt="github" />
        </div>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="insira aqui o user do seu GitHub "
        />
        <button type="button" onClick={() => getUser()}>
          <BsSearch />
        </button>
      </div>

      {userData && user && (
        <ContainerResult>
          <CardProfile
            name={userData.name}
            login={userData.login}
            location={userData.location}
            avatar_url={userData.avatar_url}
            id={userData.id}
            // followers={userData.followers}
            // following={userData.following}
            // bio={userData.bio}
            // public_repos={userData.public_repos}
            user={user}
            followers={""}
            following={""}
            bio={""}
            public_repos={""}
          />
        </ContainerResult>
      )}
    </ContainerInputs>
  );
};
