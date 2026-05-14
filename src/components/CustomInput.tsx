import React from 'react';
import {
  KeyboardTypeOptions,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TextInput,
  TextInputProps,
  ViewStyle,
  View,
} from 'react-native';
import {fonts} from '../theme/fonts';

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: TextInputProps['autoComplete'];
  textContentType?: TextInputProps['textContentType'];
  returnKeyType?: TextInputProps['returnKeyType'];
  rightActionLabel?: string;
  onPressRightAction?: () => void;
  rightActionContent?: React.ReactNode;
  labelActionLabel?: string;
  onPressLabelAction?: () => void;
  wrapperStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelActionStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  rightActionButtonStyle?: StyleProp<ViewStyle>;
  rightActionTextStyle?: StyleProp<TextStyle>;
}

function CustomInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  error,
  autoCapitalize = 'sentences',
  autoComplete,
  textContentType,
  returnKeyType = 'done',
  rightActionLabel,
  onPressRightAction,
  rightActionContent,
  labelActionLabel,
  onPressLabelAction,
  wrapperStyle,
  labelStyle,
  labelActionStyle,
  inputContainerStyle,
  inputStyle,
  rightActionButtonStyle,
  rightActionTextStyle,
}: CustomInputProps): React.JSX.Element {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={styles.labelRow}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        {labelActionLabel && onPressLabelAction ? (
          <Pressable onPress={onPressLabelAction}>
            <Text style={[styles.labelAction, labelActionStyle]}>
              {labelActionLabel}
            </Text>
          </Pressable>
        ) : null}
      </View>

      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          error ? styles.inputContainerError : null,
        ]}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor="#98A2B3"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          autoComplete={autoComplete}
          textContentType={textContentType}
          returnKeyType={returnKeyType}
          selectionColor="#2F6494"
        />

        {rightActionLabel && onPressRightAction ? (
          <Pressable
            onPress={onPressRightAction}
            style={[styles.rightActionButton, rightActionButtonStyle]}
            hitSlop={8}>
            {rightActionContent ? (
              rightActionContent
            ) : (
              <Text style={[styles.rightActionText, rightActionTextStyle]}>
                {rightActionLabel}
              </Text>
            )}
          </Pressable>
        ) : null}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  labelRow: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#59657A',
    fontSize: 14,
    fontFamily: fonts.semiBold,
  },
  labelAction: {
    color: '#2F6494',
    fontSize: 13,
    fontFamily: fonts.semiBold,
  },
  inputContainer: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: '#D5DCE5',
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerError: {
    borderColor: '#D14343',
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    color: '#243449',
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  rightActionButton: {
    marginLeft: 12,
    paddingVertical: 6,
  },
  rightActionText: {
    color: '#5E6777',
    fontSize: 13,
    fontFamily: fonts.semiBold,
  },
  errorText: {
    marginTop: 8,
    color: '#D14343',
    fontSize: 13,
    fontFamily: fonts.regular,
  },
});

export default CustomInput;
