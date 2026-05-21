/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, jest} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../src/context/AuthContext', () => ({
  AuthProvider: ({children}: {children: React.ReactNode}) => children,
}));

jest.mock('../src/navigation/AppNavigator', () => {
  const MockReact = require('react');
  const {Text} = require('react-native');

  return () => MockReact.createElement(Text, null, 'Navigator');
});

it('renders correctly', () => {
  renderer.create(<App />);
});
