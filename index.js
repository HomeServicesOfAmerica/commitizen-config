const intializeCommitizen = require('cz-bespoke');

const notEmpty = text => text.length > 0 ? true : "This may not be left blank.";

module.exports = intializeCommitizen.tweak({
  // By default, cz-bespoke will validate that the first line does not exceed subjectLineLength.
  subjectLineLength: 50,
  bodyLineLength: 70,
  validation: {
    scope: notEmpty,
    body: notEmpty,
  },
  labels: {
    issues: 'List any issues related to this change: (Ex: "Resolve #2, Progress #5")\n',
  },
  choices: {
    type: [
      {
        title: 'feat',
        description: 'A new feature.',
      },
      {
        title: 'fix',
        description: 'A bug fix.',
      },
      {
        title: 'docs',
        description: 'Documentation only changes.',
      },
      {
        title: 'style',
        description: 'Changes that do not affect the behavior of the code (white-space, formatting).',
      },
      {
        title: 'refactor',
        description: 'A code change that neither fixes a bug nor adds a feature.',
      },
      {
        title: 'perf',
        description: 'A code change that improves performance.',
      },
      {
        title: 'test',
        description: 'Adding missing tests or correcting existing tests.',
      },
      {
        title: 'build',
        description: 'Changes that affect the build system or external dependencies.',
      },
      {
        title: 'ci',
        description: 'Changes to our CI configuration files and scripts.',
      },
      {
        title: 'chore',
        description: 'Other changes that don\'t modify src or test files.',
      },
      {
        title: 'revert',
        description: 'Reverts a previous commit.',
      }
    ],
  },
});
