exports.plugins = [
  'preset-lint-recommended',
  'preset-lint-consistent',
  ['toc', { tight: true, maxDepth: 2, heading: 'contents' }],
  'comment-config',
  ['github', { repository: 'NeonLaw/interface' }],
  'validate-links',
  ['lint-write-good', true],
  ['file-extension', false]
]
