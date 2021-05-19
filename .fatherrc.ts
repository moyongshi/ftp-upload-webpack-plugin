export default {
  entry: 'src/index.ts',
  file: 'dist',
  esm: 'rollup',
  target: 'node',
  runtimeHelpers: true,
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/ftp-upload-webpack-plugin',
  },
};
