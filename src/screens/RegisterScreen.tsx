import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {useAuth} from '../context/AuthContext';
import {fonts} from '../theme/fonts';
import ContainerIcon from '../images/Container.svg';
import type {RootStackParamList} from '../types/authTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

function RegisterScreen({navigation}: Props): React.JSX.Element {
  const {height, width} = useWindowDimensions();
  const {register} = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCompactScreen = height < 760;
  const cardWidth = Math.min(width - 32, 390);
  const passwordToggleIcon = <ContainerIcon width={22} height={24} />;

  const handleRegister = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    let hasError = false;

    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setTermsError('');

    if (!trimmedName) {
      setNameError('Full name is required.');
      hasError = true;
    }

    if (!trimmedEmail) {
      setEmailError('Email is required.');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required.');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm your password.');
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      hasError = true;
    }

    if (!acceptedTerms) {
      setTermsError('You need to accept the terms to continue.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      setIsSubmitting(true);
      await register({
        name: trimmedName,
        email: trimmedEmail,
        password,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to create your account right now.';
      Alert.alert('Registration Failed', message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          isCompactScreen ? styles.scrollContentCompact : null,
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={[styles.card, {width: cardWidth}]}>
          <Text style={styles.brand}>Log4Life</Text>
          <Text style={styles.subtitle}>Create your secure vault today</Text>

          <CustomInput
            label="Full name"
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoComplete="name"
            textContentType="name"
            returnKeyType="next"
            error={nameError}
            labelStyle={styles.fieldLabel}
            inputContainerStyle={styles.inputContainer}
          />

          <CustomInput
            label="Email"
            placeholder="name@company.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            textContentType="emailAddress"
            returnKeyType="next"
            error={emailError}
            labelStyle={styles.fieldLabel}
            inputContainerStyle={styles.inputContainer}
          />

          <CustomInput
            label="Password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            autoComplete="password"
            textContentType="newPassword"
            rightActionLabel="toggle password visibility"
            onPressRightAction={() => setIsPasswordVisible(current => !current)}
            rightActionContent={passwordToggleIcon}
            returnKeyType="next"
            error={passwordError}
            labelStyle={styles.fieldLabel}
            inputContainerStyle={styles.inputContainer}
            rightActionButtonStyle={styles.passwordIconButton}
          />

          <CustomInput
            label="Confirm password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!isConfirmPasswordVisible}
            autoCapitalize="none"
            autoComplete="password"
            textContentType="password"
            error={confirmPasswordError}
            labelStyle={styles.fieldLabel}
            inputContainerStyle={styles.inputContainer}
          />

          <Pressable
            style={styles.termsRow}
            onPress={() => {
              setAcceptedTerms(current => !current);
              setTermsError('');
            }}>
            <View style={[styles.checkbox, acceptedTerms ? styles.checkboxChecked : null]}>
              {acceptedTerms ? <View style={styles.checkboxInner} /> : null}
            </View>

            <Text style={styles.termsText}>
              I agree to the <Text style={styles.termsLink}>Terms of Service</Text>{' '}
              and <Text style={styles.termsLink}>Privacy Policy</Text>.
            </Text>
          </Pressable>

          {termsError ? <Text style={styles.termsError}>{termsError}</Text> : null}

          <CustomButton
            title="Create Account"
            onPress={handleRegister}
            loading={isSubmitting}
            buttonStyle={styles.createAccountButton}
            textStyle={styles.createAccountButtonText}
          />

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerLink}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  scrollContentCompact: {
    justifyContent: 'flex-start',
    paddingTop: 24,
    paddingBottom: 24,
  },
  card: {
    alignSelf: 'center',
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 28,
    shadowColor: '#1F3550',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 5,
  },
  brand: {
    color: '#094771',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 28,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    textAlign: 'center',
  },
  fieldLabel: {
    color: '#42474E',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  inputContainer: {
    borderRadius: 8,
  },
  passwordIconButton: {
    marginLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  termsRow: {
    marginTop: 4,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D5DCE5',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    marginRight: 10,
  },
  checkboxChecked: {
    borderColor: '#2C5F8A',
    backgroundColor: '#2C5F8A',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#2C5F8A',
  },
  termsText: {
    flex: 1,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  termsLink: {
    color: '#094771',
    fontSize: 12,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  termsError: {
    marginBottom: 14,
    color: '#D14343',
    fontSize: 13,
    fontFamily: fonts.regular,
  },
  createAccountButton: {
    width: 292,
    minHeight: 48,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#2C5F8A',
    paddingHorizontal: 16,
    paddingVertical: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  createAccountButtonText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  footerRow: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  footerText: {
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  footerLink: {
    color: '#094771',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
});

export default RegisterScreen;
