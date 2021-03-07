# generator-bazel-cpp [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A generator to generate C++ project using bazel.

## Installation

> Ensure `bazel` exists in your system path. [bazelisk](https://github.com/bazelbuild/bazelisk) is recommended since it also manages bazel versions.

First, install [Yeoman](http://yeoman.io) and generator-bazel-cpp using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-bazel-cpp
```

Then generate your new project:

```bash
yo bazel-cpp
```

## Development

This project uses [bazel-compilation-database](https://github.com/grailbio/bazel-compilation-database) to generate `compile_commands.json`. [vscode-clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) is recommended for code completion and navigation.

![edit](https://github.com/ajihyf/generator-bazel-cpp/blob/master/images/edit.png?raw=true)

Once project structure has been changed, run `./gencomp.sh` and restart clangd server in VSCode.

## Debug

VSCode [Task Shell Input](https://marketplace.visualstudio.com/items?itemName=augustocdias.tasks-shell-input) and [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) extensions are required to debug.

### Debug using `launch.json`

`launch.json` has been configured to debug unit tests. To start debugging, just set breaking points and focus on your test file, click `Run Debug Test`.

![debug launch](https://github.com/ajihyf/generator-bazel-cpp/blob/master/images/debug-launch.png?raw=true)

### Debug using TestMate

VSCode [C++ TestMate](https://marketplace.visualstudio.com/items?itemName=matepek.vscode-catch2-test-adapter) is a great tool to run and debug C++ unit tests (including [Catch2](https://github.com/catchorg/Catch2), [GoogleTest](https://github.com/google/googletest)).

This project has been configured to adapt the extension. To start running or debugging unit tests, build tests (with VSCode build task or in the terminal) first and then test suites will be shown in the test explorer.

![run build](https://github.com/ajihyf/generator-bazel-cpp/blob/master/images/run-build.png?raw=true)

![testmate](https://github.com/ajihyf/generator-bazel-cpp/blob/master/images/testmate.png?raw=true)

Happy debugging!

![debug testmate](https://github.com/ajihyf/generator-bazel-cpp/blob/master/images/debug-testmate.png?raw=true)

## License

MIT © [ajihyf](ajihyf@gmail.com)

[npm-image]: https://badge.fury.io/js/generator-bazel-cpp.svg
[npm-url]: https://npmjs.org/package/generator-bazel-cpp
[travis-image]: https://travis-ci.com/ajihyf/generator-bazel-cpp.svg?branch=master
[travis-url]: https://travis-ci.com/ajihyf/generator-bazel-cpp
[daviddm-image]: https://david-dm.org/ajihyf/generator-bazel-cpp.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ajihyf/generator-bazel-cpp
