import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
// import grey from '@mui/material/colors/grey';

let theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: red[50],
      contrastText: red[900],
    },
  },
});

export default theme;
