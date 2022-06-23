import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

#root {
  /* Colors */

  --background-header: #242426;
  --background-aside: #242426;
  --background-content: #020202;
  --white: #FFF;
  --light-yellow: #F9ECBF;
  --dark-yellow: #FAC300;


}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html, body, #root {
    width: 100vw;
    height: 100vh;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    background-color: transparent;
    

}

*, button, input {
    border: 0;
    outline: 0;
    font-family: "Roboto", sans-serif;
    

}

button {
    cursor: pointer;
}

`;

export default GlobalStyles;
