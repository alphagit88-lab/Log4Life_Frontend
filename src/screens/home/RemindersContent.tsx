import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AnnualHealthSvg from '../../images/annual_health.svg';
import BellThreeGraySvg from '../../images/bell_3_gray.svg';
import Bg4Svg from '../../images/bg_4.svg';
import DocSvg from '../../images/doc.svg';
import HVACSvg from '../../images/HVAC.svg';
import RemindersSvg from '../../images/reminders.svg';
import VehicleInsuranceSvg from '../../images/vehicle_insurance.svg';
import {fonts} from '../../theme/fonts';

type ReminderFilterKey = 'all' | 'overdue' | 'this-week' | 'this-month';
type ReminderSectionKey = Exclude<ReminderFilterKey, 'all'>;
type ReminderStatusTone = 'warning' | 'cool';
type ReminderDueTone = 'default' | 'danger';

interface ReminderFilterChipProps {
  active: boolean;
  label: string;
  onPress: () => void;
  width: number;
}

interface ReminderCardData {
  bellIcon?: React.JSX.Element;
  bellPlacement?: 'bottom' | 'middle';
  id: string;
  due: string;
  dueTone?: ReminderDueTone;
  icon: React.JSX.Element;
  record: string;
  status: string;
  statusTone: ReminderStatusTone;
  statusWidth?: number;
  title: string;
}

interface ReminderSectionData {
  accentColor: string;
  headingColor: string;
  id: ReminderSectionKey;
  title: string;
  items: ReminderCardData[];
}

function ReminderFilterChip({
  active,
  label,
  onPress,
  width,
}: ReminderFilterChipProps): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.filterChip,
        {width},
        active ? styles.filterChipActive : null,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.filterChipText,
          active ? styles.filterChipTextActive : null,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

function ReminderCard({
  bellIcon,
  bellPlacement = 'bottom',
  due,
  dueTone = 'default',
  icon,
  record,
  status,
  statusTone,
  statusWidth,
  title,
}: ReminderCardData): React.JSX.Element {
  const isWarningStatus = statusTone === 'warning';
  const isDangerDue = dueTone === 'danger';

  return (
    <View style={styles.card}>
      {icon}

      <View style={styles.cardCopy}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardRecord}>{record}</Text>
        <Text style={[styles.cardDue, isDangerDue ? styles.cardDueDanger : null]}>
          {due}
        </Text>
      </View>

      <View
        style={[
          styles.cardMeta,
          bellPlacement === 'middle'
            ? styles.cardMetaMiddle
            : styles.cardMetaBottom,
        ]}>
        <View
          style={[
            styles.statusPill,
            statusWidth ? {minWidth: statusWidth} : null,
            isWarningStatus ? styles.statusPillWarning : styles.statusPillCool,
          ]}>
          <Text
            style={[
              styles.statusPillText,
              isWarningStatus
                ? styles.statusPillTextWarning
                : styles.statusPillTextCool,
            ]}>
            {status}
          </Text>
        </View>

        <View style={styles.cardBellWrap}>
          {bellIcon ?? <RemindersSvg width={18} height={20} />}
        </View>
      </View>
    </View>
  );
}

