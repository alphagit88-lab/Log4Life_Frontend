import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import {useAuth} from '../context/AuthContext';
import ArrowSvg from '../images/arrow.svg';
import BackSvg from '../images/back.svg';
import BellSvg from '../images/bell.svg';
import BackgroundSvg from '../images/background.svg';
import ButtonSvg from '../images/Button.svg';
import BucketSvg from '../images/bucket.svg';
import CarSvg from '../images/car.svg';
import CabinSvg from '../images/cabin.svg';
import CategorySvg from '../images/category.svg';
import CollectionSvg from '../images/collection.svg';
import Clock2Svg from '../images/clock_2.svg';
import ClockSvg from '../images/clock.svg';
import DateCriticalSvg from '../images/date_critical.svg';
import DateSvg from '../images/date.svg';
import Date2Svg from '../images/date_2.svg';
import Date3Svg from '../images/date_3.svg';
import DatesSvg from '../images/dates.svg';
import DefenceSvg from '../images/defence.svg';
import FitnessSvg from '../images/fitness.svg';
import GlobleSvg from '../images/globle.svg';
import GraduationSvg from '../images/graduation.svg';
import HealthSvg from '../images/health.svg';
import HiSvg from '../images/HI.svg';
import HomeNonSvg from '../images/home_non.svg';
import HomeSelectSvg from '../images/home_select.svg';
import DividerSvg from '../images/Horizontal Divider.svg';
import InsuranceSvg from '../images/insurance.svg';
import JournelSvg from '../images/journel.svg';
import KilimanjaroSvg from '../images/Kilimanjaro.svg';
import LocationSvg from '../images/location.svg';
import MaintainceSvg from '../images/maintaince.svg';
import NotificationSvg from '../images/notification.svg';
import NotificationDefaultSvg from '../images/notification_def.svg';
import PersonalSvg from '../images/personal.svg';
import PetsSvg from '../images/pets.svg';
import PhotoSvg from '../images/photo.svg';
import PlanSvg from '../images/plan.svg';
import PlannerActiveSvg from '../images/planner_active.svg';
import PlannerSvg from '../images/planner.svg';
import PlusSvg from '../images/plus.svg';
import ProgrammingSvg from '../images/programming.svg';
import PremiumSvg from '../images/premium.svg';
import Profile2Svg from '../images/profile_2.svg';
import RecurringSvg from '../images/recurring.svg';
import RecordsSvg from '../images/records.svg';
import RecordsNonSvg from '../images/records_non.svg';
import RecordsSelectedSvg from '../images/records_selected.svg';
import ReminderSvg from '../images/reminder.svg';
import ReminderActiveSvg from '../images/reminder_active.svg';
import RemindersSvg from '../images/reminders.svg';
import RightSvg from '../images/right.svg';
import SavingsSvg from '../images/savings.svg';
import SearchGraySvg from '../images/search_gray.svg';
import SearchSvg from '../images/search.svg';
import SarahJohnsonSvg from '../images/Sarah Johnson.svg';
import Security1Svg from '../images/security_1.svg';
import SignOutSvg from '../images/sign_out.svg';
import StatementSvg from '../images/statement.svg';
import SubscriptionSvg from '../images/subscription.svg';
import SupportSvg from '../images/support.svg';
import TrashPlannerSvg from '../images/trash_planner.svg';
import VehicleSvg from '../images/vehicle.svg';
import VisitSvg from '../images/visit.svg';
import WarningSvg from '../images/warning.svg';
import WalletSvg from '../images/wallert.svg';
import AboutSvg from '../images/about.svg';
import AppearanceSvg from '../images/appearance.svg';
import DataSvg from '../images/data.svg';
import {
  BankingCardsAddContent,
  BankingCardsContent,
} from './home/BankingCardsSection';
import {
  HealthFitnessAddContent,
  HealthFitnessContent,
} from './home/HealthFitnessSection';
import {
  HomeMaintenanceAddContent,
  HomeMaintenanceContent,
} from './home/HomeMaintenanceSection';
import {
  ImportantDatesAddContent,
  ImportantDatesContent,
} from './home/ImportantDatesSection';
import {
  InsurancePoliciesAddContent,
  InsurancePoliciesContent,
} from './home/InsurancePoliciesSection';
import {
  PersonalIdentityAddContent,
  PersonalIdentityContent,
} from './home/PersonalIdentitySection';
import {
  RecurringPaymentsAddContent,
  RecurringPaymentsContent,
} from './home/RecurringPaymentsSection';
import {PlannerCalendarContent} from './home/PlannerCalendarContent';
import {RemindersContent} from './home/RemindersContent';
import {
  VehicleMaintenanceAddContent,
  VehicleMaintenanceContent,
} from './home/VehicleMaintenanceSection';
import type {HomeMaintenanceDocument} from './home/types';
import {fonts} from '../theme/fonts';

type BottomTabKey = 'home' | 'records' | 'reminders' | 'planner' | 'profile';
type PlannerViewKey = 'eisenhower' | 'bucket' | 'calendar';
type RecordsView =
  | 'browser'
  | 'personal-identity'
  | 'personal-identity-add'
  | 'important-dates'
  | 'important-dates-add'
  | 'banking-cards'
  | 'banking-cards-add'
  | 'health-fitness'
  | 'health-fitness-add'
  | 'home-maintenance'
  | 'home-maintenance-add'
  | 'recurring-payments'
  | 'recurring-payments-add'
  | 'vehicle-maintenance'
  | 'vehicle-maintenance-add'
  | 'insurance-policies'
  | 'insurance-policies-add';

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

interface BottomNavItemProps {
  active?: boolean;
  label: string;
  icon: React.JSX.Element;
  onPress: () => void;
}

interface ProfileMenuItemData {
  id: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
  onPress: () => void;
}

interface PlannerSegmentOption {
  key: PlannerViewKey;
  label: string;
}

type PlannerSectionTone = 'critical' | 'focused' | 'delegated' | 'backlog';
type PlannerMetaIconKey =
  | 'clock'
  | 'date-critical'
  | 'date-2'
  | 'date-3'
  | 'clock-2'
  | 'trash';

interface PlannerTaskData {
  id: string;
  title: string;
  metaLabel: string;
  metaIcon: PlannerMetaIconKey;
}

interface PlannerSectionData {
  id: string;
  title: string;
  tone: PlannerSectionTone;
  minHeight: number;
  tasks: PlannerTaskData[];
}

type BucketGoalStatus = 'dream' | 'in-progress' | 'achieved';
type BucketGoalFilter = 'all' | BucketGoalStatus;

interface BucketFilterOption {
  key: BucketGoalFilter;
  label: string;
}

interface BucketProgressData {
  achievedCount: number;
  totalCount: number;
  progressPercent: number;
  title: string;
  subtitle: string;
}

interface BucketGoalBase {
  id: string;
  title: string;
  status: BucketGoalStatus;
  icon: React.JSX.Element;
}

interface BucketCompactGoalData extends BucketGoalBase {
  layout: 'compact';
  metaText: string;
}

interface BucketFeaturedGoalData extends BucketGoalBase {
  layout: 'featured';
  description: string;
  statusDetail: string;
  targetDetail: string;
  image: React.JSX.Element;
}

type BucketGoalData = BucketCompactGoalData | BucketFeaturedGoalData;

const plannerSegments: PlannerSegmentOption[] = [
  {
    key: 'eisenhower',
    label: 'Eisenhower\nMatrix',
  },
  {
    key: 'bucket',
    label: 'Bucket List',
  },
  {
    key: 'calendar',
    label: 'Calendar',
  },
];

const plannerSections: PlannerSectionData[] = [
  {
    id: 'q1',
    title: 'Urgent & Important',
    tone: 'critical',
    minHeight: 285,
    tasks: [
      {
        id: 'tax-audit-report',
        title: 'Finalize Q3 Tax Audit Report',
        metaLabel: 'Today, 4:00 PM',
        metaIcon: 'clock',
      },
      {
        id: 'server-logs',
        title: 'Review Emergency Server Logs',
        metaLabel: 'ASAP',
        metaIcon: 'date-critical',
      },
    ],
  },
  {
    id: 'q2',
    title: 'Not Urgent but Important',
    tone: 'focused',
    minHeight: 285,
    tasks: [
      {
        id: 'portfolio-rebalancing',
        title: 'Annual Portfolio Rebalancing',
        metaLabel: 'Oct 15, 2024',
        metaIcon: 'date-2',
      },
      {
        id: 'life-review',
        title: 'Quarterly Life Review & Goals',
        metaLabel: 'Next Sunday',
        metaIcon: 'date-3',
      },
    ],
  },
  {
    id: 'q3',
    title: 'Urgent but Not Important',
    tone: 'delegated',
    minHeight: 215,
    tasks: [
      {
        id: 'slack-mentions',
        title: 'Respond to low-priority Slack mentions',
        metaLabel: '2h remaining',
        metaIcon: 'clock-2',
      },
    ],
  },
  {
    id: 'q4',
    title: 'Not Urgent & Not Important',
    tone: 'backlog',
    minHeight: 191,
    tasks: [
      {
        id: 'desktop-shortcuts',
        title: 'Re-organize desktop shortcuts',
        metaLabel: 'Consider deleting',
        metaIcon: 'trash',
      },
    ],
  },
];

const bucketFilters: BucketFilterOption[] = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'dream',
    label: 'Dream',
  },
  {
    key: 'in-progress',
    label: 'In Progress',
  },
  {
    key: 'achieved',
    label: 'Achieved',
  },
];

const bucketProgress: BucketProgressData = {
  achievedCount: 6,
  totalCount: 18,
  progressPercent: 33,
  title: 'Life Ambitions Progress',
  subtitle: "You've unlocked 33% of your primary goals this year.",
};

const bucketGoals: BucketGoalData[] = [
  {
    id: 'visit-tokyo',
    layout: 'compact',
    title: 'Visit Tokyo, Japan',
    status: 'achieved',
    metaText: 'calendar_today Completed Apr 2024',
    icon: <VisitSvg width={48} height={48} />,
  },
  {
    id: 'master-rust',
    layout: 'compact',
    title: 'Master Rust Programming',
    status: 'in-progress',
    metaText: 'event Target: Dec 2024',
    icon: <ProgrammingSvg width={48} height={48} />,
  },
  {
    id: 'buy-lakefront-cabin',
    layout: 'compact',
    title: 'Buy a Lakefront Cabin',
    status: 'dream',
    metaText: 'schedule Long-term Vision',
    icon: <CabinSvg width={48} height={48} />,
  },
  {
    id: 'climb-kilimanjaro',
    layout: 'featured',
    title: 'Climb Kilimanjaro',
    status: 'in-progress',
    description:
      'A journey of self-discovery and physical endurance to the highest peak in Africa.',
    statusDetail: 'Planning Phase',
    targetDetail: 'Oct 2025',
    icon: <GlobleSvg width={48} height={48} />,
    image: (
      <KilimanjaroSvg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />
    ),
  },
  {
    id: 'mba-graduation',
    layout: 'compact',
    title: 'MBA Graduation',
    status: 'achieved',
    metaText: 'calendar_today Completed May 2023',
    icon: <GraduationSvg width={48} height={48} />,
  },
];

function createHomeMaintenanceDraftDocuments(): HomeMaintenanceDocument[] {
  return [
    {
      id: 'warranty-cert',
      name: 'warranty_cert.pdf',
      size: '2.4 MB',
      kind: 'pdf',
    },
    {
      id: 'service-receipt-2024',
      name: 'service_receipt_2024.jpg',
      size: '1.1 MB',
      kind: 'image',
    },
  ];
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

function getMemberSinceYear(createdAt: string | null | undefined): string {
  const parsedDate = createdAt ? new Date(createdAt) : null;

  if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
    return '2022';
  }

  return String(parsedDate.getFullYear());
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

function BottomNavItem({
  active = false,
  label,
  icon,
  onPress,
}: BottomNavItemProps): React.JSX.Element {
  return (
    <View style={styles.bottomNavItemSlot}>
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
    </View>
  );
}

function ProfileNavGlyph({
  fill,
  width = 16,
  height = 16,
}: {
  fill: string;
  width?: number;
  height?: number;
}): React.JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z"
        fill={fill}
      />
    </Svg>
  );
}

function FamilySettingsGlyph({
  fill = '#094771',
}: {
  fill?: string;
}): React.JSX.Element {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
      <Path
        d="M15 4C14.45 4 13.9792 3.80417 13.5875 3.4125C13.1958 3.02083 13 2.55 13 2C13 1.45 13.1958 0.979167 13.5875 0.5875C13.9792 0.195833 14.45 0 15 0C15.55 0 16.0208 0.195833 16.4125 0.5875C16.8042 0.979167 17 1.45 17 2C17 2.55 16.8042 3.02083 16.4125 3.4125C16.0208 3.80417 15.55 4 15 4ZM14 20V12C14 11.3333 13.8292 10.7333 13.4875 10.2C13.1458 9.66667 12.7083 9.25 12.175 8.95L13.05 6.375C13.1833 5.95833 13.4292 5.625 13.7875 5.375C14.1458 5.125 14.55 5 15 5C15.45 5 15.8542 5.125 16.2125 5.375C16.5708 5.625 16.8167 5.95833 16.95 6.375L19.5 14H17V20H14ZM9.5 9.5C9.08333 9.5 8.72917 9.35417 8.4375 9.0625C8.14583 8.77083 8 8.41667 8 8C8 7.58333 8.14583 7.22917 8.4375 6.9375C8.72917 6.64583 9.08333 6.5 9.5 6.5C9.91667 6.5 10.2708 6.64583 10.5625 6.9375C10.8542 7.22917 11 7.58333 11 8C11 8.41667 10.8542 8.77083 10.5625 9.0625C10.2708 9.35417 9.91667 9.5 9.5 9.5ZM2.5 4C1.95 4 1.47917 3.80417 1.0875 3.4125C0.695833 3.02083 0.5 2.55 0.5 2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0C3.05 0 3.52083 0.195833 3.9125 0.5875C4.30417 0.979167 4.5 1.45 4.5 2C4.5 2.55 4.30417 3.02083 3.9125 3.4125C3.52083 3.80417 3.05 4 2.5 4ZM0.5 20V13H0V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H5C5.55 5 6.02083 5.19583 6.4125 5.5875C6.80417 5.97917 7 6.45 7 7V13H5.5V20H1.5V13H0.5ZM8 20V16H7V12C7 11.5833 7.14583 11.2292 7.4375 10.9375C7.72917 10.6458 8.08333 10.5 8.5 10.5H10.5C10.9167 10.5 11.2708 10.6458 11.5625 10.9375C11.8542 11.2292 12 11.5833 12 12V16H11V20H8Z"
        fill={fill}
      />
    </Svg>
  );
}

