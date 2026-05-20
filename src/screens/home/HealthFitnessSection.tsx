import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';
import ArrowSvg from '../../images/arrow.svg';
import BellSvg from '../../images/bell.svg';
import BloodSvg from '../../images/blood.svg';
import BloodTwoSvg from '../../images/blood_2.svg';
import ClinicalLabEquipmentSvg from '../../images/Clinical Lab Equipment.svg';
import EditBackgroundSvg from '../../images/edit_bg.svg';
import FadeSvg from '../../images/fade.svg';
import GymSvg from '../../images/gym.svg';
import NameSvg from '../../images/name.svg';
import PillSvg from '../../images/pill.svg';
import ProgressSvg from '../../images/progress.svg';
import ShieldTwoSvg from '../../images/shield_2.svg';
import TrashCompactSvg from '../../images/trash_2.svg';
import UploadDocumentSvg from '../../images/upload_2.svg';
import WatchSvg from '../../images/watch.svg';
import {HomeScreenStyles, OpenPlaceholder} from './types';

interface HealthCheckupData {
  id: string;
  month: string;
  day: string;
  title: string;
  subtitle: string;
}

interface HealthFitnessContentProps {
  styles: HomeScreenStyles;
  openPlaceholder: OpenPlaceholder;
}

interface HealthFitnessAddContentProps {
  styles: HomeScreenStyles;
  healthDraftProviderTopic: string;
  setHealthDraftProviderTopic: React.Dispatch<React.SetStateAction<string>>;
  healthDraftContact: string;
  setHealthDraftContact: React.Dispatch<React.SetStateAction<string>>;
  healthDraftMedications: string;
  setHealthDraftMedications: React.Dispatch<React.SetStateAction<string>>;
  healthDraftWeeklyGoalPercent: string;
  healthDraftWeeklyGoalProgress: number;
  healthDraftWeeklyGoalText: string;
  setHealthDraftWeeklyGoalText: React.Dispatch<React.SetStateAction<string>>;
  hasUploadedHealthReport: boolean;
  handleBrowseHealthReport: () => void;
  healthDraftRemindersEnabled: boolean;
  handleToggleHealthReminders: () => void;
  healthDraftNotes: string;
  setHealthDraftNotes: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteHealthEntry: () => void;
}

function HealthAnalysisGradient({
  styles,
}: {
  styles: HomeScreenStyles;
}): React.JSX.Element {
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
  styles,
  month,
  day,
  title,
  subtitle,
  showDivider = false,
  onPress,
}: HealthCheckupData & {
  styles: HomeScreenStyles;
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

export function HealthFitnessContent({
  styles,
  openPlaceholder,
}: HealthFitnessContentProps): React.JSX.Element {
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

  return (
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
            <Text style={styles.healthGoalPercent}>{healthWeeklyGoalPercent}%</Text>
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
              styles={styles}
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
        <HealthAnalysisGradient styles={styles} />

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
}

export function HealthFitnessAddContent({
  styles,
  healthDraftProviderTopic,
  setHealthDraftProviderTopic,
  healthDraftContact,
  setHealthDraftContact,
  healthDraftMedications,
  setHealthDraftMedications,
  healthDraftWeeklyGoalPercent,
  healthDraftWeeklyGoalProgress,
  healthDraftWeeklyGoalText,
  setHealthDraftWeeklyGoalText,
  hasUploadedHealthReport,
  handleBrowseHealthReport,
  healthDraftRemindersEnabled,
  handleToggleHealthReminders,
  healthDraftNotes,
  setHealthDraftNotes,
  handleDeleteHealthEntry,
}: HealthFitnessAddContentProps): React.JSX.Element {
  return (
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
}
