import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStores } from '../hooks/useStores';
import LoginScreen from '../screens/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { authStore } = useStores();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authStore.loggedIn && (
        <Stack.Screen name="Authorized" component={BottomTabNavigator} />
      )}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
};

export default observer(RootNavigator);
