/* eslint-env jest */

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const {View} = require('react-native');

  return {
    SafeAreaProvider: ({children}) => children,
    SafeAreaConsumer: ({children}) =>
      children({top: 0, right: 0, bottom: 0, left: 0}),
    SafeAreaView: ({children, style}) =>
      React.createElement(View, {style}, children),
    useSafeAreaInsets: () => ({top: 0, right: 0, bottom: 0, left: 0}),
  };
});

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({children}) => children,
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({children}) => children,
    Screen: () => null,
  }),
}));

jest.mock('react-native-screens', () => ({
  enableScreens: jest.fn(),
}));
