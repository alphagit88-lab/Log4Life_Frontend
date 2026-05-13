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

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

function RegisterScreen({navigation}: Props): React.JSX.Element {
  const {register} = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPhoneNumber = phoneNumber.trim();
    let hasError = false;

    setNameError('');
    setEmailError('');
    setPasswordError('');

    if (!trimmedName) {
      setNameError('Name is required.');
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

    if (hasError) {
      return;
    }

    try {
      setIsSubmitting(true);
      await register({
        name: trimmedName,
        email: trimmedEmail,
        password,
        phoneNumber: trimmedPhoneNumber || undefined,
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
          <Text style={styles.subtitle}>
            Create your account to start storing daily moments and reminders.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Create account</Text>
          <Text style={styles.cardDescription}>
            Register once, and your authentication will stay saved on the device.
          </Text>

          <CustomInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            error={nameError}
          />

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
            label="Phone Number (Optional)"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <CustomInput
            label="Password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            error={passwordError}
          />

          <CustomButton
            title="Create Account"
            onPress={handleRegister}
            loading={isSubmitting}
          />

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerLink}>Sign in</Text>
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
    top: -40,
    right: -40,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#DBEAFE',
  },
  backgroundOrbSecondary: {
    position: 'absolute',
    top: 210,
    left: -50,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#BFDBFE',
  },
  heroSection: {
    marginBottom: 24,
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

export default RegisterScreen;
