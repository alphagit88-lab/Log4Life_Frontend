import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import BellSvg from '../images/bell.svg';
import BirthdaySvg from '../images/birthday.svg';
import ButtonSvg from '../images/Button.svg';
import BucketSvg from '../images/bucket.svg';
import CarSvg from '../images/car.svg';
import CollectionSvg from '../images/collection.svg';
import DateSvg from '../images/date.svg';
import DatesSvg from '../images/dates.svg';
import DefenceSvg from '../images/defence.svg';
import DocSvg from '../images/doc.svg';
import DotSvg from '../images/dot.svg';
import EditSvg from '../images/edit.svg';
import EncryptedSvg from '../images/encrypted.svg';
import EyeSvg from '../images/eye.svg';
import FitnessSvg from '../images/fitness.svg';
import FingerSvg from '../images/finger.svg';
import Glow1Svg from '../images/glow_1.svg';
import Glow2Svg from '../images/glow_2.svg';
import HealthSvg from '../images/health.svg';
import HiSvg from '../images/HI.svg';
import HomeNonSvg from '../images/home_non.svg';
import HomeSelectSvg from '../images/home_select.svg';
import DividerSvg from '../images/Horizontal Divider.svg';
import InsuranceSvg from '../images/insurance.svg';
import JournelSvg from '../images/journel.svg';
import LocationSvg from '../images/location.svg';
import MaintainceSvg from '../images/maintaince.svg';
import MonthlySvg from '../images/monthly.svg';
import NotificationSvg from '../images/notification.svg';
import NotificationDefaultSvg from '../images/notification_def.svg';
import NotesSvg from '../images/notes.svg';
import PersonalSvg from '../images/personal.svg';
import PetsSvg from '../images/pets.svg';
import PigSvg from '../images/pig.svg';
import PhotoSvg from '../images/photo.svg';
import PlanSvg from '../images/plan.svg';
import PlannerSvg from '../images/planner.svg';
import PlusSvg from '../images/plus.svg';
import ProfileSvg from '../images/profile.svg';
import ProfileCardSvg from '../images/profile_1.svg';
import ProfileCardPrimarySvg from '../images/profile_1_primary.svg';
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
import TapSvg from '../images/tap.svg';
import TrashSvg from '../images/trash.svg';
import TrashCompactSvg from '../images/trash_2.svg';
import UploadSvg from '../images/upload.svg';
import UploadDocumentSvg from '../images/upload_2.svg';
import VehicleSvg from '../images/vehicle.svg';
import WarningSvg from '../images/warning.svg';
import WarningAlarmSvg from '../images/warning_alarm.svg';
import WalletSvg from '../images/wallert.svg';
import WrongSvg from '../images/wrong.svg';
import {fonts} from '../theme/fonts';

type BottomTabKey = 'home' | 'records' | 'reminders' | 'planner' | 'profile';
type RecordsView =
  | 'browser'
  | 'personal-identity'
  | 'personal-identity-add'
  | 'banking-cards'
  | 'banking-cards-add';

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

interface BankingAccountData {
  id: string;
  title: string;
  accountNumber: string;
  balance: string;
  status: 'Active' | 'Growth';
  icon: React.JSX.Element;
}

interface BankingReminderData {
  id: string;
  title: string;
  schedule: string;
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

function getBankDisplayName(name: string): string {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return 'Barclays Bank';
  }

