import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: inherit;
  text-decoration: none;
}
*, *::after, *::before {
  box-sizing: border-box;
}
`;

export default GlobalStyles;
