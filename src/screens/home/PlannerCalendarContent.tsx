import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DateCriticalSvg from '../../images/date_critical.svg';
import FamilySvg from '../../images/family.svg';
import GymSvg from '../../images/gym.svg';
import LeftSvg from '../../images/left.svg';
import PlannerFocusSvg from '../../images/Planner Focus.svg';
import PlusSvg from '../../images/plus.svg';
import Right1Svg from '../../images/right_1.svg';
import SessionSvg from '../../images/session.svg';
import {fonts} from '../../theme/fonts';

type CalendarEventKind = 'session' | 'checkIn' | 'family' | 'priority';

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  dateKey: string;
  kind: CalendarEventKind;
}

interface CalendarDayCell {
  dateKey: string;
  dayNumber: number;
  isCurrentMonth: boolean;
}

const STORAGE_KEY = 'planner-calendar-events-v1';
const DEFAULT_SELECTED_DATE_KEY = '2026-09-06';
const WEEKDAY_LABELS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const WEEKDAY_FULL_LABELS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const MONTH_LABELS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const MONTH_SHORT_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const DEFAULT_EVENTS: CalendarEvent[] = [
  {
    id: 'weekly-reset',
    title: 'Weekly Reset',
    time: '08:00 AM',
    description: 'Review priorities and set the tone for the week.',
    dateKey: '2026-09-02',
    kind: 'checkIn',
  },
  {
    id: 'strategy-prep',
    title: 'Strategy Prep',
    time: '10:15 AM',
    description: 'Review agenda and sharpen next-quarter talking points.',
    dateKey: '2026-09-04',
    kind: 'session',
  },
  {
    id: 'renewal-review',
    title: 'Renewal Review',
    time: '03:30 PM',
    description: 'Check time-sensitive renewals and personal admin items.',
    dateKey: '2026-09-04',
    kind: 'priority',
  },
  {
    id: 'strategy-session',
    title: 'Strategy Session',
    time: '09:30 AM',
    description: 'Q4 life planning and goal alignment.',
    dateKey: '2026-09-06',
    kind: 'session',
  },
  {
    id: 'health-check-in',
    title: 'Health Check-in',
    time: '12:00 PM',
    description: 'Biometric tracking and weekly health notes.',
    dateKey: '2026-09-06',
    kind: 'checkIn',
  },
  {
    id: 'family-sync',
    title: 'Family Sync',
    time: '06:00 PM',
    description: 'Coordinate weekend schedules.',
    dateKey: '2026-09-06',
    kind: 'family',
  },
];

function createDateKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${date.getFullYear()}-${month}-${day}`;
}

function parseDateKey(dateKey: string): Date {
  const [year, month, day] = dateKey.split('-').map(Number);

  return new Date(year, month - 1, day);
}

function getMonthAnchor(dateKey: string): Date {
  const date = parseDateKey(dateKey);

  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(monthDate: Date, delta: number): Date {
  return new Date(monthDate.getFullYear(), monthDate.getMonth() + delta, 1);
}

function getDaysInMonth(monthDate: Date): number {
  return new Date(
    monthDate.getFullYear(),
    monthDate.getMonth() + 1,
    0,
  ).getDate();
}

function buildCalendarDays(monthDate: Date): CalendarDayCell[] {
  const monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const daysInMonth = getDaysInMonth(monthDate);
  const leadingDays = monthStart.getDay();
  const totalCells = Math.ceil((leadingDays + daysInMonth) / 7) * 7;
  const firstGridDate = new Date(monthStart);

  firstGridDate.setDate(monthStart.getDate() - leadingDays);

  return Array.from({length: totalCells}, (_, index) => {
    const date = new Date(firstGridDate);
    date.setDate(firstGridDate.getDate() + index);

    return {
      dateKey: createDateKey(date),
      dayNumber: date.getDate(),
      isCurrentMonth: date.getMonth() === monthDate.getMonth(),
    };
  });
}

function formatMonthLabel(monthDate: Date): string {
  return `${MONTH_LABELS[monthDate.getMonth()]} ${monthDate.getFullYear()}`;
}

function formatScheduleDate(dateKey: string): string {
  const date = parseDateKey(dateKey);
  const weekday = WEEKDAY_FULL_LABELS[date.getDay()];
  const month = MONTH_SHORT_LABELS[date.getMonth()];

  return `${weekday}, ${month} ${date.getDate()}, ${date.getFullYear()}`;
}

function getTimeSortValue(time: string): number {
  const match = time.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);

  if (!match) {
    return Number.MAX_SAFE_INTEGER;
  }

  let hours = Number(match[1]) % 12;
  const minutes = Number(match[2]);

  if (match[3].toUpperCase() === 'PM') {
    hours += 12;
  }

  return hours * 60 + minutes;
}

function sortEvents(events: CalendarEvent[]): CalendarEvent[] {
  return [...events].sort((left, right) => {
    if (left.dateKey !== right.dateKey) {
      return left.dateKey.localeCompare(right.dateKey);
    }

    return getTimeSortValue(left.time) - getTimeSortValue(right.time);
  });
}

function normalizeTimeInput(value: string): string | null {
  const match = value.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*([ap]m)$/i);

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2] ?? '00');

  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
    return null;
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0',
  )} ${match[3].toUpperCase()}`;
}

