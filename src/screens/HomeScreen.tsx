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
import ActiveSvg from '../images/active.svg';
import {useAuth} from '../context/AuthContext';
import ArrowSvg from '../images/arrow.svg';
import BackSvg from '../images/back.svg';
import BackgroundSvg from '../images/background.svg';
import VaultBackgroundSvg from '../images/bg_2.svg';
import BirthdaySvg from '../images/birthday.svg';
import ButtonSvg from '../images/Button.svg';
import BucketSvg from '../images/bucket.svg';
import CarSvg from '../images/car.svg';
import CollectionSvg from '../images/collection.svg';
import DateSvg from '../images/date.svg';
import DatesSvg from '../images/dates.svg';
import DefenceSvg from '../images/defence.svg';
import DotSvg from '../images/dot.svg';
import EditSvg from '../images/edit.svg';
import EncryptedSvg from '../images/encrypted.svg';
import EyeSvg from '../images/eye.svg';
import FitnessSvg from '../images/fitness.svg';
import FingerSvg from '../images/finger.svg';
import HealthSvg from '../images/health.svg';
import HiSvg from '../images/HI.svg';
import HomeNonSvg from '../images/home_non.svg';
import HomeSelectSvg from '../images/home_select.svg';
import DividerSvg from '../images/Horizontal Divider.svg';
import InsuranceSvg from '../images/insurance.svg';
import JournelSvg from '../images/journel.svg';
import LocationSvg from '../images/location.svg';
import MaintainceSvg from '../images/maintaince.svg';
import NotificationSvg from '../images/notification.svg';
import NotificationDefaultSvg from '../images/notification_def.svg';
import PersonalSvg from '../images/personal.svg';
import PetsSvg from '../images/pets.svg';
import PhotoSvg from '../images/photo.svg';
import PlanSvg from '../images/plan.svg';
import PlannerSvg from '../images/planner.svg';
import PlusSvg from '../images/plus.svg';
import ProfileSvg from '../images/profile.svg';
import ProfileCardSvg from '../images/profile_1.svg';
import RecurringSvg from '../images/recurring.svg';
import RecordsSvg from '../images/records.svg';
import RecordsNonSvg from '../images/records_non.svg';
import RecordsSelectedSvg from '../images/records_selected.svg';
import ReminderSvg from '../images/reminder.svg';
import RemindersSvg from '../images/reminders.svg';
import SavingsSvg from '../images/savings.svg';
import SearchGraySvg from '../images/search_gray.svg';
import SearchSvg from '../images/search.svg';
import StatementSvg from '../images/statement.svg';
import VehicleSvg from '../images/vehicle.svg';
import WarningSvg from '../images/warning.svg';
import WalletSvg from '../images/wallert.svg';
import {fonts} from '../theme/fonts';

type BottomTabKey = 'home' | 'records' | 'reminders' | 'planner' | 'profile';
type RecordsView = 'browser' | 'personal-identity';

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

interface RecordCategoryData {
  id: string;
  title: string;
  count: string;
  icon: React.JSX.Element;
}

interface IdentityRecordData {
  id: string;
  name: string;
  dateOfBirth: string;
  identifierPrefix: string;
  identifierSuffix: string;
  status: string;
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

function getCompactProfileName(name: string | null | undefined): string {
  const trimmedName = name?.trim();

  if (!trimmedName) {
    return 'Sarah J.';
  }

  const parts = trimmedName.split(/\s+/);

  if (parts.length === 1) {
    return parts[0];
  }

  return `${parts[0]} ${parts[parts.length - 1][0]}.`;
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
      style={({pressed}) => [
        styles.headerAction,
        pressed ? styles.pressed : null,
      ]}
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
      onPress={() =>
        Alert.alert('Coming Soon', `${title} details will be connected next.`)
      }>
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
}: RecentItemData & {
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [styles.recentRow, pressed ? styles.pressed : null]}
      onPress={onPress}>
      <View style={styles.recentRowLeft}>
        <View style={styles.recentIconChip}>{icon}</View>
        <View style={styles.recentTextWrap}>
          <Text style={styles.recentTitle}>{title}</Text>
          <Text style={styles.recentSubtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={styles.recentArrowWrap}>
        <ArrowSvg width={10} height={16} />
      </View>
    </Pressable>
  );
}

