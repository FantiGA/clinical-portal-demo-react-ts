# clinical-portal-demo-react-ts

[English](README.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [clinical-portal-demo-react-ts](#clinical-portal-demo-react-ts)
  - [架构](#架构)
  - [策略](#策略)
  - [维护者](#维护者)
  - [许可证](#许可证)

欢迎。

这是一个使用 `React`、`Material UI`、`styled-components`、`react-hook-form` 和 `fetch-mock`，根据提供的 API，实现给临床医生登录并查看病人详细资料的演示项目。

[演示](https://fantiga.github.io/clinical-portal-demo-react-ts/dist/)

## 架构

  - 主要的 Javascript 框架是 [React 18.2](https://reactjs.org/) 版本。
  - 使用 [Material UI 5.11.7](https://mui.com/) 的 UI 库。
  - 使用 [react-hook-form 7.43.1](https://react-hook-form.com/) 来进行表单的管理。
  - 使用 [styled-components 5.3.6](https://styled-components.com/) 来进行样式的管理。
  - 使用 [fetch-mock 9.11.0](http://www.wheresrhys.co.uk/fetch-mock/) 来进行 API 请求的模拟响应。
  - 使用 [Webpack 5.75.0](https://webpack.js.org/) 进行代码和资源打包。
  - 它遵循 [Typescript](https://www.typescriptlang.org/) 和 [ESLint](https://eslint.org/) 的类型检查和语法规范。

## 策略

  1. 所有项目都在 `/src` 目录下。
  2. `/src/index.tsx` 是入口文件。
  3. `/src/App.tsx` 进行了 `sessionToken` 的判断，并选择加载 `Login` 组件或者 `Dashboard` 组件。
  4. `/src/utils/` 目录放入了公共的部分。`interface.ts` 定义了所有组件用到的类型。
  5. `/src/components/` 目录下是页面中的 `Login` 和 `Dashboard` 两个组件。其中 `Dashboard` 内还包含了 `ClinicianDetail`、`PatientDetail` 和 `Patient` 三个子组件。
  6. `Login` 组件用于登录界面。
  7. `Dashboard` 组件用于登录后临床医生看到的仪表盘界面。
  8. `ClinicianDetail` 组件用于显示临床医生的详细信息。
  9. `PatientDetail` 组件和 `Patient` 组件用于显示患者的详细信息。
  10. 通过指定的方式和 URL 向模拟 API 发送请求。将返回的数据根据要求渲染页面。
  11. 设置了登录合法性校验。
  12. 累计花费时间：约 `29` 小时。

## 维护者

[@FantiGA](https://github.com/FantiGA)

## 许可证

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
