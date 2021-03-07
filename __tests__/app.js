'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-bazel-cpp:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ title: 'demo', cppStandard: 17 });
  });

  it('creates files', () => {
    assert.file([
      '.vscode/extensions.json',
      '.vscode/launch.json',
      '.vscode/settings.json',
      '.vscode/tasks.json',
    ]);
    assert.fileContent('.bazelversion', '3.7.2');
    assert.fileContent('.bazelrc', '-std=c++17');
    assert.fileContent('WORKSPACE', 'workspace(name = "demo")');
    assert.file('demo/include/demo/foo.h');
    assert.fileContent('demo/src/foo.cc', '#include "demo/foo.h"');
    assert.fileContent('demo/BUILD', 'name = "demo"');
    assert.fileContent('test/foo-test.cc', '#include "demo/foo.h"');
    assert.fileContent('test/BUILD', '"//demo"');
  });
});
