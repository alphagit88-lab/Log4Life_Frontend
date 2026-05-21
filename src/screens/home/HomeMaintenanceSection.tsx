import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';
import ActiveSvg from '../../images/active.svg';
import ArrowSvg from '../../images/arrow.svg';
import BellSvg from '../../images/bell.svg';
import BoilerSvg from '../../images/boiler.svg';
import CctvSvg from '../../images/cctv.svg';
import DateSvg from '../../images/date.svg';
import DocSvg from '../../images/doc.svg';
import ElectricSvg from '../../images/electric.svg';
import FreezSvg from '../../images/freez.svg';
import HotWaterSvg from '../../images/hot_water.svg';
import ImageSvg from '../../images/image.svg';
import NextSvg from '../../images/next.svg';
import PipeSvg from '../../images/pipe.svg';
import PlannerPrimarySvg from '../../images/planner_primary.svg';
import ServiceTwoSvg from '../../images/service_2.svg';
import ShieldThreeSvg from '../../images/shield_3.svg';
import TrashSvg from '../../images/trash.svg';
import UploadSvg from '../../images/upload.svg';
import WashingMachinePng from '../../images/washine_machine.png';
import WrongSvg from '../../images/wrong.svg';
import {
  HomeMaintenanceDocument,
  HomeScreenStyles,
  OpenPlaceholder,
} from './types';

interface ServiceHistoryItemData {
  id: string;
  title: string;
  meta: string;
  icon: React.JSX.Element;
}

interface HomeMaintenanceContentProps {
  styles: HomeScreenStyles;
  openPlaceholder: OpenPlaceholder;
}

interface HomeMaintenanceAddContentProps {
  styles: HomeScreenStyles;
  homeMaintenanceDraftName: string;
  setHomeMaintenanceDraftName: React.Dispatch<React.SetStateAction<string>>;
  homeMaintenanceDraftModelSerial: string;
  setHomeMaintenanceDraftModelSerial: React.Dispatch<
    React.SetStateAction<string>
  >;
  homeMaintenanceDraftLastServiceDate: string;
  setHomeMaintenanceDraftLastServiceDate: React.Dispatch<
    React.SetStateAction<string>
  >;
  homeMaintenanceDraftNextDueDate: string;
  setHomeMaintenanceDraftNextDueDate: React.Dispatch<
    React.SetStateAction<string>
  >;
  homeMaintenanceDraftDocuments: HomeMaintenanceDocument[];
  handleBrowseHomeMaintenanceDocument: () => void;
  handleDeleteHomeMaintenanceDocument: (id: string) => void;
  homeMaintenanceDraftReminderEnabled: boolean;
  handleToggleHomeMaintenanceReminder: () => void;
  homeMaintenanceDraftNotes: string;
  setHomeMaintenanceDraftNotes: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteHomeMaintenanceEntry: () => void;
}

function HistoryFilterIcon(): React.JSX.Element {
  return (
    <Svg width={18} height={12} viewBox="0 0 18 12" fill="none">
      <Path d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#42474E" />
    </Svg>
  );
}

function HomeMaintenanceAssetGradient({
  styles,
}: {
  styles: HomeScreenStyles;
}): React.JSX.Element {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 358 160"
      preserveAspectRatio="none"
      style={styles.homeMaintenanceAddAssetGradient}>
      <Defs>
        <LinearGradient
          id="homeMaintenanceAssetFade"
          x1="179"
          y1="160"
          x2="179"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#094771" stopOpacity={0.72} />
          <Stop offset="1" stopColor="#094771" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Rect width="358" height="160" fill="url(#homeMaintenanceAssetFade)" />
    </Svg>
  );
}

function StatusBadge({
  styles,
  label,
  tone,
}: {
  styles: HomeScreenStyles;
  label: string;
  tone: 'warning' | 'healthy';
}): React.JSX.Element {
  const isWarning = tone === 'warning';

  return (
    <View
      style={[
        styles.homeMaintenanceStatusBadge,
        isWarning
          ? styles.homeMaintenanceStatusBadgeWarning
          : styles.homeMaintenanceStatusBadgeHealthy,
      ]}>
      <Text
        style={[
          styles.homeMaintenanceStatusBadgeText,
          isWarning
            ? styles.homeMaintenanceStatusBadgeTextWarning
            : styles.homeMaintenanceStatusBadgeTextHealthy,
        ]}>
        {label}
      </Text>
    </View>
  );
}

