/*
 * @Author: fantiga
 * @Date: 2023-02-08 22:29:17
 * @LastEditTime: 2023-02-11 22:03:20
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

export type TClinician = {
  username: string;
  role: string;
  title?: string;
  firstName: string;
  preferredName?: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
};

export interface IPatientList {
  id: string;
  name: string;
}

export type TPatientList = {
  patients: IPatientList[];
};

export type TPatient = {
  title?: string;
  firstName: string;
  preferredName?: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
  age: number;
  sex: "Male" | "Female" | "Unknown" | "Indeterminate";
};

export interface IPatientDetail {
  sessionToken: string;
  patientId: string;
}

export interface IErrorResponses {
  httpStatusCode: number;
  errorMessage: string;
}

export interface IClinicianDetails {
  clinicianDetails: TClinician;
}
