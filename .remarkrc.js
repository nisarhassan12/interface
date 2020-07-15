exports.settings = { bullet: '*', tablePipeAlign: false }

exports.plugins = [
  'remark-preset-lint-recommended',
  'remark-preset-lint-consistent',
  ['remark-toc', { tight: true, maxDepth: 2, heading: 'contents' }],
  'remark-comment-config',
  ['remark-github', { repository: 'NeonLaw/interface' }],
  'remark-validate-links',
  'remark-lint-write-good',
  ['remark-preset-lint-markdown-style-guide', { fileExtension: 'mdx' }]
]
