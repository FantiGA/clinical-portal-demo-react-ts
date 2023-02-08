/*
 * @Author: fantiga
 * @Date: 2023-02-08 22:23:13
 * @LastEditTime: 2023-02-08 22:31:51
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Login/index.tsx
 */

import { FC, useEffect } from "react";
import { ISession } from "@utils/interface";

const Login: FC<ISession> = ({ sessionToken, setSessionToken }) => {
  const loginHandler = async () => {
    return await fetch("/login", {
      method: "POST",
      headers: { Authorization: "Basic am9zaHM6am9zaHNfcHc=" }
    }).then(res => {
      return res.json();
    });
  };

  useEffect(() => {
    loginHandler().then(res => {
      setSessionToken(res.sessionToken);
    });
  }, []);

  return (
    <>Login</>
  );
};

export default Login;
