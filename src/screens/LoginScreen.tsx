import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {useAuth} from '../context/AuthContext';
import type {RootStackParamList} from '../types/authTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function LoginScreen({navigation}: Props): React.JSX.Element {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.backgroundOrbPrimary} />
        <View style={styles.backgroundOrbSecondary} />

        <View style={styles.heroSection}>
          <Text style={styles.brand}>Log4Life</Text>
          <Text style={styles.subtitle}>Remember your daily life</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome back</Text>
          <Text style={styles.cardDescription}>
            Sign in to continue managing your life logs and reminders.
          </Text>

          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            error={emailError}
          />

          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            error={passwordError}
          />

          <CustomButton
            title="Login"
            onPress={handleLogin}
            loading={isSubmitting}
          />

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Don&apos;t have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={styles.footerLink}>Create one</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#F3F7FF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  backgroundOrbPrimary: {
    position: 'absolute',
    top: -50,
    right: -30,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#DBEAFE',
  },
  backgroundOrbSecondary: {
    position: 'absolute',
    top: 140,
    left: -45,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#BFDBFE',
  },
  heroSection: {
    marginBottom: 26,
  },
  brand: {
    color: '#0F172A',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  subtitle: {
    marginTop: 8,
    color: '#475569',
    fontSize: 16,
    lineHeight: 22,
  },
  card: {
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    padding: 24,
    shadowColor: '#0F172A',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
  cardTitle: {
    color: '#0F172A',
    fontSize: 24,
    fontWeight: '700',
  },
  cardDescription: {
    marginTop: 8,
    marginBottom: 24,
    color: '#64748B',
    fontSize: 15,
    lineHeight: 22,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  footerText: {
    color: '#64748B',
    fontSize: 14,
  },
  footerLink: {
    marginLeft: 6,
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default LoginScreen;