function ReminderSection({
  accentColor,
  headingColor,
  title,
  items,
}: ReminderSectionData): React.JSX.Element {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={[styles.sectionAccent, {backgroundColor: accentColor}]} />
        <Text style={[styles.sectionTitle, {color: headingColor}]}>{title}</Text>
      </View>

      <View style={styles.sectionCards}>
        {items.map(item => (
          <ReminderCard key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
}

export function RemindersContent({
  openPlaceholder,
}: {
  openPlaceholder: (label: string) => void;
}): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState<ReminderFilterKey>('all');

  const sections: ReminderSectionData[] = [
    {
      id: 'overdue',
      title: 'OVERDUE',
      accentColor: '#BA1A1A',
      headingColor: '#BA1A1A',
      items: [
        {
          id: 'annual-health-checkup',
          title: 'Annual Health\nCheckup',
          record: 'Record: Personal Medical File',
          due: 'Due: Oct 12, 2023',
          dueTone: 'danger',
          status: 'Expired',
          statusTone: 'warning',
          statusWidth: 56,
          bellIcon: <BellThreeGraySvg width={18} height={19} />,
          bellPlacement: 'bottom',
          icon: <AnnualHealthSvg width={48} height={48} />,
        },
      ],
    },
    {
      id: 'this-week',
      title: 'THIS WEEK',
      accentColor: '#2C5F8A',
      headingColor: '#2C5F8A',
      items: [
        {
          id: 'tax-document-renewal',
          title: 'Tax Document\nRenewal',
          record: 'Record: Financial Records 2024',
          due: 'Due: Thursday, 10:00 AM',
          status: '2 Days Left',
          statusTone: 'warning',
          statusWidth: 75,
          bellPlacement: 'middle',
          icon: (
            <View style={styles.blueIconWrap}>
              <DocSvg width={16} height={20} />
            </View>
          ),
        },
        {
          id: 'hvac-maintenance',
          title: 'HVAC\nMaintenance',
          record: 'Record: Property Logs',
          due: 'Due: Saturday, 09:00 AM',
          status: '4 Days Left',
          statusTone: 'warning',
          statusWidth: 76,
          bellPlacement: 'middle',
          icon: <HVACSvg width={48} height={48} />,
        },
      ],
    },
    {
      id: 'this-month',
      title: 'THIS MONTH',
      accentColor: '#72777F',
      headingColor: '#42474E',
      items: [
        {
          id: 'vehicle-insurance-renewal',
          title: 'Vehicle Insurance\nRenewal',
          record: 'Record: SUV Documents',
          due: 'Due: Oct 28, 2024',
          status: '22 Days Left',
          statusTone: 'cool',
          statusWidth: 81,
          bellPlacement: 'middle',
          icon: <VehicleInsuranceSvg width={48} height={48} />,
        },
      ],
    },
  ];

  const visibleSections =
    activeFilter === 'all'
      ? sections
      : sections.filter(section => section.id === activeFilter);

  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.screenTitle}>Reminders</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}>
          <ReminderFilterChip
            active={activeFilter === 'all'}
            label="All"
            onPress={() => setActiveFilter('all')}
            width={64}
          />
          <ReminderFilterChip
            active={activeFilter === 'overdue'}
            label="Overdue"
            onPress={() => setActiveFilter('overdue')}
            width={102}
          />
          <ReminderFilterChip
            active={activeFilter === 'this-week'}
            label="This Week"
            onPress={() => setActiveFilter('this-week')}
            width={88}
          />
          <ReminderFilterChip
            active={activeFilter === 'this-month'}
            label="This Month"
            onPress={() => setActiveFilter('this-month')}
            width={94}
          />
        </ScrollView>
      </View>

      {visibleSections.map(section => (
        <ReminderSection key={section.id} {...section} />
      ))}

      <View style={styles.bannerShell}>
        <View style={styles.bannerBackground}>
          <Bg4Svg
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
          <View style={styles.bannerOverlay} />
        </View>

        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Maximize Your Productivity</Text>
          <Text style={styles.bannerBody}>
            Sync your life reminders with professional milestones for ultimate
            efficiency.
          </Text>

          <Pressable
            style={({pressed}) => [
              styles.bannerButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => openPlaceholder('Explore Insights')}>
            <Text style={styles.bannerButtonText}>Explore Insights</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 16,
  },
  headerBlock: {
    alignItems: 'center',
    marginBottom: 28,
    paddingHorizontal: 10,
  },
  screenTitle: {
    color: '#094771',
    fontFamily: fonts.bold,
    fontSize: 28,
    letterSpacing: -0.56,
    lineHeight: 36,
    marginBottom: 16,
    textAlign: 'center',
  },
  filterRow: {
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 1,
  },
  filterChip: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#C2C7CF',
    borderRadius: 9999,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  filterChipActive: {
    backgroundColor: '#094771',
    borderColor: '#094771',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  filterChipText: {
    color: '#42474E',
    fontFamily: fonts.semiBold,
    fontSize: 13,
    letterSpacing: 0.26,
    lineHeight: 16,
    textAlign: 'center',
  },
  filterChipTextActive: {
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 12,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  sectionAccent: {
    borderRadius: 9999,
    height: 24,
    marginRight: 8,
    width: 8,
  },
  sectionTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    letterSpacing: 0.9,
    lineHeight: 24,
  },
  sectionCards: {
    gap: 16,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#C2C7CF',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 100,
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  blueIconWrap: {
    alignItems: 'center',
    backgroundColor: '#D1E6F2',
    borderRadius: 9999,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  cardCopy: {
    flex: 1,
    marginLeft: 16,
    marginRight: 12,
  },
  cardTitle: {
    color: '#091E27',
    fontFamily: fonts.semiBold,
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 4,
  },
  cardRecord: {
    color: '#42474E',
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 4,
  },
  cardDue: {
    color: '#42474E',
    fontFamily: fonts.regular,
    fontSize: 12,
    letterSpacing: 0.12,
    lineHeight: 16,
  },
  cardDueDanger: {
    color: '#BA1A1A',
    fontFamily: fonts.semiBold,
  },
  cardMeta: {
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    position: 'relative',
    width: 96,
  },
  cardMetaMiddle: {
    justifyContent: 'center',
    minHeight: 60,
  },
  cardMetaBottom: {
    justifyContent: 'flex-end',
    minHeight: 60,
  },
  statusPill: {
    borderRadius: 9999,
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  statusPillWarning: {
    backgroundColor: '#E8A020',
  },
  statusPillCool: {
    backgroundColor: '#DCF1FD',
  },
  statusPillText: {
    fontFamily: fonts.regular,
    fontSize: 11,
    letterSpacing: 0,
    lineHeight: 22,
    textAlign: 'center',
  },
  statusPillTextWarning: {
    color: '#FFFFFF',
  },
  statusPillTextCool: {
    color: '#42474E',
  },
  cardBellWrap: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    minHeight: 20,
    minWidth: 20,
    width: 20,
  },
  bannerShell: {
    height: 208,
    marginBottom: 4,
    marginTop: 6,
    paddingTop: 16,
    paddingHorizontal: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  bannerBackground: {
    borderRadius: 13,
    bottom: 0,
    left: 12,
    overflow: 'hidden',
    position: 'absolute',
    right: 12,
    top: 16,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(6, 25, 39, 0.18)',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 286,
    paddingHorizontal: 28,
    paddingVertical: 18,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontFamily: fonts.semiBold,
    fontSize: 22,
    letterSpacing: -0.22,
    lineHeight: 28,
    marginBottom: 8,
  },
  bannerBody: {
    color: '#FFFFFF',
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
    opacity: 0.92,
  },
  bannerButton: {
    alignItems: 'center',
    backgroundColor: '#815500',
    borderRadius: 8,
    height: 32,
    justifyContent: 'center',
    width: 152,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontFamily: fonts.semiBold,
    fontSize: 13,
    letterSpacing: 0.26,
    lineHeight: 16,
  },
  pressed: {
    opacity: 0.86,
  },
});
