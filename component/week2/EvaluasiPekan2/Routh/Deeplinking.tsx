import { LinkingOptions } from '@react-navigation/native';

export const linking: LinkingOptions<any> = {
  prefixes: ['aplikasisaya://'],
  config: {
    screens: {
      Login: 'Login',
      Register: 'Register',
      Main: {
        screens: {
          Market: 'market',
          Profile: 'profile',
        },
      },
    },
  },
};
