/*
 * @Author: fantiga
 * @Date: 2023-02-04 23:02:36
 * @LastEditTime: 2023-02-04 23:27:49
 * @LastEditors: fantiga
 * @FilePath: /clinical-portal-demo-react-ts/src/index.tsx
 */

import React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";

/**
 * React 18
 */
const container: HTMLElement = document.getElementById("root") || document.createElement("div");
/** Create a root. / 创建一个root。 */
const root = createRoot(container);
/** Initial Render: Renders an element to the root. / 初始渲染：将一个元素渲染到root。 */
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      < CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);