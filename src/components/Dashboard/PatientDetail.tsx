/*
 * @Author: fantiga
 * @Date: 2023-02-11 19:11:21
 * @LastEditTime: 2023-02-12 09:45:20
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Dashboard/PatientDetail.tsx
 */

import { IPatientDetail, TPatient } from "@/utils/interface";
import { Card, CardContent, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

const Patient: FC<TPatient> = ({
  title,
  firstName,
  preferredName,
  middleName,
  familyName,
  suffix,
  age,
  sex,
}) => {
  return (
    <Card sx={{ width: "100%", mt: "1em", p: ".5em" }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ lineHeight: "1.8em" }}>
          {
            title && <>{title} </>
          }
          {
            preferredName
              ? `${preferredName} (${firstName})`
              : `${firstName}`
          }{
            middleName && <> {middleName}</>
          } {familyName}
          {
            suffix && <> {suffix}</>
          }
        </Typography>
        <Typography sx={{ fontSize: "1em", lineHeight: "1.8em" }} color="text.secondary"><strong>Sex:</strong> {sex}</Typography>
        <Typography sx={{ fontSize: "1em", lineHeight: "1.8em" }} color="text.secondary"><strong>Age:</strong> {age}</Typography>
      </CardContent>
    </Card>
  );
};

const PatientDetail: FC<IPatientDetail> = ({ sessionToken, patientId }) => {
  const [patient, setPatient] = useState<TPatient>();
  const [loading, setLoading] = useState<boolean>(false);

  const getPatientDetails = () => {
    setLoading(true);
    fetch(`/patient-details/${patientId}`, {
      method: "GET",
      headers: { Authorization: sessionToken }
    }).then(async res => {
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
