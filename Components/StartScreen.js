import * as React from 'react';
import {
Text
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function StrartScreen() {
  return (
    <Text> hello how are you</Text>
    // <NavigationContainer theme={MyTheme}>   </NavigationContainer>
  );
}