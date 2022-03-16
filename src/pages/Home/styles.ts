import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  text-align: center;
  padding: 10px;
  color: #191b1b;
  margin-right: 30px;
  margin-bottom: -110px;
`;
export const List = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding-top: 20px;
  align-items: center;


  padding: 30px;
  margin-top: 100px;
  overflow: scroll;
  overflow-x: hidden;

  margin-bottom: 20px;
  background-color: transparent;
 
  }
  /* color: #fff; */
  ::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment  {
	display: none;
}

::-webkit-scrollbar-track-piece  {
	background-color: #1E262A;
	-webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
	background-color: #206071;
	-webkit-border-radius: 6px;
}

  .RecenteUser {
    display: flex;
    width: 580px;
    justify-content: flex-start;
    margin: 20px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    height: 120px;
    p {
      padding: 5px;
    }
    span {
      font-weight: bold;
    }
    img {
      width: 80px;
      padding: 10px;
      border-radius: 50%;
      padding-right: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  
`;

export const CardAplication = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
  width: 1000px;
  border-radius: 10px;
  height: 550px;
  background-color: #babbbd;
`;
