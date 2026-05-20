import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import ArrowSvg from '../../images/arrow.svg';
import BankTwoSvg from '../../images/bank_2.svg';
import CardPatternSvg from '../../images/card.svg';
import CardTwoSvg from '../../images/card_2.svg';
import CardTwoPrimarySvg from '../../images/card_2_primary.svg';
import MoneySvg from '../../images/money.svg';
import NetflixSvg from '../../images/netflix.svg';
import NetflixOneSvg from '../../images/netflix_1.svg';
import PlannerPrimarySvg from '../../images/planner_primary.svg';
import RecurrentSvg from '../../images/recurrent.svg';
import RingBellSvg from '../../images/ring_bell.svg';
import SavingSvg from '../../images/saving.svg';
import SkyBroadbandSvg from '../../images/sky_broadband.svg';
import SpotifySvg from '../../images/spotify.svg';
import TrashCompactSvg from '../../images/trash_2.svg';
import UpcomingSvg from '../../images/upcoming.svg';
import WifiSvg from '../../images/wi-fi.svg';
import {HomeScreenStyles, OpenPlaceholder} from './types';

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

interface RecurringPaymentsContentProps {
  styles: HomeScreenStyles;
  openPlaceholder: OpenPlaceholder;
}

interface RecurringPaymentsAddContentProps {
  styles: HomeScreenStyles;
  recurringDraftAmount: string;
  recurringDraftPaymentMethod: string;
  isRecurringPaymentMethodDropdownOpen: boolean;
  recurringPaymentMethodOptions: string[];
  recurringDraftFrequency: string;
  isRecurringFrequencyDropdownOpen: boolean;
  recurringFrequencyOptions: string[];
  recurringDraftNextDueDate: string;
  recurringDraftNotes: string;
  recurringDraftSmartReminder: boolean;
  closeRecurringDropdowns: () => void;
  handleRecurringAmountChange: (value: string) => void;
  handleToggleRecurringPaymentMethod: () => void;
  handleSelectRecurringPaymentMethod: (paymentMethod: string) => void;
  handleToggleRecurringFrequency: () => void;
  handleSelectRecurringFrequency: (frequency: string) => void;
  handleRecurringNextDueDateChange: (value: string) => void;
  handleToggleRecurringSmartReminder: () => void;
  handleRecurringNotesChange: (value: string) => void;
  handleDeleteRecurringEntry: () => void;
}

function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`;
}

function RecurringSubscriptionCard({
  styles,
  name,
  plan,
  amount,
  dueLabel,
  paymentMethod,
  serviceIcon,
  paymentMethodIcon,
  onPress,
}: RecurringSubscriptionData & {
  styles: HomeScreenStyles;
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
              <Text style={styles.recurringSubscriptionDueLabel}>{dueLabel}</Text>
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
  styles,
  label,
  body,
  accentColor,
  labelColor,
  icon,
}: RecurringInsightData & {
  styles: HomeScreenStyles;
}): React.JSX.Element {
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

export function RecurringPaymentsContent({
  styles,
  openPlaceholder,
}: RecurringPaymentsContentProps): React.JSX.Element {
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

  return (
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
            styles={styles}
            {...subscription}
            onPress={() => openPlaceholder(subscription.name)}
          />
        ))}
      </View>

      <Text style={styles.recurringSectionTitle}>Insights</Text>

      <View style={styles.recurringInsightsList}>
        {recurringInsights.map(insight => (
          <RecurringInsightCard key={insight.id} styles={styles} {...insight} />
        ))}
      </View>
    </>
  );
}

export function RecurringPaymentsAddContent({
  styles,
  recurringDraftAmount,
  recurringDraftPaymentMethod,
  isRecurringPaymentMethodDropdownOpen,
  recurringPaymentMethodOptions,
  recurringDraftFrequency,
  isRecurringFrequencyDropdownOpen,
  recurringFrequencyOptions,
  recurringDraftNextDueDate,
  recurringDraftNotes,
  recurringDraftSmartReminder,
  closeRecurringDropdowns,
  handleRecurringAmountChange,
  handleToggleRecurringPaymentMethod,
  handleSelectRecurringPaymentMethod,
  handleToggleRecurringFrequency,
  handleSelectRecurringFrequency,
  handleRecurringNextDueDateChange,
  handleToggleRecurringSmartReminder,
  handleRecurringNotesChange,
  handleDeleteRecurringEntry,
}: RecurringPaymentsAddContentProps): React.JSX.Element {
  return (
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
              <Text style={styles.recurringAddReminderTitle}>Smart Reminder</Text>
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
        <Text style={styles.personalDeleteEntryButtonText}>Delete This Entry</Text>
      </Pressable>
    </>
  );
}
