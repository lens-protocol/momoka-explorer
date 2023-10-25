import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AppId: any;
  BlockchainData: any;
  BroadcastId: any;
  ChainId: any;
  ChallengeId: any;
  ContentEncryptionKey: any;
  CreateHandle: any;
  Cursor: any;
  DateTime: any;
  EncryptableDateTime: any;
  EncryptableMarkdown: any;
  EncryptableString: any;
  EncryptableTxHash: any;
  EncryptableURI: any;
  EncryptedPath: any;
  Ens: any;
  EvmAddress: any;
  Handle: any;
  ImageSizeTransform: any;
  Jwt: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  MomokaId: any;
  MomokaProof: any;
  NftGalleryId: any;
  NftGalleryName: any;
  Nonce: any;
  OnchainPublicationId: any;
  PoapEventId: any;
  ProfileId: any;
  PublicationId: any;
  Signature: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  URI: any;
  URL: any;
  UUID: any;
  UnixTimestamp: any;
  Void: any;
};

export type ActOnOpenActionInput = {
  multirecipientCollectOpenAction?: InputMaybe<Scalars['Boolean']>;
  simpleCollectOpenAction?: InputMaybe<Scalars['Boolean']>;
  unknownOpenAction?: InputMaybe<UnknownOpenActionActRedeemInput>;
};

/** The lens manager will only support FREE open action modules, if you want your unknown module allowed to be signless please contact us */
export type ActOnOpenActionLensManagerInput = {
  simpleCollectOpenAction?: InputMaybe<Scalars['Boolean']>;
  unknownOpenAction?: InputMaybe<UnknownOpenActionActRedeemInput>;
};

