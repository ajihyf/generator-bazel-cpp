'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('skip-install', {
      type: Boolean,
      default: false,
      description: 'whether to skip bazel install step',
    });
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the rad ${chalk.red('generator-bazel-cpp')} generator!`)
    );

    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Your project title',
      },
      {
        type: 'list',
        name: 'cppStandard',
        message: 'Project C++ Standard',
        choices: [17, 14, 11],
        default: 17,
      },
    ]);
  }

  writing() {
    const ctx = this.answers;
    const { title } = ctx;
    this.fs.copyTpl(
      [
        this.templatePath('WORKSPACE'),
        this.templatePath('.bazelrc'),
        this.templatePath('.clang-format'),
        this.templatePath('.gitignore'),
        this.templatePath('.bazelversion'),
        this.templatePath('gencomp.sh'),
      ],
      this.destinationRoot(),
      ctx
    );
    this.fs.copy(
      this.templatePath('.vscode/*'),
      this.destinationPath('.vscode')
    );

    this.fs.copyTpl(
      this.templatePath('test/*'),
      this.destinationPath('test'),
      ctx
    );

    this.fs.copyTpl(
      this.templatePath('project/**/*'),
      this.destinationPath(title),
      ctx
    );
    this.fs.move(
      this.destinationPath(`${title}/include/project/*`),
      this.destinationPath(`${title}/include/${title}`)
    );
    this.fs.delete(this.destinationPath(`${title}/include/project`));
  }

  install() {
    if (!this.options['skip-install']) {
      this.spawnCommandSync('./gencomp.sh');
    }
  }

  end() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`${chalk.green(this.answers.title)} generated.\nHappy debugging!`)
    );
  }
};
