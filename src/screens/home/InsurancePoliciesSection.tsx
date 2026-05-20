import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import ArrowSvg from '../../images/arrow.svg';
import AutoSvg from '../../images/auto.svg';
import CetificateSvg from '../../images/cetificate.svg';
import ContentsSvg from '../../images/contents.svg';
import CoverageSvg from '../../images/coverage.svg';
import HealthSvg from '../../images/health.svg';
import ModernHomeExteriorSvg from '../../images/Modern home exterior.svg';
import NaturalSvg from '../../images/natural.svg';
import PlannerSvg from '../../images/planner.svg';
import PublicSvg from '../../images/public.svg';
import RenewSvg from '../../images/renew.svg';
import ShieldSvg from '../../images/shield.svg';
import StructureSvg from '../../images/structure.svg';
import TravelSvg from '../../images/travel.svg';
import TrashCompactSvg from '../../images/trash_2.svg';
import {HomeScreenStyles, OpenPlaceholder} from './types';

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

interface InsurancePoliciesContentProps {
  styles: HomeScreenStyles;
  openPlaceholder: OpenPlaceholder;
}

interface InsurancePoliciesAddContentProps {
  styles: HomeScreenStyles;
  insuranceDraftPolicyName: string;
  setInsuranceDraftPolicyName: React.Dispatch<React.SetStateAction<string>>;
  insuranceDraftProvider: string;
  setInsuranceDraftProvider: React.Dispatch<React.SetStateAction<string>>;
  insuranceDraftPolicyNumber: string;
  setInsuranceDraftPolicyNumber: React.Dispatch<React.SetStateAction<string>>;
  insuranceDraftRenewalDate: string;
  insuranceDraftAnnualPremium: string;
  setInsuranceDraftAnnualPremium: React.Dispatch<React.SetStateAction<string>>;
  insuranceDraftRenewalReminder: boolean;
  handleToggleInsuranceRenewalReminder: () => void;
  insuranceDraftNotes: string;
  setInsuranceDraftNotes: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteInsuranceEntry: () => void;
  openPlaceholder: OpenPlaceholder;
}

function InsuranceCoverageItem({
  styles,
  title,
  description,
  icon,
}: InsuranceCoverageItemData & {
  styles: HomeScreenStyles;
}): React.JSX.Element {
  return (
    <View style={styles.insuranceCoverageItemRow}>
      {icon}

      <View style={styles.insuranceCoverageItemTextWrap}>
        <Text style={styles.insuranceCoverageItemTitle}>{title}</Text>
        <Text style={styles.insuranceCoverageItemDescription}>{description}</Text>
      </View>
    </View>
  );
}

function InsuranceAssociatedPolicyCard({
  styles,
  title,
  subtitle,
  status,
  icon,
  onPress,
}: InsuranceAssociatedPolicyData & {
  styles: HomeScreenStyles;
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

export function InsurancePoliciesContent({
  styles,
  openPlaceholder,
}: InsurancePoliciesContentProps): React.JSX.Element {
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

  return (
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
            <Text style={styles.insurancePolicyNumber}>Policy #: HE-28491</Text>
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
            <InsuranceCoverageItem key={item.id} styles={styles} {...item} />
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
            styles={styles}
            {...policy}
            onPress={() => openPlaceholder(policy.title)}
          />
        ))}
      </View>
    </>
  );
}

export function InsurancePoliciesAddContent({
  styles,
  insuranceDraftPolicyName,
  setInsuranceDraftPolicyName,
  insuranceDraftProvider,
  setInsuranceDraftProvider,
  insuranceDraftPolicyNumber,
  setInsuranceDraftPolicyNumber,
  insuranceDraftRenewalDate,
  insuranceDraftAnnualPremium,
  setInsuranceDraftAnnualPremium,
  insuranceDraftRenewalReminder,
  handleToggleInsuranceRenewalReminder,
  insuranceDraftNotes,
  setInsuranceDraftNotes,
  handleDeleteInsuranceEntry,
  openPlaceholder,
}: InsurancePoliciesAddContentProps): React.JSX.Element {
  return (
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
}
