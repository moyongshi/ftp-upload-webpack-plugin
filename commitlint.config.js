module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      // 其他修改, 比如构建流程, 依赖管理.
      'chore',
      //依赖升级，降级，新增等提交
      'deps',
      //修改文档
      'docs',
      //增加一个新功能
      'feat',
      //修复bug
      'fix',
      //改进性能的代码
      'perf',
      //代码重构，既不是修复bug，也不是新功能的修改
      'refactor',
      //回滚操作
      'revert',
      //修改格式、书写错误、空格等不影响代码逻辑的操作
      'style',
      //修改了测试代码
      'test',
    ],
  },
};