function ProfileStatItem({
  value,
  label,
}: {
  value: string;
  label: string;
}): React.JSX.Element {
  return (
    <View style={styles.profileStatsMetric}>
      <Text style={styles.profileStatsMetricValue}>{value}</Text>
      <Text style={styles.profileStatsMetricLabel}>{label}</Text>
    </View>
  );
}

function ProfileMenuRow({
  item,
  showBorder = false,
}: {
  item: ProfileMenuItemData;
  showBorder?: boolean;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.profileMenuRow,
        showBorder ? styles.profileMenuRowBorder : null,
        pressed ? styles.pressed : null,
      ]}
      onPress={item.onPress}>
      <View style={styles.profileMenuRowContent}>
        {item.icon}

        <View style={styles.profileMenuTextWrap}>
          <Text style={styles.profileMenuTitle}>{item.title}</Text>
          <Text style={styles.profileMenuDescription}>{item.description}</Text>
        </View>
      </View>

      <ArrowSvg width={8} height={12} />
    </Pressable>
  );
}

function ProfileMenuCard({
  title,
  items,
}: {
  title: string;
  items: ProfileMenuItemData[];
}): React.JSX.Element {
  return (
    <View style={styles.profileMenuCard}>
      <View style={styles.profileMenuCardHeader}>
        <Text style={styles.profileMenuCardHeaderText}>{title}</Text>
      </View>

      <View style={styles.profileMenuCardBody}>
        {items.map((item, index) => (
          <ProfileMenuRow
            key={item.id}
            item={item}
            showBorder={index > 0}
          />
        ))}
      </View>
    </View>
  );
}

function PlannerMetaIcon({
  iconKey,
}: {
  iconKey: PlannerMetaIconKey;
}): React.JSX.Element {
  if (iconKey === 'clock') {
    return <ClockSvg width={12} height={12} />;
  }

  if (iconKey === 'date-critical') {
    return <DateCriticalSvg width={14} height={15} />;
  }

  if (iconKey === 'date-2') {
    return <Date2Svg width={11} height={12} />;
  }

  if (iconKey === 'date-3') {
    return <Date3Svg width={11} height={12} />;
  }

  if (iconKey === 'clock-2') {
    return <Clock2Svg width={11} height={11} />;
  }

  return <TrashPlannerSvg width={20.5} height={20.75} />;
}

function PlannerTaskCard({
  task,
  tone,
}: {
  task: PlannerTaskData;
  tone: PlannerSectionTone;
}): React.JSX.Element {
  const isBacklog = tone === 'backlog';

  return (
    <View
      style={[
        styles.plannerTaskCard,
        isBacklog ? styles.plannerTaskCardBacklog : null,
      ]}>
      <CategorySvg width={16} height={6} />

      <View style={styles.plannerTaskTextWrap}>
        <Text
          style={[
            styles.plannerTaskTitle,
            isBacklog ? styles.plannerTaskTitleBacklog : null,
          ]}>
          {task.title}
        </Text>

        <View
          style={[
            styles.plannerTaskMetaChip,
            tone === 'critical'
              ? styles.plannerTaskMetaChipCritical
              : tone === 'focused'
              ? styles.plannerTaskMetaChipFocused
              : tone === 'delegated'
              ? styles.plannerTaskMetaChipDelegated
              : styles.plannerTaskMetaChipBacklog,
          ]}>
          <PlannerMetaIcon iconKey={task.metaIcon} />
          <Text
            style={[
              styles.plannerTaskMetaText,
              tone === 'critical'
                ? styles.plannerTaskMetaTextCritical
                : tone === 'focused'
                ? styles.plannerTaskMetaTextFocused
                : tone === 'delegated'
                ? styles.plannerTaskMetaTextDelegated
                : styles.plannerTaskMetaTextBacklog,
            ]}>
            {task.metaLabel}
          </Text>
        </View>
      </View>
    </View>
  );
}

function PlannerSectionCard({
  section,
  onAddPress,
}: {
  section: PlannerSectionData;
  onAddPress: (title: string) => void;
}): React.JSX.Element {
  return (
    <View style={[styles.plannerSectionCard, {minHeight: section.minHeight}]}>
      <View
        style={[
          styles.plannerSectionHeader,
          section.tone === 'critical'
            ? styles.plannerSectionHeaderCritical
            : section.tone === 'focused'
            ? styles.plannerSectionHeaderFocused
            : section.tone === 'delegated'
            ? styles.plannerSectionHeaderDelegated
            : styles.plannerSectionHeaderBacklog,
        ]}>
        <Text style={styles.plannerSectionTitle}>{section.title}</Text>

        <Pressable
          style={({pressed}) => [
            styles.plannerSectionAddButton,
            pressed ? styles.pressed : null,
          ]}
          onPress={() => onAddPress(section.title)}>
          <PlusSvg width={12} height={12} />
        </Pressable>
      </View>

      <View style={styles.plannerSectionBody}>
        {section.tasks.map(task => (
          <PlannerTaskCard key={task.id} task={task} tone={section.tone} />
        ))}
      </View>
    </View>
  );
}

function BucketStatusChip({
  status,
}: {
  status: BucketGoalStatus;
}): React.JSX.Element {
  const isDream = status === 'dream';
  const isAchieved = status === 'achieved';
  const label = isDream ? 'Dream' : isAchieved ? 'Achieved' : 'In Progress';

  return (
    <View
      style={[
        styles.bucketStatusChip,
        isDream
          ? styles.bucketStatusChipDream
          : isAchieved
          ? styles.bucketStatusChipAchieved
          : styles.bucketStatusChipInProgress,
      ]}>
      <View
        style={[
          styles.bucketStatusDot,
          isDream
            ? styles.bucketStatusDotDream
            : isAchieved
            ? styles.bucketStatusDotAchieved
            : styles.bucketStatusDotInProgress,
        ]}
      />
      <Text
        style={[
          styles.bucketStatusText,
          isDream
            ? styles.bucketStatusTextDream
            : isAchieved
            ? styles.bucketStatusTextAchieved
            : styles.bucketStatusTextInProgress,
        ]}>
        {label}
      </Text>
    </View>
  );
}

function BucketProgressCard(): React.JSX.Element {
  return (
    <View style={styles.bucketProgressCard}>
      <View style={styles.bucketProgressHeader}>
        <View style={styles.bucketProgressTextBlock}>
          <Text style={styles.bucketProgressTitle}>{bucketProgress.title}</Text>
          <Text style={styles.bucketProgressSubtitle}>
            {bucketProgress.subtitle}
          </Text>
        </View>

        <View style={styles.bucketProgressMetricBlock}>
          <View style={styles.bucketProgressMetricRow}>
            <Text style={styles.bucketProgressMetricValue}>
              {bucketProgress.achievedCount}
            </Text>
            <Text style={styles.bucketProgressMetricTotal}>
              {' '}
              of {bucketProgress.totalCount}
            </Text>
          </View>
          <Text style={styles.bucketProgressMetricLabel}>achieved</Text>
        </View>
      </View>

      <View style={styles.bucketProgressTrack}>
        <View
          style={[
            styles.bucketProgressFill,
            {width: `${bucketProgress.progressPercent}%`},
          ]}
        />
      </View>
    </View>
  );
}

function BucketCompactCard({
  goal,
  onPress,
}: {
  goal: BucketCompactGoalData;
  onPress: () => void;
}): React.JSX.Element {
  const isAchieved = goal.status === 'achieved';

  return (
    <Pressable
      style={({pressed}) => [
        styles.bucketCard,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      {isAchieved ? <View style={styles.bucketCardAchievedOverlay} /> : null}

      {isAchieved ? (
        <View style={styles.bucketCardCheckWrap}>
          <RightSvg width={64} height={64} style={styles.bucketCardCheckIcon} />
        </View>
      ) : null}

      <View style={styles.bucketCardContent}>
        <View style={styles.bucketCardIconWrap}>{goal.icon}</View>
        <Text style={styles.bucketCardTitle}>{goal.title}</Text>
        <Text style={styles.bucketCardMeta}>{goal.metaText}</Text>
        <BucketStatusChip status={goal.status} />
      </View>
    </Pressable>
  );
}

function BucketFeaturedCard({
  goal,
  onPress,
}: {
  goal: BucketFeaturedGoalData;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.bucketFeaturedCard,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.bucketFeaturedTextBlock}>
        <View style={styles.bucketCardIconWrap}>{goal.icon}</View>
        <Text style={styles.bucketFeaturedTitle}>{goal.title}</Text>
        <Text style={styles.bucketFeaturedDescription}>{goal.description}</Text>

        <View style={styles.bucketFeaturedMetricsRow}>
          <View style={styles.bucketFeaturedMetricBlock}>
            <Text style={styles.bucketFeaturedMetricLabel}>Status</Text>
            <Text style={styles.bucketFeaturedMetricValue}>
              {goal.statusDetail}
            </Text>
          </View>

          <View style={styles.bucketFeaturedMetricBlock}>
            <Text style={styles.bucketFeaturedMetricLabel}>Target</Text>
            <Text style={styles.bucketFeaturedMetricValue}>
              {goal.targetDetail}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bucketFeaturedImageFrame}>{goal.image}</View>
    </Pressable>
  );
}

