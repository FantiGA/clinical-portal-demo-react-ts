/*
 * @Author: fantiga
 * @Date: 2023-02-12 09:55:29
 * @LastEditTime: 2023-02-12 12:50:57
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Dashboard/Patient.tsx
 */

import { FC } from "react";
import { TPatient } from "@/utils/interface";
import { Card, CardContent, Typography } from "@mui/material";

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

export default Patient;
