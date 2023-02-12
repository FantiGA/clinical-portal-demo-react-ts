/*
 * @Author: fantiga
 * @Date: 2023-02-11 19:11:21
 * @LastEditTime: 2023-02-12 12:51:13
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Dashboard/PatientDetail.tsx
 */

import { FC, useEffect, useState } from "react";
import { IPatientDetail, TPatient } from "@/utils/interface";
import Patient from "./Patient";

const PatientDetail: FC<IPatientDetail> = ({ sessionToken, patientId }) => {
  const [patient, setPatient] = useState<TPatient>();
  const [loading, setLoading] = useState<boolean>(false);

  const getPatientDetails = () => {
    setLoading(true);
    fetch(`/patient-details/${patientId}`, {
      method: "GET",
      headers: { Authorization: sessionToken }
    })
      .then(async res => {
        setPatient(await res.json());
        setLoading(false);
      });
  };

  useEffect(() => {
    getPatientDetails();
  }, []);

  useEffect(() => {
    getPatientDetails();
  }, [patientId]);

  useEffect(() => {
    console.log("patient", patient, patientId);
  }, [patientId]);

  return (
    <>
      {patient && !loading ? <Patient {...patient} /> : <>Loading...</>}
    </>
  );
};

export default PatientDetail;
