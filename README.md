# leaderboard-react-ts

**English** | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [leaderboard-react-ts](#leaderboard-react-ts)
  - [Architecture](#architecture)
  - [Strategies](#strategies)
  - [Maintainers](#maintainers)
  - [License](#license)

Welcome.

This is a demo that uses React and styled-components to implement real-time leaderboard for streamers based on randomly generated scores.

[Demo](https://fantiga.github.io/leaderboard-react-ts/dist/)

## Architecture

 - The main Javascript framework is [React 18.2](https://reactjs.org/) version.
 - Use [styled-components 5.3.6](https://styled-components.com/) for style management.
 - Use [Webpack 5.75.0](https://webpack.js.org/) for code and resource packaging.
 - It follows the type checking and syntax specifications of [Typescript](https://www.typescriptlang.org/) and [ESLint](https://eslint.org/).

## Strategies

 1. All projects are in the `/` directory.
 2. `/src/index.tsx` is an entry file.
 3. `/src/pages/Index.tsx` is a single page.
 4. The `/src/utils/` directory puts the public section. `common.ts` contains some calculation methods used and methods for asynchronously obtaining data, and `interface.ts` defines the types used by all components.
 5. The `/src/components/` directory is the three components `List`, `Streamer` and `Score` in the page. Each component file is separated into `UI` and `Container` two parts.
 6. The `List` component is used to generate a list of streamers.
 7. The `Streamer` component is used to generate elements for each row.
 8. The `Score` component is used to animate score changes.
 9. Send a request to the API through the specified URL `https://webcdn.17app.co/campaign/pretest/data.json`. Render the page with the returned data as requested.
 10. It is set to calculate a random score for a random element every `3` seconds, and reorder at the same time.
 11. Cumulative time spent: about `33` hours.

## Maintainers

[@FantiGA](https://github.com/FantiGA)

## License

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
