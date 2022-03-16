import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    border-radius: 50%;
  }
`;

export const ContainerFollow = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;

  div {
    display: flex;
    margin: 10px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;

export const CardProfilie = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  background-color: #1b5c6e;

  border-radius: 10px;

  justify-content: center;
`;

export const CardRepositorios = styled.div`
  padding: 50px;
  width: 100%;
  height: 200px;
  overflow: scroll;

  background-color: #fff;
`;
