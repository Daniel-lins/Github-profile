import { useEffect, useState } from "react";
import { Container, CardProfile, RepoList, ContainerList } from "./styles";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GoRepoPush } from "react-icons/go";

type ProfileType = {
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

type RepoListType = {
  name: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
};

export const ViewProfile = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [repoList, setRepoList] = useState<RepoListType[]>([]);
  const { login } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((r) => r.json())
      .then((result) => {
        setProfile(result);
      });

    fetch(`https://api.github.com/users/${login}/repos`)
      .then((r) => r.json())
      .then((result) => {
        setRepoList(result);
        console.log(repoList);
      });
  }, []);

  return (
    <Container>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <h3> Voltar</h3>
      </button>
      <CardProfile>
        <div>
          <img src={profile?.avatar_url} alt={profile?.name} />
        </div>
        <h1>{profile?.name}</h1>
        <p>
          <FaUserAlt /> {profile?.login}{" "}
        </p>
        <p>
          {profile?.location && <MdLocationOn />}
          {profile?.location}{" "}
        </p>
        <p> {profile?.bio}</p>
        <div className="FollowContainer">
          <div>
            <p>Seguidores</p> <h2> {profile?.followers}</h2>{" "}
          </div>

          <div>
            {" "}
            <p>Seguindo</p>
            <h2> {profile?.following}</h2>{" "}
          </div>
          <div>
            <p>Repositorios</p> <h2> {profile?.public_repos} </h2>{" "}
          </div>
        </div>
      </CardProfile>
      <h1>Repositórios</h1>
      <RepoList>
        {repoList.map((c) => (
          <ContainerList>
            <div className="DivRepo">
              <div>
                <h3>
                  <BsJournalBookmarkFill />
                </h3>
                <h3>
                  <a
                    href={`https://github.com/${login}/${c.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.name}{" "}
                  </a>
                </h3>{" "}
              </div>
              <p>
                {c.language && <MdComputer />}
                {c.language}{" "}
              </p>
              <p>
                {c.description && <MdOutlineDescription />}
                {c.description}{" "}
              </p>
              <p>
                {c.created_at && <BsCalendar2DateFill />} {c.created_at}
              </p>
              <p>
                <GoRepoPush /> Last push: {c.pushed_at}
              </p>
            </div>{" "}
          </ContainerList>
        ))}
      </RepoList>
    </Container>
  );
};
