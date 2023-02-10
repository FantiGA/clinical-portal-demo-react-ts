/*
 * @Author: fantiga
 * @Date: 2023-02-08 22:23:13
 * @LastEditTime: 2023-02-10 23:15:17
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/components/Login/index.tsx
 */

import { FC, useEffect } from "react";
import { ISession, TLoginForm } from "@utils/interface";
import { Button, FormControl, FormHelperText, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";

const H1UI = styled.h1`
  text-align: center;
  width: 100%;
  margin: 0;
  line-height: 1.5em;
`;

const FormUI = styled.form`
  text-align: center;
  width: 100%;
`;

const Login: FC<ISession> = ({ sessionToken, setSessionToken }) => {
  const loginDefaultValue: TLoginForm = {
    userName: "",
    passWord: "",
  };

  const loginHandler = async (Authorization: string) => {
    return await fetch("/login", {
      method: "POST",
      headers: { Authorization }
    }).then(res => {
      return res.json();
    });
  };

  const form = useForm<TLoginForm>({ defaultValues: { ...loginDefaultValue } });
  const { register, handleSubmit, setError, formState: { errors } } = form;

  const userValidation = ({ userName, passWord }: TLoginForm) => {
    switch (userName) {
      case "joshs":
        return passWord === "joshs_pw" ? true : false;
      case "amyb":
        return passWord === "amyb_pw" ? true : false;
      default:
        return false;
    }
  };

  const onSubmit = ({ userName, passWord }: TLoginForm) => {
    if (!userValidation({ userName, passWord })) {
      setError("passWord", { type: "invalid", message: "Invalid password." });
      return false;
    }
    let Authorization = "";
    switch (userName) {
      case "joshs":
        Authorization = "Basic am9zaHM6am9zaHNfcHc=";
        break;
      case "amyb":
        Authorization = "Basic YW15YjphbXliX3B3";
        break;
      default:
        return false;
    }

    loginHandler(Authorization).then(res => setSessionToken(res.sessionToken));
  };

  return (
    <>
      <Grid container alignItems="center" sx={{ height: "100vh" }}>
        <Grid item container justifyContent="center" sx={{ mb: "20vh" }}>
          <Grid item>
            <H1UI>
              Clinical Portal
            </H1UI>
            <H1UI>
              Sign In
            </H1UI>
          </Grid>
          <Grid item container>
            <FormProvider {...form}>
              <FormUI onSubmit={handleSubmit(onSubmit)}>
                <Grid item sx={{ mt: "2em", mb: "2em" }}>
                  <FormControl error variant="standard" sx={{ width: "60%" }} >
                    <TextField {...register("userName", { required: "Username is required." })} label="Username" />
                    {errors.userName && <FormHelperText>{errors.userName.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item sx={{ mt: "2em", mb: "2em" }}>
                  <FormControl error variant="standard" sx={{ width: "60%" }} >
                    <TextField {...register("passWord", { required: "Password is required." })} label="Password" type="password" />
                    {errors.passWord && <FormHelperText>{errors.passWord.message}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item sx={{ mt: "2em", mb: "2em" }}>
                  <Button type="submit" variant="contained">Login</Button>
                </Grid>
              </FormUI>
            </FormProvider>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
