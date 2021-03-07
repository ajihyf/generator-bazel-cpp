'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-bazel-cpp:app', () => {
  let runResult = null;

  afterEach(() => {
    if (runResult) {
      runResult.restore();
      runResult = null;
    }
  });
  it('creates files', async () => {
    runResult = await helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ title: 'demo', cppStandard: 17 });

    assert.file([
      '.vscode/extensions.json',
      '.vscode/launch.json',
      '.vscode/settings.json',
      '.vscode/tasks.json',
    ]);
    assert.fileContent('.bazelversion', '3.7.2');
    assert.fileContent('.bazelrc', '-std=c++17');
    assert.fileContent('WORKSPACE', 'workspace(name = "demo")');
    assert.fileContent('WORKSPACE', 'googletest-release-');
    assert.file('demo/include/demo/foo.h');
    assert.fileContent('demo/src/foo.cc', '#include "demo/foo.h"');
    assert.fileContent('demo/BUILD', 'name = "demo"');
    assert.fileContent('test/foo-test.cc', '#include <gtest/gtest.h>');
    assert.fileContent('test/foo-test.cc', '#include "demo/foo.h"');
    assert.fileContent('test/BUILD', '@gtest');
    assert.fileContent('test/BUILD', '"//demo"');
  });

  it('support files', async () => {
    runResult = await helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ title: 'demo', cppStandard: 17, test: 'catch2' });

    assert.fileContent('WORKSPACE', 'Catch2-');
    assert.fileContent('test/foo-test.cc', '#include <catch2/catch.hpp>');
    assert.fileContent('test/BUILD', '@catch2');
  });
});
