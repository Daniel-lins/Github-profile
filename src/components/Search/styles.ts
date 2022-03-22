import styled from "styled-components";

export const ContainerInputs = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  flex-direction: column;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 100px;

  .github {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    img {
      width: 80px;
      margin-top: 90px;
    }
  }
  margin-top: 10px;
  h1 {
    color: #fff;
  }
  input {
    width: 300px;
    background-color: #fff;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;

    padding: 20px;
    border-radius: 10px;
    height: 40px;
    margin: 10px;
  }
  button {
    border-radius: 10px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all 0.5s;
  }
  button:hover {
    opacity: 0.7;
  }
`;

export const ContainerResult = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