function ServiceHistoryRow({
  styles,
  title,
  meta,
  icon,
  onPress,
}: ServiceHistoryItemData & {
  styles: HomeScreenStyles;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.homeMaintenanceHistoryRow,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <View style={styles.homeMaintenanceHistoryLeft}>
        {icon}

        <View style={styles.homeMaintenanceHistoryTextBlock}>
          <Text style={styles.homeMaintenanceHistoryItemTitle}>{title}</Text>
          <Text style={styles.homeMaintenanceHistoryItemMeta}>{meta}</Text>
        </View>
      </View>

      <View style={styles.homeMaintenanceHistoryRight}>
        <View style={styles.homeMaintenanceHistoryStatusChip}>
          <Text style={styles.homeMaintenanceHistoryStatusText}>Completed</Text>
        </View>

        <View style={styles.homeMaintenanceHistoryArrow}>
          <ArrowSvg width={8} height={12} />
        </View>
      </View>
    </Pressable>
  );
}

function DocumentationFileRow({
  styles,
  document,
  onDelete,
}: {
  styles: HomeScreenStyles;
  document: HomeMaintenanceDocument;
  onDelete: () => void;
}): React.JSX.Element {
  return (
    <View style={styles.homeMaintenanceAddDocumentRow}>
      {document.kind === 'pdf' ? (
        <DocSvg width={16} height={20} />
      ) : (
        <ImageSvg width={18} height={18} />
      )}

      <View style={styles.homeMaintenanceAddDocumentCopy}>
        <Text
          style={styles.homeMaintenanceAddDocumentName}
          numberOfLines={2}>
          {document.name}
        </Text>
        <Text style={styles.homeMaintenanceAddDocumentSize}>{document.size}</Text>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.homeMaintenanceAddDocumentDeleteButton,
          pressed ? styles.pressed : null,
        ]}
        onPress={onDelete}>
        <WrongSvg width={14} height={14} />
      </Pressable>
    </View>
  );
}

