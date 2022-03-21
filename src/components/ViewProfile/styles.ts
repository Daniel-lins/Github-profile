import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button {
    cursor: pointer;
    position: fixed;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    left: 0;
    top: 0;

    @media (max-width: 688px) {
      position: relative;
    }
  }
`;

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px;

  @media (max-width: 688px) {
    max-width: 350px;
    margin-left: 20px;
  }
  img {
    width: 200px;
    border-radius: 50%;
    margin: 5px;
  }

  .FollowContainer {
    display: flex;
    justify-content: center;
    padding: 10px;
    font-weight: bold;

    div {
      padding: 10px;
    }
  }
`;

export const RepoList = styled.div`
  display: flex;
  width: 800px;
  height: 300px;
  border-radius: 10px;
  background-color: transparent;
  overflow: scroll;
  padding: 20px;

  @media (max-width: 688px) {
    /* max-width: 350px;
    margin-left: 20px; */
  }
  ::-webkit-scrollbar {
    overflow-y: hidden;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #1e262a;

    cursor: pointer;
  }

  ::-webkit-scrollbar-track-piece:vertical {
    background-color: transparent;

    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: #206071;
    -webkit-border-radius: 6px;
    cursor: pointer;
  }

  .DivRepo {
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;
    width: 300px;
    height: 250px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #30363d;
    background-color: transparent;
    margin: 5px;

    div {
      display: flex;
      h3 {
        font-weight: bold;
        a {
          color: black;
        }
      }
    }

    p {
      padding: 5px;
    }
  }
`;

export const ContainerList = styled.div``;
