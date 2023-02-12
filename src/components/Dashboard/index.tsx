/*
 * @Author: fantiga
 * @Date: 2023-02-08 22:24:05
 * @LastEditTime: 2023-02-12 09:52:37
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Dashboard/index.tsx
 */

import { FC, SyntheticEvent, useEffect, useState } from "react";
import { TPatientList, ISession, TClinician, IPatientList } from "@utils/interface";
import { Grid, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import ClinicianDetails from "./ClinicianDetail";
import PatientDetail from "./PatientDetail";

const H1UI = styled.h1`
  text-align: center;
  width: 100%;
  margin: 0;
  line-height: 1.5em;
`;

const Dashboard: FC<ISession> = ({ sessionToken, setSessionToken }) => {
  const [clinicianDetails, setClinicianDetails] = useState<TClinician>();
  const [patients, setPatients] = useState<TPatientList>({ patients: [] });
  const [patient, setPatient] = useState<string>("");
  const [tabId, setTabId] = useState<number>(0);

  useEffect(() => {
    fetch("/clinician-details", {
      method: "GET",
      headers: { Authorization: sessionToken }
    }).then(async res => {
      setClinicianDetails(await res.json());
    });
  }, []);

  useEffect(() => {
    fetch("/patients", {
      method: "GET",
      headers: { Authorization: sessionToken }
    }).then(async res => {
      setPatients(await res.json());
    });
  }, []);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    console.log("newValue", newValue, patients.patients[newValue].id);
    setTabId(newValue);
    setPatient(patients.patients[newValue].id);
  };

  useEffect(() => {
    if (!tabId && patients && patients.patients && patients.patients[0]) {
      console.log("useEffect", patients.patients[0]);
      setPatient(patients.patients[0].id);
    }
  }, [tabId, patients, patients.patients, patients.patients[0]]);

  return (
    <Grid container>
      <Grid item container justifyContent="space-between" alignItems="center" sx={{ minHeight: "15em" }}>
        <Grid item>
          <H1UI>Clinical Portal</H1UI>
        </Grid>
        <Grid item>
          {
            clinicianDetails ? <ClinicianDetails clinicianDetails={clinicianDetails} /> : "Loadin g..."
          }
        </Grid>
      </Grid>
      <Grid item container justifyContent="space-between" alignItems="center" sx={{ mb: "20vh" }}>
        <Tabs
          value={tabId}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Patients"
          sx={{ width: "100%" }}
        >
          {
            patients.patients.length
              ? patients.patients.map(
                (value: IPatientList, index: number) => <Tab key={index} label={value.name} />
              )
              : <Tab label="Loading..." />
          }
        </Tabs>
        {
          patient ? <PatientDetail sessionToken={sessionToken} patientId={patient} /> : <>Loading...</>
        }
      </Grid>
    </Grid>
  );
};

export default Dashboard;
