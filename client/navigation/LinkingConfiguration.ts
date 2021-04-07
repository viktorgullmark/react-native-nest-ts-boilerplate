import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      Authorized: {
        path: 'authorized',
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home/:jwt',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
