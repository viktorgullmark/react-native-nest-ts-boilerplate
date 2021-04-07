import * as React from 'react';
import { Button, Linking, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import AppConfig from './../config/app.config';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => Linking.openURL(`${AppConfig.baseUrl}/auth/google`)}
        title="Login with google"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
