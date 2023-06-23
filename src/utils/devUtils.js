import _ from 'lodash';

import packageJson from 'src/../package.json';

/*********************************************************************************************
 * method to check current environment is development or not
 *
 */
export const isDev = () => process.env.NODE_ENV === 'development';


export const getDevInfo = () => {
  const { REACT_APP_STAGE, REACT_APP_BUILD_TIME } = process.env;
  return `env: ${REACT_APP_STAGE}, version: ${packageJson.version}, buildTime: ${REACT_APP_BUILD_TIME} `;
};

/*********************************************************************************************
 * only added in development environment
 *
 */
export const addDevFunctions = () => {
  showConsoleInfo();

  _.mixin({
    log: isDev() ? console.log : () => { },
    warn: isDev() ? console.warn : () => { },
    error: console.error,
  });
};

const showConsoleInfo = () => {
  const style = 'color:DodgerBlue; font-size: 14px; font-weight: bold;';
  console.log(`%c${getDevInfo()}`, style);
};
