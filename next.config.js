module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://yunminseok.github.io/Mlog'
      : '',
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    PATH:
      process.env.NODE_ENV === 'production'
        ? 'https://yunminseok.github.io/Mlog'
        : 'http://localhost:3000',
  },
};