export type ActOnOpenActionLensManagerRequest = {
  actOn: ActOnOpenActionLensManagerInput;
  for: Scalars['PublicationId'];
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type ActOnOpenActionRequest = {
  actOn: ActOnOpenActionInput;
  for: Scalars['PublicationId'];
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type ActedNotification = {
  __typename?: 'ActedNotification';
  actions: Array<OpenActionProfileActed>;
  id: Scalars['UUID'];
  publication: AnyPublication;
};

/** Condition that checks if the given on-chain contract function returns true. It only supports view functions */
export type AdvancedContractCondition = {
  __typename?: 'AdvancedContractCondition';
  /** The contract ABI. Has to be in human readable single string format containing the signature of the function you want to call. See https://docs.ethers.org/v5/api/utils/abi/fragments/#human-readable-abi for more info */
  abi: Scalars['String'];
  /** The check to perform on the result of the function. In case of boolean outputs, "EQUALS" and "NOT_EQUALS" are supported. For BigNumber outputs, you can use every comparison option */
  comparison: ComparisonOperatorConditionType;
  /** The address and chain ID of the contract to call */
  contract: NetworkAddress;
  /** The name of the function to call. Must be included in the provided abi */
  functionName: Scalars['String'];
  /** ABI encoded function parameters. In order to represent the address of the person trying to decrypt, you *have* to use the string ":userAddress" as this param represents the decrypting user address. If a param is an array or tuple, it will be in stringified format. */
  params: Array<Scalars['String']>;
  /** The value to compare the result of the function against. Can be "true", "false" or a number in string format */
  value: Scalars['String'];
};

export type AlreadyInvitedCheckRequest = {
  for: Scalars['EvmAddress'];
};

export type Amount = {
  __typename?: 'Amount';
  /** The asset */
  asset: Asset;
  rate?: Maybe<FiatAmount>;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type AmountRateArgs = {
  request: RateRequest;
};

export type AmountInput = {
  /** The currency */
  currency: Scalars['EvmAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type AndCondition = {
  __typename?: 'AndCondition';
  criteria: Array<ThirdTierCondition>;
};

export type AnyPublication = Comment | Mirror | Post | Quote;

export type App = {
  __typename?: 'App';
  id: Scalars['AppId'];
};

export type ApprovedAllowanceAmountResult = {
  __typename?: 'ApprovedAllowanceAmountResult';
  allowance: Amount;
  moduleContract: NetworkAddress;
  moduleName: Scalars['String'];
};

export type ApprovedAuthentication = {
  __typename?: 'ApprovedAuthentication';
  authorizationId: Scalars['UUID'];
  browser?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  device?: Maybe<Scalars['String']>;
  expiresAt: Scalars['DateTime'];
  origin?: Maybe<Scalars['URI']>;
  os?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ApprovedAuthenticationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

export type ApprovedModuleAllowanceAmountRequest = {
  currencies: Array<Scalars['EvmAddress']>;
  followModules?: InputMaybe<Array<FollowModuleType>>;
  openActionModules?: InputMaybe<Array<OpenActionModuleType>>;
  referenceModules?: InputMaybe<Array<ReferenceModuleType>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
  unknownOpenActionModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['EvmAddress']>>;
};

export type ArticleMetadataV3 = {
  __typename?: 'ArticleMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the article. Empty if not set. */
  title: Scalars['String'];
};

export type Asset = Erc20;

export type Audio = {
  __typename?: 'Audio';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['URI'];
};

export type AudioMetadataV3 = {
  __typename?: 'AudioMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMediaAudio;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the audio. Empty if not set. */
  title: Scalars['String'];
};

export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  id: Scalars['ChallengeId'];
  /** The text that needs to be signed */
  text: Scalars['String'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt'];
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type BlockRequest = {
  profiles: Array<Scalars['ProfileId']>;
};

export type BroadcastMomokaResult = CreateMomokaPublicationResult | RelayError;

export type BroadcastRequest = {
  id: Scalars['BroadcastId'];
  signature: Scalars['Signature'];
};

export type CanDecryptResponse = {
  __typename?: 'CanDecryptResponse';
  extraDetails?: Maybe<Scalars['String']>;
  reasons?: Maybe<Array<DecryptFailReasonType>>;
  result: Scalars['Boolean'];
};

export type ChallengeRequest = {
  /** The profile ID to initiate a challenge - note if you do not pass this in you be logging in as a wallet and wont be able to use all the features */
  for?: InputMaybe<Scalars['ProfileId']>;
  /** The Ethereum address that will sign the challenge */
  signedBy: Scalars['EvmAddress'];
};

export type ChangeProfileManager = {
  action: ChangeProfileManagerActionType;
  address: Scalars['EvmAddress'];
};

export enum ChangeProfileManagerActionType {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type ChangeProfileManagersRequest = {
  /** if you define this true will enable it and false will disable it within the same tx as any other managers you are changing state for. Leave it blank if you do not want to change its current state */
  approveSignless?: InputMaybe<Scalars['Boolean']>;
  changeManagers?: InputMaybe<Array<ChangeProfileManager>>;
};

export type CheckingInMetadataV3 = {
  __typename?: 'CheckingInMetadataV3';
  address?: Maybe<PhysicalAddress>;
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  geographic?: Maybe<GeoLocation>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  location: Scalars['EncryptableString'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export enum ClaimProfileStatusType {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

/** Claim profile with handle error reason type */
export enum ClaimProfileWithHandleErrorReasonType {
  CanNotFreeText = 'CAN_NOT_FREE_TEXT',
  ClaimNotFound = 'CLAIM_NOT_FOUND',
  ClaimNotLinkedToWallet = 'CLAIM_NOT_LINKED_TO_WALLET',
  ClaimTimeExpired = 'CLAIM_TIME_EXPIRED',
  ContractExecuted = 'CONTRACT_EXECUTED',
  HandleAlreadyClaimed = 'HANDLE_ALREADY_CLAIMED',
  HandleAlreadyExists = 'HANDLE_ALREADY_EXISTS',
  HandleReserved = 'HANDLE_RESERVED'
}

export type ClaimProfileWithHandleErrorResult = {
  __typename?: 'ClaimProfileWithHandleErrorResult';
  reason: ClaimProfileWithHandleErrorReasonType;
};

export type ClaimProfileWithHandleRequest = {
  followModule?: InputMaybe<FollowModuleInput>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ClaimProfileWithHandleResult = ClaimProfileWithHandleErrorResult | RelaySuccess;

export type ClaimableProfilesResult = {
  __typename?: 'ClaimableProfilesResult';
  canMintProfileWithFreeTextHandle: Scalars['Boolean'];
  reserved: Array<ReservedClaimable>;
};

export type CollectActionModuleInput = {
  multirecipientCollectOpenAction?: InputMaybe<MultirecipientFeeCollectModuleInput>;
  simpleCollectOpenAction?: InputMaybe<SimpleCollectOpenActionModuleInput>;
};

export type CollectCondition = {
  __typename?: 'CollectCondition';
  publicationId: Scalars['PublicationId'];
  thisPublication: Scalars['Boolean'];
};

export enum CollectOpenActionModuleType {
  LegacyAaveFeeCollectModule = 'LegacyAaveFeeCollectModule',
  LegacyErc4626FeeCollectModule = 'LegacyERC4626FeeCollectModule',
  LegacyFeeCollectModule = 'LegacyFeeCollectModule',
  LegacyFreeCollectModule = 'LegacyFreeCollectModule',
  LegacyLimitedFeeCollectModule = 'LegacyLimitedFeeCollectModule',
  LegacyLimitedTimedFeeCollectModule = 'LegacyLimitedTimedFeeCollectModule',
  LegacyMultirecipientFeeCollectModule = 'LegacyMultirecipientFeeCollectModule',
  LegacyRevertCollectModule = 'LegacyRevertCollectModule',
  LegacySimpleCollectModule = 'LegacySimpleCollectModule',
  LegacyTimedFeeCollectModule = 'LegacyTimedFeeCollectModule',
  MultirecipientFeeCollectOpenActionModule = 'MultirecipientFeeCollectOpenActionModule',
  SimpleCollectOpenActionModule = 'SimpleCollectOpenActionModule',
  UnknownOpenActionModule = 'UnknownOpenActionModule'
}

export type Comment = {
  __typename?: 'Comment';
  by: Profile;
  commentOn: PrimaryPublication;
  createdAt: Scalars['DateTime'];
  firstComment?: Maybe<Comment>;
  hashtagsMentioned: Array<Scalars['String']>;
  id: Scalars['PublicationId'];
  isEncrypted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  profilesMentioned: Array<ProfileMentioned>;
  publishedOn?: Maybe<App>;
  referenceModule?: Maybe<ReferenceModule>;
  root: Post;
  stats: PublicationStats;
  txHash?: Maybe<Scalars['TxHash']>;
};

export type CommentStatsArgs = {
  request?: InputMaybe<PublicationStatsInput>;
};

export type CommentNotification = {
  __typename?: 'CommentNotification';
  comment: Comment;
  id: Scalars['UUID'];
};

export enum CommentRankingFilterType {
  All = 'ALL',
  NoneRelevant = 'NONE_RELEVANT',
  Relevant = 'RELEVANT'
}

export enum ComparisonOperatorConditionType {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type CreateActOnOpenActionBroadcastItemResult = {
  __typename?: 'CreateActOnOpenActionBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateActOnOpenActionEip712TypedData;
};

export type CreateActOnOpenActionEip712TypedData = {
  __typename?: 'CreateActOnOpenActionEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateActOnOpenActionEip712TypedDataTypes;
  /** The values */
  value: CreateActOnOpenActionEip712TypedDataValue;
};

export type CreateActOnOpenActionEip712TypedDataTypes = {
  __typename?: 'CreateActOnOpenActionEIP712TypedDataTypes';
  Act: Array<Eip712TypedDataField>;
};

export type CreateActOnOpenActionEip712TypedDataValue = {
  __typename?: 'CreateActOnOpenActionEIP712TypedDataValue';
  actionModuleAddress: Scalars['EvmAddress'];
  actionModuleData: Scalars['BlockchainData'];
  actorProfileId: Scalars['ProfileId'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  publicationActedId: Scalars['OnchainPublicationId'];
  publicationActedProfileId: Scalars['ProfileId'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateBlockProfilesBroadcastItemResult = {
  __typename?: 'CreateBlockProfilesBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBlockProfilesEip712TypedData;
};

export type CreateBlockProfilesEip712TypedData = {
  __typename?: 'CreateBlockProfilesEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBlockProfilesEip712TypedDataTypes;
  /** The values */
  value: CreateBlockProfilesEip712TypedDataValue;
};

export type CreateBlockProfilesEip712TypedDataTypes = {
  __typename?: 'CreateBlockProfilesEIP712TypedDataTypes';
  SetBlockStatus: Array<Eip712TypedDataField>;
};

export type CreateBlockProfilesEip712TypedDataValue = {
  __typename?: 'CreateBlockProfilesEIP712TypedDataValue';
  blockStatus: Array<Scalars['Boolean']>;
  byProfileId: Scalars['ProfileId'];
  deadline: Scalars['UnixTimestamp'];
  idsOfProfilesToSetBlockStatus: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
};

export type CreateChangeProfileManagersBroadcastItemResult = {
  __typename?: 'CreateChangeProfileManagersBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateChangeProfileManagersEip712TypedData;
};

export type CreateChangeProfileManagersEip712TypedData = {
  __typename?: 'CreateChangeProfileManagersEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateChangeProfileManagersEip712TypedDataTypes;
  /** The values */
  value: CreateChangeProfileManagersEip712TypedDataValue;
};

export type CreateChangeProfileManagersEip712TypedDataTypes = {
  __typename?: 'CreateChangeProfileManagersEIP712TypedDataTypes';
  ChangeDelegatedExecutorsConfig: Array<Eip712TypedDataField>;
};

export type CreateChangeProfileManagersEip712TypedDataValue = {
  __typename?: 'CreateChangeProfileManagersEIP712TypedDataValue';
  approvals: Array<Scalars['Boolean']>;
  configNumber: Scalars['Int'];
  deadline: Scalars['UnixTimestamp'];
  delegatedExecutors: Array<Scalars['EvmAddress']>;
  delegatorProfileId: Scalars['ProfileId'];
  nonce: Scalars['Nonce'];
  switchToGivenConfig: Scalars['Boolean'];
};

export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  Follow: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']>;
  deadline: Scalars['UnixTimestamp'];
  followTokenIds: Array<Scalars['TokenId']>;
  followerProfileId: Scalars['ProfileId'];
  idsOfProfilesToFollow: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
};

export type CreateLegacyCollectBroadcastItemResult = {
  __typename?: 'CreateLegacyCollectBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateActOnOpenActionEip712TypedData;
};

export type CreateLinkHandleToProfileBroadcastItemResult = {
  __typename?: 'CreateLinkHandleToProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateLinkHandleToProfileEip712TypedData;
};

export type CreateLinkHandleToProfileEip712TypedData = {
  __typename?: 'CreateLinkHandleToProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateLinkHandleToProfileEip712TypedDataTypes;
  /** The values */
  value: CreateLinkHandleToProfileEip712TypedDataValue;
};

export type CreateLinkHandleToProfileEip712TypedDataTypes = {
  __typename?: 'CreateLinkHandleToProfileEIP712TypedDataTypes';
  Link: Array<Eip712TypedDataField>;
};

export type CreateLinkHandleToProfileEip712TypedDataValue = {
  __typename?: 'CreateLinkHandleToProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  handleId: Scalars['TokenId'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateMomokaCommentBroadcastItemResult = {
  __typename?: 'CreateMomokaCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaCommentEip712TypedData;
};

export type CreateMomokaCommentEip712TypedData = {
  __typename?: 'CreateMomokaCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaCommentEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaCommentEip712TypedDataValue;
};

export type CreateMomokaCommentEip712TypedDataTypes = {
  __typename?: 'CreateMomokaCommentEIP712TypedDataTypes';
  Comment: Array<Eip712TypedDataField>;
};

export type CreateMomokaCommentEip712TypedDataValue = {
  __typename?: 'CreateMomokaCommentEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateMomokaMirrorBroadcastItemResult = {
  __typename?: 'CreateMomokaMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaMirrorEip712TypedData;
};

export type CreateMomokaMirrorEip712TypedData = {
  __typename?: 'CreateMomokaMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaMirrorEip712TypedDataValue;
};

export type CreateMomokaMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMomokaMirrorEIP712TypedDataTypes';
  Mirror: Array<Eip712TypedDataField>;
};

export type CreateMomokaMirrorEip712TypedDataValue = {
  __typename?: 'CreateMomokaMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadataURI: Scalars['String'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModuleData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateMomokaPostBroadcastItemResult = {
  __typename?: 'CreateMomokaPostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaPostEip712TypedData;
};

export type CreateMomokaPostEip712TypedData = {
  __typename?: 'CreateMomokaPostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaPostEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaPostEip712TypedDataValue;
};

export type CreateMomokaPostEip712TypedDataTypes = {
  __typename?: 'CreateMomokaPostEIP712TypedDataTypes';
  Post: Array<Eip712TypedDataField>;
};

export type CreateMomokaPostEip712TypedDataValue = {
  __typename?: 'CreateMomokaPostEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleInitData: Scalars['BlockchainData'];
};

export type CreateMomokaPublicationResult = {
  __typename?: 'CreateMomokaPublicationResult';
  id: Scalars['PublicationId'];
  momokaId: Scalars['MomokaId'];
  proof: Scalars['MomokaProof'];
};

export type CreateMomokaQuoteBroadcastItemResult = {
  __typename?: 'CreateMomokaQuoteBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMomokaQuoteEip712TypedData;
};

export type CreateMomokaQuoteEip712TypedData = {
  __typename?: 'CreateMomokaQuoteEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMomokaQuoteEip712TypedDataTypes;
  /** The values */
  value: CreateMomokaQuoteEip712TypedDataValue;
};

export type CreateMomokaQuoteEip712TypedDataTypes = {
  __typename?: 'CreateMomokaQuoteEIP712TypedDataTypes';
  Quote: Array<Eip712TypedDataField>;
};

export type CreateMomokaQuoteEip712TypedDataValue = {
  __typename?: 'CreateMomokaQuoteEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainCommentBroadcastItemResult = {
  __typename?: 'CreateOnchainCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainCommentEip712TypedData;
};

export type CreateOnchainCommentEip712TypedData = {
  __typename?: 'CreateOnchainCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainCommentEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainCommentEip712TypedDataValue;
};

export type CreateOnchainCommentEip712TypedDataTypes = {
  __typename?: 'CreateOnchainCommentEIP712TypedDataTypes';
  Comment: Array<Eip712TypedDataField>;
};

export type CreateOnchainCommentEip712TypedDataValue = {
  __typename?: 'CreateOnchainCommentEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainMirrorBroadcastItemResult = {
  __typename?: 'CreateOnchainMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainMirrorEip712TypedData;
};

export type CreateOnchainMirrorEip712TypedData = {
  __typename?: 'CreateOnchainMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainMirrorEip712TypedDataValue;
};

export type CreateOnchainMirrorEip712TypedDataTypes = {
  __typename?: 'CreateOnchainMirrorEIP712TypedDataTypes';
  Mirror: Array<Eip712TypedDataField>;
};

export type CreateOnchainMirrorEip712TypedDataValue = {
  __typename?: 'CreateOnchainMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadataURI: Scalars['String'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModuleData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainPostBroadcastItemResult = {
  __typename?: 'CreateOnchainPostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainPostEip712TypedData;
};

export type CreateOnchainPostEip712TypedData = {
  __typename?: 'CreateOnchainPostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainPostEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainPostEip712TypedDataValue;
};

export type CreateOnchainPostEip712TypedDataTypes = {
  __typename?: 'CreateOnchainPostEIP712TypedDataTypes';
  Post: Array<Eip712TypedDataField>;
};

export type CreateOnchainPostEip712TypedDataValue = {
  __typename?: 'CreateOnchainPostEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleInitData: Scalars['BlockchainData'];
};

export type CreateOnchainQuoteBroadcastItemResult = {
  __typename?: 'CreateOnchainQuoteBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainQuoteEip712TypedData;
};

export type CreateOnchainQuoteEip712TypedData = {
  __typename?: 'CreateOnchainQuoteEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainQuoteEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainQuoteEip712TypedDataValue;
};

export type CreateOnchainQuoteEip712TypedDataTypes = {
  __typename?: 'CreateOnchainQuoteEIP712TypedDataTypes';
  Quote: Array<Eip712TypedDataField>;
};

export type CreateOnchainQuoteEip712TypedDataValue = {
  __typename?: 'CreateOnchainQuoteEIP712TypedDataValue';
  actionModules: Array<Scalars['EvmAddress']>;
  actionModulesInitDatas: Array<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  pointedProfileId: Scalars['ProfileId'];
  pointedPubId: Scalars['OnchainPublicationId'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['EvmAddress'];
  referenceModuleData: Scalars['BlockchainData'];
  referenceModuleInitData: Scalars['BlockchainData'];
  referrerProfileIds: Array<Scalars['ProfileId']>;
  referrerPubIds: Array<Scalars['OnchainPublicationId']>;
};

export type CreateOnchainSetProfileMetadataBroadcastItemResult = {
  __typename?: 'CreateOnchainSetProfileMetadataBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateOnchainSetProfileMetadataEip712TypedData;
};

export type CreateOnchainSetProfileMetadataEip712TypedData = {
  __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateOnchainSetProfileMetadataEip712TypedDataTypes;
  /** The values */
  value: CreateOnchainSetProfileMetadataEip712TypedDataValue;
};

export type CreateOnchainSetProfileMetadataEip712TypedDataTypes = {
  __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataTypes';
  SetProfileMetadataURI: Array<Eip712TypedDataField>;
};

export type CreateOnchainSetProfileMetadataEip712TypedDataValue = {
  __typename?: 'CreateOnchainSetProfileMetadataEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadataURI: Scalars['URI'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateProfileRequest = {
  followModule?: InputMaybe<FollowModuleInput>;
  to: Scalars['EvmAddress'];
};

export enum CreateProfileWithHandleErrorReasonType {
  Failed = 'FAILED',
  HandleTaken = 'HANDLE_TAKEN'
}

export type CreateProfileWithHandleErrorResult = {
  __typename?: 'CreateProfileWithHandleErrorResult';
  reason: CreateProfileWithHandleErrorReasonType;
};

export type CreateProfileWithHandleRequest = {
  followModule?: InputMaybe<FollowModuleInput>;
  handle: Scalars['CreateHandle'];
  to: Scalars['EvmAddress'];
};

export type CreateProfileWithHandleResult = CreateProfileWithHandleErrorResult | RelaySuccess;

export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModule: Array<Eip712TypedDataField>;
};

export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followModule: Scalars['EvmAddress'];
  followModuleInitData: Scalars['BlockchainData'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateUnblockProfilesBroadcastItemResult = {
  __typename?: 'CreateUnblockProfilesBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateUnblockProfilesEip712TypedData;
};

export type CreateUnblockProfilesEip712TypedData = {
  __typename?: 'CreateUnblockProfilesEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateUnblockProfilesEip712TypedDataTypes;
  /** The values */
  value: CreateUnblockProfilesEip712TypedDataValue;
};

export type CreateUnblockProfilesEip712TypedDataTypes = {
  __typename?: 'CreateUnblockProfilesEIP712TypedDataTypes';
  SetBlockStatus: Array<Eip712TypedDataField>;
};

export type CreateUnblockProfilesEip712TypedDataValue = {
  __typename?: 'CreateUnblockProfilesEIP712TypedDataValue';
  blockStatus: Array<Scalars['Boolean']>;
  byProfileId: Scalars['ProfileId'];
  deadline: Scalars['UnixTimestamp'];
  idsOfProfilesToSetBlockStatus: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
};

export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateUnfollowEip712TypedData;
};

export type CreateUnfollowEip712TypedData = {
  __typename?: 'CreateUnfollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateUnfollowEip712TypedDataTypes;
  /** The values */
  value: CreateUnfollowEip712TypedDataValue;
};

export type CreateUnfollowEip712TypedDataTypes = {
  __typename?: 'CreateUnfollowEIP712TypedDataTypes';
  Unfollow: Array<Eip712TypedDataField>;
};

export type CreateUnfollowEip712TypedDataValue = {
  __typename?: 'CreateUnfollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  idsOfProfilesToUnfollow: Array<Scalars['ProfileId']>;
  nonce: Scalars['Nonce'];
  unfollowerProfileId: Scalars['ProfileId'];
};

export type CreateUnlinkHandleFromProfileBroadcastItemResult = {
  __typename?: 'CreateUnlinkHandleFromProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateUnlinkHandleFromProfileEip712TypedData;
};

export type CreateUnlinkHandleFromProfileEip712TypedData = {
  __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateUnlinkHandleFromProfileEip712TypedDataTypes;
  /** The values */
  value: CreateUnlinkHandleFromProfileEip712TypedDataValue;
};

export type CreateUnlinkHandleFromProfileEip712TypedDataTypes = {
  __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedDataTypes';
  Unlink: Array<Eip712TypedDataField>;
};

export type CreateUnlinkHandleFromProfileEip712TypedDataValue = {
  __typename?: 'CreateUnlinkHandleFromProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  handleId: Scalars['TokenId'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export enum CustomFiltersType {
  Gardeners = 'GARDENERS'
}

export enum DecryptFailReasonType {
  CanNotDecrypt = 'CAN_NOT_DECRYPT',
  CollectNotFinalisedOnChain = 'COLLECT_NOT_FINALISED_ON_CHAIN',
  DoesNotFollowProfile = 'DOES_NOT_FOLLOW_PROFILE',
  DoesNotOwnNft = 'DOES_NOT_OWN_NFT',
  DoesNotOwnProfile = 'DOES_NOT_OWN_PROFILE',
  FollowNotFinalisedOnChain = 'FOLLOW_NOT_FINALISED_ON_CHAIN',
  HasNotCollectedPublication = 'HAS_NOT_COLLECTED_PUBLICATION',
  MissingEncryptionParams = 'MISSING_ENCRYPTION_PARAMS',
  NotLoggedIn = 'NOT_LOGGED_IN',
  ProfileDoesNotExist = 'PROFILE_DOES_NOT_EXIST',
  PublicationIsNotGated = 'PUBLICATION_IS_NOT_GATED',
  UnauthorizedAddress = 'UNAUTHORIZED_ADDRESS',
  UnauthorizedBalance = 'UNAUTHORIZED_BALANCE'
}

export type DefaultProfileRequest = {
  for: Scalars['EvmAddress'];
};

export type DegreesOfSeparationReferenceModuleInput = {
  commentsRestricted: Scalars['Boolean'];
  degreesOfSeparation: Scalars['Int'];
  mirrorsRestricted: Scalars['Boolean'];
  quotesRestricted: Scalars['Boolean'];
  /** You can set the degree to follow someone elses graph, if you leave blank it use your profile */
  sourceProfileId?: InputMaybe<Scalars['ProfileId']>;
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  contract: NetworkAddress;
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
  /** Applied to quotes */
  quotesRestricted: Scalars['Boolean'];
  /** Who the degree of separation is applied to */
  sourceProfileId: Scalars['ProfileId'];
  type: ReferenceModuleType;
};

export type DismissRecommendedProfilesRequest = {
  dismiss: Array<Scalars['ProfileId']>;
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  /** The chainId */
  chainId: Scalars['ChainId'];
  /** The name of the typed data domain */
  name: Scalars['String'];
  /** The verifying contract */
  verifyingContract: Scalars['EvmAddress'];
  /** The version */
  version: Scalars['String'];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  /** The name of the typed data field */
  name: Scalars['String'];
  /** The type of the typed data field */
  type: Scalars['String'];
};

export type EmbedMetadataV3 = {
  __typename?: 'EmbedMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  embed: Scalars['EncryptableURI'];
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type EncryptableAudio = {
  __typename?: 'EncryptableAudio';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['EncryptableURI'];
};

export type EncryptableAudioSet = {
  __typename?: 'EncryptableAudioSet';
  optimized?: Maybe<Audio>;
  raw: EncryptableAudio;
};

export type EncryptableImage = {
  __typename?: 'EncryptableImage';
  /** Height of the image */
  height?: Maybe<Scalars['Int']>;
  /** MIME type of the image */
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['EncryptableURI'];
  /** Width of the image */
  width?: Maybe<Scalars['Int']>;
};

export type EncryptableImageSet = {
  __typename?: 'EncryptableImageSet';
  optimized?: Maybe<Image>;
  raw: EncryptableImage;
  transformed?: Maybe<Image>;
};

export type EncryptableImageSetTransformedArgs = {
  request: ImageTransform;
};

export type EncryptableVideo = {
  __typename?: 'EncryptableVideo';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['EncryptableURI'];
};

export type EncryptableVideoSet = {
  __typename?: 'EncryptableVideoSet';
  optimized?: Maybe<Video>;
  raw: EncryptableVideo;
};

export type EnsOnchainIdentity = {
  __typename?: 'EnsOnchainIdentity';
  /** The default ens mapped to this address */
  name?: Maybe<Scalars['Ens']>;
};

export type EoaOwnershipCondition = {
  __typename?: 'EoaOwnershipCondition';
  address: Scalars['EvmAddress'];
};

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20';
  /** The erc20 address */
  contract: NetworkAddress;
  /** Decimal places for the token */
  decimals: Scalars['Int'];
  /** Name of the symbol */
  name: Scalars['String'];
  /** Symbol for the token */
  symbol: Scalars['String'];
};

export type Erc20OwnershipCondition = {
  __typename?: 'Erc20OwnershipCondition';
  amount: Amount;
  condition: ComparisonOperatorConditionType;
};

export type EventMetadataV3 = {
  __typename?: 'EventMetadataV3';
  address?: Maybe<PhysicalAddress>;
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  endsAt: Scalars['EncryptableDateTime'];
  geographic?: Maybe<GeoLocation>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  links?: Maybe<Array<Scalars['EncryptableURI']>>;
  locale: Scalars['Locale'];
  location: Scalars['EncryptableString'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  startsAt: Scalars['EncryptableDateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
};

/** Possible sort criteria for exploring profiles */
export enum ExploreProfilesOrderByType {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** Order criteria for exploring profiles */
  orderBy: ExploreProfilesOrderByType;
  /** Filtering criteria for exploring profiles */
  where?: InputMaybe<ExploreProfilesWhere>;
};

export type ExploreProfilesWhere = {
  /** Array of custom filters for exploring profiles */
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  /** Filter profiles created since the specified timestamp */
  since?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type ExplorePublication = Post | Quote;

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  orderBy: ExplorePublicationsOrderByType;
  where?: InputMaybe<ExplorePublicationsWhere>;
};

export enum ExplorePublicationType {
  Post = 'POST',
  Quote = 'QUOTE'
}

export enum ExplorePublicationsOrderByType {
  Latest = 'LATEST',
  LensCurated = 'LENS_CURATED',
  TopCollectedOpenAction = 'TOP_COLLECTED_OPEN_ACTION',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED',
  TopQuoted = 'TOP_QUOTED'
}

export type ExplorePublicationsWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  publicationTypes?: InputMaybe<Array<ExplorePublicationType>>;
  since?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type FeeFollowModuleInput = {
  amount: AmountInput;
  recipient: Scalars['EvmAddress'];
};

export type FeeFollowModuleRedeemInput = {
  amount: AmountInput;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The amount info */
  amount: Amount;
  contract: NetworkAddress;
  /** The module recipient address */
  recipient: Scalars['EvmAddress'];
  type: FollowModuleType;
};

export enum FeedEventItemType {
  Acted = 'ACTED',
  Collect = 'COLLECT',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE',
  Reaction = 'REACTION'
}

export type FeedHighlight = Post | Quote;

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<FeedHighlightsWhere>;
};

export type FeedHighlightsWhere = {
  for?: InputMaybe<Scalars['ProfileId']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  acted: Array<OpenActionProfileActed>;
  comments: Array<Comment>;
  id: Scalars['String'];
  mirrors: Array<Mirror>;
  reactions: Array<ReactionEvent>;
  root: PrimaryPublication;
};

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  where?: InputMaybe<FeedWhere>;
};

export type FeedWhere = {
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  for?: InputMaybe<Scalars['ProfileId']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type Fiat = {
  __typename?: 'Fiat';
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type FiatAmount = {
  __typename?: 'FiatAmount';
  asset: Fiat;
  value: Scalars['String'];
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemInput>;
  profileId: Scalars['ProfileId'];
};

export type FollowCondition = {
  __typename?: 'FollowCondition';
  follow: Scalars['ProfileId'];
};

export type FollowLensManager = {
  followModule?: InputMaybe<FollowLensManagerModuleRedeemInput>;
  profileId: Scalars['ProfileId'];
};

/** The lens manager will only support FREE follow modules, if you want your unknown module allowed to be signless please contact us */
export type FollowLensManagerModuleRedeemInput = {
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemInput>;
};

export type FollowLensManagerRequest = {
  follow: Array<FollowLensManager>;
};

export type FollowModule = FeeFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FollowModuleInput = {
  feeFollowModule?: InputMaybe<FeeFollowModuleInput>;
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleInput>;
};

export type FollowModuleRedeemInput = {
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemInput>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemInput>;
};

export enum FollowModuleType {
  FeeFollowModule = 'FeeFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowNotification = {
  __typename?: 'FollowNotification';
  followers: Array<Profile>;
  id: Scalars['UUID'];
};

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contract: NetworkAddress;
  type: ReferenceModuleType;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueRequest = {
  for: Scalars['ProfileId'];
};

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult';
  revenues: Array<RevenueAggregate>;
};

export type FollowStatusBulk = {
  follower: Scalars['ProfileId'];
  profileId: Scalars['ProfileId'];
};

export type FollowStatusBulkRequest = {
  followInfos: Array<FollowStatusBulk>;
};

export type FollowStatusBulkResult = {
  __typename?: 'FollowStatusBulkResult';
  follower: Scalars['ProfileId'];
  profileId: Scalars['ProfileId'];
  status: OptimisticStatusResult;
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  of: Scalars['ProfileId'];
};

export type FollowingRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type FraudReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  allowance: AmountInput;
  module: ModuleCurrencyApproval;
};

export type GenerateModuleCurrencyApprovalResult = {
  __typename?: 'GenerateModuleCurrencyApprovalResult';
  data: Scalars['BlockchainData'];
  from: Scalars['EvmAddress'];
  to: Scalars['EvmAddress'];
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  /** `null` when `rawURI` is encrypted */
  latitude?: Maybe<Scalars['Float']>;
  /** `null` when `rawURI` is encrypted */
  longitude?: Maybe<Scalars['Float']>;
  /** The raw Geo URI of the location. If encrypted `latitude` and `longitude` will be `null` */
  rawURI: Scalars['EncryptableURI'];
};

export type GetProfileMetadataArgs = {
  /** The app id to query the profile's metadata */
  appId?: InputMaybe<Scalars['AppId']>;
  /** If true, will fallback to global profile metadata, if there is no metadata set for that specific app id */
  useFallback?: InputMaybe<Scalars['Boolean']>;
};

export type HandleInfo = {
  __typename?: 'HandleInfo';
  /** The full handle - namespace/localname */
  fullHandle: Scalars['Handle'];
  /** The handle nft token id */
  id: Scalars['TokenId'];
  /** If null its not linked to anything */
  linkedTo?: Maybe<HandleLinkedTo>;
  /** The localname */
  localName: Scalars['String'];
  /** The namespace */
  namespace: Scalars['String'];
  ownedBy: Scalars['EvmAddress'];
  /** The suggested format to use on UI for ease but you can innovate and slice and dice as you want */
  suggestedFormatted: SuggestedFormattedHandle;
};

export type HandleLinkedTo = {
  __typename?: 'HandleLinkedTo';
  /** The contract address it is linked to */
  contract: NetworkAddress;
  /** The nft token id it is linked to (this can be the profile Id) */
  nftTokenId: Scalars['TokenId'];
};

export type HidePublicationRequest = {
  for: Scalars['PublicationId'];
};

export type IdKitPhoneVerifyWebhookRequest = {
  sharedSecret: Scalars['String'];
  worldcoin?: InputMaybe<WorldcoinPhoneVerifyWebhookRequest>;
};

export enum IdKitPhoneVerifyWebhookResultStatusType {
  AlreadyVerified = 'ALREADY_VERIFIED',
  Success = 'SUCCESS'
}

export type IllegalReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type Image = {
  __typename?: 'Image';
  /** Height of the image */
  height?: Maybe<Scalars['Int']>;
  /** MIME type of the image */
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['URI'];
  /** Width of the image */
  width?: Maybe<Scalars['Int']>;
};

export type ImageMetadataV3 = {
  __typename?: 'ImageMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMediaImage;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the image. Empty if not set. */
  title: Scalars['String'];
};

export type ImageSet = {
  __typename?: 'ImageSet';
  optimized?: Maybe<Image>;
  raw: Image;
  transformed?: Maybe<Image>;
};

export type ImageSetTransformedArgs = {
  request: ImageTransform;
};

export type ImageTransform = {
  /** Set the transformed image's height */
  height?: InputMaybe<Scalars['ImageSizeTransform']>;
  /** Set if you want to keep the image's original aspect ratio. True by default. If explicitly set to false, the image will stretch based on the width and height values. */
  keepAspectRatio?: InputMaybe<Scalars['Boolean']>;
  /** Set the transformed image's width */
  width?: InputMaybe<Scalars['ImageSizeTransform']>;
};

export type InternalAddCuratedTagRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type InternalAddInvitesRequest = {
  n: Scalars['Int'];
  p: Scalars['ProfileId'];
  secret: Scalars['String'];
};

export type InternalAllowDomainRequest = {
  domain: Scalars['URI'];
  secret: Scalars['String'];
};

export type InternalAllowedDomainsRequest = {
  secret: Scalars['String'];
};

export type InternalClaimRequest = {
  address: Scalars['EvmAddress'];
  freeTextHandle: Scalars['Boolean'];
  handle: Scalars['CreateHandle'];
  overrideAlreadyClaimed: Scalars['Boolean'];
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type InternalClaimStatusRequest = {
  address: Scalars['EvmAddress'];
  secret: Scalars['String'];
};

export type InternalCuratedHandlesRequest = {
  secret: Scalars['String'];
};

export type InternalCuratedTagsRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
};

export type InternalCuratedUpdateRequest = {
  /** The full handle - namespace/localname */
  handle: Scalars['Handle'];
  remove: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type InternalInvitesRequest = {
  p: Scalars['ProfileId'];
  secret: Scalars['String'];
};

export type InternalNftIndexRequest = {
  n: Array<Nfi>;
  secret: Scalars['String'];
};

export type InternalNftVerifyRequest = {
  n: Array<Nfi>;
  secret: Scalars['String'];
};

export type InternalProfileStatusRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
};

export type InternalRemoveCuratedTagRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type InternalUpdateProfileStatusRequest = {
  dd: Scalars['Boolean'];
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ss: Scalars['Boolean'];
};

export type InviteRequest = {
  invites: Array<Scalars['EvmAddress']>;
};

export type InvitedResult = {
  __typename?: 'InvitedResult';
  by: Scalars['EvmAddress'];
  profileMinted?: Maybe<Profile>;
  when: Scalars['DateTime'];
};

export type KnownCollectOpenActionResult = {
  __typename?: 'KnownCollectOpenActionResult';
  type: CollectOpenActionModuleType;
};

export type KnownSupportedModule = {
  __typename?: 'KnownSupportedModule';
  contract: NetworkAddress;
  moduleInput: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemInput: Array<ModuleInfo>;
  returnDataInput: Array<ModuleInfo>;
};

export type LastLoggedInProfileRequest = {
  for: Scalars['EvmAddress'];
};

export type LegacyAaveFeeCollectModuleSettings = {
  __typename?: 'LegacyAaveFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipient: Scalars['EvmAddress'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyCollectRequest = {
  on: Scalars['PublicationId'];
  referrer?: InputMaybe<Scalars['PublicationId']>;
};

export type LegacyDegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'LegacyDegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  contract: NetworkAddress;
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
  type: ReferenceModuleType;
};

export type LegacyErc4626FeeCollectModuleSettings = {
  __typename?: 'LegacyERC4626FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The recipient of the ERC4626 vault shares */
  recipient: Scalars['EvmAddress'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
  /** The ERC4626 vault address */
  vault: NetworkAddress;
};

export type LegacyFeeCollectModuleSettings = {
  __typename?: 'LegacyFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyFollowOnlyReferenceModuleSettings = {
  __typename?: 'LegacyFollowOnlyReferenceModuleSettings';
  contract: NetworkAddress;
  type: ReferenceModuleType;
};

export type LegacyFreeCollectModuleSettings = {
  __typename?: 'LegacyFreeCollectModuleSettings';
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  type: OpenActionModuleType;
};

export type LegacyLimitedFeeCollectModuleSettings = {
  __typename?: 'LegacyLimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect module limit. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyLimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LegacyLimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect module limit */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyMultirecipientFeeCollectModuleSettings = {
  __typename?: 'LegacyMultirecipientFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyRevertCollectModuleSettings = {
  __typename?: 'LegacyRevertCollectModuleSettings';
  contract: NetworkAddress;
  type: OpenActionModuleType;
};

export type LegacySimpleCollectModuleSettings = {
  __typename?: 'LegacySimpleCollectModuleSettings';
  /** The collect module amount info. `Amount.value = 0` in case of free collects. */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LegacyTimedFeeCollectModuleSettings = {
  __typename?: 'LegacyTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type LensProfileManagerRelayError = {
  __typename?: 'LensProfileManagerRelayError';
  reason: LensProfileManagerRelayErrorReasonType;
};

export enum LensProfileManagerRelayErrorReasonType {
  AppNotAllowed = 'APP_NOT_ALLOWED',
  Failed = 'FAILED',
  NotSponsored = 'NOT_SPONSORED',
  NoLensManagerEnabled = 'NO_LENS_MANAGER_ENABLED',
  RateLimited = 'RATE_LIMITED',
  RequiresSignature = 'REQUIRES_SIGNATURE'
}

export type LensProfileManagerRelayResult = LensProfileManagerRelayError | RelaySuccess;

export enum LensProtocolVersion {
  V1 = 'V1',
  V2 = 'V2'
}

export enum LensTransactionFailureType {
  MetadataError = 'METADATA_ERROR',
  Reverted = 'REVERTED'
}

export type LensTransactionResult = {
  __typename?: 'LensTransactionResult';
  extraInfo?: Maybe<Scalars['String']>;
  reason?: Maybe<LensTransactionFailureType>;
  status: LensTransactionStatusType;
  txHash: Scalars['TxHash'];
};

export type LensTransactionStatusRequest = {
  /** Transaction hash for retrieving transaction status */
  forTxHash?: InputMaybe<Scalars['TxHash']>;
  /** Transaction ID for retrieving transaction status when using the broadcaster */
  forTxId?: InputMaybe<Scalars['TxId']>;
};

export enum LensTransactionStatusType {
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  OptimisticallyUpdated = 'OPTIMISTICALLY_UPDATED',
  Processing = 'PROCESSING'
}

export enum LimitType {
  Fifty = 'Fifty',
  Ten = 'Ten',
  TwentyFive = 'TwentyFive'
}

export type LinkHandleToProfileRequest = {
  /** The full handle - namespace/localname */
  handle: Scalars['Handle'];
};

export type LinkMetadataV3 = {
  __typename?: 'LinkMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  sharingLink: Scalars['EncryptableURI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type LiveStreamMetadataV3 = {
  __typename?: 'LiveStreamMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  checkLiveAPI?: Maybe<Scalars['EncryptableURI']>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  /** Optional end time. Empty if not set. */
  endsAt: Scalars['EncryptableDateTime'];
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  liveURL: Scalars['EncryptableURI'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  playbackURL: Scalars['EncryptableURI'];
  rawURI: Scalars['URI'];
  startsAt: Scalars['EncryptableDateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the live-stream. Empty if not set. */
  title: Scalars['String'];
};

export type MarketplaceMetadata = {
  __typename?: 'MarketplaceMetadata';
  animationUrl?: Maybe<Scalars['URI']>;
  attributes?: Maybe<Array<PublicationMarketplaceMetadataAttribute>>;
  description?: Maybe<Scalars['Markdown']>;
  externalURL?: Maybe<Scalars['URL']>;
  image?: Maybe<ImageSet>;
  name?: Maybe<Scalars['String']>;
};

export enum MarketplaceMetadataAttributeDisplayType {
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
}

export type MentionNotification = {
  __typename?: 'MentionNotification';
  id: Scalars['UUID'];
  publication: PrimaryPublication;
};

export type MetadataAttribute = {
  __typename?: 'MetadataAttribute';
  key: Scalars['String'];
  /**
   * The type of the attribute. When:
   * - BOOLEAN: the `value` is `true`|`false`
   * - DATE: the `value` is a valid ISO 8601 date string
   * - NUMBER: the `value` is a valid JS number as string
   * - STRING: the `value` is a string.
   * - JSON: the `value` is a valid JSON serialized as string
   *
   */
  type: MetadataAttributeType;
  /** The value serialized as string. It's consumer responsibility to parse it according to `type`. */
  value: Scalars['String'];
};

export enum MetadataAttributeType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Json = 'JSON',
  Number = 'NUMBER',
  String = 'STRING'
}

export type MintMetadataV3 = {
  __typename?: 'MintMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  mintLink: Scalars['EncryptableURI'];
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Mirror = {
  __typename?: 'Mirror';
  by: Profile;
  createdAt: Scalars['DateTime'];
  id: Scalars['PublicationId'];
  isHidden: Scalars['Boolean'];
  mirrorOn: MirrorablePublication;
  momoka?: Maybe<MomokaInfo>;
  publishedOn?: Maybe<App>;
  txHash?: Maybe<Scalars['TxHash']>;
};

export type MirrorNotification = {
  __typename?: 'MirrorNotification';
  id: Scalars['UUID'];
  mirrors: Array<ProfileMirrorResult>;
  publication: PrimaryPublication;
};

export type MirrorablePublication = Comment | Post | Quote;

export type ModuleCurrencyApproval = {
  followModule?: InputMaybe<FollowModuleType>;
  openActionModule?: InputMaybe<OpenActionModuleType>;
  referenceModule?: InputMaybe<ReferenceModuleType>;
  unknownFollowModule?: InputMaybe<Scalars['EvmAddress']>;
  unknownOpenActionModule?: InputMaybe<Scalars['EvmAddress']>;
  unknownReferenceModule?: InputMaybe<Scalars['EvmAddress']>;
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type MomokaCommentRequest = {
  commentOn: Scalars['PublicationId'];
  contentURI: Scalars['URI'];
};

export type MomokaCommentTransaction = {
  __typename?: 'MomokaCommentTransaction';
  app?: Maybe<App>;
  commentOn: PrimaryPublication;
  createdAt: Scalars['DateTime'];
  publication: Comment;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaInfo = {
  __typename?: 'MomokaInfo';
  proof: Scalars['MomokaProof'];
};

export type MomokaMirrorRequest = {
  /** You can add information like app on a mirror or tracking stuff */
  metadataURI?: InputMaybe<Scalars['URI']>;
  mirrorOn: Scalars['PublicationId'];
};

export type MomokaMirrorTransaction = {
  __typename?: 'MomokaMirrorTransaction';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime'];
  mirrorOn: PrimaryPublication;
  publication: Mirror;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaPostRequest = {
  contentURI: Scalars['URI'];
};

export type MomokaPostTransaction = {
  __typename?: 'MomokaPostTransaction';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime'];
  publication: Post;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaQuoteRequest = {
  contentURI: Scalars['URI'];
  quoteOn: Scalars['PublicationId'];
};

export type MomokaQuoteTransaction = {
  __typename?: 'MomokaQuoteTransaction';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime'];
  publication: Quote;
  quoteOn: PrimaryPublication;
  submitter: Scalars['EvmAddress'];
  transactionId: Scalars['String'];
  verificationStatus: MomokaVerificationStatus;
};

export type MomokaSubmitterResult = {
  __typename?: 'MomokaSubmitterResult';
  address: Scalars['EvmAddress'];
  name: Scalars['String'];
  totalTransactions: Scalars['Int'];
};

export type MomokaSubmittersResult = {
  __typename?: 'MomokaSubmittersResult';
  items: Array<MomokaSubmitterResult>;
  pageInfo: PaginatedResultInfo;
};

export type MomokaSummaryResult = {
  __typename?: 'MomokaSummaryResult';
  totalTransactions: Scalars['Int'];
};

export type MomokaTransaction =
  | MomokaCommentTransaction
  | MomokaMirrorTransaction
  | MomokaPostTransaction
  | MomokaQuoteTransaction;

export type MomokaTransactionRequest = {
  /** The momoka transaction id or internal publication id */
  for: Scalars['String'];
};

export type MomokaTransactionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for?: InputMaybe<Scalars['ProfileId']>;
  limit?: InputMaybe<LimitType>;
};

export type MomokaTransactionsResult = {
  __typename?: 'MomokaTransactionsResult';
  items: Array<MomokaTransaction>;
  pageInfo: PaginatedResultInfo;
};

export enum MomokaValidatorError {
  BlockCantBeReadFromNode = 'BLOCK_CANT_BE_READ_FROM_NODE',
  BlockTooFar = 'BLOCK_TOO_FAR',
  CanNotConnectToBundlr = 'CAN_NOT_CONNECT_TO_BUNDLR',
  ChainSignatureAlreadyUsed = 'CHAIN_SIGNATURE_ALREADY_USED',
  DataCantBeReadFromNode = 'DATA_CANT_BE_READ_FROM_NODE',
  EventMismatch = 'EVENT_MISMATCH',
  GeneratedPublicationIdMismatch = 'GENERATED_PUBLICATION_ID_MISMATCH',
  InvalidEventTimestamp = 'INVALID_EVENT_TIMESTAMP',
  InvalidFormattedTypedData = 'INVALID_FORMATTED_TYPED_DATA',
  InvalidPointerSetNotNeeded = 'INVALID_POINTER_SET_NOT_NEEDED',
  InvalidSignatureSubmitter = 'INVALID_SIGNATURE_SUBMITTER',
  InvalidTxId = 'INVALID_TX_ID',
  InvalidTypedDataDeadlineTimestamp = 'INVALID_TYPED_DATA_DEADLINE_TIMESTAMP',
  NotClosestBlock = 'NOT_CLOSEST_BLOCK',
  NoSignatureSubmitter = 'NO_SIGNATURE_SUBMITTER',
  PointerFailedVerification = 'POINTER_FAILED_VERIFICATION',
  PotentialReorg = 'POTENTIAL_REORG',
  PublicationNonceInvalid = 'PUBLICATION_NONCE_INVALID',
  PublicationNoneDa = 'PUBLICATION_NONE_DA',
  PublicationNoPointer = 'PUBLICATION_NO_POINTER',
  PublicationSignerNotAllowed = 'PUBLICATION_SIGNER_NOT_ALLOWED',
  SimulationFailed = 'SIMULATION_FAILED',
  SimulationNodeCouldNotRun = 'SIMULATION_NODE_COULD_NOT_RUN',
  TimestampProofInvalidDaId = 'TIMESTAMP_PROOF_INVALID_DA_ID',
  TimestampProofInvalidSignature = 'TIMESTAMP_PROOF_INVALID_SIGNATURE',
  TimestampProofInvalidType = 'TIMESTAMP_PROOF_INVALID_TYPE',
  TimestampProofNotSubmitter = 'TIMESTAMP_PROOF_NOT_SUBMITTER',
  Unknown = 'UNKNOWN'
}

export type MomokaVerificationStatus = MomokaVerificationStatusFailure | MomokaVerificationStatusSuccess;

export type MomokaVerificationStatusFailure = {
  __typename?: 'MomokaVerificationStatusFailure';
  status: MomokaValidatorError;
};

export type MomokaVerificationStatusSuccess = {
  __typename?: 'MomokaVerificationStatusSuccess';
  verified: Scalars['Boolean'];
};

export type MultirecipientFeeCollectModuleInput = {
  amount: AmountInput;
  collectLimit?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipients: Array<RecipientDataInput>;
  referralFee?: InputMaybe<Scalars['Float']>;
};

export type MultirecipientFeeCollectOpenActionSettings = {
  __typename?: 'MultirecipientFeeCollectOpenActionSettings';
  /** The collect module amount info */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type Mutation = {
  __typename?: 'Mutation';
  actOnOpenAction: LensProfileManagerRelayResult;
  addProfileInterests?: Maybe<Scalars['Void']>;
  addPublicationBookmark?: Maybe<Scalars['Void']>;
  addPublicationNotInterested?: Maybe<Scalars['Void']>;
  addReaction?: Maybe<Scalars['Void']>;
  authenticate: AuthenticationResult;
  block: LensProfileManagerRelayResult;
  broadcastOnMomoka: BroadcastMomokaResult;
  broadcastOnchain: RelayResult;
  claimProfileWithHandle: ClaimProfileWithHandleResult;
  commentOnMomoka: RelayMomokaResult;
  commentOnchain: LensProfileManagerRelayResult;
  createActOnOpenActionTypedData: CreateActOnOpenActionBroadcastItemResult;
  createBlockProfilesTypedData: CreateBlockProfilesBroadcastItemResult;
  createChangeProfileManagersTypedData: CreateChangeProfileManagersBroadcastItemResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createLegacyCollectTypedData: CreateLegacyCollectBroadcastItemResult;
  createLinkHandleToProfileTypedData: CreateLinkHandleToProfileBroadcastItemResult;
  createMomokaCommentTypedData: CreateMomokaCommentBroadcastItemResult;
  createMomokaMirrorTypedData: CreateMomokaMirrorBroadcastItemResult;
  createMomokaPostTypedData: CreateMomokaPostBroadcastItemResult;
  createMomokaQuoteTypedData: CreateMomokaQuoteBroadcastItemResult;
  createNftGallery: Scalars['NftGalleryId'];
  createOnchainCommentTypedData: CreateOnchainCommentBroadcastItemResult;
  createOnchainMirrorTypedData: CreateOnchainMirrorBroadcastItemResult;
  createOnchainPostTypedData: CreateOnchainPostBroadcastItemResult;
  createOnchainQuoteTypedData: CreateOnchainQuoteBroadcastItemResult;
  createOnchainSetProfileMetadataTypedData: CreateOnchainSetProfileMetadataBroadcastItemResult;
  createProfile: RelaySuccess;
  createProfileWithHandle: CreateProfileWithHandleResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createUnblockProfilesTypedData: CreateUnblockProfilesBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  createUnlinkHandleFromProfileTypedData: CreateUnlinkHandleFromProfileBroadcastItemResult;
  deleteNftGallery?: Maybe<Scalars['Void']>;
  dismissRecommendedProfiles?: Maybe<Scalars['Void']>;
  follow: LensProfileManagerRelayResult;
  hidePublication?: Maybe<Scalars['Void']>;
  idKitPhoneVerifyWebhook: IdKitPhoneVerifyWebhookResultStatusType;
  internalAddCuratedTag?: Maybe<Scalars['Void']>;
  internalAddInvites?: Maybe<Scalars['Void']>;
  internalAllowDomain?: Maybe<Scalars['Void']>;
  internalClaim?: Maybe<Scalars['Void']>;
  internalCuratedUpdate?: Maybe<Scalars['Void']>;
  internalNftIndex?: Maybe<Scalars['Void']>;
  internalNftVerify?: Maybe<Scalars['Void']>;
  internalRemoveCuratedTag?: Maybe<Scalars['Void']>;
  internalUpdateProfileStatus?: Maybe<Scalars['Void']>;
  invite?: Maybe<Scalars['Void']>;
  legacyCollect: LensProfileManagerRelayResult;
  linkHandleToProfile: LensProfileManagerRelayResult;
  mirrorOnMomoka: RelayMomokaResult;
  mirrorOnchain: LensProfileManagerRelayResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  postOnMomoka: RelayMomokaResult;
  postOnchain: LensProfileManagerRelayResult;
  quoteOnMomoka: RelayMomokaResult;
  quoteOnchain: LensProfileManagerRelayResult;
  refresh: AuthenticationResult;
  refreshPublicationMetadata: RefreshPublicationMetadataResult;
  removeProfileInterests?: Maybe<Scalars['Void']>;
  removePublicationBookmark?: Maybe<Scalars['Void']>;
  removeReaction?: Maybe<Scalars['Void']>;
  reportPublication?: Maybe<Scalars['Void']>;
  revokeAuthentication?: Maybe<Scalars['Void']>;
  setDefaultProfile?: Maybe<Scalars['Void']>;
  setFollowModule: LensProfileManagerRelayResult;
  setProfileMetadata: LensProfileManagerRelayResult;
  unblock: LensProfileManagerRelayResult;
  undoPublicationNotInterested?: Maybe<Scalars['Void']>;
  unfollow: LensProfileManagerRelayResult;
  unlinkHandleFromProfile: LensProfileManagerRelayResult;
  updateNftGalleryInfo?: Maybe<Scalars['Void']>;
  updateNftGalleryItems?: Maybe<Scalars['Void']>;
  updateNftGalleryOrder?: Maybe<Scalars['Void']>;
  walletAuthenticationToProfileAuthentication: AuthenticationResult;
};

export type MutationActOnOpenActionArgs = {
  request: ActOnOpenActionLensManagerRequest;
};

export type MutationAddProfileInterestsArgs = {
  request: ProfileInterestsRequest;
};

export type MutationAddPublicationBookmarkArgs = {
  request: PublicationBookmarkRequest;
};

export type MutationAddPublicationNotInterestedArgs = {
  request: PublicationNotInterestedRequest;
};

export type MutationAddReactionArgs = {
  request: ReactionRequest;
};

export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};

export type MutationBlockArgs = {
  request: BlockRequest;
};

export type MutationBroadcastOnMomokaArgs = {
  request: BroadcastRequest;
};

export type MutationBroadcastOnchainArgs = {
  request: BroadcastRequest;
};

export type MutationClaimProfileWithHandleArgs = {
  request: ClaimProfileWithHandleRequest;
};

export type MutationCommentOnMomokaArgs = {
  request: MomokaCommentRequest;
};

export type MutationCommentOnchainArgs = {
  request: OnchainCommentRequest;
};

export type MutationCreateActOnOpenActionTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: ActOnOpenActionRequest;
};

export type MutationCreateBlockProfilesTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BlockRequest;
};

export type MutationCreateChangeProfileManagersTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: ChangeProfileManagersRequest;
};

export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};

export type MutationCreateLegacyCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: LegacyCollectRequest;
};

export type MutationCreateLinkHandleToProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: LinkHandleToProfileRequest;
};

export type MutationCreateMomokaCommentTypedDataArgs = {
  request: MomokaCommentRequest;
};

export type MutationCreateMomokaMirrorTypedDataArgs = {
  request: MomokaMirrorRequest;
};

export type MutationCreateMomokaPostTypedDataArgs = {
  request: MomokaPostRequest;
};

export type MutationCreateMomokaQuoteTypedDataArgs = {
  request: MomokaQuoteRequest;
};

export type MutationCreateNftGalleryArgs = {
  request: NftGalleryCreateRequest;
};

export type MutationCreateOnchainCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainCommentRequest;
};

export type MutationCreateOnchainMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainMirrorRequest;
};

export type MutationCreateOnchainPostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainPostRequest;
};

export type MutationCreateOnchainQuoteTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainQuoteRequest;
};

export type MutationCreateOnchainSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: OnchainSetProfileMetadataRequest;
};

export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};

export type MutationCreateProfileWithHandleArgs = {
  request: CreateProfileWithHandleRequest;
};

export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetFollowModuleRequest;
};

export type MutationCreateUnblockProfilesTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnblockRequest;
};

export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};

export type MutationCreateUnlinkHandleFromProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnlinkHandleFromProfileRequest;
};

export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};

export type MutationDismissRecommendedProfilesArgs = {
  request: DismissRecommendedProfilesRequest;
};

export type MutationFollowArgs = {
  request: FollowLensManagerRequest;
};

export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};

export type MutationIdKitPhoneVerifyWebhookArgs = {
  request: IdKitPhoneVerifyWebhookRequest;
};

export type MutationInternalAddCuratedTagArgs = {
  request: InternalAddCuratedTagRequest;
};

export type MutationInternalAddInvitesArgs = {
  request: InternalAddInvitesRequest;
};

export type MutationInternalAllowDomainArgs = {
  request: InternalAllowDomainRequest;
};

export type MutationInternalClaimArgs = {
  request: InternalClaimRequest;
};

export type MutationInternalCuratedUpdateArgs = {
  request: InternalCuratedUpdateRequest;
};

export type MutationInternalNftIndexArgs = {
  request: InternalNftIndexRequest;
};

export type MutationInternalNftVerifyArgs = {
  request: InternalNftVerifyRequest;
};

export type MutationInternalRemoveCuratedTagArgs = {
  request: InternalRemoveCuratedTagRequest;
};

export type MutationInternalUpdateProfileStatusArgs = {
  request: InternalUpdateProfileStatusRequest;
};

export type MutationInviteArgs = {
  request: InviteRequest;
};

export type MutationLegacyCollectArgs = {
  request: LegacyCollectRequest;
};

export type MutationLinkHandleToProfileArgs = {
  request: LinkHandleToProfileRequest;
};

export type MutationMirrorOnMomokaArgs = {
  request: MomokaMirrorRequest;
};

export type MutationMirrorOnchainArgs = {
  request: OnchainMirrorRequest;
};

export type MutationNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};

export type MutationPostOnMomokaArgs = {
  request: MomokaPostRequest;
};

export type MutationPostOnchainArgs = {
  request: OnchainPostRequest;
};

export type MutationQuoteOnMomokaArgs = {
  request: MomokaQuoteRequest;
};

export type MutationQuoteOnchainArgs = {
  request: OnchainQuoteRequest;
};

export type MutationRefreshArgs = {
  request: RefreshRequest;
};

export type MutationRefreshPublicationMetadataArgs = {
  request: RefreshPublicationMetadataRequest;
};

export type MutationRemoveProfileInterestsArgs = {
  request: ProfileInterestsRequest;
};

export type MutationRemovePublicationBookmarkArgs = {
  request: PublicationBookmarkRequest;
};

export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};

