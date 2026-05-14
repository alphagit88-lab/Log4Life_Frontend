import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuth} from '../context/AuthContext';
import ArrowSvg from '../images/arrow.svg';
import BackgroundSvg from '../images/background.svg';
import ButtonSvg from '../images/Button.svg';
import CarSvg from '../images/car.svg';
import CollectionSvg from '../images/collection.svg';
import DateSvg from '../images/date.svg';
import DefenceSvg from '../images/defence.svg';
import HealthSvg from '../images/health.svg';
import HiSvg from '../images/HI.svg';
import HomeNonSvg from '../images/home_non.svg';
import HomeSelectSvg from '../images/home_select.svg';
import DividerSvg from '../images/Horizontal Divider.svg';
import NotificationSvg from '../images/notification.svg';
import NotificationDefaultSvg from '../images/notification_def.svg';
import PlannerSvg from '../images/planner.svg';
import ProfileSvg from '../images/profile.svg';
import RecordsSvg from '../images/records.svg';
import RecordsNonSvg from '../images/records_non.svg';
import RecordsSelectedSvg from '../images/records_selected.svg';
import ReminderSvg from '../images/reminder.svg';
import RemindersSvg from '../images/reminders.svg';
import SearchSvg from '../images/search.svg';
import StatementSvg from '../images/statement.svg';
import WarningSvg from '../images/warning.svg';
import {fonts} from '../theme/fonts';

type BottomTabKey = 'home' | 'records' | 'reminders' | 'planner' | 'profile';

interface StatCardData {
  title: string;
  value: string;
  valueColor: string;
  icon: React.JSX.Element;
}

interface DueCardData {
  id: string;
  badge: string;
  title: string;
  note: string;
  leadIcon: React.JSX.Element;
}

interface RecentItemData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.JSX.Element;
}

interface BottomNavItemProps {
  active?: boolean;
  label: string;
  icon: React.JSX.Element;
  onPress: () => void;
}

function getFirstName(name: string | null | undefined): string {
  const trimmedName = name?.trim();

  if (!trimmedName) {
    return 'Sarah';
  }

  return trimmedName.split(/\s+/)[0];
}

function HeaderActionButton({
  children,
  onPress,
}: {
  children: React.JSX.Element;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [styles.headerAction, pressed ? styles.pressed : null]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
}

function QuickChip({label}: {label: string}): React.JSX.Element {
  return (
    <View style={styles.quickChip}>
      <DateSvg width={16} height={16} />
      <Text style={styles.quickChipText}>{label}</Text>
    </View>
  );
}

function StatCard({
  title,
  value,
  valueColor,
  icon,
}: StatCardData): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [styles.statCard, pressed ? styles.pressed : null]}
      onPress={() => Alert.alert('Coming Soon', `${title} details will be connected next.`)}>
      <View>
        <Text style={styles.statTitle}>{title}</Text>
        <Text style={[styles.statValue, {color: valueColor}]}>{value}</Text>
      </View>

      <View style={styles.statIconWrap}>{icon}</View>
    </Pressable>
  );
}

function DueCard({
  badge,
  title,
  note,
  width,
  leadIcon,
}: DueCardData & {
  width: number;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.dueCard,
        {width},
        pressed ? styles.pressed : null,
      ]}
      onPress={() => Alert.alert(title, note)}>
      <View style={styles.dueTopRow}>
        <View style={styles.dueBadgeWrap}>
          <View style={styles.dueLeadIconChip}>{leadIcon}</View>
          <View style={styles.dueDateChip}>
            <Text style={styles.dueDateChipText}>{badge}</Text>
          </View>
        </View>

        <View style={styles.dueTrailingIconChip}>
          <CollectionSvg width={20} height={20} />
        </View>
      </View>

      <Text style={styles.dueCardTitle}>{title}</Text>
      <Text style={styles.dueCardNote}>{note}</Text>
    </Pressable>
  );
}