export function HomeMaintenanceContent({
  styles,
  openPlaceholder,
}: HomeMaintenanceContentProps): React.JSX.Element {
  const serviceHistoryItems: ServiceHistoryItemData[] = [
    {
      id: 'annual-gas-safety-check',
      title: 'Annual Gas\nSafety Check',
      meta: '10 Feb 2024 -\nCertified by British Gas',
      icon: <ServiceTwoSvg width={27} height={48} />,
    },
    {
      id: 'kitchen-pipe-descaling',
      title: 'Kitchen Pipe\nDescaling',
      meta: '22 Dec 2023 -\nRoutine Preventive',
      icon: <PipeSvg width={29} height={48} />,
    },
    {
      id: 'fuse-box-inspection',
      title: 'Fuse Box\nInspection',
      meta: '14 Sep 2023 -\nPeriodic Safety Review',
      icon: <ElectricSvg width={27} height={48} />,
    },
  ];

  return (
    <>
      <View style={styles.homeMaintenanceHeroCard}>
        <View style={styles.homeMaintenanceHeroGlow} />

        <View style={styles.homeMaintenanceHeroTopRow}>
          <BoilerSvg width={56} height={56} />

          <View style={styles.homeMaintenanceHeroTextColumn}>
            <Text style={styles.homeMaintenanceHeroTitle}>
              {'Boiler - Worcester\nBosch'}
            </Text>
            <Text style={styles.homeMaintenanceHeroSubtitle}>
              Greenstar i Series - Serial: WB7728192
            </Text>

            <View style={styles.homeMaintenanceHeroChips}>
              <View
                style={[
                  styles.homeMaintenanceHeroChip,
                  styles.homeMaintenanceHeroChipWarranty,
                ]}>
                <ActiveSvg width={14} height={18} />
                <Text style={styles.homeMaintenanceHeroChipText}>
                  Active Warranty
                </Text>
              </View>

              <View
                style={[
                  styles.homeMaintenanceHeroChip,
                  styles.homeMaintenanceHeroChipManaged,
                ]}>
                <DateSvg width={14} height={14} />
                <Text
                  style={[
                    styles.homeMaintenanceHeroChipText,
                    styles.homeMaintenanceHeroChipTextManaged,
                  ]}>
                  Managed since 2018
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.homeMaintenanceHeroMetricsRow}>
          <View style={styles.homeMaintenanceHeroMetricCard}>
            <Text style={styles.homeMaintenanceHeroMetricLabel}>
              LAST SERVICE
            </Text>
            <Text style={styles.homeMaintenanceHeroMetricValue}>10 Feb 2024</Text>
          </View>

          <View
            style={[
              styles.homeMaintenanceHeroMetricCard,
              styles.homeMaintenanceHeroMetricCardDue,
            ]}>
            <Text
              style={[
                styles.homeMaintenanceHeroMetricLabel,
                styles.homeMaintenanceHeroMetricLabelDue,
              ]}>
              NEXT DUE
            </Text>
            <Text
              style={[
                styles.homeMaintenanceHeroMetricValue,
                styles.homeMaintenanceHeroMetricValueDue,
              ]}>
              Feb 2025
            </Text>
          </View>
        </View>

        <View style={styles.homeMaintenanceHeroProgressBlock}>
          <View style={styles.homeMaintenanceHeroProgressHeader}>
            <Text style={styles.homeMaintenanceHeroProgressLabel}>
              Service Cycle Progress
            </Text>
            <Text style={styles.homeMaintenanceHeroProgressValue}>
              12% elapsed
            </Text>
          </View>

          <View style={styles.homeMaintenanceHeroProgressTrack}>
            <View
              style={[styles.homeMaintenanceHeroProgressFill, {width: '12%'}]}
            />
          </View>
        </View>
      </View>

      <View style={styles.homeMaintenanceSectionHeader}>
        <Text style={styles.homeMaintenanceSectionTitle}>
          Registered Appliances
        </Text>

        <Pressable onPress={() => openPlaceholder('All Registered Appliances')}>
          <Text style={styles.homeMaintenanceSectionLink}>View All</Text>
        </Pressable>
      </View>

      <View style={styles.homeMaintenanceApplianceCard}>
        <View style={styles.homeMaintenanceApplianceHeader}>
          <FreezSvg width={36} height={36} />
          <StatusBadge styles={styles} label="Due Soon" tone="warning" />
        </View>

        <Text style={styles.homeMaintenanceApplianceTitle}>Air Conditioning</Text>
        <Text style={styles.homeMaintenanceApplianceSubtitle}>
          Daikin Multi-Split System
        </Text>

        <View style={styles.homeMaintenanceApplianceDetails}>
          <View style={styles.homeMaintenanceApplianceDetailRow}>
            <Text style={styles.homeMaintenanceApplianceDetailLabel}>
              Last Filter Clean
            </Text>
            <Text style={styles.homeMaintenanceApplianceDetailValue}>
              15 Nov 2023
            </Text>
          </View>

          <View style={styles.homeMaintenanceApplianceDetailRow}>
            <Text style={styles.homeMaintenanceApplianceDetailLabel}>
              System Service
            </Text>
            <Text
              style={[
                styles.homeMaintenanceApplianceDetailValue,
                styles.homeMaintenanceApplianceDetailValueWarning,
              ]}>
              15 May 2024
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.homeMaintenanceApplianceCard,
          styles.homeMaintenanceApplianceCardSpaced,
        ]}>
        <View style={styles.homeMaintenanceApplianceHeader}>
          <ShieldThreeSvg width={32} height={36} />
          <StatusBadge styles={styles} label="Healthy" tone="healthy" />
        </View>

        <Text style={styles.homeMaintenanceApplianceTitle}>Smart Security</Text>
        <Text style={styles.homeMaintenanceApplianceSubtitle}>
          Ring Ecosystem (4 Cameras)
        </Text>

        <View style={styles.homeMaintenanceApplianceMediaWrap}>
          <CctvSvg
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </View>

        <Text style={styles.homeMaintenanceApplianceFooter}>
          Battery levels: 85% average
        </Text>
      </View>

      <View
        style={[
          styles.homeMaintenanceApplianceCard,
          styles.homeMaintenanceApplianceCardSpaced,
        ]}>
        <View style={styles.homeMaintenanceApplianceHeader}>
          <Image
            source={WashingMachinePng}
            style={styles.homeMaintenanceWashingMachineIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.homeMaintenanceApplianceTitle}>Washing Machine</Text>
        <Text style={styles.homeMaintenanceApplianceSubtitle}>
          Miele W1 Excellence
        </Text>

        <View style={styles.homeMaintenanceApplianceProgressBlock}>
          <View style={styles.homeMaintenanceApplianceProgressMeta}>
            <Text style={styles.homeMaintenanceApplianceDetailLabel}>
              Maintenance Wash
            </Text>
            <Text style={styles.homeMaintenanceApplianceDetailValue}>
              Every 30 cycles
            </Text>
          </View>

          <View style={styles.homeMaintenanceApplianceProgressTrack}>
            <View
              style={[
                styles.homeMaintenanceApplianceProgressFill,
                {width: '70%'},
              ]}
            />
          </View>

          <Text style={styles.homeMaintenanceApplianceProgressCaption}>
            21/30 cycles completed
          </Text>
        </View>
      </View>

      <View style={styles.homeMaintenanceHistoryCard}>
        <View style={styles.homeMaintenanceHistoryHeader}>
          <Text style={styles.homeMaintenanceHistoryTitle}>Service History</Text>

          <Pressable
            style={({pressed}) => [
              styles.homeMaintenanceHistoryFilterButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Filter Service History')}>
            <HistoryFilterIcon />
          </Pressable>
        </View>

        {serviceHistoryItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <ServiceHistoryRow
              styles={styles}
              {...item}
              onPress={() => openPlaceholder(item.title.replace('\n', ' '))}
            />
            {index < serviceHistoryItems.length - 1 ? (
              <View style={styles.homeMaintenanceHistoryRowDivider} />
            ) : null}
          </React.Fragment>
        ))}

        <Pressable
          style={({pressed}) => [
            styles.homeMaintenanceHistoryFooter,
            pressed ? styles.pressed : null,
          ]}
          onPress={() => openPlaceholder('Download Full Audit Report (PDF)')}>
          <Text style={styles.homeMaintenanceHistoryFooterText}>
            Download Full Audit Report (PDF)
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export function HomeMaintenanceAddContent({
  styles,
  homeMaintenanceDraftName,
  setHomeMaintenanceDraftName,
  homeMaintenanceDraftModelSerial,
  setHomeMaintenanceDraftModelSerial,
  homeMaintenanceDraftLastServiceDate,
  setHomeMaintenanceDraftLastServiceDate,
  homeMaintenanceDraftNextDueDate,
  setHomeMaintenanceDraftNextDueDate,
  homeMaintenanceDraftDocuments,
  handleBrowseHomeMaintenanceDocument,
  handleDeleteHomeMaintenanceDocument,
  homeMaintenanceDraftReminderEnabled,
  handleToggleHomeMaintenanceReminder,
  homeMaintenanceDraftNotes,
  setHomeMaintenanceDraftNotes,
  handleDeleteHomeMaintenanceEntry,
}: HomeMaintenanceAddContentProps): React.JSX.Element {
  const documentCountLabel =
    homeMaintenanceDraftDocuments.length === 1
      ? '1 File Attached'
      : `${homeMaintenanceDraftDocuments.length} Files Attached`;

  return (
    <>
      <View
        style={[
          styles.homeMaintenanceAddSectionCard,
          styles.homeMaintenanceAddSectionCardFirst,
        ]}>
        <Text style={styles.homeMaintenanceAddSectionTitle}>
          Appliance Details
        </Text>

        <View style={styles.homeMaintenanceAddFieldsStack}>
          <View style={styles.homeMaintenanceAddField}>
            <Text style={styles.homeMaintenanceAddFieldLabel}>
              Appliance Name
            </Text>
            <View style={styles.homeMaintenanceAddInputShell}>
              <TextInput
                style={styles.homeMaintenanceAddInput}
                value={homeMaintenanceDraftName}
                onChangeText={setHomeMaintenanceDraftName}
                placeholder="Boiler - Worcester Bosch"
                placeholderTextColor="#6B7280"
                autoCapitalize="words"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>

          <View style={styles.homeMaintenanceAddField}>
            <Text style={styles.homeMaintenanceAddFieldLabel}>
              Model / Serial Number
            </Text>
            <View style={styles.homeMaintenanceAddInputShell}>
              <TextInput
                style={styles.homeMaintenanceAddInput}
                value={homeMaintenanceDraftModelSerial}
                onChangeText={setHomeMaintenanceDraftModelSerial}
                placeholder="e.g. Greenstar 8000 Life / SN: 12345678"
                placeholderTextColor="#6B7280"
                autoCapitalize="words"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
            </View>
          </View>

          <View style={styles.homeMaintenanceAddField}>
            <Text style={styles.homeMaintenanceAddFieldLabel}>Last Service</Text>
            <View
              style={[
                styles.homeMaintenanceAddInputShell,
                styles.homeMaintenanceAddInputShellWithIcon,
              ]}>
              <TextInput
                style={styles.homeMaintenanceAddInputWithIcon}
                value={homeMaintenanceDraftLastServiceDate}
                onChangeText={setHomeMaintenanceDraftLastServiceDate}
                placeholder="10 Feb 2024"
                placeholderTextColor="#6B7280"
                autoCapitalize="none"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
              <PlannerPrimarySvg width={18} height={20} />
            </View>
          </View>

          <View style={styles.homeMaintenanceAddFieldLast}>
            <Text style={styles.homeMaintenanceAddFieldLabel}>Next Due</Text>
            <View
              style={[
                styles.homeMaintenanceAddInputShell,
                styles.homeMaintenanceAddInputShellWithIcon,
              ]}>
              <TextInput
                style={styles.homeMaintenanceAddInputWithIcon}
                value={homeMaintenanceDraftNextDueDate}
                onChangeText={setHomeMaintenanceDraftNextDueDate}
                placeholder="Feb 2025"
                placeholderTextColor="#6B7280"
                autoCapitalize="none"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
              <NextSvg width={20} height={24} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.homeMaintenanceAddSectionCard}>
        <View style={styles.homeMaintenanceAddDocumentationHeader}>
          <Text style={styles.homeMaintenanceAddSectionTitle}>
            Documentation
          </Text>

          <View style={styles.homeMaintenanceAddDocumentationBadge}>
            <Text style={styles.homeMaintenanceAddDocumentationBadgeText}>
              {documentCountLabel}
            </Text>
          </View>
        </View>

        <View style={styles.homeMaintenanceAddDocumentsList}>
          {homeMaintenanceDraftDocuments.map(document => (
            <DocumentationFileRow
              key={document.id}
              styles={styles}
              document={document}
              onDelete={() => handleDeleteHomeMaintenanceDocument(document.id)}
            />
          ))}
        </View>

        <Pressable
          style={({pressed}) => [
            styles.homeMaintenanceAddUploadArea,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleBrowseHomeMaintenanceDocument}>
          <UploadSvg width={29.33} height={21.33} />
          <Text style={styles.homeMaintenanceAddUploadTitle}>
            Upload warranty or service log
          </Text>
          <Text style={styles.homeMaintenanceAddUploadSubtitle}>
            PDF, JPG or PNG up to 10MB
          </Text>
        </Pressable>
      </View>

      <View style={styles.homeMaintenanceAddSectionCard}>
        <View style={styles.homeMaintenanceAddReminderHeader}>
          <BellSvg width={20} height={21} />
          <Text
            style={[
              styles.homeMaintenanceAddSectionTitle,
              styles.homeMaintenanceAddReminderHeaderTitle,
            ]}>
            Smart Reminders
          </Text>
        </View>

        <View style={styles.homeMaintenanceAddReminderCard}>
          <View style={styles.homeMaintenanceAddReminderCopy}>
            <Text style={styles.homeMaintenanceAddReminderTitle}>
              Maintenance Alert
            </Text>
            <Text style={styles.homeMaintenanceAddReminderBody}>
              Notify me 30 days before service due
            </Text>
          </View>

          <Pressable
            style={[
              styles.homeMaintenanceAddReminderToggle,
              homeMaintenanceDraftReminderEnabled
                ? styles.homeMaintenanceAddReminderToggleActive
                : null,
            ]}
            onPress={handleToggleHomeMaintenanceReminder}>
            <View
              style={[
                styles.homeMaintenanceAddReminderThumb,
                homeMaintenanceDraftReminderEnabled
                  ? styles.homeMaintenanceAddReminderThumbActive
                  : null,
              ]}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.homeMaintenanceAddSectionCard}>
        <Text style={styles.homeMaintenanceAddSectionTitle}>
          Maintenance Notes
        </Text>

        <View style={styles.homeMaintenanceAddNotesShell}>
          <TextInput
            style={styles.homeMaintenanceAddNotesInput}
            value={homeMaintenanceDraftNotes}
            onChangeText={setHomeMaintenanceDraftNotes}
            placeholder="Record details about specific repairs, parts replaced, or engineer contacts..."
            placeholderTextColor="#6B7280"
            multiline
            textAlignVertical="top"
            autoCorrect={false}
            selectionColor="#0A5688"
          />
        </View>
      </View>

      <View style={styles.homeMaintenanceAddAssetCard}>
        <HotWaterSvg
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
        <HomeMaintenanceAssetGradient styles={styles} />
        <View style={styles.homeMaintenanceAddAssetOverlay}>
          <Text style={styles.homeMaintenanceAddAssetText}>
            {'Last inspected by: John Smith\nEngineering'}
          </Text>
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.homeMaintenanceAddDeleteButton,
          pressed ? styles.pressed : null,
        ]}
        onPress={handleDeleteHomeMaintenanceEntry}>
        <TrashSvg width={20} height={22} />
        <Text style={styles.homeMaintenanceAddDeleteButtonText}>
          Delete Entry
        </Text>
      </Pressable>
    </>
  );
}
