/*
 * @Author: fantiga
 * @Date: 2023-02-04 23:03:01
 * @LastEditTime: 2023-02-05 10:06:29
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/theme.ts
 */
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