function RecentItemDivider(): React.JSX.Element {
  return (
    <View style={styles.recentDividerWrap}>
      <DividerSvg width="100%" height={1} />
    </View>
  );
}

function RecordCategoryCard({
  title,
  count,
  icon,
  width,
  onPress,
}: RecordCategoryData & {
  width: number;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.recordCategoryCard,
        {width},
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.recordCategoryIconWrap}>{icon}</View>
      <Text style={styles.recordCategoryTitle}>{title}</Text>
      <View style={styles.recordCategoryCountChip}>
        <Text style={styles.recordCategoryCountText}>{count}</Text>
      </View>
    </Pressable>
  );
}

function RecordNumberDots({count}: {count: number}): React.JSX.Element {
  return (
    <View style={styles.personalRecordDotsRow}>
      {Array.from({length: count}).map((_, index) => (
        <View key={`mask-dot-${index}`} style={styles.personalRecordDotWrap}>
          <DotSvg width={6} height={6} />
        </View>
      ))}
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
      <Text
        style={[
          styles.bottomNavLabel,
          active ? styles.bottomNavLabelActive : null,
        ]}>
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
  const [recordsView, setRecordsView] = useState<RecordsView>('browser');

  const contentWidth = Math.min(width - 32, 402);
  const dueCardWidth = Math.min(Math.max(width * 0.72, 252), 284);
  const recordCardWidth = (contentWidth - 12) / 2;
  const firstName = getFirstName(user?.name);
  const personalProfileName = user?.name?.trim() || 'Sarah Johnson';
  const personalProfileCardName = getCompactProfileName(user?.name);
  const hasUnreadNotifications = !isRefreshing;
  const isRecordsTab = activeTab === 'records';
  const isPersonalIdentityView =
    isRecordsTab && recordsView === 'personal-identity';

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
      icon: <HealthSvg width={34} height={34} />,
    },
    {
      id: 'car',
      title: 'Car Service Log',
      subtitle: 'Updated Yesterday',
      icon: <CarSvg width={34} height={34} />,
    },
    {
      id: 'mortgage',
      title: 'Mortgage Statement',
      subtitle: 'Updated 3d ago',
      icon: <StatementSvg width={34} height={34} />,
    },
  ];

  const recordCategories: RecordCategoryData[] = [
    {
      id: 'personal-identity',
      title: 'Personal &\nIdentity',
      count: '12 Records',
      icon: <PersonalSvg width={56} height={56} />,
    },
    {
      id: 'banking-cards',
      title: 'Banking &\nCards',
      count: '08 Records',
      icon: <WalletSvg width={56} height={56} />,
    },
    {
      id: 'recurring-payments',
      title: 'Recurring\nPayments',
      count: '06 Records',
      icon: <RecurringSvg width={56} height={56} />,
    },
    {
      id: 'insurance-policies',
      title: 'Insurance\nPolicies',
      count: '04 Records',
      icon: <InsuranceSvg width={56} height={56} />,
    },
    {
      id: 'vehicle-maintenance',
      title: 'Vehicle\nMaintenance',
      count: '05 Records',
      icon: <VehicleSvg width={56} height={56} />,
    },
    {
      id: 'health-fitness',
      title: 'Health &\nFitness',
      count: '07 Records',
      icon: <FitnessSvg width={56} height={56} />,
    },
    {
      id: 'important-dates',
      title: 'Important\nDates',
      count: '09 Records',
      icon: <DatesSvg width={56} height={56} />,
    },
    {
      id: 'family-pets',
      title: 'Family Pets',
      count: '03 Records',
      icon: <PetsSvg width={56} height={56} />,
    },
    {
      id: 'pensions-savings',
      title: 'Pensions &\nSavings',
      count: '10 Records',
      icon: <SavingsSvg width={56} height={56} />,
    },
    {
      id: 'bucket-list',
      title: 'Bucket List',
      count: '11 Records',
      icon: <BucketSvg width={56} height={56} />,
    },
    {
      id: 'photo-orders',
      title: 'Photo Orders',
      count: '06 Records',
      icon: <PhotoSvg width={56} height={56} />,
    },
    {
      id: 'location-info',
      title: 'Location Info',
      count: '05 Records',
      icon: <LocationSvg width={56} height={56} />,
    },
    {
      id: 'eisenhower-planner',
      title: 'Eisenhower\nPlanner',
      count: '08 Records',
      icon: <PlanSvg width={56} height={56} />,
    },
    {
      id: 'notes-journal',
      title: 'Notes &\nJournal',
      count: '14 Records',
      icon: <JournelSvg width={56} height={56} />,
    },
    {
      id: 'home-maintenance',
      title: 'Home\nMaintenance',
      count: '04 Records',
      icon: <MaintainceSvg width={56} height={56} />,
    },
  ];

  const personalIdentityRecords: IdentityRecordData[] = [
    {
      id: 'primary-identity',
      name: personalProfileName,
      dateOfBirth: '12/05/1985',
      identifierPrefix: 'JW',
      identifierSuffix: 'C',
      status: 'Primary',
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

  const openRecordCategory = (title: string, count: string) => {
    Alert.alert(
      title.replace(/\n/g, ' '),
      `${count} available in this category.`,
    );
  };

  const handleRecordCategoryPress = (category: RecordCategoryData) => {
    if (category.id === 'personal-identity') {
      setRecordsView('personal-identity');
      return;
    }

    openRecordCategory(category.title, category.count);
  };

  const handleRecordsBack = () => {
    if (recordsView === 'personal-identity') {
      setRecordsView('browser');
      return;
    }

    setActiveTab('home');
  };

  const handleTabPress = (tab: BottomTabKey, label: string) => {
    setActiveTab(tab);
    setRecordsView('browser');

    if (tab !== 'home' && tab !== 'records') {
      openPlaceholder(label);
    }
  };

  const notificationIcon = hasUnreadNotifications ? (
    <NotificationSvg width={32} height={36} />
  ) : (
    <NotificationDefaultSvg width={32} height={36} />
  );

  const homeContent = (
    <>
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

      <View style={styles.recentCard}>
        <Text style={styles.recentCardTitle}>Recently Updated</Text>

        <View style={styles.recentList}>
          {recentItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <RecentItemRow
                {...item}
                onPress={() => openPlaceholder(item.title)}
              />
              {index < recentItems.length - 1 ? <RecentItemDivider /> : null}
            </React.Fragment>
          ))}
        </View>
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
              {
                'All your sensitive records are\nencrypted and protected with\nenterprise-grade security. Organize\nyour digital life with confidence.'
              }
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
    </>
  );

  const recordsContent = (
    <>
      <View style={styles.recordsIntroCard}>
        <Text style={styles.recordsTitle}>Records Browser</Text>
        <Text style={styles.recordsDescription}>
          Access and manage all your secure life documentation.
        </Text>

        <Pressable
          style={({pressed}) => [
            styles.recordsSearchField,
            pressed ? styles.pressed : null,
          ]}
          onPress={() => openPlaceholder('Search categories or documents')}>
          <SearchGraySvg width={18} height={18} />
          <Text style={styles.recordsSearchPlaceholder}>
            Search categories or documents...
          </Text>
        </Pressable>
      </View>

      <View style={styles.recordsGrid}>
        {recordCategories.map(category => (
          <RecordCategoryCard
            key={category.id}
            width={recordCardWidth}
            {...category}
            onPress={() => handleRecordCategoryPress(category)}
          />
        ))}
      </View>
    </>
  );

  const personalIdentityContent = (
    <>
      <View style={styles.personalIdentityIntroCard}>
        <FingerSvg
          width={84}
          height={96}
          style={styles.personalIdentityFingerprint}
        />
        <Text style={styles.personalIdentityIntroTitle}>
          Active Identity Profiles
        </Text>
        <Text style={styles.personalIdentityIntroBody}>
          Securely manage and access your essential personal identification
          details. All data is locally encrypted for your privacy.
        </Text>

        <View style={styles.personalIdentityInfoChipStack}>
          <Pressable
            style={({pressed}) => [
              styles.personalIdentityInfoChip,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Active identity records')}>
            <ActiveSvg width={16} height={20} />
            <Text style={styles.personalIdentityInfoChipText}>
              1 Active Record
            </Text>
          </Pressable>

          <Pressable
            style={({pressed}) => [
              styles.personalIdentityInfoChip,
              styles.personalIdentityInfoChipSecondary,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Encrypted storage')}>
            <EncryptedSvg width={16} height={20} />
            <Text
              style={[
                styles.personalIdentityInfoChipText,
                styles.personalIdentityInfoChipTextSecondary,
              ]}>
              Encrypted Storage
            </Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.personalProfileCard,
          pressed ? styles.pressed : null,
        ]}
        onPress={() => openPlaceholder('Primary profile')}>
        <View style={styles.personalProfileContent}>
          <View style={styles.personalProfileTopRow}>
            <ProfileCardSvg width={34} height={34} />

            <View style={styles.personalProfileLatestChip}>
              <Text style={styles.personalProfileLatestText}>LATEST</Text>
            </View>
          </View>

          <View style={styles.personalProfileTextBlock}>
            <Text style={styles.personalProfileName}>
              {personalProfileCardName}
            </Text>
            <Text style={styles.personalProfileLabel}>PRIMARY PROFILE</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.personalRecordsHeader}>
        <Text style={styles.personalRecordsTitle}>SAVED RECORDS</Text>
        <Text style={styles.personalRecordsSyncText}>
          Last synced 2 mins ago
        </Text>
      </View>

      <View style={styles.personalRecordsList}>
        {personalIdentityRecords.map(record => (
          <Pressable
            key={record.id}
            style={({pressed}) => [
              styles.personalRecordCard,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder(record.name)}>
            <View style={styles.personalRecordTopRow}>
              <View style={styles.personalRecordAvatar}>
                <ProfileSvg width={20} height={20} />
              </View>

              <View style={styles.personalRecordIdentityBlock}>
                <Text style={styles.personalRecordName}>{record.name}</Text>

                <View style={styles.personalRecordDobRow}>
                  <BirthdaySvg width={11} height={12} />
                  <Text style={styles.personalRecordDobText}>
                    DOB: {record.dateOfBirth}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.personalRecordBottomRow}>
              <View style={styles.personalRecordMetaContent}>
                <View style={styles.personalRecordMetaLabels}>
                  <View style={styles.personalRecordMetaColumn}>
                    <Text style={styles.personalRecordMetaLabel}>
                      NI NUMBER
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.personalRecordMetaColumn,
                      styles.personalRecordStatusColumn,
                    ]}>
                    <Text style={styles.personalRecordMetaLabel}>STATUS</Text>
                  </View>
                </View>

                <View style={styles.personalRecordMetaValues}>
                  <View style={styles.personalRecordMetaColumn}>
                    <View style={styles.personalRecordNumberRow}>
                      <Text style={styles.personalRecordNumberText}>
                        {record.identifierPrefix}
                      </Text>
                      <RecordNumberDots count={5} />
                      <Text style={styles.personalRecordNumberText}>
                        {record.identifierSuffix}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.personalRecordMetaColumn,
                      styles.personalRecordStatusColumn,
                    ]}>
                    <View style={styles.personalRecordStatusChip}>
                      <DotSvg width={6} height={6} />
                      <Text style={styles.personalRecordStatusText}>
                        {record.status}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.personalRecordActionsRow}>
                  <View style={styles.personalRecordActionIcon}>
                    <EyeSvg width={32} height={36} />
                  </View>
                  <View style={styles.personalRecordActionIcon}>
                    <EditSvg width={28} height={28} />
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={({pressed}) => [
          styles.personalVaultCard,
          pressed ? styles.pressed : null,
        ]}
        onPress={() => openPlaceholder('Secure Vault')}>
        <VaultBackgroundSvg
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          style={styles.personalVaultPattern}
        />

        <View style={styles.personalVaultContent}>
          <Text style={styles.personalVaultTitle}>Secure Vault</Text>
          <Text style={styles.personalVaultBody}>
            {
              'All your identification cards, digital keys, and personal credentials in one encrypted place.'
            }
          </Text>
        </View>
      </Pressable>
    </>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerSurface}>
            <View style={styles.topBar}>
              {isPersonalIdentityView ? (
                <>
                  <View style={styles.recordsDetailTitleRow}>
                    <Pressable
                      style={({pressed}) => [
                        styles.topBarLeadingAction,
                        pressed ? styles.pressed : null,
                      ]}
                      onPress={handleRecordsBack}>
                      <BackSvg width={32} height={32} />
                    </Pressable>
                    <Text style={styles.recordsDetailTitle}>
                      Personal Details
                    </Text>
                  </View>

                  <View style={styles.recordsDetailActionsRow}>
                    <Pressable
                      style={({pressed}) => [
                        styles.recordsAddButton,
                        pressed ? styles.pressed : null,
                      ]}
                      onPress={() => openPlaceholder('Add identity record')}>
                      <PlusSvg width={12} height={12} />
                      <Text style={styles.recordsAddButtonText}>Add</Text>
                    </Pressable>

                    <HeaderActionButton
                      onPress={() => openPlaceholder('Notifications')}>
                      <NotificationDefaultSvg width={32} height={36} />
                    </HeaderActionButton>
                  </View>
                </>
              ) : isRecordsTab ? (
                <>
                  <View style={styles.brandRow}>
                    <Pressable
                      style={({pressed}) => [
                        styles.topBarLeadingAction,
                        pressed ? styles.pressed : null,
                      ]}
                      onPress={() => setActiveTab('home')}>
                      <BackSvg width={32} height={32} />
                    </Pressable>
                    <Text style={styles.brandText}>Log4Life</Text>
                  </View>

                  <View style={styles.headerActionsRow}>
                    <HeaderActionButton
                      onPress={() => openPlaceholder('Notifications')}>
                      <NotificationDefaultSvg width={32} height={36} />
                    </HeaderActionButton>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.brandRow}>
                    <HeaderActionButton onPress={openQuickActions}>
                      <ButtonSvg width={34} height={28} />
                    </HeaderActionButton>
                    <Text style={styles.brandText}>Log4Life</Text>
                  </View>

                  <View style={styles.headerActionsRow}>
                    <HeaderActionButton
                      onPress={() => openPlaceholder('Search')}>
                      <SearchSvg width={34} height={34} />
                    </HeaderActionButton>
                    <HeaderActionButton
                      onPress={() => openPlaceholder('Notifications')}>
                      {notificationIcon}
                    </HeaderActionButton>
                  </View>
                </>
              )}
            </View>
          </View>

          <View style={[styles.contentInner, {width: contentWidth}]}>
            {isRecordsTab
              ? isPersonalIdentityView
                ? personalIdentityContent
                : recordsContent
              : homeContent}
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
    paddingHorizontal: 16,
    paddingVertical: 0,
    marginBottom: 22,
  },
  contentInner: {
    alignSelf: 'center',
  },
  topBar: {
    height: 64,
    width: '100%',
    maxWidth: 402,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarLeadingAction: {
    alignItems: 'center',
    justifyContent: 'center',
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
  recordsDetailTitleRow: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordsDetailTitle: {
    marginLeft: 8,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.bold,
    lineHeight: 24,
    letterSpacing: -0.18,
    flexShrink: 1,
  },
  recordsDetailActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  recordsAddButton: {
    minWidth: 72,
    height: 32,
    borderRadius: 999,
    backgroundColor: '#0A5688',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordsAddButtonText: {
    marginLeft: 6,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  heroCard: {
    marginTop: 0,
  },
  recordsIntroCard: {
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4EAF0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 3,
  },
  recordsTitle: {
    color: '#094771',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  recordsDescription: {
    marginTop: 6,
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  recordsSearchField: {
    marginTop: 18,
    minHeight: 64,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C9D3DC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordsSearchPlaceholder: {
    flex: 1,
    marginLeft: 12,
    color: '#6B7280',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  recordsGrid: {
    marginTop: 24,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  personalIdentityIntroCard: {
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4EAF0',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 18,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 3,
  },
  personalIdentityFingerprint: {
    position: 'absolute',
    top: -6,
    right: -4,
    opacity: 0.08,
  },
  personalIdentityIntroTitle: {
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  personalIdentityIntroBody: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    maxWidth: 272,
  },
  personalIdentityInfoChipStack: {
    marginTop: 18,
    alignItems: 'flex-start',
  },
  personalIdentityInfoChip: {
    minHeight: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A8C8E2',
    backgroundColor: '#DCEFFD',
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  personalIdentityInfoChipSecondary: {
    marginTop: 12,
    borderColor: '#CBD6DE',
    backgroundColor: '#DCE7EE',
  },
  personalIdentityInfoChipText: {
    marginLeft: 8,
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 16,
  },
  personalIdentityInfoChipTextSecondary: {
    color: '#815500',
  },
  personalProfileCard: {
    marginTop: 18,
    minHeight: 140,
    borderRadius: 12,
    backgroundColor: '#2C5F8A',
    overflow: 'hidden',
    position: 'relative',
  },
  personalProfileContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  personalProfileTextBlock: {
    alignSelf: 'flex-start',
  },
  personalProfileTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personalProfileLatestChip: {
    minHeight: 24,
    borderRadius: 999,
    backgroundColor: '#0B4D77',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  personalProfileLatestText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: fonts.medium,
    lineHeight: 12,
    letterSpacing: 0.8,
  },
  personalProfileName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: fonts.regular,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  personalProfileLabel: {
    marginTop: 4,
    color: '#D7E9F7',
    fontSize: 12,
    fontFamily: fonts.medium,
    lineHeight: 16,
    letterSpacing: 1.56,
  },
  personalRecordsHeader: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personalRecordsTitle: {
    color: '#5C646D',
    fontSize: 11,
    fontFamily: fonts.medium,
    lineHeight: 14,
    letterSpacing: 1.54,
  },
  personalRecordsSyncText: {
    color: '#7A7F86',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  personalRecordsList: {
    marginTop: 14,
  },
  personalRecordCard: {
    width: '100%',
    minHeight: 138,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D8E4EF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  personalRecordTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  personalRecordAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#DFF0FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  personalRecordIdentityBlock: {
    flex: 1,
    minWidth: 0,
    paddingTop: 2,
  },
  personalRecordName: {
    color: '#091E27',
    fontSize: 17,
    fontFamily: fonts.semiBold,
    lineHeight: 22,
  },
  personalRecordDobRow: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalRecordDobText: {
    marginLeft: 4,
    color: '#6B7280',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  personalRecordBottomRow: {
    marginTop: 16,
  },
  personalRecordMetaContent: {
    flex: 1,
    minWidth: 0,
    paddingBottom: 1,
  },
  personalRecordMetaLabels: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalRecordMetaLabel: {
    color: '#7A7F86',
    fontSize: 11,
    fontFamily: fonts.medium,
    lineHeight: 14,
    letterSpacing: 1.2,
  },
  personalRecordMetaColumn: {
    minWidth: 118,
  },
  personalRecordStatusColumn: {
    minWidth: 88,
    marginLeft: 28,
  },
  personalRecordMetaValues: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalRecordNumberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalRecordNumberText: {
    color: '#094771',
    fontSize: 16,
    fontFamily: fonts.semiBold,
    lineHeight: 20,
  },
  personalRecordDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  personalRecordDotWrap: {
    marginHorizontal: 2,
  },
  personalRecordStatusChip: {
    minHeight: 26,
    borderRadius: 999,
    backgroundColor: '#D6EBF8',
    paddingHorizontal: 12,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  personalRecordStatusText: {
    marginLeft: 6,
    color: '#094771',
    fontSize: 11,
    fontFamily: fonts.medium,
    lineHeight: 14,
  },
  personalRecordActionsRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  personalRecordActionIcon: {
    marginLeft: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalVaultCard: {
    marginTop: 18,
    width: '100%',
    aspectRatio: 356 / 190,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  personalVaultPattern: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  personalVaultContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 28,
  },
  personalVaultTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
    maxWidth: 200,
  },
  personalVaultBody: {
    marginTop: 8,
    color: '#E4F3FF',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 24,
    maxWidth: 292,
  },
  recordCategoryCard: {
    minHeight: 168,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6E2EC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  recordCategoryIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordCategoryTitle: {
    marginTop: 14,
    minHeight: 48,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    textAlign: 'center',
  },
  recordCategoryCountChip: {
    marginTop: 10,
    minHeight: 24,
    borderRadius: 999,
    backgroundColor: '#DFF0FB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  recordCategoryCountText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
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
    marginTop: 26,
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D8E4EF',
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 14,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  recentCardTitle: {
    color: '#091E27',
    fontSize: 24,
    fontFamily: fonts.semiBold,
    lineHeight: 30,
    marginBottom: 18,
  },
  recentList: {
    width: '100%',
  },
  recentRow: {
    minHeight: 92,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  recentRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  recentIconChip: {
    width: 76,
    height: 76,
    borderRadius: 14,
    backgroundColor: '#DFF0FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  recentTextWrap: {
    flex: 1,
    paddingRight: 16,
  },
  recentTitle: {
    color: '#091E27',
    fontSize: 17,
    fontFamily: fonts.semiBold,
    lineHeight: 22,
  },
  recentSubtitle: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 14,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  recentArrowWrap: {
    width: 20,
    alignItems: 'flex-end',
  },
  recentDividerWrap: {
    width: '100%',
    alignItems: 'center',
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
