# leaderboard-react-ts

[English](README.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [leaderboard-react-ts](#leaderboard-react-ts)
  - [架构](#架构)
  - [策略](#策略)
  - [维护者](#维护者)
  - [许可证](#许可证)

欢迎。

这是一个使用 React 和 styled-components，根据随机生成的分数，实现给主播实时排行榜功能的演示项目。

[演示](https://fantiga.github.io/leaderboard-react-ts/dist/)

## 架构

  - 主要的 Javascript 框架是 [React 18.2](https://reactjs.org/) 版本。
  - 使用 [styled-components 5.3.6](https://styled-components.com/) 来进行样式的管理。
  - 使用 [Webpack 5.75.0](https://webpack.js.org/) 进行代码和资源打包。
  - 它遵循 `Typescript` 和 `ESLint` 的类型检查和语法规范。

## 策略

  1. 所有项目都在 `/` 目录下。
  2. `/src/index.tsx` 是入口文件。
  3. `/src/pages/Index.tsx` 是唯一页面。
  4. `/src/utils/` 目录放入了公共的部分。`common.ts` 包含了用到的一些计算方法和异步获取数据的方法，`interface.ts` 则定义了所有组件用到的类型。
  5. `/src/components/` 目录下是页面中的 `List`、`Streamer` 和 `Score` 三个组件。每一个组件文件都分离成了 `UI` 和 `Container` 两部分。
  6. `List` 组件用于生成主播的列表。
  7. `Streamer` 组件用于生成每一行的元素。
  8. `Score` 组件用于生成分数变化的动画。
  9. 通过指定的 URL `https://webcdn.17app.co/campaign/pretest/data.json` 向 API 发送请求。将返回的数据根据要求渲染页面。
  10. 设置了每 `3` 秒给随机一个元素计算随机分数，同时进行重新排序。
  11. 累计花费时间：约 `33` 小时。

## 维护者

[@FantiGA](https://github.com/FantiGA)

## 许可证

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