export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};

export type MutationRevokeAuthenticationArgs = {
  request: RevokeAuthenticationRequest;
};

export type MutationSetDefaultProfileArgs = {
  request: SetDefaultProfileRequest;
};

export type MutationSetFollowModuleArgs = {
  request: SetFollowModuleRequest;
};

export type MutationSetProfileMetadataArgs = {
  request: OnchainSetProfileMetadataRequest;
};

export type MutationUnblockArgs = {
  request: UnblockRequest;
};

export type MutationUndoPublicationNotInterestedArgs = {
  request: PublicationNotInterestedRequest;
};

export type MutationUnfollowArgs = {
  request: UnfollowRequest;
};

export type MutationUnlinkHandleFromProfileArgs = {
  request: UnlinkHandleFromProfileRequest;
};

export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};

export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};

export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};

export type MutationWalletAuthenticationToProfileAuthenticationArgs = {
  request: WalletAuthenticationToProfileAuthenticationRequest;
};

export type MutualFollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  observer: Scalars['ProfileId'];
  viewing: Scalars['ProfileId'];
};

/** Mutual NFT collections request */
export type MutualNftCollectionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** Profile id of the first user */
  observer: Scalars['ProfileId'];
  /** Profile id of the second user */
  viewing: Scalars['ProfileId'];
};

export type MutualPoapsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  observer: Scalars['ProfileId'];
  viewing: Scalars['ProfileId'];
};

export type NetworkAddress = {
  __typename?: 'NetworkAddress';
  address: Scalars['EvmAddress'];
  chainId: Scalars['ChainId'];
};

export type NetworkAddressInput = {
  address: Scalars['EvmAddress'];
  chainId: Scalars['ChainId'];
};

export type Nfi = {
  c: Scalars['EvmAddress'];
  i: Scalars['ChainId'];
};

export type Nft = {
  __typename?: 'Nft';
  collection: NftCollection;
  contentURI: Scalars['URI'];
  contract: NetworkAddress;
  contractType: NftContractType;
  metadata: NftMetadata;
  owner: Owner;
  tokenId: Scalars['TokenId'];
  totalSupply: Scalars['String'];
};

/** Nft Collection type */
export type NftCollection = {
  __typename?: 'NftCollection';
  /** Collection base URI for token metadata */
  baseUri?: Maybe<Scalars['URI']>;
  /** The contract info, address and chain id */
  contract: NetworkAddress;
  /** Collection ERC type */
  contractType: NftContractType;
  /** Collection name */
  name: Scalars['String'];
  /** Collection symbol */
  symbol: Scalars['String'];
  /** Collection verified status */
  verified: Scalars['Boolean'];
};

export enum NftCollectionOwnersOrder {
  FollowersFirst = 'FollowersFirst',
  None = 'None'
}

/** NFT collection owners request */
export type NftCollectionOwnersRequest = {
  /** The profile id to use when ordering by followers */
  by?: InputMaybe<Scalars['ProfileId']>;
  /** The chain id */
  chainId: Scalars['ChainId'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The contract address */
  for: Scalars['EvmAddress'];
  limit?: InputMaybe<LimitType>;
  /** The ordering of Nft collection owners */
  order?: InputMaybe<NftCollectionOwnersOrder>;
};

/** A wrapper object containing an Nft collection, the total number of Lens profiles that own it, and optional field resolvers */
export type NftCollectionWithOwners = {
  __typename?: 'NftCollectionWithOwners';
  /** The Nft collection */
  collection: NftCollection;
  /** The total number of Lens profile owners that have at least 1 NFT from this collection */
  totalOwners: Scalars['Float'];
};

/** NFT collections request */
export type NftCollectionsRequest = {
  /** The chain ids to look for NFTs on. Ethereum and Polygon are supported. If omitted, it will look on both chains by default. */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Exclude Lens Follower NFTs */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  for?: InputMaybe<Scalars['ProfileId']>;
  /** Filter by owner address */
  forAddress?: InputMaybe<Scalars['EvmAddress']>;
  limit?: InputMaybe<LimitType>;
};

export enum NftContractType {
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type NftGalleriesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type NftGallery = {
  __typename?: 'NftGallery';
  createdAt: Scalars['DateTime'];
  id: Scalars['NftGalleryId'];
  items: Array<Nft>;
  name: Scalars['NftGalleryName'];
  owner: Scalars['ProfileId'];
  updatedAt: Scalars['DateTime'];
};

export type NftGalleryCreateRequest = {
  items: Array<NftInput>;
  name: Scalars['NftGalleryName'];
};

export type NftGalleryDeleteRequest = {
  galleryId: Scalars['NftGalleryId'];
};

export type NftGalleryUpdateInfoRequest = {
  galleryId: Scalars['NftGalleryId'];
  name: Scalars['NftGalleryName'];
};

export type NftGalleryUpdateItemOrderRequest = {
  galleryId: Scalars['NftGalleryId'];
  updates?: InputMaybe<Array<NftUpdateItemOrder>>;
};

export type NftGalleryUpdateItemsRequest = {
  galleryId: Scalars['NftGalleryId'];
  toAdd?: InputMaybe<Array<NftInput>>;
  toRemove?: InputMaybe<Array<NftInput>>;
};

export type NftImage = {
  __typename?: 'NftImage';
  /** The contract address of the NFT collection */
  collection: NetworkAddress;
  /** The image set for the NFT */
  image: ImageSet;
  /** The token ID of the NFT */
  tokenId: Scalars['TokenId'];
  /** Indicates whether the NFT is from a verified collection or not */
  verified: Scalars['Boolean'];
};

export type NftInput = {
  contract: NetworkAddressInput;
  tokenId: Scalars['TokenId'];
};

export type NftMetadata = {
  __typename?: 'NftMetadata';
  animationUrl?: Maybe<Scalars['URI']>;
  attributes?: Maybe<Array<PublicationMarketplaceMetadataAttribute>>;
  description?: Maybe<Scalars['Markdown']>;
  externalURL?: Maybe<Scalars['URL']>;
  image?: Maybe<ImageSet>;
  name?: Maybe<Scalars['String']>;
};

export type NftOwnershipChallengeRequest = {
  for: Scalars['EvmAddress'];
  nfts: Array<NftInput>;
};

export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  info?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type NftOwnershipCondition = {
  __typename?: 'NftOwnershipCondition';
  contract: NetworkAddress;
  contractType: NftContractType;
  tokenIds?: Maybe<Array<Scalars['TokenId']>>;
};

export type NftUpdateItemOrder = {
  contract: NetworkAddressInput;
  newOrder: Scalars['Int'];
  tokenId: Scalars['TokenId'];
};

export type NftsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<NftsRequestWhere>;
};

export type NftsRequestWhere = {
  /** Chain IDs to search. Supports Ethereum and Polygon. If omitted, it will search in both chains */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  excludeCollections?: InputMaybe<Array<NetworkAddressInput>>;
  /** Exclude follower NFTs from the search */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  /** Ethereum address of the owner. If unknown you can also search by profile ID */
  forAddress?: InputMaybe<Scalars['EvmAddress']>;
  /** Profile ID of the owner */
  forProfileId?: InputMaybe<Scalars['ProfileId']>;
  includeCollections?: InputMaybe<Array<NetworkAddressInput>>;
  /** Search query. Has to be part of a collection name */
  query?: InputMaybe<Scalars['String']>;
};

export type Notification =
  | ActedNotification
  | CommentNotification
  | FollowNotification
  | MentionNotification
  | MirrorNotification
  | QuoteNotification
  | ReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  where?: InputMaybe<NotificationWhere>;
};

