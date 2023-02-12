# clinical-portal-demo-react-ts

**English** | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [clinical-portal-demo-react-ts](#clinical-portal-demo-react-ts)
  - [Architecture](#architecture)
  - [Strategies](#strategies)
  - [Maintainers](#maintainers)
  - [License](#license)

Welcome.

This is a demo that uses `React`, `Material UI`, `styled-components`, `react-hook-form` and `fetch-mock`, according to the provided API, to implement a clinician to log in and view patient details project.

[Demo](https://fantiga.github.io/clinical-portal-demo-react-ts/dist/)

## Architecture

 - The main Javascript framework is [React 18.2](https://reactjs.org/) version.
 - Use [Material UI 5.11.7](https://mui.com/) for UI library.
 - Use [react-hook-form 7.43.1](https://react-hook-form.com/) for form management.
 - Use [styled-components 5.3.6](https://styled-components.com/) for style management.
 - Use [fetch-mock 9.11.0](http://www.wheresrhys.co.uk/fetch-mock/) for mock responses to API requests.
 - Use [Webpack 5.75.0](https://webpack.js.org/) for code and resource packaging.
 - It follows the type checking and syntax specifications of [Typescript](https://www.typescriptlang.org/) and [ESLint](https://eslint.org/).

## Strategies

 1. All projects are in the `/src` directory.
 2. `/src/index.tsx` is an entry file.
 3. `/src/App.tsx` judges `sessionToken` and chooses to load `Login` component or `Dashboard` component.
 4. The `/src/utils/` directory puts the public section. `interface.ts` defines the types used by all components.
 5. Under the `/src/components/` directory are the `Login` and `Dashboard` components in the page. Among them, `Dashboard` also contains three subcomponents `ClinicianDetail`, `PatientDetail` and `Patient`.
 6. The `Login` component is used for the login screen.
 7. The `Dashboard` component is used for the dashboard interface seen by clinicians after login.
 8. The `ClinicianDetail` component is used to display clinician details.
 9. The `PatientDetail` component and the `Patient` component are used to display patient details.
 10. Send a request to the mock API through the specified method and URL. Render the page with the returned data as requested.
 11. Login validation check is set.
 12. Cumulative time spent: about `29` hours.

## Maintainers

[@FantiGA](https://github.com/FantiGA)

## License

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
