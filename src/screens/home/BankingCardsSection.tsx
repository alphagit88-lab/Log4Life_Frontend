import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import ActiveSvg from '../../images/active.svg';
import ArrowSvg from '../../images/arrow.svg';
import BellSvg from '../../images/bell.svg';
import DocSvg from '../../images/doc.svg';
import Glow1Svg from '../../images/glow_1.svg';
import Glow2Svg from '../../images/glow_2.svg';
import MonthlySvg from '../../images/monthly.svg';
import PigSvg from '../../images/pig.svg';
import StatementSvg from '../../images/statement.svg';
import TapSvg from '../../images/tap.svg';
import TrashCompactSvg from '../../images/trash_2.svg';
import UploadSvg from '../../images/upload.svg';
import WarningAlarmSvg from '../../images/warning_alarm.svg';
import WrongSvg from '../../images/wrong.svg';
import {HomeScreenStyles, OpenPlaceholder} from './types';

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

interface BankingCardsContentProps {
  styles: HomeScreenStyles;
  openPlaceholder: OpenPlaceholder;
}

interface BankingCardsAddContentProps {
  styles: HomeScreenStyles;
  bankingDraftDisplayName: string;
  bankingDraftLastFourDisplay: string;
  bankingDraftCardLabel: string;
  bankingDraftBankName: string;
  bankingDraftAccountType: string;
  bankingDraftLast4Digits: string;
  isBankingAccountTypeDropdownOpen: boolean;
  bankingAccountTypeOptions: string[];
  handleBankingBankNameChange: (value: string) => void;
  closeBankingAccountTypeDropdown: () => void;
  handleToggleBankingAccountType: () => void;
  handleSelectBankingAccountType: (accountType: string) => void;
  handleBankingLast4DigitsChange: (value: string) => void;
  hasUploadedBankingDocument: boolean;
  handleDeleteBankingDocument: () => void;
  handleBrowseBankingDocument: () => void;
  bankingDraftInterestReviewReminder: boolean;
  handleToggleBankingInterestReviewReminder: () => void;
  bankingDraftNotes: string;
  handleBankingNotesChange: (value: string) => void;
  handleDeleteBankingEntry: () => void;
}

function BankingAccountCard({
  styles,
  title,
  accountNumber,
  balance,
  status,
  icon,
  onPress,
}: BankingAccountData & {
  styles: HomeScreenStyles;
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
  styles,
  title,
  schedule,
  icon,
  onPress,
}: BankingReminderData & {
  styles: HomeScreenStyles;
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

export function BankingCardsContent({
  styles,
  openPlaceholder,
}: BankingCardsContentProps): React.JSX.Element {
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

  return (
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
            styles={styles}
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
          <Text style={styles.bankingAllocationButtonText}>View Full Report</Text>
        </Pressable>
      </View>

      <View style={styles.bankingProtectionCard}>
        <View style={styles.bankingProtectionIconPill}>
          <ActiveSvg width={16} height={20} />
        </View>

        <View style={styles.bankingProtectionTextBlock}>
          <Text style={styles.bankingProtectionTitle}>Encrypted Protection</Text>
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
              styles={styles}
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
}

export function BankingCardsAddContent({
  styles,
  bankingDraftDisplayName,
  bankingDraftLastFourDisplay,
  bankingDraftCardLabel,
  bankingDraftBankName,
  bankingDraftAccountType,
  bankingDraftLast4Digits,
  isBankingAccountTypeDropdownOpen,
  bankingAccountTypeOptions,
  handleBankingBankNameChange,
  closeBankingAccountTypeDropdown,
  handleToggleBankingAccountType,
  handleSelectBankingAccountType,
  handleBankingLast4DigitsChange,
  hasUploadedBankingDocument,
  handleDeleteBankingDocument,
  handleBrowseBankingDocument,
  bankingDraftInterestReviewReminder,
  handleToggleBankingInterestReviewReminder,
  bankingDraftNotes,
  handleBankingNotesChange,
  handleDeleteBankingEntry,
}: BankingCardsAddContentProps): React.JSX.Element {
  return (
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
            <Text style={styles.bankingAddUploadTitleHighlight}> browse files</Text>
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
        <Text style={styles.personalDeleteEntryButtonText}>Delete This Entry</Text>
      </Pressable>
    </>
  );
}
