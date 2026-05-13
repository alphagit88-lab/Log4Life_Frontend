import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
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
}: CustomInputProps): React.JSX.Element {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        selectionColor="#2563EB"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  label: {
    marginBottom: 8,
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7E2F0',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#0F172A',
    backgroundColor: '#FFFFFF',
    fontSize: 15,
  },
  inputError: {
    borderColor: '#DC2626',
  },
  errorText: {
    marginTop: 8,
    color: '#DC2626',
    fontSize: 13,
  },
});

export default CustomInput;