  return /bank$/i.test(trimmedName) ? trimmedName : `${trimmedName} Bank`;
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

function BankingAccountCard({
  title,
  accountNumber,
  balance,
  status,
  icon,
  onPress,
}: BankingAccountData & {
  onPress: () => void;
}): React.JSX.Element {
  const isGrowth = status === 'Growth';

  return (
    <Pressable
      style={({pressed}) => [
        styles.bankingAccountCard,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.bankingAccountIconWrap}>{icon}</View>
      <Text style={styles.bankingAccountTitle}>{title}</Text>
      <Text style={styles.bankingAccountNumber}>{accountNumber}</Text>

      <View style={styles.bankingAccountFooter}>
        <Text style={styles.bankingAccountBalance}>{balance}</Text>
        <View
          style={[
            styles.bankingAccountStatusChip,
            isGrowth ? styles.bankingAccountStatusChipGrowth : null,
          ]}>
          <Text
            style={[
              styles.bankingAccountStatusText,
              isGrowth ? styles.bankingAccountStatusTextGrowth : null,
            ]}>
            {status}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

function BankingReminderRow({
  title,
  schedule,
  icon,
  onPress,
}: BankingReminderData & {
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.bankingReminderRow,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.bankingReminderRowLeft}>
        <View style={styles.bankingReminderIconWrap}>{icon}</View>
        <View style={styles.bankingReminderTextWrap}>
          <Text style={styles.bankingReminderRowTitle}>{title}</Text>
          <Text style={styles.bankingReminderRowSchedule}>{schedule}</Text>
        </View>
      </View>

      <ArrowSvg width={8} height={12} />
    </Pressable>
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
  const [identityDraftFullName, setIdentityDraftFullName] = useState(
    () => user?.name?.trim() || 'Sarah Johnson',
  );
  const [identityDraftDateOfBirth, setIdentityDraftDateOfBirth] = useState('');
  const [identityDraftNiNumber, setIdentityDraftNiNumber] =
    useState('QQ 12 34 56 C');
  const [identityDraftNotes, setIdentityDraftNotes] = useState('');
  const [identityDraftRenewalReminder, setIdentityDraftRenewalReminder] =
    useState(true);
  const [hasUploadedIdentityDocument, setHasUploadedIdentityDocument] =
    useState(true);
  const [bankingDraftBankName, setBankingDraftBankName] = useState('Barclays');
  const [bankingDraftAccountType, setBankingDraftAccountType] =
    useState('Current');
  const [bankingDraftLast4Digits, setBankingDraftLast4Digits] =
    useState('4821');
  const [
    isBankingAccountTypeDropdownOpen,
    setIsBankingAccountTypeDropdownOpen,
  ] = useState(false);
  const [bankingDraftNotes, setBankingDraftNotes] = useState('');
  const [
    bankingDraftInterestReviewReminder,
    setBankingDraftInterestReviewReminder,
  ] = useState(true);
  const [hasUploadedBankingDocument, setHasUploadedBankingDocument] =
    useState(true);

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
  const isPersonalIdentityAddView =
    isRecordsTab && recordsView === 'personal-identity-add';
  const isBankingCardsView = isRecordsTab && recordsView === 'banking-cards';
  const isBankingCardsAddView =
    isRecordsTab && recordsView === 'banking-cards-add';
  const isRecordsDetailView = isRecordsTab && recordsView !== 'browser';
  const recordsDetailTitle = isBankingCardsView || isBankingCardsAddView
    ? 'Banking & Cards'
    : 'Personal Details';
  const shouldShowRecordsAddButton =
    isPersonalIdentityView || isBankingCardsView;
  const bankingDraftDisplayName = getBankDisplayName(bankingDraftBankName);
  const bankingDraftLastFourDisplay = bankingDraftLast4Digits || '4821';
  const bankingDraftCardLabel = `${
    bankingDraftAccountType.trim() || 'Current'
  } Account`.toUpperCase();
  const bankingAccountTypeOptions = ['Current', 'Savings', 'Business', 'Joint'];

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

  const bankingAccounts: BankingAccountData[] = [
    {
      id: 'barclays-current',
      title: 'Barclays Current Account',
      accountNumber: '**** 4821',
      balance: '$2,450.00',
      status: 'Active',
      icon: <StatementSvg width={48} height={48} />,
    },
    {
      id: 'hsbc-savings',
      title: 'HSBC Savings',
      accountNumber: '**** 9034',
      balance: '$12,100.00',
      status: 'Growth',
      icon: <PigSvg width={48} height={48} />,
    },
  ];

  const bankingReminders: BankingReminderData[] = [
    {
      id: 'barclays-interest',
      title: 'Review Barclays Interest Rate',
      schedule: 'Scheduled for: Tomorrow, 09:00 AM',
      icon: <BellSvg width={20} height={21} />,
    },
    {
      id: 'monthly-transfer',
      title: 'Monthly Savings Transfer',
      schedule: 'Scheduled for: 25th Oct, 12:00 PM',
      icon: <MonthlySvg width={18} height={20} />,
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

  const resetIdentityDraft = () => {
    setIdentityDraftFullName(user?.name?.trim() || 'Sarah Johnson');
    setIdentityDraftDateOfBirth('');
    setIdentityDraftNiNumber('QQ 12 34 56 C');
    setIdentityDraftNotes('');
    setIdentityDraftRenewalReminder(true);
    setHasUploadedIdentityDocument(true);
  };

  const resetBankingDraft = () => {
    setBankingDraftBankName('Barclays');
    setBankingDraftAccountType('Current');
    setBankingDraftLast4Digits('4821');
    setIsBankingAccountTypeDropdownOpen(false);
    setBankingDraftNotes('');
    setBankingDraftInterestReviewReminder(true);
    setHasUploadedBankingDocument(true);
  };

  const handleRecordCategoryPress = (category: RecordCategoryData) => {
    if (category.id === 'personal-identity') {
      setRecordsView('personal-identity');
      return;
    }

    if (category.id === 'banking-cards') {
      setRecordsView('banking-cards');
      return;
    }

    openRecordCategory(category.title, category.count);
  };

  const openAddIdentityRecord = () => {
    resetIdentityDraft();
    setRecordsView('personal-identity-add');
  };

  const openAddBankingRecord = () => {
    resetBankingDraft();
    setRecordsView('banking-cards-add');
  };

  const handleRecordsAddPress = () => {
    if (isPersonalIdentityView) {
      openAddIdentityRecord();
      return;
    }

    if (isBankingCardsView) {
      openAddBankingRecord();
    }
  };

  const handleBrowseIdentityDocument = () => {
    setHasUploadedIdentityDocument(true);
  };

  const handleDeleteIdentityDocument = () => {
    setHasUploadedIdentityDocument(false);
  };

  const handleDeleteIdentityEntry = () => {
    Alert.alert(
      'Delete This Entry',
      'Remove this draft personal detail entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            resetIdentityDraft();
            setRecordsView('personal-identity');
          },
        },
      ],
    );
  };

  const closeBankingAccountTypeDropdown = () => {
    setIsBankingAccountTypeDropdownOpen(false);
  };

  const handleBrowseBankingDocument = () => {
    closeBankingAccountTypeDropdown();
    setHasUploadedBankingDocument(true);
  };

  const handleDeleteBankingDocument = () => {
    closeBankingAccountTypeDropdown();
    setHasUploadedBankingDocument(false);
  };

  const handleToggleBankingAccountType = () => {
    setIsBankingAccountTypeDropdownOpen(currentValue => !currentValue);
  };

  const handleSelectBankingAccountType = (accountType: string) => {
    setBankingDraftAccountType(accountType);
    closeBankingAccountTypeDropdown();
  };

  const handleBankingLast4DigitsChange = (value: string) => {
    closeBankingAccountTypeDropdown();
    setBankingDraftLast4Digits(value.replace(/\D/g, '').slice(0, 4));
  };

  const handleBankingBankNameChange = (value: string) => {
    closeBankingAccountTypeDropdown();
    setBankingDraftBankName(value);
  };

  const handleBankingNotesChange = (value: string) => {
    closeBankingAccountTypeDropdown();
    setBankingDraftNotes(value);
  };

  const handleToggleBankingInterestReviewReminder = () => {
    closeBankingAccountTypeDropdown();
    setBankingDraftInterestReviewReminder(currentValue => !currentValue);
  };

  const handleDeleteBankingEntry = () => {
    Alert.alert('Delete This Entry', 'Remove this banking entry draft?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          resetBankingDraft();
          setRecordsView('banking-cards');
        },
      },
    ]);
  };

