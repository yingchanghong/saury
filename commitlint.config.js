module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'test', // 增加测试
        'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
      ],
    ],
    'subject-case': [0],
  },
}
