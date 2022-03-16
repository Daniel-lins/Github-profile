import { Container, Title } from "./styles";

import { Search } from "../../components/Search";
import { ListProfile } from "../../components/ListProfile";

export const Home = () => {
  return (
    <Container>
      <Search />

      <Title>
        <h3> Pesquisados recentemente</h3>{" "}
      </Title>
      <div></div>
      <ListProfile />
    </Container>
  );
};
