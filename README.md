# template-typescript-nodemon

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Develop TypeScript projects using [nodemon](https://github.com/remy/nodemon).

This project provides basic scaffolding for developing and building TypeScript libraries using [nodemon](https://github.com/remy/nodemon) and [ts-node](https://github.com/TypeStrong/ts-node).

## Available Scripts

### `yarn develop`

Runs the project in development mode and watches for any changes.

### `yarn build`

Builds the project for production.

### `yarn test`

Runs test suites and generates a coverage report.

### `yarn test:tdd`

Runs tests in Test-driven Development (TDD) mode.

## Customizing Nodemon

Modify the nodemon configuration in the `nodemonConfig` field in package.json. By default, the entry is `src/index.ts`. Only the `src/` folder is watched for changes.

```json
"nodemonConfig": {
  "exec": "ts-node src/index.ts",
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "ts",
  "watch": [
    "src"
  ]
}
```

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
