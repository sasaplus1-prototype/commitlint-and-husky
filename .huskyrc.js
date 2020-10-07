module.exports = {
  hooks: {
    // 'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
    'commit-msg': 'npx -p @commitlint/cli commitlint -E HUSKY_GIT_PARAMS'
  }
};
