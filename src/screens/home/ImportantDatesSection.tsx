import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Svg, {Defs, LinearGradient, Path, Rect, Stop} from 'react-native-svg';
import BirthdayAddBackgroundSvg from '../../images/Birthday_bg_2.svg';
import BirthdayEventSvg from '../../images/birthday_2.svg';
import BirthdayArtworkPhoto from '../../images/birthday_bg_photo.jpg';
import BellThreeSvg from '../../images/bell_3.svg';
import DiplomaEventSvg from '../../images/diploma.svg';
import HeartEventSvg from '../../images/heart.svg';
import IdeaSvg from '../../images/idea.svg';
import OverviewSvg from '../../images/overview.svg';
import PlannerSvg from '../../images/planner.svg';
import SearchGraySvg from '../../images/search_gray.svg';
import SortSvg from '../../images/sort.svg';
import ArrowSvg from '../../images/arrow.svg';
import TrashCompactSvg from '../../images/trash_2.svg';
import {fonts} from '../../theme/fonts';
import {OpenPlaceholder} from './types';

interface ImportantDateEvent {
  id: string;
  title: string;
  month: number;
  day: number;
  year?: number;
  category: string;
  note: string;
  description: string;
  muted?: boolean;
  icon: React.JSX.Element;
}

interface ImportantDateViewModel extends ImportantDateEvent {
  countdownLabel: string;
  dateLabel: string;
  monthLabel: string;
  weekdayLabel: string;
  tone: 'accent' | 'muted';
}

interface ImportantDatesContentProps {
  openPlaceholder: OpenPlaceholder;
}

interface ImportantDatesAddContentProps {
  openPlaceholder: OpenPlaceholder;
  handleDeleteImportantDateEntry: () => void;
}

interface CategoryChipProps {
  active?: boolean;
  label: string;
  onPress: () => void;
  withPlus?: boolean;
}

const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const WEEKDAY_LABELS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function createUtcDate(year: number, month: number, day: number): Date {
  return new Date(Date.UTC(year, month - 1, day));
}

function getTodayUtc(): Date {
  const today = new Date();
  return createUtcDate(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  );
}

function getNextYearlyOccurrence(
  month: number,
  day: number,
  referenceDate: Date,
): Date {
  const referenceYear = referenceDate.getUTCFullYear();
  const candidateDate = createUtcDate(referenceYear, month, day);

  if (candidateDate.getTime() < referenceDate.getTime()) {
    return createUtcDate(referenceYear + 1, month, day);
  }

  return candidateDate;
}

function getCountdownLabel(daysUntil: number): string {
  if (daysUntil <= 0) {
    return 'Today';
  }

  if (daysUntil === 1) {
    return 'Tomorrow';
  }

  return `In ${daysUntil} days`;
}

function buildImportantDateEvents(): ImportantDateViewModel[] {
  const today = getTodayUtc();
  const rawEvents: ImportantDateEvent[] = [
    {
      id: 'mums-birthday',
      title: "Mum's Birthday",
      month: 6,
      day: 12,
      category: 'Family',
      note: 'Every year',
      description:
        "Time to celebrate! Prepare a special surprise for the person who deserves it most. Don't forget the gift!",
      icon: <BirthdayEventSvg width={49} height={56} />,
    },
    {
      id: 'wedding-anniversary',
      title: 'Wedding Anniversary',
      month: 7,
      day: 8,
      category: 'Personal',
      note: 'Major Milestone',
      description:
        'Plan something memorable together and make time for a meaningful celebration.',
      icon: <HeartEventSvg width={42} height={56} />,
    },
    {
      id: 'graduation-ceremony',
      title: 'Graduation Ceremony',
      month: 9,
      day: 15,
      year: 2026,
      category: 'Career',
      note: 'One-time',
      description:
        'A major achievement is coming up. Keep the calendar clear and make space for the celebration.',
      muted: true,
      icon: <DiplomaEventSvg width={42} height={56} />,
    },
  ];

  const eventViewModels: ImportantDateViewModel[] = rawEvents.map(event => {
    const occurrenceDate = event.year
      ? createUtcDate(event.year, event.month, event.day)
      : getNextYearlyOccurrence(event.month, event.day, today);
    const daysUntil = Math.max(
      0,
      Math.round(
        (occurrenceDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
      ),
    );
    const tone: ImportantDateViewModel['tone'] = event.muted
      ? 'muted'
      : 'accent';

    return {
      ...event,
      countdownLabel: getCountdownLabel(daysUntil),
      dateLabel: `${event.day} ${MONTH_LABELS[event.month - 1]}`,
      monthLabel: MONTH_LABELS[event.month - 1],
      weekdayLabel: WEEKDAY_LABELS[occurrenceDate.getUTCDay()],
      tone,
    };
  });

  return eventViewModels.sort((firstEvent, secondEvent) => {
    const firstDate = firstEvent.year
      ? createUtcDate(firstEvent.year, firstEvent.month, firstEvent.day)
      : getNextYearlyOccurrence(firstEvent.month, firstEvent.day, today);
    const secondDate = secondEvent.year
      ? createUtcDate(secondEvent.year, secondEvent.month, secondEvent.day)
      : getNextYearlyOccurrence(secondEvent.month, secondEvent.day, today);

    return firstDate.getTime() - secondDate.getTime();
  });
}

function SearchButton({onPress}: {onPress: () => void}): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.searchButton,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <SearchGraySvg width={18} height={18} />
    </Pressable>
  );
}

