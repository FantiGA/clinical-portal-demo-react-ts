/*
 * @Author: fantiga
 * @Date: 2023-02-08 22:24:05
 * @LastEditTime: 2023-02-08 22:32:08
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Dashboard/index.tsx
 */

import { FC, useEffect } from "react";
import { ISession } from "@utils/interface";

const Dashboard: FC<ISession> = ({ sessionToken, setSessionToken }) => {
  const getClinicianHandler = async () => {
    return await fetch("/clinician-details", {
      method: "GET",
      headers: { Authorization: sessionToken }
    }).then(res => {
      return res.json();
    });
  };

  useEffect(() => {
    getClinicianHandler().then(res => {
      console.log("res", res);
    });
  }, [sessionToken]);

  return (
    <>Dashboard</>
  );
};

export default Dashboard;
