# template-typescript-nodemon

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Develop projects with [nodemon](https://github.com/remy/nodemon) and TypeScript.

This project provides basic scaffolding for developing and building TypeScript libraries.

## Overview

### `yarn develop`

Runs the project in development mode and watches for any changes.

### `yarn build`

Builds the project for production.

```bash
yarn build
```

### `yarn test`

Runs test suites and generates a coverage report.

## Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

## Continuous Integration

This template uses `Travis CI` to build and test remote changes.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-typescript-nodemon.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-typescript-nodemon
[codecov]: https://codecov.io/gh/metonym/template-typescript-nodemon
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/template-typescript-nodemon.svg
