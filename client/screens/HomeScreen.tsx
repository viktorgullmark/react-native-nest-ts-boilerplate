import { RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { HomeParamList } from '../types';

type HomeScreenRouteProp = RouteProp<HomeParamList, 'HomeScreen'>;
type Props = {
  route: HomeScreenRouteProp;
};

const HomeScreen = ({ route }: Props) => {
  console.log('jwt', route.params.jwt);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
};

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

export default HomeScreen;
