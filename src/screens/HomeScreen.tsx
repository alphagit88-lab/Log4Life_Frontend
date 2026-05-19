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
import Svg, {Defs, LinearGradient, Path, Rect, Stop} from 'react-native-svg';
import ActiveSvg from '../images/active.svg';
import AddActionSvg from '../images/add.svg';
import AutoSvg from '../images/auto.svg';
import {useAuth} from '../context/AuthContext';
import ArrowSvg from '../images/arrow.svg';
import BackSvg from '../images/back.svg';
import BackgroundSvg from '../images/background.svg';
import BankTwoSvg from '../images/bank_2.svg';
import VaultBackgroundSvg from '../images/bg_2.svg';
import BellSvg from '../images/bell.svg';
import BrakeSvg from '../images/brake.svg';
import BirthdaySvg from '../images/birthday.svg';
import ButtonSvg from '../images/Button.svg';
import BucketSvg from '../images/bucket.svg';
import CarSvg from '../images/car.svg';
import CarThreeSvg from '../images/car_3.svg';
import CarTwoSvg from '../images/car_2.svg';
import ClinicalLabEquipmentSvg from '../images/Clinical Lab Equipment.svg';
import CardPatternSvg from '../images/card.svg';
import CardTwoSvg from '../images/card_2.svg';
import CardTwoPrimarySvg from '../images/card_2_primary.svg';
import CetificateSvg from '../images/cetificate.svg';
import CollectionSvg from '../images/collection.svg';
import ContentsSvg from '../images/contents.svg';
import CoverageSvg from '../images/coverage.svg';
import DateSvg from '../images/date.svg';
import DatesSvg from '../images/dates.svg';
import DefenceSvg from '../images/defence.svg';
import DocSvg from '../images/doc.svg';
import DotSvg from '../images/dot.svg';
import EditSvg from '../images/edit.svg';
import EditBackgroundSvg from '../images/edit_bg.svg';
import EncryptedSvg from '../images/encrypted.svg';
import EyeSvg from '../images/eye.svg';
import FitnessSvg from '../images/fitness.svg';
import FingerSvg from '../images/finger.svg';
import FadeSvg from '../images/fade.svg';
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
import ModernHomeExteriorSvg from '../images/Modern home exterior.svg';
import MotSvg from '../images/MOT.svg';
import MonthlySvg from '../images/monthly.svg';
import MoneySvg from '../images/money.svg';
import MaintainOneSvg from '../images/maintain_1.svg';
import NaturalSvg from '../images/natural.svg';
import NameSvg from '../images/name.svg';
import NetflixSvg from '../images/netflix.svg';
import NetflixOneSvg from '../images/netflix_1.svg';
import NotificationSvg from '../images/notification.svg';
import NotificationDefaultSvg from '../images/notification_def.svg';
import NotesSvg from '../images/notes.svg';
import OilSvg from '../images/oil.svg';
import PersonalSvg from '../images/personal.svg';
import PetsSvg from '../images/pets.svg';
import PigSvg from '../images/pig.svg';
import PhotoSvg from '../images/photo.svg';
import PlanSvg from '../images/plan.svg';
import PlannerSvg from '../images/planner.svg';
import PlannerPrimarySvg from '../images/planner_primary.svg';
import PlusSvg from '../images/plus.svg';
import ProfileSvg from '../images/profile.svg';
import ProfileCardSvg from '../images/profile_1.svg';
import ProfileCardPrimarySvg from '../images/profile_1_primary.svg';
import ProgressSvg from '../images/progress.svg';
import RecurrentSvg from '../images/recurrent.svg';
import RecurringSvg from '../images/recurring.svg';
import RecordsSvg from '../images/records.svg';
import RecordsNonSvg from '../images/records_non.svg';
import RecordsSelectedSvg from '../images/records_selected.svg';
import ReminderSvg from '../images/reminder.svg';
import RemindersSvg from '../images/reminders.svg';
import RenewSvg from '../images/renew.svg';
import RingBellSvg from '../images/ring_bell.svg';
import SavingSvg from '../images/saving.svg';
import SavingsSvg from '../images/savings.svg';
import SearchGraySvg from '../images/search_gray.svg';
import SearchSvg from '../images/search.svg';
import ShieldTwoSvg from '../images/shield_2.svg';
import ShieldSvg from '../images/shield.svg';
import SkyBroadbandSvg from '../images/sky_broadband.svg';
import SpeedSvg from '../images/speed.svg';
import SpotifySvg from '../images/spotify.svg';
import StatementSvg from '../images/statement.svg';
import StructureSvg from '../images/structure.svg';
import TapSvg from '../images/tap.svg';
import TireSvg from '../images/tire.svg';
import TrashSvg from '../images/trash.svg';
import TrashCompactSvg from '../images/trash_2.svg';
import TravelSvg from '../images/travel.svg';
import UpcomingSvg from '../images/upcoming.svg';
import UploadSvg from '../images/upload.svg';
import UploadDocumentSvg from '../images/upload_2.svg';
import PublicSvg from '../images/public.svg';
import PillSvg from '../images/pill.svg';
import VehicleHeroSvg from '../images/vahicle_1.svg';
import VehicleSvg from '../images/vehicle.svg';
import WarningSvg from '../images/warning.svg';
import WarningTwoSvg from '../images/warning_2.svg';
import WarningAlarmSvg from '../images/warning_alarm.svg';
import WalletSvg from '../images/wallert.svg';
import WifiSvg from '../images/wi-fi.svg';
import WrongSvg from '../images/wrong.svg';
import WatchSvg from '../images/watch.svg';
import BloodSvg from '../images/blood.svg';
import BloodTwoSvg from '../images/blood_2.svg';
import GymSvg from '../images/gym.svg';
import {fonts} from '../theme/fonts';

type BottomTabKey = 'home' | 'records' | 'reminders' | 'planner' | 'profile';
type RecordsView =
  | 'browser'
  | 'personal-identity'
  | 'personal-identity-add'
  | 'banking-cards'
  | 'banking-cards-add'
  | 'health-fitness'
  | 'health-fitness-add'
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

interface RecurringSubscriptionData {
  id: string;
  name: string;
  plan: string;
  amount: number;
  dueLabel: string;
  paymentMethod: string;
  serviceIcon: React.JSX.Element;
  paymentMethodIcon: React.JSX.Element;
}

interface RecurringInsightData {
  id: string;
  label: string;
  body: string;
  accentColor: string;
  labelColor: string;
  icon: React.JSX.Element;
}

interface InsuranceCoverageItemData {
  id: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
}

interface InsuranceAssociatedPolicyData {
  id: string;
  title: string;
  subtitle: string;
  status: 'ACTIVE' | 'ARCHIVED';
  icon: React.JSX.Element;
}

interface HealthCheckupData {
  id: string;
  month: string;
  day: string;
  title: string;
  subtitle: string;
}

interface VehicleRecentServiceData {
  id: string;
  title: string;
  location: string;
  date: string;
  price: string;
  icon: React.JSX.Element;
}

