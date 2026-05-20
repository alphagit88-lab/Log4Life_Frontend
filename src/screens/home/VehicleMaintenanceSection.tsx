import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import AddActionSvg from '../../images/add.svg';
import BrakeSvg from '../../images/brake.svg';
import CarThreeSvg from '../../images/car_3.svg';
import CarTwoSvg from '../../images/car_2.svg';
import DocSvg from '../../images/doc.svg';
import MaintainOneSvg from '../../images/maintain_1.svg';
import MotSvg from '../../images/MOT.svg';
import OilSvg from '../../images/oil.svg';
import SpeedSvg from '../../images/speed.svg';
import TireSvg from '../../images/tire.svg';
import TrashSvg from '../../images/trash.svg';
import TrashCompactSvg from '../../images/trash_2.svg';
import UploadDocumentSvg from '../../images/upload_2.svg';
import VehicleHeroSvg from '../../images/vahicle_1.svg';
import WarningTwoSvg from '../../images/warning_2.svg';
import {HomeScreenStyles, OpenPlaceholder} from './types';

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

interface VehicleMaintenanceContentProps {
  styles: HomeScreenStyles;
  openPlaceholder: OpenPlaceholder;
}

interface VehicleMaintenanceAddContentProps {
  styles: HomeScreenStyles;
  vehicleDraftName: string;
  setVehicleDraftName: React.Dispatch<React.SetStateAction<string>>;
  vehicleDraftMakeModel: string;
  setVehicleDraftMakeModel: React.Dispatch<React.SetStateAction<string>>;
  vehicleDraftRegistration: string;
  setVehicleDraftRegistration: React.Dispatch<React.SetStateAction<string>>;
  vehicleDraftLastServiceDate: string;
  setVehicleDraftLastServiceDate: React.Dispatch<React.SetStateAction<string>>;
  vehicleDraftMotDueDate: string;
  setVehicleDraftMotDueDate: React.Dispatch<React.SetStateAction<string>>;
  hasUploadedVehicleDocument: boolean;
  handleBrowseVehicleDocument: () => void;
  handleDeleteVehicleDocument: () => void;
  vehicleDraftNotes: string;
  setVehicleDraftNotes: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteVehicleEntry: () => void;
}

function VehicleRecentServiceRow({
  styles,
  title,
  location,
  date,
  price,
  icon,
  onPress,
}: VehicleRecentServiceData & {
  styles: HomeScreenStyles;
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
  styles,
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
  styles: HomeScreenStyles;
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

export function VehicleMaintenanceContent({
  styles,
  openPlaceholder,
}: VehicleMaintenanceContentProps): React.JSX.Element {
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

  return (
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
              styles={styles}
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
            styles={styles}
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
}

export function VehicleMaintenanceAddContent({
  styles,
  vehicleDraftName,
  setVehicleDraftName,
  vehicleDraftMakeModel,
  setVehicleDraftMakeModel,
  vehicleDraftRegistration,
  setVehicleDraftRegistration,
  vehicleDraftLastServiceDate,
  setVehicleDraftLastServiceDate,
  vehicleDraftMotDueDate,
  setVehicleDraftMotDueDate,
  hasUploadedVehicleDocument,
  handleBrowseVehicleDocument,
  handleDeleteVehicleDocument,
  vehicleDraftNotes,
  setVehicleDraftNotes,
  handleDeleteVehicleEntry,
}: VehicleMaintenanceAddContentProps): React.JSX.Element {
  return (
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
            {' • '}
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
}