export enum NotificationType {
  Acted = 'ACTED',
  Commented = 'COMMENTED',
  Followed = 'FOLLOWED',
  Mentioned = 'MENTIONED',
  Mirrored = 'MIRRORED',
  Quoted = 'QUOTED',
  Reacted = 'REACTED'
}

export type NotificationWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  highSignalFilter?: InputMaybe<Scalars['Boolean']>;
  notificationTypes?: InputMaybe<Array<NotificationType>>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type OnchainCommentRequest = {
  commentOn: Scalars['PublicationId'];
  /** If your using an unknown reference modules you need to pass this in. `followerOnlyReferenceModule` and `degreesOfSeparationReferenceModule` is handled automatically for you and if you supply this on publications with those settings it will be ignored */
  commentOnReferenceModuleData?: InputMaybe<Scalars['BlockchainData']>;
  contentURI: Scalars['URI'];
  openActionModules?: InputMaybe<Array<OpenActionModuleInput>>;
  referenceModule?: InputMaybe<ReferenceModuleInput>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type OnchainMirrorRequest = {
  /** You can add information like app on a mirror or tracking stuff */
  metadataURI?: InputMaybe<Scalars['URI']>;
  mirrorOn: Scalars['PublicationId'];
  /** If your using an unknown reference modules you need to pass this in. `followerOnlyReferenceModule` and `degreesOfSeparationReferenceModule` is handled automatically for you and if you supply this on publications with those settings it will be ignored */
  mirrorReferenceModuleData?: InputMaybe<Scalars['BlockchainData']>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type OnchainPostRequest = {
  contentURI: Scalars['URI'];
  openActionModules?: InputMaybe<Array<OpenActionModuleInput>>;
  referenceModule?: InputMaybe<ReferenceModuleInput>;
};

export type OnchainQuoteRequest = {
  contentURI: Scalars['URI'];
  openActionModules?: InputMaybe<Array<OpenActionModuleInput>>;
  quoteOn: Scalars['PublicationId'];
  /** If your using an unknown reference modules you need to pass this in. `followerOnlyReferenceModule` and `degreesOfSeparationReferenceModule` is handled automatically for you and if you supply this on publications with those settings it will be ignored */
  quoteOnReferenceModuleData?: InputMaybe<Scalars['BlockchainData']>;
  referenceModule?: InputMaybe<ReferenceModuleInput>;
  referrers?: InputMaybe<Array<OnchainReferrer>>;
};

export type OnchainReferrer = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
  publicationId?: InputMaybe<Scalars['PublicationId']>;
};

export type OnchainSetProfileMetadataRequest = {
  metadataURI: Scalars['URI'];
};

export enum OpenActionCategoryType {
  Collect = 'COLLECT'
}

export type OpenActionFilter = {
  address?: InputMaybe<Scalars['EvmAddress']>;
  category?: InputMaybe<OpenActionCategoryType>;
  type?: InputMaybe<OpenActionModuleType>;
};

export type OpenActionModule =
  | LegacyAaveFeeCollectModuleSettings
  | LegacyErc4626FeeCollectModuleSettings
  | LegacyFeeCollectModuleSettings
  | LegacyFreeCollectModuleSettings
  | LegacyLimitedFeeCollectModuleSettings
  | LegacyLimitedTimedFeeCollectModuleSettings
  | LegacyMultirecipientFeeCollectModuleSettings
  | LegacyRevertCollectModuleSettings
  | LegacySimpleCollectModuleSettings
  | LegacyTimedFeeCollectModuleSettings
  | MultirecipientFeeCollectOpenActionSettings
  | SimpleCollectOpenActionSettings
  | UnknownOpenActionModuleSettings;

export type OpenActionModuleInput = {
  collectOpenAction?: InputMaybe<CollectActionModuleInput>;
  unknownOpenAction?: InputMaybe<UnknownOpenActionModuleInput>;
};

export enum OpenActionModuleType {
  LegacyAaveFeeCollectModule = 'LegacyAaveFeeCollectModule',
  LegacyErc4626FeeCollectModule = 'LegacyERC4626FeeCollectModule',
  LegacyFeeCollectModule = 'LegacyFeeCollectModule',
  LegacyFreeCollectModule = 'LegacyFreeCollectModule',
  LegacyLimitedFeeCollectModule = 'LegacyLimitedFeeCollectModule',
  LegacyLimitedTimedFeeCollectModule = 'LegacyLimitedTimedFeeCollectModule',
  LegacyMultirecipientFeeCollectModule = 'LegacyMultirecipientFeeCollectModule',
  LegacyRevertCollectModule = 'LegacyRevertCollectModule',
  LegacySimpleCollectModule = 'LegacySimpleCollectModule',
  LegacyTimedFeeCollectModule = 'LegacyTimedFeeCollectModule',
  MultirecipientFeeCollectOpenActionModule = 'MultirecipientFeeCollectOpenActionModule',
  SimpleCollectOpenActionModule = 'SimpleCollectOpenActionModule',
  UnknownOpenActionModule = 'UnknownOpenActionModule'
}

export type OpenActionProfileActed = {
  __typename?: 'OpenActionProfileActed';
  actedAt: Scalars['DateTime'];
  action: OpenActionResult;
  by: Profile;
};

export type OpenActionResult = KnownCollectOpenActionResult | UnknownOpenActionResult;

export type OptimisticStatusResult = {
  __typename?: 'OptimisticStatusResult';
  isFinalisedOnchain: Scalars['Boolean'];
  value: Scalars['Boolean'];
};

export type OrCondition = {
  __typename?: 'OrCondition';
  criteria: Array<ThirdTierCondition>;
};

export type OwnedHandlesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The Ethereum address for which to retrieve owned handles */
  for: Scalars['EvmAddress'];
  limit?: InputMaybe<LimitType>;
};

export type Owner = {
  __typename?: 'Owner';
  address: Scalars['EvmAddress'];
  amount: Scalars['String'];
};

