import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {fonts} from '../theme/fonts';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

function CustomButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  buttonStyle,
  textStyle,
}: CustomButtonProps): React.JSX.Element {
  const isDisabled = loading || disabled;

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        buttonStyle,
        isDisabled ? styles.buttonDisabled : null,
        pressed && !isDisabled ? styles.buttonPressed : null,
      ]}
      onPress={onPress}
      disabled={isDisabled}>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F6494',
    borderRadius: 14,
    minHeight: 56,
    paddingHorizontal: 20,
    shadowColor: '#2F6494',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 4,
  },
  buttonDisabled: {
    backgroundColor: '#90ACC8',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: fonts.semiBold,
  },
});

export default CustomButton;
