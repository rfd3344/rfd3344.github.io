module.exports = {
  base: {
    // this is a common envrioment variables shared between all env
    // https://create-react-app.dev/docs/advanced-configuration/
    // BROWSER: 'none',
    // REACT_EDITOR: 'none',
    GENERATE_SOURCEMAP: false, // diabled create source map
    BUILD_PATH: './docs',
    REACT_APP_BUILD_TIME: Date(),

  },

  // for Facebook and Google Login
  // Dev only, https://localhost:3001/
  https: {
    HTTPS: true,
    PORT: 3001,
  },
  dev: {
    REACT_APP_STAGE: 'dev',
    REACT_APP_STATIC_JH: 'https://github.com/rfd3344/staticJH/blob/master',
  },

  prod: {
    REACT_APP_STAGE: 'prod',
    GENERATE_SOURCEMAP: false, // diabled create source map
    REACT_APP_STATIC_JH: 'https://github.com/rfd3344/staticJH/blob/master',

  },
};
