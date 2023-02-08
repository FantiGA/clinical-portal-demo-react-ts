/*
 * @Author: fantiga
 * @Date: 2023-02-04 23:03:29
 * @LastEditTime: 2023-02-08 22:33:03
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/App.tsx
 */

import { FC, useState } from "react";
import Container from "@mui/material/Container";
import fetchMock from "fetch-mock";
import initFetchMock from "./api/initFetchMock";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Dashboard from "@components/Dashboard";
import Login from "@components/Login";

fetchMock.config.overwriteRoutes = true;

const App: FC = () => {
  const [sessionToken, setSessionToken] = useState<string>("");
  initFetchMock(fetchMock);

  return (
    <Container maxWidth="sm" >
      {
        sessionToken === ""
          ?
          <Login sessionToken={sessionToken} setSessionToken={setSessionToken} />
          :
          <Dashboard sessionToken={sessionToken} setSessionToken={setSessionToken} />
      }
    </Container >
  );
};

export default App;
1;