  const handleRecordsBack = () => {
    if (recordsView === 'personal-identity-add') {
      setRecordsView('personal-identity');
      return;
    }

    if (recordsView === 'banking-cards-add') {
      setRecordsView('banking-cards');
      return;
    }

    if (recordsView !== 'browser') {
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

  const personalIdentityAddContent = (
    <>
      <View style={styles.personalFormSectionCard}>
        <View style={styles.personalFormSectionHeader}>
          <ProfileCardPrimarySvg width={20} height={20} />
          <Text style={styles.personalFormSectionTitle}>Personal Identity</Text>
        </View>

        <View style={styles.personalFormFieldsGroup}>
          <View style={styles.personalFormField}>
            <Text style={styles.personalFormFieldLabel}>Full Name</Text>
            <View style={styles.personalFormInputShell}>
              <TextInput
                style={styles.personalFormInput}
                value={identityDraftFullName}
                onChangeText={setIdentityDraftFullName}
                placeholder="Enter full name"
                placeholderTextColor="#98A2B3"
                autoCapitalize="words"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>

          <View style={styles.personalFormField}>
            <Text style={styles.personalFormFieldLabel}>Date of Birth</Text>
            <View style={styles.personalFormInputShell}>
              <TextInput
                style={styles.personalFormInput}
                value={identityDraftDateOfBirth}
                onChangeText={setIdentityDraftDateOfBirth}
                placeholder="mm/dd/yyyy"
                placeholderTextColor="#98A2B3"
                autoCapitalize="none"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>

          <View style={styles.personalFormField}>
            <Text style={styles.personalFormFieldLabel}>NI Number</Text>
            <View style={styles.personalFormInputShell}>
              <TextInput
                style={styles.personalFormInput}
                value={identityDraftNiNumber}
                onChangeText={setIdentityDraftNiNumber}
                placeholder="QQ 12 34 56 C"
                placeholderTextColor="#98A2B3"
                autoCapitalize="characters"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>

          <Pressable
            style={({pressed}) => [
              styles.personalReminderCard,
              pressed ? styles.pressed : null,
            ]}
            onPress={() =>
              setIdentityDraftRenewalReminder(currentValue => !currentValue)
            }>
            <View style={styles.personalReminderTextBlock}>
              <Text style={styles.personalReminderTitle}>Renewal Reminder</Text>
              <Text style={styles.personalReminderSubtitle}>
                Notify before expiration
              </Text>
            </View>

            <View
              style={[
                styles.personalReminderToggle,
                identityDraftRenewalReminder
                  ? styles.personalReminderToggleActive
                  : null,
              ]}>
              <View style={styles.personalReminderToggleThumb} />
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.personalFormSectionCard}>
        <View style={styles.personalFormSectionHeader}>
          <UploadDocumentSvg width={16} height={20} />
          <Text style={styles.personalFormSectionTitle}>Document Upload</Text>
        </View>

        <View style={styles.personalUploadArea}>
          <UploadSvg width={44} height={40} />
          <Text style={styles.personalUploadTitle}>
            Drag and drop files here
          </Text>
          <Text style={styles.personalUploadSubtitle}>
            PDF, JPG, or PNG (Max 10MB)
          </Text>

          <Pressable
            style={({pressed}) => [
              styles.personalUploadButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={handleBrowseIdentityDocument}>
            <Text style={styles.personalUploadButtonText}>Browse Files</Text>
          </Pressable>
        </View>

        {hasUploadedIdentityDocument ? (
          <View style={styles.personalUploadFileCard}>
            <View style={styles.personalUploadFileInfo}>
              <DocSvg width={16} height={20} />
              <View style={styles.personalUploadFileTextWrap}>
                <Text style={styles.personalUploadFileName}>
                  Passport_Copy_2024.pdf
                </Text>
                <Text style={styles.personalUploadFileMeta}>2.4 MB</Text>
              </View>
            </View>

            <Pressable
              style={({pressed}) => [
                styles.personalUploadTrashButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={handleDeleteIdentityDocument}>
              <TrashSvg width={32} height={34} />
            </Pressable>
          </View>
        ) : null}
      </View>

      <View style={styles.personalFormSectionCard}>
        <View style={styles.personalFormSectionHeader}>
          <NotesSvg width={18} height={12} />
          <Text style={styles.personalFormSectionTitle}>Notes</Text>
        </View>

        <View style={styles.personalNotesInputShell}>
          <TextInput
            style={styles.personalNotesInput}
            value={identityDraftNotes}
            onChangeText={setIdentityDraftNotes}
            placeholder="Add any additional details or secure notes here..."
            placeholderTextColor="#6B7280"
            multiline
            textAlignVertical="top"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.personalDeleteEntryButton,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleDeleteIdentityEntry}>
        <TrashCompactSvg width={16} height={18} />
        <Text style={styles.personalDeleteEntryButtonText}>
          Delete This Entry
        </Text>
      </Pressable>
    </>
  );

  const bankingAddContent = (
    <>
      <View style={styles.bankingAddCard}>
        <View style={styles.bankingAddCardGlowLeft}>
          <Glow1Svg width={128} height={128} />
        </View>
        <View style={styles.bankingAddCardGlowRight}>
          <Glow2Svg width={128} height={128} />
        </View>

        <Text style={styles.bankingAddCardBankName}>
          {bankingDraftDisplayName}
        </Text>

        <View style={styles.bankingAddCardTapWrap}>
          <TapSvg width={20} height={20} />
        </View>

        <View style={styles.bankingAddCardFooter}>
          <View style={styles.bankingAddCardDigitsRow}>
            {Array.from({length: 3}).map((_, groupIndex) => (
              <View
                key={`card-dots-group-${groupIndex}`}
                style={styles.bankingAddCardDotsGroup}>
                {Array.from({length: 4}).map((__, dotIndex) => (
                  <View
                    key={`card-dot-${groupIndex}-${dotIndex}`}
                    style={styles.bankingAddCardDot}
                  />
                ))}
              </View>
            ))}
            <Text style={styles.bankingAddCardLastDigits}>
              {bankingDraftLastFourDisplay}
            </Text>
          </View>

          <Text style={styles.bankingAddCardAccountType}>
            {bankingDraftCardLabel}
          </Text>
        </View>
      </View>

      <View style={styles.bankingAddBalanceCard}>
        <Text style={styles.bankingAddBalanceLabel}>Active Balance</Text>
        <Text style={styles.bankingAddBalanceValue}>$12,450.00</Text>
      </View>

      <View style={styles.bankingAddFieldCard}>
        <Text style={styles.bankingAddFieldLabel}>Bank Name</Text>
        <View style={styles.bankingAddInputShell}>
          <TextInput
            style={styles.bankingAddInput}
            value={bankingDraftBankName}
            onChangeText={handleBankingBankNameChange}
            onFocus={closeBankingAccountTypeDropdown}
            placeholder="Enter bank name"
            placeholderTextColor="#98A2B3"
            autoCapitalize="words"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <View style={styles.bankingAddFieldCard}>
        <Text style={styles.bankingAddFieldLabel}>Account Type</Text>
        <Pressable
          style={({pressed}) => [
            styles.bankingAddSelectShell,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleToggleBankingAccountType}>
          <Text style={styles.bankingAddSelectValue}>
            {bankingDraftAccountType}
          </Text>
          <View
            style={[
              styles.bankingAddSelectIcon,
              isBankingAccountTypeDropdownOpen
                ? styles.bankingAddSelectIconOpen
                : null,
            ]}>
            <ArrowSvg width={8} height={12} />
          </View>
        </Pressable>

        {isBankingAccountTypeDropdownOpen ? (
          <View style={styles.bankingAddSelectDropdown}>
            {bankingAccountTypeOptions.map(accountType => (
              <Pressable
                key={accountType}
                style={({pressed}) => [
                  styles.bankingAddSelectOption,
                  bankingDraftAccountType === accountType
                    ? styles.bankingAddSelectOptionActive
                    : null,
                  pressed ? styles.pressed : null,
                ]}
                onPress={() => handleSelectBankingAccountType(accountType)}>
                <Text
                  style={[
                    styles.bankingAddSelectOptionText,
                    bankingDraftAccountType === accountType
                      ? styles.bankingAddSelectOptionTextActive
                      : null,
                  ]}>
                  {accountType}
                </Text>
              </Pressable>
            ))}
          </View>
        ) : null}
      </View>

      <View style={styles.bankingAddFieldCard}>
        <Text style={styles.bankingAddFieldLabel}>Last 4 Digits</Text>
        <View style={styles.bankingAddInputShell}>
          <TextInput
            style={styles.bankingAddInput}
            value={bankingDraftLast4Digits}
            onChangeText={handleBankingLast4DigitsChange}
            onFocus={closeBankingAccountTypeDropdown}
            placeholder="4821"
            placeholderTextColor="#98A2B3"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={4}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <View style={styles.bankingAddFieldCard}>
        <Text style={styles.bankingAddFieldLabel}>
          Document Upload for Statements
        </Text>

        <View style={styles.bankingAddUploadArea}>
          <UploadSvg width={44} height={40} />
          <Text style={styles.bankingAddUploadTitle}>
            Drag and drop or
            <Text style={styles.bankingAddUploadTitleHighlight}>
              {' '}
              browse files
            </Text>
          </Text>
          <Text style={styles.bankingAddUploadSubtitle}>
            PDF, JPG or PNG up to 10MB
          </Text>
        </View>

        {hasUploadedBankingDocument ? (
          <View style={styles.bankingAddUploadFileCard}>
            <View style={styles.bankingAddUploadFileInfo}>
              <DocSvg width={16} height={20} />
              <Text style={styles.bankingAddUploadFileName}>
                statement_june_2023.pdf
              </Text>
            </View>

            <Pressable
              style={({pressed}) => [
                styles.bankingAddUploadFileDeleteButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={handleDeleteBankingDocument}>
              <WrongSvg width={14} height={14} />
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={({pressed}) => [
              styles.personalUploadButton,
              styles.bankingAddUploadButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={handleBrowseBankingDocument}>
            <Text style={styles.personalUploadButtonText}>Browse Files</Text>
          </Pressable>
        )}
      </View>

      <Pressable
        style={({pressed}) => [
          styles.bankingAddReminderCard,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleToggleBankingInterestReviewReminder}>
        <View style={styles.bankingAddReminderLeft}>
          <WarningAlarmSvg width={32} height={36} />

          <View style={styles.bankingAddReminderTextBlock}>
            <Text style={styles.bankingAddReminderTitle}>
              Interest Review Reminder
            </Text>
            <Text style={styles.bankingAddReminderSubtitle}>
              Set for 12 months after opening
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.bankingAddReminderToggle,
            bankingDraftInterestReviewReminder
              ? styles.bankingAddReminderToggleActive
              : null,
          ]}>
          <View style={styles.bankingAddReminderToggleThumb} />
        </View>
      </Pressable>

      <View style={styles.bankingAddFieldCard}>
        <Text style={styles.bankingAddFieldLabel}>Notes Area</Text>
        <View style={styles.bankingAddNotesInputShell}>
          <TextInput
            style={styles.bankingAddNotesInput}
            value={bankingDraftNotes}
            onChangeText={handleBankingNotesChange}
            onFocus={closeBankingAccountTypeDropdown}
            placeholder="Add any additional details or context..."
            placeholderTextColor="#6B7280"
            multiline
            textAlignVertical="top"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.personalDeleteEntryButton,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleDeleteBankingEntry}>
        <TrashCompactSvg width={16} height={18} />
        <Text style={styles.personalDeleteEntryButtonText}>
          Delete This Entry
        </Text>
      </Pressable>
    </>
  );

  const bankingContent = (
    <>
      <View style={styles.bankingPortfolioHeader}>
        <Text style={styles.bankingPortfolioEyebrow}>Financial Portfolio</Text>
        <Text style={styles.bankingLiquidityTitle}>Total Liquidity</Text>
      </View>

      <View style={styles.bankingSummaryCard}>
        <Text style={styles.bankingSummaryLabel}>Aggregated Balance</Text>
        <Text style={styles.bankingSummaryValue}>$14,550.00</Text>
      </View>

      <View style={styles.bankingAccountsList}>
        {bankingAccounts.map(account => (
          <BankingAccountCard
            key={account.id}
            {...account}
            onPress={() => openPlaceholder(account.title)}
          />
        ))}
      </View>

      <View style={styles.bankingAllocationCard}>
        <Text style={styles.bankingAllocationTitle}>Asset Allocation</Text>
        <Text style={styles.bankingAllocationBody}>
          Distribution across your registered accounts and credit lines.
        </Text>

        <View style={styles.bankingAllocationMetricBlock}>
          <View style={styles.bankingAllocationMetricRow}>
            <Text style={styles.bankingAllocationMetricLabel}>Savings</Text>
            <Text style={styles.bankingAllocationMetricValue}>83%</Text>
          </View>
          <View style={styles.bankingAllocationTrack}>
            <View
              style={[
                styles.bankingAllocationFill,
                styles.bankingAllocationFillSavings,
                styles.bankingAllocationFillSavingsWidth,
              ]}
            />
          </View>
        </View>

        <View style={styles.bankingAllocationMetricBlock}>
          <View style={styles.bankingAllocationMetricRow}>
            <Text style={styles.bankingAllocationMetricLabel}>Current</Text>
            <Text style={styles.bankingAllocationMetricValue}>17%</Text>
          </View>
          <View style={styles.bankingAllocationTrack}>
            <View
              style={[
                styles.bankingAllocationFill,
                styles.bankingAllocationFillCurrent,
                styles.bankingAllocationFillCurrentWidth,
              ]}
            />
          </View>
        </View>

        <View style={styles.bankingAllocationDivider} />

        <Pressable
          style={({pressed}) => [
            styles.bankingAllocationButton,
            pressed ? styles.pressed : null,
          ]}
          onPress={() => openPlaceholder('View Full Report')}>
          <Text style={styles.bankingAllocationButtonText}>
            View Full Report
          </Text>
        </Pressable>
      </View>

      <View style={styles.bankingProtectionCard}>
        <View style={styles.bankingProtectionIconPill}>
          <ActiveSvg width={16} height={20} />
        </View>

        <View style={styles.bankingProtectionTextBlock}>
          <Text style={styles.bankingProtectionTitle}>
            Encrypted Protection
          </Text>
          <Text style={styles.bankingProtectionBody}>
            {
              'Your financial data is secured with\nAES-256 encryption. We never\nstore full account numbers or\nsensitive PINs.'
            }
          </Text>
        </View>
      </View>

      <View style={styles.bankingReminderHeader}>
        <Text style={styles.bankingReminderTitle}>Recent Reminders</Text>
        <Pressable onPress={() => openPlaceholder('View Calendar')}>
          <Text style={styles.bankingReminderLink}>View Calendar</Text>
        </Pressable>
      </View>

      <View style={styles.bankingReminderListCard}>
        {bankingReminders.map((reminder, index) => (
          <React.Fragment key={reminder.id}>
            <BankingReminderRow
              {...reminder}
              onPress={() => openPlaceholder(reminder.title)}
            />
            {index < bankingReminders.length - 1 ? (
              <View style={styles.bankingReminderDivider} />
            ) : null}
          </React.Fragment>
        ))}
      </View>
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
              {isRecordsDetailView ? (
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
                      {recordsDetailTitle}
                    </Text>
                  </View>

                  <View style={styles.recordsDetailActionsRow}>
                    {shouldShowRecordsAddButton ? (
                      <Pressable
                        style={({pressed}) => [
                          styles.recordsAddButton,
                          pressed ? styles.pressed : null,
                        ]}
                        onPress={handleRecordsAddPress}>
                        <PlusSvg width={12} height={12} />
                        <Text style={styles.recordsAddButtonText}>Add</Text>
                      </Pressable>
                    ) : null}

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
              ? isPersonalIdentityAddView
                ? personalIdentityAddContent
                : isBankingCardsAddView
                ? bankingAddContent
                : isBankingCardsView
                ? bankingContent
                : isPersonalIdentityView
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
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 23,
    letterSpacing: -0.22,
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
    backgroundColor: '#094771',
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
  bankingPortfolioHeader: {
    width: '100%',
  },
  bankingPortfolioEyebrow: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  bankingLiquidityTitle: {
    marginTop: 4,
    color: '#094771',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  bankingSummaryCard: {
    width: '100%',
    minHeight: 78,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BCD4E4',
    backgroundColor: '#D6EBF8',
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  bankingSummaryLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  bankingSummaryValue: {
    marginTop: 2,
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.bold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  bankingAccountsList: {
    marginTop: 8,
  },
  bankingAccountCard: {
    width: '100%',
    minHeight: 160,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6E2EC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 18,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 2,
  },
  bankingAccountIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#DCF1FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankingAccountTitle: {
    marginTop: 16,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  bankingAccountNumber: {
    marginTop: 6,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    letterSpacing: 1.5,
  },
  bankingAccountFooter: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankingAccountBalance: {
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.bold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  bankingAccountStatusChip: {
    minWidth: 70,
    minHeight: 24,
    borderRadius: 9999,
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankingAccountStatusChipGrowth: {
    minWidth: 76,
    backgroundColor: '#DCF1FD',
  },
  bankingAccountStatusText: {
    color: '#2E7D52',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bankingAccountStatusTextGrowth: {
    color: '#094771',
  },
  bankingAllocationCard: {
    width: '100%',
    minHeight: 343,
    marginTop: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0D5A8C',
    backgroundColor: '#094771',
    padding: 24,
    shadowColor: '#0D3552',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 18,
    elevation: 3,
  },
  bankingAllocationTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  bankingAllocationBody: {
    marginTop: 6,
    maxWidth: 276,
    color: '#D6EBF8',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  bankingAllocationMetricBlock: {
    marginTop: 28,
  },
  bankingAllocationMetricRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankingAllocationMetricLabel: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  bankingAllocationMetricValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  bankingAllocationTrack: {
    width: '100%',
    height: 8,
    marginTop: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    overflow: 'hidden',
  },
  bankingAllocationFill: {
    height: '100%',
    borderRadius: 999,
  },
  bankingAllocationFillSavings: {
    backgroundColor: '#FEB234',
  },
  bankingAllocationFillSavingsWidth: {
    width: '83%',
  },
  bankingAllocationFillCurrent: {
    backgroundColor: '#F4FAFF',
  },
  bankingAllocationFillCurrentWidth: {
    width: '17%',
  },
  bankingAllocationDivider: {
    width: '100%',
    height: 1,
    marginTop: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
  },
  bankingAllocationButton: {
    width: '100%',
    height: 56,
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankingAllocationButtonText: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    textAlign: 'center',
  },
  bankingProtectionCard: {
    width: '100%',
    minHeight: 162,
    marginTop: 26,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BCD4E4',
    backgroundColor: '#DCF1FD',
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankingProtectionIconPill: {
    width: 28,
    height: 56,
    borderRadius: 9999,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankingProtectionTextBlock: {
    flex: 1,
    marginLeft: 16,
  },
  bankingProtectionTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  bankingProtectionBody: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  bankingReminderHeader: {
    width: '100%',
    marginTop: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankingReminderTitle: {
    color: '#091E27',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  bankingReminderLink: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  bankingReminderListCard: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  bankingReminderRow: {
    minHeight: 62,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankingReminderRowLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankingReminderIconWrap: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankingReminderTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 12,
    paddingRight: 10,
  },
  bankingReminderRowTitle: {
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.semiBold,
    lineHeight: 22,
  },
  bankingReminderRowSchedule: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bankingReminderDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginLeft: 14,
  },
  bankingAddCard: {
    width: '100%',
    height: 192,
    marginBottom: 14,
    borderRadius: 12,
    backgroundColor: '#2C5F8A',
    padding: 24,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 3,
  },
  bankingAddCardGlowLeft: {
    position: 'absolute',
    top: -36,
    left: -36,
  },
  bankingAddCardGlowRight: {
    position: 'absolute',
    right: -36,
    bottom: -36,
  },
  bankingAddCardBankName: {
    color: '#B3D8FF',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  bankingAddCardTapWrap: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  bankingAddCardFooter: {
    width: '100%',
  },
  bankingAddCardDigitsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bankingAddCardDotsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  bankingAddCardDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
  },
  bankingAddCardLastDigits: {
    color: '#DCEFFD',
    fontSize: 28,
    fontFamily: fonts.regular,
    lineHeight: 36,
    letterSpacing: 0.26,
  },
  bankingAddCardAccountType: {
    marginTop: 8,
    color: '#B3D8FF',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bankingAddBalanceCard: {
    width: '100%',
    marginBottom: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4EAF0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  bankingAddBalanceLabel: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textTransform: 'uppercase',
  },
  bankingAddBalanceValue: {
    marginTop: 2,
    color: '#094771',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  bankingAddFieldCard: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4EAF0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  bankingAddFieldLabel: {
    marginBottom: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  bankingAddInputShell: {
    minHeight: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD6DE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  bankingAddInput: {
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  bankingAddSelectShell: {
    minHeight: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD6DE',
    backgroundColor: '#FFFFFF',
    paddingLeft: 14,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankingAddSelectValue: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  bankingAddSelectIcon: {
    transform: [{rotate: '90deg'}],
  },
  bankingAddSelectIconOpen: {
    transform: [{rotate: '-90deg'}],
  },
  bankingAddSelectDropdown: {
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9E1E8',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  bankingAddSelectOption: {
    minHeight: 44,
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  bankingAddSelectOptionActive: {
    backgroundColor: '#EAF6FF',
  },
  bankingAddSelectOptionText: {
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  bankingAddSelectOptionTextActive: {
    color: '#094771',
    fontFamily: fonts.semiBold,
  },
  bankingAddUploadArea: {
    marginTop: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D7E5F0',
    backgroundColor: '#F7FBFF',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 18,
    alignItems: 'center',
  },
  bankingAddUploadTitle: {
    marginTop: 12,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    textAlign: 'center',
  },
  bankingAddUploadTitleHighlight: {
    color: '#094771',
  },
  bankingAddUploadSubtitle: {
    marginTop: 4,
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textAlign: 'center',
  },
  bankingAddUploadFileCard: {
    marginTop: 12,
    borderRadius: 10,
    backgroundColor: '#EAF6FF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankingAddUploadFileInfo: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankingAddUploadFileName: {
    flex: 1,
    marginLeft: 10,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  bankingAddUploadFileDeleteButton: {
    width: 24,
    height: 24,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankingAddUploadButton: {
    alignSelf: 'center',
    marginTop: 12,
  },
  bankingAddReminderCard: {
    width: '100%',
    minHeight: 74,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(129, 85, 0, 0.2)',
    backgroundColor: 'rgba(255, 221, 178, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankingAddReminderLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  bankingAddReminderTextBlock: {
    flex: 1,
    minWidth: 0,
    marginLeft: 10,
  },
  bankingAddReminderTitle: {
    color: '#624000',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  bankingAddReminderSubtitle: {
    marginTop: 2,
    color: 'rgba(98, 64, 0, 0.7)',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bankingAddReminderToggle: {
    width: 38,
    height: 22,
    borderRadius: 999,
    backgroundColor: '#D2B57E',
    paddingHorizontal: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bankingAddReminderToggleActive: {
    backgroundColor: '#A56E00',
    alignItems: 'flex-end',
  },
  bankingAddReminderToggleThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
  },
  bankingAddNotesInputShell: {
    minHeight: 124,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD6DE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  bankingAddNotesInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#243449',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
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
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    letterSpacing: 0,
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
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
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
    color: '#B3D8FF',
    fontSize: 36,
    fontFamily: fonts.regular,
    lineHeight: 45,
    letterSpacing: 0,
  },
  personalProfileLabel: {
    marginTop: 4,
    color: '#B3D8FF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.65,
  },
  personalRecordsHeader: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personalRecordsTitle: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 1.3,
  },
  personalRecordsSyncText: {
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
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
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  personalRecordDobRow: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalRecordDobText: {
    marginLeft: 4,
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
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
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: -0.6,
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
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    maxWidth: 292,
  },
  personalFormSectionCard: {
    width: '100%',
    marginBottom: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4EAF0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 2,
  },
  personalFormSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalFormSectionTitle: {
    marginLeft: 8,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    letterSpacing: 0,
  },
  personalFormFieldsGroup: {
    marginTop: 16,
  },
  personalFormField: {
    marginBottom: 16,
  },
  personalFormFieldLabel: {
    marginBottom: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  personalFormInputShell: {
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9E1E8',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  personalFormInput: {
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  personalReminderCard: {
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: '#EAF6FF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personalReminderTextBlock: {
    flex: 1,
    minWidth: 0,
    paddingRight: 12,
  },
  personalReminderTitle: {
    color: '#091E27',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  personalReminderSubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  personalReminderToggle: {
    width: 38,
    height: 22,
    borderRadius: 999,
    backgroundColor: '#ADC9DE',
    paddingHorizontal: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  personalReminderToggleActive: {
    backgroundColor: '#0A5688',
    alignItems: 'flex-end',
  },
  personalReminderToggleThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
  },
  personalUploadArea: {
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D7E5F0',
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 20,
    alignItems: 'center',
  },
  personalUploadTitle: {
    marginTop: 14,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
  },
  personalUploadSubtitle: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textAlign: 'center',
  },
  personalUploadButton: {
    marginTop: 18,
    width: 129,
    height: 32,
    borderRadius: 999,
    backgroundColor: '#094771',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalUploadButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  personalUploadFileCard: {
    marginTop: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8E4EF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  personalUploadFileInfo: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalUploadFileTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 10,
  },
  personalUploadFileName: {
    color: '#091E27',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  personalUploadFileMeta: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  personalUploadTrashButton: {
    marginLeft: 12,
    width: 32,
    height: 34,
    borderRadius: 999,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalNotesInputShell: {
    marginTop: 16,
    minHeight: 138,
    borderRadius: 8,
    backgroundColor: '#EAF6FF',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  personalNotesInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#243449',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  personalDeleteEntryButton: {
    width: '78%',
    alignSelf: 'center',
    marginTop: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#F5B1B1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalDeleteEntryButtonText: {
    marginLeft: 8,
    color: '#BA1A1A',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    letterSpacing: 0,
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
