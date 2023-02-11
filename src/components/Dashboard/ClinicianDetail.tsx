/*
 * @Author: fantiga
 * @Date: 2023-02-11 00:14:22
 * @LastEditTime: 2023-02-11 19:12:02
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Dashboard/ClinicianDetail.tsx
 */

import { IClinicianDetails } from "@/utils/interface";
import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

const ClinicianDetails: FC<IClinicianDetails> = ({ clinicianDetails }) => {
  const { role, title, firstName, preferredName, middleName, familyName, suffix } = clinicianDetails;
  return (
    <Card sx={{ minWidth: "30vw" }}>
      <CardContent>
        {
          role && <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{role}</Typography>
        }
        <Typography variant="h5" component="div">
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
      </CardContent>
    </Card>
  );
};

export default ClinicianDetails;