interface VehicleUpcomingMaintenanceData {
  id: string;
  title: string;
  description: string;
  footer?: string;
  icon: React.JSX.Element;
  accentColor: string;
  urgent?: boolean;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
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

function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`;
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

function RecurringSubscriptionCard({
  name,
  plan,
  amount,
  dueLabel,
  paymentMethod,
  serviceIcon,
  paymentMethodIcon,
  onPress,
}: RecurringSubscriptionData & {
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.recurringSubscriptionCard,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.recurringSubscriptionRow}>
        <View style={styles.recurringSubscriptionArtworkWrap}>
          {serviceIcon}
        </View>

        <View style={styles.recurringSubscriptionContent}>
          <View style={styles.recurringSubscriptionTopRow}>
            <View style={styles.recurringSubscriptionTextBlock}>
              <Text style={styles.recurringSubscriptionName}>{name}</Text>
              <Text style={styles.recurringSubscriptionPlan}>{plan}</Text>
            </View>

            <View style={styles.recurringSubscriptionPriceBlock}>
              <View style={styles.recurringSubscriptionPriceRow}>
                <Text style={styles.recurringSubscriptionPrice}>
                  {formatCurrency(amount)}
                </Text>
                <Text style={styles.recurringSubscriptionPriceSuffix}>/mo</Text>
              </View>
              <Text style={styles.recurringSubscriptionDueLabel}>
                {dueLabel}
              </Text>
            </View>
          </View>

          <View style={styles.recurringSubscriptionMetaRow}>
            <View style={styles.recurringSubscriptionMetaItem}>
              <View style={styles.recurringSubscriptionMetaIconWrap}>
                <RecurrentSvg width={12} height={12} />
              </View>
              <Text style={styles.recurringSubscriptionMetaText}>
                {'Monthly\nCycle'}
              </Text>
            </View>

            <View
              style={[
                styles.recurringSubscriptionMetaItem,
                styles.recurringSubscriptionMetaItemTrailing,
              ]}>
              <View style={styles.recurringSubscriptionMetaIconWrap}>
                {paymentMethodIcon}
              </View>
              <Text style={styles.recurringSubscriptionMetaText}>
                {paymentMethod}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function RecurringInsightCard({
  label,
  body,
  accentColor,
  labelColor,
  icon,
}: RecurringInsightData): React.JSX.Element {
  return (
    <View style={styles.recurringInsightCard}>
      <View
        style={[
          styles.recurringInsightAccent,
          {backgroundColor: accentColor},
        ]}
      />

      <View style={styles.recurringInsightContent}>
        <View style={styles.recurringInsightHeader}>
          <View style={styles.recurringInsightIconWrap}>{icon}</View>
          <Text style={[styles.recurringInsightLabel, {color: labelColor}]}>
            {label}
          </Text>
        </View>

        <Text style={styles.recurringInsightBody}>{body}</Text>
      </View>
    </View>
  );
}

function InsuranceCoverageItem({
  title,
  description,
  icon,
}: InsuranceCoverageItemData): React.JSX.Element {
  return (
    <View style={styles.insuranceCoverageItemRow}>
      {icon}

      <View style={styles.insuranceCoverageItemTextWrap}>
        <Text style={styles.insuranceCoverageItemTitle}>{title}</Text>
        <Text style={styles.insuranceCoverageItemDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}

function InsuranceAssociatedPolicyCard({
  title,
  subtitle,
  status,
  icon,
  onPress,
}: InsuranceAssociatedPolicyData & {
  onPress: () => void;
}): React.JSX.Element {
  const isArchived = status === 'ARCHIVED';

  return (
    <Pressable
      style={({pressed}) => [
        styles.insuranceAssociatedPolicyCard,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.insuranceAssociatedPolicyRow}>
        {icon}

        <View style={styles.insuranceAssociatedPolicyTextWrap}>
          <Text
            style={[
              styles.insuranceAssociatedPolicyTitle,
              isArchived ? styles.insuranceAssociatedPolicyTitleArchived : null,
            ]}>
            {title}
          </Text>
          <Text
            style={[
              styles.insuranceAssociatedPolicySubtitle,
              isArchived
                ? styles.insuranceAssociatedPolicySubtitleArchived
                : null,
            ]}>
            {subtitle}
          </Text>

          <View
            style={[
              styles.insuranceAssociatedStatusChip,
              isArchived ? styles.insuranceAssociatedStatusChipArchived : null,
            ]}>
            <Text
              style={[
                styles.insuranceAssociatedStatusText,
                isArchived
                  ? styles.insuranceAssociatedStatusTextArchived
                  : null,
              ]}>
              {status}
            </Text>
          </View>
        </View>

        <View style={styles.insuranceAssociatedArrowWrap}>
          <ArrowSvg width={8} height={12} />
        </View>
      </View>
    </Pressable>
  );
}

function VehicleRecentServiceRow({
  title,
  location,
  date,
  price,
  icon,
  onPress,
}: VehicleRecentServiceData & {
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.vehicleRecentServiceRow,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.vehicleRecentServiceLeft}>
        {icon}

        <View style={styles.vehicleRecentServiceTextWrap}>
          <Text style={styles.vehicleRecentServiceTitle}>{title}</Text>
          <Text style={styles.vehicleRecentServiceMeta}>
            {location} - {date}
          </Text>
        </View>
      </View>

      <Text style={styles.vehicleRecentServicePrice}>{price}</Text>
    </Pressable>
  );
}

function WhiteDocIcon(): React.JSX.Element {
  return (
    <Svg width={16} height={20} viewBox="0 0 16 20" fill="none">
      <Path
        d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9ZM2 2V7V2V7V18V2Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

function VehicleUpcomingMaintenanceCard({
  title,
  description,
  footer,
  icon,
  accentColor,
  urgent = false,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryPress,
  onSecondaryPress,
}: VehicleUpcomingMaintenanceData & {
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}): React.JSX.Element {
  return (
    <View
      style={[
        styles.vehicleUpcomingCard,
        urgent
          ? styles.vehicleUpcomingCardUrgent
          : styles.vehicleUpcomingCardStandard,
        {borderLeftColor: accentColor},
      ]}>
      <View style={styles.vehicleUpcomingTopRow}>
        <View style={styles.vehicleUpcomingIconWrap}>{icon}</View>

        <View style={styles.vehicleUpcomingTextWrap}>
          <Text style={styles.vehicleUpcomingTitle}>{title}</Text>
          <Text style={styles.vehicleUpcomingDescription}>{description}</Text>
          {footer ? (
            <Text
              style={[
                styles.vehicleUpcomingFooter,
                urgent ? styles.vehicleUpcomingFooterUrgent : null,
              ]}>
              {footer}
            </Text>
          ) : null}
        </View>
      </View>

      {urgent && primaryActionLabel && secondaryActionLabel ? (
        <View style={styles.vehicleUpcomingActionsRow}>
          <Pressable
            style={({pressed}) => [
              styles.vehicleUpcomingPrimaryButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={onPrimaryPress}>
            <Text style={styles.vehicleUpcomingPrimaryButtonText}>
              {primaryActionLabel}
            </Text>
          </Pressable>

          <Pressable
            style={({pressed}) => [
              styles.vehicleUpcomingSecondaryButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={onSecondaryPress}>
            <Text style={styles.vehicleUpcomingSecondaryButtonText}>
              {secondaryActionLabel}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

function HealthAnalysisGradient(): React.JSX.Element {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 358 358"
      preserveAspectRatio="none"
      style={styles.healthAnalysisGradient}>
      <Defs>
        <LinearGradient
          id="healthAnalysisFade"
          x1="179"
          y1="358"
          x2="179"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#094771" stopOpacity={0.9} />
          <Stop offset="1" stopColor="#094771" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Rect width="358" height="358" fill="url(#healthAnalysisFade)" />
    </Svg>
  );
}

function HealthProfileGlyph(): React.JSX.Element {
  return (
    <Svg width={25} height={25} viewBox="14 14 20 20" fill="none">
      <Path
        d="M16 34C15.45 34 14.9792 33.8042 14.5875 33.4125C14.1958 33.0208 14 32.55 14 32V20C14 19.45 14.1958 18.9792 14.5875 18.5875C14.9792 18.1958 15.45 18 16 18H20V16C20 15.45 20.1958 14.9792 20.5875 14.5875C20.9792 14.1958 21.45 14 22 14H26C26.55 14 27.0208 14.1958 27.4125 14.5875C27.8042 14.9792 28 15.45 28 16V18H32C32.55 18 33.0208 18.1958 33.4125 18.5875C33.8042 18.9792 34 19.45 34 20V32C34 32.55 33.8042 33.0208 33.4125 33.4125C33.0208 33.8042 32.55 34 32 34H16ZM16 32H32V20H16V32ZM22 18H26V16H22V18ZM16 32V20V32ZM23 27V30H25V27H28V25H25V22H23V25H20V27H23Z"
        fill="#094771"
      />
    </Svg>
  );
}

function HealthCheckupRow({
  month,
  day,
  title,
  subtitle,
  showDivider = false,
  onPress,
}: HealthCheckupData & {
  showDivider?: boolean;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.healthCheckupRow,
        showDivider ? styles.healthCheckupRowWithDivider : null,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.healthCheckupDateBadge}>
        <Text style={styles.healthCheckupMonth}>{month}</Text>
        <Text style={styles.healthCheckupDay}>{day}</Text>
      </View>

      <View style={styles.healthCheckupTextWrap}>
        <Text style={styles.healthCheckupTitle}>{title}</Text>
        <Text style={styles.healthCheckupSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.healthCheckupArrowWrap}>
        <ArrowSvg width={8} height={12} />
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
  const [recurringDraftAmount, setRecurringDraftAmount] = useState('$15.99');
  const [recurringDraftPaymentMethod, setRecurringDraftPaymentMethod] =
    useState('Visa (•••• 4242)');
  const [
    isRecurringPaymentMethodDropdownOpen,
    setIsRecurringPaymentMethodDropdownOpen,
  ] = useState(false);
  const [recurringDraftFrequency, setRecurringDraftFrequency] =
    useState('Monthly');
  const [isRecurringFrequencyDropdownOpen, setIsRecurringFrequencyDropdownOpen] =
    useState(false);
  const [recurringDraftNextDueDate, setRecurringDraftNextDueDate] =
    useState('11/28/2023');
  const [recurringDraftNotes, setRecurringDraftNotes] = useState(
    'Premium Ultra HD Plan. Includes 4 screens.',
  );
  const [recurringDraftSmartReminder, setRecurringDraftSmartReminder] =
    useState(true);
  const [insuranceDraftPolicyName, setInsuranceDraftPolicyName] = useState(
    'Home & Contents',
  );
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
  const [healthDraftWeeklyGoalText, setHealthDraftWeeklyGoalText] = useState(
    '150 mins cardio',
  );
  const [healthDraftRemindersEnabled, setHealthDraftRemindersEnabled] =
    useState(true);
  const [healthDraftNotes, setHealthDraftNotes] = useState(
    'Last physical exam was clear. Follow-up scheduled for October for blood work. Keep tracking sodium intake.',
  );
  const [hasUploadedHealthReport, setHasUploadedHealthReport] = useState(true);

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
  const isHealthFitnessView = isRecordsTab && recordsView === 'health-fitness';
  const isHealthFitnessAddView =
    isRecordsTab && recordsView === 'health-fitness-add';
  const isRecordsDetailView = isRecordsTab && recordsView !== 'browser';
  const recordsDetailTitle = isRecurringPaymentsAddView
    ? 'Recurring Payments'
    : isVehicleMaintenanceAddView
    ? 'Vehicle Maintenance'
    : isInsurancePoliciesAddView
    ? 'Insurance Policies'
    : isHealthFitnessAddView
    ? 'Health & Fitness'
    : isVehicleMaintenanceView
    ? 'Vehicle Maintenance'
    : isRecurringPaymentsView
    ? 'Recurring\nPayments'
    : isInsurancePoliciesView
    ? 'Insurance\nPolicies'
    : isHealthFitnessView
    ? 'Health & Fitness'
    : isBankingCardsView || isBankingCardsAddView
    ? 'Banking & Cards'
    : 'Personal Details';
  const shouldShowRecordsAddButton =
    isPersonalIdentityView ||
    isBankingCardsView ||
    isRecurringPaymentsView ||
    isVehicleMaintenanceView ||
    isInsurancePoliciesView ||
    isHealthFitnessView;
  const bankingDraftDisplayName = getBankDisplayName(bankingDraftBankName);
  const bankingDraftLastFourDisplay = bankingDraftLast4Digits || '4821';
  const bankingDraftCardLabel = `${
    bankingDraftAccountType.trim() || 'Current'
  } Account`.toUpperCase();
  const bankingAccountTypeOptions = ['Current', 'Savings', 'Business', 'Joint'];
  const recurringPaymentMethodOptions = [
    'Visa (•••• 4242)',
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

  const recurringSubscriptions: RecurringSubscriptionData[] = [
    {
      id: 'netflix',
      name: 'Netflix',
      plan: 'Premium UHD Plan',
      amount: 15.99,
      dueLabel: 'Due Oct 14',
      paymentMethod: 'Visa ••••\n4242',
      serviceIcon: <NetflixSvg width={56} height={56} />,
      paymentMethodIcon: <CardTwoSvg width={15} height={12} />,
    },
    {
      id: 'spotify',
      name: 'Spotify',
      plan: 'Family Premium',
      amount: 9.99,
      dueLabel: 'Due Oct 18',
      paymentMethod: 'Direct\nDebit',
      serviceIcon: <SpotifySvg width={56} height={56} />,
      paymentMethodIcon: <BankTwoSvg width={15} height={15} />,
    },
    {
      id: 'sky-broadband',
      name: 'Sky Broadband',
      plan: 'Superfast Fibre',
      amount: 42,
      dueLabel: 'Due Nov 01',
      paymentMethod: 'Home\nServices',
      serviceIcon: <SkyBroadbandSvg width={56} height={56} />,
      paymentMethodIcon: <WifiSvg width={14} height={15} />,
    },
  ];

  const recurringInsights: RecurringInsightData[] = [
    {
      id: 'upcoming-peak',
      label: 'UPCOMING PEAK',
      body:
        'Your highest concentration of payments occurs between the 14th and 18th of each month. Ensure your primary account is funded.',
      accentColor: '#FEB234',
      labelColor: '#815500',
      icon: <UpcomingSvg width={20} height={12} />,
    },
    {
      id: 'saving-opportunity',
      label: 'SAVING OPPORTUNITY',
      body:
        'Switching your Sky Broadband to an annual billing cycle could save you $65.00 per year. Recommended action: View annual plans.',
      accentColor: '#094771',
      labelColor: '#094771',
      icon: <SavingSvg width={15} height={20} />,
    },
  ];

  const insuranceCoverageItems: InsuranceCoverageItemData[] = [
    {
      id: 'structural-coverage',
      title: 'Structural Coverage',
      description: 'Up to $750,000 for rebuild costs.',
      icon: <StructureSvg width={35} height={31} />,
    },
    {
      id: 'contents-protection',
      title: 'Contents Protection',
      description: 'Up to $150,000 global replacement.',
      icon: <ContentsSvg width={33} height={33} />,
    },
    {
      id: 'natural-disasters',
      title: 'Natural Disasters',
      description: 'Includes flood and seismic activity.',
      icon: <NaturalSvg width={33} height={33} />,
    },
    {
      id: 'public-liability',
      title: 'Public Liability',
      description: 'Personal liability up to $2,000,000.',
      icon: <PublicSvg width={30} height={33} />,
    },
  ];

  const insuranceAssociatedPolicies: InsuranceAssociatedPolicyData[] = [
    {
      id: 'auto-geico',
      title: 'Auto Insurance - Geico',
      subtitle: 'Policy: G-88219 - Model: Tesla Model 3',
      status: 'ACTIVE',
      icon: <AutoSvg width={48} height={48} />,
    },
    {
      id: 'health-bluecross',
      title: 'Health Premium - BlueCross',
      subtitle: 'Policy: BC-PLAT-001 - Family Plan',
      status: 'ACTIVE',
      icon: <HealthSvg width={48} height={48} />,
    },
    {
      id: 'travel-allianz',
      title: 'Travel - Allianz',
      subtitle: 'Policy: TRV-8941 - Single Trip',
      status: 'ARCHIVED',
      icon: <TravelSvg width={48} height={48} />,
    },
  ];

  const healthCheckups: HealthCheckupData[] = [
    {
      id: 'annual-physical',
      month: 'OCT',
      day: '12',
      title: 'Annual Physical',
      subtitle: 'Central Hospital • Dr. H.\nPatel',
    },
    {
      id: 'dental-cleaning',
      month: 'AUG',
      day: '24',
      title: 'Dental Cleaning',
      subtitle: 'Smile Care Studio • Dr.\nAris',
    },
    {
      id: 'cardiology-review',
      month: 'JUN',
      day: '05',
      title: 'Cardiology Review',
      subtitle: 'Heart Institute •\nSpecialist Wing',
    },
  ];

  const healthWeeklyGoalPercent = 70;
  const healthDraftWeeklyGoalProgress = Math.max(
    0,
    Math.min(100, parseInt(healthDraftWeeklyGoalPercent, 10) || 0),
  );

  const vehicleRecentServices: VehicleRecentServiceData[] = [
    {
      id: 'full-annual-service',
      title: 'Full Annual Service',
      location: 'Toyota Official Center',
      date: '15 Jan 2024',
      price: '$285.00',
      icon: <MaintainOneSvg width={40} height={40} />,
    },
    {
      id: 'tire-rotation',
      title: 'Tire Rotation & Pressure',
      location: 'QuickFit Center',
      date: '12 Nov 2023',
      price: '$45.00',
      icon: <TireSvg width={40} height={40} />,
    },
    {
      id: 'oil-filter-change',
      title: 'Oil Filter Change',
      location: 'Toyota Official Center',
      date: '08 Jul 2023',
      price: '$120.00',
      icon: <OilSvg width={40} height={40} />,
    },
  ];

  const vehicleUpcomingMaintenance: VehicleUpcomingMaintenanceData[] = [
    {
      id: 'mot-renewal',
      title: 'MOT Renewal',
      description:
        'Critical deadline approaching in 30 days. Failure to renew results in illegal vehicle operation.',
      icon: <MotSvg width={18} height={20} />,
      accentColor: '#BA1A1A',
      urgent: true,
      primaryActionLabel: 'Schedule\nAppointment',
      secondaryActionLabel: 'Remind Me\nLater',
    },
    {
      id: 'brake-fluid-flush',
      title: 'Brake Fluid Flush',
      description: 'Recommended every 24 months. Last performed Oct 2022.',
      footer: 'Suggested: Oct 2024',
      icon: <BrakeSvg width={19} height={21} />,
      accentColor: '#815500',
    },
  ];

  const recurringMonthlyCommitment = recurringSubscriptions.reduce(
    (total, subscription) => total + subscription.amount,
    0,
  );
  const recurringAnnualCost = recurringMonthlyCommitment * 12;
  const recurringBudgetUsagePercent = 68;
  const recurringNextPayment =
    recurringSubscriptions[0]?.dueLabel.replace('Due ', '') || 'Oct 14';
  const recurringActiveServicesLabel = `${recurringSubscriptions.length} ${
    recurringSubscriptions.length === 1 ? 'Subscription' : 'Subscriptions'
  }`;

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

  const resetRecurringDraft = () => {
    setRecurringDraftAmount('$15.99');
    setRecurringDraftPaymentMethod('Visa (•••• 4242)');
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
    Alert.alert(
      'Delete This Entry',
      'Remove this recurring payment draft?',
      [
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
      ],
    );
  };

  const handleToggleInsuranceRenewalReminder = () => {
    setInsuranceDraftRenewalReminder(currentValue => !currentValue);
  };

  const handleDeleteInsuranceEntry = () => {
    Alert.alert(
      'Delete Policy Entry',
      'Remove this insurance policy draft?',
      [
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
      ],
    );
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

  const recurringPaymentsAddContent = (
    <>
      <View style={styles.recurringAddServiceCard}>
        <View style={styles.recurringAddServiceArtworkWrap}>
          <NetflixOneSvg width={63} height={80} />
        </View>

        <View style={styles.recurringAddServiceContent}>
          <Text style={styles.recurringAddServiceLabel}>Service Name</Text>
          <Text style={styles.recurringAddServiceName}>Netflix</Text>
        </View>
      </View>

      <View style={styles.recurringAddSectionCard}>
        <View style={styles.recurringAddSectionHeader}>
          <MoneySvg width={22} height={16} />
          <Text style={styles.recurringAddSectionTitle}>Financials</Text>
        </View>

        <View style={styles.recurringAddFieldsGroup}>
          <View style={styles.recurringAddField}>
            <Text style={styles.recurringAddFieldLabel}>Amount</Text>
            <View style={styles.recurringAddInputShell}>
              <TextInput
                style={styles.recurringAddInput}
                value={recurringDraftAmount}
                onChangeText={handleRecurringAmountChange}
                onFocus={closeRecurringDropdowns}
                placeholder="$15.99"
                placeholderTextColor="#98A2B3"
                keyboardType="decimal-pad"
                autoCapitalize="none"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>

          <View style={styles.recurringAddField}>
            <Text style={styles.recurringAddFieldLabel}>Payment Method</Text>
            <Pressable
              style={({pressed}) => [
                styles.recurringAddSelectShell,
                pressed ? styles.pressed : null,
              ]}
              onPress={handleToggleRecurringPaymentMethod}>
              <View style={styles.recurringAddSelectValueRow}>
                <CardTwoPrimarySvg width={15} height={12} />
                <Text
                  style={[
                    styles.recurringAddSelectValue,
                    styles.recurringAddSelectValueWithIcon,
                  ]}>
                  {recurringDraftPaymentMethod}
                </Text>
              </View>

              <View
                style={[
                  styles.recurringAddSelectIcon,
                  isRecurringPaymentMethodDropdownOpen
                    ? styles.recurringAddSelectIconOpen
                    : null,
                ]}>
                <ArrowSvg width={8} height={12} />
              </View>
            </Pressable>

            {isRecurringPaymentMethodDropdownOpen ? (
              <View style={styles.recurringAddSelectDropdown}>
                {recurringPaymentMethodOptions.map(option => (
                  <Pressable
                    key={option}
                    style={({pressed}) => [
                      styles.recurringAddSelectOption,
                      recurringDraftPaymentMethod === option
                        ? styles.recurringAddSelectOptionActive
                        : null,
                      pressed ? styles.pressed : null,
                    ]}
                    onPress={() => handleSelectRecurringPaymentMethod(option)}>
                    <Text
                      style={[
                        styles.recurringAddSelectOptionText,
                        recurringDraftPaymentMethod === option
                          ? styles.recurringAddSelectOptionTextActive
                          : null,
                      ]}>
                      {option}
                    </Text>
                  </Pressable>
                ))}
              </View>
            ) : null}
          </View>
        </View>
      </View>

      <View style={styles.recurringAddSectionCard}>
        <View style={styles.recurringAddSectionHeader}>
          <PlannerPrimarySvg width={18} height={20} />
          <Text style={styles.recurringAddSectionTitle}>Schedule</Text>
        </View>

        <View style={styles.recurringAddFieldsGroup}>
          <View style={styles.recurringAddField}>
            <Text style={styles.recurringAddFieldLabel}>Frequency</Text>
            <Pressable
              style={({pressed}) => [
                styles.recurringAddSelectShell,
                pressed ? styles.pressed : null,
              ]}
              onPress={handleToggleRecurringFrequency}>
              <Text style={styles.recurringAddSelectValue}>
                {recurringDraftFrequency}
              </Text>

              <View
                style={[
                  styles.recurringAddSelectIcon,
                  isRecurringFrequencyDropdownOpen
                    ? styles.recurringAddSelectIconOpen
                    : null,
                ]}>
                <ArrowSvg width={8} height={12} />
              </View>
            </Pressable>

            {isRecurringFrequencyDropdownOpen ? (
              <View style={styles.recurringAddSelectDropdown}>
                {recurringFrequencyOptions.map(option => (
                  <Pressable
                    key={option}
                    style={({pressed}) => [
                      styles.recurringAddSelectOption,
                      recurringDraftFrequency === option
                        ? styles.recurringAddSelectOptionActive
                        : null,
                      pressed ? styles.pressed : null,
                    ]}
                    onPress={() => handleSelectRecurringFrequency(option)}>
                    <Text
                      style={[
                        styles.recurringAddSelectOptionText,
                        recurringDraftFrequency === option
                          ? styles.recurringAddSelectOptionTextActive
                          : null,
                      ]}>
                      {option}
                    </Text>
                  </Pressable>
                ))}
              </View>
            ) : null}
          </View>

          <View style={styles.recurringAddField}>
            <Text style={styles.recurringAddFieldLabel}>Next Due Date</Text>
            <View style={styles.recurringAddInputShell}>
              <TextInput
                style={styles.recurringAddInput}
                value={recurringDraftNextDueDate}
                onChangeText={handleRecurringNextDueDateChange}
                onFocus={closeRecurringDropdowns}
                placeholder="11/28/2023"
                placeholderTextColor="#98A2B3"
                autoCapitalize="none"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.recurringAddSectionCard}>
        <Pressable
          style={({pressed}) => [
            styles.recurringAddReminderRow,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleToggleRecurringSmartReminder}>
          <View style={styles.recurringAddReminderTextRow}>
            <RingBellSvg width={20} height={21} />
            <View style={styles.recurringAddReminderTextBlock}>
              <Text style={styles.recurringAddReminderTitle}>
                Smart Reminder
              </Text>
              <Text style={styles.recurringAddReminderSubtitle}>
                Get notified 2 days before due date
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.recurringAddReminderToggle,
              recurringDraftSmartReminder
                ? styles.recurringAddReminderToggleActive
                : null,
            ]}>
            <View style={styles.recurringAddReminderToggleThumb} />
          </View>
        </Pressable>

        <View style={styles.recurringAddNotesBlock}>
          <Text style={styles.recurringAddFieldLabel}>Notes</Text>
          <View style={styles.recurringAddNotesInputShell}>
            <TextInput
              style={styles.recurringAddNotesInput}
              value={recurringDraftNotes}
              onChangeText={handleRecurringNotesChange}
              onFocus={closeRecurringDropdowns}
              placeholder="Add notes for this recurring payment..."
              placeholderTextColor="#98A2B3"
              multiline
              textAlignVertical="top"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.personalDeleteEntryButton,
          styles.recurringAddDeleteButton,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleDeleteRecurringEntry}>
        <TrashCompactSvg width={16} height={18} />
        <Text style={styles.personalDeleteEntryButtonText}>
          Delete This Entry
        </Text>
      </Pressable>
    </>
  );

  const recurringPaymentsContent = (
    <>
      <View style={styles.recurringHeroCard}>
        <View style={styles.recurringHeroPatternWrap}>
          <CardPatternSvg width={95} height={90} />
        </View>

        <Text style={styles.recurringHeroLabel}>Total Monthly Commitment</Text>
        <Text style={styles.recurringHeroAmount}>
          {formatCurrency(recurringMonthlyCommitment)}
        </Text>

        <View style={styles.recurringHeroInfoRow}>
          <View style={styles.recurringHeroInfoChip}>
            <Text style={styles.recurringHeroInfoLabel}>Next Payment</Text>
            <Text style={styles.recurringHeroInfoValue}>
              {recurringNextPayment}
            </Text>
          </View>

          <View style={styles.recurringHeroInfoChip}>
            <Text style={styles.recurringHeroInfoLabel}>Active Services</Text>
            <Text style={styles.recurringHeroInfoValue}>
              {recurringActiveServicesLabel}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.recurringAnnualCard}>
        <Text style={styles.recurringAnnualLabel}>Projected Annual Cost</Text>
        <Text style={styles.recurringAnnualValue}>
          {formatCurrency(recurringAnnualCost)}
        </Text>

        <View style={styles.recurringAnnualTrack}>
          <View
            style={[
              styles.recurringAnnualFill,
              {width: `${recurringBudgetUsagePercent}%`},
            ]}
          />
        </View>

        <Text style={styles.recurringAnnualHint}>
          {recurringBudgetUsagePercent}% of lifestyle budget
        </Text>
      </View>

      <Text style={styles.recurringSectionTitle}>Active Subscriptions</Text>

      <View style={styles.recurringSubscriptionsList}>
        {recurringSubscriptions.map(subscription => (
          <RecurringSubscriptionCard
            key={subscription.id}
            {...subscription}
            onPress={() => openPlaceholder(subscription.name)}
          />
        ))}
      </View>

      <Text style={styles.recurringSectionTitle}>Insights</Text>

      <View style={styles.recurringInsightsList}>
        {recurringInsights.map(insight => (
          <RecurringInsightCard key={insight.id} {...insight} />
        ))}
      </View>
    </>
  );

  const vehicleMaintenanceContent = (
    <>
      <View style={styles.vehicleHeroCard}>
        <View style={styles.vehicleHeroImageWrap}>
          <VehicleHeroSvg
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </View>

        <View style={styles.vehicleHeroBody}>
          <View style={styles.vehicleHeroHeaderRow}>
            <View>
              <Text style={styles.vehicleHeroEyebrow}>PRIMARY RECORD</Text>
            </View>

            <View style={styles.vehicleHeroStatusChip}>
              <Text style={styles.vehicleHeroStatusText}>Active</Text>
            </View>
          </View>

          <Text style={styles.vehicleHeroTitle}>{'Family SUV -\nToyota RAV4'}</Text>

          <View style={styles.vehicleHeroMetaRow}>
            <View style={styles.vehicleHeroMetaColumn}>
              <Text style={styles.vehicleHeroMetaLabel}>Registration</Text>
              <Text style={styles.vehicleHeroMetaValue}>LX71 ABC</Text>
            </View>

            <View style={styles.vehicleHeroMetaColumn}>
              <Text style={styles.vehicleHeroMetaLabel}>Last Service</Text>
              <Text style={styles.vehicleHeroMetaValue}>15 Jan 2024</Text>
            </View>
          </View>

          <View style={styles.vehicleMotUrgentCard}>
            <View style={styles.vehicleMotUrgentLeft}>
              <WarningTwoSvg width={22} height={19} />

              <View style={styles.vehicleMotUrgentTextWrap}>
                <Text style={styles.vehicleMotUrgentTitle}>MOT URGENT</Text>
                <Text style={styles.vehicleMotUrgentValue}>Due: 22 Aug 2025</Text>
              </View>
            </View>

            <Pressable
              style={({pressed}) => [
                styles.vehicleMotUrgentButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => openPlaceholder('Book MOT')}>
              <Text style={styles.vehicleMotUrgentButtonText}>Book Now</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.vehicleEfficiencyCard}>
        <Text style={styles.vehicleEfficiencyLabel}>FUEL EFFICIENCY</Text>

        <View style={styles.vehicleEfficiencyValueRow}>
          <Text style={styles.vehicleEfficiencyValue}>42.5</Text>
          <Text style={styles.vehicleEfficiencyUnit}>MPG</Text>
        </View>

        <View style={styles.vehicleEfficiencyTrack}>
          <View style={styles.vehicleEfficiencyFill} />
        </View>

        <Text style={styles.vehicleEfficiencyTrend}>+2.1% from last month</Text>
      </View>

      <View style={styles.vehicleOdometerCard}>
        <View>
          <Text style={styles.vehicleOdometerLabel}>ODOMETER</Text>
          <Text style={styles.vehicleOdometerValue}>
            12,482<Text style={styles.vehicleOdometerUnit}>mi</Text>
          </Text>
        </View>

        <View style={styles.vehicleOdometerIconWrap}>
          <SpeedSvg width={27} height={22} />
        </View>
      </View>

      <View style={styles.vehicleSectionHeaderRow}>
        <Text style={styles.vehicleSectionTitle}>Recent Services</Text>
        <Pressable onPress={() => openPlaceholder('All Recent Services')}>
          <Text style={styles.vehicleSectionLink}>View All</Text>
        </Pressable>
      </View>

      <View style={styles.vehicleRecentServicesCard}>
        {vehicleRecentServices.map((service, index) => (
          <React.Fragment key={service.id}>
            <VehicleRecentServiceRow
              {...service}
              onPress={() => openPlaceholder(service.title)}
            />
            {index < vehicleRecentServices.length - 1 ? (
              <View style={styles.vehicleRecentServiceDivider} />
            ) : null}
          </React.Fragment>
        ))}
      </View>

      <View style={styles.vehicleSectionHeaderRow}>
        <Text style={styles.vehicleSectionTitle}>Upcoming Maintenance</Text>
        <Pressable onPress={() => openPlaceholder('Manage Maintenance')}>
          <Text style={styles.vehicleSectionLink}>Manage</Text>
        </Pressable>
      </View>

      <View style={styles.vehicleUpcomingList}>
        {vehicleUpcomingMaintenance.map(item => (
          <VehicleUpcomingMaintenanceCard
            key={item.id}
            {...item}
            onPrimaryPress={() => openPlaceholder('Schedule Appointment')}
            onSecondaryPress={() => openPlaceholder('Remind Me Later')}
          />
        ))}
      </View>

      <View style={styles.vehicleGloveboxCard}>
        <Text style={styles.vehicleGloveboxTitle}>Digital Glovebox</Text>
        <Text style={styles.vehicleGloveboxBody}>
          All your insurance policies, breakdown cover details, and warranty
          documents stored securely in one place.
        </Text>

        <View style={styles.vehicleGloveboxActionsRow}>
          <Pressable
            style={({pressed}) => [
              styles.vehicleGloveboxSecondaryButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('View Docs')}>
            <WhiteDocIcon />
            <Text style={styles.vehicleGloveboxSecondaryButtonText}>
              {'View\nDocs'}
            </Text>
          </Pressable>

          <Pressable
            style={({pressed}) => [
              styles.vehicleGloveboxPrimaryButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Add Files')}>
            <AddActionSvg width={16} height={16} />
            <Text style={styles.vehicleGloveboxPrimaryButtonText}>
              {'Add\nFiles'}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );

  const vehicleMaintenanceAddContent = (
    <>
      <View style={styles.vehicleAddHeroCard}>
        <View style={styles.vehicleAddHeroImageWrap}>
          <CarTwoSvg
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </View>

        <View style={styles.vehicleAddHeroBadge}>
          <Text style={styles.vehicleAddHeroBadgeText}>ACTIVE ASSET</Text>
        </View>

        <Text style={styles.vehicleAddHeroTitle}>
          {vehicleDraftName || 'Family SUV'}
        </Text>

        <View style={styles.vehicleAddHeroMetaRow}>
          <CarThreeSvg width={14} height={14} />
          <Text style={styles.vehicleAddHeroMetaText}>
            {(vehicleDraftMakeModel || 'Toyota RAV4').trim()}
            {' \u2022 '}
            {(vehicleDraftRegistration || 'LX71 ABC').trim()}
          </Text>
        </View>
      </View>

      <View style={styles.vehicleAddFieldCard}>
        <Text style={styles.vehicleAddFieldLabel}>Vehicle Name</Text>
        <View style={styles.vehicleAddInputShell}>
          <TextInput
            style={styles.vehicleAddInput}
            value={vehicleDraftName}
            onChangeText={setVehicleDraftName}
            placeholder="Family SUV"
            placeholderTextColor="#8A94A6"
            autoCapitalize="words"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <View style={styles.vehicleAddFieldCard}>
        <Text style={styles.vehicleAddFieldLabel}>Make / Model</Text>
        <View style={styles.vehicleAddInputShell}>
          <TextInput
            style={styles.vehicleAddInput}
            value={vehicleDraftMakeModel}
            onChangeText={setVehicleDraftMakeModel}
            placeholder="Toyota RAV4"
            placeholderTextColor="#8A94A6"
            autoCapitalize="words"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <View style={styles.vehicleAddFieldCard}>
        <Text style={styles.vehicleAddFieldLabel}>Registration</Text>
        <View style={styles.vehicleAddInputShell}>
          <TextInput
            style={styles.vehicleAddInput}
            value={vehicleDraftRegistration}
            onChangeText={setVehicleDraftRegistration}
            placeholder="LX71 ABC"
            placeholderTextColor="#8A94A6"
            autoCapitalize="characters"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <View style={styles.vehicleAddCard}>
        <Text style={styles.vehicleAddSectionTitle}>Maintenance Deadlines</Text>
        <View style={styles.vehicleAddSectionDivider} />

        <View style={styles.vehicleAddField}>
          <Text style={styles.vehicleAddFieldLabel}>Last Service Date</Text>
          <View style={styles.vehicleAddInputShell}>
            <TextInput
              style={styles.vehicleAddInput}
              value={vehicleDraftLastServiceDate}
              onChangeText={setVehicleDraftLastServiceDate}
              placeholder="03/15/2024"
              placeholderTextColor="#8A94A6"
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <View style={styles.vehicleAddFieldLast}>
          <Text style={styles.vehicleAddFieldLabel}>MOT Due Date</Text>
          <View style={styles.vehicleAddInputShell}>
            <TextInput
              style={[styles.vehicleAddInput, styles.vehicleAddInputAlert]}
              value={vehicleDraftMotDueDate}
              onChangeText={setVehicleDraftMotDueDate}
              placeholder="08/22/2025"
              placeholderTextColor="#D92D20"
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <View style={styles.vehicleAddComplianceBlock}>
          <View style={styles.vehicleAddComplianceTrack}>
            <View style={styles.vehicleAddComplianceFill} />
          </View>
          <Text style={styles.vehicleAddComplianceHint}>
            75% through current service interval. 143 days remaining.
          </Text>
        </View>
      </View>

      <View style={styles.vehicleAddCard}>
        <Text style={styles.vehicleAddUploadSectionTitle}>
          Document Upload (Logbook/V5C)
        </Text>

        <Pressable
          style={({pressed}) => [
            styles.vehicleAddUploadArea,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleBrowseVehicleDocument}>
          <UploadDocumentSvg width={30} height={36} />
          <Text style={styles.vehicleAddUploadTitle}>
            {'Click to upload or drag\nand drop'}
          </Text>
          <Text style={styles.vehicleAddUploadSubtitle}>
            PDF, JPG, or PNG up to 10MB
          </Text>
        </Pressable>

        {hasUploadedVehicleDocument ? (
          <View style={styles.vehicleAddUploadFileCard}>
            <View style={styles.vehicleAddUploadFileInfo}>
              <DocSvg width={16} height={20} />
              <View style={styles.vehicleAddUploadFileTextWrap}>
                <Text style={styles.vehicleAddUploadFileName}>
                  v5c_logbook_final.pdf
                </Text>
                <Text style={styles.vehicleAddUploadFileMeta}>
                  2.4 MB • Uploaded 12 May 2024
                </Text>
              </View>
            </View>

            <Pressable
              style={({pressed}) => [
                styles.vehicleAddUploadFileDeleteButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={handleDeleteVehicleDocument}>
              <TrashSvg width={16} height={18} />
            </Pressable>
          </View>
        ) : null}
      </View>

      <View style={styles.vehicleAddCard}>
        <Text style={styles.vehicleAddFieldLabel}>Maintenance Notes</Text>
        <View style={styles.vehicleAddNotesShell}>
          <TextInput
            style={styles.vehicleAddNotesInput}
            value={vehicleDraftNotes}
            onChangeText={setVehicleDraftNotes}
            placeholder="Add maintenance history or service notes here..."
            placeholderTextColor="#8A94A6"
            multiline
            textAlignVertical="top"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.vehicleAddDeleteButton,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleDeleteVehicleEntry}>
        <TrashCompactSvg width={14} height={16} />
        <Text style={styles.vehicleAddDeleteButtonText}>
          Delete Vehicle Record
        </Text>
      </Pressable>
    </>
  );

  const insurancePoliciesContent = (
    <>
      <View style={styles.insurancePolicyCard}>
        <View style={styles.insuranceHeroImageWrap}>
          <ModernHomeExteriorSvg
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />

          <View style={styles.insuranceActiveChip}>
            <Text style={styles.insuranceActiveChipText}>ACTIVE</Text>
          </View>
        </View>

        <View style={styles.insurancePolicyBody}>
          <View style={styles.insurancePolicyTitleRow}>
            <Text style={styles.insurancePolicyTitle}>
              {'Home &\nContents - AXA'}
            </Text>

            <Pressable
              style={({pressed}) => [
                styles.insuranceRenewChip,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => openPlaceholder('Renew Home Policy')}>
              <RenewSvg width={14} height={15} />
              <Text style={styles.insuranceRenewChipText}>
                {'Renew\nSoon'}
              </Text>
            </Pressable>
          </View>

          <View style={styles.insurancePolicyNumberRow}>
            <ShieldSvg width={11} height={14} />
            <Text style={styles.insurancePolicyNumber}>
              Policy #: HE-28491
            </Text>
          </View>

          <View style={styles.insurancePolicyMetaRow}>
            <View style={styles.insurancePolicyMetaCard}>
              <Text style={styles.insurancePolicyMetaLabel}>Renewal Date</Text>
              <Text style={styles.insurancePolicyMetaValue}>14 Mar 2026</Text>
            </View>

            <View style={styles.insurancePolicyMetaCard}>
              <Text style={styles.insurancePolicyMetaLabel}>Annual Premium</Text>
              <Text style={styles.insurancePolicyMetaValue}>$1,240.00</Text>
            </View>
          </View>

          <View style={styles.insurancePolicyActionsRow}>
            <Pressable
              style={({pressed}) => [
                styles.insurancePrimaryActionButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => openPlaceholder('Download Certificate')}>
              <Text style={styles.insurancePrimaryActionText}>
                Download Certificate
              </Text>
            </Pressable>

            <Pressable
              style={({pressed}) => [
                styles.insuranceSecondaryActionButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => openPlaceholder('Manage Insurance Policy')}>
              <Text style={styles.insuranceSecondaryActionText}>Manage</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.insuranceCoverageCard}>
        <View style={styles.insuranceSectionHeaderRow}>
          <CoverageSvg width={20} height={18} />
          <Text style={styles.insuranceSectionTitle}>Coverage Highlights</Text>
        </View>

        <View style={styles.insuranceCoverageList}>
          {insuranceCoverageItems.map(item => (
            <InsuranceCoverageItem key={item.id} {...item} />
          ))}
        </View>
      </View>

      <View style={styles.insuranceAssociatedHeaderRow}>
        <Text style={styles.insuranceAssociatedTitle}>Associated Policies</Text>
        <Text style={styles.insuranceAssociatedCount}>3 Total Records</Text>
      </View>

      <View style={styles.insuranceAssociatedList}>
        {insuranceAssociatedPolicies.map(policy => (
          <InsuranceAssociatedPolicyCard
            key={policy.id}
            {...policy}
            onPress={() => openPlaceholder(policy.title)}
          />
        ))}
      </View>
    </>
  );

  const healthFitnessContent = (
    <>
      <Pressable
        style={({pressed}) => [
          styles.healthPrimaryCard,
          pressed ? styles.pressed : null,
        ]}
        onPress={() => openPlaceholder('Primary Care')}>
        <FadeSvg
          width={148}
          height={148}
          style={styles.healthPrimaryBackgroundMark}
        />

        <View style={styles.healthPrimaryCardContent}>
          <ShieldTwoSvg width={96} height={96} />

          <View style={styles.healthPrimaryTitleRow}>
            <Text style={styles.healthPrimaryTitle}>Primary Care</Text>
            <View style={styles.healthVerifiedChip}>
              <Text style={styles.healthVerifiedChipText}>Verified</Text>
            </View>
          </View>

          <View style={styles.healthPrimaryMetaRow}>
            <NameSvg width={14} height={17} />
            <Text style={styles.healthPrimaryMetaText}>Dr. H. Patel (GP)</Text>
          </View>

          <View style={styles.healthPrimaryMetaRow}>
            <BloodSvg width={14} height={17} />
            <Text style={styles.healthPrimaryMetaText}>Blood Type: O+</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.healthUtilityCard}>
        <PillSvg width={42} height={42} />
        <View style={styles.healthUtilityCopy}>
          <Text style={styles.healthUtilityLabel}>Medications</Text>
          <Text style={styles.healthMedicationValue}>
            Atorvastatin 10mg daily
          </Text>
        </View>
      </View>

      <View style={styles.healthUtilityCard}>
        <GymSvg width={44} height={44} />
        <View style={styles.healthUtilityCopy}>
          <Text style={styles.healthUtilityLabel}>Weekly Goal</Text>
          <View style={styles.healthGoalRow}>
            <View style={styles.healthGoalTrack}>
              <View
                style={[
                  styles.healthGoalFill,
                  {width: `${healthWeeklyGoalPercent}%`},
                ]}
              />
            </View>
            <Text style={styles.healthGoalPercent}>
              {healthWeeklyGoalPercent}%
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.healthCheckupsCard}>
        <View style={styles.healthSectionHeader}>
          <Text style={styles.healthSectionTitle}>Recent Checkups</Text>
          <Pressable onPress={() => openPlaceholder('All Recent Checkups')}>
            <Text style={styles.healthSectionLink}>View All</Text>
          </Pressable>
        </View>

        <View style={styles.healthCheckupsList}>
          {healthCheckups.map((checkup, index) => (
            <HealthCheckupRow
              key={checkup.id}
              {...checkup}
              showDivider={index > 0}
              onPress={() => openPlaceholder(checkup.title)}
            />
          ))}
        </View>
      </View>

      <View style={styles.healthAnalysisCard}>
        <ClinicalLabEquipmentSvg
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          style={styles.healthAnalysisArtwork}
        />
        <View style={styles.healthAnalysisTint} />
        <HealthAnalysisGradient />

        <View style={styles.healthAnalysisContent}>
          <Text style={styles.healthAnalysisLabel}>LATEST ANALYSIS</Text>
          <Text style={styles.healthAnalysisTitle}>Full Blood Count</Text>
          <Text style={styles.healthAnalysisBody}>
            {'Results uploaded 2 days ago. Stable\nacross all markers.'}
          </Text>

          <Pressable
            style={({pressed}) => [
              styles.healthAnalysisButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Full Blood Count PDF')}>
            <Text style={styles.healthAnalysisButtonText}>View PDF</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.healthHeartRateCard}>
        <View style={styles.healthHeartRateTopRow}>
          <WatchSvg width={14} height={20} />

          <View style={styles.healthHeartRateSyncChip}>
            <Text style={styles.healthHeartRateSyncText}>SYNCED</Text>
          </View>
        </View>

        <Text style={styles.healthHeartRateLabel}>Resting Heart Rate</Text>

        <View style={styles.healthHeartRateValueRow}>
          <Text style={styles.healthHeartRateValue}>58</Text>
          <Text style={styles.healthHeartRateUnit}>BPM</Text>
        </View>

        <View style={styles.healthHeartRateTrendRow}>
          <ProgressSvg width={12} height={7} />
          <Text style={styles.healthHeartRateTrendText}>
            3% lower than last week
          </Text>
        </View>
      </View>
    </>
  );

  const healthFitnessAddContent = (
    <>
      <View style={styles.healthAddOverviewSection}>
        <View style={styles.healthAddHeroCard}>
          <View style={styles.healthAddHeroRow}>
            <View style={styles.healthAddHeroIconWrap}>
              <HealthProfileGlyph />
            </View>

            <View style={styles.healthAddHeroTextWrap}>
              <Text style={styles.healthAddHeroTitle}>Health Profile</Text>
              <Text style={styles.healthAddHeroBody}>
                Update your medical record and wellness goals.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.healthAddBasicInfoCard}>
          <View style={styles.healthAddField}>
            <Text style={styles.healthAddFieldLabel}>Provider/Topic</Text>
            <View style={styles.healthAddInputShell}>
              <TextInput
                style={styles.healthAddInput}
                value={healthDraftProviderTopic}
                onChangeText={setHealthDraftProviderTopic}
                placeholder="Primary Care"
                placeholderTextColor="#8A94A6"
                autoCapitalize="words"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>

          <View style={styles.healthAddFieldLast}>
            <Text style={styles.healthAddFieldLabel}>Contact</Text>
            <View style={styles.healthAddInputShell}>
              <TextInput
                style={styles.healthAddInput}
                value={healthDraftContact}
                onChangeText={setHealthDraftContact}
                placeholder="Dr. H. Patel"
                placeholderTextColor="#8A94A6"
                autoCapitalize="words"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>
        </View>

        <View style={styles.healthAddBloodCard}>
          <Text style={styles.healthAddBloodLabel}>Blood Type</Text>

        <View style={styles.healthAddBloodValueRow}>
          <Text style={styles.healthAddBloodValue}>O+</Text>
          <View style={styles.healthAddBloodIconWrap}>
            <BloodTwoSvg width={13.33} height={16.67} />
          </View>
        </View>

          <Text style={styles.healthAddBloodNote}>Universal Donor</Text>
        </View>
      </View>

      <View style={styles.healthAddDetailsCard}>
        <View style={styles.healthAddTextareaField}>
          <Text style={styles.healthAddFieldLabel}>Medications</Text>
          <View style={styles.healthAddTextareaShell}>
            <TextInput
              style={styles.healthAddTextareaInput}
              value={healthDraftMedications}
              onChangeText={setHealthDraftMedications}
              placeholder="List medications"
              placeholderTextColor="#8A94A6"
              multiline
              textAlignVertical="top"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <View style={styles.healthAddGoalSection}>
          <View style={styles.healthAddGoalHeader}>
            <Text style={styles.healthAddGoalLabel}>Weekly Goal</Text>
            <Text style={styles.healthAddGoalPercent}>
              {healthDraftWeeklyGoalPercent}
            </Text>
          </View>

          <View style={styles.healthAddGoalTrack}>
            <View
              style={[
                styles.healthAddGoalFill,
                {width: `${healthDraftWeeklyGoalProgress}%`},
              ]}
            />
          </View>

          <View style={styles.healthAddInputShell}>
            <TextInput
              style={styles.healthAddInput}
              value={healthDraftWeeklyGoalText}
              onChangeText={setHealthDraftWeeklyGoalText}
              placeholder="150 mins cardio"
              placeholderTextColor="#8A94A6"
              autoCapitalize="sentences"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>
      </View>

      <View style={styles.healthAddUploadCard}>
        <Text style={styles.healthAddFieldLabel}>Medical Reports</Text>

        <View style={styles.healthAddUploadRow}>
          <Pressable
            style={({pressed}) => [
              styles.healthAddUploadAction,
              pressed ? styles.pressed : null,
            ]}
            onPress={handleBrowseHealthReport}>
            <UploadDocumentSvg width={20} height={25} />
            <Text style={styles.healthAddUploadActionText}>Upload PDF</Text>
          </Pressable>

          <View style={styles.healthAddUploadPreviewCard}>
            {hasUploadedHealthReport ? (
              <EditBackgroundSvg
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            ) : (
              <View style={styles.healthAddUploadPreviewEmpty} />
            )}
          </View>
        </View>
      </View>

      <View style={styles.healthAddControlsCard}>
        <View style={styles.healthAddReminderRow}>
          <View style={styles.healthAddReminderCopy}>
            <BellSvg width={20} height={21} />

            <View style={styles.healthAddReminderTextWrap}>
              <Text style={styles.healthAddReminderTitle}>Reminders</Text>
              <Text style={styles.healthAddReminderBody}>
                Daily medication alerts
              </Text>
            </View>
          </View>

          <Pressable
            style={[
              styles.healthAddReminderToggle,
              healthDraftRemindersEnabled
                ? styles.healthAddReminderToggleActive
                : null,
            ]}
            onPress={handleToggleHealthReminders}>
            <View
              style={[
                styles.healthAddReminderThumb,
                healthDraftRemindersEnabled
                  ? styles.healthAddReminderThumbActive
                  : null,
              ]}
            />
          </Pressable>
        </View>

        <View style={styles.healthAddDivider} />

        <View style={styles.healthAddNotesSection}>
          <Text style={styles.healthAddFieldLabel}>Notes</Text>

          <View style={styles.healthAddNotesShell}>
            <TextInput
              style={styles.healthAddNotesInput}
              value={healthDraftNotes}
              onChangeText={setHealthDraftNotes}
              placeholder="Add relevant health notes..."
              placeholderTextColor="#8A94A6"
              multiline
              textAlignVertical="top"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>
      </View>

      <View style={styles.healthAddDangerZone}>
        <Pressable
          style={({pressed}) => [
            styles.healthAddDeleteButton,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleDeleteHealthEntry}>
          <TrashCompactSvg width={16} height={18} />
          <Text style={styles.healthAddDeleteButtonText}>Delete Entry</Text>
        </Pressable>
      </View>
    </>
  );

  const insurancePoliciesAddContent = (
    <>
      <View style={styles.insuranceAddIntro}>
        <Text style={styles.insuranceAddEyebrow}>POLICY MANAGEMENT</Text>
        <Text style={styles.insuranceAddTitle}>
          {insuranceDraftPolicyName || 'Home & Contents'}
        </Text>
      </View>

      <View style={styles.insuranceAddCard}>
        <View style={styles.insuranceAddField}>
          <Text style={styles.insuranceAddFieldLabel}>Policy Name</Text>
          <View style={styles.insuranceAddInputShell}>
            <TextInput
              style={styles.insuranceAddInput}
              value={insuranceDraftPolicyName}
              onChangeText={setInsuranceDraftPolicyName}
              placeholder="Home & Contents"
              placeholderTextColor="#8A94A6"
              autoCapitalize="words"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <View style={styles.insuranceAddField}>
          <Text style={styles.insuranceAddFieldLabel}>Provider</Text>
          <View style={styles.insuranceAddInputShell}>
            <TextInput
              style={styles.insuranceAddInput}
              value={insuranceDraftProvider}
              onChangeText={setInsuranceDraftProvider}
              placeholder="AXA"
              placeholderTextColor="#8A94A6"
              autoCapitalize="words"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <View style={styles.insuranceAddField}>
          <Text style={styles.insuranceAddFieldLabel}>Policy Number</Text>
          <View style={styles.insuranceAddInputShell}>
            <TextInput
              style={styles.insuranceAddInput}
              value={insuranceDraftPolicyNumber}
              onChangeText={setInsuranceDraftPolicyNumber}
              placeholder="e.g. AX-123456789"
              placeholderTextColor="#8A94A6"
              autoCapitalize="characters"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <View style={styles.insuranceAddFieldLast}>
          <Text style={styles.insuranceAddFieldLabel}>Renewal Date</Text>
          <Pressable
            style={({pressed}) => [
              styles.insuranceAddDateInputShell,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Select Renewal Date')}>
            <Text style={styles.insuranceAddInput}>
              {insuranceDraftRenewalDate}
            </Text>
            <PlannerSvg width={18} height={20} />
          </Pressable>
        </View>
      </View>

      <View style={styles.insuranceAddCard}>
        <View style={styles.insuranceAddFieldLast}>
          <Text style={styles.insuranceAddFieldLabel}>Annual Premium Amount</Text>
          <View style={styles.insuranceAddInputShell}>
            <TextInput
              style={styles.insuranceAddInput}
              value={insuranceDraftAnnualPremium}
              onChangeText={setInsuranceDraftAnnualPremium}
              placeholder="$0.00"
              placeholderTextColor="#8A94A6"
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <Pressable
          style={({pressed}) => [
            styles.insuranceAddReminderCard,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleToggleInsuranceRenewalReminder}>
          <View style={styles.insuranceAddReminderTextWrap}>
            <Text style={styles.insuranceAddReminderTitle}>Renewal Reminder</Text>
            <Text style={styles.insuranceAddReminderSubtitle}>
              Notify me 30 days before
            </Text>
          </View>

          <View
            style={[
              styles.insuranceAddReminderToggle,
              insuranceDraftRenewalReminder
                ? styles.insuranceAddReminderToggleActive
                : null,
            ]}>
            <View style={styles.insuranceAddReminderThumb} />
          </View>
        </Pressable>
      </View>

      <View style={styles.insuranceAddCard}>
        <Text style={styles.insuranceAddSectionTitle}>Policy Documents</Text>

        <Pressable
          style={({pressed}) => [
            styles.insuranceAddUploadArea,
            pressed ? styles.pressed : null,
          ]}
          onPress={() => openPlaceholder('Upload Policy Certificate')}>
          <CetificateSvg width={32} height={40} />
          <Text style={styles.insuranceAddUploadTitle}>
            Drop your certificate here
          </Text>
          <Text style={styles.insuranceAddUploadSubtitle}>
            Supports PDF, PNG, JPG up to 10MB
          </Text>
        </Pressable>
      </View>

      <View style={styles.insuranceAddCard}>
        <Text style={styles.insuranceAddNotesLabel}>Internal Notes</Text>

        <View style={styles.insuranceAddNotesShell}>
          <TextInput
            style={styles.insuranceAddNotesInput}
            value={insuranceDraftNotes}
            onChangeText={setInsuranceDraftNotes}
            placeholder="Add any specific details or claim history notes here..."
            placeholderTextColor="#8A94A6"
            multiline
            textAlignVertical="top"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <View style={styles.insuranceAddFooterDivider} />

      <Pressable
        style={({pressed}) => [
          styles.insuranceAddDeleteButton,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleDeleteInsuranceEntry}>
        <TrashCompactSvg width={16} height={18} />
        <Text style={styles.insuranceAddDeleteButtonText}>
          Delete Policy Entry
        </Text>
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
                : isHealthFitnessAddView
                ? healthFitnessAddContent
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
