import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import ActiveSvg from '../../images/active.svg';
import VaultBackgroundSvg from '../../images/bg_2.svg';
import BirthdaySvg from '../../images/birthday.svg';
import DocSvg from '../../images/doc.svg';
import DotSvg from '../../images/dot.svg';
import EditSvg from '../../images/edit.svg';
import EncryptedSvg from '../../images/encrypted.svg';
import EyeSvg from '../../images/eye.svg';
import FingerSvg from '../../images/finger.svg';
import NotesSvg from '../../images/notes.svg';
import ProfileSvg from '../../images/profile.svg';
import ProfileCardSvg from '../../images/profile_1.svg';
import ProfileCardPrimarySvg from '../../images/profile_1_primary.svg';
import TrashSvg from '../../images/trash.svg';
import TrashCompactSvg from '../../images/trash_2.svg';
import UploadSvg from '../../images/upload.svg';
import UploadDocumentSvg from '../../images/upload_2.svg';
import {HomeScreenStyles, OpenPlaceholder} from './types';

interface IdentityRecordData {
  id: string;
  name: string;
  dateOfBirth: string;
  identifierPrefix: string;
  identifierSuffix: string;
  status: string;
}

interface PersonalIdentityContentProps {
  styles: HomeScreenStyles;
  personalProfileName: string;
  personalProfileCardName: string;
  openPlaceholder: OpenPlaceholder;
}

interface PersonalIdentityAddContentProps {
  styles: HomeScreenStyles;
  identityDraftFullName: string;
  setIdentityDraftFullName: React.Dispatch<React.SetStateAction<string>>;
  identityDraftDateOfBirth: string;
  setIdentityDraftDateOfBirth: React.Dispatch<React.SetStateAction<string>>;
  identityDraftNiNumber: string;
  setIdentityDraftNiNumber: React.Dispatch<React.SetStateAction<string>>;
  identityDraftRenewalReminder: boolean;
  setIdentityDraftRenewalReminder: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  hasUploadedIdentityDocument: boolean;
  handleBrowseIdentityDocument: () => void;
  handleDeleteIdentityDocument: () => void;
  identityDraftNotes: string;
  setIdentityDraftNotes: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteIdentityEntry: () => void;
}

function RecordNumberDots({
  styles,
  count,
}: {
  styles: HomeScreenStyles;
  count: number;
}): React.JSX.Element {
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

export function PersonalIdentityContent({
  styles,
  personalProfileName,
  personalProfileCardName,
  openPlaceholder,
}: PersonalIdentityContentProps): React.JSX.Element {
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

  return (
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
        <Text style={styles.personalRecordsSyncText}>Last synced 2 mins ago</Text>
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
                    <Text style={styles.personalRecordMetaLabel}>NI NUMBER</Text>
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
                      <RecordNumberDots styles={styles} count={5} />
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
}

export function PersonalIdentityAddContent({
  styles,
  identityDraftFullName,
  setIdentityDraftFullName,
  identityDraftDateOfBirth,
  setIdentityDraftDateOfBirth,
  identityDraftNiNumber,
  setIdentityDraftNiNumber,
  identityDraftRenewalReminder,
  setIdentityDraftRenewalReminder,
  hasUploadedIdentityDocument,
  handleBrowseIdentityDocument,
  handleDeleteIdentityDocument,
  identityDraftNotes,
  setIdentityDraftNotes,
  handleDeleteIdentityEntry,
}: PersonalIdentityAddContentProps): React.JSX.Element {
  return (
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
          <Text style={styles.personalUploadTitle}>Drag and drop files here</Text>
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
        <Text style={styles.personalDeleteEntryButtonText}>Delete This Entry</Text>
      </Pressable>
    </>
  );
}
