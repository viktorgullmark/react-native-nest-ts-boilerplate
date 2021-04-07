import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login/:jwt?',
      Authorized: {
        path: 'authorized',
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
