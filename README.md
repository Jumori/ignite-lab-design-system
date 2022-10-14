

<h1 align="center">
  Lab - Design System
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Jumori/ignite-lab-design-system?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Jumori/ignite-lab-design-system">

  <a href="https://github.com/Jumori/ignite-lab-design-system/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jumori/ignite-lab-design-system">
  </a>

</p>

Table of Contents
=================
<!--ts-->
   * [About the project](#💻-about-the-project)
   * [Layout](#🎨-layout)
   * [How to run this project](#🚀-how-to-run-this-project)
     * [Prerequisites](#prerequisites)
     * [Running web application](#running-web-application)
     * [Running Storybook documentation](#running-storybook-documentation)
   * [CI/CD](#🔄-cicd)
   * [Stacks](#🛠-stacks)
   * [Author](#🦸-author)
   * [License](#📝-license)
<!--te-->


## 💻 About the project

This project were made during **Ignite Lab 3** offered by [Rocketseat](https://lp.rocketseat.com.br/).

You can access our design system documentation [here](https://jumori.github.io/ignite-lab-design-system/).

## 🎨 Layout

This project layout is available at Figma:

<a href="https://www.figma.com/file/DaiKakwa5t5NDtX7J4MDlU/Ignite-Lab-Design-System?node-id=0%3A1">
  <img alt="Figma" src="https://img.shields.io/badge/View%20Layout%20-Figma-%2304D361">
</a>

## 🚀 How to run this project


### Prerequisites

Before you start, you're gonna need:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)

### Running web application

```bash
# Clone this repository
$ git clone git@github.com:Jumori/ignite-lab-design-system.git

# Access this project directory in your terminal/cmd
$ cd ignite-lab-design-system

# Install project dependencies
$ yarn

# Run React application in dev demo
$ yarn dev
```

### Running Storybook documentation

```bash
# Run storybook documentation in dev mode
$ yarn storybook
```

## 🔄 CI/CD

This project is integrated with Github Actions for publishing our design system Storybook documentation.

Every `commit + push` done at `master` branch will trigger CI/CD and build an updated documentation for our components with Storybook.

You can access the published documentation [here](https://jumori.github.io/ignite-lab-design-system/).

> See more in [deploy.docs.yml](./.github/workflows/deploy.docs.yml)

## 🛠 Stacks

The following tools were used in this project:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Vite](https://vitejs.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Radix UI](https://www.radix-ui.com/)**
- **[Storybook](https://storybook.js.org/)**

> See more in [package.json](./package.json)

## 🦸 Author

<a href="https://github.com/Jumori">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/44618499?s=460&u=691cddb486d4b665417d25d8a575e508d6ef9563&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Juliana Morikoshi</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Juliana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julianamorikoshi/)](https://www.linkedin.com/in/julianamorikoshi/)
[![Gmail Badge](https://img.shields.io/badge/-julianamorikoshi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:julianamorikoshi@gmail.com)](mailto:julianamorikoshi@gmail.com)

---

## 📝 License

This project is under [MIT](./LICENSE) license.

Done with ❤️ by Juliana Morikoshi 👋 [Contact me!](https://www.linkedin.com/in/julianamorikoshi/)