function HomeScreen(): React.JSX.Element {
  const {width} = useWindowDimensions();
  const {user, logout, refreshProfile} = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<BottomTabKey>('home');
  const [plannerView, setPlannerView] = useState<PlannerViewKey>('eisenhower');
  const [bucketFilter, setBucketFilter] = useState<BucketGoalFilter>('all');
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
  const [recurringDraftAmount, setRecurringDraftAmount] = useState('$15.99');
  const [recurringDraftPaymentMethod, setRecurringDraftPaymentMethod] =
    useState('Visa (â€¢â€¢â€¢â€¢ 4242)');
  const [
    isRecurringPaymentMethodDropdownOpen,
    setIsRecurringPaymentMethodDropdownOpen,
  ] = useState(false);
  const [recurringDraftFrequency, setRecurringDraftFrequency] =
    useState('Monthly');
  const [
    isRecurringFrequencyDropdownOpen,
    setIsRecurringFrequencyDropdownOpen,
  ] = useState(false);
  const [recurringDraftNextDueDate, setRecurringDraftNextDueDate] =
    useState('11/28/2023');
  const [recurringDraftNotes, setRecurringDraftNotes] = useState(
    'Premium Ultra HD Plan. Includes 4 screens.',
  );
  const [recurringDraftSmartReminder, setRecurringDraftSmartReminder] =
    useState(true);
  const [insuranceDraftPolicyName, setInsuranceDraftPolicyName] =
    useState('Home & Contents');
  const [insuranceDraftProvider, setInsuranceDraftProvider] = useState('AXA');
  const [insuranceDraftPolicyNumber, setInsuranceDraftPolicyNumber] =
    useState('');
  const [insuranceDraftRenewalDate, setInsuranceDraftRenewalDate] =
    useState('14 Mar 2026');
  const [insuranceDraftAnnualPremium, setInsuranceDraftAnnualPremium] =
    useState('$0.00');
  const [insuranceDraftNotes, setInsuranceDraftNotes] = useState('');
  const [insuranceDraftRenewalReminder, setInsuranceDraftRenewalReminder] =
    useState(true);
  const [vehicleDraftName, setVehicleDraftName] = useState('Family SUV');
  const [vehicleDraftMakeModel, setVehicleDraftMakeModel] =
    useState('Toyota RAV4');
  const [vehicleDraftRegistration, setVehicleDraftRegistration] =
    useState('LX71 ABC');
  const [vehicleDraftLastServiceDate, setVehicleDraftLastServiceDate] =
    useState('03/15/2024');
  const [vehicleDraftMotDueDate, setVehicleDraftMotDueDate] =
    useState('08/22/2025');
  const [vehicleDraftNotes, setVehicleDraftNotes] = useState(
    'Previous service highlighted slight wear on rear wipers. Air conditioning recharged in June.',
  );
  const [hasUploadedVehicleDocument, setHasUploadedVehicleDocument] =
    useState(true);
  const [healthDraftProviderTopic, setHealthDraftProviderTopic] =
    useState('Primary Care');
  const [healthDraftContact, setHealthDraftContact] = useState('Dr. H. Patel');
  const [healthDraftMedications, setHealthDraftMedications] = useState(
    'Multivitamin, Omega-3, Lisinopril 10mg',
  );
  const [healthDraftWeeklyGoalPercent, setHealthDraftWeeklyGoalPercent] =
    useState('75%');
  const [healthDraftWeeklyGoalText, setHealthDraftWeeklyGoalText] =
    useState('150 mins cardio');
  const [healthDraftRemindersEnabled, setHealthDraftRemindersEnabled] =
    useState(true);
  const [healthDraftNotes, setHealthDraftNotes] = useState(
    'Last physical exam was clear. Follow-up scheduled for October for blood work. Keep tracking sodium intake.',
  );
  const [hasUploadedHealthReport, setHasUploadedHealthReport] = useState(true);
  const [homeMaintenanceDraftName, setHomeMaintenanceDraftName] = useState(
    'Boiler - Worcester Bosch',
  );
  const [homeMaintenanceDraftModelSerial, setHomeMaintenanceDraftModelSerial] =
    useState('');
  const [
    homeMaintenanceDraftLastServiceDate,
    setHomeMaintenanceDraftLastServiceDate,
  ] = useState('10 Feb 2024');
  const [homeMaintenanceDraftNextDueDate, setHomeMaintenanceDraftNextDueDate] =
    useState('Feb 2025');
  const [
    homeMaintenanceDraftReminderEnabled,
    setHomeMaintenanceDraftReminderEnabled,
  ] = useState(true);
  const [homeMaintenanceDraftNotes, setHomeMaintenanceDraftNotes] =
    useState('');
  const [homeMaintenanceDraftDocuments, setHomeMaintenanceDraftDocuments] =
    useState<HomeMaintenanceDocument[]>(createHomeMaintenanceDraftDocuments);

  const contentWidth = Math.min(width - 32, 402);
  const dueCardWidth = Math.min(Math.max(width * 0.72, 252), 284);
  const recordCardWidth = (contentWidth - 12) / 2;
  const firstName = getFirstName(user?.name);
  const personalProfileName = user?.name?.trim() || 'Sarah Johnson';
  const personalProfileCardName = getCompactProfileName(user?.name);
  const profileEmail = user?.email?.trim() || 'sarah.j@example.com';
  const profileMemberSinceYear = getMemberSinceYear(user?.createdAt);
  const hasUnreadNotifications = !isRefreshing;
  const isRecordsTab = activeTab === 'records';
  const isPersonalIdentityView =
    isRecordsTab && recordsView === 'personal-identity';
  const isPersonalIdentityAddView =
    isRecordsTab && recordsView === 'personal-identity-add';
  const isBankingCardsView = isRecordsTab && recordsView === 'banking-cards';
  const isBankingCardsAddView =
    isRecordsTab && recordsView === 'banking-cards-add';
  const isRecurringPaymentsView =
    isRecordsTab && recordsView === 'recurring-payments';
  const isRecurringPaymentsAddView =
    isRecordsTab && recordsView === 'recurring-payments-add';
  const isVehicleMaintenanceView =
    isRecordsTab && recordsView === 'vehicle-maintenance';
  const isVehicleMaintenanceAddView =
    isRecordsTab && recordsView === 'vehicle-maintenance-add';
  const isInsurancePoliciesView =
    isRecordsTab && recordsView === 'insurance-policies';
  const isInsurancePoliciesAddView =
    isRecordsTab && recordsView === 'insurance-policies-add';
  const visibleBucketGoals =
    bucketFilter === 'all'
      ? bucketGoals
      : bucketGoals.filter(goal => goal.status === bucketFilter);
  const isHealthFitnessView = isRecordsTab && recordsView === 'health-fitness';
  const isHealthFitnessAddView =
    isRecordsTab && recordsView === 'health-fitness-add';
  const isHomeMaintenanceView =
    isRecordsTab && recordsView === 'home-maintenance';
  const isHomeMaintenanceAddView =
    isRecordsTab && recordsView === 'home-maintenance-add';
  const isImportantDatesView =
    isRecordsTab && recordsView === 'important-dates';
  const isImportantDatesAddView =
    isRecordsTab && recordsView === 'important-dates-add';
  const isRecordsDetailView = isRecordsTab && recordsView !== 'browser';
  const recordsDetailTitle = isRecurringPaymentsAddView
    ? 'Recurring Payments'
    : isVehicleMaintenanceAddView
    ? 'Vehicle Maintenance'
    : isInsurancePoliciesAddView
    ? 'Insurance Policies'
    : isHealthFitnessAddView
    ? 'Health & Fitness'
    : isHomeMaintenanceAddView
    ? 'Home Maintenance'
    : isHomeMaintenanceView
    ? 'Home Maintenance'
    : isVehicleMaintenanceView
    ? 'Vehicle Maintenance'
    : isRecurringPaymentsView
    ? 'Recurring\nPayments'
    : isInsurancePoliciesView
    ? 'Insurance\nPolicies'
    : isHealthFitnessView
    ? 'Health & Fitness'
    : isImportantDatesAddView
    ? 'Important Dates'
    : isImportantDatesView
    ? 'Important Dates'
    : isBankingCardsView || isBankingCardsAddView
    ? 'Banking & Cards'
    : 'Personal Details';
  const shouldShowRecordsAddButton =
    isPersonalIdentityView ||
    isBankingCardsView ||
    isRecurringPaymentsView ||
    isHomeMaintenanceView ||
    isVehicleMaintenanceView ||
    isInsurancePoliciesView ||
    isHealthFitnessView ||
    isImportantDatesView;
  const bankingDraftDisplayName = getBankDisplayName(bankingDraftBankName);
  const bankingDraftLastFourDisplay = bankingDraftLast4Digits || '4821';
  const bankingDraftCardLabel = `${
    bankingDraftAccountType.trim() || 'Current'
  } Account`.toUpperCase();
  const bankingAccountTypeOptions = ['Current', 'Savings', 'Business', 'Joint'];
  const recurringPaymentMethodOptions = [
    'Visa (â€¢â€¢â€¢â€¢ 4242)',
    'Direct Debit',
    'Home Services',
  ];
  const recurringFrequencyOptions = ['Monthly', 'Quarterly', 'Yearly'];

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
      count: '12 Records',
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

  const healthDraftWeeklyGoalProgress = Math.max(
    0,
    Math.min(100, parseInt(healthDraftWeeklyGoalPercent, 10) || 0),
  );

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

  const openAccountSettings = () => {
    setActiveTab('records');
    setRecordsView('personal-identity');
  };

  const handleShareProfile = async () => {
    try {
      await Share.share({
        message: `View ${personalProfileName}'s Log4Life profile: https://log4life.app/u/${
          user?.id ?? 'sarah-johnson'
        }`,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to open the share sheet right now.';
      Alert.alert('Share Unavailable', message);
    }
  };

  const handleProfileLogout = () => {
    Alert.alert('Sign Out', 'Do you want to sign out of Log4Life?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
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
    ]);
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

  const resetRecurringDraft = () => {
    setRecurringDraftAmount('$15.99');
    setRecurringDraftPaymentMethod('Visa (â€¢â€¢â€¢â€¢ 4242)');
    setIsRecurringPaymentMethodDropdownOpen(false);
    setRecurringDraftFrequency('Monthly');
    setIsRecurringFrequencyDropdownOpen(false);
    setRecurringDraftNextDueDate('11/28/2023');
    setRecurringDraftNotes('Premium Ultra HD Plan. Includes 4 screens.');
    setRecurringDraftSmartReminder(true);
  };

  const resetInsuranceDraft = () => {
    setInsuranceDraftPolicyName('Home & Contents');
    setInsuranceDraftProvider('AXA');
    setInsuranceDraftPolicyNumber('');
    setInsuranceDraftRenewalDate('14 Mar 2026');
    setInsuranceDraftAnnualPremium('$0.00');
    setInsuranceDraftNotes('');
    setInsuranceDraftRenewalReminder(true);
  };

  const resetVehicleDraft = () => {
    setVehicleDraftName('Family SUV');
    setVehicleDraftMakeModel('Toyota RAV4');
    setVehicleDraftRegistration('LX71 ABC');
    setVehicleDraftLastServiceDate('03/15/2024');
    setVehicleDraftMotDueDate('08/22/2025');
    setVehicleDraftNotes(
      'Previous service highlighted slight wear on rear wipers. Air conditioning recharged in June.',
    );
    setHasUploadedVehicleDocument(true);
  };

  const resetHealthDraft = () => {
    setHealthDraftProviderTopic('Primary Care');
    setHealthDraftContact('Dr. H. Patel');
    setHealthDraftMedications('Multivitamin, Omega-3, Lisinopril 10mg');
    setHealthDraftWeeklyGoalPercent('75%');
    setHealthDraftWeeklyGoalText('150 mins cardio');
    setHealthDraftRemindersEnabled(true);
    setHealthDraftNotes(
      'Last physical exam was clear. Follow-up scheduled for October for blood work. Keep tracking sodium intake.',
    );
    setHasUploadedHealthReport(true);
  };

  const resetHomeMaintenanceDraft = () => {
    setHomeMaintenanceDraftName('Boiler - Worcester Bosch');
    setHomeMaintenanceDraftModelSerial('');
    setHomeMaintenanceDraftLastServiceDate('10 Feb 2024');
    setHomeMaintenanceDraftNextDueDate('Feb 2025');
    setHomeMaintenanceDraftReminderEnabled(true);
    setHomeMaintenanceDraftNotes('');
    setHomeMaintenanceDraftDocuments(createHomeMaintenanceDraftDocuments());
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

    if (category.id === 'recurring-payments') {
      setRecordsView('recurring-payments');
      return;
    }

    if (category.id === 'vehicle-maintenance') {
      setRecordsView('vehicle-maintenance');
      return;
    }

    if (category.id === 'insurance-policies') {
      setRecordsView('insurance-policies');
      return;
    }

    if (category.id === 'health-fitness') {
      setRecordsView('health-fitness');
      return;
    }

    if (category.id === 'home-maintenance') {
      setRecordsView('home-maintenance');
      return;
    }

    if (category.id === 'important-dates') {
      setRecordsView('important-dates');
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

  const openAddRecurringPayment = () => {
    resetRecurringDraft();
    setRecordsView('recurring-payments-add');
  };

  const openAddInsurancePolicy = () => {
    resetInsuranceDraft();
    setRecordsView('insurance-policies-add');
  };

  const openAddVehicleMaintenanceRecord = () => {
    resetVehicleDraft();
    setRecordsView('vehicle-maintenance-add');
  };

  const openAddHealthFitnessRecord = () => {
    resetHealthDraft();
    setRecordsView('health-fitness-add');
  };

  const openAddHomeMaintenanceRecord = () => {
    resetHomeMaintenanceDraft();
    setRecordsView('home-maintenance-add');
  };

  const openAddImportantDateRecord = () => {
    setRecordsView('important-dates-add');
  };

  const handleRecordsAddPress = () => {
    if (isPersonalIdentityView) {
      openAddIdentityRecord();
      return;
    }

    if (isBankingCardsView) {
      openAddBankingRecord();
      return;
    }

    if (isRecurringPaymentsView) {
      openAddRecurringPayment();
      return;
    }

    if (isVehicleMaintenanceView) {
      openAddVehicleMaintenanceRecord();
      return;
    }

    if (isInsurancePoliciesView) {
      openAddInsurancePolicy();
      return;
    }

    if (isHealthFitnessView) {
      openAddHealthFitnessRecord();
      return;
    }

    if (isHomeMaintenanceView) {
      openAddHomeMaintenanceRecord();
      return;
    }

    if (isImportantDatesView) {
      openAddImportantDateRecord();
    }
  };

  const handleDeleteImportantDateEntry = () => {
    Alert.alert('Delete Entry', 'Remove this important date draft?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setRecordsView('important-dates');
        },
      },
    ]);
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

  const closeRecurringDropdowns = () => {
    setIsRecurringPaymentMethodDropdownOpen(false);
    setIsRecurringFrequencyDropdownOpen(false);
  };

  const handleToggleRecurringPaymentMethod = () => {
    setIsRecurringFrequencyDropdownOpen(false);
    setIsRecurringPaymentMethodDropdownOpen(currentValue => !currentValue);
  };

  const handleSelectRecurringPaymentMethod = (paymentMethod: string) => {
    setRecurringDraftPaymentMethod(paymentMethod);
    setIsRecurringPaymentMethodDropdownOpen(false);
  };

  const handleToggleRecurringFrequency = () => {
    setIsRecurringPaymentMethodDropdownOpen(false);
    setIsRecurringFrequencyDropdownOpen(currentValue => !currentValue);
  };

  const handleSelectRecurringFrequency = (frequency: string) => {
    setRecurringDraftFrequency(frequency);
    setIsRecurringFrequencyDropdownOpen(false);
  };

  const handleRecurringAmountChange = (value: string) => {
    closeRecurringDropdowns();
    const sanitizedValue = value.replace(/[^0-9.]/g, '');
    const [wholePart, ...decimalParts] = sanitizedValue.split('.');
    const decimalPart = decimalParts.join('').slice(0, 2);
    const normalizedValue = decimalPart
      ? `${wholePart}.${decimalPart}`
      : wholePart;

    setRecurringDraftAmount(normalizedValue ? `$${normalizedValue}` : '$');
  };

  const handleRecurringNextDueDateChange = (value: string) => {
    closeRecurringDropdowns();
    setRecurringDraftNextDueDate(value);
  };

  const handleRecurringNotesChange = (value: string) => {
    closeRecurringDropdowns();
    setRecurringDraftNotes(value);
  };

  const handleToggleRecurringSmartReminder = () => {
    closeRecurringDropdowns();
    setRecurringDraftSmartReminder(currentValue => !currentValue);
  };

  const handleDeleteRecurringEntry = () => {
    Alert.alert('Delete This Entry', 'Remove this recurring payment draft?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          resetRecurringDraft();
          setRecordsView('recurring-payments');
        },
      },
    ]);
  };

  const handleToggleInsuranceRenewalReminder = () => {
    setInsuranceDraftRenewalReminder(currentValue => !currentValue);
  };

  const handleDeleteInsuranceEntry = () => {
    Alert.alert('Delete Policy Entry', 'Remove this insurance policy draft?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          resetInsuranceDraft();
          setRecordsView('insurance-policies');
        },
      },
    ]);
  };

  const handleBrowseVehicleDocument = () => {
    setHasUploadedVehicleDocument(true);
  };

  const handleDeleteVehicleDocument = () => {
    setHasUploadedVehicleDocument(false);
  };

  const handleDeleteVehicleEntry = () => {
    Alert.alert(
      'Delete Vehicle Record',
      'Remove this vehicle maintenance draft?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            resetVehicleDraft();
            setRecordsView('vehicle-maintenance');
          },
        },
      ],
    );
  };

  const handleBrowseHealthReport = () => {
    setHasUploadedHealthReport(true);
  };

  const handleToggleHealthReminders = () => {
    setHealthDraftRemindersEnabled(currentValue => !currentValue);
  };

  const handleDeleteHealthEntry = () => {
    Alert.alert('Delete Entry', 'Remove this health profile draft?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          resetHealthDraft();
          setRecordsView('health-fitness');
        },
      },
    ]);
  };

  const handleBrowseHomeMaintenanceDocument = () => {
    setHomeMaintenanceDraftDocuments(currentDocuments => {
      const nextDocument: HomeMaintenanceDocument = {
        id: 'boiler-service-log-2025',
        name: 'boiler_service_log_2025.pdf',
        size: '0.8 MB',
        kind: 'pdf',
      };

      if (currentDocuments.some(document => document.id === nextDocument.id)) {
        return currentDocuments;
      }

      return [...currentDocuments, nextDocument];
    });
  };

  const handleDeleteHomeMaintenanceDocument = (documentId: string) => {
    setHomeMaintenanceDraftDocuments(currentDocuments =>
      currentDocuments.filter(document => document.id !== documentId),
    );
  };

  const handleToggleHomeMaintenanceReminder = () => {
    setHomeMaintenanceDraftReminderEnabled(currentValue => !currentValue);
  };

  const handleDeleteHomeMaintenanceEntry = () => {
    Alert.alert('Delete Entry', 'Remove this home maintenance draft?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          resetHomeMaintenanceDraft();
          setRecordsView('home-maintenance');
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

    if (recordsView === 'recurring-payments-add') {
      setRecordsView('recurring-payments');
      return;
    }

    if (recordsView === 'insurance-policies-add') {
      setRecordsView('insurance-policies');
      return;
    }

    if (recordsView === 'vehicle-maintenance-add') {
      setRecordsView('vehicle-maintenance');
      return;
    }

    if (recordsView === 'health-fitness-add') {
      setRecordsView('health-fitness');
      return;
    }

    if (recordsView === 'home-maintenance-add') {
      setRecordsView('home-maintenance');
      return;
    }

    if (recordsView === 'important-dates-add') {
      setRecordsView('important-dates');
      return;
    }

    if (recordsView !== 'browser') {
      setRecordsView('browser');
      return;
    }

    setActiveTab('home');
  };

  const handleTabPress = (tab: BottomTabKey) => {
    setActiveTab(tab);
    setRecordsView('browser');
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
    <PersonalIdentityContent
      styles={styles}
      personalProfileName={personalProfileName}
      personalProfileCardName={personalProfileCardName}
      openPlaceholder={openPlaceholder}
    />
  );

  const personalIdentityAddContent = (
    <PersonalIdentityAddContent
      styles={styles}
      identityDraftFullName={identityDraftFullName}
      setIdentityDraftFullName={setIdentityDraftFullName}
      identityDraftDateOfBirth={identityDraftDateOfBirth}
      setIdentityDraftDateOfBirth={setIdentityDraftDateOfBirth}
      identityDraftNiNumber={identityDraftNiNumber}
      setIdentityDraftNiNumber={setIdentityDraftNiNumber}
      identityDraftRenewalReminder={identityDraftRenewalReminder}
      setIdentityDraftRenewalReminder={setIdentityDraftRenewalReminder}
      hasUploadedIdentityDocument={hasUploadedIdentityDocument}
      handleBrowseIdentityDocument={handleBrowseIdentityDocument}
      handleDeleteIdentityDocument={handleDeleteIdentityDocument}
      identityDraftNotes={identityDraftNotes}
      setIdentityDraftNotes={setIdentityDraftNotes}
      handleDeleteIdentityEntry={handleDeleteIdentityEntry}
    />
  );

  const bankingAddContent = (
    <BankingCardsAddContent
      styles={styles}
      bankingDraftDisplayName={bankingDraftDisplayName}
      bankingDraftLastFourDisplay={bankingDraftLastFourDisplay}
      bankingDraftCardLabel={bankingDraftCardLabel}
      bankingDraftBankName={bankingDraftBankName}
      bankingDraftAccountType={bankingDraftAccountType}
      bankingDraftLast4Digits={bankingDraftLast4Digits}
      isBankingAccountTypeDropdownOpen={isBankingAccountTypeDropdownOpen}
      bankingAccountTypeOptions={bankingAccountTypeOptions}
      handleBankingBankNameChange={handleBankingBankNameChange}
      closeBankingAccountTypeDropdown={closeBankingAccountTypeDropdown}
      handleToggleBankingAccountType={handleToggleBankingAccountType}
      handleSelectBankingAccountType={handleSelectBankingAccountType}
      handleBankingLast4DigitsChange={handleBankingLast4DigitsChange}
      hasUploadedBankingDocument={hasUploadedBankingDocument}
      handleDeleteBankingDocument={handleDeleteBankingDocument}
      handleBrowseBankingDocument={handleBrowseBankingDocument}
      bankingDraftInterestReviewReminder={bankingDraftInterestReviewReminder}
      handleToggleBankingInterestReviewReminder={
        handleToggleBankingInterestReviewReminder
      }
      bankingDraftNotes={bankingDraftNotes}
      handleBankingNotesChange={handleBankingNotesChange}
      handleDeleteBankingEntry={handleDeleteBankingEntry}
    />
  );

  const bankingContent = (
    <BankingCardsContent styles={styles} openPlaceholder={openPlaceholder} />
  );

  const recurringPaymentsAddContent = (
    <RecurringPaymentsAddContent
      styles={styles}
      recurringDraftAmount={recurringDraftAmount}
      recurringDraftPaymentMethod={recurringDraftPaymentMethod}
      isRecurringPaymentMethodDropdownOpen={
        isRecurringPaymentMethodDropdownOpen
      }
      recurringPaymentMethodOptions={recurringPaymentMethodOptions}
      recurringDraftFrequency={recurringDraftFrequency}
      isRecurringFrequencyDropdownOpen={isRecurringFrequencyDropdownOpen}
      recurringFrequencyOptions={recurringFrequencyOptions}
      recurringDraftNextDueDate={recurringDraftNextDueDate}
      recurringDraftNotes={recurringDraftNotes}
      recurringDraftSmartReminder={recurringDraftSmartReminder}
      closeRecurringDropdowns={closeRecurringDropdowns}
      handleRecurringAmountChange={handleRecurringAmountChange}
      handleToggleRecurringPaymentMethod={handleToggleRecurringPaymentMethod}
      handleSelectRecurringPaymentMethod={handleSelectRecurringPaymentMethod}
      handleToggleRecurringFrequency={handleToggleRecurringFrequency}
      handleSelectRecurringFrequency={handleSelectRecurringFrequency}
      handleRecurringNextDueDateChange={handleRecurringNextDueDateChange}
      handleToggleRecurringSmartReminder={handleToggleRecurringSmartReminder}
      handleRecurringNotesChange={handleRecurringNotesChange}
      handleDeleteRecurringEntry={handleDeleteRecurringEntry}
    />
  );

  const recurringPaymentsContent = (
    <RecurringPaymentsContent
      styles={styles}
      openPlaceholder={openPlaceholder}
    />
  );

  const vehicleMaintenanceContent = (
    <VehicleMaintenanceContent
      styles={styles}
      openPlaceholder={openPlaceholder}
    />
  );

  const vehicleMaintenanceAddContent = (
    <VehicleMaintenanceAddContent
      styles={styles}
      vehicleDraftName={vehicleDraftName}
      setVehicleDraftName={setVehicleDraftName}
      vehicleDraftMakeModel={vehicleDraftMakeModel}
      setVehicleDraftMakeModel={setVehicleDraftMakeModel}
      vehicleDraftRegistration={vehicleDraftRegistration}
      setVehicleDraftRegistration={setVehicleDraftRegistration}
      vehicleDraftLastServiceDate={vehicleDraftLastServiceDate}
      setVehicleDraftLastServiceDate={setVehicleDraftLastServiceDate}
      vehicleDraftMotDueDate={vehicleDraftMotDueDate}
      setVehicleDraftMotDueDate={setVehicleDraftMotDueDate}
      hasUploadedVehicleDocument={hasUploadedVehicleDocument}
      handleBrowseVehicleDocument={handleBrowseVehicleDocument}
      handleDeleteVehicleDocument={handleDeleteVehicleDocument}
      vehicleDraftNotes={vehicleDraftNotes}
      setVehicleDraftNotes={setVehicleDraftNotes}
      handleDeleteVehicleEntry={handleDeleteVehicleEntry}
    />
  );

  const insurancePoliciesContent = (
    <InsurancePoliciesContent
      styles={styles}
      openPlaceholder={openPlaceholder}
    />
  );

  const healthFitnessContent = (
    <HealthFitnessContent styles={styles} openPlaceholder={openPlaceholder} />
  );

  const homeMaintenanceContent = (
    <HomeMaintenanceContent styles={styles} openPlaceholder={openPlaceholder} />
  );

  const homeMaintenanceAddContent = (
    <HomeMaintenanceAddContent
      styles={styles}
      homeMaintenanceDraftName={homeMaintenanceDraftName}
      setHomeMaintenanceDraftName={setHomeMaintenanceDraftName}
      homeMaintenanceDraftModelSerial={homeMaintenanceDraftModelSerial}
      setHomeMaintenanceDraftModelSerial={setHomeMaintenanceDraftModelSerial}
      homeMaintenanceDraftLastServiceDate={homeMaintenanceDraftLastServiceDate}
      setHomeMaintenanceDraftLastServiceDate={
        setHomeMaintenanceDraftLastServiceDate
      }
      homeMaintenanceDraftNextDueDate={homeMaintenanceDraftNextDueDate}
      setHomeMaintenanceDraftNextDueDate={setHomeMaintenanceDraftNextDueDate}
      homeMaintenanceDraftDocuments={homeMaintenanceDraftDocuments}
      handleBrowseHomeMaintenanceDocument={handleBrowseHomeMaintenanceDocument}
      handleDeleteHomeMaintenanceDocument={handleDeleteHomeMaintenanceDocument}
      homeMaintenanceDraftReminderEnabled={homeMaintenanceDraftReminderEnabled}
      handleToggleHomeMaintenanceReminder={handleToggleHomeMaintenanceReminder}
      homeMaintenanceDraftNotes={homeMaintenanceDraftNotes}
      setHomeMaintenanceDraftNotes={setHomeMaintenanceDraftNotes}
      handleDeleteHomeMaintenanceEntry={handleDeleteHomeMaintenanceEntry}
    />
  );

  const importantDatesContent = (
    <ImportantDatesContent openPlaceholder={openPlaceholder} />
  );

  const importantDatesAddContent = (
    <ImportantDatesAddContent
      openPlaceholder={openPlaceholder}
      handleDeleteImportantDateEntry={handleDeleteImportantDateEntry}
    />
  );

  const remindersContent = (
    <RemindersContent openPlaceholder={openPlaceholder} />
  );

  const profileGeneralSettings: ProfileMenuItemData[] = [
    {
      id: 'account',
      title: 'Account',
      description: 'Personal info and account preferences',
      icon: (
        <View style={styles.profileMenuGlyphCircle}>
          <ProfileNavGlyph fill="#094771" />
        </View>
      ),
      onPress: openAccountSettings,
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Password, 2FA, and login history',
      icon: <Security1Svg width={40} height={40} />,
      onPress: () => openPlaceholder('Security'),
    },
    {
      id: 'data-backup',
      title: 'Data & Backup',
      description: 'Sync settings and cloud storage',
      icon: <DataSvg width={40} height={40} />,
      onPress: () => openPlaceholder('Data & Backup'),
    },
    {
      id: 'family-sharing',
      title: 'Family Sharing',
      description: 'Manage shared folders and members',
      icon: (
        <View style={styles.profileMenuGlyphCircle}>
          <FamilySettingsGlyph />
        </View>
      ),
      onPress: () => openPlaceholder('Family Sharing'),
    },
  ];

  const profilePreferenceSettings: ProfileMenuItemData[] = [
    {
      id: 'appearance',
      title: 'Appearance',
      description: 'Theme, colors, and layout',
      icon: <AppearanceSvg width={40} height={40} />,
      onPress: () => openPlaceholder('Appearance'),
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'App alerts and email preferences',
      icon: (
        <View style={styles.profileMenuGlyphCircle}>
          <BellSvg width={20} height={21} />
        </View>
      ),
      onPress: () => openPlaceholder('Notifications'),
    },
  ];

  const profileSupportSettings: ProfileMenuItemData[] = [
    {
      id: 'support',
      title: 'Support',
      description: 'Help center and ticket history',
      icon: <SupportSvg width={40} height={40} />,
      onPress: () => openPlaceholder('Support'),
    },
    {
      id: 'about',
      title: 'About',
      description: 'Version 4.2.1 • Privacy & Terms',
      icon: <AboutSvg width={40} height={40} />,
      onPress: () => openPlaceholder('About'),
    },
  ];

  const profileContent = (
    <View style={styles.profileScreen}>
      <View style={styles.profileHeaderStack}>
        <View style={styles.profileHeroCard}>
          <View style={styles.profileAvatarWrap}>
            {user?.profileImage ? (
              <Image
                source={{uri: user.profileImage}}
                style={styles.profileAvatarImage}
              />
            ) : (
              <SarahJohnsonSvg width={128} height={128} />
            )}

            <View style={styles.profileAvatarBadge}>
              <Profile2Svg width={27} height={26} />
            </View>
          </View>

          <View style={styles.profileHeroTextWrap}>
            <Text style={styles.profileHeroTitle}>{personalProfileName}</Text>
            <Text style={styles.profileHeroSubtitle}>
              Premium Life Planner {'\u2022'} Member since{' '}
              {profileMemberSinceYear}
            </Text>

            <View style={styles.profileHeroChipsRow}>
              <View style={styles.profilePremiumChip}>
                <PremiumSvg width={10} height={13} />
                <Text style={styles.profilePremiumChipText}>Premium</Text>
              </View>

              <View style={styles.profileEmailChip}>
                <Text numberOfLines={1} style={styles.profileEmailChipText}>
                  {profileEmail}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.profileHeroButtons}>
            <Pressable
              style={({pressed}) => [
                styles.profilePrimaryButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={openAccountSettings}>
              <Text style={styles.profilePrimaryButtonText}>Edit Profile</Text>
            </Pressable>

            <Pressable
              style={({pressed}) => [
                styles.profileSecondaryButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={handleShareProfile}>
              <Text style={styles.profileSecondaryButtonText}>Share Link</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.profileStatsCard}>
          <Text style={styles.profileStatsEyebrow}>Storage Used</Text>
          <Text style={styles.profileStatsValue}>12.4 GB / 50 GB</Text>

          <View style={styles.profileStatsTrack}>
            <View style={styles.profileStatsTrackFill} />
          </View>

          <Text style={styles.profileStatsCaption}>
            24% of your total capacity
          </Text>

          <View style={styles.profileStatsDivider} />

          <View style={styles.profileStatsRow}>
            <ProfileStatItem value="142" label="Records" />
            <ProfileStatItem value="86" label="Shared" />
            <ProfileStatItem value="12" label="Groups" />
          </View>
        </View>
      </View>

      <View style={styles.profileSettingsStack}>
        <ProfileMenuCard
          title="GENERAL SETTINGS"
          items={profileGeneralSettings}
        />
        <ProfileMenuCard
          title="PREFERENCES"
          items={profilePreferenceSettings}
        />

        <View style={styles.profileSubscriptionCard}>
          <View style={styles.profileSubscriptionHeader}>
            <View style={styles.profileSubscriptionTitleBlock}>
              <View style={styles.profileSubscriptionPlanChip}>
                <Text style={styles.profileSubscriptionPlanChipText}>
                  PRO PLAN
                </Text>
              </View>
              <Text style={styles.profileSubscriptionTitle}>Subscription</Text>
            </View>

            <SubscriptionSvg width={20} height={16} />
          </View>

          <Text style={styles.profileSubscriptionText}>
            Your next billing date is December 12, 2024 for $14.99/mo.
          </Text>

          <Pressable
            style={({pressed}) => [
              styles.profileSubscriptionButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Manage Subscription')}>
            <Text style={styles.profileSubscriptionButtonText}>
              Manage Subscription
            </Text>
          </Pressable>
        </View>

        <ProfileMenuCard title="HELP & ABOUT" items={profileSupportSettings} />

        <Pressable
          style={({pressed}) => [
            styles.profileLogoutButton,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleProfileLogout}>
          <SignOutSvg width={18} height={18} />
          <Text style={styles.profileLogoutText}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );

  const bucketContent = (
    <View style={styles.bucketBoard}>
      <BucketProgressCard />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bucketFilterRow}
        style={styles.bucketFilterScroll}>
        {bucketFilters.map(filter => {
          const isActive = bucketFilter === filter.key;

          return (
            <Pressable
              key={filter.key}
              style={({pressed}) => [
                styles.bucketFilterChip,
                isActive ? styles.bucketFilterChipActive : null,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => setBucketFilter(filter.key)}>
              <Text
                style={[
                  styles.bucketFilterChipText,
                  isActive ? styles.bucketFilterChipTextActive : null,
                ]}>
                {filter.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.bucketGoalsList}>
        {visibleBucketGoals.map(goal =>
          goal.layout === 'featured' ? (
            <BucketFeaturedCard
              key={goal.id}
              goal={goal}
              onPress={() => openPlaceholder(goal.title)}
            />
          ) : (
            <BucketCompactCard
              key={goal.id}
              goal={goal}
              onPress={() => openPlaceholder(goal.title)}
            />
          ),
        )}
      </View>
    </View>
  );

  const plannerContent = (
    <>
      <View style={styles.plannerTabsShell}>
        {plannerSegments.map(segment => {
          const isActive = plannerView === segment.key;

          return (
            <Pressable
              key={segment.key}
              style={({pressed}) => [
                styles.plannerTabButton,
                isActive ? styles.plannerTabButtonActive : null,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => setPlannerView(segment.key)}>
              <Text
                style={[
                  styles.plannerTabLabel,
                  isActive ? styles.plannerTabLabelActive : null,
                ]}>
                {segment.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {plannerView === 'eisenhower' ? (
        <View style={styles.plannerMatrix}>
          {plannerSections.map(section => (
            <PlannerSectionCard
              key={section.id}
              section={section}
              onAddPress={title => openPlaceholder(`Add to ${title}`)}
            />
          ))}
        </View>
      ) : plannerView === 'bucket' ? (
        bucketContent
      ) : (
        <PlannerCalendarContent />
      )}
    </>
  );

  const healthFitnessAddContent = (
    <HealthFitnessAddContent
      styles={styles}
      healthDraftProviderTopic={healthDraftProviderTopic}
      setHealthDraftProviderTopic={setHealthDraftProviderTopic}
      healthDraftContact={healthDraftContact}
      setHealthDraftContact={setHealthDraftContact}
      healthDraftMedications={healthDraftMedications}
      setHealthDraftMedications={setHealthDraftMedications}
      healthDraftWeeklyGoalPercent={healthDraftWeeklyGoalPercent}
      healthDraftWeeklyGoalProgress={healthDraftWeeklyGoalProgress}
      healthDraftWeeklyGoalText={healthDraftWeeklyGoalText}
      setHealthDraftWeeklyGoalText={setHealthDraftWeeklyGoalText}
      hasUploadedHealthReport={hasUploadedHealthReport}
      handleBrowseHealthReport={handleBrowseHealthReport}
      healthDraftRemindersEnabled={healthDraftRemindersEnabled}
      handleToggleHealthReminders={handleToggleHealthReminders}
      healthDraftNotes={healthDraftNotes}
      setHealthDraftNotes={setHealthDraftNotes}
      handleDeleteHealthEntry={handleDeleteHealthEntry}
    />
  );

  const insurancePoliciesAddContent = (
    <InsurancePoliciesAddContent
      styles={styles}
      insuranceDraftPolicyName={insuranceDraftPolicyName}
      setInsuranceDraftPolicyName={setInsuranceDraftPolicyName}
      insuranceDraftProvider={insuranceDraftProvider}
      setInsuranceDraftProvider={setInsuranceDraftProvider}
      insuranceDraftPolicyNumber={insuranceDraftPolicyNumber}
      setInsuranceDraftPolicyNumber={setInsuranceDraftPolicyNumber}
      insuranceDraftRenewalDate={insuranceDraftRenewalDate}
      insuranceDraftAnnualPremium={insuranceDraftAnnualPremium}
      setInsuranceDraftAnnualPremium={setInsuranceDraftAnnualPremium}
      insuranceDraftRenewalReminder={insuranceDraftRenewalReminder}
      handleToggleInsuranceRenewalReminder={
        handleToggleInsuranceRenewalReminder
      }
      insuranceDraftNotes={insuranceDraftNotes}
      setInsuranceDraftNotes={setInsuranceDraftNotes}
      handleDeleteInsuranceEntry={handleDeleteInsuranceEntry}
      openPlaceholder={openPlaceholder}
    />
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
                : isRecurringPaymentsAddView
                ? recurringPaymentsAddContent
                : isVehicleMaintenanceAddView
                ? vehicleMaintenanceAddContent
                : isHomeMaintenanceAddView
                ? homeMaintenanceAddContent
                : isHealthFitnessAddView
                ? healthFitnessAddContent
                : isImportantDatesAddView
                ? importantDatesAddContent
                : isInsurancePoliciesAddView
                ? insurancePoliciesAddContent
                : isRecurringPaymentsView
                ? recurringPaymentsContent
                : isVehicleMaintenanceView
                ? vehicleMaintenanceContent
                : isInsurancePoliciesView
                ? insurancePoliciesContent
                : isHealthFitnessView
                ? healthFitnessContent
                : isHomeMaintenanceView
                ? homeMaintenanceContent
                : isImportantDatesView
                ? importantDatesContent
                : isBankingCardsView
                ? bankingContent
                : isPersonalIdentityView
                ? personalIdentityContent
                : recordsContent
              : activeTab === 'reminders'
              ? remindersContent
              : activeTab === 'planner'
              ? plannerContent
              : activeTab === 'profile'
              ? profileContent
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
              onPress={() => handleTabPress('home')}
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
              onPress={() => handleTabPress('records')}
            />
            <BottomNavItem
              active={activeTab === 'reminders'}
              label="Reminders"
              icon={
                activeTab === 'reminders' ? (
                  <ReminderActiveSvg width={22} height={22} />
                ) : (
                  <RemindersSvg width={22} height={22} />
                )
              }
              onPress={() => handleTabPress('reminders')}
            />
            <BottomNavItem
              active={activeTab === 'planner'}
              label="Planner"
              icon={
                activeTab === 'planner' ? (
                  <PlannerActiveSvg width={22} height={22} />
                ) : (
                  <PlannerSvg width={22} height={22} />
                )
              }
              onPress={() => handleTabPress('planner')}
            />
            <BottomNavItem
              active={activeTab === 'profile'}
              label="Profile"
              icon={
                <ProfileNavGlyph
                  fill={activeTab === 'profile' ? '#FFFFFF' : '#42474E'}
                  width={22}
                  height={22}
                />
              }
              onPress={() => handleTabPress('profile')}
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
  recurringAddServiceCard: {
    width: '100%',
    marginBottom: 22,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCE5ED',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingVertical: 22,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  recurringAddServiceArtworkWrap: {
    width: 58,
    height: 74,
    borderRadius: 12,
    overflow: 'hidden',
  },
  recurringAddServiceContent: {
    flex: 1,
    minWidth: 0,
    marginLeft: 22,
  },
  recurringAddServiceLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recurringAddServiceName: {
    marginTop: 6,
    color: '#091E27',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  recurringAddSectionCard: {
    width: '100%',
    marginBottom: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4EAF0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 18,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  recurringAddSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recurringAddSectionTitle: {
    marginLeft: 8,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  recurringAddFieldsGroup: {
    marginTop: 18,
  },
  recurringAddField: {
    marginBottom: 16,
  },
  recurringAddFieldLabel: {
    marginBottom: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recurringAddInputShell: {
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9E1E8',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  recurringAddInput: {
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  recurringAddSelectShell: {
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9E1E8',
    backgroundColor: '#FFFFFF',
    paddingLeft: 14,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recurringAddSelectValueRow: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  recurringAddSelectValue: {
    flex: 1,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  recurringAddSelectValueWithIcon: {
    marginLeft: 10,
  },
  recurringAddSelectIcon: {
    transform: [{rotate: '90deg'}],
  },
  recurringAddSelectIconOpen: {
    transform: [{rotate: '-90deg'}],
  },
  recurringAddSelectDropdown: {
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9E1E8',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  recurringAddSelectOption: {
    minHeight: 44,
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  recurringAddSelectOptionActive: {
    backgroundColor: '#EAF6FF',
  },
  recurringAddSelectOptionText: {
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  recurringAddSelectOptionTextActive: {
    color: '#094771',
    fontFamily: fonts.semiBold,
  },
  recurringAddReminderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recurringAddReminderTextRow: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  recurringAddReminderTextBlock: {
    flex: 1,
    minWidth: 0,
    marginLeft: 10,
  },
  recurringAddReminderTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  recurringAddReminderSubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  recurringAddReminderToggle: {
    width: 46,
    height: 26,
    borderRadius: 999,
    backgroundColor: '#ADC9DE',
    paddingHorizontal: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  recurringAddReminderToggleActive: {
    backgroundColor: '#094771',
    alignItems: 'flex-end',
  },
  recurringAddReminderToggleThumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
  },
  recurringAddNotesBlock: {
    marginTop: 22,
  },
  recurringAddNotesInputShell: {
    minHeight: 116,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9E1E8',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  recurringAddNotesInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#243449',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  recurringAddDeleteButton: {
    width: '82%',
    marginTop: 20,
  },
  recurringHeroCard: {
    width: '100%',
    minHeight: 178,
    borderRadius: 12,
    backgroundColor: '#2C5F8A',
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 18,
    elevation: 3,
  },
  recurringHeroPatternWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  recurringHeroLabel: {
    color: '#B3D8FF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recurringHeroAmount: {
    marginTop: 10,
    color: '#B3D8FF',
    fontSize: 36,
    fontFamily: fonts.bold,
    lineHeight: 54,
  },
  recurringHeroInfoRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recurringHeroInfoChip: {
    width: '48%',
    minHeight: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  recurringHeroInfoLabel: {
    color: '#B3D8FF',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  recurringHeroInfoValue: {
    marginTop: 2,
    color: '#B3D8FF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recurringAnnualCard: {
    width: '100%',
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9E3EC',
    backgroundColor: '#FFFFFF',
    padding: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  recurringAnnualLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recurringAnnualValue: {
    marginTop: 8,
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  recurringAnnualTrack: {
    width: '100%',
    height: 8,
    marginTop: 18,
    borderRadius: 999,
    backgroundColor: '#D7EBF8',
    overflow: 'hidden',
  },
  recurringAnnualFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#FEB234',
  },
  recurringAnnualHint: {
    marginTop: 8,
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  recurringSectionTitle: {
    marginTop: 28,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  recurringSubscriptionsList: {
    width: '100%',
  },
  recurringSubscriptionCard: {
    width: '100%',
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CAD5DF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  recurringSubscriptionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  recurringSubscriptionContent: {
    flex: 1,
    minWidth: 0,
    marginLeft: 18,
  },
  recurringSubscriptionTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  recurringSubscriptionArtworkWrap: {
    width: 56,
    height: 56,
    marginTop: 14,
    borderRadius: 12,
    overflow: 'hidden',
  },
  recurringSubscriptionTextBlock: {
    flex: 1,
    minWidth: 0,
    paddingRight: 12,
  },
  recurringSubscriptionName: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  recurringSubscriptionPlan: {
    marginTop: 2,
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  recurringSubscriptionPriceBlock: {
    minWidth: 88,
    marginLeft: 12,
    alignItems: 'flex-end',
  },
  recurringSubscriptionPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  recurringSubscriptionPrice: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  recurringSubscriptionPriceSuffix: {
    marginLeft: 2,
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  recurringSubscriptionDueLabel: {
    marginTop: 2,
    color: '#815500',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textAlign: 'right',
  },
  recurringSubscriptionMetaRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  recurringSubscriptionMetaItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  recurringSubscriptionMetaItemTrailing: {
    marginLeft: 10,
  },
  recurringSubscriptionMetaIconWrap: {
    width: 16,
    marginTop: 2,
    alignItems: 'center',
  },
  recurringSubscriptionMetaText: {
    marginLeft: 6,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recurringInsightsList: {
    width: '100%',
  },
  recurringInsightCard: {
    width: '100%',
    minHeight: 162,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDE5EE',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    position: 'relative',
  },
  recurringInsightAccent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 4,
  },
  recurringInsightContent: {
    minHeight: 160,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: 'center',
  },
  recurringInsightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recurringInsightIconWrap: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  recurringInsightLabel: {
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  recurringInsightBody: {
    marginTop: 16,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  vehicleHeroCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D7E4EE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  vehicleHeroImageWrap: {
    height: 174,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#162833',
  },
  vehicleHeroBody: {
    paddingTop: 18,
  },
  vehicleHeroHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleHeroEyebrow: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 16,
    letterSpacing: 0.78,
  },
  vehicleHeroStatusChip: {
    minHeight: 28,
    borderRadius: 999,
    backgroundColor: '#3E6E9A',
    paddingHorizontal: 14,
    paddingVertical: 6,
    justifyContent: 'center',
  },
  vehicleHeroStatusText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  vehicleHeroTitle: {
    marginTop: 10,
    color: '#094771',
    fontSize: 24,
    fontFamily: fonts.bold,
    lineHeight: 34,
    letterSpacing: -0.48,
  },
  vehicleHeroMetaRow: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#D7E0E8',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleHeroMetaColumn: {
    width: '47%',
  },
  vehicleHeroMetaLabel: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  vehicleHeroMetaValue: {
    marginTop: 2,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  vehicleMotUrgentCard: {
    marginTop: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD5D2',
    backgroundColor: '#FFF5F5',
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleMotUrgentLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  vehicleMotUrgentTextWrap: {
    marginLeft: 12,
    flex: 1,
    minWidth: 0,
  },
  vehicleMotUrgentTitle: {
    color: '#D92D20',
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  vehicleMotUrgentValue: {
    marginTop: 2,
    color: '#2E2F33',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
  },
  vehicleMotUrgentButton: {
    minWidth: 88,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#D92D20',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleMotUrgentButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  vehicleEfficiencyCard: {
    width: '100%',
    marginTop: 20,
    height: 160,
    borderRadius: 12,
    backgroundColor: '#D6EBF8',
    padding: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  vehicleEfficiencyLabel: {
    color: '#1E537C',
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 16,
    letterSpacing: 1.04,
  },
  vehicleEfficiencyValueRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  vehicleEfficiencyValue: {
    color: '#094771',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  vehicleEfficiencyUnit: {
    marginLeft: 6,
    color: '#42474E',
    fontSize: 24,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  vehicleEfficiencyTrack: {
    width: '100%',
    height: 8,
    marginTop: 18,
    borderRadius: 999,
    backgroundColor: '#B7C9D8',
    overflow: 'hidden',
  },
  vehicleEfficiencyFill: {
    width: '75%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#094771',
  },
  vehicleEfficiencyTrend: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
  },
  vehicleOdometerCard: {
    width: '100%',
    marginTop: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D7E4EE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  vehicleOdometerLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 16,
    letterSpacing: 0.78,
  },
  vehicleOdometerValue: {
    marginTop: 4,
    color: '#091E27',
    fontSize: 20,
    fontFamily: fonts.regular,
    lineHeight: 26,
  },
  vehicleOdometerUnit: {
    fontSize: 16,
    lineHeight: 22,
  },
  vehicleOdometerIconWrap: {
    marginLeft: 16,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleSectionHeaderRow: {
    width: '100%',
    marginTop: 28,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleSectionTitle: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  vehicleSectionLink: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  vehicleRecentServicesCard: {
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D7E4EE',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  vehicleRecentServiceRow: {
    minHeight: 76,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleRecentServiceLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  vehicleRecentServiceTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 12,
  },
  vehicleRecentServiceTitle: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  vehicleRecentServiceMeta: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  vehicleRecentServicePrice: {
    color: '#094771',
    fontSize: 14,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  vehicleRecentServiceDivider: {
    height: 1,
    backgroundColor: '#E5EDF3',
    marginLeft: 16,
  },
  vehicleUpcomingList: {
    width: '100%',
  },
  vehicleUpcomingCard: {
    width: '100%',
    marginBottom: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'space-between',
  },
  vehicleUpcomingCardUrgent: {
    height: 180,
  },
  vehicleUpcomingCardStandard: {
    height: 124,
  },
  vehicleUpcomingTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  vehicleUpcomingIconWrap: {
    width: 20,
    marginTop: 2,
    alignItems: 'center',
  },
  vehicleUpcomingTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 12,
  },
  vehicleUpcomingTitle: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.semiBold,
    lineHeight: 22,
  },
  vehicleUpcomingDescription: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  vehicleUpcomingFooter: {
    marginTop: 10,
    color: '#A06D00',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  vehicleUpcomingFooterUrgent: {
    color: '#D92D20',
  },
  vehicleUpcomingActionsRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 32,
  },
  vehicleUpcomingPrimaryButton: {
    width: 154,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#094771',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    paddingHorizontal: 32,
    paddingVertical: 4,
  },
  vehicleUpcomingPrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  vehicleUpcomingSecondaryButton: {
    width: 124,
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
  vehicleUpcomingSecondaryButtonText: {
    color: '#091E27',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  vehicleGloveboxCard: {
    width: '100%',
    marginTop: 12,
    minHeight: 222,
    borderRadius: 12,
    backgroundColor: '#094771',
    padding: 24,
    justifyContent: 'space-between',
  },
  vehicleGloveboxTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
    textAlign: 'center',
  },
  vehicleGloveboxBody: {
    marginTop: 8,
    color: '#D6EBF8',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 20,
    textAlign: 'center',
  },
  vehicleGloveboxActionsRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleGloveboxSecondaryButton: {
    width: 146,
    height: 66,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A8C7DE',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  vehicleGloveboxSecondaryButtonText: {
    marginLeft: 18,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  vehicleGloveboxPrimaryButton: {
    width: 146,
    height: 66,
    borderRadius: 12,
    backgroundColor: '#FEB234',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    paddingVertical: 16,
  },
  vehicleGloveboxPrimaryButtonText: {
    marginLeft: 29,
    color: '#291800',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  vehicleAddHeroCard: {
    width: '100%',
    marginBottom: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D7E4EE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 22,
    alignItems: 'center',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  vehicleAddHeroImageWrap: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleAddHeroBadge: {
    marginTop: 10,
    minHeight: 26,
    borderRadius: 999,
    backgroundColor: '#FEB234',
    paddingHorizontal: 14,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleAddHeroBadgeText: {
    color: '#815500',
    fontSize: 12,
    fontFamily: fonts.medium,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  vehicleAddHeroTitle: {
    marginTop: 12,
    color: '#094771',
    fontSize: 24,
    fontFamily: fonts.regular,
    lineHeight: 32,
    textAlign: 'center',
  },
  vehicleAddHeroMetaRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleAddHeroMetaText: {
    marginLeft: 4,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
    textAlign: 'center',
  },
  vehicleAddFieldCard: {
    width: '100%',
    marginBottom: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2EAF1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 14,
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
  vehicleAddCard: {
    width: '100%',
    marginBottom: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2EAF1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  vehicleAddSectionTitle: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  vehicleAddUploadSectionTitle: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
  },
  vehicleAddSectionDivider: {
    height: 1,
    marginTop: 8,
    marginBottom: 14,
    backgroundColor: '#E1E9F0',
  },
  vehicleAddField: {
    marginBottom: 14,
  },
  vehicleAddFieldLast: {
    marginBottom: 0,
  },
  vehicleAddFieldLabel: {
    marginBottom: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
  },
  vehicleAddInputShell: {
    minHeight: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C7D1DC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  vehicleAddInput: {
    flex: 1,
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  vehicleAddInputAlert: {
    color: '#BA1A1A',
  },
  vehicleAddComplianceBlock: {
    marginTop: 16,
  },
  vehicleAddComplianceTrack: {
    width: '100%',
    height: 6,
    borderRadius: 999,
    backgroundColor: '#D8ECF9',
    overflow: 'hidden',
  },
  vehicleAddComplianceFill: {
    width: '75%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#0A5688',
  },
  vehicleAddComplianceHint: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  vehicleAddUploadArea: {
    marginTop: 14,
    minHeight: 180,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#C7D1DC',
    borderStyle: 'dashed',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  vehicleAddUploadTitle: {
    marginTop: 14,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 22,
    textAlign: 'center',
  },
  vehicleAddUploadSubtitle: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    textAlign: 'center',
  },
  vehicleAddUploadFileCard: {
    marginTop: 12,
    minHeight: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BFDCEF',
    backgroundColor: '#EAF6FF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleAddUploadFileInfo: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  vehicleAddUploadFileTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 10,
  },
  vehicleAddUploadFileName: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  vehicleAddUploadFileMeta: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 11,
    fontFamily: fonts.regular,
    lineHeight: 14,
  },
  vehicleAddUploadFileDeleteButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleAddNotesShell: {
    minHeight: 118,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C7D1DC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  vehicleAddNotesInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  vehicleAddDeleteButton: {
    alignSelf: 'center',
    minHeight: 36,
    marginTop: 10,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F0C9C5',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleAddDeleteButtonText: {
    marginLeft: 8,
    color: '#D92D20',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  insurancePolicyCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D7E4EE',
    backgroundColor: '#FFFFFF',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  insuranceHeroImageWrap: {
    height: 180,
    marginTop: 22,
    marginHorizontal: 22,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#D6E5F0',
    position: 'relative',
  },
  insuranceActiveChip: {
    position: 'absolute',
    top: 10,
    right: 10,
    minHeight: 24,
    borderRadius: 999,
    backgroundColor: '#FEB234',
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  insuranceActiveChipText: {
    color: '#6D4700',
    fontSize: 12,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  insurancePolicyBody: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 20,
  },
  insurancePolicyTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  insurancePolicyTitle: {
    flex: 1,
    color: '#094771',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
    paddingRight: 12,
  },
  insuranceRenewChip: {
    minHeight: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8A020',
    backgroundColor: '#FFF6E7',
    paddingHorizontal: 14,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insuranceRenewChipText: {
    marginLeft: 4,
    color: '#815500',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  insurancePolicyNumberRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  insurancePolicyNumber: {
    marginLeft: 6,
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  insurancePolicyMetaRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  insurancePolicyMetaCard: {
    width: '48.5%',
    minHeight: 58,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#E7F6FF',
    padding: 8,
    justifyContent: 'center',
  },
  insurancePolicyMetaLabel: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  insurancePolicyMetaValue: {
    marginTop: 2,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  insurancePolicyActionsRow: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  insurancePrimaryActionButton: {
    flex: 1,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#094771',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  insurancePrimaryActionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  insuranceSecondaryActionButton: {
    width: 90,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#72777F',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insuranceSecondaryActionText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  insuranceCoverageCard: {
    width: '100%',
    marginTop: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D7E4EE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 18,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  insuranceSectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  insuranceSectionTitle: {
    marginLeft: 8,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  insuranceCoverageList: {
    marginTop: 18,
  },
  insuranceCoverageItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  insuranceCoverageItemTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 14,
  },
  insuranceCoverageItemTitle: {
    color: '#091E27',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  insuranceCoverageItemDescription: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
  },
  insuranceAssociatedHeaderRow: {
    width: '100%',
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  insuranceAssociatedTitle: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  insuranceAssociatedCount: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  insuranceAssociatedList: {
    width: '100%',
    marginTop: 16,
  },
  insuranceAssociatedPolicyCard: {
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D7E4EE',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  insuranceAssociatedPolicyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  insuranceAssociatedPolicyTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 14,
    paddingRight: 10,
  },
  insuranceAssociatedPolicyTitle: {
    color: '#091E27',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  insuranceAssociatedPolicyTitleArchived: {
    color: '#72777F',
  },
  insuranceAssociatedPolicySubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  insuranceAssociatedPolicySubtitleArchived: {
    color: '#72777F',
  },
  insuranceAssociatedStatusChip: {
    alignSelf: 'flex-start',
    marginTop: 12,
    minHeight: 24,
    borderRadius: 999,
    backgroundColor: '#DFF0FB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  insuranceAssociatedStatusChipArchived: {
    backgroundColor: '#E7EDF2',
  },
  insuranceAssociatedStatusText: {
    color: '#0A5688',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  insuranceAssociatedStatusTextArchived: {
    color: '#72777F',
  },
  insuranceAssociatedArrowWrap: {
    width: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  insuranceAddIntro: {
    width: '100%',
    marginBottom: 18,
    paddingHorizontal: 2,
  },
  insuranceAddEyebrow: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.medium,
    lineHeight: 18,
    letterSpacing: 1.56,
  },
  insuranceAddTitle: {
    marginTop: 6,
    color: '#094771',
    fontSize: 28,
    fontFamily: fonts.regular,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  insuranceAddCard: {
    width: '100%',
    marginBottom: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2EAF1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 20,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  insuranceAddField: {
    marginBottom: 16,
  },
  insuranceAddFieldLast: {
    marginBottom: 0,
  },
  insuranceAddFieldLabel: {
    marginBottom: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
  },
  insuranceAddInputShell: {
    minHeight: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C7D1DC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  insuranceAddDateInputShell: {
    minHeight: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C7D1DC',
    backgroundColor: '#FFFFFF',
    paddingLeft: 14,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  insuranceAddInput: {
    flex: 1,
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  insuranceAddReminderCard: {
    marginTop: 24,
    minHeight: 72,
    borderRadius: 10,
    backgroundColor: '#DFF1FF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  insuranceAddReminderTextWrap: {
    flex: 1,
    minWidth: 0,
    paddingRight: 14,
  },
  insuranceAddReminderTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  insuranceAddReminderSubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  insuranceAddReminderToggle: {
    width: 48,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#ADC9DE',
    paddingHorizontal: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  insuranceAddReminderToggleActive: {
    backgroundColor: '#094771',
    alignItems: 'flex-end',
  },
  insuranceAddReminderThumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
  },
  insuranceAddSectionTitle: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  insuranceAddNotesLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  insuranceAddUploadArea: {
    marginTop: 16,
    minHeight: 168,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#C7D1DC',
    borderStyle: 'dashed',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  insuranceAddUploadTitle: {
    marginTop: 16,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 20,
    textAlign: 'center',
  },
  insuranceAddUploadSubtitle: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 18,
    textAlign: 'center',
  },
  insuranceAddNotesShell: {
    marginTop: 14,
    minHeight: 182,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C7D1DC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  insuranceAddNotesInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  insuranceAddFooterDivider: {
    width: '100%',
    height: 1,
    marginTop: 6,
    marginBottom: 18,
    backgroundColor: '#D1D8DF',
  },
  insuranceAddDeleteButton: {
    width: '100%',
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  insuranceAddDeleteButtonText: {
    marginLeft: 8,
    color: '#BA1A1A',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  healthPrimaryCard: {
    width: '100%',
    minHeight: 266,
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 2,
  },
  healthPrimaryCardContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
  },
  healthPrimaryBackgroundMark: {
    position: 'absolute',
    right: -8,
    bottom: 0,
  },
  healthPrimaryTitleRow: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  healthPrimaryTitle: {
    color: '#091E27',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  healthVerifiedChip: {
    width: 84,
    height: 24,
    marginLeft: 10,
    borderRadius: 9999,
    backgroundColor: '#2C5F8A',
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthVerifiedChipText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  healthPrimaryMetaRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  healthPrimaryMetaText: {
    marginLeft: 8,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  healthUtilityCard: {
    width: '100%',
    minHeight: 70,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  healthUtilityCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: 16,
  },
  healthUtilityLabel: {
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  healthMedicationValue: {
    marginTop: 2,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.bold,
    lineHeight: 22,
  },
  healthGoalRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  healthGoalTrack: {
    flex: 1,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#CBE4F4',
    overflow: 'hidden',
    marginRight: 12,
  },
  healthGoalFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#9A6A00',
  },
  healthGoalPercent: {
    color: '#9A6A00',
    fontSize: 15,
    fontFamily: fonts.medium,
    lineHeight: 22,
  },
  healthCheckupsCard: {
    width: '100%',
    marginTop: 12,
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C2C7CF',
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
  healthSectionHeader: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  healthSectionTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  healthSectionLink: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  healthCheckupsList: {
    width: '100%',
  },
  healthCheckupRow: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  healthCheckupRowWithDivider: {
    borderTopWidth: 1,
    borderTopColor: '#D8DDE3',
  },
  healthCheckupDateBadge: {
    width: 56,
    height: 60,
    borderRadius: 14,
    backgroundColor: '#D6EBF8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthCheckupMonth: {
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  healthCheckupDay: {
    marginTop: 2,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthCheckupTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 16,
    paddingRight: 12,
  },
  healthCheckupTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  healthCheckupSubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  healthCheckupArrowWrap: {
    width: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  healthAnalysisCard: {
    width: '100%',
    height: 358,
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#094771',
    position: 'relative',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 2,
  },
  healthAnalysisArtwork: {
    ...StyleSheet.absoluteFillObject,
  },
  healthAnalysisTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(9, 71, 113, 0.22)',
  },
  healthAnalysisGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  healthAnalysisContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  healthAnalysisLabel: {
    color: '#CFE5FF',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 1.2,
  },
  healthAnalysisTitle: {
    marginTop: 6,
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  healthAnalysisBody: {
    marginTop: 8,
    color: '#9BCBFC',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    maxWidth: 250,
  },
  healthAnalysisButton: {
    alignSelf: 'flex-start',
    minHeight: 34,
    marginTop: 20,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthAnalysisButtonText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  healthHeartRateCard: {
    width: '100%',
    minHeight: 169,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#D6EBF8',
    padding: 24,
    marginBottom: 8,
  },
  healthHeartRateTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  healthHeartRateSyncChip: {
    minHeight: 24,
    borderRadius: 4,
    backgroundColor: '#D9FFE3',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthHeartRateSyncText: {
    color: '#4E7F60',
    fontSize: 10,
    fontFamily: fonts.medium,
    lineHeight: 12,
    letterSpacing: 0.6,
  },
  healthHeartRateLabel: {
    marginTop: 16,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  healthHeartRateValueRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  healthHeartRateValue: {
    color: '#091E27',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  healthHeartRateUnit: {
    marginLeft: 4,
    marginBottom: 8,
    color: '#72777F',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  healthHeartRateTrendRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  healthHeartRateTrendText: {
    marginLeft: 4,
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  healthAddOverviewSection: {
    width: '100%',
    marginBottom: 24,
  },
  healthAddHeroCard: {
    width: '100%',
    minHeight: 106,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  healthAddHeroRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  healthAddHeroIconWrap: {
    width: 44.88,
    height: 64,
    borderRadius: 9999,
    backgroundColor: '#CFE5FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  healthAddHeroTextWrap: {
    flex: 1,
    minWidth: 0,
  },
  healthAddHeroTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  healthAddHeroBody: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddBasicInfoCard: {
    width: '100%',
    minHeight: 190,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  healthAddField: {
    width: '100%',
    marginBottom: 16,
  },
  healthAddFieldLast: {
    width: '100%',
  },
  healthAddFieldLabel: {
    marginBottom: 4,
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddInputShell: {
    width: '100%',
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  healthAddInput: {
    flex: 1,
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddBloodCard: {
    width: '100%',
    minHeight: 120,
    borderRadius: 12,
    backgroundColor: '#2C5F8A',
    padding: 16,
    justifyContent: 'space-between',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  healthAddBloodLabel: {
    color: 'rgba(179, 216, 255, 0.8)',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddBloodValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  healthAddBloodValue: {
    marginRight: 4,
    color: '#B3D8FF',
    fontSize: 36,
    fontFamily: fonts.bold,
    lineHeight: 40,
  },
  healthAddBloodIconWrap: {
    marginTop: 2,
  },
  healthAddBloodNote: {
    color: '#B3D8FF',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddDetailsCard: {
    width: '100%',
    minHeight: 266,
    marginBottom: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  healthAddTextareaField: {
    width: '100%',
    marginBottom: 24,
  },
  healthAddTextareaShell: {
    width: '100%',
    minHeight: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  healthAddTextareaInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddGoalSection: {
    width: '100%',
  },
  healthAddGoalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  healthAddGoalLabel: {
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddGoalPercent: {
    color: '#094771',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddGoalTrack: {
    width: '100%',
    height: 8,
    borderRadius: 9999,
    backgroundColor: '#D1E6F2',
    overflow: 'hidden',
    marginBottom: 16,
  },
  healthAddGoalFill: {
    height: '100%',
    borderRadius: 9999,
    backgroundColor: '#094771',
  },
  healthAddUploadCard: {
    width: '100%',
    minHeight: 232,
    marginBottom: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  healthAddUploadRow: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  healthAddUploadAction: {
    width: '47.8%',
    minHeight: 147,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#C2C7CF',
    backgroundColor: '#E7F6FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  healthAddUploadActionText: {
    marginTop: 8,
    color: '#094771',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
    textAlign: 'center',
  },
  healthAddUploadPreviewCard: {
    width: '47.8%',
    height: 158,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  healthAddUploadPreviewEmpty: {
    flex: 1,
    backgroundColor: '#F3F6F9',
  },
  healthAddControlsCard: {
    width: '100%',
    minHeight: 257,
    marginBottom: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  healthAddReminderRow: {
    width: '100%',
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  healthAddReminderCopy: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  healthAddReminderTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 8,
  },
  healthAddReminderTitle: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddReminderBody: {
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddReminderToggle: {
    width: 44,
    height: 24,
    borderRadius: 9999,
    backgroundColor: '#C6D3DF',
    paddingHorizontal: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  healthAddReminderToggleActive: {
    backgroundColor: '#094771',
    alignItems: 'flex-end',
  },
  healthAddReminderThumb: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  healthAddReminderThumbActive: {
    backgroundColor: '#FFFFFF',
  },
  healthAddDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#C2C7CF',
    marginTop: 16,
    marginBottom: 16,
  },
  healthAddNotesSection: {
    width: '100%',
  },
  healthAddNotesShell: {
    width: '100%',
    minHeight: 114,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  healthAddNotesInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  healthAddDangerZone: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  healthAddDeleteButton: {
    minWidth: 169,
    minHeight: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(186, 26, 26, 0.3)',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthAddDeleteButtonText: {
    marginLeft: 8,
    color: '#BA1A1A',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
    textAlign: 'center',
  },
  homeMaintenanceHeroCard: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDE5EE',
    backgroundColor: '#FFFFFF',
    padding: 24,
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  homeMaintenanceHeroGlow: {
    position: 'absolute',
    top: -64,
    right: -64,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: 'rgba(44, 95, 138, 0.1)',
  },
  homeMaintenanceHeroTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  homeMaintenanceHeroTextColumn: {
    flex: 1,
    minWidth: 0,
    marginLeft: 16,
  },
  homeMaintenanceHeroTitle: {
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  homeMaintenanceHeroSubtitle: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  homeMaintenanceHeroChips: {
    marginTop: 16,
  },
  homeMaintenanceHeroChip: {
    alignSelf: 'flex-start',
    minHeight: 24,
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeMaintenanceHeroChipWarranty: {
    backgroundColor: '#D6EBF8',
  },
  homeMaintenanceHeroChipManaged: {
    marginTop: 8,
    backgroundColor: '#FFDDAE',
  },
  homeMaintenanceHeroChipText: {
    marginLeft: 6,
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  homeMaintenanceHeroChipTextManaged: {
    color: '#281800',
  },
  homeMaintenanceHeroMetricsRow: {
    marginTop: 24,
    flexDirection: 'row',
  },
  homeMaintenanceHeroMetricCard: {
    flex: 1,
    minHeight: 78,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDE5EE',
    backgroundColor: '#F4FAFF',
    padding: 16,
  },
  homeMaintenanceHeroMetricCardDue: {
    marginLeft: 16,
    backgroundColor: 'rgba(44, 95, 138, 0.05)',
    borderColor: 'rgba(9, 71, 113, 0.2)',
  },
  homeMaintenanceHeroMetricLabel: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  homeMaintenanceHeroMetricLabelDue: {
    color: '#815500',
  },
  homeMaintenanceHeroMetricValue: {
    marginTop: 4,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  homeMaintenanceHeroMetricValueDue: {
    color: '#815500',
  },
  homeMaintenanceHeroProgressBlock: {
    marginTop: 24,
  },
  homeMaintenanceHeroProgressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMaintenanceHeroProgressLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  homeMaintenanceHeroProgressValue: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  homeMaintenanceHeroProgressTrack: {
    width: '100%',
    height: 8,
    marginTop: 8,
    borderRadius: 9999,
    backgroundColor: '#DCF1FD',
    overflow: 'hidden',
  },
  homeMaintenanceHeroProgressFill: {
    height: '100%',
    borderRadius: 9999,
    backgroundColor: '#094771',
  },
  homeMaintenanceSectionHeader: {
    width: '100%',
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMaintenanceSectionTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  homeMaintenanceSectionLink: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  homeMaintenanceApplianceCard: {
    width: '100%',
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDE5EE',
    backgroundColor: '#FFFFFF',
    padding: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  homeMaintenanceApplianceCardSpaced: {
    marginTop: 20,
  },
  homeMaintenanceApplianceHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  homeMaintenanceApplianceTitle: {
    marginTop: 16,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  homeMaintenanceApplianceSubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  homeMaintenanceStatusBadge: {
    minHeight: 24,
    borderRadius: 9999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeMaintenanceStatusBadgeWarning: {
    backgroundColor: '#FFDAD6',
  },
  homeMaintenanceStatusBadgeHealthy: {
    backgroundColor: '#D6EBF8',
  },
  homeMaintenanceStatusBadgeText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  homeMaintenanceStatusBadgeTextWarning: {
    color: '#93000A',
  },
  homeMaintenanceStatusBadgeTextHealthy: {
    color: '#42474E',
  },
  homeMaintenanceApplianceDetails: {
    marginTop: 24,
  },
  homeMaintenanceApplianceDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  homeMaintenanceApplianceDetailLabel: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  homeMaintenanceApplianceDetailValue: {
    color: '#091E27',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textAlign: 'right',
  },
  homeMaintenanceApplianceDetailValueWarning: {
    color: '#815500',
    fontFamily: fonts.bold,
  },
  homeMaintenanceApplianceMediaWrap: {
    width: '100%',
    height: 128,
    marginTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#EAF4FB',
  },
  homeMaintenanceApplianceFooter: {
    marginTop: 16,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  homeMaintenanceWashingMachineIcon: {
    width: 32,
    height: 36,
    borderRadius: 8,
  },
  homeMaintenanceApplianceProgressBlock: {
    marginTop: 24,
  },
  homeMaintenanceApplianceProgressMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMaintenanceApplianceProgressTrack: {
    width: '100%',
    height: 4,
    marginTop: 8,
    borderRadius: 9999,
    backgroundColor: '#DCF1FD',
    overflow: 'hidden',
  },
  homeMaintenanceApplianceProgressFill: {
    height: '100%',
    borderRadius: 9999,
    backgroundColor: '#094771',
  },
  homeMaintenanceApplianceProgressCaption: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 10,
    fontFamily: fonts.regular,
    lineHeight: 15,
    textAlign: 'right',
  },
  homeMaintenanceHistoryCard: {
    width: '100%',
    marginTop: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDE5EE',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  homeMaintenanceHistoryHeader: {
    minHeight: 57,
    backgroundColor: '#F4FAFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDE5EE',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMaintenanceHistoryTitle: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  homeMaintenanceHistoryFilterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  homeMaintenanceHistoryRow: {
    minHeight: 128,
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMaintenanceHistoryRowDivider: {
    height: 1,
    marginLeft: 24,
    backgroundColor: '#DDE5EE',
  },
  homeMaintenanceHistoryLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  homeMaintenanceHistoryTextBlock: {
    flex: 1,
    minWidth: 0,
    marginLeft: 16,
  },
  homeMaintenanceHistoryItemTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  homeMaintenanceHistoryItemMeta: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  homeMaintenanceHistoryRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  homeMaintenanceHistoryStatusChip: {
    minWidth: 108,
    minHeight: 24,
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: '#D6EBF8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeMaintenanceHistoryStatusText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  homeMaintenanceHistoryArrow: {
    marginLeft: 16,
  },
  homeMaintenanceHistoryFooter: {
    minHeight: 48,
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeMaintenanceHistoryFooterText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  homeMaintenanceAddSectionCard: {
    width: '100%',
    marginTop: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.3)',
    backgroundColor: '#FFFFFF',
    padding: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  homeMaintenanceAddSectionCardFirst: {
    marginTop: 0,
  },
  homeMaintenanceAddSectionTitle: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  homeMaintenanceAddFieldsStack: {
    width: '100%',
  },
  homeMaintenanceAddField: {
    marginTop: 24,
  },
  homeMaintenanceAddFieldLast: {
    marginTop: 24,
  },
  homeMaintenanceAddFieldLabel: {
    marginBottom: 8,
    marginLeft: 4,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  homeMaintenanceAddInputShell: {
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  homeMaintenanceAddInputShellWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeMaintenanceAddInput: {
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  homeMaintenanceAddInputWithIcon: {
    flex: 1,
    marginRight: 12,
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  homeMaintenanceAddDocumentationHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMaintenanceAddDocumentationBadge: {
    minHeight: 24,
    borderRadius: 9999,
    backgroundColor: '#D6EBF8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeMaintenanceAddDocumentationBadgeText: {
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  homeMaintenanceAddDocumentsList: {
    width: '100%',
    marginTop: 16,
  },
  homeMaintenanceAddDocumentRow: {
    minHeight: 74,
    marginTop: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.2)',
    backgroundColor: '#E7F6FF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeMaintenanceAddDocumentCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: 16,
    marginRight: 12,
  },
  homeMaintenanceAddDocumentName: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  homeMaintenanceAddDocumentSize: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  homeMaintenanceAddDocumentDeleteButton: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeMaintenanceAddUploadArea: {
    width: '100%',
    minHeight: 169,
    marginTop: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeMaintenanceAddUploadTitle: {
    marginTop: 12,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    textAlign: 'center',
  },
  homeMaintenanceAddUploadSubtitle: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
    textAlign: 'center',
  },
  homeMaintenanceAddReminderHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeMaintenanceAddReminderHeaderTitle: {
    marginLeft: 16,
  },
  homeMaintenanceAddReminderCard: {
    width: '100%',
    minHeight: 104,
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: '#E7F6FF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeMaintenanceAddReminderCopy: {
    flex: 1,
    minWidth: 0,
    paddingRight: 16,
  },
  homeMaintenanceAddReminderTitle: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  homeMaintenanceAddReminderBody: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  homeMaintenanceAddReminderToggle: {
    width: 44,
    height: 24,
    borderRadius: 9999,
    backgroundColor: '#D1D5DB',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  homeMaintenanceAddReminderToggleActive: {
    backgroundColor: '#2C5F8A',
  },
  homeMaintenanceAddReminderThumb: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  homeMaintenanceAddReminderThumbActive: {
    transform: [{translateX: 20}],
  },
  homeMaintenanceAddNotesShell: {
    width: '100%',
    height: 146,
    marginTop: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  homeMaintenanceAddNotesInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  homeMaintenanceAddAssetCard: {
    width: '100%',
    height: 160,
    marginTop: 24,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  homeMaintenanceAddAssetGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  homeMaintenanceAddAssetOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
    justifyContent: 'flex-end',
  },
  homeMaintenanceAddAssetText: {
    maxWidth: 240,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  homeMaintenanceAddDeleteButton: {
    width: '100%',
    minHeight: 74,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(186, 26, 26, 0.2)',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeMaintenanceAddDeleteButtonText: {
    marginLeft: 8,
    color: '#BA1A1A',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
    textAlign: 'center',
  },
  plannerTabsShell: {
    width: '100%',
    minHeight: 74,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.3)',
    backgroundColor: '#DCF1FD',
    padding: 4,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  plannerTabButton: {
    flex: 1,
    minHeight: 64,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  plannerTabButtonActive: {
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.2)',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  plannerTabLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  plannerTabLabelActive: {
    color: '#42474E',
  },
  plannerMatrix: {
    width: '100%',
    marginTop: 24,
    gap: 20,
  },
  plannerSectionCard: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  plannerSectionHeader: {
    minHeight: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plannerSectionHeaderCritical: {
    backgroundColor: '#BA1A1A',
  },
  plannerSectionHeaderFocused: {
    backgroundColor: '#094771',
  },
  plannerSectionHeaderDelegated: {
    backgroundColor: '#815500',
  },
  plannerSectionHeaderBacklog: {
    backgroundColor: '#72777F',
  },
  plannerSectionTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    paddingRight: 12,
  },
  plannerSectionAddButton: {
    width: 20,
    height: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plannerSectionBody: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 22,
    gap: 8,
  },
  plannerTaskCard: {
    minHeight: 86,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#F4FAFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  plannerTaskCardBacklog: {
    opacity: 0.7,
  },
  plannerTaskTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 8,
  },
  plannerTaskTitle: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  plannerTaskTitleBacklog: {
    color: '#091E27',
  },
  plannerTaskMetaChip: {
    alignSelf: 'flex-start',
    marginTop: 8,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  plannerTaskMetaChipCritical: {
    backgroundColor: '#FFDAD6',
  },
  plannerTaskMetaChipFocused: {
    backgroundColor: '#D1E6F2',
  },
  plannerTaskMetaChipDelegated: {
    backgroundColor: '#FFDDB2',
  },
  plannerTaskMetaChipBacklog: {
    backgroundColor: '#C2C7CF',
  },
  plannerTaskMetaText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  plannerTaskMetaTextCritical: {
    color: '#93000A',
  },
  plannerTaskMetaTextFocused: {
    color: '#094771',
  },
  plannerTaskMetaTextDelegated: {
    color: '#291800',
  },
  plannerTaskMetaTextBacklog: {
    color: '#42474E',
  },
  plannerMetaNeutralIcon: {
    width: 10,
    height: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#42474E',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 2,
  },
  plannerMetaNeutralIconLine: {
    width: 4,
    height: 1,
    backgroundColor: '#42474E',
  },
  plannerPlaceholderCard: {
    width: '100%',
    minHeight: 240,
    marginTop: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D7E5F0',
    backgroundColor: '#F7FBFF',
    paddingHorizontal: 24,
    paddingVertical: 28,
    justifyContent: 'center',
  },
  plannerPlaceholderEyebrow: {
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.24,
    textTransform: 'uppercase',
  },
  plannerPlaceholderTitle: {
    marginTop: 10,
    color: '#094771',
    fontSize: 24,
    fontFamily: fonts.bold,
    lineHeight: 30,
  },
  plannerPlaceholderBody: {
    marginTop: 10,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  bucketBoard: {
    width: '100%',
    marginTop: 24,
    gap: 24,
  },
  bucketProgressCard: {
    width: '100%',
    minHeight: 170,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.2)',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  bucketProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bucketProgressTextBlock: {
    flex: 1,
    minWidth: 0,
    paddingRight: 16,
  },
  bucketProgressTitle: {
    maxWidth: 176,
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  bucketProgressSubtitle: {
    marginTop: 4,
    maxWidth: 176,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bucketProgressMetricBlock: {
    alignItems: 'flex-end',
  },
  bucketProgressMetricRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bucketProgressMetricValue: {
    color: '#2E7D52',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  bucketProgressMetricTotal: {
    color: '#72777F',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    paddingBottom: 4,
  },
  bucketProgressMetricLabel: {
    marginTop: -1,
    color: '#72777F',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  bucketProgressTrack: {
    width: '100%',
    height: 12,
    marginTop: 16,
    borderRadius: 9999,
    backgroundColor: '#D1E6F2',
    overflow: 'hidden',
  },
  bucketProgressFill: {
    height: '100%',
    borderRadius: 9999,
    backgroundColor: '#2E7D52',
    shadowColor: '#2E7D52',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 1,
  },
  bucketFilterScroll: {
    width: '100%',
  },
  bucketFilterRow: {
    paddingRight: 8,
    gap: 8,
  },
  bucketFilterChip: {
    minHeight: 34,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bucketFilterChipActive: {
    borderColor: '#094771',
    backgroundColor: '#094771',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  bucketFilterChipText: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  bucketFilterChipTextActive: {
    color: '#FFFFFF',
  },
  bucketGoalsList: {
    width: '100%',
    gap: 16,
  },
  bucketCard: {
    width: '100%',
    minHeight: 206,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.2)',
    backgroundColor: '#FFFFFF',
    padding: 24,
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  bucketCardAchievedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(46, 125, 82, 0.05)',
  },
  bucketCardContent: {
    flex: 1,
    zIndex: 1,
  },
  bucketCardIconWrap: {
    width: 48,
    height: 48,
  },
  bucketCardTitle: {
    marginTop: 12,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  bucketCardMeta: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bucketStatusChip: {
    alignSelf: 'flex-start',
    marginTop: 24,
    minHeight: 24,
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bucketStatusChipDream: {
    backgroundColor: '#D1E6F2',
  },
  bucketStatusChipInProgress: {
    backgroundColor: 'rgba(232, 160, 32, 0.1)',
  },
  bucketStatusChipAchieved: {
    backgroundColor: 'rgba(46, 125, 82, 0.1)',
  },
  bucketStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginRight: 4,
  },
  bucketStatusDotDream: {
    backgroundColor: '#094771',
  },
  bucketStatusDotInProgress: {
    backgroundColor: '#E8A020',
  },
  bucketStatusDotAchieved: {
    backgroundColor: '#2E7D52',
  },
  bucketStatusText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bucketStatusTextDream: {
    color: '#094771',
  },
  bucketStatusTextInProgress: {
    color: '#E8A020',
  },
  bucketStatusTextAchieved: {
    color: '#2E7D52',
  },
  bucketCardCheckWrap: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    zIndex: 2,
  },
  bucketCardCheckIcon: {
    position: 'absolute',
    top: -2,
    left: -12,
  },
  bucketFeaturedCard: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#094771',
    padding: 24,
    gap: 24,
    shadowColor: '#094771',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 4,
  },
  bucketFeaturedTextBlock: {
    width: '100%',
  },
  bucketFeaturedTitle: {
    marginTop: 8,
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  bucketFeaturedDescription: {
    marginTop: 8,
    color: '#B3D8FF',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  bucketFeaturedMetricsRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 24,
  },
  bucketFeaturedMetricBlock: {
    flex: 1,
  },
  bucketFeaturedMetricLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  bucketFeaturedMetricValue: {
    marginTop: 4,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  bucketFeaturedImageFrame: {
    width: '100%',
    height: 261,
    minHeight: 180,
    borderRadius: 12,
    overflow: 'hidden',
  },
  profileScreen: {
    width: '100%',
    paddingHorizontal: 16,
    gap: 16,
  },
  profileHeaderStack: {
    gap: 20,
  },
  profileHeroCard: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.3)',
    backgroundColor: '#FFFFFF',
    padding: 24,
    alignItems: 'center',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  profileAvatarWrap: {
    width: 128,
    height: 128,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  profileAvatarImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#CFE5FF',
  },
  profileAvatarBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  profileHeroTextWrap: {
    width: '100%',
    marginTop: 24,
    alignItems: 'center',
  },
  profileHeroTitle: {
    color: '#091E27',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
    textAlign: 'center',
  },
  profileHeroSubtitle: {
    marginTop: 8,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    textAlign: 'center',
  },
  profileHeroChipsRow: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  profilePremiumChip: {
    minHeight: 24,
    borderRadius: 9999,
    backgroundColor: '#2C5F8A',
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  profilePremiumChipText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  profileEmailChip: {
    minHeight: 24,
    maxWidth: '100%',
    borderRadius: 9999,
    backgroundColor: '#D6EBF8',
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  profileEmailChipText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  profileHeroButtons: {
    width: '100%',
    marginTop: 24,
    gap: 8,
  },
  profilePrimaryButton: {
    width: '100%',
    minHeight: 48,
    borderRadius: 8,
    backgroundColor: '#094771',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  profilePrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  profileSecondaryButton: {
    width: '100%',
    minHeight: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#F4FAFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  profileSecondaryButtonText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  profileStatsCard: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#2C5F8A',
    padding: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  profileStatsEyebrow: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  profileStatsValue: {
    marginTop: 8,
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  profileStatsTrack: {
    width: '100%',
    height: 8,
    marginTop: 16,
    borderRadius: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
  profileStatsTrackFill: {
    width: '24%',
    height: '100%',
    borderRadius: 9999,
    backgroundColor: '#FEB234',
  },
  profileStatsCaption: {
    marginTop: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  profileStatsDivider: {
    width: '100%',
    height: 1,
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  profileStatsRow: {
    width: '100%',
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  profileStatsMetric: {
    flex: 1,
    alignItems: 'center',
  },
  profileStatsMetricValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    textAlign: 'center',
  },
  profileStatsMetricLabel: {
    marginTop: 4,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textAlign: 'center',
  },
  profileSettingsStack: {
    gap: 16,
  },
  profileMenuCard: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  profileMenuCardHeader: {
    minHeight: 49,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#E7F6FF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(194, 199, 207, 0.3)',
    justifyContent: 'center',
  },
  profileMenuCardHeaderText: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.65,
    textTransform: 'uppercase',
  },
  profileMenuCardBody: {
    width: '100%',
  },
  profileMenuRow: {
    minHeight: 88,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  profileMenuRowBorder: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(194, 199, 207, 0.3)',
  },
  profileMenuRowContent: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  profileMenuGlyphCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CFE5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileMenuTextWrap: {
    flex: 1,
    minWidth: 0,
    marginLeft: 16,
  },
  profileMenuTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  profileMenuDescription: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  profileSubscriptionCard: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(98, 64, 0, 0.1)',
    backgroundColor: '#FFDDB2',
    padding: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  profileSubscriptionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  profileSubscriptionTitleBlock: {
    flex: 1,
    minWidth: 0,
    paddingRight: 16,
  },
  profileSubscriptionPlanChip: {
    alignSelf: 'flex-start',
    minHeight: 15,
    borderRadius: 4,
    backgroundColor: '#624000',
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  profileSubscriptionPlanChipText: {
    color: '#FFDDB2',
    fontSize: 10,
    fontFamily: fonts.bold,
    lineHeight: 15,
    letterSpacing: 1,
  },
  profileSubscriptionTitle: {
    marginTop: 8,
    color: '#291800',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  profileSubscriptionText: {
    marginTop: 16,
    color: '#624000',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  profileSubscriptionButton: {
    width: '100%',
    minHeight: 48,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#624000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  profileSubscriptionButtonText: {
    color: '#FFDDB2',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  profileLogoutButton: {
    width: '100%',
    minHeight: 50,
    borderRadius: 12,
    backgroundColor: '#FFDAD6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  profileLogoutText: {
    color: '#93000A',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  bottomNavShell: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 98,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.06)',
    backgroundColor: '#EEF8FF',
    overflow: 'visible',
  },
  bottomNav: {
    height: 98,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 6,
    paddingTop: 12,
    paddingBottom: 10,
  },
  bottomNavItemSlot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomNavItem: {
    minWidth: 56,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 999,
  },
  bottomNavItemActive: {
    width: 64,
    height: 64,
    backgroundColor: '#094771',
    marginTop: -24,
    shadowColor: '#094771',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 8,
    paddingTop: 10,
    paddingBottom: 8,
  },
  bottomNavLabel: {
    marginTop: 4,
    color: '#42474E',
    fontSize: 10,
    fontFamily: fonts.regular,
    lineHeight: 15,
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
