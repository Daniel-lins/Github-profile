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
  }
`;

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px;
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
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-left: 40px;
  border-radius: 10px;
  background-color: transparent;
  overflow: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  scroll ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #1e262a;
    -webkit-border-radius: 6px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    background-color: #206071;
    -webkit-border-radius: 6px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb:vertical {
    background-color: #206071;
    display: none;
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

export const ContainerList = styled.div`
  width: 100%;
  margin-left: 30px;
`;
