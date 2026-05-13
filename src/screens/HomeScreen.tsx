import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useAuth} from '../context/AuthContext';

function HomeScreen(): React.JSX.Element {
  const {user, logout} = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unable to log out right now.';
      Alert.alert('Logout Failed', message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroCard}>
        <Text style={styles.title}>Welcome, {user?.name ?? 'User'}</Text>
        <Text style={styles.email}>{user?.email ?? 'No email found'}</Text>

        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>
            Authentication connected successfully
          </Text>
          <Text style={styles.statusDescription}>
            Later this screen will be used for daily logs, reminders, notes, and
            habits.
          </Text>
        </View>

        <CustomButton
          title="Logout"
          onPress={handleLogout}
          loading={isLoggingOut}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FF',
    padding: 24,
    justifyContent: 'center',
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
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
  title: {
    color: '#0F172A',
    fontSize: 28,
    fontWeight: '800',
  },
  email: {
    marginTop: 10,
    color: '#475569',
    fontSize: 16,
  },
  statusCard: {
    marginTop: 28,
    marginBottom: 28,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    padding: 18,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  statusTitle: {
    color: '#1D4ED8',
    fontSize: 18,
    fontWeight: '700',
  },
  statusDescription: {
    marginTop: 10,
    color: '#334155',
    fontSize: 15,
    lineHeight: 22,
  },
});

export default HomeScreen;
