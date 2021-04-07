import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { Image, Linking, StyleSheet } from 'react-native';
import ImageButton from '../components/image-button/ImageButton';
import { View } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';
import { useStores } from '../hooks/useStores';
import { RootStackParamList } from '../types';
import AppConfig from './../config/app.config';

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ route, navigation }: Props) {
  const { authStore } = useStores();

  // if redirected from login callback, set token
  if (route.params?.jwt) {
    authStore.setToken(route.params.jwt);
    setTimeout(() => navigation.navigate('Authorized'), 100);
  }

  const colorScheme = useColorScheme();

  const reactLogo = require('../assets/images/react-logo.png');
  const darkNormal = require('../assets/images/google-signin-button/btn_google_signin_dark_normal_web.png');
  const darkPressed = require('../assets/images/google-signin-button/btn_google_signin_dark_pressed_web.png');
  const lightNormal = require('../assets/images/google-signin-button/btn_google_signin_light_normal_web.png');
  const lightPressed = require('../assets/images/google-signin-button/btn_google_signin_light_pressed_web.png');

  const googleSignInBtnNormal =
    colorScheme === 'dark' ? darkNormal : lightNormal;
  const googleSignInBtnPressed =
    colorScheme === 'dark' ? darkPressed : lightPressed;

  return (
    <View style={styles.container}>
      <Image source={reactLogo} style={styles.logo} />
      <View style={styles.loginContainer}>
        <ImageButton
          imageSrc={googleSignInBtnNormal}
          imagePressedSrc={googleSignInBtnPressed}
          onPress={() => Linking.openURL(`${AppConfig.baseUrl}/auth/google`)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    paddingBottom: 20,
  },
  loginContainer: {
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    bottom: 20,
  },
  logo: {
    height: 141,
    width: 200,
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
