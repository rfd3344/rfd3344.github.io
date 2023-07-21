module.exports = {
  base: {
    // this is a common envrioment variables shared between all env
    // https://create-react-app.dev/docs/advanced-configuration/

    PORT: 3344,
    // BROWSER: 'none',
    // REACT_EDITOR: 'none',

    // GENERATE_SOURCEMAP: false, // diabled create source map
    BUILD_PATH: './docs',
    REACT_APP_BUILD_TIME: Date(),

    REACT_APP_GITHUB_API: 'https://api.github.com/repos',
    REACT_APP_GITHUB_RAW: 'https://raw.githubusercontent.com',

  },

  // for Facebook and Google Login
  // Dev only, https://localhost:3001/
  https: {
    HTTPS: true,
    PORT: 3345,
  },
  dev: {
    REACT_APP_STAGE: 'dev',
  },

  prod: {
    REACT_APP_STAGE: 'prod',
    GENERATE_SOURCEMAP: false, // diabled create source map

  },
};
