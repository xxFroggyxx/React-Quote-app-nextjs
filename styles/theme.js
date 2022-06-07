import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    white: "#FFFFFF",
    gold: "#ffd700",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
