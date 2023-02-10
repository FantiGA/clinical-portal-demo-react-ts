/*
 * @Author: fantiga
 * @Date: 2023-02-08 22:29:17
 * @LastEditTime: 2023-02-09 22:19:05
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/utils/interface.ts
 */

import { Dispatch, SetStateAction } from "react";

export interface ISession {
  sessionToken: string;
  setSessionToken: Dispatch<SetStateAction<string>>;
}

export type TLoginForm = {
  userName: string;
  passWord: string;
};
