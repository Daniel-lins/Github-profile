import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

*{

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

  

  font-family: 'Marvel', sans-serif;
  a { text-decoration: none;
      }



}

body {
  background: linear-gradient(90deg, rgba(125,150,175,1) 0%, rgba(52,173,159,1) 0%, rgba(19,84,105,1) 0%, rgba(83,144,145,1) 48%, rgba(19,84,105,1) 100%);

  ::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

  ::-webkit-scrollbar-thumb:vertical {
	background-color: #206071;

}

::-webkit-scrollbar-track-piece  {
	background-color: #1E262A;
	
}


}
`;