function RecentItemRow({
  title,
  subtitle,
  icon,
  onPress,
  isLast,
}: RecentItemData & {
  onPress: () => void;
  isLast: boolean;
}): React.JSX.Element {
  return (
    <View>
      <Pressable
        style={({pressed}) => [styles.recentRow, pressed ? styles.pressed : null]}
        onPress={onPress}>
        <View style={styles.recentRowLeft}>
          <View style={styles.recentIconChip}>{icon}</View>
          <View>
            <Text style={styles.recentTitle}>{title}</Text>
            <Text style={styles.recentSubtitle}>{subtitle}</Text>
          </View>
        </View>

        <ArrowSvg width={8} height={12} />
      </Pressable>

      {!isLast ? (
        <View style={styles.recentDividerWrap}>
          <DividerSvg width="100%" height={1} />
        </View>
      ) : null}
    </View>
  );
}

function BottomNavItem({
  active = false,
  label,
  icon,
  onPress,
}: BottomNavItemProps): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.bottomNavItem,
        active ? styles.bottomNavItemActive : null,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      {icon}
      <Text style={[styles.bottomNavLabel, active ? styles.bottomNavLabelActive : null]}>
        {label}
      </Text>
    </Pressable>
  );
}

function HomeScreen(): React.JSX.Element {
  const {width} = useWindowDimensions();
  const {user, logout, refreshProfile} = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<BottomTabKey>('home');

  const contentWidth = Math.min(width - 32, 402);
  const dueCardWidth = Math.min(Math.max(width * 0.72, 252), 284);
  const firstName = getFirstName(user?.name);
  const hasUnreadNotifications = !isRefreshing;

  const statCards: StatCardData[] = [
    {
      title: 'Total Records',
      value: '124',
      valueColor: '#094771',
      icon: <RecordsSvg width={48} height={52} />,
    },
    {
      title: 'Due This Month',
      value: '3',
      valueColor: '#815500',
      icon: <WarningSvg width={36} height={50} />,
    },
    {
      title: 'Active Reminders',
      value: '8',
      valueColor: '#094771',
      icon: <ReminderSvg width={52} height={53} />,
    },
  ];

  const dueCards: DueCardData[] = [
    {
      id: 'passport',
      badge: 'Due in 4d',
      title: 'Passport Renewal',
      note: 'Renew before the end of the month.',
      leadIcon: <DefenceSvg width={20} height={20} />,
    },
    {
      id: 'insurance',
      badge: 'Due in 9d',
      title: 'Insurance Update',
      note: 'Review your annual plan details.',
      leadIcon: <CollectionSvg width={20} height={20} />,
    },
    {
      id: 'tax',
      badge: 'Due in 12d',
      title: 'Tax Submission',
      note: 'Keep your monthly income records ready.',
      leadIcon: <DefenceSvg width={20} height={20} />,
    },
  ];

  const recentItems: RecentItemData[] = [
    {
      id: 'health',
      title: 'Health Checkup',
      subtitle: 'Updated 2h ago',
      icon: <HealthSvg width={24} height={24} />,
    },
    {
      id: 'car',
      title: 'Car Service Log',
      subtitle: 'Updated Yesterday',
      icon: <CarSvg width={24} height={24} />,
    },
    {
      id: 'mortgage',
      title: 'Mortgage Statement',
      subtitle: 'Updated 3d ago',
      icon: <StatementSvg width={24} height={24} />,
    },
  ];

  const openQuickActions = () => {
    Alert.alert('Quick Actions', 'Refresh your profile or sign out.', [
      {
        text: 'Refresh',
        onPress: async () => {
          try {
            setIsRefreshing(true);
            await refreshProfile();
            Alert.alert('Updated', 'Profile details refreshed successfully.');
          } catch (error) {
            const message =
              error instanceof Error
                ? error.message
                : 'Unable to refresh your profile right now.';
            Alert.alert('Refresh Failed', message);
          } finally {
            setIsRefreshing(false);
          }
        },
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            await logout();
          } catch (error) {
            const message =
              error instanceof Error
                ? error.message
                : 'Unable to log out right now.';
            Alert.alert('Logout Failed', message);
          }
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const openPlaceholder = (label: string) => {
    Alert.alert('Coming Soon', `${label} will be connected in the next step.`);
  };

  const handleTabPress = (tab: BottomTabKey, label: string) => {
    setActiveTab(tab);

    if (tab !== 'home') {
      openPlaceholder(label);
    }
  };

  const notificationIcon = hasUnreadNotifications ? (
    <NotificationSvg width={32} height={36} />
  ) : (
    <NotificationDefaultSvg width={32} height={36} />
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerSurface}>
            <View style={styles.topBar}>
              <View style={styles.brandRow}>
                <HeaderActionButton onPress={openQuickActions}>
                  <ButtonSvg width={34} height={28} />
                </HeaderActionButton>
                <Text style={styles.brandText}>Log4Life</Text>
              </View>

              <View style={styles.headerActionsRow}>
                <HeaderActionButton onPress={() => openPlaceholder('Search')}>
                  <SearchSvg width={34} height={34} />
                </HeaderActionButton>
                <HeaderActionButton onPress={() => openPlaceholder('Notifications')}>
                  {notificationIcon}
                </HeaderActionButton>
              </View>
            </View>
          </View>

          <View style={[styles.contentInner, {width: contentWidth}]}>
            <View style={styles.heroCard}>
              <View style={styles.heroTitleRow}>
                <Text style={styles.greeting}>Good morning, {firstName}</Text>
                <HiSvg width={28} height={28} />
              </View>
              <Text style={styles.greetingSubtext}>
                Here is an overview of your life records today.
              </Text>

              <View style={styles.quickChipsRow}>
                <QuickChip label="Tax Due: 5d" />
                <QuickChip label="Passport: 12d" />
              </View>
            </View>

            <View style={styles.statsColumn}>
              {statCards.map(card => (
                <StatCard key={card.title} {...card} />
              ))}
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Due this month</Text>
              <Pressable onPress={() => openPlaceholder('All due items')}>
                <Text style={styles.sectionLink}>View All</Text>
              </Pressable>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.dueCardsRow}>
              {dueCards.map(card => (
                <DueCard key={card.id} width={dueCardWidth} {...card} />
              ))}
            </ScrollView>

            <View style={styles.lowerSectionHeader}>
              <Text style={styles.sectionTitle}>Recently Updated</Text>
            </View>

            <View style={styles.recentCard}>
              {recentItems.map((item, index) => (
                <RecentItemRow
                  key={item.id}
                  {...item}
                  isLast={index === recentItems.length - 1}
                  onPress={() => openPlaceholder(item.title)}
                />
              ))}
            </View>

            <View style={styles.securityCard}>
              <BackgroundSvg
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                style={styles.securityPattern}
              />
              <View style={styles.securityOverlay} />
              <View style={styles.securityContent}>
                <View style={styles.securityTextBlock}>
                  <Text style={styles.securityTitle}>Secure Your Legacy</Text>
                  <Text style={styles.securityBody}>
                    {'All your sensitive records are\nencrypted and protected with\nenterprise-grade security. Organize\nyour digital life with confidence.'}
                  </Text>
                </View>

                <View style={styles.securityActionsRow}>
                  <Pressable
                    style={({pressed}) => [
                      styles.reviewButton,
                      pressed ? styles.pressed : null,
                    ]}
                    onPress={() => openPlaceholder('Review Security')}>
                    <Text style={styles.reviewButtonText}>{'Review\nSecurity'}</Text>
                  </Pressable>

                  <Pressable
                    style={({pressed}) => [
                      styles.exportButton,
                      pressed ? styles.pressed : null,
                    ]}
                    onPress={() => openPlaceholder('Export Archive')}>
                    <Text style={styles.exportButtonText}>{'Export\nArchive'}</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomNavShell}>
          <View style={styles.bottomNav}>
            <BottomNavItem
              active={activeTab === 'home'}
              label="Home"
              icon={
                activeTab === 'home' ? (
                  <HomeSelectSvg width={22} height={22} />
                ) : (
                  <HomeNonSvg width={22} height={22} />
                )
              }
              onPress={() => handleTabPress('home', 'Home')}
            />
            <BottomNavItem
              active={activeTab === 'records'}
              label="Records"
              icon={
                activeTab === 'records' ? (
                  <RecordsSelectedSvg width={22} height={22} />
                ) : (
                  <RecordsNonSvg width={22} height={22} />
                )
              }
              onPress={() => handleTabPress('records', 'Records')}
            />
            <BottomNavItem
              active={activeTab === 'reminders'}
              label="Reminders"
              icon={<RemindersSvg width={22} height={22} />}
              onPress={() => handleTabPress('reminders', 'Reminders')}
            />
            <BottomNavItem
              active={activeTab === 'planner'}
              label="Planner"
              icon={<PlannerSvg width={22} height={22} />}
              onPress={() => handleTabPress('planner', 'Planner')}
            />
            <BottomNavItem
              active={activeTab === 'profile'}
              label="Profile"
              icon={<ProfileSvg width={22} height={22} />}
              onPress={() => handleTabPress('profile', 'Profile')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingTop: 0,
    paddingBottom: 140,
  },
  headerSurface: {
    width: '100%',
    maxWidth: 1280,
    height: 109,
    backgroundColor: '#F4FAFF',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginBottom: 22,
  },
  contentInner: {
    alignSelf: 'center',
  },
  topBar: {
    height: 64,
    width: 402,
    maxWidth: 1280,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    marginLeft: 12,
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.bold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  headerActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAction: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  heroCard: {
    marginTop: 0,
  },
  heroTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  greeting: {
    color: '#091E27',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
    flex: 1,
    minWidth: 0,
    marginRight: 6,
  },
  greetingSubtext: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  quickChipsRow: {
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quickChip: {
    minHeight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 9999,
    backgroundColor: '#D6EBF8',
    marginRight: 10,
    marginBottom: 10,
  },
  quickChipText: {
    marginLeft: 4,
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 16,
  },
  statsColumn: {
    marginTop: 18,
  },
  statCard: {
    minHeight: 106,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6E2EC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  statTitle: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    marginBottom: 10,
  },
  statValue: {
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  statIconWrap: {
    minWidth: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    marginTop: 10,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerSectionHeader: {
    marginTop: 26,
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  sectionLink: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  dueCardsRow: {
    paddingRight: 10,
  },
  dueCard: {
    marginRight: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6E2EC',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  dueTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dueBadgeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dueLeadIconChip: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#DFF0FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  dueDateChip: {
    minHeight: 24,
    borderRadius: 9999,
    backgroundColor: '#FEB234',
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  dueDateChipText: {
    color: '#6D4700',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  dueTrailingIconChip: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#DFF0FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dueCardTitle: {
    marginTop: 18,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    textTransform: 'capitalize',
  },
  dueCardNote: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recentCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D6E2EC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  recentRow: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  recentRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  recentIconChip: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#DFF0FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  recentTitle: {
    color: '#091E27',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recentSubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  recentDividerWrap: {
    paddingVertical: 2,
  },
  securityCard: {
    marginTop: 16,
    height: 358,
    borderRadius: 16,
    backgroundColor: '#2C5F8A',
    overflow: 'hidden',
    position: 'relative',
  },
  securityPattern: {
    position: 'absolute',
    left: -10,
    right: -10,
    bottom: -10,
    top: -10,
    opacity: 0.58,
  },
  securityOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(44, 95, 138, 0.28)',
  },
  securityContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 56,
    paddingRight: 28,
    paddingBottom: 28,
    paddingLeft: 28,
  },
  securityTextBlock: {
    width: 260,
  },
  securityTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
    maxWidth: 220,
  },
  securityBody: {
    marginTop: 8,
    color: '#B3D8FF',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    maxWidth: 260,
  },
  securityActionsRow: {
    width: '100%',
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewButton: {
    width: 144,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#FEB234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewButtonText: {
    color: '#6D4700',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  exportButton: {
    width: 144,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF33',
    backgroundColor: '#FFFFFF1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exportButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  bottomNavShell: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderWidth: 1,
    borderColor: '#D7E8F4',
    backgroundColor: '#EEF8FF',
  },
  bottomNav: {
    minHeight: 98,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  bottomNavItem: {
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 999,
  },
  bottomNavItemActive: {
    width: 68,
    height: 68,
    backgroundColor: '#094771',
  },
  bottomNavLabel: {
    marginTop: 6,
    color: '#42474E',
    fontSize: 10,
    fontFamily: fonts.regular,
    lineHeight: 12,
    textAlign: 'center',
  },
  bottomNavLabelActive: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.86,
  },
});

export default HomeScreen;
