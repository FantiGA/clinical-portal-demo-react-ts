/*
 * @Author: fantiga
 * @Date: 2023-02-11 00:14:22
 * @LastEditTime: 2023-02-12 12:51:21
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Dashboard/ClinicianDetail.tsx
 */

import { FC } from "react";
import { IClinicianDetails } from "@/utils/interface";
import { Card, CardContent, Typography } from "@mui/material";

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
