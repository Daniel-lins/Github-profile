import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s;
  transform: scale(0.9);

  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1);
  }
  margin: 10px;

  img {
    width: 80px;
    padding: 10px;
    border-radius: 50%;
    padding-right: 10px;
    margin-right: 10px;
    cursor: pointer;
  }

  p {
    padding: 5px;
  }
  span {
    font-weight: bold;
  }
  .Modal {
    img {
      width: 80px;
    }
  }
  img {
    width: 80px;
  }
`;

export const ContainerModal = styled.div`
  .closeContainer {
    .CloseCard {
      margin-left: 390px;
      cursor: pointer;
    }
  }
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 200px;
    border-radius: 50%;
  }
  h3,
  p {
    padding: 5px;
  }

  .ContainerFoll {
    p {
      font-weight: bold;
    }
    div {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    padding: 20px;
    display: flex;
  }
`;
