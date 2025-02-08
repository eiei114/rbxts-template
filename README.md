<h2 align="center">
    <br />
    rbxts-template
</h2>

<p align="center">
    A roblox-ts template for fully managed rojo projects.
</p>

<div align="center">

   [![Production](https://img.shields.io/badge/production-000000?style=for-the-badge&logo=roblox&logoColor=d9e0ee)](https://www.roblox.com/games/133865936692148/Production-rbxts-template)
   [![Development](https://img.shields.io/badge/development-blue?style=for-the-badge&logo=robloxstudio&logoColor=d9e0ee)](https://www.roblox.com/games/73443510395636/Development-rbxts-template)
   
</div>

[![CI](https://github.com/eiei114/rbxts-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eiei114/rbxts-template/actions/workflows/ci.yaml)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Workflow](#development-workflow)
  - [Starting the Development Server](#starting-the-development-server)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment and Build](#deployment-and-build)
  - [Syncing with Roblox Studio](#syncing-with-roblox-studio)
  - [Build Process](#build-process)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Features

- **TypeScript Support with roblox-ts:** Write robust, type-safe code using TypeScript.
- **Seamless Rojo Integration:** Enjoy real-time synchronization with Roblox Studio via Rojo.
- **Development and Production Modes:** Use hot-reloading during development and optimized builds for production.
- **Linting and Formatting:** Maintain code quality with ESLint and Prettier.
- **CI/CD Ready:** Integrates smoothly with GitHub Actions and other CI tools.
- **Automation Scripts:** A variety of npm scripts to automate building, syncing, deploying, and more.

---

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js:** Version 16 or later.
- **pnpm:** A globally installed package manager.
  
  ```bash
  npm install -g pnpm
  ```
- **Roblox Studio:** The latest version.
- **Rojo:** Installed globally.
- **Git:** Version control system.

---

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/eiei114/rbxts-template.git
   cd rbxts-template
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   ```

3. **Set Up Git Hooks:**

   Configure Husky to enable pre-commit hooks.

   ```bash
   pnpm run prepare
   ```

---

## Development Workflow

This template provides several scripts to support an efficient development process.

### Starting the Development Server

- **Start the Development Server:**

  This command compiles your TypeScript code and syncs changes with Roblox Studio via Rojo.

  ```bash
  pnpm run dev:start
  ```

- **Watch for Changes:**

  Automatically recompile when source files change.

  ```bash
  pnpm run dev:watch
  ```

- **Open the Project in Roblox Studio:**

  Launch the project directly in Roblox Studio.

  ```bash
  pnpm run dev:open
  ```

---

## Available Scripts

Below is a list of the primary npm scripts included in this template:

- **Development Scripts:**
  - `dev:start` : Start the development server.
  - `dev:build` : Build the project in development mode.
  - `dev:compile` : Compile TypeScript files.
  - `dev:watch` : Watch for source code changes and recompile automatically.

- **Production Scripts:**
  - `prod:build` : Clean build directories and execute a production build (includes DarkLua processing).
  - `prod:sync` : Sync the project with Roblox Studio using Rojo.

- **Rojo Related:**
  - `rojo:build` : Build the Rojo project and output a `.rbxl` file.

- **Linting and Formatting:**
  - `lint` : Check code quality with ESLint.
  - `lint:fix` : Automatically fix linting issues.
  - `textlint` : Check text files for lint issues.
  - `textlint:fix` : Automatically fix text linting issues.

- **Other Scripts:**
  - `assets:upload` : Upload external assets.
  - `clean` : Remove build folders (`out/` and `dist/`).
  - `commit` : Validate commit messages using commitlint.
  - `mantle:deploy:dev` / `mantle:deploy:prod` : Deploy using Mantle.

---

## Project Structure

A typical project structure looks like this:

```
rbxts-template/
├── src/                     # Source TypeScript files.
├── out/                     # Compiled output (automatically generated).
├── dist/                    # Production build output.
├── build.project.json       # Rojo project configuration file.
├── package.json             # Project settings and scripts.
└── README.md                # This documentation.
```

---

## Deployment and Build

### Syncing with Roblox Studio

- **Development Sync:**

  Use Rojo to reflect your changes in real time within Roblox Studio.

  ```bash
  pnpm run dev:sync
  ```

- **Production Sync:**

  After building for production, sync your project with Roblox Studio.

  ```bash
  pnpm run prod:sync
  ```

### Build Process

- **Development Build:**

  Compile and build the project for development.

  ```bash
  pnpm run dev:build
  ```

- **Production Build:**

  Clean the build folders and generate an optimized production build, including processing with DarkLua.

  ```bash
  pnpm run prod:build
  ```

- **Rojo Build:**

  Generate a `.rbxl` file (Roblox Studio file) using Rojo.

  ```bash
  pnpm run rojo:build
  ```

- **Upload Assets:**

  If needed, upload external assets.

  ```bash
  pnpm run assets:upload
  ```

---

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:** e.g., `feature/new-feature` or `bugfix/issue-description`.
3. **Commit your changes:** Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard for commit messages.
4. **Push your branch and create a Pull Request.**

Please adhere to the project's coding guidelines and include tests where applicable.

---

## License

This project is licensed under the [ISC License](./LICENSE). See the LICENSE file for details.

---

## Support

If you have any questions or need to report issues, please use the [GitHub Issues](https://github.com/eiei114/rbxts-template/issues) section.

---

Happy coding!  
Let's make Roblox development efficient and fun!
```