function KebabIcon(): React.JSX.Element {
  return (
    <View style={styles.kebabIcon}>
      <View style={styles.kebabDot} />
      <View style={styles.kebabDot} />
      <View style={styles.kebabDot} />
    </View>
  );
}

function HeroMilestoneIcon(): React.JSX.Element {
  return (
    <Svg width={18} height={20} viewBox="0 0 11 12" fill="none">
      <Path
        d="M0.583333 11.6667C0.418056 11.6667 0.279514 11.6108 0.167708 11.499C0.0559028 11.3872 0 11.2486 0 11.0833V8.16667C0 7.84583 0.114236 7.57118 0.342708 7.34271C0.571181 7.11424 0.845833 7 1.16667 7V4.66667C1.16667 4.34583 1.2809 4.07118 1.50937 3.84271C1.73785 3.61424 2.0125 3.5 2.33333 3.5H4.66667V2.65417C4.49167 2.5375 4.35069 2.39653 4.24375 2.23125C4.13681 2.06597 4.08333 1.86667 4.08333 1.63333C4.08333 1.4875 4.1125 1.3441 4.17083 1.20312C4.22917 1.06215 4.31667 0.933333 4.43333 0.816667L5.25 0L6.06667 0.816667C6.18333 0.933333 6.27083 1.06215 6.32917 1.20312C6.3875 1.3441 6.41667 1.4875 6.41667 1.63333C6.41667 1.86667 6.36319 2.06597 6.25625 2.23125C6.14931 2.39653 6.00833 2.5375 5.83333 2.65417V3.5H8.16667C8.4875 3.5 8.76215 3.61424 8.99063 3.84271C9.2191 4.07118 9.33333 4.34583 9.33333 4.66667V7C9.65417 7 9.92882 7.11424 10.1573 7.34271C10.3858 7.57118 10.5 7.84583 10.5 8.16667V11.0833C10.5 11.2486 10.4441 11.3872 10.3323 11.499C10.2205 11.6108 10.0819 11.6667 9.91667 11.6667H0.583333ZM2.33333 7H8.16667V4.66667H2.33333V7ZM1.16667 10.5H9.33333V8.16667H1.16667V10.5Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

function PlusTinyIcon(): React.JSX.Element {
  return (
    <View style={styles.plusTinyIcon}>
      <View style={styles.plusTinyIconVertical} />
      <View style={styles.plusTinyIconHorizontal} />
    </View>
  );
}

function CategoryChip({
  active = false,
  label,
  onPress,
  withPlus = false,
}: CategoryChipProps): React.JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.addCategoryChip,
        active ? styles.addCategoryChipActive : null,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      {withPlus ? <PlusTinyIcon /> : null}
      <Text
        style={[
          styles.addCategoryChipText,
          active ? styles.addCategoryChipTextActive : null,
          withPlus ? styles.addCategoryChipTextWithIcon : null,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

function EventMenuButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      accessibilityLabel={`${label} actions`}
      style={({pressed}) => [
        styles.eventMenuButton,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}>
      <KebabIcon />
    </Pressable>
  );
}

export function ImportantDatesContent({
  openPlaceholder,
}: ImportantDatesContentProps): React.JSX.Element {
  const events = buildImportantDateEvents();
  const featuredEvent = events[0];

  return (
    <View style={styles.page}>
      <View style={styles.heroSection}>
        <View style={styles.heroCard}>
          <View style={styles.heroGlow} />

          <View style={styles.heroCopy}>
            <Text style={styles.heroEyebrow}>COMING UP NEXT</Text>
            <Text style={styles.heroTitle}>{featuredEvent.title}</Text>
            <Text style={styles.heroBody}>{featuredEvent.description}</Text>
          </View>

          <View style={styles.heroFooter}>
            <View style={styles.heroDateBadge}>
              <Text style={styles.heroDateDay}>{featuredEvent.day}</Text>
              <Text style={styles.heroDateMonth}>
                {featuredEvent.monthLabel}
              </Text>
            </View>

            <View style={styles.heroDivider} />

            <View style={styles.heroMeta}>
              <Text style={styles.heroCountdown}>
                {featuredEvent.countdownLabel}
              </Text>
              <Text style={styles.heroWeekday}>
                {featuredEvent.weekdayLabel}
              </Text>
            </View>
          </View>

          <View style={styles.heroArtwork}>
            <View style={styles.heroArtworkCard}>
              <Image
                source={BirthdayArtworkPhoto}
                style={styles.heroArtworkImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View style={styles.overviewCard}>
          <OverviewSvg width={27} height={30} />
          <Text style={styles.overviewTitle}>Registry Overview</Text>
          <Text style={styles.overviewBody}>
            You have 12 active milestones this year.
          </Text>

          <View style={styles.progressBlock}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Yearly Completion</Text>
              <Text style={styles.progressValue}>42%</Text>
            </View>

            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.eventsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>

          <View style={styles.sectionActions}>
            <Pressable
              style={({pressed}) => [pressed ? styles.pressed : null]}
              onPress={() => openPlaceholder('Sort important dates')}>
              <SortSvg width={36} height={30} />
            </Pressable>

            <SearchButton
              onPress={() => openPlaceholder('Search important dates')}
            />
          </View>
        </View>

        <View style={styles.eventsList}>
          {events.map(event => (
            <Pressable
              key={event.id}
              style={({pressed}) => [
                styles.eventCard,
                event.muted ? styles.eventCardMuted : null,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => openPlaceholder(event.title)}>
              <View style={styles.eventCardLeft}>
                <View style={styles.eventIconWrap}>{event.icon}</View>

                <View style={styles.eventTextWrap}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventMeta}>
                    {event.dateLabel} - {event.category}
                  </Text>
                </View>
              </View>

              <View style={styles.eventCardRight}>
                <View style={styles.eventBadgeColumn}>
                  <Text
                    style={[
                      styles.eventCountdown,
                      event.tone === 'muted'
                        ? styles.eventCountdownMuted
                        : null,
                    ]}>
                    {event.countdownLabel}
                  </Text>
                  <Text style={styles.eventNote}>{event.note}</Text>
                </View>

                <EventMenuButton
                  label={event.title}
                  onPress={() => openPlaceholder(`${event.title} actions`)}
                />
              </View>
            </Pressable>
          ))}
        </View>
      </View>

      <Pressable
        style={({pressed}) => [
          styles.automationCard,
          pressed ? styles.pressed : null,
        ]}
        onPress={() => openPlaceholder('Configure automation')}>
        <IdeaSvg width={64} height={64} />

        <Text style={styles.automationTitle}>Stay Proactive</Text>
        <Text style={styles.automationBody}>
          Log4Life can automatically suggest gift ideas or book reservations
          based on your upcoming dates.
        </Text>
        <Text style={styles.automationLink}>Configure Automation</Text>
      </Pressable>
    </View>
  );
}

export function ImportantDatesAddContent({
  openPlaceholder,
  handleDeleteImportantDateEntry,
}: ImportantDatesAddContentProps): React.JSX.Element {
  const [eventName, setEventName] = useState("Mum's Birthday");
  const [eventDate, setEventDate] = useState('12 Jun');
  const [recurrence, setRecurrence] = useState('Every Year');
  const [isRecurrenceDropdownOpen, setIsRecurrenceDropdownOpen] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Family');
  const [isReminderEnabled, setIsReminderEnabled] = useState(true);
  const [notes, setNotes] = useState(
    'Remember to call earlier in the day. She mentioned wanting a first edition of her favorite book.',
  );

  const recurrenceOptions = ['Every Year', 'Every Month', 'One-Time'];
  const categoryOptions = ['Family', 'Work', 'Health', 'Finance'];

  return (
    <View style={styles.addPage}>
      <View style={styles.addHeroCard}>
        <BirthdayAddBackgroundSvg
          width="100%"
          height="100%"
          style={styles.addHeroArtwork}
        />

        <Svg style={styles.addHeroGradient} viewBox="0 0 358 192">
          <Defs>
            <LinearGradient
              id="importantDatesAddOverlay"
              x1="179"
              y1="192"
              x2="179"
              y2="0"
              gradientUnits="userSpaceOnUse">
              <Stop offset="0" stopColor="#000000" stopOpacity={0.6} />
              <Stop offset="1" stopColor="#000000" stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Rect width="358" height="192" fill="url(#importantDatesAddOverlay)" />
        </Svg>

        <View style={styles.addHeroFooter}>
          <View style={styles.addHeroTagRow}>
            <HeroMilestoneIcon />

            <View style={styles.addHeroPill}>
              <Text style={styles.addHeroPillText}>FAMILY MILESTONE</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.addFormCard}>
        <View style={styles.addFieldBlock}>
          <Text style={styles.addFieldLabel}>Event Name</Text>
          <View style={styles.addInputShell}>
            <TextInput
              style={styles.addInput}
              value={eventName}
              onChangeText={text => {
                setEventName(text);
                setIsRecurrenceDropdownOpen(false);
              }}
              placeholder="Event name"
              placeholderTextColor="#98A2B3"
              autoCapitalize="words"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>

        <View style={styles.addGridBlock}>
          <View style={styles.addFieldBlock}>
            <Text style={styles.addFieldLabel}>Date</Text>
            <View style={styles.addInputShell}>
              <TextInput
                style={styles.addInput}
                value={eventDate}
                onChangeText={text => {
                  setEventDate(text);
                  setIsRecurrenceDropdownOpen(false);
                }}
                placeholder="12 Jun"
                placeholderTextColor="#98A2B3"
                autoCapitalize="words"
                autoCorrect={false}
                selectionColor="#0A5688"
              />
              <View style={styles.addTrailingIcon}>
                <PlannerSvg width={18} height={20} />
              </View>
            </View>
          </View>

          <View style={styles.addFieldBlockLast}>
            <Text style={styles.addFieldLabel}>Recurrence</Text>
            <Pressable
              style={({pressed}) => [
                styles.addSelectShell,
                pressed ? styles.pressed : null,
              ]}
              onPress={() =>
                setIsRecurrenceDropdownOpen(currentValue => !currentValue)
              }>
              <Text style={styles.addSelectValue}>{recurrence}</Text>
              <View
                style={[
                  styles.addSelectArrowWrap,
                  isRecurrenceDropdownOpen ? styles.addSelectArrowWrapOpen : null,
                ]}>
                <ArrowSvg width={8} height={12} />
              </View>
            </Pressable>

            {isRecurrenceDropdownOpen ? (
              <View style={styles.addSelectDropdown}>
                {recurrenceOptions.map(option => (
                  <Pressable
                    key={option}
                    style={({pressed}) => [
                      styles.addSelectOption,
                      recurrence === option ? styles.addSelectOptionActive : null,
                      pressed ? styles.pressed : null,
                    ]}
                    onPress={() => {
                      setRecurrence(option);
                      setIsRecurrenceDropdownOpen(false);
                    }}>
                    <Text
                      style={[
                        styles.addSelectOptionText,
                        recurrence === option
                          ? styles.addSelectOptionTextActive
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

        <View style={styles.addCategoryBlock}>
          <Text style={styles.addFieldLabel}>Category</Text>
          <View style={styles.addCategoryWrap}>
            {categoryOptions.map(category => (
              <CategoryChip
                key={category}
                active={selectedCategory === category}
                label={category}
                onPress={() => {
                  setSelectedCategory(category);
                  setIsRecurrenceDropdownOpen(false);
                }}
              />
            ))}

            <CategoryChip
              label="New"
              withPlus
              onPress={() => {
                setIsRecurrenceDropdownOpen(false);
                openPlaceholder('Create a custom category');
              }}
            />
          </View>
        </View>

        <Pressable
          style={({pressed}) => [
            styles.addReminderCard,
            pressed ? styles.pressed : null,
          ]}
          onPress={() => {
            setIsRecurrenceDropdownOpen(false);
            setIsReminderEnabled(currentValue => !currentValue);
          }}>
          <View style={styles.addReminderLeft}>
            <BellThreeSvg width={20} height={21} />
            <View style={styles.addReminderCopy}>
              <Text style={styles.addReminderTitle}>Reminder</Text>
              <Text style={styles.addReminderSubtitle}>
                Early warning (1 week before)
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.addReminderToggle,
              isReminderEnabled ? styles.addReminderToggleActive : null,
            ]}>
            <View
              style={[
                styles.addReminderThumb,
                isReminderEnabled ? styles.addReminderThumbActive : null,
              ]}
            />
          </View>
        </Pressable>

        <View style={styles.addNotesBlock}>
          <Text style={styles.addFieldLabel}>Notes</Text>
          <View style={styles.addNotesShell}>
            <TextInput
              style={styles.addNotesInput}
              value={notes}
              onChangeText={text => {
                setNotes(text);
                setIsRecurrenceDropdownOpen(false);
              }}
              placeholder="Add notes for this important date..."
              placeholderTextColor="#98A2B3"
              multiline
              textAlignVertical="top"
              autoCorrect={false}
              selectionColor="#0A5688"
            />
          </View>
        </View>
      </View>

      <View style={styles.addDeleteSection}>
        <Pressable
          style={({pressed}) => [
            styles.addDeleteButton,
            pressed ? styles.pressed : null,
          ]}
          onPress={handleDeleteImportantDateEntry}>
          <TrashCompactSvg width={16} height={18} />
          <Text style={styles.addDeleteButtonText}>Delete Entry</Text>
        </Pressable>

        <Text style={styles.addCreatedText}>Created on Jan 14, 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    paddingHorizontal: 0,
    paddingTop: 10,
  },
  heroSection: {
    width: '100%',
    marginBottom: 32,
  },
  heroCard: {
    width: '100%',
    minHeight: 262,
    borderRadius: 12,
    backgroundColor: '#2C5F8A',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute',
    top: -48,
    right: -48,
    width: 256,
    height: 256,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  heroArtwork: {
    position: 'absolute',
    right: 20,
    top: 82,
    zIndex: 0,
  },
  heroArtworkCard: {
    width: 156,
    height: 156,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 10,
    transform: [{rotate: '3deg'}],
  },
  heroArtworkImage: {
    width: '100%',
    height: '100%',
  },
  heroCopy: {
    width: '100%',
    zIndex: 2,
  },
  heroEyebrow: {
    color: '#B3D8FF',
    opacity: 0.8,
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 1.3,
  },
  heroTitle: {
    marginTop: 8,
    color: '#B3D8FF',
    fontSize: 28,
    fontFamily: fonts.bold,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  heroBody: {
    marginTop: 6,
    color: '#B3D8FF',
    opacity: 0.9,
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  heroFooter: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  heroDateBadge: {
    width: 73,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#FEB234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroDateDay: {
    color: '#291800',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  heroDateMonth: {
    color: '#291800',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  heroDivider: {
    width: 1,
    height: 48,
    marginHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  heroMeta: {
    flex: 1,
    minWidth: 0,
  },
  heroCountdown: {
    color: '#B3D8FF',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  heroWeekday: {
    marginTop: 1,
    color: '#B3D8FF',
    opacity: 0.8,
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  overviewCard: {
    width: '100%',
    minHeight: 198,
    marginTop: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDE5EE',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    paddingHorizontal: 24,
    paddingVertical: 24,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  overviewTitle: {
    marginTop: 12,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  overviewBody: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  progressBlock: {
    marginTop: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressLabel: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  progressValue: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    marginTop: 16,
    borderRadius: 999,
    backgroundColor: '#D6EBF8',
    overflow: 'hidden',
  },
  progressFill: {
    width: '42%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#094771',
  },
  eventsSection: {
    width: '100%',
    marginBottom: 32,
  },
  sectionHeader: {
    width: '100%',
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  sectionActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    width: 36,
    height: 36,
    marginLeft: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#F4FAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventsList: {
    width: '100%',
  },
  eventCard: {
    width: '100%',
    minHeight: 104,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  eventCardMuted: {
    opacity: 0.7,
  },
  eventCardLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 14,
  },
  eventIconWrap: {
    marginRight: 16,
  },
  eventTextWrap: {
    flex: 1,
    minWidth: 0,
  },
  eventTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  eventMeta: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  eventCardRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  eventBadgeColumn: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  eventCountdown: {
    color: '#9A6A00',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    textAlign: 'right',
  },
  eventCountdownMuted: {
    color: '#72777F',
  },
  eventNote: {
    marginTop: 1,
    maxWidth: 74,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textAlign: 'right',
  },
  eventMenuButton: {
    width: 20,
    minHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kebabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  kebabDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#72777F',
    marginVertical: 1.5,
  },
  automationCard: {
    width: '100%',
    minHeight: 242,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#C2C7CF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    marginBottom: 8,
  },
  automationTitle: {
    marginTop: 18,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    textAlign: 'center',
  },
  automationBody: {
    marginTop: 12,
    maxWidth: 310,
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    textAlign: 'center',
  },
  automationLink: {
    marginTop: 24,
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  addPage: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 8,
  },
  addHeroCard: {
    width: '100%',
    height: 192,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.002)',
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  addHeroArtwork: {
    ...StyleSheet.absoluteFillObject,
    transform: [{scale: 1.06}],
  },
  addHeroGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  addHeroFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  addHeroTagRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addHeroPill: {
    height: 24,
    marginLeft: 8,
    borderRadius: 9999,
    backgroundColor: '#2C5F8A',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addHeroPillText: {
    color: '#B3D8FF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.65,
  },
  addFormCard: {
    width: '100%',
    marginTop: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C2C7CF',
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
  addFieldBlock: {
    width: '100%',
    marginBottom: 24,
  },
  addFieldBlockLast: {
    width: '100%',
  },
  addGridBlock: {
    width: '100%',
    marginBottom: 24,
  },
  addFieldLabel: {
    marginBottom: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  addInputShell: {
    width: '100%',
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addInput: {
    flex: 1,
    minHeight: 22,
    paddingVertical: 0,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  addTrailingIcon: {
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addSelectShell: {
    width: '100%',
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addSelectValue: {
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  addSelectArrowWrap: {
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '90deg'}],
  },
  addSelectArrowWrapOpen: {
    transform: [{rotate: '-90deg'}],
  },
  addSelectDropdown: {
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D7DEE6',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  addSelectOption: {
    minHeight: 46,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  addSelectOptionActive: {
    backgroundColor: '#E7F6FF',
  },
  addSelectOptionText: {
    color: '#42474E',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  addSelectOptionTextActive: {
    color: '#094771',
    fontFamily: fonts.semiBold,
  },
  addCategoryBlock: {
    width: '100%',
    marginBottom: 24,
  },
  addCategoryWrap: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addCategoryChip: {
    minWidth: 84,
    height: 34,
    borderRadius: 9999,
    backgroundColor: '#D1E6F2',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  addCategoryChipActive: {
    backgroundColor: '#2C5F8A',
    borderWidth: 1,
    borderColor: '#2C5F8A',
  },
  addCategoryChipText: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  addCategoryChipTextActive: {
    color: '#B3D8FF',
  },
  addCategoryChipTextWithIcon: {
    marginLeft: 4,
  },
  plusTinyIcon: {
    width: 9,
    height: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusTinyIconVertical: {
    position: 'absolute',
    width: 1.5,
    height: 8.75,
    borderRadius: 1,
    backgroundColor: '#42474E',
  },
  plusTinyIconHorizontal: {
    width: 8.75,
    height: 1.5,
    borderRadius: 1,
    backgroundColor: '#42474E',
  },
  addReminderCard: {
    width: '100%',
    minHeight: 72,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#E7F6FF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  addReminderLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  addReminderCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: 16,
  },
  addReminderTitle: {
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 22,
  },
  addReminderSubtitle: {
    marginTop: 2,
    color: '#42474E',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
  },
  addReminderToggle: {
    width: 44,
    height: 24,
    borderRadius: 9999,
    backgroundColor: '#C9D8E6',
    paddingHorizontal: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  addReminderToggleActive: {
    backgroundColor: '#094771',
    alignItems: 'flex-end',
  },
  addReminderThumb: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  addReminderThumbActive: {
    backgroundColor: '#FFFFFF',
  },
  addNotesBlock: {
    width: '100%',
  },
  addNotesShell: {
    width: '100%',
    minHeight: 114,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  addNotesInput: {
    flex: 1,
    minHeight: 88,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  addDeleteSection: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 8,
  },
  addDeleteButton: {
    minHeight: 42,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addDeleteButtonText: {
    marginLeft: 8,
    color: '#BA1A1A',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textAlign: 'center',
  },
  addCreatedText: {
    marginTop: 8,
    color: '#72777F',
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
    letterSpacing: 0.12,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.86,
  },
});
