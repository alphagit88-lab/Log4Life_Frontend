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
import AppleIcon from '../images/Apple.svg';
import ContainerIcon from '../images/Container.svg';
import GoogleIcon from '../images/Google.svg';
import type {RootStackParamList} from '../types/authTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

interface SocialButtonProps {
  title: string;
  icon: React.JSX.Element;
  onPress: () => void;
}

function SocialButton({
  title,
  icon,
  onPress,
}: SocialButtonProps): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [styles.socialButton, pressed ? styles.socialPressed : null]}
      onPress={onPress}>
      <View style={styles.socialIconWrap}>{icon}</View>
      <Text style={styles.socialButtonText}>{title}</Text>
    </Pressable>
  );
}

function LoginScreen({navigation}: Props): React.JSX.Element {
  const {height, width} = useWindowDimensions();
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCompactScreen = height < 720;
  const cardWidth = Math.min(width - 32, 380);
  const passwordToggleIcon = <ContainerIcon width={22} height={24} />;

  const showComingSoonAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const handleLogin = async () => {
    const trimmedEmail = email.trim().toLowerCase();
    let hasError = false;

    setEmailError('');
    setPasswordError('');

    if (!trimmedEmail) {
      setEmailError('Email is required.');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      setIsSubmitting(true);
      await login({
        email: trimmedEmail,
        password,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unable to log in right now.';
      Alert.alert('Login Failed', message);
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
          <Text style={styles.loginTitle}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to manage your data</Text>

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
            labelActionLabel="Forgot Password?"
            onPressLabelAction={() =>
              showComingSoonAlert(
                'Coming Soon',
                'Password reset is not connected yet.',
              )
            }
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            autoComplete="password"
            textContentType="password"
            rightActionLabel="toggle password visibility"
            onPressRightAction={() => setIsPasswordVisible(current => !current)}
            rightActionContent={passwordToggleIcon}
            error={passwordError}
            labelStyle={styles.fieldLabel}
            labelActionStyle={styles.forgotPassword}
            inputContainerStyle={styles.inputContainer}
            rightActionButtonStyle={styles.passwordIconButton}
          />

          <CustomButton
            title="Sign In"
            onPress={handleLogin}
            loading={isSubmitting}
            buttonStyle={styles.signInButton}
            textStyle={styles.signInButtonText}
          />

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialRow}>
            <SocialButton
              title="Apple"
              icon={<AppleIcon width={20} height={20} />}
              onPress={() =>
                showComingSoonAlert(
                  'Coming Soon',
                  'Apple sign in is not connected yet.',
                )
              }
            />
            <SocialButton
              title="Google"
              icon={<GoogleIcon width={20} height={20} />}
              onPress={() =>
                showComingSoonAlert(
                  'Coming Soon',
                  'Google sign in is not connected yet.',
                )
              }
            />
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>New to Log4Life? </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={styles.footerLink}>Sign Up</Text>
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
    paddingVertical: 36,
  },
  scrollContentCompact: {
    justifyContent: 'flex-start',
    paddingTop: 28,
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
  loginTitle: {
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
  dividerRow: {
    marginTop: 24,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D7DEE7',
  },
  dividerText: {
    marginHorizontal: 14,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  socialIconWrap: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButton: {
    width: '48%',
    minHeight: 50,
    borderWidth: 1,
    borderColor: '#D5DCE5',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  socialPressed: {
    opacity: 0.88,
  },
  socialButtonText: {
    color: '#091E27',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  fieldLabel: {
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  forgotPassword: {
    color: '#094771',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  inputContainer: {
    borderRadius: 8,
  },
  passwordIconButton: {
    marginLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  signInButton: {
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
  signInButtonText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  footerRow: {
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

export default LoginScreen;
