const env = process.env.NODE_ENV;
const config = {
  serverUrl: 'http://localhost:5000',
  devTools: env === 'production' ? false : true,
};

export default config;
