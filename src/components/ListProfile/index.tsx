import { useContext } from "react";
import { List, Container, Title } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { CardProfile } from "../../components/CardProfile";

export const ListProfile = () => {
  const { user, userList } = useContext(UserContext);

  return (
    <Container>
      <Title>
        <h3> Pesquisados recentemente</h3>{" "}
      </Title>
      <div></div>
      <List>
        <div>
          {userList.map((c) => (
            <CardProfile
              key={c.id}
              name={c.name}
              login={c.login}
              location={c.location}
              avatar_url={c.avatar_url}
              id={c.id}
              user={user}
              followers={""}
              following={""}
              bio={""}
              public_repos={""}
            />
          ))}
        </div>
      </List>
    </Container>
  );
};