export type PaginatedApprovedAuthenticationResult = {
  __typename?: 'PaginatedApprovedAuthenticationResult';
  items: Array<ApprovedAuthentication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedCurrenciesResult = {
  __typename?: 'PaginatedCurrenciesResult';
  items: Array<Erc20>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedExplorePublicationResult = {
  __typename?: 'PaginatedExplorePublicationResult';
  items: Array<ExplorePublication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFeedHighlightsResult = {
  __typename?: 'PaginatedFeedHighlightsResult';
  items: Array<FeedHighlight>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult';
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedHandlesResult = {
  __typename?: 'PaginatedHandlesResult';
  items: Array<HandleInfo>;
  pageInfo: PaginatedResultInfo;
};

/** Nft collections paginated result */
export type PaginatedNftCollectionsResult = {
  __typename?: 'PaginatedNftCollectionsResult';
  items: Array<NftCollection>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNftGalleriesResult = {
  __typename?: 'PaginatedNftGalleriesResult';
  items: Array<NftGallery>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNftsResult = {
  __typename?: 'PaginatedNftsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** Pagination with Offset fields  */
export type PaginatedOffsetRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

/** The paginated Poap Events result */
export type PaginatedPoapEventResult = {
  __typename?: 'PaginatedPoapEventResult';
  items: Array<PoapEvent>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated Poap Token Results */
export type PaginatedPoapTokenResult = {
  __typename?: 'PaginatedPoapTokenResult';
  items: Array<PoapToken>;
  pageInfo: PaginatedResultInfo;
};

/** Popular Nft collections paginated result */
export type PaginatedPopularNftCollectionsResult = {
  __typename?: 'PaginatedPopularNftCollectionsResult';
  items: Array<NftCollectionWithOwners>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedProfileActionHistoryResult = {
  __typename?: 'PaginatedProfileActionHistoryResult';
  items: Array<ProfileActionHistory>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile managers result */
export type PaginatedProfileManagersResult = {
  __typename?: 'PaginatedProfileManagersResult';
  items: Array<ProfilesManagedResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPublicationPrimaryResult = {
  __typename?: 'PaginatedPublicationPrimaryResult';
  items: Array<PrimaryPublication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPublicationsResult = {
  __typename?: 'PaginatedPublicationsResult';
  items: Array<AnyPublication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPublicationsTagsResult = {
  __typename?: 'PaginatedPublicationsTagsResult';
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>;
};

export type PaginatedRevenueFromPublicationsResult = {
  __typename?: 'PaginatedRevenueFromPublicationsResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedSupportedModules = {
  __typename?: 'PaginatedSupportedModules';
  items: Array<SupportedModule>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<ProfileWhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PhysicalAddress = {
  __typename?: 'PhysicalAddress';
  /** The country name component. */
  country: Scalars['EncryptableString'];
  /** The full mailing address formatted for display. */
  formatted?: Maybe<Scalars['EncryptableString']>;
  /** The city or locality. */
  locality: Scalars['EncryptableString'];
  /** The zip or postal code. */
  postalCode?: Maybe<Scalars['EncryptableString']>;
  /** The state or region. */
  region?: Maybe<Scalars['EncryptableString']>;
  /** The street address including house number, street name, P.O. Box, apartment or unit number and extended multi-line address information. */
  streetAddress?: Maybe<Scalars['EncryptableString']>;
};

/** The POAP Event result */
export type PoapEvent = {
  __typename?: 'PoapEvent';
  animationUrl?: Maybe<Scalars['URL']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  eventTemplateId?: Maybe<Scalars['Int']>;
  eventUrl?: Maybe<Scalars['URL']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  fancyId?: Maybe<Scalars['String']>;
  fromAdmin?: Maybe<Scalars['Boolean']>;
  id: Scalars['PoapEventId'];
  imageUrl?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  privateEvent?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['DateTime']>;
  virtualEvent?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['Int']>;
};

export type PoapEventQueryRequest = {
  eventId: Scalars['PoapEventId'];
};

export type PoapHoldersQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  eventId: Scalars['PoapEventId'];
  limit?: InputMaybe<LimitType>;
};

/** The Poap Token Event */
export type PoapToken = {
  __typename?: 'PoapToken';
  created: Scalars['DateTime'];
  event: PoapEvent;
  /** Poap Event Id */
  eventId: Scalars['PoapEventId'];
  /** Which network the token is: L1 (eth) or L2 (Gnosis) */
  layer: PoapTokenLayerType;
  /** migrated to L1 at */
  migrated?: Maybe<Scalars['DateTime']>;
  owner: NetworkAddress;
  tokenId: Scalars['TokenId'];
};

export enum PoapTokenLayerType {
  Layer1 = 'Layer1',
  Layer2 = 'Layer2'
}

export enum PopularNftCollectionsOrder {
  TotalLensProfileOwners = 'TotalLensProfileOwners',
  TotalOwners = 'TotalOwners'
}

/** Popular NFT collections request */
export type PopularNftCollectionsRequest = {
  /** The chain ids to look for NFTs on. Ethereum and Polygon are supported. If omitted, it will look on both chains by default. */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Exclude Lens Follower NFTs */
  excludeFollowers?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<LimitType>;
  /** Include only verified collections */
  onlyVerified?: InputMaybe<Scalars['Boolean']>;
  /** The ordering of Nft collection owners. Defaults to Total Lens Profile owners */
  orderBy?: InputMaybe<PopularNftCollectionsOrder>;
};

export type Post = {
  __typename?: 'Post';
  by: Profile;
  createdAt: Scalars['DateTime'];
  hashtagsMentioned: Array<Scalars['String']>;
  id: Scalars['PublicationId'];
  isEncrypted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  profilesMentioned: Array<ProfileMentioned>;
  publishedOn?: Maybe<App>;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
  txHash?: Maybe<Scalars['TxHash']>;
};

export type PostStatsArgs = {
  request?: InputMaybe<PublicationStatsInput>;
};

export type PrfResult = {
  __typename?: 'PrfResult';
  dd: Scalars['Boolean'];
  ss: Scalars['Boolean'];
};

export type PrimaryPublication = Comment | Post | Quote;

/** The Profile */
export type Profile = {
  __typename?: 'Profile';
  /** When the profile was created */
  createdAt: Scalars['DateTime'];
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** The profile follow nft address */
  followNftAddress?: Maybe<NetworkAddress>;
  guardian?: Maybe<ProfileGuardianResult>;
  /** The profile handle - a profile may not have one */
  handle?: Maybe<HandleInfo>;
  /** The profile id */
  id: Scalars['ProfileId'];
  interests: Array<Scalars['String']>;
  invitedBy?: Maybe<Profile>;
  /** The number of invites left */
  invitesLeft: Scalars['Int'];
  /** The profile metadata. You can optionally query profile metadata by app id.  */
  metadata?: Maybe<ProfileMetadata>;
  /** The on chain identity */
  onchainIdentity: ProfileOnchainIdentity;
  operations: ProfileOperations;
  /** Who owns the profile */
  ownedBy: NetworkAddress;
  /** If the profile has got signless enabled */
  signless: Scalars['Boolean'];
  /** If lens API will sponsor this persons for gasless experience, note they can have signless on but sponsor false which means it be rejected */
  sponsor: Scalars['Boolean'];
  stats: ProfileStats;
  txHash: Scalars['TxHash'];
};

/** The Profile */
export type ProfileMetadataArgs = {
  request?: InputMaybe<GetProfileMetadataArgs>;
};

/** The Profile */
export type ProfileStatsArgs = {
  request?: InputMaybe<ProfileStatsArg>;
};

/** The Profile */
export type ProfileActionHistory = {
  __typename?: 'ProfileActionHistory';
  actionType: ProfileActionHistoryType;
  actionedOn: Scalars['DateTime'];
  id: Scalars['Float'];
  txHash?: Maybe<Scalars['TxHash']>;
  who: Scalars['EvmAddress'];
};

export type ProfileActionHistoryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

/** Profile action history type */
export enum ProfileActionHistoryType {
  Acted = 'ACTED',
  Blocked = 'BLOCKED',
  Collected = 'COLLECTED',
  Comment = 'COMMENT',
  Follow = 'FOLLOW',
  LinkHandle = 'LINK_HANDLE',
  LoggedIn = 'LOGGED_IN',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE',
  RefreshAuthToken = 'REFRESH_AUTH_TOKEN',
  SetProfileMetadata = 'SET_PROFILE_METADATA',
  SetProfileModule = 'SET_PROFILE_MODULE',
  Unblocked = 'UNBLOCKED',
  Unfollow = 'UNFOLLOW',
  UnlinkHandle = 'UNLINK_HANDLE'
}

export type ProfileGuardianResult = {
  __typename?: 'ProfileGuardianResult';
  cooldownEndsOn?: Maybe<Scalars['DateTime']>;
  protected: Scalars['Boolean'];
};

/** Profile interests types */
export enum ProfileInterestTypes {
  ArtEntertainment = 'ART_ENTERTAINMENT',
  ArtEntertainmentAnime = 'ART_ENTERTAINMENT__ANIME',
  ArtEntertainmentArt = 'ART_ENTERTAINMENT__ART',
  ArtEntertainmentBooks = 'ART_ENTERTAINMENT__BOOKS',
  ArtEntertainmentDesign = 'ART_ENTERTAINMENT__DESIGN',
  ArtEntertainmentFashion = 'ART_ENTERTAINMENT__FASHION',
  ArtEntertainmentFilmTv = 'ART_ENTERTAINMENT__FILM_TV',
  ArtEntertainmentMemes = 'ART_ENTERTAINMENT__MEMES',
  ArtEntertainmentMusic = 'ART_ENTERTAINMENT__MUSIC',
  ArtEntertainmentPhotography = 'ART_ENTERTAINMENT__PHOTOGRAPHY',
  Business = 'BUSINESS',
  BusinessCreatorEconomy = 'BUSINESS__CREATOR_ECONOMY',
  BusinessFinance = 'BUSINESS__FINANCE',
  BusinessMarketing = 'BUSINESS__MARKETING',
  Career = 'CAREER',
  Crypto = 'CRYPTO',
  CryptoBitcoin = 'CRYPTO__BITCOIN',
  CryptoDaos = 'CRYPTO__DAOS',
  CryptoDefi = 'CRYPTO__DEFI',
  CryptoEthereum = 'CRYPTO__ETHEREUM',
  CryptoGm = 'CRYPTO__GM',
  CryptoGovernance = 'CRYPTO__GOVERNANCE',
  CryptoL1 = 'CRYPTO__L1',
  CryptoL2 = 'CRYPTO__L2',
  CryptoMetaverse = 'CRYPTO__METAVERSE',
  CryptoNft = 'CRYPTO__NFT',
  CryptoRekt = 'CRYPTO__REKT',
  CryptoScaling = 'CRYPTO__SCALING',
  CryptoWeb3 = 'CRYPTO__WEB3',
  CryptoWeb3Social = 'CRYPTO__WEB3_SOCIAL',
  Education = 'EDUCATION',
  FamilyParenting = 'FAMILY_PARENTING',
  FoodDrink = 'FOOD_DRINK',
  FoodDrinkBeer = 'FOOD_DRINK__BEER',
  FoodDrinkCocktails = 'FOOD_DRINK__COCKTAILS',
  FoodDrinkCooking = 'FOOD_DRINK__COOKING',
  FoodDrinkRestaurants = 'FOOD_DRINK__RESTAURANTS',
  FoodDrinkWine = 'FOOD_DRINK__WINE',
  HealthFitness = 'HEALTH_FITNESS',
  HealthFitnessBiohacking = 'HEALTH_FITNESS__BIOHACKING',
  HealthFitnessExercise = 'HEALTH_FITNESS__EXERCISE',
  HobbiesInterests = 'HOBBIES_INTERESTS',
  HobbiesInterestsArtsCrafts = 'HOBBIES_INTERESTS__ARTS_CRAFTS',
  HobbiesInterestsCars = 'HOBBIES_INTERESTS__CARS',
  HobbiesInterestsCollecting = 'HOBBIES_INTERESTS__COLLECTING',
  HobbiesInterestsGaming = 'HOBBIES_INTERESTS__GAMING',
  HobbiesInterestsSports = 'HOBBIES_INTERESTS__SPORTS',
  HobbiesInterestsTravel = 'HOBBIES_INTERESTS__TRAVEL',
  HomeGarden = 'HOME_GARDEN',
  HomeGardenAnimals = 'HOME_GARDEN__ANIMALS',
  HomeGardenGardening = 'HOME_GARDEN__GARDENING',
  HomeGardenHomeImprovement = 'HOME_GARDEN__HOME_IMPROVEMENT',
  HomeGardenNature = 'HOME_GARDEN__NATURE',
  LawGovernmentPolitics = 'LAW_GOVERNMENT_POLITICS',
  LawGovernmentPoliticsRegulation = 'LAW_GOVERNMENT_POLITICS__REGULATION',
  Lens = 'LENS',
  News = 'NEWS',
  Nsfw = 'NSFW',
  Technology = 'TECHNOLOGY',
  TechnologyAiMl = 'TECHNOLOGY__AI_ML',
  TechnologyBiotech = 'TECHNOLOGY__BIOTECH',
  TechnologyProgramming = 'TECHNOLOGY__PROGRAMMING',
  TechnologyScience = 'TECHNOLOGY__SCIENCE',
  TechnologyTools = 'TECHNOLOGY__TOOLS'
}

export type ProfileInterestsRequest = {
  interests: Array<ProfileInterestTypes>;
};

export type ProfileManagersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The profile ID for which to retrieve managers */
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type ProfileMentioned = {
  __typename?: 'ProfileMentioned';
  profile: Profile;
  snapshotHandleMentioned: HandleInfo;
  stillOwnsHandle: Scalars['Boolean'];
};

export type ProfileMetadata = {
  __typename?: 'ProfileMetadata';
  /** The app that this metadata is displayed on */
  appId?: Maybe<Scalars['AppId']>;
  /** Profile Custom attributes */
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** The bio for the profile */
  bio?: Maybe<Scalars['Markdown']>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ImageSet>;
  /** The display name for the profile */
  displayName?: Maybe<Scalars['String']>;
  /** The picture for the profile */
  picture?: Maybe<ProfilePicture>;
  /** The raw uri for the which the profile metadata was set as */
  rawURI: Scalars['URI'];
};

export type ProfileMirrorResult = {
  __typename?: 'ProfileMirrorResult';
  mirrorId: Scalars['PublicationId'];
  mirroredAt: Scalars['DateTime'];
  profile: Profile;
};

export type ProfileOnchainIdentity = {
  __typename?: 'ProfileOnchainIdentity';
  /** The ens information */
  ens?: Maybe<EnsOnchainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars['Boolean'];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

export type ProfileOperations = {
  __typename?: 'ProfileOperations';
  canBlock: Scalars['Boolean'];
  canFollow: TriStateValue;
  canUnblock: Scalars['Boolean'];
  canUnfollow: Scalars['Boolean'];
  id: Scalars['ProfileId'];
  isBlockedByMe: OptimisticStatusResult;
  isFollowedByMe: OptimisticStatusResult;
  isFollowingMe: OptimisticStatusResult;
};

export type ProfileOwnershipCondition = {
  __typename?: 'ProfileOwnershipCondition';
  profileId: Scalars['ProfileId'];
};

export type ProfilePicture = ImageSet | NftImage;

export type ProfileReactedResult = {
  __typename?: 'ProfileReactedResult';
  profile: Profile;
  reactions: Array<ReactedResult>;
};

/** The reaction details for a publication */
export type ProfileReactionResult = {
  __typename?: 'ProfileReactionResult';
  /** The reaction */
  reaction: PublicationReactionType;
  /** The reaction date */
  reactionAt: Scalars['DateTime'];
};

export type ProfileRecommendationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Disable machine learning recommendations (default: false) */
  disableML?: InputMaybe<Scalars['Boolean']>;
  /** Filter based on a specific profile ID */
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
  /** Shuffle the recommendations (default: false) */
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ProfileRequest = {
  /** The handle for profile you want to fetch - namespace/localname */
  forHandle?: InputMaybe<Scalars['Handle']>;
  /** The profile you want to fetch */
  forProfileId?: InputMaybe<Scalars['ProfileId']>;
};

export type ProfileSearchRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** Query for the profile search */
  query: Scalars['String'];
  /** Filtering criteria for profile search */
  where?: InputMaybe<ProfileSearchWhere>;
};

export type ProfileSearchWhere = {
  /** Array of custom filters for profile search */
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
};

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats';
  comments: Scalars['Int'];
  countOpenActions: Scalars['Int'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
  id: Scalars['ProfileId'];
  mirrors: Scalars['Int'];
  posts: Scalars['Int'];
  publications: Scalars['Int'];
  quotes: Scalars['Int'];
  /** How many times a profile has reacted on something */
  reacted: Scalars['Int'];
  /** How many times other profiles have reacted on something this profile did */
  reactions: Scalars['Int'];
};

/** The Profile Stats */
export type ProfileStatsCountOpenActionsArgs = {
  request?: InputMaybe<ProfileStatsCountOpenActionArgs>;
};

/** The Profile Stats */
export type ProfileStatsReactedArgs = {
  request?: InputMaybe<ProfileStatsReactionArgs>;
};

/** The Profile Stats */
export type ProfileStatsReactionsArgs = {
  request?: InputMaybe<ProfileStatsReactionArgs>;
};

export type ProfileStatsArg = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  forApps?: InputMaybe<Array<Scalars['AppId']>>;
};

export type ProfileStatsCountOpenActionArgs = {
  anyOf?: InputMaybe<Array<OpenActionFilter>>;
};

export type ProfileStatsReactionArgs = {
  type: PublicationReactionType;
};

export type ProfileWhoReactedResult = {
  __typename?: 'ProfileWhoReactedResult';
  profile: Profile;
  reactions: Array<ProfileReactionResult>;
};

export type ProfilesManagedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The Ethereum address for which to retrieve managed profiles */
  for: Scalars['EvmAddress'];
  includeOwned?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<LimitType>;
};

export type ProfilesManagedResult = {
  __typename?: 'ProfilesManagedResult';
  address: Scalars['EvmAddress'];
};

export type ProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  /** The where clause to use to filter on what you are looking for */
  where: ProfilesRequestWhere;
};

export type ProfilesRequestWhere = {
  /** Pass in an array of handles to get the profile entities */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  /** Pass in an array of evm address to get the profile entities they own */
  ownedBy?: InputMaybe<Array<Scalars['EvmAddress']>>;
  /** Pass in an array of profile ids to get the profile entities */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** Pass the publication id and get a list of the profiles who commented on it */
  whoCommentedOn?: InputMaybe<Scalars['PublicationId']>;
  /** Pass the publication id and get a list of the profiles who mirrored it */
  whoMirroredPublication?: InputMaybe<Scalars['PublicationId']>;
  /** Pass the publication id and get a list of the profiles who quoted it */
  whoQuotedPublication?: InputMaybe<Scalars['PublicationId']>;
};

export type PublicationBookmarkRequest = {
  on: Scalars['PublicationId'];
};

export type PublicationBookmarksRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<PublicationBookmarksWhere>;
};

export type PublicationBookmarksWhere = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type PublicationCommentOn = {
  id: Scalars['PublicationId'];
  ranking?: InputMaybe<PublicationCommentOnRanking>;
};

export type PublicationCommentOnRanking = {
  filter?: InputMaybe<CommentRankingFilterType>;
};

export enum PublicationContentWarningType {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationMarketplaceMetadataAttribute = {
  __typename?: 'PublicationMarketplaceMetadataAttribute';
  displayType?: Maybe<MarketplaceMetadataAttributeDisplayType>;
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PublicationMetadata =
  | ArticleMetadataV3
  | AudioMetadataV3
  | CheckingInMetadataV3
  | EmbedMetadataV3
  | EventMetadataV3
  | ImageMetadataV3
  | LinkMetadataV3
  | LiveStreamMetadataV3
  | MintMetadataV3
  | SpaceMetadataV3
  | StoryMetadataV3
  | TextOnlyMetadataV3
  | ThreeDMetadataV3
  | TransactionMetadataV3
  | VideoMetadataV3;

export type PublicationMetadataContentWarningFilter = {
  oneOf: Array<PublicationContentWarningType>;
};

export type PublicationMetadataEncryptionStrategy = PublicationMetadataLitEncryption;

export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  locale?: InputMaybe<Scalars['Locale']>;
  mainContentFocus?: InputMaybe<Array<PublicationMetadataMainFocusType>>;
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

export enum PublicationMetadataLicenseType {
  Cco = 'CCO',
  CcBy = 'CC_BY',
  CcByNc = 'CC_BY_NC',
  CcByNd = 'CC_BY_ND',
  TbnlCDtsaNplLedger = 'TBNL_C_DTSA_NPL_Ledger',
  TbnlCDtsaNplLegal = 'TBNL_C_DTSA_NPL_Legal',
  TbnlCDtsaPlLedger = 'TBNL_C_DTSA_PL_Ledger',
  TbnlCDtsaPlLegal = 'TBNL_C_DTSA_PL_Legal',
  TbnlCDtNplLedger = 'TBNL_C_DT_NPL_Ledger',
  TbnlCDtNplLegal = 'TBNL_C_DT_NPL_Legal',
  TbnlCDtPlLedger = 'TBNL_C_DT_PL_Ledger',
  TbnlCDtPlLegal = 'TBNL_C_DT_PL_Legal',
  TbnlCDNplLedger = 'TBNL_C_D_NPL_Ledger',
  TbnlCDNplLegal = 'TBNL_C_D_NPL_Legal',
  TbnlCDPlLedger = 'TBNL_C_D_PL_Ledger',
  TbnlCDPlLegal = 'TBNL_C_D_PL_Legal',
  TbnlCNdNplLedger = 'TBNL_C_ND_NPL_Ledger',
  TbnlCNdNplLegal = 'TBNL_C_ND_NPL_Legal',
  TbnlCNdPlLedger = 'TBNL_C_ND_PL_Ledger',
  TbnlCNdPlLegal = 'TBNL_C_ND_PL_Legal',
  TbnlNcDtsaNplLedger = 'TBNL_NC_DTSA_NPL_Ledger',
  TbnlNcDtsaNplLegal = 'TBNL_NC_DTSA_NPL_Legal',
  TbnlNcDtsaPlLedger = 'TBNL_NC_DTSA_PL_Ledger',
  TbnlNcDtsaPlLegal = 'TBNL_NC_DTSA_PL_Legal',
  TbnlNcDtNplLedger = 'TBNL_NC_DT_NPL_Ledger',
  TbnlNcDtNplLegal = 'TBNL_NC_DT_NPL_Legal',
  TbnlNcDtPlLedger = 'TBNL_NC_DT_PL_Ledger',
  TbnlNcDtPlLegal = 'TBNL_NC_DT_PL_Legal',
  TbnlNcDNplLedger = 'TBNL_NC_D_NPL_Ledger',
  TbnlNcDNplLegal = 'TBNL_NC_D_NPL_Legal',
  TbnlNcDPlLedger = 'TBNL_NC_D_PL_Ledger',
  TbnlNcDPlLegal = 'TBNL_NC_D_PL_Legal',
  TbnlNcNdNplLedger = 'TBNL_NC_ND_NPL_Ledger',
  TbnlNcNdNplLegal = 'TBNL_NC_ND_NPL_Legal',
  TbnlNcNdPlLedger = 'TBNL_NC_ND_PL_Ledger',
  TbnlNcNdPlLegal = 'TBNL_NC_ND_PL_Legal'
}

export type PublicationMetadataLitEncryption = {
  __typename?: 'PublicationMetadataLitEncryption';
  accessCondition: RootCondition;
  encryptedPaths: Array<Scalars['EncryptedPath']>;
  encryptionKey: Scalars['ContentEncryptionKey'];
};

export enum PublicationMetadataMainFocusType {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  CheckingIn = 'CHECKING_IN',
  Embed = 'EMBED',
  Event = 'EVENT',
  Image = 'IMAGE',
  Link = 'LINK',
  Livestream = 'LIVESTREAM',
  Mint = 'MINT',
  ShortVideo = 'SHORT_VIDEO',
  Space = 'SPACE',
  Story = 'STORY',
  TextOnly = 'TEXT_ONLY',
  ThreeD = 'THREE_D',
  Transaction = 'TRANSACTION',
  Video = 'VIDEO'
}

export type PublicationMetadataMedia =
  | PublicationMetadataMediaAudio
  | PublicationMetadataMediaImage
  | PublicationMetadataMediaVideo;

export type PublicationMetadataMediaAudio = {
  __typename?: 'PublicationMetadataMediaAudio';
  artist?: Maybe<Scalars['EncryptableString']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  audio: EncryptableAudioSet;
  cover?: Maybe<EncryptableImageSet>;
  credits?: Maybe<Scalars['EncryptableString']>;
  duration?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['EncryptableString']>;
  license?: Maybe<PublicationMetadataLicenseType>;
  lyrics?: Maybe<Scalars['EncryptableString']>;
  recordLabel?: Maybe<Scalars['EncryptableString']>;
};

export type PublicationMetadataMediaImage = {
  __typename?: 'PublicationMetadataMediaImage';
  /** Alternative text for the image */
  altTag?: Maybe<Scalars['EncryptableString']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  image: EncryptableImageSet;
  license?: Maybe<PublicationMetadataLicenseType>;
};

export type PublicationMetadataMediaVideo = {
  __typename?: 'PublicationMetadataMediaVideo';
  /** Alternative text for the video */
  altTag?: Maybe<Scalars['EncryptableString']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  cover?: Maybe<EncryptableImageSet>;
  duration?: Maybe<Scalars['Int']>;
  license?: Maybe<PublicationMetadataLicenseType>;
  video: EncryptableVideoSet;
};

export type PublicationMetadataTagsFilter = {
  all?: InputMaybe<Array<Scalars['String']>>;
  oneOf?: InputMaybe<Array<Scalars['String']>>;
};

export enum PublicationMetadataTransactionType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Other = 'OTHER'
}

export type PublicationNotInterestedRequest = {
  on: Scalars['PublicationId'];
};

export type PublicationOperations = {
  __typename?: 'PublicationOperations';
  actedOn: Array<OpenActionResult>;
  canAct: TriStateValue;
  canComment: TriStateValue;
  canDecrypt: CanDecryptResponse;
  canMirror: TriStateValue;
  canQuote: TriStateValue;
  hasActed: OptimisticStatusResult;
  hasBookmarked: Scalars['Boolean'];
  hasMirrored: Scalars['Boolean'];
  hasQuoted: Scalars['Boolean'];
  hasReacted: Scalars['Boolean'];
  hasReported: Scalars['Boolean'];
  id: Scalars['PublicationId'];
  isNotInterested: Scalars['Boolean'];
};

export type PublicationOperationsActedOnArgs = {
  request?: InputMaybe<PublicationOperationsActedArgs>;
};

export type PublicationOperationsCanActArgs = {
  request?: InputMaybe<PublicationOperationsActedArgs>;
};

export type PublicationOperationsHasActedArgs = {
  request?: InputMaybe<PublicationOperationsActedArgs>;
};

export type PublicationOperationsHasReactedArgs = {
  request?: InputMaybe<PublicationOperationsReactionArgs>;
};

export type PublicationOperationsActedArgs = {
  filter?: InputMaybe<OpenActionFilter>;
};

export type PublicationOperationsReactionArgs = {
  type?: InputMaybe<PublicationReactionType>;
};

export enum PublicationReactionType {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  LowSignal = 'LOW_SIGNAL',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

export type PublicationRequest = {
  forId?: InputMaybe<Scalars['PublicationId']>;
  forTxHash?: InputMaybe<Scalars['TxHash']>;
};

export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: AnyPublication;
  revenue: Array<RevenueAggregate>;
};

export type PublicationSearchRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  query: Scalars['String'];
  where?: InputMaybe<PublicationSearchWhere>;
};

export type PublicationSearchWhere = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  publicationTypes?: InputMaybe<Array<SearchPublicationType>>;
};

export type PublicationStats = {
  __typename?: 'PublicationStats';
  bookmarks: Scalars['Int'];
  comments: Scalars['Int'];
  countOpenActions: Scalars['Int'];
  id: Scalars['PublicationId'];
  mirrors: Scalars['Int'];
  quotes: Scalars['Int'];
  reactions: Scalars['Int'];
};

export type PublicationStatsCountOpenActionsArgs = {
  request?: InputMaybe<PublicationStatsCountOpenActionArgs>;
};

export type PublicationStatsReactionsArgs = {
  request?: InputMaybe<PublicationStatsReactionArgs>;
};

export type PublicationStatsCountOpenActionArgs = {
  anyOf?: InputMaybe<Array<OpenActionFilter>>;
};

export type PublicationStatsInput = {
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  /** Filter the returned stats on apps and 1 of the following filters: tags, contentWarning, mainContentFocus, locale */
  metadata?: InputMaybe<PublicationMetadataFilters>;
};

export type PublicationStatsReactionArgs = {
  type: PublicationReactionType;
};

export enum PublicationType {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  Quote = 'QUOTE'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  reason?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PublicationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  where: PublicationsWhere;
};

export type PublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  orderBy?: InputMaybe<TagSortCriteriaType>;
  where?: InputMaybe<PublicationsTagsWhere>;
};

export type PublicationsTagsWhere = {
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type PublicationsWhere = {
  actedBy?: InputMaybe<Scalars['ProfileId']>;
  commentOn?: InputMaybe<PublicationCommentOn>;
  customFilters?: InputMaybe<Array<CustomFiltersType>>;
  from?: InputMaybe<Array<Scalars['ProfileId']>>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  mirrorOn?: InputMaybe<Scalars['PublicationId']>;
  publicationIds?: InputMaybe<Array<Scalars['PublicationId']>>;
  publicationTypes?: InputMaybe<Array<PublicationType>>;
  quoteOn?: InputMaybe<Scalars['PublicationId']>;
  withOpenActions?: InputMaybe<Array<OpenActionFilter>>;
};

export type Query = {
  __typename?: 'Query';
  approvedAuthentications: PaginatedApprovedAuthenticationResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmountResult>;
  challenge: AuthChallengeResult;
  claimableProfiles: ClaimableProfilesResult;
  claimableStatus: ClaimProfileStatusType;
  /** Get all enabled currencies */
  currencies: PaginatedCurrenciesResult;
  currentSession: ApprovedAuthentication;
  /** Get the default profile for a given EvmAddress. If no default is explicitly set, you will get the oldest profile owned by the address. */
  defaultProfile?: Maybe<Profile>;
  exploreProfiles: PaginatedProfileResult;
  explorePublications: PaginatedExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedFeedHighlightsResult;
  followRevenues: FollowRevenueResult;
  followStatusBulk: Array<FollowStatusBulkResult>;
  followers: PaginatedProfileResult;
  following: PaginatedProfileResult;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApprovalResult;
  internalAllowedDomains: Array<Scalars['URI']>;
  internalClaimStatus?: Maybe<Scalars['Void']>;
  internalCuratedHandles: Array<Scalars['String']>;
  internalCuratedTags: Array<Scalars['String']>;
  internalInvites: Scalars['Int'];
  internalProfileStatus: PrfResult;
  invitedProfiles: Array<InvitedResult>;
  lastLoggedInProfile?: Maybe<Profile>;
  lensAPIOwnedEOAs: Array<Scalars['EvmAddress']>;
  lensProtocolVersion: LensProtocolVersion;
  lensTransactionStatus?: Maybe<LensTransactionResult>;
  momokaSubmitters: MomokaSubmittersResult;
  momokaSummary: MomokaSummaryResult;
  momokaTransaction?: Maybe<MomokaTransaction>;
  momokaTransactions: MomokaTransactionsResult;
  /** Returns a paged list of profiles that are followed by both the observer and the viewing profile */
  mutualFollowers: PaginatedProfileResult;
  /** Get the NFT collections that the given two profiles own at least one NFT of. */
  mutualNftCollections: PaginatedNftCollectionsResult;
  mutualPoaps: PaginatedPoapEventResult;
  /** Get the Lens Profiles that own NFTs from a given collection. */
  nftCollectionOwners: PaginatedProfileResult;
  /** Get the NFT collections that the given wallet or profileId owns at least one NFT of. Only supports Ethereum and Polygon NFTs. Note excludeFollowers is set to true by default, so the result will not include Lens Follower NFTsunless explicitly requested. */
  nftCollections: PaginatedNftCollectionsResult;
  nftGalleries: PaginatedNftGalleriesResult;
  nfts: PaginatedNftsResult;
  notifications: PaginatedNotificationResult;
  ownedHandles: PaginatedHandlesResult;
  ping: Scalars['String'];
  poapEvent?: Maybe<PoapEvent>;
  poapHolders: PaginatedProfileResult;
  poaps: PaginatedPoapTokenResult;
  /** Get the most popular NFT collections. Popularity is based on how many Lens Profiles own NFTs from a given collection. */
  popularNftCollections: PaginatedPopularNftCollectionsResult;
  profile?: Maybe<Profile>;
  profileActionHistory: PaginatedProfileActionHistoryResult;
  profileAlreadyInvited: Scalars['Boolean'];
  profileInterestsOptions: Array<Scalars['String']>;
  profileManagers: PaginatedProfileManagersResult;
  profileRecommendations: PaginatedProfileResult;
  profiles: PaginatedProfileResult;
  profilesManaged: PaginatedProfileResult;
  publication?: Maybe<AnyPublication>;
  publicationBookmarks: PaginatedPublicationsResult;
  publications: PaginatedPublicationsResult;
  publicationsTags: PaginatedPublicationsTagsResult;
  relayQueues: Array<RelayQueueResult>;
  revenueFromPublication?: Maybe<PublicationRevenue>;
  revenueFromPublications: PaginatedRevenueFromPublicationsResult;
  searchProfiles: PaginatedProfileResult;
  searchPublications: PaginatedPublicationPrimaryResult;
  supportedFollowModules: PaginatedSupportedModules;
  supportedOpenActionCollectModules: PaginatedSupportedModules;
  supportedOpenActionModules: PaginatedSupportedModules;
  supportedReferenceModules: PaginatedSupportedModules;
  txIdToTxHash?: Maybe<Scalars['TxHash']>;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean'];
  whoActedOnPublication: PaginatedProfileResult;
  /** The list of profiles that the logged in profile has blocked */
  whoHaveBlocked: PaginatedProfileResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};

export type QueryApprovedAuthenticationsArgs = {
  request: ApprovedAuthenticationRequest;
};

export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};

export type QueryChallengeArgs = {
  request: ChallengeRequest;
};

export type QueryCurrenciesArgs = {
  request: PaginatedOffsetRequest;
};

export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};

export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};

export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};

export type QueryFeedArgs = {
  request: FeedRequest;
};

export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};

export type QueryFollowRevenuesArgs = {
  request: FollowRevenueRequest;
};

export type QueryFollowStatusBulkArgs = {
  request: FollowStatusBulkRequest;
};

export type QueryFollowersArgs = {
  request: FollowersRequest;
};

export type QueryFollowingArgs = {
  request: FollowingRequest;
};

export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};

export type QueryInternalAllowedDomainsArgs = {
  request: InternalAllowedDomainsRequest;
};

export type QueryInternalClaimStatusArgs = {
  request: InternalClaimStatusRequest;
};

export type QueryInternalCuratedHandlesArgs = {
  request: InternalCuratedHandlesRequest;
};

export type QueryInternalCuratedTagsArgs = {
  request: InternalCuratedTagsRequest;
};

export type QueryInternalInvitesArgs = {
  request: InternalInvitesRequest;
};

export type QueryInternalProfileStatusArgs = {
  request: InternalProfileStatusRequest;
};

export type QueryLastLoggedInProfileArgs = {
  request: LastLoggedInProfileRequest;
};

export type QueryLensTransactionStatusArgs = {
  request: LensTransactionStatusRequest;
};

export type QueryMomokaTransactionArgs = {
  request: MomokaTransactionRequest;
};

export type QueryMomokaTransactionsArgs = {
  request: MomokaTransactionsRequest;
};

export type QueryMutualFollowersArgs = {
  request: MutualFollowersRequest;
};

export type QueryMutualNftCollectionsArgs = {
  request: MutualNftCollectionsRequest;
};

export type QueryMutualPoapsArgs = {
  request: MutualPoapsQueryRequest;
};

export type QueryNftCollectionOwnersArgs = {
  request: NftCollectionOwnersRequest;
};

export type QueryNftCollectionsArgs = {
  request: NftCollectionsRequest;
};

export type QueryNftGalleriesArgs = {
  request: NftGalleriesRequest;
};

export type QueryNftsArgs = {
  request: NftsRequest;
};

export type QueryNotificationsArgs = {
  request?: InputMaybe<NotificationRequest>;
};

export type QueryOwnedHandlesArgs = {
  request: OwnedHandlesRequest;
};

export type QueryPoapEventArgs = {
  request: PoapEventQueryRequest;
};

export type QueryPoapHoldersArgs = {
  request: PoapHoldersQueryRequest;
};

export type QueryPoapsArgs = {
  request: UserPoapsQueryRequest;
};

export type QueryPopularNftCollectionsArgs = {
  request: PopularNftCollectionsRequest;
};

export type QueryProfileArgs = {
  request: ProfileRequest;
};

export type QueryProfileActionHistoryArgs = {
  request: ProfileActionHistoryRequest;
};

export type QueryProfileAlreadyInvitedArgs = {
  request: AlreadyInvitedCheckRequest;
};

export type QueryProfileManagersArgs = {
  request: ProfileManagersRequest;
};

export type QueryProfileRecommendationsArgs = {
  request: ProfileRecommendationsRequest;
};

export type QueryProfilesArgs = {
  request: ProfilesRequest;
};

export type QueryProfilesManagedArgs = {
  request: ProfilesManagedRequest;
};

export type QueryPublicationArgs = {
  request: PublicationRequest;
};

export type QueryPublicationBookmarksArgs = {
  request?: InputMaybe<PublicationBookmarksRequest>;
};

export type QueryPublicationsArgs = {
  request: PublicationsRequest;
};

export type QueryPublicationsTagsArgs = {
  request?: InputMaybe<PublicationsTagsRequest>;
};

export type QueryRevenueFromPublicationArgs = {
  request: RevenueFromPublicationRequest;
};

export type QueryRevenueFromPublicationsArgs = {
  request: RevenueFromPublicationsRequest;
};

export type QuerySearchProfilesArgs = {
  request: ProfileSearchRequest;
};

export type QuerySearchPublicationsArgs = {
  request: PublicationSearchRequest;
};

export type QuerySupportedFollowModulesArgs = {
  request: SupportedModulesRequest;
};

export type QuerySupportedOpenActionCollectModulesArgs = {
  request: SupportedModulesRequest;
};

export type QuerySupportedOpenActionModulesArgs = {
  request: SupportedModulesRequest;
};

export type QuerySupportedReferenceModulesArgs = {
  request: SupportedModulesRequest;
};

export type QueryTxIdToTxHashArgs = {
  for: Scalars['TxId'];
};

export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};

export type QueryVerifyArgs = {
  request: VerifyRequest;
};

export type QueryWhoActedOnPublicationArgs = {
  request: WhoActedOnPublicationRequest;
};

export type QueryWhoHaveBlockedArgs = {
  request: WhoHaveBlockedRequest;
};

export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type Quote = {
  __typename?: 'Quote';
  by: Profile;
  createdAt: Scalars['DateTime'];
  hashtagsMentioned: Array<Scalars['String']>;
  id: Scalars['PublicationId'];
  isEncrypted: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  metadata: PublicationMetadata;
  momoka?: Maybe<MomokaInfo>;
  openActionModules?: Maybe<Array<OpenActionModule>>;
  operations: PublicationOperations;
  profilesMentioned: Array<ProfileMentioned>;
  publishedOn?: Maybe<App>;
  quoteOn: PrimaryPublication;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
  txHash?: Maybe<Scalars['TxHash']>;
};

export type QuoteStatsArgs = {
  request?: InputMaybe<PublicationStatsInput>;
};

export type QuoteNotification = {
  __typename?: 'QuoteNotification';
  id: Scalars['UUID'];
  quote: Quote;
};

export type RateRequest = {
  for: SupportedFiatType;
};

export type ReactedResult = {
  __typename?: 'ReactedResult';
  reactedAt: Scalars['DateTime'];
  reaction: PublicationReactionType;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  by: Profile;
  createdAt: Scalars['DateTime'];
  reaction: PublicationReactionType;
};

export type ReactionNotification = {
  __typename?: 'ReactionNotification';
  id: Scalars['UUID'];
  publication: PrimaryPublication;
  reactions: Array<ProfileReactedResult>;
};

export type ReactionRequest = {
  for: Scalars['PublicationId'];
  reaction: PublicationReactionType;
};

export type RecipientDataInput = {
  /** Recipient of collect fees. */
  recipient: Scalars['EvmAddress'];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars['Float'];
};

export type RecipientDataOutput = {
  __typename?: 'RecipientDataOutput';
  /** Recipient of collect fees. */
  recipient: Scalars['EvmAddress'];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars['Float'];
};

export type ReferenceModule =
  | DegreesOfSeparationReferenceModuleSettings
  | FollowOnlyReferenceModuleSettings
  | LegacyDegreesOfSeparationReferenceModuleSettings
  | LegacyFollowOnlyReferenceModuleSettings
  | UnknownReferenceModuleSettings;

export type ReferenceModuleInput = {
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleInput>;
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleInput>;
};

export enum ReferenceModuleType {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  LegacyDegreesOfSeparationReferenceModule = 'LegacyDegreesOfSeparationReferenceModule',
  LegacyFollowerOnlyReferenceModule = 'LegacyFollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

export type RefreshPublicationMetadataRequest = {
  for: Scalars['PublicationId'];
};

export type RefreshPublicationMetadataResult = {
  __typename?: 'RefreshPublicationMetadataResult';
  result: RefreshPublicationMetadataResultType;
};

export enum RefreshPublicationMetadataResultType {
  AlreadyPending = 'ALREADY_PENDING',
  Queued = 'QUEUED',
  ValidPublicationNotFound = 'VALID_PUBLICATION_NOT_FOUND'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasonType;
};

export enum RelayErrorReasonType {
  AppNotAllowed = 'APP_NOT_ALLOWED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  NotSponsored = 'NOT_SPONSORED',
  RateLimited = 'RATE_LIMITED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayMomokaResult = CreateMomokaPublicationResult | LensProfileManagerRelayError;

export type RelayQueueResult = {
  __typename?: 'RelayQueueResult';
  key: RelayRoleKey;
  queue: Scalars['Int'];
  relay: NetworkAddress;
};

export type RelayResult = RelayError | RelaySuccess;

export enum RelayRoleKey {
  CreateProfile = 'CREATE_PROFILE',
  LensManager_1 = 'LENS_MANAGER_1',
  LensManager_2 = 'LENS_MANAGER_2',
  LensManager_3 = 'LENS_MANAGER_3',
  LensManager_4 = 'LENS_MANAGER_4',
  LensManager_5 = 'LENS_MANAGER_5',
  LensManager_6 = 'LENS_MANAGER_6',
  LensManager_7 = 'LENS_MANAGER_7',
  LensManager_8 = 'LENS_MANAGER_8',
  LensManager_9 = 'LENS_MANAGER_9',
  LensManager_10 = 'LENS_MANAGER_10',
  LensManager_11 = 'LENS_MANAGER_11',
  LensManager_12 = 'LENS_MANAGER_12',
  LensManager_13 = 'LENS_MANAGER_13',
  LensManager_14 = 'LENS_MANAGER_14',
  LensManager_15 = 'LENS_MANAGER_15',
  LensManager_16 = 'LENS_MANAGER_16',
  LensManager_17 = 'LENS_MANAGER_17',
  LensManager_18 = 'LENS_MANAGER_18',
  LensManager_19 = 'LENS_MANAGER_19',
  LensManager_20 = 'LENS_MANAGER_20',
  WithSig_1 = 'WITH_SIG_1',
  WithSig_2 = 'WITH_SIG_2',
  WithSig_3 = 'WITH_SIG_3',
  WithSig_4 = 'WITH_SIG_4',
  WithSig_5 = 'WITH_SIG_5',
  WithSig_6 = 'WITH_SIG_6',
  WithSig_7 = 'WITH_SIG_7',
  WithSig_8 = 'WITH_SIG_8',
  WithSig_9 = 'WITH_SIG_9',
  WithSig_10 = 'WITH_SIG_10'
}

export type RelaySuccess = {
  __typename?: 'RelaySuccess';
  txHash?: Maybe<Scalars['TxHash']>;
  txId: Scalars['TxId'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>;
  for: Scalars['PublicationId'];
  reason: ReportingReasonInput;
};

export type ReportingReasonInput = {
  fraudReason?: InputMaybe<FraudReasonInput>;
  illegalReason?: InputMaybe<IllegalReasonInput>;
  sensitiveReason?: InputMaybe<SensitiveReasonInput>;
  spamReason?: InputMaybe<SpamReasonInput>;
};

export type ReservedClaimable = {
  __typename?: 'ReservedClaimable';
  expiry: Scalars['DateTime'];
  id: Scalars['String'];
  source: Scalars['AppId'];
  /** The full handle - namespace/localname */
  withHandle: Scalars['Handle'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Amount;
};

export type RevenueFromPublicationRequest = {
  for: Scalars['PublicationId'];
  /** Will return revenue for publications made on any of the provided app ids. Will include all apps if omitted */
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type RevenueFromPublicationsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The profile to get revenue for */
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
  /** Will return revenue for publications made on any of the provided app ids. Will include all apps if omitted */
  publishedOn?: InputMaybe<Array<Scalars['AppId']>>;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contract: NetworkAddress;
  type: FollowModuleType;
};

export type RevokeAuthenticationRequest = {
  /** The token authorization id wish to revoke */
  authorizationId: Scalars['UUID'];
};

export type RootCondition = {
  __typename?: 'RootCondition';
  criteria: Array<SecondTierCondition>;
};

export enum SearchPublicationType {
  Comment = 'COMMENT',
  Post = 'POST',
  Quote = 'QUOTE'
}

export type SecondTierCondition =
  | AdvancedContractCondition
  | AndCondition
  | CollectCondition
  | EoaOwnershipCondition
  | Erc20OwnershipCondition
  | FollowCondition
  | NftOwnershipCondition
  | OrCondition
  | ProfileOwnershipCondition;

export type SensitiveReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

export type SetDefaultProfileRequest = {
  profileId: Scalars['ProfileId'];
};

export type SetFollowModuleRequest = {
  followModule: FollowModuleInput;
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  id: Scalars['ChallengeId'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type SimpleCollectOpenActionModuleInput = {
  amount?: InputMaybe<AmountInput>;
  collectLimit?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipient?: InputMaybe<Scalars['EvmAddress']>;
  referralFee?: InputMaybe<Scalars['Float']>;
};

export type SimpleCollectOpenActionSettings = {
  __typename?: 'SimpleCollectOpenActionSettings';
  /** The collect module amount info. `Amount.value = 0` in case of free collects. */
  amount: Amount;
  /** The maximum number of collects for this publication. */
  collectLimit?: Maybe<Scalars['String']>;
  /** The collect nft address - only deployed on first collect */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The end timestamp after which collecting is impossible. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EvmAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  type: OpenActionModuleType;
};

export type SpaceMetadataV3 = {
  __typename?: 'SpaceMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  link: Scalars['EncryptableURI'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  startsAt: Scalars['EncryptableDateTime'];
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type SpamReasonInput = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type StoryMetadataV3 = {
  __typename?: 'StoryMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMedia;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  authorizationRecordRevoked?: Maybe<Scalars['Void']>;
  newMomokaTransaction: MomokaTransaction;
  newNotification?: Maybe<Notification>;
  newPublicationStats: PublicationStats;
  userSigNonces: UserSigNonces;
};

export type SubscriptionAuthorizationRecordRevokedArgs = {
  authorizationId: Scalars['UUID'];
};

export type SubscriptionNewNotificationArgs = {
  for: Scalars['ProfileId'];
};

export type SubscriptionNewPublicationStatsArgs = {
  for: Scalars['PublicationId'];
};

export type SubscriptionUserSigNoncesArgs = {
  address: Scalars['EvmAddress'];
};

export type SuggestedFormattedHandle = {
  __typename?: 'SuggestedFormattedHandle';
  /** The full formatted handle - namespace/@localname */
  full: Scalars['String'];
  /** The formatted handle - @localname */
  localName: Scalars['String'];
};

export enum SupportedFiatType {
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

export type SupportedModule = KnownSupportedModule | UnknownSupportedModule;

export type SupportedModulesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  includeUnknown?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<LimitType>;
};

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity';
  source?: Maybe<SybilDotOrgIdentitySource>;
  /** The sybil dot org status */
  verified: Scalars['Boolean'];
};

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource';
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity';
  handle?: Maybe<Scalars['String']>;
};

export type TagResult = {
  __typename?: 'TagResult';
  tag: Scalars['String'];
  total: Scalars['Int'];
};

export enum TagSortCriteriaType {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TextOnlyMetadataV3 = {
  __typename?: 'TextOnlyMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ThirdTierCondition =
  | AdvancedContractCondition
  | CollectCondition
  | EoaOwnershipCondition
  | Erc20OwnershipCondition
  | FollowCondition
  | NftOwnershipCondition
  | ProfileOwnershipCondition;

export type ThreeDMetadataV3 = {
  __typename?: 'ThreeDMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  assets: Array<ThreeDMetadataV3Asset>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ThreeDMetadataV3Asset = {
  __typename?: 'ThreeDMetadataV3Asset';
  format: Scalars['String'];
  license?: Maybe<PublicationMetadataLicenseType>;
  playerURL: Scalars['EncryptableURI'];
  uri: Scalars['EncryptableURI'];
  zipPath?: Maybe<Scalars['String']>;
};

export type TransactionMetadataV3 = {
  __typename?: 'TransactionMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  chainId: Scalars['ChainId'];
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  txHash: Scalars['EncryptableTxHash'];
  type: PublicationMetadataTransactionType;
};

export enum TriStateValue {
  No = 'NO',
  Unknown = 'UNKNOWN',
  Yes = 'YES'
}

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce'];
};

export type UnblockRequest = {
  profiles: Array<Scalars['ProfileId']>;
};

export type UnfollowRequest = {
  unfollow: Array<Scalars['ProfileId']>;
};

export type UnknownFollowModuleInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleRedeemInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings';
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData?: Maybe<Scalars['BlockchainData']>;
  type: FollowModuleType;
};

export type UnknownOpenActionActRedeemInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownOpenActionModuleInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownOpenActionModuleSettings = {
  __typename?: 'UnknownOpenActionModuleSettings';
  /** The collect nft address - only deployed on first collect and if its a collectable open action */
  collectNft?: Maybe<Scalars['EvmAddress']>;
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  openActionModuleReturnData?: Maybe<Scalars['BlockchainData']>;
  type: OpenActionModuleType;
};

export type UnknownOpenActionResult = {
  __typename?: 'UnknownOpenActionResult';
  address: Scalars['EvmAddress'];
  category?: Maybe<OpenActionCategoryType>;
  initReturnData?: Maybe<Scalars['BlockchainData']>;
};

export type UnknownReferenceModuleInput = {
  address: Scalars['EvmAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contract: NetworkAddress;
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData?: Maybe<Scalars['BlockchainData']>;
  type: ReferenceModuleType;
};

export type UnknownSupportedModule = {
  __typename?: 'UnknownSupportedModule';
  contract: NetworkAddress;
  moduleName: Scalars['String'];
};

export type UnlinkHandleFromProfileRequest = {
  /** The full handle - namespace/localname */
  handle: Scalars['Handle'];
};

export type UserPoapsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['ProfileId'];
  limit?: InputMaybe<LimitType>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnchainSigNonce: Scalars['Nonce'];
  lensPublicActProxyOnchainSigNonce: Scalars['Nonce'];
  lensTokenHandleRegistryOnchainSigNonce: Scalars['Nonce'];
};

export type ValidatePublicationMetadataRequest = {
  json?: InputMaybe<Scalars['String']>;
  rawURI?: InputMaybe<Scalars['URI']>;
};

export type VerifyRequest = {
  /** The access token to verify */
  accessToken: Scalars['Jwt'];
};

export type Video = {
  __typename?: 'Video';
  mimeType?: Maybe<Scalars['MimeType']>;
  uri: Scalars['URI'];
};

export type VideoMetadataV3 = {
  __typename?: 'VideoMetadataV3';
  appId?: Maybe<Scalars['AppId']>;
  asset: PublicationMetadataMediaVideo;
  attachments?: Maybe<Array<PublicationMetadataMedia>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  /** Optional content. Empty if not set. */
  content: Scalars['EncryptableMarkdown'];
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataEncryptionStrategy>;
  hideFromFeed: Scalars['Boolean'];
  id: Scalars['String'];
  isShortVideo: Scalars['Boolean'];
  locale: Scalars['Locale'];
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['URI'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** The title of the video. Empty if not set. */
  title: Scalars['String'];
};

export type WalletAuthenticationToProfileAuthenticationRequest = {
  /** This can convert a wallet token to a profile token if you now onboarded */
  profileId: Scalars['ProfileId'];
};

export type WhoActedOnPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
  on: Scalars['PublicationId'];
  where?: InputMaybe<WhoActedOnPublicationWhere>;
};

export type WhoActedOnPublicationWhere = {
  anyOf: Array<OpenActionFilter>;
};

export type WhoHaveBlockedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  for: Scalars['PublicationId'];
  limit?: InputMaybe<LimitType>;
  where?: InputMaybe<WhoReactedPublicationWhere>;
};

export type WhoReactedPublicationWhere = {
  anyOf?: InputMaybe<Array<PublicationReactionType>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<LimitType>;
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean'];
};

export enum WorldcoinPhoneVerifyType {
  Orb = 'ORB',
  Phone = 'PHONE'
}

export type WorldcoinPhoneVerifyWebhookRequest = {
  nullifierHash: Scalars['String'];
  signal: Scalars['EvmAddress'];
  signalType: WorldcoinPhoneVerifyType;
};

type AnyPublicationMetadataFields_ArticleMetadataV3_Fragment = {
  __typename?: 'ArticleMetadataV3';
  rawURI: any;
};

type AnyPublicationMetadataFields_AudioMetadataV3_Fragment = { __typename?: 'AudioMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_CheckingInMetadataV3_Fragment = {
  __typename?: 'CheckingInMetadataV3';
  rawURI: any;
};

type AnyPublicationMetadataFields_EmbedMetadataV3_Fragment = { __typename?: 'EmbedMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_EventMetadataV3_Fragment = { __typename?: 'EventMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_ImageMetadataV3_Fragment = { __typename?: 'ImageMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_LinkMetadataV3_Fragment = { __typename?: 'LinkMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_LiveStreamMetadataV3_Fragment = {
  __typename?: 'LiveStreamMetadataV3';
  rawURI: any;
};

type AnyPublicationMetadataFields_MintMetadataV3_Fragment = { __typename?: 'MintMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_SpaceMetadataV3_Fragment = { __typename?: 'SpaceMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_StoryMetadataV3_Fragment = { __typename?: 'StoryMetadataV3'; rawURI: any };

type AnyPublicationMetadataFields_TextOnlyMetadataV3_Fragment = {
  __typename?: 'TextOnlyMetadataV3';
  rawURI: any;
};

type AnyPublicationMetadataFields_ThreeDMetadataV3_Fragment = {
  __typename?: 'ThreeDMetadataV3';
  rawURI: any;
};

type AnyPublicationMetadataFields_TransactionMetadataV3_Fragment = {
  __typename?: 'TransactionMetadataV3';
  rawURI: any;
};

type AnyPublicationMetadataFields_VideoMetadataV3_Fragment = { __typename?: 'VideoMetadataV3'; rawURI: any };

export type AnyPublicationMetadataFieldsFragment =
  | AnyPublicationMetadataFields_ArticleMetadataV3_Fragment
  | AnyPublicationMetadataFields_AudioMetadataV3_Fragment
  | AnyPublicationMetadataFields_CheckingInMetadataV3_Fragment
  | AnyPublicationMetadataFields_EmbedMetadataV3_Fragment
  | AnyPublicationMetadataFields_EventMetadataV3_Fragment
  | AnyPublicationMetadataFields_ImageMetadataV3_Fragment
  | AnyPublicationMetadataFields_LinkMetadataV3_Fragment
  | AnyPublicationMetadataFields_LiveStreamMetadataV3_Fragment
  | AnyPublicationMetadataFields_MintMetadataV3_Fragment
  | AnyPublicationMetadataFields_SpaceMetadataV3_Fragment
  | AnyPublicationMetadataFields_StoryMetadataV3_Fragment
  | AnyPublicationMetadataFields_TextOnlyMetadataV3_Fragment
  | AnyPublicationMetadataFields_ThreeDMetadataV3_Fragment
  | AnyPublicationMetadataFields_TransactionMetadataV3_Fragment
  | AnyPublicationMetadataFields_VideoMetadataV3_Fragment;

export type MomokaCommentFieldsFragment = {
  __typename?: 'MomokaCommentTransaction';
  transactionId: string;
  submitter: any;
  createdAt: any;
  app?: { __typename?: 'App'; id: any } | null;
  publication: {
    __typename?: 'Comment';
    id: any;
    by: {
      __typename?: 'Profile';
      id: any;
      handle?: {
        __typename?: 'HandleInfo';
        id: any;
        fullHandle: any;
        namespace: string;
        localName: string;
        ownedBy: any;
        suggestedFormatted: { __typename?: 'SuggestedFormattedHandle'; full: string; localName: string };
        linkedTo?: {
          __typename?: 'HandleLinkedTo';
          nftTokenId: any;
          contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
        } | null;
      } | null;
      ownedBy: { __typename?: 'NetworkAddress'; address: any };
      operations: {
        __typename?: 'ProfileOperations';
        id: any;
        canBlock: boolean;
        canUnblock: boolean;
        canFollow: TriStateValue;
        canUnfollow: boolean;
        isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
      };
      stats: {
        __typename?: 'ProfileStats';
        id: any;
        followers: number;
        following: number;
        comments: number;
        posts: number;
        mirrors: number;
        quotes: number;
        publications: number;
        reactions: number;
        reacted: number;
        countOpenActions: number;
      };
      metadata?: {
        __typename?: 'ProfileMetadata';
        displayName?: string | null;
        bio?: any | null;
        rawURI: any;
        appId?: any | null;
        picture?:
          | {
              __typename?: 'ImageSet';
              raw: { __typename?: 'Image'; uri: any };
              optimized?: { __typename?: 'Image'; uri: any } | null;
            }
          | {
              __typename?: 'NftImage';
              image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
            }
          | null;
      } | null;
    };
  };
  verificationStatus:
    | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
    | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
};

export type MomokaMirrorFieldsFragment = {
  __typename?: 'MomokaMirrorTransaction';
  transactionId: string;
  submitter: any;
  createdAt: any;
  app?: { __typename?: 'App'; id: any } | null;
  publication: {
    __typename?: 'Mirror';
    id: any;
    by: {
      __typename?: 'Profile';
      id: any;
      handle?: {
        __typename?: 'HandleInfo';
        id: any;
        fullHandle: any;
        namespace: string;
        localName: string;
        ownedBy: any;
        suggestedFormatted: { __typename?: 'SuggestedFormattedHandle'; full: string; localName: string };
        linkedTo?: {
          __typename?: 'HandleLinkedTo';
          nftTokenId: any;
          contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
        } | null;
      } | null;
      ownedBy: { __typename?: 'NetworkAddress'; address: any };
      operations: {
        __typename?: 'ProfileOperations';
        id: any;
        canBlock: boolean;
        canUnblock: boolean;
        canFollow: TriStateValue;
        canUnfollow: boolean;
        isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
      };
      stats: {
        __typename?: 'ProfileStats';
        id: any;
        followers: number;
        following: number;
        comments: number;
        posts: number;
        mirrors: number;
        quotes: number;
        publications: number;
        reactions: number;
        reacted: number;
        countOpenActions: number;
      };
      metadata?: {
        __typename?: 'ProfileMetadata';
        displayName?: string | null;
        bio?: any | null;
        rawURI: any;
        appId?: any | null;
        picture?:
          | {
              __typename?: 'ImageSet';
              raw: { __typename?: 'Image'; uri: any };
              optimized?: { __typename?: 'Image'; uri: any } | null;
            }
          | {
              __typename?: 'NftImage';
              image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
            }
          | null;
      } | null;
    };
  };
  verificationStatus:
    | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
    | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
};

export type MomokaPostFieldsFragment = {
  __typename?: 'MomokaPostTransaction';
  transactionId: string;
  submitter: any;
  createdAt: any;
  app?: { __typename?: 'App'; id: any } | null;
  publication: {
    __typename?: 'Post';
    id: any;
    by: {
      __typename?: 'Profile';
      id: any;
      handle?: {
        __typename?: 'HandleInfo';
        id: any;
        fullHandle: any;
        namespace: string;
        localName: string;
        ownedBy: any;
        suggestedFormatted: { __typename?: 'SuggestedFormattedHandle'; full: string; localName: string };
        linkedTo?: {
          __typename?: 'HandleLinkedTo';
          nftTokenId: any;
          contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
        } | null;
      } | null;
      ownedBy: { __typename?: 'NetworkAddress'; address: any };
      operations: {
        __typename?: 'ProfileOperations';
        id: any;
        canBlock: boolean;
        canUnblock: boolean;
        canFollow: TriStateValue;
        canUnfollow: boolean;
        isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
      };
      stats: {
        __typename?: 'ProfileStats';
        id: any;
        followers: number;
        following: number;
        comments: number;
        posts: number;
        mirrors: number;
        quotes: number;
        publications: number;
        reactions: number;
        reacted: number;
        countOpenActions: number;
      };
      metadata?: {
        __typename?: 'ProfileMetadata';
        displayName?: string | null;
        bio?: any | null;
        rawURI: any;
        appId?: any | null;
        picture?:
          | {
              __typename?: 'ImageSet';
              raw: { __typename?: 'Image'; uri: any };
              optimized?: { __typename?: 'Image'; uri: any } | null;
            }
          | {
              __typename?: 'NftImage';
              image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
            }
          | null;
      } | null;
    };
  };
  verificationStatus:
    | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
    | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
};

export type MomokaQuoteFieldsFragment = {
  __typename?: 'MomokaQuoteTransaction';
  transactionId: string;
  submitter: any;
  createdAt: any;
  app?: { __typename?: 'App'; id: any } | null;
  publication: {
    __typename?: 'Quote';
    id: any;
    by: {
      __typename?: 'Profile';
      id: any;
      handle?: {
        __typename?: 'HandleInfo';
        id: any;
        fullHandle: any;
        namespace: string;
        localName: string;
        ownedBy: any;
        suggestedFormatted: { __typename?: 'SuggestedFormattedHandle'; full: string; localName: string };
        linkedTo?: {
          __typename?: 'HandleLinkedTo';
          nftTokenId: any;
          contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
        } | null;
      } | null;
      ownedBy: { __typename?: 'NetworkAddress'; address: any };
      operations: {
        __typename?: 'ProfileOperations';
        id: any;
        canBlock: boolean;
        canUnblock: boolean;
        canFollow: TriStateValue;
        canUnfollow: boolean;
        isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
      };
      stats: {
        __typename?: 'ProfileStats';
        id: any;
        followers: number;
        following: number;
        comments: number;
        posts: number;
        mirrors: number;
        quotes: number;
        publications: number;
        reactions: number;
        reacted: number;
        countOpenActions: number;
      };
      metadata?: {
        __typename?: 'ProfileMetadata';
        displayName?: string | null;
        bio?: any | null;
        rawURI: any;
        appId?: any | null;
        picture?:
          | {
              __typename?: 'ImageSet';
              raw: { __typename?: 'Image'; uri: any };
              optimized?: { __typename?: 'Image'; uri: any } | null;
            }
          | {
              __typename?: 'NftImage';
              image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
            }
          | null;
      } | null;
    };
  };
  verificationStatus:
    | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
    | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
};

export type ProfileFieldsFragment = {
  __typename?: 'Profile';
  id: any;
  handle?: {
    __typename?: 'HandleInfo';
    id: any;
    fullHandle: any;
    namespace: string;
    localName: string;
    ownedBy: any;
    suggestedFormatted: { __typename?: 'SuggestedFormattedHandle'; full: string; localName: string };
    linkedTo?: {
      __typename?: 'HandleLinkedTo';
      nftTokenId: any;
      contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
    } | null;
  } | null;
  ownedBy: { __typename?: 'NetworkAddress'; address: any };
  operations: {
    __typename?: 'ProfileOperations';
    id: any;
    canBlock: boolean;
    canUnblock: boolean;
    canFollow: TriStateValue;
    canUnfollow: boolean;
    isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
    isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
    isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
  };
  stats: {
    __typename?: 'ProfileStats';
    id: any;
    followers: number;
    following: number;
    comments: number;
    posts: number;
    mirrors: number;
    quotes: number;
    publications: number;
    reactions: number;
    reacted: number;
    countOpenActions: number;
  };
  metadata?: {
    __typename?: 'ProfileMetadata';
    displayName?: string | null;
    bio?: any | null;
    rawURI: any;
    appId?: any | null;
    picture?:
      | {
          __typename?: 'ImageSet';
          raw: { __typename?: 'Image'; uri: any };
          optimized?: { __typename?: 'Image'; uri: any } | null;
        }
      | {
          __typename?: 'NftImage';
          image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
        }
      | null;
  } | null;
};

export type MomokaSubmittersQueryVariables = Exact<{ [key: string]: never }>;

export type MomokaSubmittersQuery = {
  __typename?: 'Query';
  momokaSubmitters: {
    __typename?: 'MomokaSubmittersResult';
    items: Array<{
      __typename?: 'MomokaSubmitterResult';
      address: any;
      name: string;
      totalTransactions: number;
    }>;
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null };
  };
};

export type MomokaSummaryQueryVariables = Exact<{ [key: string]: never }>;

export type MomokaSummaryQuery = {
  __typename?: 'Query';
  momokaSummary: { __typename?: 'MomokaSummaryResult'; totalTransactions: number };
};

export type MomokaTransactionQueryVariables = Exact<{
  request: MomokaTransactionRequest;
}>;

export type MomokaTransactionQuery = {
  __typename?: 'Query';
  momokaTransaction?:
    | {
        __typename?: 'MomokaCommentTransaction';
        transactionId: string;
        submitter: any;
        createdAt: any;
        app?: { __typename?: 'App'; id: any } | null;
        publication: {
          __typename?: 'Comment';
          id: any;
          by: {
            __typename?: 'Profile';
            id: any;
            handle?: {
              __typename?: 'HandleInfo';
              id: any;
              fullHandle: any;
              namespace: string;
              localName: string;
              ownedBy: any;
              suggestedFormatted: {
                __typename?: 'SuggestedFormattedHandle';
                full: string;
                localName: string;
              };
              linkedTo?: {
                __typename?: 'HandleLinkedTo';
                nftTokenId: any;
                contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
              } | null;
            } | null;
            ownedBy: { __typename?: 'NetworkAddress'; address: any };
            operations: {
              __typename?: 'ProfileOperations';
              id: any;
              canBlock: boolean;
              canUnblock: boolean;
              canFollow: TriStateValue;
              canUnfollow: boolean;
              isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
            };
            stats: {
              __typename?: 'ProfileStats';
              id: any;
              followers: number;
              following: number;
              comments: number;
              posts: number;
              mirrors: number;
              quotes: number;
              publications: number;
              reactions: number;
              reacted: number;
              countOpenActions: number;
            };
            metadata?: {
              __typename?: 'ProfileMetadata';
              displayName?: string | null;
              bio?: any | null;
              rawURI: any;
              appId?: any | null;
              picture?:
                | {
                    __typename?: 'ImageSet';
                    raw: { __typename?: 'Image'; uri: any };
                    optimized?: { __typename?: 'Image'; uri: any } | null;
                  }
                | {
                    __typename?: 'NftImage';
                    image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                  }
                | null;
            } | null;
          };
        };
        verificationStatus:
          | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
          | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
      }
    | {
        __typename?: 'MomokaMirrorTransaction';
        transactionId: string;
        submitter: any;
        createdAt: any;
        app?: { __typename?: 'App'; id: any } | null;
        publication: {
          __typename?: 'Mirror';
          id: any;
          by: {
            __typename?: 'Profile';
            id: any;
            handle?: {
              __typename?: 'HandleInfo';
              id: any;
              fullHandle: any;
              namespace: string;
              localName: string;
              ownedBy: any;
              suggestedFormatted: {
                __typename?: 'SuggestedFormattedHandle';
                full: string;
                localName: string;
              };
              linkedTo?: {
                __typename?: 'HandleLinkedTo';
                nftTokenId: any;
                contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
              } | null;
            } | null;
            ownedBy: { __typename?: 'NetworkAddress'; address: any };
            operations: {
              __typename?: 'ProfileOperations';
              id: any;
              canBlock: boolean;
              canUnblock: boolean;
              canFollow: TriStateValue;
              canUnfollow: boolean;
              isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
            };
            stats: {
              __typename?: 'ProfileStats';
              id: any;
              followers: number;
              following: number;
              comments: number;
              posts: number;
              mirrors: number;
              quotes: number;
              publications: number;
              reactions: number;
              reacted: number;
              countOpenActions: number;
            };
            metadata?: {
              __typename?: 'ProfileMetadata';
              displayName?: string | null;
              bio?: any | null;
              rawURI: any;
              appId?: any | null;
              picture?:
                | {
                    __typename?: 'ImageSet';
                    raw: { __typename?: 'Image'; uri: any };
                    optimized?: { __typename?: 'Image'; uri: any } | null;
                  }
                | {
                    __typename?: 'NftImage';
                    image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                  }
                | null;
            } | null;
          };
        };
        verificationStatus:
          | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
          | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
      }
    | {
        __typename?: 'MomokaPostTransaction';
        transactionId: string;
        submitter: any;
        createdAt: any;
        app?: { __typename?: 'App'; id: any } | null;
        publication: {
          __typename?: 'Post';
          id: any;
          by: {
            __typename?: 'Profile';
            id: any;
            handle?: {
              __typename?: 'HandleInfo';
              id: any;
              fullHandle: any;
              namespace: string;
              localName: string;
              ownedBy: any;
              suggestedFormatted: {
                __typename?: 'SuggestedFormattedHandle';
                full: string;
                localName: string;
              };
              linkedTo?: {
                __typename?: 'HandleLinkedTo';
                nftTokenId: any;
                contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
              } | null;
            } | null;
            ownedBy: { __typename?: 'NetworkAddress'; address: any };
            operations: {
              __typename?: 'ProfileOperations';
              id: any;
              canBlock: boolean;
              canUnblock: boolean;
              canFollow: TriStateValue;
              canUnfollow: boolean;
              isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
            };
            stats: {
              __typename?: 'ProfileStats';
              id: any;
              followers: number;
              following: number;
              comments: number;
              posts: number;
              mirrors: number;
              quotes: number;
              publications: number;
              reactions: number;
              reacted: number;
              countOpenActions: number;
            };
            metadata?: {
              __typename?: 'ProfileMetadata';
              displayName?: string | null;
              bio?: any | null;
              rawURI: any;
              appId?: any | null;
              picture?:
                | {
                    __typename?: 'ImageSet';
                    raw: { __typename?: 'Image'; uri: any };
                    optimized?: { __typename?: 'Image'; uri: any } | null;
                  }
                | {
                    __typename?: 'NftImage';
                    image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                  }
                | null;
            } | null;
          };
        };
        verificationStatus:
          | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
          | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
      }
    | {
        __typename?: 'MomokaQuoteTransaction';
        transactionId: string;
        submitter: any;
        createdAt: any;
        app?: { __typename?: 'App'; id: any } | null;
        publication: {
          __typename?: 'Quote';
          id: any;
          by: {
            __typename?: 'Profile';
            id: any;
            handle?: {
              __typename?: 'HandleInfo';
              id: any;
              fullHandle: any;
              namespace: string;
              localName: string;
              ownedBy: any;
              suggestedFormatted: {
                __typename?: 'SuggestedFormattedHandle';
                full: string;
                localName: string;
              };
              linkedTo?: {
                __typename?: 'HandleLinkedTo';
                nftTokenId: any;
                contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
              } | null;
            } | null;
            ownedBy: { __typename?: 'NetworkAddress'; address: any };
            operations: {
              __typename?: 'ProfileOperations';
              id: any;
              canBlock: boolean;
              canUnblock: boolean;
              canFollow: TriStateValue;
              canUnfollow: boolean;
              isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
            };
            stats: {
              __typename?: 'ProfileStats';
              id: any;
              followers: number;
              following: number;
              comments: number;
              posts: number;
              mirrors: number;
              quotes: number;
              publications: number;
              reactions: number;
              reacted: number;
              countOpenActions: number;
            };
            metadata?: {
              __typename?: 'ProfileMetadata';
              displayName?: string | null;
              bio?: any | null;
              rawURI: any;
              appId?: any | null;
              picture?:
                | {
                    __typename?: 'ImageSet';
                    raw: { __typename?: 'Image'; uri: any };
                    optimized?: { __typename?: 'Image'; uri: any } | null;
                  }
                | {
                    __typename?: 'NftImage';
                    image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                  }
                | null;
            } | null;
          };
        };
        verificationStatus:
          | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
          | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
      }
    | null;
};

export type MomokaTransactionsQueryVariables = Exact<{
  request: MomokaTransactionsRequest;
}>;

export type MomokaTransactionsQuery = {
  __typename?: 'Query';
  momokaTransactions: {
    __typename?: 'MomokaTransactionsResult';
    items: Array<
      | {
          __typename?: 'MomokaCommentTransaction';
          transactionId: string;
          submitter: any;
          createdAt: any;
          app?: { __typename?: 'App'; id: any } | null;
          publication: {
            __typename?: 'Comment';
            id: any;
            by: {
              __typename?: 'Profile';
              id: any;
              handle?: {
                __typename?: 'HandleInfo';
                id: any;
                fullHandle: any;
                namespace: string;
                localName: string;
                ownedBy: any;
                suggestedFormatted: {
                  __typename?: 'SuggestedFormattedHandle';
                  full: string;
                  localName: string;
                };
                linkedTo?: {
                  __typename?: 'HandleLinkedTo';
                  nftTokenId: any;
                  contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
                } | null;
              } | null;
              ownedBy: { __typename?: 'NetworkAddress'; address: any };
              operations: {
                __typename?: 'ProfileOperations';
                id: any;
                canBlock: boolean;
                canUnblock: boolean;
                canFollow: TriStateValue;
                canUnfollow: boolean;
                isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              };
              stats: {
                __typename?: 'ProfileStats';
                id: any;
                followers: number;
                following: number;
                comments: number;
                posts: number;
                mirrors: number;
                quotes: number;
                publications: number;
                reactions: number;
                reacted: number;
                countOpenActions: number;
              };
              metadata?: {
                __typename?: 'ProfileMetadata';
                displayName?: string | null;
                bio?: any | null;
                rawURI: any;
                appId?: any | null;
                picture?:
                  | {
                      __typename?: 'ImageSet';
                      raw: { __typename?: 'Image'; uri: any };
                      optimized?: { __typename?: 'Image'; uri: any } | null;
                    }
                  | {
                      __typename?: 'NftImage';
                      image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                    }
                  | null;
              } | null;
            };
          };
          verificationStatus:
            | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
            | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
        }
      | {
          __typename?: 'MomokaMirrorTransaction';
          transactionId: string;
          submitter: any;
          createdAt: any;
          app?: { __typename?: 'App'; id: any } | null;
          publication: {
            __typename?: 'Mirror';
            id: any;
            by: {
              __typename?: 'Profile';
              id: any;
              handle?: {
                __typename?: 'HandleInfo';
                id: any;
                fullHandle: any;
                namespace: string;
                localName: string;
                ownedBy: any;
                suggestedFormatted: {
                  __typename?: 'SuggestedFormattedHandle';
                  full: string;
                  localName: string;
                };
                linkedTo?: {
                  __typename?: 'HandleLinkedTo';
                  nftTokenId: any;
                  contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
                } | null;
              } | null;
              ownedBy: { __typename?: 'NetworkAddress'; address: any };
              operations: {
                __typename?: 'ProfileOperations';
                id: any;
                canBlock: boolean;
                canUnblock: boolean;
                canFollow: TriStateValue;
                canUnfollow: boolean;
                isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              };
              stats: {
                __typename?: 'ProfileStats';
                id: any;
                followers: number;
                following: number;
                comments: number;
                posts: number;
                mirrors: number;
                quotes: number;
                publications: number;
                reactions: number;
                reacted: number;
                countOpenActions: number;
              };
              metadata?: {
                __typename?: 'ProfileMetadata';
                displayName?: string | null;
                bio?: any | null;
                rawURI: any;
                appId?: any | null;
                picture?:
                  | {
                      __typename?: 'ImageSet';
                      raw: { __typename?: 'Image'; uri: any };
                      optimized?: { __typename?: 'Image'; uri: any } | null;
                    }
                  | {
                      __typename?: 'NftImage';
                      image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                    }
                  | null;
              } | null;
            };
          };
          verificationStatus:
            | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
            | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
        }
      | {
          __typename?: 'MomokaPostTransaction';
          transactionId: string;
          submitter: any;
          createdAt: any;
          app?: { __typename?: 'App'; id: any } | null;
          publication: {
            __typename?: 'Post';
            id: any;
            by: {
              __typename?: 'Profile';
              id: any;
              handle?: {
                __typename?: 'HandleInfo';
                id: any;
                fullHandle: any;
                namespace: string;
                localName: string;
                ownedBy: any;
                suggestedFormatted: {
                  __typename?: 'SuggestedFormattedHandle';
                  full: string;
                  localName: string;
                };
                linkedTo?: {
                  __typename?: 'HandleLinkedTo';
                  nftTokenId: any;
                  contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
                } | null;
              } | null;
              ownedBy: { __typename?: 'NetworkAddress'; address: any };
              operations: {
                __typename?: 'ProfileOperations';
                id: any;
                canBlock: boolean;
                canUnblock: boolean;
                canFollow: TriStateValue;
                canUnfollow: boolean;
                isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              };
              stats: {
                __typename?: 'ProfileStats';
                id: any;
                followers: number;
                following: number;
                comments: number;
                posts: number;
                mirrors: number;
                quotes: number;
                publications: number;
                reactions: number;
                reacted: number;
                countOpenActions: number;
              };
              metadata?: {
                __typename?: 'ProfileMetadata';
                displayName?: string | null;
                bio?: any | null;
                rawURI: any;
                appId?: any | null;
                picture?:
                  | {
                      __typename?: 'ImageSet';
                      raw: { __typename?: 'Image'; uri: any };
                      optimized?: { __typename?: 'Image'; uri: any } | null;
                    }
                  | {
                      __typename?: 'NftImage';
                      image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                    }
                  | null;
              } | null;
            };
          };
          verificationStatus:
            | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
            | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
        }
      | {
          __typename?: 'MomokaQuoteTransaction';
          transactionId: string;
          submitter: any;
          createdAt: any;
          app?: { __typename?: 'App'; id: any } | null;
          publication: {
            __typename?: 'Quote';
            id: any;
            by: {
              __typename?: 'Profile';
              id: any;
              handle?: {
                __typename?: 'HandleInfo';
                id: any;
                fullHandle: any;
                namespace: string;
                localName: string;
                ownedBy: any;
                suggestedFormatted: {
                  __typename?: 'SuggestedFormattedHandle';
                  full: string;
                  localName: string;
                };
                linkedTo?: {
                  __typename?: 'HandleLinkedTo';
                  nftTokenId: any;
                  contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
                } | null;
              } | null;
              ownedBy: { __typename?: 'NetworkAddress'; address: any };
              operations: {
                __typename?: 'ProfileOperations';
                id: any;
                canBlock: boolean;
                canUnblock: boolean;
                canFollow: TriStateValue;
                canUnfollow: boolean;
                isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
                isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
              };
              stats: {
                __typename?: 'ProfileStats';
                id: any;
                followers: number;
                following: number;
                comments: number;
                posts: number;
                mirrors: number;
                quotes: number;
                publications: number;
                reactions: number;
                reacted: number;
                countOpenActions: number;
              };
              metadata?: {
                __typename?: 'ProfileMetadata';
                displayName?: string | null;
                bio?: any | null;
                rawURI: any;
                appId?: any | null;
                picture?:
                  | {
                      __typename?: 'ImageSet';
                      raw: { __typename?: 'Image'; uri: any };
                      optimized?: { __typename?: 'Image'; uri: any } | null;
                    }
                  | {
                      __typename?: 'NftImage';
                      image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
                    }
                  | null;
              } | null;
            };
          };
          verificationStatus:
            | { __typename?: 'MomokaVerificationStatusFailure'; status: MomokaValidatorError }
            | { __typename?: 'MomokaVerificationStatusSuccess'; verified: boolean };
        }
    >;
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null };
  };
};

export type ProfileQueryVariables = Exact<{
  request: ProfileRequest;
}>;

export type ProfileQuery = {
  __typename?: 'Query';
  profile?: {
    __typename?: 'Profile';
    id: any;
    handle?: {
      __typename?: 'HandleInfo';
      id: any;
      fullHandle: any;
      namespace: string;
      localName: string;
      ownedBy: any;
      suggestedFormatted: { __typename?: 'SuggestedFormattedHandle'; full: string; localName: string };
      linkedTo?: {
        __typename?: 'HandleLinkedTo';
        nftTokenId: any;
        contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
      } | null;
    } | null;
    ownedBy: { __typename?: 'NetworkAddress'; address: any };
    operations: {
      __typename?: 'ProfileOperations';
      id: any;
      canBlock: boolean;
      canUnblock: boolean;
      canFollow: TriStateValue;
      canUnfollow: boolean;
      isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
      isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
      isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
    };
    stats: {
      __typename?: 'ProfileStats';
      id: any;
      followers: number;
      following: number;
      comments: number;
      posts: number;
      mirrors: number;
      quotes: number;
      publications: number;
      reactions: number;
      reacted: number;
      countOpenActions: number;
    };
    metadata?: {
      __typename?: 'ProfileMetadata';
      displayName?: string | null;
      bio?: any | null;
      rawURI: any;
      appId?: any | null;
      picture?:
        | {
            __typename?: 'ImageSet';
            raw: { __typename?: 'Image'; uri: any };
            optimized?: { __typename?: 'Image'; uri: any } | null;
          }
        | {
            __typename?: 'NftImage';
            image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
          }
        | null;
    } | null;
  } | null;
};

export type ProfilesManagedQueryVariables = Exact<{
  request: ProfilesManagedRequest;
}>;

export type ProfilesManagedQuery = {
  __typename?: 'Query';
  profilesManaged: {
    __typename?: 'PaginatedProfileResult';
    items: Array<{
      __typename?: 'Profile';
      id: any;
      handle?: {
        __typename?: 'HandleInfo';
        id: any;
        fullHandle: any;
        namespace: string;
        localName: string;
        ownedBy: any;
        suggestedFormatted: { __typename?: 'SuggestedFormattedHandle'; full: string; localName: string };
        linkedTo?: {
          __typename?: 'HandleLinkedTo';
          nftTokenId: any;
          contract: { __typename?: 'NetworkAddress'; address: any; chainId: any };
        } | null;
      } | null;
      ownedBy: { __typename?: 'NetworkAddress'; address: any };
      operations: {
        __typename?: 'ProfileOperations';
        id: any;
        canBlock: boolean;
        canUnblock: boolean;
        canFollow: TriStateValue;
        canUnfollow: boolean;
        isBlockedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowedByMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
        isFollowingMe: { __typename?: 'OptimisticStatusResult'; value: boolean };
      };
      stats: {
        __typename?: 'ProfileStats';
        id: any;
        followers: number;
        following: number;
        comments: number;
        posts: number;
        mirrors: number;
        quotes: number;
        publications: number;
        reactions: number;
        reacted: number;
        countOpenActions: number;
      };
      metadata?: {
        __typename?: 'ProfileMetadata';
        displayName?: string | null;
        bio?: any | null;
        rawURI: any;
        appId?: any | null;
        picture?:
          | {
              __typename?: 'ImageSet';
              raw: { __typename?: 'Image'; uri: any };
              optimized?: { __typename?: 'Image'; uri: any } | null;
            }
          | {
              __typename?: 'NftImage';
              image: { __typename?: 'ImageSet'; raw: { __typename?: 'Image'; uri: any } };
            }
          | null;
      } | null;
    }>;
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null };
  };
};

export type PublicationQueryVariables = Exact<{
  request: PublicationRequest;
}>;

export type PublicationQuery = {
  __typename?: 'Query';
  publication?:
    | {
        __typename?: 'Comment';
        metadata:
          | { __typename?: 'ArticleMetadataV3'; rawURI: any }
          | { __typename?: 'AudioMetadataV3'; rawURI: any }
          | { __typename?: 'CheckingInMetadataV3'; rawURI: any }
          | { __typename?: 'EmbedMetadataV3'; rawURI: any }
          | { __typename?: 'EventMetadataV3'; rawURI: any }
          | { __typename?: 'ImageMetadataV3'; rawURI: any }
          | { __typename?: 'LinkMetadataV3'; rawURI: any }
          | { __typename?: 'LiveStreamMetadataV3'; rawURI: any }
          | { __typename?: 'MintMetadataV3'; rawURI: any }
          | { __typename?: 'SpaceMetadataV3'; rawURI: any }
          | { __typename?: 'StoryMetadataV3'; rawURI: any }
          | { __typename?: 'TextOnlyMetadataV3'; rawURI: any }
          | { __typename?: 'ThreeDMetadataV3'; rawURI: any }
          | { __typename?: 'TransactionMetadataV3'; rawURI: any }
          | { __typename?: 'VideoMetadataV3'; rawURI: any };
      }
    | {
        __typename?: 'Mirror';
        mirrorOn:
          | {
              __typename?: 'Comment';
              metadata:
                | { __typename?: 'ArticleMetadataV3'; rawURI: any }
                | { __typename?: 'AudioMetadataV3'; rawURI: any }
                | { __typename?: 'CheckingInMetadataV3'; rawURI: any }
                | { __typename?: 'EmbedMetadataV3'; rawURI: any }
                | { __typename?: 'EventMetadataV3'; rawURI: any }
                | { __typename?: 'ImageMetadataV3'; rawURI: any }
                | { __typename?: 'LinkMetadataV3'; rawURI: any }
                | { __typename?: 'LiveStreamMetadataV3'; rawURI: any }
                | { __typename?: 'MintMetadataV3'; rawURI: any }
                | { __typename?: 'SpaceMetadataV3'; rawURI: any }
                | { __typename?: 'StoryMetadataV3'; rawURI: any }
                | { __typename?: 'TextOnlyMetadataV3'; rawURI: any }
                | { __typename?: 'ThreeDMetadataV3'; rawURI: any }
                | { __typename?: 'TransactionMetadataV3'; rawURI: any }
                | { __typename?: 'VideoMetadataV3'; rawURI: any };
            }
          | {
              __typename?: 'Post';
              metadata:
                | { __typename?: 'ArticleMetadataV3'; rawURI: any }
                | { __typename?: 'AudioMetadataV3'; rawURI: any }
                | { __typename?: 'CheckingInMetadataV3'; rawURI: any }
                | { __typename?: 'EmbedMetadataV3'; rawURI: any }
                | { __typename?: 'EventMetadataV3'; rawURI: any }
                | { __typename?: 'ImageMetadataV3'; rawURI: any }
                | { __typename?: 'LinkMetadataV3'; rawURI: any }
                | { __typename?: 'LiveStreamMetadataV3'; rawURI: any }
                | { __typename?: 'MintMetadataV3'; rawURI: any }
                | { __typename?: 'SpaceMetadataV3'; rawURI: any }
                | { __typename?: 'StoryMetadataV3'; rawURI: any }
                | { __typename?: 'TextOnlyMetadataV3'; rawURI: any }
                | { __typename?: 'ThreeDMetadataV3'; rawURI: any }
                | { __typename?: 'TransactionMetadataV3'; rawURI: any }
                | { __typename?: 'VideoMetadataV3'; rawURI: any };
            }
          | { __typename?: 'Quote' };
      }
    | {
        __typename?: 'Post';
        metadata:
          | { __typename?: 'ArticleMetadataV3'; rawURI: any }
          | { __typename?: 'AudioMetadataV3'; rawURI: any }
          | { __typename?: 'CheckingInMetadataV3'; rawURI: any }
          | { __typename?: 'EmbedMetadataV3'; rawURI: any }
          | { __typename?: 'EventMetadataV3'; rawURI: any }
          | { __typename?: 'ImageMetadataV3'; rawURI: any }
          | { __typename?: 'LinkMetadataV3'; rawURI: any }
          | { __typename?: 'LiveStreamMetadataV3'; rawURI: any }
          | { __typename?: 'MintMetadataV3'; rawURI: any }
          | { __typename?: 'SpaceMetadataV3'; rawURI: any }
          | { __typename?: 'StoryMetadataV3'; rawURI: any }
          | { __typename?: 'TextOnlyMetadataV3'; rawURI: any }
          | { __typename?: 'ThreeDMetadataV3'; rawURI: any }
          | { __typename?: 'TransactionMetadataV3'; rawURI: any }
          | { __typename?: 'VideoMetadataV3'; rawURI: any };
      }
    | {
        __typename?: 'Quote';
        metadata:
          | { __typename?: 'ArticleMetadataV3'; rawURI: any }
          | { __typename?: 'AudioMetadataV3'; rawURI: any }
          | { __typename?: 'CheckingInMetadataV3'; rawURI: any }
          | { __typename?: 'EmbedMetadataV3'; rawURI: any }
          | { __typename?: 'EventMetadataV3'; rawURI: any }
          | { __typename?: 'ImageMetadataV3'; rawURI: any }
          | { __typename?: 'LinkMetadataV3'; rawURI: any }
          | { __typename?: 'LiveStreamMetadataV3'; rawURI: any }
          | { __typename?: 'MintMetadataV3'; rawURI: any }
          | { __typename?: 'SpaceMetadataV3'; rawURI: any }
          | { __typename?: 'StoryMetadataV3'; rawURI: any }
          | { __typename?: 'TextOnlyMetadataV3'; rawURI: any }
          | { __typename?: 'ThreeDMetadataV3'; rawURI: any }
          | { __typename?: 'TransactionMetadataV3'; rawURI: any }
          | { __typename?: 'VideoMetadataV3'; rawURI: any };
      }
    | null;
};

export type PublicationsQueryVariables = Exact<{
  request: ExplorePublicationRequest;
}>;

export type PublicationsQuery = {
  __typename?: 'Query';
  explorePublications: {
    __typename?: 'PaginatedExplorePublicationResult';
    items: Array<{ __typename?: 'Post'; id: any } | { __typename?: 'Quote'; id: any }>;
  };
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    AnyPublication: ['Comment', 'Mirror', 'Post', 'Quote'],
    Asset: ['Erc20'],
    BroadcastMomokaResult: ['CreateMomokaPublicationResult', 'RelayError'],
    ClaimProfileWithHandleResult: ['ClaimProfileWithHandleErrorResult', 'RelaySuccess'],
    CreateProfileWithHandleResult: ['CreateProfileWithHandleErrorResult', 'RelaySuccess'],
    ExplorePublication: ['Post', 'Quote'],
    FeedHighlight: ['Post', 'Quote'],
    FollowModule: ['FeeFollowModuleSettings', 'RevertFollowModuleSettings', 'UnknownFollowModuleSettings'],
    LensProfileManagerRelayResult: ['LensProfileManagerRelayError', 'RelaySuccess'],
    MirrorablePublication: ['Comment', 'Post', 'Quote'],
    MomokaTransaction: [
      'MomokaCommentTransaction',
      'MomokaMirrorTransaction',
      'MomokaPostTransaction',
      'MomokaQuoteTransaction'
    ],
    MomokaVerificationStatus: ['MomokaVerificationStatusFailure', 'MomokaVerificationStatusSuccess'],
    Notification: [
      'ActedNotification',
      'CommentNotification',
      'FollowNotification',
      'MentionNotification',
      'MirrorNotification',
      'QuoteNotification',
      'ReactionNotification'
    ],
    OpenActionModule: [
      'LegacyAaveFeeCollectModuleSettings',
      'LegacyERC4626FeeCollectModuleSettings',
      'LegacyFeeCollectModuleSettings',
      'LegacyFreeCollectModuleSettings',
      'LegacyLimitedFeeCollectModuleSettings',
      'LegacyLimitedTimedFeeCollectModuleSettings',
      'LegacyMultirecipientFeeCollectModuleSettings',
      'LegacyRevertCollectModuleSettings',
      'LegacySimpleCollectModuleSettings',
      'LegacyTimedFeeCollectModuleSettings',
      'MultirecipientFeeCollectOpenActionSettings',
      'SimpleCollectOpenActionSettings',
      'UnknownOpenActionModuleSettings'
    ],
    OpenActionResult: ['KnownCollectOpenActionResult', 'UnknownOpenActionResult'],
    PrimaryPublication: ['Comment', 'Post', 'Quote'],
    ProfilePicture: ['ImageSet', 'NftImage'],
    PublicationMetadata: [
      'ArticleMetadataV3',
      'AudioMetadataV3',
      'CheckingInMetadataV3',
      'EmbedMetadataV3',
      'EventMetadataV3',
      'ImageMetadataV3',
      'LinkMetadataV3',
      'LiveStreamMetadataV3',
      'MintMetadataV3',
      'SpaceMetadataV3',
      'StoryMetadataV3',
      'TextOnlyMetadataV3',
      'ThreeDMetadataV3',
      'TransactionMetadataV3',
      'VideoMetadataV3'
    ],
    PublicationMetadataEncryptionStrategy: ['PublicationMetadataLitEncryption'],
    PublicationMetadataMedia: [
      'PublicationMetadataMediaAudio',
      'PublicationMetadataMediaImage',
      'PublicationMetadataMediaVideo'
    ],
    ReferenceModule: [
      'DegreesOfSeparationReferenceModuleSettings',
      'FollowOnlyReferenceModuleSettings',
      'LegacyDegreesOfSeparationReferenceModuleSettings',
      'LegacyFollowOnlyReferenceModuleSettings',
      'UnknownReferenceModuleSettings'
    ],
    RelayMomokaResult: ['CreateMomokaPublicationResult', 'LensProfileManagerRelayError'],
    RelayResult: ['RelayError', 'RelaySuccess'],
    SecondTierCondition: [
      'AdvancedContractCondition',
      'AndCondition',
      'CollectCondition',
      'EoaOwnershipCondition',
      'Erc20OwnershipCondition',
      'FollowCondition',
      'NftOwnershipCondition',
      'OrCondition',
      'ProfileOwnershipCondition'
    ],
    SupportedModule: ['KnownSupportedModule', 'UnknownSupportedModule'],
    ThirdTierCondition: [
      'AdvancedContractCondition',
      'CollectCondition',
      'EoaOwnershipCondition',
      'Erc20OwnershipCondition',
      'FollowCondition',
      'NftOwnershipCondition',
      'ProfileOwnershipCondition'
    ]
  }
};
export default result;

export const AnyPublicationMetadataFieldsFragmentDoc = gql`
  fragment AnyPublicationMetadataFields on PublicationMetadata {
    ... on VideoMetadataV3 {
      rawURI
    }
    ... on ArticleMetadataV3 {
      rawURI
    }
    ... on AudioMetadataV3 {
      rawURI
    }
    ... on CheckingInMetadataV3 {
      rawURI
    }
    ... on EmbedMetadataV3 {
      rawURI
    }
    ... on EventMetadataV3 {
      rawURI
    }
    ... on ImageMetadataV3 {
      rawURI
    }
    ... on LinkMetadataV3 {
      rawURI
    }
    ... on LiveStreamMetadataV3 {
      rawURI
    }
    ... on MintMetadataV3 {
      rawURI
    }
    ... on SpaceMetadataV3 {
      rawURI
    }
    ... on StoryMetadataV3 {
      rawURI
    }
    ... on TextOnlyMetadataV3 {
      rawURI
    }
    ... on ThreeDMetadataV3 {
      rawURI
    }
    ... on TransactionMetadataV3 {
      rawURI
    }
  }
`;
export const ProfileFieldsFragmentDoc = gql`
  fragment ProfileFields on Profile {
    id
    handle {
      id
      fullHandle
      namespace
      localName
      suggestedFormatted {
        full
        localName
      }
      linkedTo {
        contract {
          address
          chainId
        }
        nftTokenId
      }
      ownedBy
    }
    ownedBy {
      address
    }
    operations {
      id
      isBlockedByMe {
        value
      }
      isFollowedByMe {
        value
      }
      isFollowingMe {
        value
      }
      canBlock
      canUnblock
      canFollow
      canUnfollow
    }
    stats {
      id
      followers
      following
      comments
      posts
      mirrors
      quotes
      publications
      reactions
      reacted
      countOpenActions
    }
    metadata {
      displayName
      bio
      rawURI
      appId
      picture {
        ... on ImageSet {
          raw {
            uri
          }
          optimized {
            uri
          }
        }
        ... on NftImage {
          image {
            raw {
              uri
            }
          }
        }
      }
    }
  }
`;
export const MomokaCommentFieldsFragmentDoc = gql`
  fragment MomokaCommentFields on MomokaCommentTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;
export const MomokaMirrorFieldsFragmentDoc = gql`
  fragment MomokaMirrorFields on MomokaMirrorTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;
export const MomokaPostFieldsFragmentDoc = gql`
  fragment MomokaPostFields on MomokaPostTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;
export const MomokaQuoteFieldsFragmentDoc = gql`
  fragment MomokaQuoteFields on MomokaQuoteTransaction {
    transactionId
    submitter
    createdAt
    app {
      id
    }
    publication {
      id
      by {
        ...ProfileFields
      }
    }
    verificationStatus {
      ... on MomokaVerificationStatusSuccess {
        verified
      }
      ... on MomokaVerificationStatusFailure {
        status
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;
export const MomokaSubmittersDocument = gql`
  query MomokaSubmitters {
    momokaSubmitters {
      items {
        address
        name
        totalTransactions
      }
      pageInfo {
        next
      }
    }
  }
`;

/**
 * __useMomokaSubmittersQuery__
 *
 * To run a query within a React component, call `useMomokaSubmittersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMomokaSubmittersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMomokaSubmittersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMomokaSubmittersQuery(
  baseOptions?: Apollo.QueryHookOptions<MomokaSubmittersQuery, MomokaSubmittersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MomokaSubmittersQuery, MomokaSubmittersQueryVariables>(
    MomokaSubmittersDocument,
    options
  );
}
export function useMomokaSubmittersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MomokaSubmittersQuery, MomokaSubmittersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MomokaSubmittersQuery, MomokaSubmittersQueryVariables>(
    MomokaSubmittersDocument,
    options
  );
}
export type MomokaSubmittersQueryHookResult = ReturnType<typeof useMomokaSubmittersQuery>;
export type MomokaSubmittersLazyQueryHookResult = ReturnType<typeof useMomokaSubmittersLazyQuery>;
export type MomokaSubmittersQueryResult = Apollo.QueryResult<
  MomokaSubmittersQuery,
  MomokaSubmittersQueryVariables
>;
export const MomokaSummaryDocument = gql`
  query MomokaSummary {
    momokaSummary {
      totalTransactions
    }
  }
`;

/**
 * __useMomokaSummaryQuery__
 *
 * To run a query within a React component, call `useMomokaSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMomokaSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMomokaSummaryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMomokaSummaryQuery(
  baseOptions?: Apollo.QueryHookOptions<MomokaSummaryQuery, MomokaSummaryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MomokaSummaryQuery, MomokaSummaryQueryVariables>(MomokaSummaryDocument, options);
}
export function useMomokaSummaryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MomokaSummaryQuery, MomokaSummaryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MomokaSummaryQuery, MomokaSummaryQueryVariables>(MomokaSummaryDocument, options);
}
export type MomokaSummaryQueryHookResult = ReturnType<typeof useMomokaSummaryQuery>;
export type MomokaSummaryLazyQueryHookResult = ReturnType<typeof useMomokaSummaryLazyQuery>;
export type MomokaSummaryQueryResult = Apollo.QueryResult<MomokaSummaryQuery, MomokaSummaryQueryVariables>;
export const MomokaTransactionDocument = gql`
  query MomokaTransaction($request: MomokaTransactionRequest!) {
    momokaTransaction(request: $request) {
      ... on MomokaPostTransaction {
        ...MomokaPostFields
      }
      ... on MomokaCommentTransaction {
        ...MomokaCommentFields
      }
      ... on MomokaMirrorTransaction {
        ...MomokaMirrorFields
      }
      ... on MomokaQuoteTransaction {
        ...MomokaQuoteFields
      }
    }
  }
  ${MomokaPostFieldsFragmentDoc}
  ${MomokaCommentFieldsFragmentDoc}
  ${MomokaMirrorFieldsFragmentDoc}
  ${MomokaQuoteFieldsFragmentDoc}
`;

/**
 * __useMomokaTransactionQuery__
 *
 * To run a query within a React component, call `useMomokaTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMomokaTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMomokaTransactionQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMomokaTransactionQuery(
  baseOptions: Apollo.QueryHookOptions<MomokaTransactionQuery, MomokaTransactionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MomokaTransactionQuery, MomokaTransactionQueryVariables>(
    MomokaTransactionDocument,
    options
  );
}
export function useMomokaTransactionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MomokaTransactionQuery, MomokaTransactionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MomokaTransactionQuery, MomokaTransactionQueryVariables>(
    MomokaTransactionDocument,
    options
  );
}
export type MomokaTransactionQueryHookResult = ReturnType<typeof useMomokaTransactionQuery>;
export type MomokaTransactionLazyQueryHookResult = ReturnType<typeof useMomokaTransactionLazyQuery>;
export type MomokaTransactionQueryResult = Apollo.QueryResult<
  MomokaTransactionQuery,
  MomokaTransactionQueryVariables
>;
export const MomokaTransactionsDocument = gql`
  query MomokaTransactions($request: MomokaTransactionsRequest!) {
    momokaTransactions(request: $request) {
      items {
        ... on MomokaPostTransaction {
          ...MomokaPostFields
        }
        ... on MomokaCommentTransaction {
          ...MomokaCommentFields
        }
        ... on MomokaMirrorTransaction {
          ...MomokaMirrorFields
        }
        ... on MomokaQuoteTransaction {
          ...MomokaQuoteFields
        }
      }
      pageInfo {
        next
      }
    }
  }
  ${MomokaPostFieldsFragmentDoc}
  ${MomokaCommentFieldsFragmentDoc}
  ${MomokaMirrorFieldsFragmentDoc}
  ${MomokaQuoteFieldsFragmentDoc}
`;

/**
 * __useMomokaTransactionsQuery__
 *
 * To run a query within a React component, call `useMomokaTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMomokaTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMomokaTransactionsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMomokaTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<MomokaTransactionsQuery, MomokaTransactionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MomokaTransactionsQuery, MomokaTransactionsQueryVariables>(
    MomokaTransactionsDocument,
    options
  );
}
export function useMomokaTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MomokaTransactionsQuery, MomokaTransactionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MomokaTransactionsQuery, MomokaTransactionsQueryVariables>(
    MomokaTransactionsDocument,
    options
  );
}
export type MomokaTransactionsQueryHookResult = ReturnType<typeof useMomokaTransactionsQuery>;
export type MomokaTransactionsLazyQueryHookResult = ReturnType<typeof useMomokaTransactionsLazyQuery>;
export type MomokaTransactionsQueryResult = Apollo.QueryResult<
  MomokaTransactionsQuery,
  MomokaTransactionsQueryVariables
>;
export const ProfileDocument = gql`
  query Profile($request: ProfileRequest!) {
    profile(request: $request) {
      ...ProfileFields
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
}
export function useProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const ProfilesManagedDocument = gql`
  query ProfilesManaged($request: ProfilesManagedRequest!) {
    profilesManaged(request: $request) {
      items {
        ...ProfileFields
      }
      pageInfo {
        next
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`;

/**
 * __useProfilesManagedQuery__
 *
 * To run a query within a React component, call `useProfilesManagedQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesManagedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesManagedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfilesManagedQuery(
  baseOptions: Apollo.QueryHookOptions<ProfilesManagedQuery, ProfilesManagedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfilesManagedQuery, ProfilesManagedQueryVariables>(
    ProfilesManagedDocument,
    options
  );
}
export function useProfilesManagedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfilesManagedQuery, ProfilesManagedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfilesManagedQuery, ProfilesManagedQueryVariables>(
    ProfilesManagedDocument,
    options
  );
}
export type ProfilesManagedQueryHookResult = ReturnType<typeof useProfilesManagedQuery>;
export type ProfilesManagedLazyQueryHookResult = ReturnType<typeof useProfilesManagedLazyQuery>;
export type ProfilesManagedQueryResult = Apollo.QueryResult<
  ProfilesManagedQuery,
  ProfilesManagedQueryVariables
>;
export const PublicationDocument = gql`
  query Publication($request: PublicationRequest!) {
    publication(request: $request) {
      ... on Post {
        metadata {
          ...AnyPublicationMetadataFields
        }
      }
      ... on Comment {
        metadata {
          ...AnyPublicationMetadataFields
        }
      }
      ... on Quote {
        metadata {
          ...AnyPublicationMetadataFields
        }
      }
      ... on Mirror {
        mirrorOn {
          ... on Post {
            metadata {
              ...AnyPublicationMetadataFields
            }
          }
          ... on Comment {
            metadata {
              ...AnyPublicationMetadataFields
            }
          }
        }
      }
    }
  }
  ${AnyPublicationMetadataFieldsFragmentDoc}
`;

/**
 * __usePublicationQuery__
 *
 * To run a query within a React component, call `usePublicationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationQuery(
  baseOptions: Apollo.QueryHookOptions<PublicationQuery, PublicationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
}
export function usePublicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
}
export type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>;
export type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>;
export type PublicationQueryResult = Apollo.QueryResult<PublicationQuery, PublicationQueryVariables>;
export const PublicationsDocument = gql`
  query Publications($request: ExplorePublicationRequest!) {
    explorePublications(request: $request) {
      items {
        ... on Post {
          id
        }
        ... on Quote {
          id
        }
      }
    }
  }
`;

/**
 * __usePublicationsQuery__
 *
 * To run a query within a React component, call `usePublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationsQuery(
  baseOptions: Apollo.QueryHookOptions<PublicationsQuery, PublicationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
}
export function usePublicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PublicationsQuery, PublicationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
}
export type PublicationsQueryHookResult = ReturnType<typeof usePublicationsQuery>;
export type PublicationsLazyQueryHookResult = ReturnType<typeof usePublicationsLazyQuery>;
export type PublicationsQueryResult = Apollo.QueryResult<PublicationsQuery, PublicationsQueryVariables>;