function isCalendarEventKind(value: unknown): value is CalendarEventKind {
  return (
    value === 'session' ||
    value === 'checkIn' ||
    value === 'family' ||
    value === 'priority'
  );
}

function isCalendarEvent(value: unknown): value is CalendarEvent {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as CalendarEvent;

  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.time === 'string' &&
    typeof candidate.description === 'string' &&
    typeof candidate.dateKey === 'string' &&
    isCalendarEventKind(candidate.kind)
  );
}

function getDotColor(kind: CalendarEventKind): string {
  if (kind === 'session') {
    return '#094771';
  }

  if (kind === 'priority') {
    return '#BA1A1A';
  }

  return '#815500';
}

function CalendarEventIcon({
  kind,
}: {
  kind: CalendarEventKind;
}): React.JSX.Element {
  if (kind === 'session') {
    return <SessionSvg width={36} height={35} />;
  }

  if (kind === 'checkIn') {
    return <GymSvg width={36} height={35} />;
  }

  if (kind === 'family') {
    return <FamilySvg width={36.5} height={36} />;
  }

  return (
    <View style={styles.priorityIconChip}>
      <DateCriticalSvg width={14} height={15} />
    </View>
  );
}

export function PlannerCalendarContent(): React.JSX.Element {
  const [visibleMonth, setVisibleMonth] = useState(() =>
    getMonthAnchor(DEFAULT_SELECTED_DATE_KEY),
  );
  const [selectedDateKey, setSelectedDateKey] = useState(
    DEFAULT_SELECTED_DATE_KEY,
  );
  const [events, setEvents] = useState<CalendarEvent[]>(DEFAULT_EVENTS);
  const [hasLoadedEvents, setHasLoadedEvents] = useState(false);
  const [isComposerVisible, setIsComposerVisible] = useState(false);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftTime, setDraftTime] = useState('09:00 AM');
  const [draftDescription, setDraftDescription] = useState('');
  const [draftKind, setDraftKind] = useState<CalendarEventKind>('session');

  useEffect(() => {
    let isMounted = true;

    const loadEvents = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(STORAGE_KEY);

        if (!storedValue) {
          return;
        }

        const parsedValue: unknown = JSON.parse(storedValue);

        if (Array.isArray(parsedValue) && parsedValue.every(isCalendarEvent)) {
          if (isMounted) {
            setEvents(sortEvents(parsedValue));
          }
        }
      } catch {
        // Fall back to the seeded planner events if local data is unavailable.
      } finally {
        if (isMounted) {
          setHasLoadedEvents(true);
        }
      }
    };

    loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!hasLoadedEvents) {
      return;
    }

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(events)).catch(() => {
      // The in-memory planner still works even if persistence is temporarily unavailable.
    });
  }, [events, hasLoadedEvents]);

  const calendarDays = buildCalendarDays(visibleMonth);
  const selectedEvents = sortEvents(
    events.filter(event => event.dateKey === selectedDateKey),
  );

  const resetComposer = () => {
    setDraftTitle('');
    setDraftTime('09:00 AM');
    setDraftDescription('');
    setDraftKind('session');
    setIsComposerVisible(false);
  };

  const handleMoveMonth = (delta: number) => {
    const nextMonth = addMonths(visibleMonth, delta);
    const currentSelectedDate = parseDateKey(selectedDateKey);
    const clampedDay = Math.min(
      currentSelectedDate.getDate(),
      getDaysInMonth(nextMonth),
    );
    const nextSelectedDate = new Date(
      nextMonth.getFullYear(),
      nextMonth.getMonth(),
      clampedDay,
    );

    setVisibleMonth(nextMonth);
    setSelectedDateKey(createDateKey(nextSelectedDate));
  };

  const handleSelectDay = (dateKey: string) => {
    setSelectedDateKey(dateKey);
    setVisibleMonth(getMonthAnchor(dateKey));
  };

  const handleSaveEvent = () => {
    const nextTitle = draftTitle.trim();
    const nextTime = normalizeTimeInput(draftTime);
    const nextDescription =
      draftDescription.trim() || 'Personal planning item for this date.';

    if (!nextTitle) {
      Alert.alert('Missing title', 'Add a short event title before saving.');
      return;
    }

    if (!nextTime) {
      Alert.alert(
        'Invalid time',
        'Use a time like 09:30 AM or 6:00 PM so the schedule can sort correctly.',
      );
      return;
    }

    setEvents(currentEvents =>
      sortEvents([
        ...currentEvents,
        {
          id: `${selectedDateKey}-${Date.now()}`,
          title: nextTitle,
          time: nextTime,
          description: nextDescription,
          dateKey: selectedDateKey,
          kind: draftKind,
        },
      ]),
    );
    resetComposer();
  };

  return (
    <View style={styles.root}>
      <View style={styles.calendarCard}>
        <View style={styles.calendarHeaderRow}>
          <Text style={styles.calendarTitle}>
            {formatMonthLabel(visibleMonth)}
          </Text>

          <View style={styles.calendarNavRow}>
            <Pressable
              style={({pressed}) => [
                styles.calendarNavButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => handleMoveMonth(-1)}>
              <LeftSvg width={16} height={16} />
            </Pressable>

            <Pressable
              style={({pressed}) => [
                styles.calendarNavButton,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => handleMoveMonth(1)}>
              <Right1Svg width={16} height={16} />
            </Pressable>
          </View>
        </View>

        <View style={styles.calendarWeekdayRow}>
          {WEEKDAY_LABELS.map(label => (
            <View key={label} style={styles.calendarWeekdayCell}>
              <Text style={styles.calendarWeekdayLabel}>{label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.calendarGrid}>
          {calendarDays.map((day, index) => {
            const isSelected = day.dateKey === selectedDateKey;
            const dayEvents = sortEvents(
              events.filter(event => event.dateKey === day.dateKey),
            ).slice(0, 2);
            const isLastColumn = (index + 1) % 7 === 0;
            const isLastRow = index >= calendarDays.length - 7;

            return (
              <Pressable
                key={day.dateKey}
                style={[
                  styles.calendarDayCell,
                  !isLastColumn ? styles.calendarDayCellWithRightBorder : null,
                  !isLastRow ? styles.calendarDayCellWithBottomBorder : null,
                ]}
                onPress={() => handleSelectDay(day.dateKey)}>
                <View
                  style={[
                    styles.calendarDaySurface,
                    isSelected ? styles.calendarDaySurfaceSelected : null,
                  ]}>
                  <Text
                    style={[
                      styles.calendarDayNumber,
                      !day.isCurrentMonth
                        ? styles.calendarDayNumberMuted
                        : null,
                      isSelected ? styles.calendarDayNumberSelected : null,
                    ]}>
                    {day.dayNumber}
                  </Text>

                  <View style={styles.calendarDotRow}>
                    {dayEvents.map(event => (
                      <View
                        key={event.id}
                        style={[
                          styles.calendarDot,
                          {backgroundColor: getDotColor(event.kind)},
                        ]}
                      />
                    ))}
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.scheduleCard}>
        <View style={styles.scheduleHeaderRow}>
          <View style={styles.scheduleHeaderCopy}>
            <Text style={styles.scheduleTitle}>Schedule</Text>
            <Text style={styles.scheduleDate}>
              {formatScheduleDate(selectedDateKey)}
            </Text>
          </View>

          <Pressable
            style={({pressed}) => [
              styles.addEventButton,
              pressed ? styles.pressed : null,
            ]}
            onPress={() => setIsComposerVisible(currentValue => !currentValue)}>
            <PlusSvg width={12} height={12} />
            <Text style={styles.addEventButtonText}>
              {isComposerVisible ? 'Close' : 'Add Event'}
            </Text>
          </Pressable>
        </View>

        {isComposerVisible ? (
          <View style={styles.composerCard}>
            <Text style={styles.composerTitle}>Add event for this date</Text>

            <View style={styles.composerField}>
              <Text style={styles.composerFieldLabel}>Event title</Text>
              <TextInput
                value={draftTitle}
                onChangeText={setDraftTitle}
                placeholder="Strategy Session"
                placeholderTextColor="#72777F"
                style={styles.composerInput}
              />
            </View>

            <View style={styles.composerField}>
              <Text style={styles.composerFieldLabel}>Time</Text>
              <TextInput
                value={draftTime}
                onChangeText={setDraftTime}
                placeholder="09:30 AM"
                placeholderTextColor="#72777F"
                autoCapitalize="characters"
                style={styles.composerInput}
              />
            </View>

            <View style={styles.composerField}>
              <Text style={styles.composerFieldLabel}>Notes</Text>
              <TextInput
                value={draftDescription}
                onChangeText={setDraftDescription}
                placeholder="Short context for the schedule card"
                placeholderTextColor="#72777F"
                multiline
                style={[styles.composerInput, styles.composerInputMultiline]}
              />
            </View>

            <View style={styles.composerField}>
              <Text style={styles.composerFieldLabel}>Type</Text>
              <View style={styles.kindChipRow}>
                {(
                  [
                    {key: 'session', label: 'Session'},
                    {key: 'checkIn', label: 'Check-in'},
                    {key: 'family', label: 'Family'},
                  ] as const
                ).map(option => {
                  const isActive = draftKind === option.key;

                  return (
                    <Pressable
                      key={option.key}
                      style={({pressed}) => [
                        styles.kindChip,
                        isActive ? styles.kindChipActive : null,
                        pressed ? styles.pressed : null,
                      ]}
                      onPress={() => setDraftKind(option.key)}>
                      <Text
                        style={[
                          styles.kindChipText,
                          isActive ? styles.kindChipTextActive : null,
                        ]}>
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            <View style={styles.composerActionsRow}>
              <Pressable
                style={({pressed}) => [
                  styles.composerSecondaryButton,
                  pressed ? styles.pressed : null,
                ]}
                onPress={resetComposer}>
                <Text style={styles.composerSecondaryButtonText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={({pressed}) => [
                  styles.composerPrimaryButton,
                  pressed ? styles.pressed : null,
                ]}
                onPress={handleSaveEvent}>
                <Text style={styles.composerPrimaryButtonText}>Save Event</Text>
              </Pressable>
            </View>
          </View>
        ) : null}

        <View style={styles.eventsList}>
          {selectedEvents.length ? (
            selectedEvents.map(event => (
              <View key={event.id} style={styles.eventCard}>
                <CalendarEventIcon kind={event.kind} />

                <View style={styles.eventCopy}>
                  <View style={styles.eventTitleRow}>
                    <Text style={styles.eventTitle}>{event.title}</Text>
                    <Text style={styles.eventTime}>{event.time}</Text>
                  </View>

                  <Text style={styles.eventDescription} numberOfLines={2}>
                    {event.description}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.emptyStateCard}>
              <Text style={styles.emptyStateTitle}>
                No events scheduled yet
              </Text>
              <Text style={styles.emptyStateBody}>
                Pick this date and use Add Event to create your first planner
                item.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.focusSection}>
          <PlannerFocusSvg width={128} height={128} />
          <Text style={styles.focusBody}>
            Maintain your peak performance through structured life logging and
            proactive planning.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginTop: 24,
  },
  calendarCard: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.2)',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  calendarHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarTitle: {
    color: '#094771',
    fontSize: 22,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
    letterSpacing: -0.22,
  },
  calendarNavRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  calendarNavButton: {
    width: 28,
    height: 28,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarWeekdayRow: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarWeekdayCell: {
    width: '14.2857%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  calendarWeekdayLabel: {
    color: '#72777F',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
    textTransform: 'uppercase',
  },
  calendarGrid: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.1)',
    backgroundColor: 'rgba(194, 199, 207, 0.2)',
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDayCell: {
    width: '14.2857%',
    minHeight: 86,
  },
  calendarDayCellWithRightBorder: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(194, 199, 207, 0.12)',
  },
  calendarDayCellWithBottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(194, 199, 207, 0.12)',
  },
  calendarDaySurface: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 6,
    justifyContent: 'space-between',
  },
  calendarDaySurfaceSelected: {
    backgroundColor: '#E7F6FF',
    borderWidth: 2,
    borderColor: '#2C5F8A',
  },
  calendarDayNumber: {
    color: '#091E27',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  calendarDayNumberMuted: {
    color: 'rgba(114, 119, 127, 0.4)',
  },
  calendarDayNumberSelected: {
    color: '#094771',
    fontFamily: fonts.bold,
  },
  calendarDotRow: {
    minHeight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  calendarDot: {
    width: 6,
    height: 6,
    borderRadius: 9999,
  },
  scheduleCard: {
    width: '100%',
    marginTop: 36,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(194, 199, 207, 0.2)',
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#2C5F8A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  scheduleHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  scheduleHeaderCopy: {
    flex: 1,
    minWidth: 0,
  },
  scheduleTitle: {
    color: '#094771',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  scheduleDate: {
    color: '#72777F',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  addEventButton: {
    minHeight: 32,
    borderRadius: 8,
    backgroundColor: '#815500',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addEventButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  composerCard: {
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7E5F0',
    backgroundColor: '#F8FBFF',
    padding: 16,
  },
  composerTitle: {
    color: '#094771',
    fontSize: 16,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  composerField: {
    marginTop: 16,
  },
  composerFieldLabel: {
    marginBottom: 8,
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  composerInput: {
    minHeight: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  composerInputMultiline: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  kindChipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  kindChip: {
    minHeight: 34,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kindChipActive: {
    borderColor: '#094771',
    backgroundColor: '#094771',
  },
  kindChipText: {
    color: '#42474E',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  kindChipTextActive: {
    color: '#FFFFFF',
  },
  composerActionsRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  composerSecondaryButton: {
    minHeight: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2C7CF',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerSecondaryButtonText: {
    color: '#42474E',
    fontSize: 14,
    fontFamily: fonts.semiBold,
    lineHeight: 18,
  },
  composerPrimaryButton: {
    minHeight: 40,
    borderRadius: 10,
    backgroundColor: '#094771',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerPrimaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: fonts.semiBold,
    lineHeight: 18,
  },
  eventsList: {
    marginTop: 16,
    gap: 16,
  },
  eventCard: {
    minHeight: 82,
    borderRadius: 12,
    backgroundColor: '#F4FAFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  priorityIconChip: {
    width: 36,
    height: 35,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 218, 214, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventCopy: {
    flex: 1,
    minWidth: 0,
  },
  eventTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
  },
  eventTitle: {
    flex: 1,
    color: '#091E27',
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  eventTime: {
    color: '#094771',
    fontSize: 13,
    fontFamily: fonts.semiBold,
    lineHeight: 16,
    letterSpacing: 0.26,
  },
  eventDescription: {
    marginTop: 4,
    color: '#72777F',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  emptyStateCard: {
    borderRadius: 12,
    backgroundColor: '#F4FAFF',
    padding: 16,
  },
  emptyStateTitle: {
    color: '#091E27',
    fontSize: 16,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  emptyStateBody: {
    marginTop: 4,
    color: '#72777F',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },
  focusSection: {
    marginTop: 16,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(194, 199, 207, 0.3)',
    alignItems: 'center',
  },
  focusBody: {
    maxWidth: 262,
    marginTop: 16,
    color: '#72777F',
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 22,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.86,
  },
});
