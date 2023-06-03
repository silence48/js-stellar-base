import BrowserBuffer from '../src/util/BrowserBuffer';
// Automatically generated on 2023-04-20T14:53:00-08:00
import { Operation } from './index';

export {};

// Hidden namespace as hack to work around name collision.
declare namespace xdrHidden {
  // tslint:disable-line:strict-export-declare-modifiers
  class Operation2<T extends Operation = Operation> {
    constructor(attributes: {
      sourceAccount: null | xdr.MuxedAccount;
      body: xdr.OperationBody;
    });

    sourceAccount(value?: null | xdr.MuxedAccount): null | xdr.MuxedAccount;

    body(value?: xdr.OperationBody): xdr.OperationBody;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): xdr.Operation;

    static write(value: xdr.Operation, io: BrowserBuffer): void;

    static isValid(value: xdr.Operation): boolean;

    static toXDR(value: xdr.Operation): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): xdr.Operation;

    static fromXDR(input: string, format: "hex" | "base64"): xdr.Operation;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }
}

export namespace xdr {
  export import Operation = xdrHidden.Operation2; // tslint:disable-line:strict-export-declare-modifiers

  interface SignedInt {
    readonly MAX_VALUE: 2147483647;
    readonly MIN_VALUE: -2147483648;
    read(io: BrowserBuffer): number;
    write(value: number, io: BrowserBuffer): void;
    isValid(value: number): boolean;
    toXDR(value: number): BrowserBuffer;
    fromXDR(input: BrowserBuffer, format?: "raw"): number;
    fromXDR(input: string, format: "hex" | "base64"): number;
    validateXDR(input: BrowserBuffer, format?: "raw"): boolean;
    validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  interface UnsignedInt {
    readonly MAX_VALUE: 4294967295;
    readonly MIN_VALUE: 0;
    read(io: BrowserBuffer): number;
    write(value: number, io: BrowserBuffer): void;
    isValid(value: number): boolean;
    toXDR(value: number): BrowserBuffer;
    fromXDR(input: BrowserBuffer, format?: "raw"): number;
    fromXDR(input: string, format: "hex" | "base64"): number;
    validateXDR(input: BrowserBuffer, format?: "raw"): boolean;
    validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  interface Bool {
    read(io: BrowserBuffer): boolean;
    write(value: boolean, io: BrowserBuffer): void;
    isValid(value: boolean): boolean;
    toXDR(value: boolean): BrowserBuffer;
    fromXDR(input: BrowserBuffer, format?: "raw"): boolean;
    fromXDR(input: string, format: "hex" | "base64"): boolean;
    validateXDR(input: BrowserBuffer, format?: "raw"): boolean;
    validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Hyper {
    low: number;

    high: number;

    unsigned: boolean;

    constructor(low: number, high: number);

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static toXDR(value: Hyper): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Hyper;

    static fromXDR(input: string, format: "hex" | "base64"): Hyper;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;

    static readonly MAX_VALUE: Hyper;

    static readonly MIN_VALUE: Hyper;

    static read(io: BrowserBuffer): Hyper;

    static write(value: Hyper, io: BrowserBuffer): void;

    static fromString(input: string): Hyper;

    static fromBytes(low: number, high: number): Hyper;

    static isValid(value: Hyper): boolean;
  }

  class UnsignedHyper {
    low: number;

    high: number;

    unsigned: boolean;

    constructor(low: number, high: number);

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static toXDR(value: UnsignedHyper): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): UnsignedHyper;

    static fromXDR(input: string, format: "hex" | "base64"): UnsignedHyper;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;

    static readonly MAX_VALUE: UnsignedHyper;

    static readonly MIN_VALUE: UnsignedHyper;

    static read(io: BrowserBuffer): UnsignedHyper;

    static write(value: UnsignedHyper, io: BrowserBuffer): void;

    static fromString(input: string): UnsignedHyper;

    static fromBytes(low: number, high: number): UnsignedHyper;

    static isValid(value: UnsignedHyper): boolean;
  }

  class XDRString {
    constructor(maxLength: 4294967295);

    read(io: BrowserBuffer): BrowserBuffer;

    readString(io: BrowserBuffer): string;

    write(value: string | BrowserBuffer, io: BrowserBuffer): void;

    isValid(value: string | number[] | BrowserBuffer): boolean;

    toXDR(value: string | BrowserBuffer): BrowserBuffer;

    fromXDR(input: BrowserBuffer, format?: "raw"): BrowserBuffer;

    fromXDR(input: string, format: "hex" | "base64"): BrowserBuffer;

    validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class XDRArray<T> {
    read(io: BrowserBuffer): BrowserBuffer;

    write(value: T[], io: BrowserBuffer): void;

    isValid(value: T[]): boolean;

    toXDR(value: T[]): BrowserBuffer;

    fromXDR(input: BrowserBuffer, format?: "raw"): T[];

    fromXDR(input: string, format: "hex" | "base64"): T[];

    validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Opaque {
    constructor(length: number);

    read(io: BrowserBuffer): BrowserBuffer;

    write(value: BrowserBuffer, io: BrowserBuffer): void;

    isValid(value: BrowserBuffer): boolean;

    toXDR(value: BrowserBuffer): BrowserBuffer;

    fromXDR(input: BrowserBuffer, format?: "raw"): BrowserBuffer;

    fromXDR(input: string, format: "hex" | "base64"): BrowserBuffer;

    validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class VarOpaque extends Opaque {}

  class Option {
    constructor(childType: {
      read(io: any): any;
      write(value: any, io: BrowserBuffer): void;
      isValid(value: any): boolean;
    });

    read(io: BrowserBuffer): any;

    write(value: any, io: BrowserBuffer): void;

    isValid(value: any): boolean;

    toXDR(value: any): BrowserBuffer;

    fromXDR(input: BrowserBuffer, format?: "raw"): any;

    fromXDR(input: string, format: "hex" | "base64"): any;

    validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpStatementType {
    readonly name:
      | "scpStPrepare"
      | "scpStConfirm"
      | "scpStExternalize"
      | "scpStNominate";

    readonly value: 0 | 1 | 2 | 3;

    static scpStPrepare(): ScpStatementType;

    static scpStConfirm(): ScpStatementType;

    static scpStExternalize(): ScpStatementType;

    static scpStNominate(): ScpStatementType;
  }

  class AssetType {
    readonly name:
      | "assetTypeNative"
      | "assetTypeCreditAlphanum4"
      | "assetTypeCreditAlphanum12"
      | "assetTypePoolShare";

    readonly value: 0 | 1 | 2 | 3;

    static assetTypeNative(): AssetType;

    static assetTypeCreditAlphanum4(): AssetType;

    static assetTypeCreditAlphanum12(): AssetType;

    static assetTypePoolShare(): AssetType;
  }

  class ThresholdIndices {
    readonly name:
      | "thresholdMasterWeight"
      | "thresholdLow"
      | "thresholdMed"
      | "thresholdHigh";

    readonly value: 0 | 1 | 2 | 3;

    static thresholdMasterWeight(): ThresholdIndices;

    static thresholdLow(): ThresholdIndices;

    static thresholdMed(): ThresholdIndices;

    static thresholdHigh(): ThresholdIndices;
  }

  class LedgerEntryType {
    readonly name:
      | "account"
      | "trustline"
      | "offer"
      | "data"
      | "claimableBalance"
      | "liquidityPool";

    readonly value: 0 | 1 | 2 | 3 | 4 | 5;

    static account(): LedgerEntryType;

    static trustline(): LedgerEntryType;

    static offer(): LedgerEntryType;

    static data(): LedgerEntryType;

    static claimableBalance(): LedgerEntryType;

    static liquidityPool(): LedgerEntryType;
  }

  class AccountFlags {
    readonly name:
      | "authRequiredFlag"
      | "authRevocableFlag"
      | "authImmutableFlag"
      | "authClawbackEnabledFlag";

    readonly value: 1 | 2 | 4 | 8;

    static authRequiredFlag(): AccountFlags;

    static authRevocableFlag(): AccountFlags;

    static authImmutableFlag(): AccountFlags;

    static authClawbackEnabledFlag(): AccountFlags;
  }

  class TrustLineFlags {
    readonly name:
      | "authorizedFlag"
      | "authorizedToMaintainLiabilitiesFlag"
      | "trustlineClawbackEnabledFlag";

    readonly value: 1 | 2 | 4;

    static authorizedFlag(): TrustLineFlags;

    static authorizedToMaintainLiabilitiesFlag(): TrustLineFlags;

    static trustlineClawbackEnabledFlag(): TrustLineFlags;
  }

  class LiquidityPoolType {
    readonly name: "liquidityPoolConstantProduct";

    readonly value: 0;

    static liquidityPoolConstantProduct(): LiquidityPoolType;
  }

  class OfferEntryFlags {
    readonly name: "passiveFlag";

    readonly value: 1;

    static passiveFlag(): OfferEntryFlags;
  }

  class ClaimPredicateType {
    readonly name:
      | "claimPredicateUnconditional"
      | "claimPredicateAnd"
      | "claimPredicateOr"
      | "claimPredicateNot"
      | "claimPredicateBeforeAbsoluteTime"
      | "claimPredicateBeforeRelativeTime";

    readonly value: 0 | 1 | 2 | 3 | 4 | 5;

    static claimPredicateUnconditional(): ClaimPredicateType;

    static claimPredicateAnd(): ClaimPredicateType;

    static claimPredicateOr(): ClaimPredicateType;

    static claimPredicateNot(): ClaimPredicateType;

    static claimPredicateBeforeAbsoluteTime(): ClaimPredicateType;

    static claimPredicateBeforeRelativeTime(): ClaimPredicateType;
  }

  class ClaimantType {
    readonly name: "claimantTypeV0";

    readonly value: 0;

    static claimantTypeV0(): ClaimantType;
  }

  class ClaimableBalanceIdType {
    readonly name: "claimableBalanceIdTypeV0";

    readonly value: 0;

    static claimableBalanceIdTypeV0(): ClaimableBalanceIdType;
  }

  class ClaimableBalanceFlags {
    readonly name: "claimableBalanceClawbackEnabledFlag";

    readonly value: 1;

    static claimableBalanceClawbackEnabledFlag(): ClaimableBalanceFlags;
  }

  class EnvelopeType {
    readonly name:
      | "envelopeTypeTxV0"
      | "envelopeTypeScp"
      | "envelopeTypeTx"
      | "envelopeTypeAuth"
      | "envelopeTypeScpvalue"
      | "envelopeTypeTxFeeBump"
      | "envelopeTypeOpId"
      | "envelopeTypePoolRevokeOpId";

    readonly value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

    static envelopeTypeTxV0(): EnvelopeType;

    static envelopeTypeScp(): EnvelopeType;

    static envelopeTypeTx(): EnvelopeType;

    static envelopeTypeAuth(): EnvelopeType;

    static envelopeTypeScpvalue(): EnvelopeType;

    static envelopeTypeTxFeeBump(): EnvelopeType;

    static envelopeTypeOpId(): EnvelopeType;

    static envelopeTypePoolRevokeOpId(): EnvelopeType;
  }

  class StellarValueType {
    readonly name: "stellarValueBasic" | "stellarValueSigned";

    readonly value: 0 | 1;

    static stellarValueBasic(): StellarValueType;

    static stellarValueSigned(): StellarValueType;
  }

  class LedgerHeaderFlags {
    readonly name:
      | "disableLiquidityPoolTradingFlag"
      | "disableLiquidityPoolDepositFlag"
      | "disableLiquidityPoolWithdrawalFlag";

    readonly value: 1 | 2 | 4;

    static disableLiquidityPoolTradingFlag(): LedgerHeaderFlags;

    static disableLiquidityPoolDepositFlag(): LedgerHeaderFlags;

    static disableLiquidityPoolWithdrawalFlag(): LedgerHeaderFlags;
  }

  class LedgerUpgradeType {
    readonly name:
      | "ledgerUpgradeVersion"
      | "ledgerUpgradeBaseFee"
      | "ledgerUpgradeMaxTxSetSize"
      | "ledgerUpgradeBaseReserve"
      | "ledgerUpgradeFlags";

    readonly value: 1 | 2 | 3 | 4 | 5;

    static ledgerUpgradeVersion(): LedgerUpgradeType;

    static ledgerUpgradeBaseFee(): LedgerUpgradeType;

    static ledgerUpgradeMaxTxSetSize(): LedgerUpgradeType;

    static ledgerUpgradeBaseReserve(): LedgerUpgradeType;

    static ledgerUpgradeFlags(): LedgerUpgradeType;
  }

  class BucketEntryType {
    readonly name: "metaentry" | "liveentry" | "deadentry" | "initentry";

    readonly value: -1 | 0 | 1 | 2;

    static metaentry(): BucketEntryType;

    static liveentry(): BucketEntryType;

    static deadentry(): BucketEntryType;

    static initentry(): BucketEntryType;
  }

  class TxSetComponentType {
    readonly name: "txsetCompTxsMaybeDiscountedFee";

    readonly value: 0;

    static txsetCompTxsMaybeDiscountedFee(): TxSetComponentType;
  }

  class LedgerEntryChangeType {
    readonly name:
      | "ledgerEntryCreated"
      | "ledgerEntryUpdated"
      | "ledgerEntryRemoved"
      | "ledgerEntryState";

    readonly value: 0 | 1 | 2 | 3;

    static ledgerEntryCreated(): LedgerEntryChangeType;

    static ledgerEntryUpdated(): LedgerEntryChangeType;

    static ledgerEntryRemoved(): LedgerEntryChangeType;

    static ledgerEntryState(): LedgerEntryChangeType;
  }

  class ErrorCode {
    readonly name: "errMisc" | "errData" | "errConf" | "errAuth" | "errLoad";

    readonly value: 0 | 1 | 2 | 3 | 4;

    static errMisc(): ErrorCode;

    static errData(): ErrorCode;

    static errConf(): ErrorCode;

    static errAuth(): ErrorCode;

    static errLoad(): ErrorCode;
  }

  class IpAddrType {
    readonly name: "iPv4" | "iPv6";

    readonly value: 0 | 1;

    static iPv4(): IpAddrType;

    static iPv6(): IpAddrType;
  }

  class MessageType {
    readonly name:
      | "errorMsg"
      | "auth"
      | "dontHave"
      | "getPeers"
      | "peers"
      | "getTxSet"
      | "txSet"
      | "generalizedTxSet"
      | "transaction"
      | "getScpQuorumset"
      | "scpQuorumset"
      | "scpMessage"
      | "getScpState"
      | "hello"
      | "surveyRequest"
      | "surveyResponse"
      | "sendMore"
      | "floodAdvert"
      | "floodDemand";

    readonly value:
      | 0
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 17
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 18
      | 19;

    static errorMsg(): MessageType;

    static auth(): MessageType;

    static dontHave(): MessageType;

    static getPeers(): MessageType;

    static peers(): MessageType;

    static getTxSet(): MessageType;

    static txSet(): MessageType;

    static generalizedTxSet(): MessageType;

    static transaction(): MessageType;

    static getScpQuorumset(): MessageType;

    static scpQuorumset(): MessageType;

    static scpMessage(): MessageType;

    static getScpState(): MessageType;

    static hello(): MessageType;

    static surveyRequest(): MessageType;

    static surveyResponse(): MessageType;

    static sendMore(): MessageType;

    static floodAdvert(): MessageType;

    static floodDemand(): MessageType;
  }

  class SurveyMessageCommandType {
    readonly name: "surveyTopology";

    readonly value: 0;

    static surveyTopology(): SurveyMessageCommandType;
  }

  class OperationType {
    readonly name:
      | "createAccount"
      | "payment"
      | "pathPaymentStrictReceive"
      | "manageSellOffer"
      | "createPassiveSellOffer"
      | "setOptions"
      | "changeTrust"
      | "allowTrust"
      | "accountMerge"
      | "inflation"
      | "manageData"
      | "bumpSequence"
      | "manageBuyOffer"
      | "pathPaymentStrictSend"
      | "createClaimableBalance"
      | "claimClaimableBalance"
      | "beginSponsoringFutureReserves"
      | "endSponsoringFutureReserves"
      | "revokeSponsorship"
      | "clawback"
      | "clawbackClaimableBalance"
      | "setTrustLineFlags"
      | "liquidityPoolDeposit"
      | "liquidityPoolWithdraw";

    readonly value:
      | 0
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23;

    static createAccount(): OperationType;

    static payment(): OperationType;

    static pathPaymentStrictReceive(): OperationType;

    static manageSellOffer(): OperationType;

    static createPassiveSellOffer(): OperationType;

    static setOptions(): OperationType;

    static changeTrust(): OperationType;

    static allowTrust(): OperationType;

    static accountMerge(): OperationType;

    static inflation(): OperationType;

    static manageData(): OperationType;

    static bumpSequence(): OperationType;

    static manageBuyOffer(): OperationType;

    static pathPaymentStrictSend(): OperationType;

    static createClaimableBalance(): OperationType;

    static claimClaimableBalance(): OperationType;

    static beginSponsoringFutureReserves(): OperationType;

    static endSponsoringFutureReserves(): OperationType;

    static revokeSponsorship(): OperationType;

    static clawback(): OperationType;

    static clawbackClaimableBalance(): OperationType;

    static setTrustLineFlags(): OperationType;

    static liquidityPoolDeposit(): OperationType;

    static liquidityPoolWithdraw(): OperationType;
  }

  class RevokeSponsorshipType {
    readonly name: "revokeSponsorshipLedgerEntry" | "revokeSponsorshipSigner";

    readonly value: 0 | 1;

    static revokeSponsorshipLedgerEntry(): RevokeSponsorshipType;

    static revokeSponsorshipSigner(): RevokeSponsorshipType;
  }

  class MemoType {
    readonly name:
      | "memoNone"
      | "memoText"
      | "memoId"
      | "memoHash"
      | "memoReturn";

    readonly value: 0 | 1 | 2 | 3 | 4;

    static memoNone(): MemoType;

    static memoText(): MemoType;

    static memoId(): MemoType;

    static memoHash(): MemoType;

    static memoReturn(): MemoType;
  }

  class PreconditionType {
    readonly name: "precondNone" | "precondTime" | "precondV2";

    readonly value: 0 | 1 | 2;

    static precondNone(): PreconditionType;

    static precondTime(): PreconditionType;

    static precondV2(): PreconditionType;
  }

  class ClaimAtomType {
    readonly name:
      | "claimAtomTypeV0"
      | "claimAtomTypeOrderBook"
      | "claimAtomTypeLiquidityPool";

    readonly value: 0 | 1 | 2;

    static claimAtomTypeV0(): ClaimAtomType;

    static claimAtomTypeOrderBook(): ClaimAtomType;

    static claimAtomTypeLiquidityPool(): ClaimAtomType;
  }

  class CreateAccountResultCode {
    readonly name:
      | "createAccountSuccess"
      | "createAccountMalformed"
      | "createAccountUnderfunded"
      | "createAccountLowReserve"
      | "createAccountAlreadyExist";

    readonly value: 0 | -1 | -2 | -3 | -4;

    static createAccountSuccess(): CreateAccountResultCode;

    static createAccountMalformed(): CreateAccountResultCode;

    static createAccountUnderfunded(): CreateAccountResultCode;

    static createAccountLowReserve(): CreateAccountResultCode;

    static createAccountAlreadyExist(): CreateAccountResultCode;
  }

  class PaymentResultCode {
    readonly name:
      | "paymentSuccess"
      | "paymentMalformed"
      | "paymentUnderfunded"
      | "paymentSrcNoTrust"
      | "paymentSrcNotAuthorized"
      | "paymentNoDestination"
      | "paymentNoTrust"
      | "paymentNotAuthorized"
      | "paymentLineFull"
      | "paymentNoIssuer";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8 | -9;

    static paymentSuccess(): PaymentResultCode;

    static paymentMalformed(): PaymentResultCode;

    static paymentUnderfunded(): PaymentResultCode;

    static paymentSrcNoTrust(): PaymentResultCode;

    static paymentSrcNotAuthorized(): PaymentResultCode;

    static paymentNoDestination(): PaymentResultCode;

    static paymentNoTrust(): PaymentResultCode;

    static paymentNotAuthorized(): PaymentResultCode;

    static paymentLineFull(): PaymentResultCode;

    static paymentNoIssuer(): PaymentResultCode;
  }

  class PathPaymentStrictReceiveResultCode {
    readonly name:
      | "pathPaymentStrictReceiveSuccess"
      | "pathPaymentStrictReceiveMalformed"
      | "pathPaymentStrictReceiveUnderfunded"
      | "pathPaymentStrictReceiveSrcNoTrust"
      | "pathPaymentStrictReceiveSrcNotAuthorized"
      | "pathPaymentStrictReceiveNoDestination"
      | "pathPaymentStrictReceiveNoTrust"
      | "pathPaymentStrictReceiveNotAuthorized"
      | "pathPaymentStrictReceiveLineFull"
      | "pathPaymentStrictReceiveNoIssuer"
      | "pathPaymentStrictReceiveTooFewOffers"
      | "pathPaymentStrictReceiveOfferCrossSelf"
      | "pathPaymentStrictReceiveOverSendmax";

    readonly value:
      | 0
      | -1
      | -2
      | -3
      | -4
      | -5
      | -6
      | -7
      | -8
      | -9
      | -10
      | -11
      | -12;

    static pathPaymentStrictReceiveSuccess(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveMalformed(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveUnderfunded(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveSrcNoTrust(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveSrcNotAuthorized(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveNoDestination(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveNoTrust(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveNotAuthorized(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveLineFull(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveNoIssuer(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveTooFewOffers(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveOfferCrossSelf(): PathPaymentStrictReceiveResultCode;

    static pathPaymentStrictReceiveOverSendmax(): PathPaymentStrictReceiveResultCode;
  }

  class PathPaymentStrictSendResultCode {
    readonly name:
      | "pathPaymentStrictSendSuccess"
      | "pathPaymentStrictSendMalformed"
      | "pathPaymentStrictSendUnderfunded"
      | "pathPaymentStrictSendSrcNoTrust"
      | "pathPaymentStrictSendSrcNotAuthorized"
      | "pathPaymentStrictSendNoDestination"
      | "pathPaymentStrictSendNoTrust"
      | "pathPaymentStrictSendNotAuthorized"
      | "pathPaymentStrictSendLineFull"
      | "pathPaymentStrictSendNoIssuer"
      | "pathPaymentStrictSendTooFewOffers"
      | "pathPaymentStrictSendOfferCrossSelf"
      | "pathPaymentStrictSendUnderDestmin";

    readonly value:
      | 0
      | -1
      | -2
      | -3
      | -4
      | -5
      | -6
      | -7
      | -8
      | -9
      | -10
      | -11
      | -12;

    static pathPaymentStrictSendSuccess(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendMalformed(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendUnderfunded(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendSrcNoTrust(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendSrcNotAuthorized(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendNoDestination(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendNoTrust(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendNotAuthorized(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendLineFull(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendNoIssuer(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendTooFewOffers(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendOfferCrossSelf(): PathPaymentStrictSendResultCode;

    static pathPaymentStrictSendUnderDestmin(): PathPaymentStrictSendResultCode;
  }

  class ManageSellOfferResultCode {
    readonly name:
      | "manageSellOfferSuccess"
      | "manageSellOfferMalformed"
      | "manageSellOfferSellNoTrust"
      | "manageSellOfferBuyNoTrust"
      | "manageSellOfferSellNotAuthorized"
      | "manageSellOfferBuyNotAuthorized"
      | "manageSellOfferLineFull"
      | "manageSellOfferUnderfunded"
      | "manageSellOfferCrossSelf"
      | "manageSellOfferSellNoIssuer"
      | "manageSellOfferBuyNoIssuer"
      | "manageSellOfferNotFound"
      | "manageSellOfferLowReserve";

    readonly value:
      | 0
      | -1
      | -2
      | -3
      | -4
      | -5
      | -6
      | -7
      | -8
      | -9
      | -10
      | -11
      | -12;

    static manageSellOfferSuccess(): ManageSellOfferResultCode;

    static manageSellOfferMalformed(): ManageSellOfferResultCode;

    static manageSellOfferSellNoTrust(): ManageSellOfferResultCode;

    static manageSellOfferBuyNoTrust(): ManageSellOfferResultCode;

    static manageSellOfferSellNotAuthorized(): ManageSellOfferResultCode;

    static manageSellOfferBuyNotAuthorized(): ManageSellOfferResultCode;

    static manageSellOfferLineFull(): ManageSellOfferResultCode;

    static manageSellOfferUnderfunded(): ManageSellOfferResultCode;

    static manageSellOfferCrossSelf(): ManageSellOfferResultCode;

    static manageSellOfferSellNoIssuer(): ManageSellOfferResultCode;

    static manageSellOfferBuyNoIssuer(): ManageSellOfferResultCode;

    static manageSellOfferNotFound(): ManageSellOfferResultCode;

    static manageSellOfferLowReserve(): ManageSellOfferResultCode;
  }

  class ManageOfferEffect {
    readonly name:
      | "manageOfferCreated"
      | "manageOfferUpdated"
      | "manageOfferDeleted";

    readonly value: 0 | 1 | 2;

    static manageOfferCreated(): ManageOfferEffect;

    static manageOfferUpdated(): ManageOfferEffect;

    static manageOfferDeleted(): ManageOfferEffect;
  }

  class ManageBuyOfferResultCode {
    readonly name:
      | "manageBuyOfferSuccess"
      | "manageBuyOfferMalformed"
      | "manageBuyOfferSellNoTrust"
      | "manageBuyOfferBuyNoTrust"
      | "manageBuyOfferSellNotAuthorized"
      | "manageBuyOfferBuyNotAuthorized"
      | "manageBuyOfferLineFull"
      | "manageBuyOfferUnderfunded"
      | "manageBuyOfferCrossSelf"
      | "manageBuyOfferSellNoIssuer"
      | "manageBuyOfferBuyNoIssuer"
      | "manageBuyOfferNotFound"
      | "manageBuyOfferLowReserve";

    readonly value:
      | 0
      | -1
      | -2
      | -3
      | -4
      | -5
      | -6
      | -7
      | -8
      | -9
      | -10
      | -11
      | -12;

    static manageBuyOfferSuccess(): ManageBuyOfferResultCode;

    static manageBuyOfferMalformed(): ManageBuyOfferResultCode;

    static manageBuyOfferSellNoTrust(): ManageBuyOfferResultCode;

    static manageBuyOfferBuyNoTrust(): ManageBuyOfferResultCode;

    static manageBuyOfferSellNotAuthorized(): ManageBuyOfferResultCode;

    static manageBuyOfferBuyNotAuthorized(): ManageBuyOfferResultCode;

    static manageBuyOfferLineFull(): ManageBuyOfferResultCode;

    static manageBuyOfferUnderfunded(): ManageBuyOfferResultCode;

    static manageBuyOfferCrossSelf(): ManageBuyOfferResultCode;

    static manageBuyOfferSellNoIssuer(): ManageBuyOfferResultCode;

    static manageBuyOfferBuyNoIssuer(): ManageBuyOfferResultCode;

    static manageBuyOfferNotFound(): ManageBuyOfferResultCode;

    static manageBuyOfferLowReserve(): ManageBuyOfferResultCode;
  }

  class SetOptionsResultCode {
    readonly name:
      | "setOptionsSuccess"
      | "setOptionsLowReserve"
      | "setOptionsTooManySigners"
      | "setOptionsBadFlags"
      | "setOptionsInvalidInflation"
      | "setOptionsCantChange"
      | "setOptionsUnknownFlag"
      | "setOptionsThresholdOutOfRange"
      | "setOptionsBadSigner"
      | "setOptionsInvalidHomeDomain"
      | "setOptionsAuthRevocableRequired";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8 | -9 | -10;

    static setOptionsSuccess(): SetOptionsResultCode;

    static setOptionsLowReserve(): SetOptionsResultCode;

    static setOptionsTooManySigners(): SetOptionsResultCode;

    static setOptionsBadFlags(): SetOptionsResultCode;

    static setOptionsInvalidInflation(): SetOptionsResultCode;

    static setOptionsCantChange(): SetOptionsResultCode;

    static setOptionsUnknownFlag(): SetOptionsResultCode;

    static setOptionsThresholdOutOfRange(): SetOptionsResultCode;

    static setOptionsBadSigner(): SetOptionsResultCode;

    static setOptionsInvalidHomeDomain(): SetOptionsResultCode;

    static setOptionsAuthRevocableRequired(): SetOptionsResultCode;
  }

  class ChangeTrustResultCode {
    readonly name:
      | "changeTrustSuccess"
      | "changeTrustMalformed"
      | "changeTrustNoIssuer"
      | "changeTrustInvalidLimit"
      | "changeTrustLowReserve"
      | "changeTrustSelfNotAllowed"
      | "changeTrustTrustLineMissing"
      | "changeTrustCannotDelete"
      | "changeTrustNotAuthMaintainLiabilities";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8;

    static changeTrustSuccess(): ChangeTrustResultCode;

    static changeTrustMalformed(): ChangeTrustResultCode;

    static changeTrustNoIssuer(): ChangeTrustResultCode;

    static changeTrustInvalidLimit(): ChangeTrustResultCode;

    static changeTrustLowReserve(): ChangeTrustResultCode;

    static changeTrustSelfNotAllowed(): ChangeTrustResultCode;

    static changeTrustTrustLineMissing(): ChangeTrustResultCode;

    static changeTrustCannotDelete(): ChangeTrustResultCode;

    static changeTrustNotAuthMaintainLiabilities(): ChangeTrustResultCode;
  }

  class AllowTrustResultCode {
    readonly name:
      | "allowTrustSuccess"
      | "allowTrustMalformed"
      | "allowTrustNoTrustLine"
      | "allowTrustTrustNotRequired"
      | "allowTrustCantRevoke"
      | "allowTrustSelfNotAllowed"
      | "allowTrustLowReserve";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5 | -6;

    static allowTrustSuccess(): AllowTrustResultCode;

    static allowTrustMalformed(): AllowTrustResultCode;

    static allowTrustNoTrustLine(): AllowTrustResultCode;

    static allowTrustTrustNotRequired(): AllowTrustResultCode;

    static allowTrustCantRevoke(): AllowTrustResultCode;

    static allowTrustSelfNotAllowed(): AllowTrustResultCode;

    static allowTrustLowReserve(): AllowTrustResultCode;
  }

  class AccountMergeResultCode {
    readonly name:
      | "accountMergeSuccess"
      | "accountMergeMalformed"
      | "accountMergeNoAccount"
      | "accountMergeImmutableSet"
      | "accountMergeHasSubEntries"
      | "accountMergeSeqnumTooFar"
      | "accountMergeDestFull"
      | "accountMergeIsSponsor";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5 | -6 | -7;

    static accountMergeSuccess(): AccountMergeResultCode;

    static accountMergeMalformed(): AccountMergeResultCode;

    static accountMergeNoAccount(): AccountMergeResultCode;

    static accountMergeImmutableSet(): AccountMergeResultCode;

    static accountMergeHasSubEntries(): AccountMergeResultCode;

    static accountMergeSeqnumTooFar(): AccountMergeResultCode;

    static accountMergeDestFull(): AccountMergeResultCode;

    static accountMergeIsSponsor(): AccountMergeResultCode;
  }

  class InflationResultCode {
    readonly name: "inflationSuccess" | "inflationNotTime";

    readonly value: 0 | -1;

    static inflationSuccess(): InflationResultCode;

    static inflationNotTime(): InflationResultCode;
  }

  class ManageDataResultCode {
    readonly name:
      | "manageDataSuccess"
      | "manageDataNotSupportedYet"
      | "manageDataNameNotFound"
      | "manageDataLowReserve"
      | "manageDataInvalidName";

    readonly value: 0 | -1 | -2 | -3 | -4;

    static manageDataSuccess(): ManageDataResultCode;

    static manageDataNotSupportedYet(): ManageDataResultCode;

    static manageDataNameNotFound(): ManageDataResultCode;

    static manageDataLowReserve(): ManageDataResultCode;

    static manageDataInvalidName(): ManageDataResultCode;
  }

  class BumpSequenceResultCode {
    readonly name: "bumpSequenceSuccess" | "bumpSequenceBadSeq";

    readonly value: 0 | -1;

    static bumpSequenceSuccess(): BumpSequenceResultCode;

    static bumpSequenceBadSeq(): BumpSequenceResultCode;
  }

  class CreateClaimableBalanceResultCode {
    readonly name:
      | "createClaimableBalanceSuccess"
      | "createClaimableBalanceMalformed"
      | "createClaimableBalanceLowReserve"
      | "createClaimableBalanceNoTrust"
      | "createClaimableBalanceNotAuthorized"
      | "createClaimableBalanceUnderfunded";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5;

    static createClaimableBalanceSuccess(): CreateClaimableBalanceResultCode;

    static createClaimableBalanceMalformed(): CreateClaimableBalanceResultCode;

    static createClaimableBalanceLowReserve(): CreateClaimableBalanceResultCode;

    static createClaimableBalanceNoTrust(): CreateClaimableBalanceResultCode;

    static createClaimableBalanceNotAuthorized(): CreateClaimableBalanceResultCode;

    static createClaimableBalanceUnderfunded(): CreateClaimableBalanceResultCode;
  }

  class ClaimClaimableBalanceResultCode {
    readonly name:
      | "claimClaimableBalanceSuccess"
      | "claimClaimableBalanceDoesNotExist"
      | "claimClaimableBalanceCannotClaim"
      | "claimClaimableBalanceLineFull"
      | "claimClaimableBalanceNoTrust"
      | "claimClaimableBalanceNotAuthorized";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5;

    static claimClaimableBalanceSuccess(): ClaimClaimableBalanceResultCode;

    static claimClaimableBalanceDoesNotExist(): ClaimClaimableBalanceResultCode;

    static claimClaimableBalanceCannotClaim(): ClaimClaimableBalanceResultCode;

    static claimClaimableBalanceLineFull(): ClaimClaimableBalanceResultCode;

    static claimClaimableBalanceNoTrust(): ClaimClaimableBalanceResultCode;

    static claimClaimableBalanceNotAuthorized(): ClaimClaimableBalanceResultCode;
  }

  class BeginSponsoringFutureReservesResultCode {
    readonly name:
      | "beginSponsoringFutureReservesSuccess"
      | "beginSponsoringFutureReservesMalformed"
      | "beginSponsoringFutureReservesAlreadySponsored"
      | "beginSponsoringFutureReservesRecursive";

    readonly value: 0 | -1 | -2 | -3;

    static beginSponsoringFutureReservesSuccess(): BeginSponsoringFutureReservesResultCode;

    static beginSponsoringFutureReservesMalformed(): BeginSponsoringFutureReservesResultCode;

    static beginSponsoringFutureReservesAlreadySponsored(): BeginSponsoringFutureReservesResultCode;

    static beginSponsoringFutureReservesRecursive(): BeginSponsoringFutureReservesResultCode;
  }

  class EndSponsoringFutureReservesResultCode {
    readonly name:
      | "endSponsoringFutureReservesSuccess"
      | "endSponsoringFutureReservesNotSponsored";

    readonly value: 0 | -1;

    static endSponsoringFutureReservesSuccess(): EndSponsoringFutureReservesResultCode;

    static endSponsoringFutureReservesNotSponsored(): EndSponsoringFutureReservesResultCode;
  }

  class RevokeSponsorshipResultCode {
    readonly name:
      | "revokeSponsorshipSuccess"
      | "revokeSponsorshipDoesNotExist"
      | "revokeSponsorshipNotSponsor"
      | "revokeSponsorshipLowReserve"
      | "revokeSponsorshipOnlyTransferable"
      | "revokeSponsorshipMalformed";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5;

    static revokeSponsorshipSuccess(): RevokeSponsorshipResultCode;

    static revokeSponsorshipDoesNotExist(): RevokeSponsorshipResultCode;

    static revokeSponsorshipNotSponsor(): RevokeSponsorshipResultCode;

    static revokeSponsorshipLowReserve(): RevokeSponsorshipResultCode;

    static revokeSponsorshipOnlyTransferable(): RevokeSponsorshipResultCode;

    static revokeSponsorshipMalformed(): RevokeSponsorshipResultCode;
  }

  class ClawbackResultCode {
    readonly name:
      | "clawbackSuccess"
      | "clawbackMalformed"
      | "clawbackNotClawbackEnabled"
      | "clawbackNoTrust"
      | "clawbackUnderfunded";

    readonly value: 0 | -1 | -2 | -3 | -4;

    static clawbackSuccess(): ClawbackResultCode;

    static clawbackMalformed(): ClawbackResultCode;

    static clawbackNotClawbackEnabled(): ClawbackResultCode;

    static clawbackNoTrust(): ClawbackResultCode;

    static clawbackUnderfunded(): ClawbackResultCode;
  }

  class ClawbackClaimableBalanceResultCode {
    readonly name:
      | "clawbackClaimableBalanceSuccess"
      | "clawbackClaimableBalanceDoesNotExist"
      | "clawbackClaimableBalanceNotIssuer"
      | "clawbackClaimableBalanceNotClawbackEnabled";

    readonly value: 0 | -1 | -2 | -3;

    static clawbackClaimableBalanceSuccess(): ClawbackClaimableBalanceResultCode;

    static clawbackClaimableBalanceDoesNotExist(): ClawbackClaimableBalanceResultCode;

    static clawbackClaimableBalanceNotIssuer(): ClawbackClaimableBalanceResultCode;

    static clawbackClaimableBalanceNotClawbackEnabled(): ClawbackClaimableBalanceResultCode;
  }

  class SetTrustLineFlagsResultCode {
    readonly name:
      | "setTrustLineFlagsSuccess"
      | "setTrustLineFlagsMalformed"
      | "setTrustLineFlagsNoTrustLine"
      | "setTrustLineFlagsCantRevoke"
      | "setTrustLineFlagsInvalidState"
      | "setTrustLineFlagsLowReserve";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5;

    static setTrustLineFlagsSuccess(): SetTrustLineFlagsResultCode;

    static setTrustLineFlagsMalformed(): SetTrustLineFlagsResultCode;

    static setTrustLineFlagsNoTrustLine(): SetTrustLineFlagsResultCode;

    static setTrustLineFlagsCantRevoke(): SetTrustLineFlagsResultCode;

    static setTrustLineFlagsInvalidState(): SetTrustLineFlagsResultCode;

    static setTrustLineFlagsLowReserve(): SetTrustLineFlagsResultCode;
  }

  class LiquidityPoolDepositResultCode {
    readonly name:
      | "liquidityPoolDepositSuccess"
      | "liquidityPoolDepositMalformed"
      | "liquidityPoolDepositNoTrust"
      | "liquidityPoolDepositNotAuthorized"
      | "liquidityPoolDepositUnderfunded"
      | "liquidityPoolDepositLineFull"
      | "liquidityPoolDepositBadPrice"
      | "liquidityPoolDepositPoolFull";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5 | -6 | -7;

    static liquidityPoolDepositSuccess(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositMalformed(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositNoTrust(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositNotAuthorized(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositUnderfunded(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositLineFull(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositBadPrice(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositPoolFull(): LiquidityPoolDepositResultCode;
  }

  class LiquidityPoolWithdrawResultCode {
    readonly name:
      | "liquidityPoolWithdrawSuccess"
      | "liquidityPoolWithdrawMalformed"
      | "liquidityPoolWithdrawNoTrust"
      | "liquidityPoolWithdrawUnderfunded"
      | "liquidityPoolWithdrawLineFull"
      | "liquidityPoolWithdrawUnderMinimum";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5;

    static liquidityPoolWithdrawSuccess(): LiquidityPoolWithdrawResultCode;

    static liquidityPoolWithdrawMalformed(): LiquidityPoolWithdrawResultCode;

    static liquidityPoolWithdrawNoTrust(): LiquidityPoolWithdrawResultCode;

    static liquidityPoolWithdrawUnderfunded(): LiquidityPoolWithdrawResultCode;

    static liquidityPoolWithdrawLineFull(): LiquidityPoolWithdrawResultCode;

    static liquidityPoolWithdrawUnderMinimum(): LiquidityPoolWithdrawResultCode;
  }

  class OperationResultCode {
    readonly name:
      | "opInner"
      | "opBadAuth"
      | "opNoAccount"
      | "opNotSupported"
      | "opTooManySubentries"
      | "opExceededWorkLimit"
      | "opTooManySponsoring";

    readonly value: 0 | -1 | -2 | -3 | -4 | -5 | -6;

    static opInner(): OperationResultCode;

    static opBadAuth(): OperationResultCode;

    static opNoAccount(): OperationResultCode;

    static opNotSupported(): OperationResultCode;

    static opTooManySubentries(): OperationResultCode;

    static opExceededWorkLimit(): OperationResultCode;

    static opTooManySponsoring(): OperationResultCode;
  }

  class TransactionResultCode {
    readonly name:
      | "txFeeBumpInnerSuccess"
      | "txSuccess"
      | "txFailed"
      | "txTooEarly"
      | "txTooLate"
      | "txMissingOperation"
      | "txBadSeq"
      | "txBadAuth"
      | "txInsufficientBalance"
      | "txNoAccount"
      | "txInsufficientFee"
      | "txBadAuthExtra"
      | "txInternalError"
      | "txNotSupported"
      | "txFeeBumpInnerFailed"
      | "txBadSponsorship"
      | "txBadMinSeqAgeOrGap"
      | "txMalformed";

    readonly value:
      | 1
      | 0
      | -1
      | -2
      | -3
      | -4
      | -5
      | -6
      | -7
      | -8
      | -9
      | -10
      | -11
      | -12
      | -13
      | -14
      | -15
      | -16;

    static txFeeBumpInnerSuccess(): TransactionResultCode;

    static txSuccess(): TransactionResultCode;

    static txFailed(): TransactionResultCode;

    static txTooEarly(): TransactionResultCode;

    static txTooLate(): TransactionResultCode;

    static txMissingOperation(): TransactionResultCode;

    static txBadSeq(): TransactionResultCode;

    static txBadAuth(): TransactionResultCode;

    static txInsufficientBalance(): TransactionResultCode;

    static txNoAccount(): TransactionResultCode;

    static txInsufficientFee(): TransactionResultCode;

    static txBadAuthExtra(): TransactionResultCode;

    static txInternalError(): TransactionResultCode;

    static txNotSupported(): TransactionResultCode;

    static txFeeBumpInnerFailed(): TransactionResultCode;

    static txBadSponsorship(): TransactionResultCode;

    static txBadMinSeqAgeOrGap(): TransactionResultCode;

    static txMalformed(): TransactionResultCode;
  }

  class CryptoKeyType {
    readonly name:
      | "keyTypeEd25519"
      | "keyTypePreAuthTx"
      | "keyTypeHashX"
      | "keyTypeEd25519SignedPayload"
      | "keyTypeMuxedEd25519";

    readonly value: 0 | 1 | 2 | 3 | 256;

    static keyTypeEd25519(): CryptoKeyType;

    static keyTypePreAuthTx(): CryptoKeyType;

    static keyTypeHashX(): CryptoKeyType;

    static keyTypeEd25519SignedPayload(): CryptoKeyType;

    static keyTypeMuxedEd25519(): CryptoKeyType;
  }

  class PublicKeyType {
    readonly name: "publicKeyTypeEd25519";

    readonly value: 0;

    static publicKeyTypeEd25519(): PublicKeyType;
  }

  class SignerKeyType {
    readonly name:
      | "signerKeyTypeEd25519"
      | "signerKeyTypePreAuthTx"
      | "signerKeyTypeHashX"
      | "signerKeyTypeEd25519SignedPayload";

    readonly value: 0 | 1 | 2 | 3;

    static signerKeyTypeEd25519(): SignerKeyType;

    static signerKeyTypePreAuthTx(): SignerKeyType;

    static signerKeyTypeHashX(): SignerKeyType;

    static signerKeyTypeEd25519SignedPayload(): SignerKeyType;
  }

  const Value: VarOpaque;

  type AccountId = PublicKey;

  const Thresholds: Opaque;

  const String32: XDRString;

  const String64: XDRString;

  type SequenceNumber = Int64;

  type TimePoint = Uint64;

  type Duration = Uint64;

  const DataValue: VarOpaque;

  type Hash = Opaque[];

  type PoolId = Hash;

  const AssetCode4: Opaque;

  const AssetCode12: Opaque;

  type SponsorshipDescriptor = undefined | AccountId;

  const UpgradeType: VarOpaque;

  const LedgerEntryChanges: XDRArray<LedgerEntryChange>;

  const EncryptedBody: VarOpaque;

  const PeerStatList: XDRArray<PeerStats>;

  const TxAdvertVector: XDRArray<Hash>;

  const TxDemandVector: XDRArray<Hash>;

  const Hash: Opaque;

  const Uint256: Opaque;

  const Uint32: UnsignedInt;

  const Int32: SignedInt;

  class Uint64 extends UnsignedHyper {}

  class Int64 extends Hyper {}

  const Signature: VarOpaque;

  const SignatureHint: Opaque;

  type NodeId = PublicKey;

  class ScpBallot {
    constructor(attributes: { counter: number; value: BrowserBuffer });

    counter(value?: number): number;

    value(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpBallot;

    static write(value: ScpBallot, io: BrowserBuffer): void;

    static isValid(value: ScpBallot): boolean;

    static toXDR(value: ScpBallot): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpBallot;

    static fromXDR(input: string, format: "hex" | "base64"): ScpBallot;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpNomination {
    constructor(attributes: {
      quorumSetHash: BrowserBuffer;
      votes: BrowserBuffer[];
      accepted: BrowserBuffer[];
    });

    quorumSetHash(value?: BrowserBuffer): BrowserBuffer;

    votes(value?: BrowserBuffer[]): BrowserBuffer[];

    accepted(value?: BrowserBuffer[]): BrowserBuffer[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpNomination;

    static write(value: ScpNomination, io: BrowserBuffer): void;

    static isValid(value: ScpNomination): boolean;

    static toXDR(value: ScpNomination): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpNomination;

    static fromXDR(input: string, format: "hex" | "base64"): ScpNomination;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpStatementPrepare {
    constructor(attributes: {
      quorumSetHash: BrowserBuffer;
      ballot: ScpBallot;
      prepared: null | ScpBallot;
      preparedPrime: null | ScpBallot;
      nC: number;
      nH: number;
    });

    quorumSetHash(value?: BrowserBuffer): BrowserBuffer;

    ballot(value?: ScpBallot): ScpBallot;

    prepared(value?: null | ScpBallot): null | ScpBallot;

    preparedPrime(value?: null | ScpBallot): null | ScpBallot;

    nC(value?: number): number;

    nH(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpStatementPrepare;

    static write(value: ScpStatementPrepare, io: BrowserBuffer): void;

    static isValid(value: ScpStatementPrepare): boolean;

    static toXDR(value: ScpStatementPrepare): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpStatementPrepare;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ScpStatementPrepare;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpStatementConfirm {
    constructor(attributes: {
      ballot: ScpBallot;
      nPrepared: number;
      nCommit: number;
      nH: number;
      quorumSetHash: BrowserBuffer;
    });

    ballot(value?: ScpBallot): ScpBallot;

    nPrepared(value?: number): number;

    nCommit(value?: number): number;

    nH(value?: number): number;

    quorumSetHash(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpStatementConfirm;

    static write(value: ScpStatementConfirm, io: BrowserBuffer): void;

    static isValid(value: ScpStatementConfirm): boolean;

    static toXDR(value: ScpStatementConfirm): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpStatementConfirm;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ScpStatementConfirm;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpStatementExternalize {
    constructor(attributes: {
      commit: ScpBallot;
      nH: number;
      commitQuorumSetHash: BrowserBuffer;
    });

    commit(value?: ScpBallot): ScpBallot;

    nH(value?: number): number;

    commitQuorumSetHash(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpStatementExternalize;

    static write(value: ScpStatementExternalize, io: BrowserBuffer): void;

    static isValid(value: ScpStatementExternalize): boolean;

    static toXDR(value: ScpStatementExternalize): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpStatementExternalize;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ScpStatementExternalize;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpStatement {
    constructor(attributes: {
      nodeId: NodeId;
      slotIndex: Uint64;
      pledges: ScpStatementPledges;
    });

    nodeId(value?: NodeId): NodeId;

    slotIndex(value?: Uint64): Uint64;

    pledges(value?: ScpStatementPledges): ScpStatementPledges;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpStatement;

    static write(value: ScpStatement, io: BrowserBuffer): void;

    static isValid(value: ScpStatement): boolean;

    static toXDR(value: ScpStatement): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpStatement;

    static fromXDR(input: string, format: "hex" | "base64"): ScpStatement;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpEnvelope {
    constructor(attributes: { statement: ScpStatement; signature: BrowserBuffer });

    statement(value?: ScpStatement): ScpStatement;

    signature(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpEnvelope;

    static write(value: ScpEnvelope, io: BrowserBuffer): void;

    static isValid(value: ScpEnvelope): boolean;

    static toXDR(value: ScpEnvelope): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpEnvelope;

    static fromXDR(input: string, format: "hex" | "base64"): ScpEnvelope;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpQuorumSet {
    constructor(attributes: {
      threshold: number;
      validators: NodeId[];
      innerSets: ScpQuorumSet[];
    });

    threshold(value?: number): number;

    validators(value?: NodeId[]): NodeId[];

    innerSets(value?: ScpQuorumSet[]): ScpQuorumSet[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpQuorumSet;

    static write(value: ScpQuorumSet, io: BrowserBuffer): void;

    static isValid(value: ScpQuorumSet): boolean;

    static toXDR(value: ScpQuorumSet): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpQuorumSet;

    static fromXDR(input: string, format: "hex" | "base64"): ScpQuorumSet;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AlphaNum4 {
    constructor(attributes: { assetCode: BrowserBuffer; issuer: AccountId });

    assetCode(value?: BrowserBuffer): BrowserBuffer;

    issuer(value?: AccountId): AccountId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AlphaNum4;

    static write(value: AlphaNum4, io: BrowserBuffer): void;

    static isValid(value: AlphaNum4): boolean;

    static toXDR(value: AlphaNum4): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AlphaNum4;

    static fromXDR(input: string, format: "hex" | "base64"): AlphaNum4;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AlphaNum12 {
    constructor(attributes: { assetCode: BrowserBuffer; issuer: AccountId });

    assetCode(value?: BrowserBuffer): BrowserBuffer;

    issuer(value?: AccountId): AccountId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AlphaNum12;

    static write(value: AlphaNum12, io: BrowserBuffer): void;

    static isValid(value: AlphaNum12): boolean;

    static toXDR(value: AlphaNum12): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AlphaNum12;

    static fromXDR(input: string, format: "hex" | "base64"): AlphaNum12;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Price {
    constructor(attributes: { n: number; d: number });

    n(value?: number): number;

    d(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Price;

    static write(value: Price, io: BrowserBuffer): void;

    static isValid(value: Price): boolean;

    static toXDR(value: Price): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Price;

    static fromXDR(input: string, format: "hex" | "base64"): Price;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Liabilities {
    constructor(attributes: { buying: Int64; selling: Int64 });

    buying(value?: Int64): Int64;

    selling(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Liabilities;

    static write(value: Liabilities, io: BrowserBuffer): void;

    static isValid(value: Liabilities): boolean;

    static toXDR(value: Liabilities): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Liabilities;

    static fromXDR(input: string, format: "hex" | "base64"): Liabilities;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Signer {
    constructor(attributes: { key: SignerKey; weight: number });

    key(value?: SignerKey): SignerKey;

    weight(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Signer;

    static write(value: Signer, io: BrowserBuffer): void;

    static isValid(value: Signer): boolean;

    static toXDR(value: Signer): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Signer;

    static fromXDR(input: string, format: "hex" | "base64"): Signer;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountEntryExtensionV3 {
    constructor(attributes: {
      ext: ExtensionPoint;
      seqLedger: number;
      seqTime: TimePoint;
    });

    ext(value?: ExtensionPoint): ExtensionPoint;

    seqLedger(value?: number): number;

    seqTime(value?: TimePoint): TimePoint;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountEntryExtensionV3;

    static write(value: AccountEntryExtensionV3, io: BrowserBuffer): void;

    static isValid(value: AccountEntryExtensionV3): boolean;

    static toXDR(value: AccountEntryExtensionV3): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountEntryExtensionV3;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): AccountEntryExtensionV3;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountEntryExtensionV2 {
    constructor(attributes: {
      numSponsored: number;
      numSponsoring: number;
      signerSponsoringIDs: SponsorshipDescriptor[];
      ext: AccountEntryExtensionV2Ext;
    });

    numSponsored(value?: number): number;

    numSponsoring(value?: number): number;

    signerSponsoringIDs(
      value?: SponsorshipDescriptor[]
    ): SponsorshipDescriptor[];

    ext(value?: AccountEntryExtensionV2Ext): AccountEntryExtensionV2Ext;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountEntryExtensionV2;

    static write(value: AccountEntryExtensionV2, io: BrowserBuffer): void;

    static isValid(value: AccountEntryExtensionV2): boolean;

    static toXDR(value: AccountEntryExtensionV2): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountEntryExtensionV2;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): AccountEntryExtensionV2;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountEntryExtensionV1 {
    constructor(attributes: {
      liabilities: Liabilities;
      ext: AccountEntryExtensionV1Ext;
    });

    liabilities(value?: Liabilities): Liabilities;

    ext(value?: AccountEntryExtensionV1Ext): AccountEntryExtensionV1Ext;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountEntryExtensionV1;

    static write(value: AccountEntryExtensionV1, io: BrowserBuffer): void;

    static isValid(value: AccountEntryExtensionV1): boolean;

    static toXDR(value: AccountEntryExtensionV1): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountEntryExtensionV1;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): AccountEntryExtensionV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountEntry {
    constructor(attributes: {
      accountId: AccountId;
      balance: Int64;
      seqNum: SequenceNumber;
      numSubEntries: number;
      inflationDest: null | AccountId;
      flags: number;
      homeDomain: string | BrowserBuffer;
      thresholds: BrowserBuffer;
      signers: Signer[];
      ext: AccountEntryExt;
    });

    accountId(value?: AccountId): AccountId;

    balance(value?: Int64): Int64;

    seqNum(value?: SequenceNumber): SequenceNumber;

    numSubEntries(value?: number): number;

    inflationDest(value?: null | AccountId): null | AccountId;

    flags(value?: number): number;

    homeDomain(value?: string | BrowserBuffer): string | BrowserBuffer;

    thresholds(value?: BrowserBuffer): BrowserBuffer;

    signers(value?: Signer[]): Signer[];

    ext(value?: AccountEntryExt): AccountEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountEntry;

    static write(value: AccountEntry, io: BrowserBuffer): void;

    static isValid(value: AccountEntry): boolean;

    static toXDR(value: AccountEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountEntry;

    static fromXDR(input: string, format: "hex" | "base64"): AccountEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TrustLineEntryExtensionV2 {
    constructor(attributes: {
      liquidityPoolUseCount: number;
      ext: TrustLineEntryExtensionV2Ext;
    });

    liquidityPoolUseCount(value?: number): number;

    ext(value?: TrustLineEntryExtensionV2Ext): TrustLineEntryExtensionV2Ext;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TrustLineEntryExtensionV2;

    static write(value: TrustLineEntryExtensionV2, io: BrowserBuffer): void;

    static isValid(value: TrustLineEntryExtensionV2): boolean;

    static toXDR(value: TrustLineEntryExtensionV2): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TrustLineEntryExtensionV2;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TrustLineEntryExtensionV2;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TrustLineEntryV1 {
    constructor(attributes: {
      liabilities: Liabilities;
      ext: TrustLineEntryV1Ext;
    });

    liabilities(value?: Liabilities): Liabilities;

    ext(value?: TrustLineEntryV1Ext): TrustLineEntryV1Ext;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TrustLineEntryV1;

    static write(value: TrustLineEntryV1, io: BrowserBuffer): void;

    static isValid(value: TrustLineEntryV1): boolean;

    static toXDR(value: TrustLineEntryV1): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TrustLineEntryV1;

    static fromXDR(input: string, format: "hex" | "base64"): TrustLineEntryV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TrustLineEntry {
    constructor(attributes: {
      accountId: AccountId;
      asset: TrustLineAsset;
      balance: Int64;
      limit: Int64;
      flags: number;
      ext: TrustLineEntryExt;
    });

    accountId(value?: AccountId): AccountId;

    asset(value?: TrustLineAsset): TrustLineAsset;

    balance(value?: Int64): Int64;

    limit(value?: Int64): Int64;

    flags(value?: number): number;

    ext(value?: TrustLineEntryExt): TrustLineEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TrustLineEntry;

    static write(value: TrustLineEntry, io: BrowserBuffer): void;

    static isValid(value: TrustLineEntry): boolean;

    static toXDR(value: TrustLineEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TrustLineEntry;

    static fromXDR(input: string, format: "hex" | "base64"): TrustLineEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class OfferEntry {
    constructor(attributes: {
      sellerId: AccountId;
      offerId: Int64;
      selling: Asset;
      buying: Asset;
      amount: Int64;
      price: Price;
      flags: number;
      ext: OfferEntryExt;
    });

    sellerId(value?: AccountId): AccountId;

    offerId(value?: Int64): Int64;

    selling(value?: Asset): Asset;

    buying(value?: Asset): Asset;

    amount(value?: Int64): Int64;

    price(value?: Price): Price;

    flags(value?: number): number;

    ext(value?: OfferEntryExt): OfferEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): OfferEntry;

    static write(value: OfferEntry, io: BrowserBuffer): void;

    static isValid(value: OfferEntry): boolean;

    static toXDR(value: OfferEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): OfferEntry;

    static fromXDR(input: string, format: "hex" | "base64"): OfferEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class DataEntry {
    constructor(attributes: {
      accountId: AccountId;
      dataName: string | BrowserBuffer;
      dataValue: BrowserBuffer;
      ext: DataEntryExt;
    });

    accountId(value?: AccountId): AccountId;

    dataName(value?: string | BrowserBuffer): string | BrowserBuffer;

    dataValue(value?: BrowserBuffer): BrowserBuffer;

    ext(value?: DataEntryExt): DataEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): DataEntry;

    static write(value: DataEntry, io: BrowserBuffer): void;

    static isValid(value: DataEntry): boolean;

    static toXDR(value: DataEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): DataEntry;

    static fromXDR(input: string, format: "hex" | "base64"): DataEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimantV0 {
    constructor(attributes: {
      destination: AccountId;
      predicate: ClaimPredicate;
    });

    destination(value?: AccountId): AccountId;

    predicate(value?: ClaimPredicate): ClaimPredicate;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimantV0;

    static write(value: ClaimantV0, io: BrowserBuffer): void;

    static isValid(value: ClaimantV0): boolean;

    static toXDR(value: ClaimantV0): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimantV0;

    static fromXDR(input: string, format: "hex" | "base64"): ClaimantV0;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimableBalanceEntryExtensionV1 {
    constructor(attributes: {
      ext: ClaimableBalanceEntryExtensionV1Ext;
      flags: number;
    });

    ext(
      value?: ClaimableBalanceEntryExtensionV1Ext
    ): ClaimableBalanceEntryExtensionV1Ext;

    flags(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimableBalanceEntryExtensionV1;

    static write(value: ClaimableBalanceEntryExtensionV1, io: BrowserBuffer): void;

    static isValid(value: ClaimableBalanceEntryExtensionV1): boolean;

    static toXDR(value: ClaimableBalanceEntryExtensionV1): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): ClaimableBalanceEntryExtensionV1;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClaimableBalanceEntryExtensionV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimableBalanceEntry {
    constructor(attributes: {
      balanceId: ClaimableBalanceId;
      claimants: Claimant[];
      asset: Asset;
      amount: Int64;
      ext: ClaimableBalanceEntryExt;
    });

    balanceId(value?: ClaimableBalanceId): ClaimableBalanceId;

    claimants(value?: Claimant[]): Claimant[];

    asset(value?: Asset): Asset;

    amount(value?: Int64): Int64;

    ext(value?: ClaimableBalanceEntryExt): ClaimableBalanceEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimableBalanceEntry;

    static write(value: ClaimableBalanceEntry, io: BrowserBuffer): void;

    static isValid(value: ClaimableBalanceEntry): boolean;

    static toXDR(value: ClaimableBalanceEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimableBalanceEntry;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClaimableBalanceEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolConstantProductParameters {
    constructor(attributes: { assetA: Asset; assetB: Asset; fee: number });

    assetA(value?: Asset): Asset;

    assetB(value?: Asset): Asset;

    fee(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolConstantProductParameters;

    static write(
      value: LiquidityPoolConstantProductParameters,
      io: BrowserBuffer
    ): void;

    static isValid(value: LiquidityPoolConstantProductParameters): boolean;

    static toXDR(value: LiquidityPoolConstantProductParameters): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): LiquidityPoolConstantProductParameters;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolConstantProductParameters;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolEntryConstantProduct {
    constructor(attributes: {
      params: LiquidityPoolConstantProductParameters;
      reserveA: Int64;
      reserveB: Int64;
      totalPoolShares: Int64;
      poolSharesTrustLineCount: Int64;
    });

    params(
      value?: LiquidityPoolConstantProductParameters
    ): LiquidityPoolConstantProductParameters;

    reserveA(value?: Int64): Int64;

    reserveB(value?: Int64): Int64;

    totalPoolShares(value?: Int64): Int64;

    poolSharesTrustLineCount(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolEntryConstantProduct;

    static write(value: LiquidityPoolEntryConstantProduct, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolEntryConstantProduct): boolean;

    static toXDR(value: LiquidityPoolEntryConstantProduct): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): LiquidityPoolEntryConstantProduct;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolEntryConstantProduct;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolEntry {
    constructor(attributes: {
      liquidityPoolId: PoolId;
      body: LiquidityPoolEntryBody;
    });

    liquidityPoolId(value?: PoolId): PoolId;

    body(value?: LiquidityPoolEntryBody): LiquidityPoolEntryBody;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolEntry;

    static write(value: LiquidityPoolEntry, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolEntry): boolean;

    static toXDR(value: LiquidityPoolEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LiquidityPoolEntry;

    static fromXDR(input: string, format: "hex" | "base64"): LiquidityPoolEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerEntryExtensionV1 {
    constructor(attributes: {
      sponsoringId: SponsorshipDescriptor;
      ext: LedgerEntryExtensionV1Ext;
    });

    sponsoringId(value?: SponsorshipDescriptor): SponsorshipDescriptor;

    ext(value?: LedgerEntryExtensionV1Ext): LedgerEntryExtensionV1Ext;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerEntryExtensionV1;

    static write(value: LedgerEntryExtensionV1, io: BrowserBuffer): void;

    static isValid(value: LedgerEntryExtensionV1): boolean;

    static toXDR(value: LedgerEntryExtensionV1): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerEntryExtensionV1;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerEntryExtensionV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerEntry {
    constructor(attributes: {
      lastModifiedLedgerSeq: number;
      data: LedgerEntryData;
      ext: LedgerEntryExt;
    });

    lastModifiedLedgerSeq(value?: number): number;

    data(value?: LedgerEntryData): LedgerEntryData;

    ext(value?: LedgerEntryExt): LedgerEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerEntry;

    static write(value: LedgerEntry, io: BrowserBuffer): void;

    static isValid(value: LedgerEntry): boolean;

    static toXDR(value: LedgerEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerEntry;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerKeyAccount {
    constructor(attributes: { accountId: AccountId });

    accountId(value?: AccountId): AccountId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerKeyAccount;

    static write(value: LedgerKeyAccount, io: BrowserBuffer): void;

    static isValid(value: LedgerKeyAccount): boolean;

    static toXDR(value: LedgerKeyAccount): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerKeyAccount;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerKeyAccount;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerKeyTrustLine {
    constructor(attributes: { accountId: AccountId; asset: TrustLineAsset });

    accountId(value?: AccountId): AccountId;

    asset(value?: TrustLineAsset): TrustLineAsset;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerKeyTrustLine;

    static write(value: LedgerKeyTrustLine, io: BrowserBuffer): void;

    static isValid(value: LedgerKeyTrustLine): boolean;

    static toXDR(value: LedgerKeyTrustLine): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerKeyTrustLine;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerKeyTrustLine;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerKeyOffer {
    constructor(attributes: { sellerId: AccountId; offerId: Int64 });

    sellerId(value?: AccountId): AccountId;

    offerId(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerKeyOffer;

    static write(value: LedgerKeyOffer, io: BrowserBuffer): void;

    static isValid(value: LedgerKeyOffer): boolean;

    static toXDR(value: LedgerKeyOffer): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerKeyOffer;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerKeyOffer;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerKeyData {
    constructor(attributes: {
      accountId: AccountId;
      dataName: string | BrowserBuffer;
    });

    accountId(value?: AccountId): AccountId;

    dataName(value?: string | BrowserBuffer): string | BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerKeyData;

    static write(value: LedgerKeyData, io: BrowserBuffer): void;

    static isValid(value: LedgerKeyData): boolean;

    static toXDR(value: LedgerKeyData): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerKeyData;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerKeyData;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerKeyClaimableBalance {
    constructor(attributes: { balanceId: ClaimableBalanceId });

    balanceId(value?: ClaimableBalanceId): ClaimableBalanceId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerKeyClaimableBalance;

    static write(value: LedgerKeyClaimableBalance, io: BrowserBuffer): void;

    static isValid(value: LedgerKeyClaimableBalance): boolean;

    static toXDR(value: LedgerKeyClaimableBalance): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerKeyClaimableBalance;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerKeyClaimableBalance;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerKeyLiquidityPool {
    constructor(attributes: { liquidityPoolId: PoolId });

    liquidityPoolId(value?: PoolId): PoolId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerKeyLiquidityPool;

    static write(value: LedgerKeyLiquidityPool, io: BrowserBuffer): void;

    static isValid(value: LedgerKeyLiquidityPool): boolean;

    static toXDR(value: LedgerKeyLiquidityPool): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerKeyLiquidityPool;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerKeyLiquidityPool;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerCloseValueSignature {
    constructor(attributes: { nodeId: NodeId; signature: BrowserBuffer });

    nodeId(value?: NodeId): NodeId;

    signature(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerCloseValueSignature;

    static write(value: LedgerCloseValueSignature, io: BrowserBuffer): void;

    static isValid(value: LedgerCloseValueSignature): boolean;

    static toXDR(value: LedgerCloseValueSignature): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerCloseValueSignature;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerCloseValueSignature;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class StellarValue {
    constructor(attributes: {
      txSetHash: BrowserBuffer;
      closeTime: TimePoint;
      upgrades: BrowserBuffer[];
      ext: StellarValueExt;
    });

    txSetHash(value?: BrowserBuffer): BrowserBuffer;

    closeTime(value?: TimePoint): TimePoint;

    upgrades(value?: BrowserBuffer[]): BrowserBuffer[];

    ext(value?: StellarValueExt): StellarValueExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): StellarValue;

    static write(value: StellarValue, io: BrowserBuffer): void;

    static isValid(value: StellarValue): boolean;

    static toXDR(value: StellarValue): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): StellarValue;

    static fromXDR(input: string, format: "hex" | "base64"): StellarValue;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerHeaderExtensionV1 {
    constructor(attributes: { flags: number; ext: LedgerHeaderExtensionV1Ext });

    flags(value?: number): number;

    ext(value?: LedgerHeaderExtensionV1Ext): LedgerHeaderExtensionV1Ext;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerHeaderExtensionV1;

    static write(value: LedgerHeaderExtensionV1, io: BrowserBuffer): void;

    static isValid(value: LedgerHeaderExtensionV1): boolean;

    static toXDR(value: LedgerHeaderExtensionV1): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerHeaderExtensionV1;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerHeaderExtensionV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerHeader {
    constructor(attributes: {
      ledgerVersion: number;
      previousLedgerHash: BrowserBuffer;
      scpValue: StellarValue;
      txSetResultHash: BrowserBuffer;
      bucketListHash: BrowserBuffer;
      ledgerSeq: number;
      totalCoins: Int64;
      feePool: Int64;
      inflationSeq: number;
      idPool: Uint64;
      baseFee: number;
      baseReserve: number;
      maxTxSetSize: number;
      skipList: BrowserBuffer[];
      ext: LedgerHeaderExt;
    });

    ledgerVersion(value?: number): number;

    previousLedgerHash(value?: BrowserBuffer): BrowserBuffer;

    scpValue(value?: StellarValue): StellarValue;

    txSetResultHash(value?: BrowserBuffer): BrowserBuffer;

    bucketListHash(value?: BrowserBuffer): BrowserBuffer;

    ledgerSeq(value?: number): number;

    totalCoins(value?: Int64): Int64;

    feePool(value?: Int64): Int64;

    inflationSeq(value?: number): number;

    idPool(value?: Uint64): Uint64;

    baseFee(value?: number): number;

    baseReserve(value?: number): number;

    maxTxSetSize(value?: number): number;

    skipList(value?: BrowserBuffer[]): BrowserBuffer[];

    ext(value?: LedgerHeaderExt): LedgerHeaderExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerHeader;

    static write(value: LedgerHeader, io: BrowserBuffer): void;

    static isValid(value: LedgerHeader): boolean;

    static toXDR(value: LedgerHeader): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerHeader;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerHeader;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class BucketMetadata {
    constructor(attributes: { ledgerVersion: number; ext: BucketMetadataExt });

    ledgerVersion(value?: number): number;

    ext(value?: BucketMetadataExt): BucketMetadataExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): BucketMetadata;

    static write(value: BucketMetadata, io: BrowserBuffer): void;

    static isValid(value: BucketMetadata): boolean;

    static toXDR(value: BucketMetadata): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): BucketMetadata;

    static fromXDR(input: string, format: "hex" | "base64"): BucketMetadata;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TxSetComponentTxsMaybeDiscountedFee {
    constructor(attributes: {
      baseFee: null | Int64;
      txes: TransactionEnvelope[];
    });

    baseFee(value?: null | Int64): null | Int64;

    txes(value?: TransactionEnvelope[]): TransactionEnvelope[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TxSetComponentTxsMaybeDiscountedFee;

    static write(value: TxSetComponentTxsMaybeDiscountedFee, io: BrowserBuffer): void;

    static isValid(value: TxSetComponentTxsMaybeDiscountedFee): boolean;

    static toXDR(value: TxSetComponentTxsMaybeDiscountedFee): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): TxSetComponentTxsMaybeDiscountedFee;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TxSetComponentTxsMaybeDiscountedFee;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionSet {
    constructor(attributes: {
      previousLedgerHash: BrowserBuffer;
      txes: TransactionEnvelope[];
    });

    previousLedgerHash(value?: BrowserBuffer): BrowserBuffer;

    txes(value?: TransactionEnvelope[]): TransactionEnvelope[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionSet;

    static write(value: TransactionSet, io: BrowserBuffer): void;

    static isValid(value: TransactionSet): boolean;

    static toXDR(value: TransactionSet): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionSet;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionSet;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionSetV1 {
    constructor(attributes: {
      previousLedgerHash: BrowserBuffer;
      phases: TransactionPhase[];
    });

    previousLedgerHash(value?: BrowserBuffer): BrowserBuffer;

    phases(value?: TransactionPhase[]): TransactionPhase[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionSetV1;

    static write(value: TransactionSetV1, io: BrowserBuffer): void;

    static isValid(value: TransactionSetV1): boolean;

    static toXDR(value: TransactionSetV1): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionSetV1;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionSetV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionResultPair {
    constructor(attributes: {
      transactionHash: BrowserBuffer;
      result: TransactionResult;
    });

    transactionHash(value?: BrowserBuffer): BrowserBuffer;

    result(value?: TransactionResult): TransactionResult;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionResultPair;

    static write(value: TransactionResultPair, io: BrowserBuffer): void;

    static isValid(value: TransactionResultPair): boolean;

    static toXDR(value: TransactionResultPair): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionResultPair;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionResultPair;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionResultSet {
    constructor(attributes: { results: TransactionResultPair[] });

    results(value?: TransactionResultPair[]): TransactionResultPair[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionResultSet;

    static write(value: TransactionResultSet, io: BrowserBuffer): void;

    static isValid(value: TransactionResultSet): boolean;

    static toXDR(value: TransactionResultSet): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionResultSet;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionResultSet;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionHistoryEntry {
    constructor(attributes: {
      ledgerSeq: number;
      txSet: TransactionSet;
      ext: TransactionHistoryEntryExt;
    });

    ledgerSeq(value?: number): number;

    txSet(value?: TransactionSet): TransactionSet;

    ext(value?: TransactionHistoryEntryExt): TransactionHistoryEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionHistoryEntry;

    static write(value: TransactionHistoryEntry, io: BrowserBuffer): void;

    static isValid(value: TransactionHistoryEntry): boolean;

    static toXDR(value: TransactionHistoryEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionHistoryEntry;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionHistoryEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionHistoryResultEntry {
    constructor(attributes: {
      ledgerSeq: number;
      txResultSet: TransactionResultSet;
      ext: TransactionHistoryResultEntryExt;
    });

    ledgerSeq(value?: number): number;

    txResultSet(value?: TransactionResultSet): TransactionResultSet;

    ext(
      value?: TransactionHistoryResultEntryExt
    ): TransactionHistoryResultEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionHistoryResultEntry;

    static write(value: TransactionHistoryResultEntry, io: BrowserBuffer): void;

    static isValid(value: TransactionHistoryResultEntry): boolean;

    static toXDR(value: TransactionHistoryResultEntry): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): TransactionHistoryResultEntry;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionHistoryResultEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerHeaderHistoryEntry {
    constructor(attributes: {
      hash: BrowserBuffer;
      header: LedgerHeader;
      ext: LedgerHeaderHistoryEntryExt;
    });

    hash(value?: BrowserBuffer): BrowserBuffer;

    header(value?: LedgerHeader): LedgerHeader;

    ext(value?: LedgerHeaderHistoryEntryExt): LedgerHeaderHistoryEntryExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerHeaderHistoryEntry;

    static write(value: LedgerHeaderHistoryEntry, io: BrowserBuffer): void;

    static isValid(value: LedgerHeaderHistoryEntry): boolean;

    static toXDR(value: LedgerHeaderHistoryEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerHeaderHistoryEntry;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerHeaderHistoryEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerScpMessages {
    constructor(attributes: { ledgerSeq: number; messages: ScpEnvelope[] });

    ledgerSeq(value?: number): number;

    messages(value?: ScpEnvelope[]): ScpEnvelope[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerScpMessages;

    static write(value: LedgerScpMessages, io: BrowserBuffer): void;

    static isValid(value: LedgerScpMessages): boolean;

    static toXDR(value: LedgerScpMessages): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerScpMessages;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerScpMessages;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpHistoryEntryV0 {
    constructor(attributes: {
      quorumSets: ScpQuorumSet[];
      ledgerMessages: LedgerScpMessages;
    });

    quorumSets(value?: ScpQuorumSet[]): ScpQuorumSet[];

    ledgerMessages(value?: LedgerScpMessages): LedgerScpMessages;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpHistoryEntryV0;

    static write(value: ScpHistoryEntryV0, io: BrowserBuffer): void;

    static isValid(value: ScpHistoryEntryV0): boolean;

    static toXDR(value: ScpHistoryEntryV0): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpHistoryEntryV0;

    static fromXDR(input: string, format: "hex" | "base64"): ScpHistoryEntryV0;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class OperationMeta {
    constructor(attributes: { changes: LedgerEntryChange[] });

    changes(value?: LedgerEntryChange[]): LedgerEntryChange[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): OperationMeta;

    static write(value: OperationMeta, io: BrowserBuffer): void;

    static isValid(value: OperationMeta): boolean;

    static toXDR(value: OperationMeta): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): OperationMeta;

    static fromXDR(input: string, format: "hex" | "base64"): OperationMeta;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionMetaV1 {
    constructor(attributes: {
      txChanges: LedgerEntryChange[];
      operations: OperationMeta[];
    });

    txChanges(value?: LedgerEntryChange[]): LedgerEntryChange[];

    operations(value?: OperationMeta[]): OperationMeta[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionMetaV1;

    static write(value: TransactionMetaV1, io: BrowserBuffer): void;

    static isValid(value: TransactionMetaV1): boolean;

    static toXDR(value: TransactionMetaV1): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionMetaV1;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionMetaV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionMetaV2 {
    constructor(attributes: {
      txChangesBefore: LedgerEntryChange[];
      operations: OperationMeta[];
      txChangesAfter: LedgerEntryChange[];
    });

    txChangesBefore(value?: LedgerEntryChange[]): LedgerEntryChange[];

    operations(value?: OperationMeta[]): OperationMeta[];

    txChangesAfter(value?: LedgerEntryChange[]): LedgerEntryChange[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionMetaV2;

    static write(value: TransactionMetaV2, io: BrowserBuffer): void;

    static isValid(value: TransactionMetaV2): boolean;

    static toXDR(value: TransactionMetaV2): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionMetaV2;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionMetaV2;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionResultMeta {
    constructor(attributes: {
      result: TransactionResultPair;
      feeProcessing: LedgerEntryChange[];
      txApplyProcessing: TransactionMeta;
    });

    result(value?: TransactionResultPair): TransactionResultPair;

    feeProcessing(value?: LedgerEntryChange[]): LedgerEntryChange[];

    txApplyProcessing(value?: TransactionMeta): TransactionMeta;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionResultMeta;

    static write(value: TransactionResultMeta, io: BrowserBuffer): void;

    static isValid(value: TransactionResultMeta): boolean;

    static toXDR(value: TransactionResultMeta): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionResultMeta;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionResultMeta;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class UpgradeEntryMeta {
    constructor(attributes: {
      upgrade: LedgerUpgrade;
      changes: LedgerEntryChange[];
    });

    upgrade(value?: LedgerUpgrade): LedgerUpgrade;

    changes(value?: LedgerEntryChange[]): LedgerEntryChange[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): UpgradeEntryMeta;

    static write(value: UpgradeEntryMeta, io: BrowserBuffer): void;

    static isValid(value: UpgradeEntryMeta): boolean;

    static toXDR(value: UpgradeEntryMeta): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): UpgradeEntryMeta;

    static fromXDR(input: string, format: "hex" | "base64"): UpgradeEntryMeta;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerCloseMetaV0 {
    constructor(attributes: {
      ledgerHeader: LedgerHeaderHistoryEntry;
      txSet: TransactionSet;
      txProcessing: TransactionResultMeta[];
      upgradesProcessing: UpgradeEntryMeta[];
      scpInfo: ScpHistoryEntry[];
    });

    ledgerHeader(value?: LedgerHeaderHistoryEntry): LedgerHeaderHistoryEntry;

    txSet(value?: TransactionSet): TransactionSet;

    txProcessing(value?: TransactionResultMeta[]): TransactionResultMeta[];

    upgradesProcessing(value?: UpgradeEntryMeta[]): UpgradeEntryMeta[];

    scpInfo(value?: ScpHistoryEntry[]): ScpHistoryEntry[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerCloseMetaV0;

    static write(value: LedgerCloseMetaV0, io: BrowserBuffer): void;

    static isValid(value: LedgerCloseMetaV0): boolean;

    static toXDR(value: LedgerCloseMetaV0): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerCloseMetaV0;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerCloseMetaV0;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerCloseMetaV1 {
    constructor(attributes: {
      ledgerHeader: LedgerHeaderHistoryEntry;
      txSet: GeneralizedTransactionSet;
      txProcessing: TransactionResultMeta[];
      upgradesProcessing: UpgradeEntryMeta[];
      scpInfo: ScpHistoryEntry[];
    });

    ledgerHeader(value?: LedgerHeaderHistoryEntry): LedgerHeaderHistoryEntry;

    txSet(value?: GeneralizedTransactionSet): GeneralizedTransactionSet;

    txProcessing(value?: TransactionResultMeta[]): TransactionResultMeta[];

    upgradesProcessing(value?: UpgradeEntryMeta[]): UpgradeEntryMeta[];

    scpInfo(value?: ScpHistoryEntry[]): ScpHistoryEntry[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerCloseMetaV1;

    static write(value: LedgerCloseMetaV1, io: BrowserBuffer): void;

    static isValid(value: LedgerCloseMetaV1): boolean;

    static toXDR(value: LedgerCloseMetaV1): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerCloseMetaV1;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerCloseMetaV1;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Error {
    constructor(attributes: { code: ErrorCode; msg: string | BrowserBuffer });

    code(value?: ErrorCode): ErrorCode;

    msg(value?: string | BrowserBuffer): string | BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Error;

    static write(value: Error, io: BrowserBuffer): void;

    static isValid(value: Error): boolean;

    static toXDR(value: Error): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Error;

    static fromXDR(input: string, format: "hex" | "base64"): Error;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SendMore {
    constructor(attributes: { numMessages: number });

    numMessages(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SendMore;

    static write(value: SendMore, io: BrowserBuffer): void;

    static isValid(value: SendMore): boolean;

    static toXDR(value: SendMore): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SendMore;

    static fromXDR(input: string, format: "hex" | "base64"): SendMore;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AuthCert {
    constructor(attributes: {
      pubkey: Curve25519Public;
      expiration: Uint64;
      sig: BrowserBuffer;
    });

    pubkey(value?: Curve25519Public): Curve25519Public;

    expiration(value?: Uint64): Uint64;

    sig(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AuthCert;

    static write(value: AuthCert, io: BrowserBuffer): void;

    static isValid(value: AuthCert): boolean;

    static toXDR(value: AuthCert): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AuthCert;

    static fromXDR(input: string, format: "hex" | "base64"): AuthCert;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Hello {
    constructor(attributes: {
      ledgerVersion: number;
      overlayVersion: number;
      overlayMinVersion: number;
      networkId: BrowserBuffer;
      versionStr: string | BrowserBuffer;
      listeningPort: number;
      peerId: NodeId;
      cert: AuthCert;
      nonce: BrowserBuffer;
    });

    ledgerVersion(value?: number): number;

    overlayVersion(value?: number): number;

    overlayMinVersion(value?: number): number;

    networkId(value?: BrowserBuffer): BrowserBuffer;

    versionStr(value?: string | BrowserBuffer): string | BrowserBuffer;

    listeningPort(value?: number): number;

    peerId(value?: NodeId): NodeId;

    cert(value?: AuthCert): AuthCert;

    nonce(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Hello;

    static write(value: Hello, io: BrowserBuffer): void;

    static isValid(value: Hello): boolean;

    static toXDR(value: Hello): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Hello;

    static fromXDR(input: string, format: "hex" | "base64"): Hello;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Auth {
    constructor(attributes: { flags: number });

    flags(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Auth;

    static write(value: Auth, io: BrowserBuffer): void;

    static isValid(value: Auth): boolean;

    static toXDR(value: Auth): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Auth;

    static fromXDR(input: string, format: "hex" | "base64"): Auth;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PeerAddress {
    constructor(attributes: {
      ip: PeerAddressIp;
      port: number;
      numFailures: number;
    });

    ip(value?: PeerAddressIp): PeerAddressIp;

    port(value?: number): number;

    numFailures(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PeerAddress;

    static write(value: PeerAddress, io: BrowserBuffer): void;

    static isValid(value: PeerAddress): boolean;

    static toXDR(value: PeerAddress): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PeerAddress;

    static fromXDR(input: string, format: "hex" | "base64"): PeerAddress;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class DontHave {
    constructor(attributes: { type: MessageType; reqHash: BrowserBuffer });

    type(value?: MessageType): MessageType;

    reqHash(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): DontHave;

    static write(value: DontHave, io: BrowserBuffer): void;

    static isValid(value: DontHave): boolean;

    static toXDR(value: DontHave): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): DontHave;

    static fromXDR(input: string, format: "hex" | "base64"): DontHave;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SurveyRequestMessage {
    constructor(attributes: {
      surveyorPeerId: NodeId;
      surveyedPeerId: NodeId;
      ledgerNum: number;
      encryptionKey: Curve25519Public;
      commandType: SurveyMessageCommandType;
    });

    surveyorPeerId(value?: NodeId): NodeId;

    surveyedPeerId(value?: NodeId): NodeId;

    ledgerNum(value?: number): number;

    encryptionKey(value?: Curve25519Public): Curve25519Public;

    commandType(value?: SurveyMessageCommandType): SurveyMessageCommandType;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SurveyRequestMessage;

    static write(value: SurveyRequestMessage, io: BrowserBuffer): void;

    static isValid(value: SurveyRequestMessage): boolean;

    static toXDR(value: SurveyRequestMessage): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SurveyRequestMessage;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SurveyRequestMessage;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SignedSurveyRequestMessage {
    constructor(attributes: {
      requestSignature: BrowserBuffer;
      request: SurveyRequestMessage;
    });

    requestSignature(value?: BrowserBuffer): BrowserBuffer;

    request(value?: SurveyRequestMessage): SurveyRequestMessage;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SignedSurveyRequestMessage;

    static write(value: SignedSurveyRequestMessage, io: BrowserBuffer): void;

    static isValid(value: SignedSurveyRequestMessage): boolean;

    static toXDR(value: SignedSurveyRequestMessage): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SignedSurveyRequestMessage;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SignedSurveyRequestMessage;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SurveyResponseMessage {
    constructor(attributes: {
      surveyorPeerId: NodeId;
      surveyedPeerId: NodeId;
      ledgerNum: number;
      commandType: SurveyMessageCommandType;
      encryptedBody: BrowserBuffer;
    });

    surveyorPeerId(value?: NodeId): NodeId;

    surveyedPeerId(value?: NodeId): NodeId;

    ledgerNum(value?: number): number;

    commandType(value?: SurveyMessageCommandType): SurveyMessageCommandType;

    encryptedBody(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SurveyResponseMessage;

    static write(value: SurveyResponseMessage, io: BrowserBuffer): void;

    static isValid(value: SurveyResponseMessage): boolean;

    static toXDR(value: SurveyResponseMessage): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SurveyResponseMessage;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SurveyResponseMessage;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SignedSurveyResponseMessage {
    constructor(attributes: {
      responseSignature: BrowserBuffer;
      response: SurveyResponseMessage;
    });

    responseSignature(value?: BrowserBuffer): BrowserBuffer;

    response(value?: SurveyResponseMessage): SurveyResponseMessage;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SignedSurveyResponseMessage;

    static write(value: SignedSurveyResponseMessage, io: BrowserBuffer): void;

    static isValid(value: SignedSurveyResponseMessage): boolean;

    static toXDR(value: SignedSurveyResponseMessage): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SignedSurveyResponseMessage;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SignedSurveyResponseMessage;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PeerStats {
    constructor(attributes: {
      id: NodeId;
      versionStr: string | BrowserBuffer;
      messagesRead: Uint64;
      messagesWritten: Uint64;
      bytesRead: Uint64;
      bytesWritten: Uint64;
      secondsConnected: Uint64;
      uniqueFloodBytesRecv: Uint64;
      duplicateFloodBytesRecv: Uint64;
      uniqueFetchBytesRecv: Uint64;
      duplicateFetchBytesRecv: Uint64;
      uniqueFloodMessageRecv: Uint64;
      duplicateFloodMessageRecv: Uint64;
      uniqueFetchMessageRecv: Uint64;
      duplicateFetchMessageRecv: Uint64;
    });

    id(value?: NodeId): NodeId;

    versionStr(value?: string | BrowserBuffer): string | BrowserBuffer;

    messagesRead(value?: Uint64): Uint64;

    messagesWritten(value?: Uint64): Uint64;

    bytesRead(value?: Uint64): Uint64;

    bytesWritten(value?: Uint64): Uint64;

    secondsConnected(value?: Uint64): Uint64;

    uniqueFloodBytesRecv(value?: Uint64): Uint64;

    duplicateFloodBytesRecv(value?: Uint64): Uint64;

    uniqueFetchBytesRecv(value?: Uint64): Uint64;

    duplicateFetchBytesRecv(value?: Uint64): Uint64;

    uniqueFloodMessageRecv(value?: Uint64): Uint64;

    duplicateFloodMessageRecv(value?: Uint64): Uint64;

    uniqueFetchMessageRecv(value?: Uint64): Uint64;

    duplicateFetchMessageRecv(value?: Uint64): Uint64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PeerStats;

    static write(value: PeerStats, io: BrowserBuffer): void;

    static isValid(value: PeerStats): boolean;

    static toXDR(value: PeerStats): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PeerStats;

    static fromXDR(input: string, format: "hex" | "base64"): PeerStats;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TopologyResponseBody {
    constructor(attributes: {
      inboundPeers: PeerStats[];
      outboundPeers: PeerStats[];
      totalInboundPeerCount: number;
      totalOutboundPeerCount: number;
    });

    inboundPeers(value?: PeerStats[]): PeerStats[];

    outboundPeers(value?: PeerStats[]): PeerStats[];

    totalInboundPeerCount(value?: number): number;

    totalOutboundPeerCount(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TopologyResponseBody;

    static write(value: TopologyResponseBody, io: BrowserBuffer): void;

    static isValid(value: TopologyResponseBody): boolean;

    static toXDR(value: TopologyResponseBody): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TopologyResponseBody;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TopologyResponseBody;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class FloodAdvert {
    constructor(attributes: { txHashes: Hash[] });

    txHashes(value?: Hash[]): Hash[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): FloodAdvert;

    static write(value: FloodAdvert, io: BrowserBuffer): void;

    static isValid(value: FloodAdvert): boolean;

    static toXDR(value: FloodAdvert): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): FloodAdvert;

    static fromXDR(input: string, format: "hex" | "base64"): FloodAdvert;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class FloodDemand {
    constructor(attributes: { txHashes: Hash[] });

    txHashes(value?: Hash[]): Hash[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): FloodDemand;

    static write(value: FloodDemand, io: BrowserBuffer): void;

    static isValid(value: FloodDemand): boolean;

    static toXDR(value: FloodDemand): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): FloodDemand;

    static fromXDR(input: string, format: "hex" | "base64"): FloodDemand;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AuthenticatedMessageV0 {
    constructor(attributes: {
      sequence: Uint64;
      message: StellarMessage;
      mac: HmacSha256Mac;
    });

    sequence(value?: Uint64): Uint64;

    message(value?: StellarMessage): StellarMessage;

    mac(value?: HmacSha256Mac): HmacSha256Mac;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AuthenticatedMessageV0;

    static write(value: AuthenticatedMessageV0, io: BrowserBuffer): void;

    static isValid(value: AuthenticatedMessageV0): boolean;

    static toXDR(value: AuthenticatedMessageV0): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AuthenticatedMessageV0;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): AuthenticatedMessageV0;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class MuxedAccountMed25519 {
    constructor(attributes: { id: Uint64; ed25519: BrowserBuffer });

    id(value?: Uint64): Uint64;

    ed25519(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): MuxedAccountMed25519;

    static write(value: MuxedAccountMed25519, io: BrowserBuffer): void;

    static isValid(value: MuxedAccountMed25519): boolean;

    static toXDR(value: MuxedAccountMed25519): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): MuxedAccountMed25519;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): MuxedAccountMed25519;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class DecoratedSignature {
    constructor(attributes: { hint: BrowserBuffer; signature: BrowserBuffer });

    hint(value?: BrowserBuffer): BrowserBuffer;

    signature(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): DecoratedSignature;

    static write(value: DecoratedSignature, io: BrowserBuffer): void;

    static isValid(value: DecoratedSignature): boolean;

    static toXDR(value: DecoratedSignature): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): DecoratedSignature;

    static fromXDR(input: string, format: "hex" | "base64"): DecoratedSignature;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class CreateAccountOp {
    constructor(attributes: { destination: AccountId; startingBalance: Int64 });

    destination(value?: AccountId): AccountId;

    startingBalance(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): CreateAccountOp;

    static write(value: CreateAccountOp, io: BrowserBuffer): void;

    static isValid(value: CreateAccountOp): boolean;

    static toXDR(value: CreateAccountOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): CreateAccountOp;

    static fromXDR(input: string, format: "hex" | "base64"): CreateAccountOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PaymentOp {
    constructor(attributes: {
      destination: MuxedAccount;
      asset: Asset;
      amount: Int64;
    });

    destination(value?: MuxedAccount): MuxedAccount;

    asset(value?: Asset): Asset;

    amount(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PaymentOp;

    static write(value: PaymentOp, io: BrowserBuffer): void;

    static isValid(value: PaymentOp): boolean;

    static toXDR(value: PaymentOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PaymentOp;

    static fromXDR(input: string, format: "hex" | "base64"): PaymentOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PathPaymentStrictReceiveOp {
    constructor(attributes: {
      sendAsset: Asset;
      sendMax: Int64;
      destination: MuxedAccount;
      destAsset: Asset;
      destAmount: Int64;
      path: Asset[];
    });

    sendAsset(value?: Asset): Asset;

    sendMax(value?: Int64): Int64;

    destination(value?: MuxedAccount): MuxedAccount;

    destAsset(value?: Asset): Asset;

    destAmount(value?: Int64): Int64;

    path(value?: Asset[]): Asset[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PathPaymentStrictReceiveOp;

    static write(value: PathPaymentStrictReceiveOp, io: BrowserBuffer): void;

    static isValid(value: PathPaymentStrictReceiveOp): boolean;

    static toXDR(value: PathPaymentStrictReceiveOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PathPaymentStrictReceiveOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): PathPaymentStrictReceiveOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PathPaymentStrictSendOp {
    constructor(attributes: {
      sendAsset: Asset;
      sendAmount: Int64;
      destination: MuxedAccount;
      destAsset: Asset;
      destMin: Int64;
      path: Asset[];
    });

    sendAsset(value?: Asset): Asset;

    sendAmount(value?: Int64): Int64;

    destination(value?: MuxedAccount): MuxedAccount;

    destAsset(value?: Asset): Asset;

    destMin(value?: Int64): Int64;

    path(value?: Asset[]): Asset[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PathPaymentStrictSendOp;

    static write(value: PathPaymentStrictSendOp, io: BrowserBuffer): void;

    static isValid(value: PathPaymentStrictSendOp): boolean;

    static toXDR(value: PathPaymentStrictSendOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PathPaymentStrictSendOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): PathPaymentStrictSendOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageSellOfferOp {
    constructor(attributes: {
      selling: Asset;
      buying: Asset;
      amount: Int64;
      price: Price;
      offerId: Int64;
    });

    selling(value?: Asset): Asset;

    buying(value?: Asset): Asset;

    amount(value?: Int64): Int64;

    price(value?: Price): Price;

    offerId(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageSellOfferOp;

    static write(value: ManageSellOfferOp, io: BrowserBuffer): void;

    static isValid(value: ManageSellOfferOp): boolean;

    static toXDR(value: ManageSellOfferOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ManageSellOfferOp;

    static fromXDR(input: string, format: "hex" | "base64"): ManageSellOfferOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageBuyOfferOp {
    constructor(attributes: {
      selling: Asset;
      buying: Asset;
      buyAmount: Int64;
      price: Price;
      offerId: Int64;
    });

    selling(value?: Asset): Asset;

    buying(value?: Asset): Asset;

    buyAmount(value?: Int64): Int64;

    price(value?: Price): Price;

    offerId(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageBuyOfferOp;

    static write(value: ManageBuyOfferOp, io: BrowserBuffer): void;

    static isValid(value: ManageBuyOfferOp): boolean;

    static toXDR(value: ManageBuyOfferOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ManageBuyOfferOp;

    static fromXDR(input: string, format: "hex" | "base64"): ManageBuyOfferOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class CreatePassiveSellOfferOp {
    constructor(attributes: {
      selling: Asset;
      buying: Asset;
      amount: Int64;
      price: Price;
    });

    selling(value?: Asset): Asset;

    buying(value?: Asset): Asset;

    amount(value?: Int64): Int64;

    price(value?: Price): Price;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): CreatePassiveSellOfferOp;

    static write(value: CreatePassiveSellOfferOp, io: BrowserBuffer): void;

    static isValid(value: CreatePassiveSellOfferOp): boolean;

    static toXDR(value: CreatePassiveSellOfferOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): CreatePassiveSellOfferOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): CreatePassiveSellOfferOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SetOptionsOp {
    constructor(attributes: {
      inflationDest: null | AccountId;
      clearFlags: null | number;
      setFlags: null | number;
      masterWeight: null | number;
      lowThreshold: null | number;
      medThreshold: null | number;
      highThreshold: null | number;
      homeDomain: null | string | BrowserBuffer;
      signer: null | Signer;
    });

    inflationDest(value?: null | AccountId): null | AccountId;

    clearFlags(value?: null | number): null | number;

    setFlags(value?: null | number): null | number;

    masterWeight(value?: null | number): null | number;

    lowThreshold(value?: null | number): null | number;

    medThreshold(value?: null | number): null | number;

    highThreshold(value?: null | number): null | number;

    homeDomain(value?: null | string | BrowserBuffer): null | string | BrowserBuffer;

    signer(value?: null | Signer): null | Signer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SetOptionsOp;

    static write(value: SetOptionsOp, io: BrowserBuffer): void;

    static isValid(value: SetOptionsOp): boolean;

    static toXDR(value: SetOptionsOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SetOptionsOp;

    static fromXDR(input: string, format: "hex" | "base64"): SetOptionsOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ChangeTrustOp {
    constructor(attributes: { line: ChangeTrustAsset; limit: Int64 });

    line(value?: ChangeTrustAsset): ChangeTrustAsset;

    limit(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ChangeTrustOp;

    static write(value: ChangeTrustOp, io: BrowserBuffer): void;

    static isValid(value: ChangeTrustOp): boolean;

    static toXDR(value: ChangeTrustOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ChangeTrustOp;

    static fromXDR(input: string, format: "hex" | "base64"): ChangeTrustOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AllowTrustOp {
    constructor(attributes: {
      trustor: AccountId;
      asset: AssetCode;
      authorize: number;
    });

    trustor(value?: AccountId): AccountId;

    asset(value?: AssetCode): AssetCode;

    authorize(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AllowTrustOp;

    static write(value: AllowTrustOp, io: BrowserBuffer): void;

    static isValid(value: AllowTrustOp): boolean;

    static toXDR(value: AllowTrustOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AllowTrustOp;

    static fromXDR(input: string, format: "hex" | "base64"): AllowTrustOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageDataOp {
    constructor(attributes: {
      dataName: string | BrowserBuffer;
      dataValue: null | BrowserBuffer;
    });

    dataName(value?: string | BrowserBuffer): string | BrowserBuffer;

    dataValue(value?: null | BrowserBuffer): null | BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageDataOp;

    static write(value: ManageDataOp, io: BrowserBuffer): void;

    static isValid(value: ManageDataOp): boolean;

    static toXDR(value: ManageDataOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ManageDataOp;

    static fromXDR(input: string, format: "hex" | "base64"): ManageDataOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class BumpSequenceOp {
    constructor(attributes: { bumpTo: SequenceNumber });

    bumpTo(value?: SequenceNumber): SequenceNumber;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): BumpSequenceOp;

    static write(value: BumpSequenceOp, io: BrowserBuffer): void;

    static isValid(value: BumpSequenceOp): boolean;

    static toXDR(value: BumpSequenceOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): BumpSequenceOp;

    static fromXDR(input: string, format: "hex" | "base64"): BumpSequenceOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class CreateClaimableBalanceOp {
    constructor(attributes: {
      asset: Asset;
      amount: Int64;
      claimants: Claimant[];
    });

    asset(value?: Asset): Asset;

    amount(value?: Int64): Int64;

    claimants(value?: Claimant[]): Claimant[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): CreateClaimableBalanceOp;

    static write(value: CreateClaimableBalanceOp, io: BrowserBuffer): void;

    static isValid(value: CreateClaimableBalanceOp): boolean;

    static toXDR(value: CreateClaimableBalanceOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): CreateClaimableBalanceOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): CreateClaimableBalanceOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimClaimableBalanceOp {
    constructor(attributes: { balanceId: ClaimableBalanceId });

    balanceId(value?: ClaimableBalanceId): ClaimableBalanceId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimClaimableBalanceOp;

    static write(value: ClaimClaimableBalanceOp, io: BrowserBuffer): void;

    static isValid(value: ClaimClaimableBalanceOp): boolean;

    static toXDR(value: ClaimClaimableBalanceOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimClaimableBalanceOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClaimClaimableBalanceOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class BeginSponsoringFutureReservesOp {
    constructor(attributes: { sponsoredId: AccountId });

    sponsoredId(value?: AccountId): AccountId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): BeginSponsoringFutureReservesOp;

    static write(value: BeginSponsoringFutureReservesOp, io: BrowserBuffer): void;

    static isValid(value: BeginSponsoringFutureReservesOp): boolean;

    static toXDR(value: BeginSponsoringFutureReservesOp): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): BeginSponsoringFutureReservesOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): BeginSponsoringFutureReservesOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class RevokeSponsorshipOpSigner {
    constructor(attributes: { accountId: AccountId; signerKey: SignerKey });

    accountId(value?: AccountId): AccountId;

    signerKey(value?: SignerKey): SignerKey;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): RevokeSponsorshipOpSigner;

    static write(value: RevokeSponsorshipOpSigner, io: BrowserBuffer): void;

    static isValid(value: RevokeSponsorshipOpSigner): boolean;

    static toXDR(value: RevokeSponsorshipOpSigner): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): RevokeSponsorshipOpSigner;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): RevokeSponsorshipOpSigner;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClawbackOp {
    constructor(attributes: {
      asset: Asset;
      from: MuxedAccount;
      amount: Int64;
    });

    asset(value?: Asset): Asset;

    from(value?: MuxedAccount): MuxedAccount;

    amount(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClawbackOp;

    static write(value: ClawbackOp, io: BrowserBuffer): void;

    static isValid(value: ClawbackOp): boolean;

    static toXDR(value: ClawbackOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClawbackOp;

    static fromXDR(input: string, format: "hex" | "base64"): ClawbackOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClawbackClaimableBalanceOp {
    constructor(attributes: { balanceId: ClaimableBalanceId });

    balanceId(value?: ClaimableBalanceId): ClaimableBalanceId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClawbackClaimableBalanceOp;

    static write(value: ClawbackClaimableBalanceOp, io: BrowserBuffer): void;

    static isValid(value: ClawbackClaimableBalanceOp): boolean;

    static toXDR(value: ClawbackClaimableBalanceOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClawbackClaimableBalanceOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClawbackClaimableBalanceOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SetTrustLineFlagsOp {
    constructor(attributes: {
      trustor: AccountId;
      asset: Asset;
      clearFlags: number;
      setFlags: number;
    });

    trustor(value?: AccountId): AccountId;

    asset(value?: Asset): Asset;

    clearFlags(value?: number): number;

    setFlags(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SetTrustLineFlagsOp;

    static write(value: SetTrustLineFlagsOp, io: BrowserBuffer): void;

    static isValid(value: SetTrustLineFlagsOp): boolean;

    static toXDR(value: SetTrustLineFlagsOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SetTrustLineFlagsOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SetTrustLineFlagsOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolDepositOp {
    constructor(attributes: {
      liquidityPoolId: PoolId;
      maxAmountA: Int64;
      maxAmountB: Int64;
      minPrice: Price;
      maxPrice: Price;
    });

    liquidityPoolId(value?: PoolId): PoolId;

    maxAmountA(value?: Int64): Int64;

    maxAmountB(value?: Int64): Int64;

    minPrice(value?: Price): Price;

    maxPrice(value?: Price): Price;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolDepositOp;

    static write(value: LiquidityPoolDepositOp, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolDepositOp): boolean;

    static toXDR(value: LiquidityPoolDepositOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LiquidityPoolDepositOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolDepositOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolWithdrawOp {
    constructor(attributes: {
      liquidityPoolId: PoolId;
      amount: Int64;
      minAmountA: Int64;
      minAmountB: Int64;
    });

    liquidityPoolId(value?: PoolId): PoolId;

    amount(value?: Int64): Int64;

    minAmountA(value?: Int64): Int64;

    minAmountB(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolWithdrawOp;

    static write(value: LiquidityPoolWithdrawOp, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolWithdrawOp): boolean;

    static toXDR(value: LiquidityPoolWithdrawOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LiquidityPoolWithdrawOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolWithdrawOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class HashIdPreimageOperationId {
    constructor(attributes: {
      sourceAccount: AccountId;
      seqNum: SequenceNumber;
      opNum: number;
    });

    sourceAccount(value?: AccountId): AccountId;

    seqNum(value?: SequenceNumber): SequenceNumber;

    opNum(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): HashIdPreimageOperationId;

    static write(value: HashIdPreimageOperationId, io: BrowserBuffer): void;

    static isValid(value: HashIdPreimageOperationId): boolean;

    static toXDR(value: HashIdPreimageOperationId): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): HashIdPreimageOperationId;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): HashIdPreimageOperationId;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class HashIdPreimageRevokeId {
    constructor(attributes: {
      sourceAccount: AccountId;
      seqNum: SequenceNumber;
      opNum: number;
      liquidityPoolId: PoolId;
      asset: Asset;
    });

    sourceAccount(value?: AccountId): AccountId;

    seqNum(value?: SequenceNumber): SequenceNumber;

    opNum(value?: number): number;

    liquidityPoolId(value?: PoolId): PoolId;

    asset(value?: Asset): Asset;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): HashIdPreimageRevokeId;

    static write(value: HashIdPreimageRevokeId, io: BrowserBuffer): void;

    static isValid(value: HashIdPreimageRevokeId): boolean;

    static toXDR(value: HashIdPreimageRevokeId): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): HashIdPreimageRevokeId;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): HashIdPreimageRevokeId;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TimeBounds {
    constructor(attributes: { minTime: TimePoint; maxTime: TimePoint });

    minTime(value?: TimePoint): TimePoint;

    maxTime(value?: TimePoint): TimePoint;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TimeBounds;

    static write(value: TimeBounds, io: BrowserBuffer): void;

    static isValid(value: TimeBounds): boolean;

    static toXDR(value: TimeBounds): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TimeBounds;

    static fromXDR(input: string, format: "hex" | "base64"): TimeBounds;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerBounds {
    constructor(attributes: { minLedger: number; maxLedger: number });

    minLedger(value?: number): number;

    maxLedger(value?: number): number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerBounds;

    static write(value: LedgerBounds, io: BrowserBuffer): void;

    static isValid(value: LedgerBounds): boolean;

    static toXDR(value: LedgerBounds): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerBounds;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerBounds;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PreconditionsV2 {
    constructor(attributes: {
      timeBounds: null | TimeBounds;
      ledgerBounds: null | LedgerBounds;
      minSeqNum: null | SequenceNumber;
      minSeqAge: Duration;
      minSeqLedgerGap: number;
      extraSigners: SignerKey[];
    });

    timeBounds(value?: null | TimeBounds): null | TimeBounds;

    ledgerBounds(value?: null | LedgerBounds): null | LedgerBounds;

    minSeqNum(value?: null | SequenceNumber): null | SequenceNumber;

    minSeqAge(value?: Duration): Duration;

    minSeqLedgerGap(value?: number): number;

    extraSigners(value?: SignerKey[]): SignerKey[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PreconditionsV2;

    static write(value: PreconditionsV2, io: BrowserBuffer): void;

    static isValid(value: PreconditionsV2): boolean;

    static toXDR(value: PreconditionsV2): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PreconditionsV2;

    static fromXDR(input: string, format: "hex" | "base64"): PreconditionsV2;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionV0 {
    constructor(attributes: {
      sourceAccountEd25519: BrowserBuffer;
      fee: number;
      seqNum: SequenceNumber;
      timeBounds: null | TimeBounds;
      memo: Memo;
      operations: Operation[];
      ext: TransactionV0Ext;
    });

    sourceAccountEd25519(value?: BrowserBuffer): BrowserBuffer;

    fee(value?: number): number;

    seqNum(value?: SequenceNumber): SequenceNumber;

    timeBounds(value?: null | TimeBounds): null | TimeBounds;

    memo(value?: Memo): Memo;

    operations(value?: Operation[]): Operation[];

    ext(value?: TransactionV0Ext): TransactionV0Ext;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionV0;

    static write(value: TransactionV0, io: BrowserBuffer): void;

    static isValid(value: TransactionV0): boolean;

    static toXDR(value: TransactionV0): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionV0;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionV0;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionV0Envelope {
    constructor(attributes: {
      tx: TransactionV0;
      signatures: DecoratedSignature[];
    });

    tx(value?: TransactionV0): TransactionV0;

    signatures(value?: DecoratedSignature[]): DecoratedSignature[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionV0Envelope;

    static write(value: TransactionV0Envelope, io: BrowserBuffer): void;

    static isValid(value: TransactionV0Envelope): boolean;

    static toXDR(value: TransactionV0Envelope): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionV0Envelope;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionV0Envelope;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Transaction {
    constructor(attributes: {
      sourceAccount: MuxedAccount;
      fee: number;
      seqNum: SequenceNumber;
      cond: Preconditions;
      memo: Memo;
      operations: Operation[];
      ext: TransactionExt;
    });

    sourceAccount(value?: MuxedAccount): MuxedAccount;

    fee(value?: number): number;

    seqNum(value?: SequenceNumber): SequenceNumber;

    cond(value?: Preconditions): Preconditions;

    memo(value?: Memo): Memo;

    operations(value?: Operation[]): Operation[];

    ext(value?: TransactionExt): TransactionExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Transaction;

    static write(value: Transaction, io: BrowserBuffer): void;

    static isValid(value: Transaction): boolean;

    static toXDR(value: Transaction): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Transaction;

    static fromXDR(input: string, format: "hex" | "base64"): Transaction;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionV1Envelope {
    constructor(attributes: {
      tx: Transaction;
      signatures: DecoratedSignature[];
    });

    tx(value?: Transaction): Transaction;

    signatures(value?: DecoratedSignature[]): DecoratedSignature[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionV1Envelope;

    static write(value: TransactionV1Envelope, io: BrowserBuffer): void;

    static isValid(value: TransactionV1Envelope): boolean;

    static toXDR(value: TransactionV1Envelope): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionV1Envelope;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionV1Envelope;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class FeeBumpTransaction {
    constructor(attributes: {
      feeSource: MuxedAccount;
      fee: Int64;
      innerTx: FeeBumpTransactionInnerTx;
      ext: FeeBumpTransactionExt;
    });

    feeSource(value?: MuxedAccount): MuxedAccount;

    fee(value?: Int64): Int64;

    innerTx(value?: FeeBumpTransactionInnerTx): FeeBumpTransactionInnerTx;

    ext(value?: FeeBumpTransactionExt): FeeBumpTransactionExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): FeeBumpTransaction;

    static write(value: FeeBumpTransaction, io: BrowserBuffer): void;

    static isValid(value: FeeBumpTransaction): boolean;

    static toXDR(value: FeeBumpTransaction): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): FeeBumpTransaction;

    static fromXDR(input: string, format: "hex" | "base64"): FeeBumpTransaction;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class FeeBumpTransactionEnvelope {
    constructor(attributes: {
      tx: FeeBumpTransaction;
      signatures: DecoratedSignature[];
    });

    tx(value?: FeeBumpTransaction): FeeBumpTransaction;

    signatures(value?: DecoratedSignature[]): DecoratedSignature[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): FeeBumpTransactionEnvelope;

    static write(value: FeeBumpTransactionEnvelope, io: BrowserBuffer): void;

    static isValid(value: FeeBumpTransactionEnvelope): boolean;

    static toXDR(value: FeeBumpTransactionEnvelope): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): FeeBumpTransactionEnvelope;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): FeeBumpTransactionEnvelope;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionSignaturePayload {
    constructor(attributes: {
      networkId: BrowserBuffer;
      taggedTransaction: TransactionSignaturePayloadTaggedTransaction;
    });

    networkId(value?: BrowserBuffer): BrowserBuffer;

    taggedTransaction(
      value?: TransactionSignaturePayloadTaggedTransaction
    ): TransactionSignaturePayloadTaggedTransaction;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionSignaturePayload;

    static write(value: TransactionSignaturePayload, io: BrowserBuffer): void;

    static isValid(value: TransactionSignaturePayload): boolean;

    static toXDR(value: TransactionSignaturePayload): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionSignaturePayload;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionSignaturePayload;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimOfferAtomV0 {
    constructor(attributes: {
      sellerEd25519: BrowserBuffer;
      offerId: Int64;
      assetSold: Asset;
      amountSold: Int64;
      assetBought: Asset;
      amountBought: Int64;
    });

    sellerEd25519(value?: BrowserBuffer): BrowserBuffer;

    offerId(value?: Int64): Int64;

    assetSold(value?: Asset): Asset;

    amountSold(value?: Int64): Int64;

    assetBought(value?: Asset): Asset;

    amountBought(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimOfferAtomV0;

    static write(value: ClaimOfferAtomV0, io: BrowserBuffer): void;

    static isValid(value: ClaimOfferAtomV0): boolean;

    static toXDR(value: ClaimOfferAtomV0): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimOfferAtomV0;

    static fromXDR(input: string, format: "hex" | "base64"): ClaimOfferAtomV0;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimOfferAtom {
    constructor(attributes: {
      sellerId: AccountId;
      offerId: Int64;
      assetSold: Asset;
      amountSold: Int64;
      assetBought: Asset;
      amountBought: Int64;
    });

    sellerId(value?: AccountId): AccountId;

    offerId(value?: Int64): Int64;

    assetSold(value?: Asset): Asset;

    amountSold(value?: Int64): Int64;

    assetBought(value?: Asset): Asset;

    amountBought(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimOfferAtom;

    static write(value: ClaimOfferAtom, io: BrowserBuffer): void;

    static isValid(value: ClaimOfferAtom): boolean;

    static toXDR(value: ClaimOfferAtom): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimOfferAtom;

    static fromXDR(input: string, format: "hex" | "base64"): ClaimOfferAtom;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimLiquidityAtom {
    constructor(attributes: {
      liquidityPoolId: PoolId;
      assetSold: Asset;
      amountSold: Int64;
      assetBought: Asset;
      amountBought: Int64;
    });

    liquidityPoolId(value?: PoolId): PoolId;

    assetSold(value?: Asset): Asset;

    amountSold(value?: Int64): Int64;

    assetBought(value?: Asset): Asset;

    amountBought(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimLiquidityAtom;

    static write(value: ClaimLiquidityAtom, io: BrowserBuffer): void;

    static isValid(value: ClaimLiquidityAtom): boolean;

    static toXDR(value: ClaimLiquidityAtom): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimLiquidityAtom;

    static fromXDR(input: string, format: "hex" | "base64"): ClaimLiquidityAtom;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SimplePaymentResult {
    constructor(attributes: {
      destination: AccountId;
      asset: Asset;
      amount: Int64;
    });

    destination(value?: AccountId): AccountId;

    asset(value?: Asset): Asset;

    amount(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SimplePaymentResult;

    static write(value: SimplePaymentResult, io: BrowserBuffer): void;

    static isValid(value: SimplePaymentResult): boolean;

    static toXDR(value: SimplePaymentResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SimplePaymentResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SimplePaymentResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PathPaymentStrictReceiveResultSuccess {
    constructor(attributes: { offers: ClaimAtom[]; last: SimplePaymentResult });

    offers(value?: ClaimAtom[]): ClaimAtom[];

    last(value?: SimplePaymentResult): SimplePaymentResult;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PathPaymentStrictReceiveResultSuccess;

    static write(
      value: PathPaymentStrictReceiveResultSuccess,
      io: BrowserBuffer
    ): void;

    static isValid(value: PathPaymentStrictReceiveResultSuccess): boolean;

    static toXDR(value: PathPaymentStrictReceiveResultSuccess): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): PathPaymentStrictReceiveResultSuccess;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): PathPaymentStrictReceiveResultSuccess;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PathPaymentStrictSendResultSuccess {
    constructor(attributes: { offers: ClaimAtom[]; last: SimplePaymentResult });

    offers(value?: ClaimAtom[]): ClaimAtom[];

    last(value?: SimplePaymentResult): SimplePaymentResult;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PathPaymentStrictSendResultSuccess;

    static write(value: PathPaymentStrictSendResultSuccess, io: BrowserBuffer): void;

    static isValid(value: PathPaymentStrictSendResultSuccess): boolean;

    static toXDR(value: PathPaymentStrictSendResultSuccess): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): PathPaymentStrictSendResultSuccess;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): PathPaymentStrictSendResultSuccess;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageOfferSuccessResult {
    constructor(attributes: {
      offersClaimed: ClaimAtom[];
      offer: ManageOfferSuccessResultOffer;
    });

    offersClaimed(value?: ClaimAtom[]): ClaimAtom[];

    offer(value?: ManageOfferSuccessResultOffer): ManageOfferSuccessResultOffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageOfferSuccessResult;

    static write(value: ManageOfferSuccessResult, io: BrowserBuffer): void;

    static isValid(value: ManageOfferSuccessResult): boolean;

    static toXDR(value: ManageOfferSuccessResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ManageOfferSuccessResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ManageOfferSuccessResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class InflationPayout {
    constructor(attributes: { destination: AccountId; amount: Int64 });

    destination(value?: AccountId): AccountId;

    amount(value?: Int64): Int64;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): InflationPayout;

    static write(value: InflationPayout, io: BrowserBuffer): void;

    static isValid(value: InflationPayout): boolean;

    static toXDR(value: InflationPayout): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): InflationPayout;

    static fromXDR(input: string, format: "hex" | "base64"): InflationPayout;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class InnerTransactionResult {
    constructor(attributes: {
      feeCharged: Int64;
      result: InnerTransactionResultResult;
      ext: InnerTransactionResultExt;
    });

    feeCharged(value?: Int64): Int64;

    result(value?: InnerTransactionResultResult): InnerTransactionResultResult;

    ext(value?: InnerTransactionResultExt): InnerTransactionResultExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): InnerTransactionResult;

    static write(value: InnerTransactionResult, io: BrowserBuffer): void;

    static isValid(value: InnerTransactionResult): boolean;

    static toXDR(value: InnerTransactionResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): InnerTransactionResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): InnerTransactionResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class InnerTransactionResultPair {
    constructor(attributes: {
      transactionHash: BrowserBuffer;
      result: InnerTransactionResult;
    });

    transactionHash(value?: BrowserBuffer): BrowserBuffer;

    result(value?: InnerTransactionResult): InnerTransactionResult;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): InnerTransactionResultPair;

    static write(value: InnerTransactionResultPair, io: BrowserBuffer): void;

    static isValid(value: InnerTransactionResultPair): boolean;

    static toXDR(value: InnerTransactionResultPair): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): InnerTransactionResultPair;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): InnerTransactionResultPair;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionResult {
    constructor(attributes: {
      feeCharged: Int64;
      result: TransactionResultResult;
      ext: TransactionResultExt;
    });

    feeCharged(value?: Int64): Int64;

    result(value?: TransactionResultResult): TransactionResultResult;

    ext(value?: TransactionResultExt): TransactionResultExt;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionResult;

    static write(value: TransactionResult, io: BrowserBuffer): void;

    static isValid(value: TransactionResult): boolean;

    static toXDR(value: TransactionResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionResult;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SignerKeyEd25519SignedPayload {
    constructor(attributes: { ed25519: BrowserBuffer; payload: BrowserBuffer });

    ed25519(value?: BrowserBuffer): BrowserBuffer;

    payload(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SignerKeyEd25519SignedPayload;

    static write(value: SignerKeyEd25519SignedPayload, io: BrowserBuffer): void;

    static isValid(value: SignerKeyEd25519SignedPayload): boolean;

    static toXDR(value: SignerKeyEd25519SignedPayload): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): SignerKeyEd25519SignedPayload;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SignerKeyEd25519SignedPayload;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Curve25519Secret {
    constructor(attributes: { key: BrowserBuffer });

    key(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Curve25519Secret;

    static write(value: Curve25519Secret, io: BrowserBuffer): void;

    static isValid(value: Curve25519Secret): boolean;

    static toXDR(value: Curve25519Secret): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Curve25519Secret;

    static fromXDR(input: string, format: "hex" | "base64"): Curve25519Secret;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Curve25519Public {
    constructor(attributes: { key: BrowserBuffer });

    key(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Curve25519Public;

    static write(value: Curve25519Public, io: BrowserBuffer): void;

    static isValid(value: Curve25519Public): boolean;

    static toXDR(value: Curve25519Public): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Curve25519Public;

    static fromXDR(input: string, format: "hex" | "base64"): Curve25519Public;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class HmacSha256Key {
    constructor(attributes: { key: BrowserBuffer });

    key(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): HmacSha256Key;

    static write(value: HmacSha256Key, io: BrowserBuffer): void;

    static isValid(value: HmacSha256Key): boolean;

    static toXDR(value: HmacSha256Key): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): HmacSha256Key;

    static fromXDR(input: string, format: "hex" | "base64"): HmacSha256Key;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class HmacSha256Mac {
    constructor(attributes: { mac: BrowserBuffer });

    mac(value?: BrowserBuffer): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): HmacSha256Mac;

    static write(value: HmacSha256Mac, io: BrowserBuffer): void;

    static isValid(value: HmacSha256Mac): boolean;

    static toXDR(value: HmacSha256Mac): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): HmacSha256Mac;

    static fromXDR(input: string, format: "hex" | "base64"): HmacSha256Mac;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpStatementPledges {
    switch(): ScpStatementType;

    prepare(value?: ScpStatementPrepare): ScpStatementPrepare;

    confirm(value?: ScpStatementConfirm): ScpStatementConfirm;

    externalize(value?: ScpStatementExternalize): ScpStatementExternalize;

    nominate(value?: ScpNomination): ScpNomination;

    static scpStPrepare(value: ScpStatementPrepare): ScpStatementPledges;

    static scpStConfirm(value: ScpStatementConfirm): ScpStatementPledges;

    static scpStExternalize(
      value: ScpStatementExternalize
    ): ScpStatementPledges;

    static scpStNominate(value: ScpNomination): ScpStatementPledges;

    value():
      | ScpStatementPrepare
      | ScpStatementConfirm
      | ScpStatementExternalize
      | ScpNomination;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpStatementPledges;

    static write(value: ScpStatementPledges, io: BrowserBuffer): void;

    static isValid(value: ScpStatementPledges): boolean;

    static toXDR(value: ScpStatementPledges): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpStatementPledges;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ScpStatementPledges;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AssetCode {
    switch(): AssetType;

    assetCode4(value?: BrowserBuffer): BrowserBuffer;

    assetCode12(value?: BrowserBuffer): BrowserBuffer;

    static assetTypeCreditAlphanum4(value: BrowserBuffer): AssetCode;

    static assetTypeCreditAlphanum12(value: BrowserBuffer): AssetCode;

    value(): BrowserBuffer | BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AssetCode;

    static write(value: AssetCode, io: BrowserBuffer): void;

    static isValid(value: AssetCode): boolean;

    static toXDR(value: AssetCode): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AssetCode;

    static fromXDR(input: string, format: "hex" | "base64"): AssetCode;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Asset {
    switch(): AssetType;

    alphaNum4(value?: AlphaNum4): AlphaNum4;

    alphaNum12(value?: AlphaNum12): AlphaNum12;

    static assetTypeNative(): Asset;

    static assetTypeCreditAlphanum4(value: AlphaNum4): Asset;

    static assetTypeCreditAlphanum12(value: AlphaNum12): Asset;

    value(): AlphaNum4 | AlphaNum12 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Asset;

    static write(value: Asset, io: BrowserBuffer): void;

    static isValid(value: Asset): boolean;

    static toXDR(value: Asset): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Asset;

    static fromXDR(input: string, format: "hex" | "base64"): Asset;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountEntryExtensionV2Ext {
    switch(): number;

    v3(value?: AccountEntryExtensionV3): AccountEntryExtensionV3;

    static 0(): AccountEntryExtensionV2Ext;

    static 3(value: AccountEntryExtensionV3): AccountEntryExtensionV2Ext;

    value(): AccountEntryExtensionV3 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountEntryExtensionV2Ext;

    static write(value: AccountEntryExtensionV2Ext, io: BrowserBuffer): void;

    static isValid(value: AccountEntryExtensionV2Ext): boolean;

    static toXDR(value: AccountEntryExtensionV2Ext): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountEntryExtensionV2Ext;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): AccountEntryExtensionV2Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountEntryExtensionV1Ext {
    switch(): number;

    v2(value?: AccountEntryExtensionV2): AccountEntryExtensionV2;

    static 0(): AccountEntryExtensionV1Ext;

    static 2(value: AccountEntryExtensionV2): AccountEntryExtensionV1Ext;

    value(): AccountEntryExtensionV2 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountEntryExtensionV1Ext;

    static write(value: AccountEntryExtensionV1Ext, io: BrowserBuffer): void;

    static isValid(value: AccountEntryExtensionV1Ext): boolean;

    static toXDR(value: AccountEntryExtensionV1Ext): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountEntryExtensionV1Ext;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): AccountEntryExtensionV1Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountEntryExt {
    switch(): number;

    v1(value?: AccountEntryExtensionV1): AccountEntryExtensionV1;

    static 0(): AccountEntryExt;

    static 1(value: AccountEntryExtensionV1): AccountEntryExt;

    value(): AccountEntryExtensionV1 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountEntryExt;

    static write(value: AccountEntryExt, io: BrowserBuffer): void;

    static isValid(value: AccountEntryExt): boolean;

    static toXDR(value: AccountEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountEntryExt;

    static fromXDR(input: string, format: "hex" | "base64"): AccountEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TrustLineAsset {
    switch(): AssetType;

    alphaNum4(value?: AlphaNum4): AlphaNum4;

    alphaNum12(value?: AlphaNum12): AlphaNum12;

    liquidityPoolId(value?: PoolId): PoolId;

    static assetTypeNative(): TrustLineAsset;

    static assetTypeCreditAlphanum4(value: AlphaNum4): TrustLineAsset;

    static assetTypeCreditAlphanum12(value: AlphaNum12): TrustLineAsset;

    static assetTypePoolShare(value: PoolId): TrustLineAsset;

    value(): AlphaNum4 | AlphaNum12 | PoolId | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TrustLineAsset;

    static write(value: TrustLineAsset, io: BrowserBuffer): void;

    static isValid(value: TrustLineAsset): boolean;

    static toXDR(value: TrustLineAsset): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TrustLineAsset;

    static fromXDR(input: string, format: "hex" | "base64"): TrustLineAsset;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TrustLineEntryExtensionV2Ext {
    switch(): number;

    static 0(): TrustLineEntryExtensionV2Ext;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TrustLineEntryExtensionV2Ext;

    static write(value: TrustLineEntryExtensionV2Ext, io: BrowserBuffer): void;

    static isValid(value: TrustLineEntryExtensionV2Ext): boolean;

    static toXDR(value: TrustLineEntryExtensionV2Ext): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TrustLineEntryExtensionV2Ext;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TrustLineEntryExtensionV2Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TrustLineEntryV1Ext {
    switch(): number;

    v2(value?: TrustLineEntryExtensionV2): TrustLineEntryExtensionV2;

    static 0(): TrustLineEntryV1Ext;

    static 2(value: TrustLineEntryExtensionV2): TrustLineEntryV1Ext;

    value(): TrustLineEntryExtensionV2 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TrustLineEntryV1Ext;

    static write(value: TrustLineEntryV1Ext, io: BrowserBuffer): void;

    static isValid(value: TrustLineEntryV1Ext): boolean;

    static toXDR(value: TrustLineEntryV1Ext): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TrustLineEntryV1Ext;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TrustLineEntryV1Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TrustLineEntryExt {
    switch(): number;

    v1(value?: TrustLineEntryV1): TrustLineEntryV1;

    static 0(): TrustLineEntryExt;

    static 1(value: TrustLineEntryV1): TrustLineEntryExt;

    value(): TrustLineEntryV1 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TrustLineEntryExt;

    static write(value: TrustLineEntryExt, io: BrowserBuffer): void;

    static isValid(value: TrustLineEntryExt): boolean;

    static toXDR(value: TrustLineEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TrustLineEntryExt;

    static fromXDR(input: string, format: "hex" | "base64"): TrustLineEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class OfferEntryExt {
    switch(): number;

    static 0(): OfferEntryExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): OfferEntryExt;

    static write(value: OfferEntryExt, io: BrowserBuffer): void;

    static isValid(value: OfferEntryExt): boolean;

    static toXDR(value: OfferEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): OfferEntryExt;

    static fromXDR(input: string, format: "hex" | "base64"): OfferEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class DataEntryExt {
    switch(): number;

    static 0(): DataEntryExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): DataEntryExt;

    static write(value: DataEntryExt, io: BrowserBuffer): void;

    static isValid(value: DataEntryExt): boolean;

    static toXDR(value: DataEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): DataEntryExt;

    static fromXDR(input: string, format: "hex" | "base64"): DataEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimPredicate {
    switch(): ClaimPredicateType;

    andPredicates(value?: ClaimPredicate[]): ClaimPredicate[];

    orPredicates(value?: ClaimPredicate[]): ClaimPredicate[];

    notPredicate(value?: null | ClaimPredicate): null | ClaimPredicate;

    absBefore(value?: Int64): Int64;

    relBefore(value?: Int64): Int64;

    static claimPredicateUnconditional(): ClaimPredicate;

    static claimPredicateAnd(value: ClaimPredicate[]): ClaimPredicate;

    static claimPredicateOr(value: ClaimPredicate[]): ClaimPredicate;

    static claimPredicateNot(value: null | ClaimPredicate): ClaimPredicate;

    static claimPredicateBeforeAbsoluteTime(value: Int64): ClaimPredicate;

    static claimPredicateBeforeRelativeTime(value: Int64): ClaimPredicate;

    value():
      | ClaimPredicate[]
      | ClaimPredicate[]
      | null
      | ClaimPredicate
      | Int64
      | Int64
      | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimPredicate;

    static write(value: ClaimPredicate, io: BrowserBuffer): void;

    static isValid(value: ClaimPredicate): boolean;

    static toXDR(value: ClaimPredicate): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimPredicate;

    static fromXDR(input: string, format: "hex" | "base64"): ClaimPredicate;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Claimant {
    switch(): ClaimantType;

    v0(value?: ClaimantV0): ClaimantV0;

    static claimantTypeV0(value: ClaimantV0): Claimant;

    value(): ClaimantV0;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Claimant;

    static write(value: Claimant, io: BrowserBuffer): void;

    static isValid(value: Claimant): boolean;

    static toXDR(value: Claimant): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Claimant;

    static fromXDR(input: string, format: "hex" | "base64"): Claimant;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimableBalanceId {
    switch(): ClaimableBalanceIdType;

    v0(value?: BrowserBuffer): BrowserBuffer;

    static claimableBalanceIdTypeV0(value: BrowserBuffer): ClaimableBalanceId;

    value(): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimableBalanceId;

    static write(value: ClaimableBalanceId, io: BrowserBuffer): void;

    static isValid(value: ClaimableBalanceId): boolean;

    static toXDR(value: ClaimableBalanceId): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimableBalanceId;

    static fromXDR(input: string, format: "hex" | "base64"): ClaimableBalanceId;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimableBalanceEntryExtensionV1Ext {
    switch(): number;

    static 0(): ClaimableBalanceEntryExtensionV1Ext;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimableBalanceEntryExtensionV1Ext;

    static write(value: ClaimableBalanceEntryExtensionV1Ext, io: BrowserBuffer): void;

    static isValid(value: ClaimableBalanceEntryExtensionV1Ext): boolean;

    static toXDR(value: ClaimableBalanceEntryExtensionV1Ext): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): ClaimableBalanceEntryExtensionV1Ext;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClaimableBalanceEntryExtensionV1Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimableBalanceEntryExt {
    switch(): number;

    v1(
      value?: ClaimableBalanceEntryExtensionV1
    ): ClaimableBalanceEntryExtensionV1;

    static 0(): ClaimableBalanceEntryExt;

    static 1(value: ClaimableBalanceEntryExtensionV1): ClaimableBalanceEntryExt;

    value(): ClaimableBalanceEntryExtensionV1 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimableBalanceEntryExt;

    static write(value: ClaimableBalanceEntryExt, io: BrowserBuffer): void;

    static isValid(value: ClaimableBalanceEntryExt): boolean;

    static toXDR(value: ClaimableBalanceEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimableBalanceEntryExt;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClaimableBalanceEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolEntryBody {
    switch(): LiquidityPoolType;

    constantProduct(
      value?: LiquidityPoolEntryConstantProduct
    ): LiquidityPoolEntryConstantProduct;

    static liquidityPoolConstantProduct(
      value: LiquidityPoolEntryConstantProduct
    ): LiquidityPoolEntryBody;

    value(): LiquidityPoolEntryConstantProduct;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolEntryBody;

    static write(value: LiquidityPoolEntryBody, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolEntryBody): boolean;

    static toXDR(value: LiquidityPoolEntryBody): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LiquidityPoolEntryBody;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolEntryBody;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerEntryExtensionV1Ext {
    switch(): number;

    static 0(): LedgerEntryExtensionV1Ext;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerEntryExtensionV1Ext;

    static write(value: LedgerEntryExtensionV1Ext, io: BrowserBuffer): void;

    static isValid(value: LedgerEntryExtensionV1Ext): boolean;

    static toXDR(value: LedgerEntryExtensionV1Ext): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerEntryExtensionV1Ext;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerEntryExtensionV1Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerEntryData {
    switch(): LedgerEntryType;

    account(value?: AccountEntry): AccountEntry;

    trustLine(value?: TrustLineEntry): TrustLineEntry;

    offer(value?: OfferEntry): OfferEntry;

    data(value?: DataEntry): DataEntry;

    claimableBalance(value?: ClaimableBalanceEntry): ClaimableBalanceEntry;

    liquidityPool(value?: LiquidityPoolEntry): LiquidityPoolEntry;

    static account(value: AccountEntry): LedgerEntryData;

    static trustline(value: TrustLineEntry): LedgerEntryData;

    static offer(value: OfferEntry): LedgerEntryData;

    static data(value: DataEntry): LedgerEntryData;

    static claimableBalance(value: ClaimableBalanceEntry): LedgerEntryData;

    static liquidityPool(value: LiquidityPoolEntry): LedgerEntryData;

    value():
      | AccountEntry
      | TrustLineEntry
      | OfferEntry
      | DataEntry
      | ClaimableBalanceEntry
      | LiquidityPoolEntry;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerEntryData;

    static write(value: LedgerEntryData, io: BrowserBuffer): void;

    static isValid(value: LedgerEntryData): boolean;

    static toXDR(value: LedgerEntryData): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerEntryData;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerEntryData;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerEntryExt {
    switch(): number;

    v1(value?: LedgerEntryExtensionV1): LedgerEntryExtensionV1;

    static 0(): LedgerEntryExt;

    static 1(value: LedgerEntryExtensionV1): LedgerEntryExt;

    value(): LedgerEntryExtensionV1 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerEntryExt;

    static write(value: LedgerEntryExt, io: BrowserBuffer): void;

    static isValid(value: LedgerEntryExt): boolean;

    static toXDR(value: LedgerEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerEntryExt;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerKey {
    switch(): LedgerEntryType;

    account(value?: LedgerKeyAccount): LedgerKeyAccount;

    trustLine(value?: LedgerKeyTrustLine): LedgerKeyTrustLine;

    offer(value?: LedgerKeyOffer): LedgerKeyOffer;

    data(value?: LedgerKeyData): LedgerKeyData;

    claimableBalance(
      value?: LedgerKeyClaimableBalance
    ): LedgerKeyClaimableBalance;

    liquidityPool(value?: LedgerKeyLiquidityPool): LedgerKeyLiquidityPool;

    static account(value: LedgerKeyAccount): LedgerKey;

    static trustline(value: LedgerKeyTrustLine): LedgerKey;

    static offer(value: LedgerKeyOffer): LedgerKey;

    static data(value: LedgerKeyData): LedgerKey;

    static claimableBalance(value: LedgerKeyClaimableBalance): LedgerKey;

    static liquidityPool(value: LedgerKeyLiquidityPool): LedgerKey;

    value():
      | LedgerKeyAccount
      | LedgerKeyTrustLine
      | LedgerKeyOffer
      | LedgerKeyData
      | LedgerKeyClaimableBalance
      | LedgerKeyLiquidityPool;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerKey;

    static write(value: LedgerKey, io: BrowserBuffer): void;

    static isValid(value: LedgerKey): boolean;

    static toXDR(value: LedgerKey): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerKey;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerKey;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class StellarValueExt {
    switch(): StellarValueType;

    lcValueSignature(
      value?: LedgerCloseValueSignature
    ): LedgerCloseValueSignature;

    static stellarValueBasic(): StellarValueExt;

    static stellarValueSigned(
      value: LedgerCloseValueSignature
    ): StellarValueExt;

    value(): LedgerCloseValueSignature | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): StellarValueExt;

    static write(value: StellarValueExt, io: BrowserBuffer): void;

    static isValid(value: StellarValueExt): boolean;

    static toXDR(value: StellarValueExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): StellarValueExt;

    static fromXDR(input: string, format: "hex" | "base64"): StellarValueExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerHeaderExtensionV1Ext {
    switch(): number;

    static 0(): LedgerHeaderExtensionV1Ext;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerHeaderExtensionV1Ext;

    static write(value: LedgerHeaderExtensionV1Ext, io: BrowserBuffer): void;

    static isValid(value: LedgerHeaderExtensionV1Ext): boolean;

    static toXDR(value: LedgerHeaderExtensionV1Ext): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerHeaderExtensionV1Ext;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerHeaderExtensionV1Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerHeaderExt {
    switch(): number;

    v1(value?: LedgerHeaderExtensionV1): LedgerHeaderExtensionV1;

    static 0(): LedgerHeaderExt;

    static 1(value: LedgerHeaderExtensionV1): LedgerHeaderExt;

    value(): LedgerHeaderExtensionV1 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerHeaderExt;

    static write(value: LedgerHeaderExt, io: BrowserBuffer): void;

    static isValid(value: LedgerHeaderExt): boolean;

    static toXDR(value: LedgerHeaderExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerHeaderExt;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerHeaderExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerUpgrade {
    switch(): LedgerUpgradeType;

    newLedgerVersion(value?: number): number;

    newBaseFee(value?: number): number;

    newMaxTxSetSize(value?: number): number;

    newBaseReserve(value?: number): number;

    newFlags(value?: number): number;

    static ledgerUpgradeVersion(value: number): LedgerUpgrade;

    static ledgerUpgradeBaseFee(value: number): LedgerUpgrade;

    static ledgerUpgradeMaxTxSetSize(value: number): LedgerUpgrade;

    static ledgerUpgradeBaseReserve(value: number): LedgerUpgrade;

    static ledgerUpgradeFlags(value: number): LedgerUpgrade;

    value(): number | number | number | number | number;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerUpgrade;

    static write(value: LedgerUpgrade, io: BrowserBuffer): void;

    static isValid(value: LedgerUpgrade): boolean;

    static toXDR(value: LedgerUpgrade): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerUpgrade;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerUpgrade;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class BucketMetadataExt {
    switch(): number;

    static 0(): BucketMetadataExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): BucketMetadataExt;

    static write(value: BucketMetadataExt, io: BrowserBuffer): void;

    static isValid(value: BucketMetadataExt): boolean;

    static toXDR(value: BucketMetadataExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): BucketMetadataExt;

    static fromXDR(input: string, format: "hex" | "base64"): BucketMetadataExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class BucketEntry {
    switch(): BucketEntryType;

    liveEntry(value?: LedgerEntry): LedgerEntry;

    deadEntry(value?: LedgerKey): LedgerKey;

    metaEntry(value?: BucketMetadata): BucketMetadata;

    static liveentry(value: LedgerEntry): BucketEntry;

    static initentry(value: LedgerEntry): BucketEntry;

    static deadentry(value: LedgerKey): BucketEntry;

    static metaentry(value: BucketMetadata): BucketEntry;

    value(): LedgerEntry | LedgerKey | BucketMetadata;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): BucketEntry;

    static write(value: BucketEntry, io: BrowserBuffer): void;

    static isValid(value: BucketEntry): boolean;

    static toXDR(value: BucketEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): BucketEntry;

    static fromXDR(input: string, format: "hex" | "base64"): BucketEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TxSetComponent {
    switch(): TxSetComponentType;

    txsMaybeDiscountedFee(
      value?: TxSetComponentTxsMaybeDiscountedFee
    ): TxSetComponentTxsMaybeDiscountedFee;

    static txsetCompTxsMaybeDiscountedFee(
      value: TxSetComponentTxsMaybeDiscountedFee
    ): TxSetComponent;

    value(): TxSetComponentTxsMaybeDiscountedFee;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TxSetComponent;

    static write(value: TxSetComponent, io: BrowserBuffer): void;

    static isValid(value: TxSetComponent): boolean;

    static toXDR(value: TxSetComponent): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TxSetComponent;

    static fromXDR(input: string, format: "hex" | "base64"): TxSetComponent;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionPhase {
    switch(): number;

    v0Components(value?: TxSetComponent[]): TxSetComponent[];

    static 0(value: TxSetComponent[]): TransactionPhase;

    value(): TxSetComponent[];

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionPhase;

    static write(value: TransactionPhase, io: BrowserBuffer): void;

    static isValid(value: TransactionPhase): boolean;

    static toXDR(value: TransactionPhase): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionPhase;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionPhase;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class GeneralizedTransactionSet {
    switch(): number;

    v1TxSet(value?: TransactionSetV1): TransactionSetV1;

    static 1(value: TransactionSetV1): GeneralizedTransactionSet;

    value(): TransactionSetV1;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): GeneralizedTransactionSet;

    static write(value: GeneralizedTransactionSet, io: BrowserBuffer): void;

    static isValid(value: GeneralizedTransactionSet): boolean;

    static toXDR(value: GeneralizedTransactionSet): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): GeneralizedTransactionSet;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): GeneralizedTransactionSet;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionHistoryEntryExt {
    switch(): number;

    generalizedTxSet(
      value?: GeneralizedTransactionSet
    ): GeneralizedTransactionSet;

    static 0(): TransactionHistoryEntryExt;

    static 1(value: GeneralizedTransactionSet): TransactionHistoryEntryExt;

    value(): GeneralizedTransactionSet | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionHistoryEntryExt;

    static write(value: TransactionHistoryEntryExt, io: BrowserBuffer): void;

    static isValid(value: TransactionHistoryEntryExt): boolean;

    static toXDR(value: TransactionHistoryEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionHistoryEntryExt;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionHistoryEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionHistoryResultEntryExt {
    switch(): number;

    static 0(): TransactionHistoryResultEntryExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionHistoryResultEntryExt;

    static write(value: TransactionHistoryResultEntryExt, io: BrowserBuffer): void;

    static isValid(value: TransactionHistoryResultEntryExt): boolean;

    static toXDR(value: TransactionHistoryResultEntryExt): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): TransactionHistoryResultEntryExt;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionHistoryResultEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerHeaderHistoryEntryExt {
    switch(): number;

    static 0(): LedgerHeaderHistoryEntryExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerHeaderHistoryEntryExt;

    static write(value: LedgerHeaderHistoryEntryExt, io: BrowserBuffer): void;

    static isValid(value: LedgerHeaderHistoryEntryExt): boolean;

    static toXDR(value: LedgerHeaderHistoryEntryExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerHeaderHistoryEntryExt;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LedgerHeaderHistoryEntryExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ScpHistoryEntry {
    switch(): number;

    v0(value?: ScpHistoryEntryV0): ScpHistoryEntryV0;

    static 0(value: ScpHistoryEntryV0): ScpHistoryEntry;

    value(): ScpHistoryEntryV0;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ScpHistoryEntry;

    static write(value: ScpHistoryEntry, io: BrowserBuffer): void;

    static isValid(value: ScpHistoryEntry): boolean;

    static toXDR(value: ScpHistoryEntry): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ScpHistoryEntry;

    static fromXDR(input: string, format: "hex" | "base64"): ScpHistoryEntry;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerEntryChange {
    switch(): LedgerEntryChangeType;

    created(value?: LedgerEntry): LedgerEntry;

    updated(value?: LedgerEntry): LedgerEntry;

    removed(value?: LedgerKey): LedgerKey;

    state(value?: LedgerEntry): LedgerEntry;

    static ledgerEntryCreated(value: LedgerEntry): LedgerEntryChange;

    static ledgerEntryUpdated(value: LedgerEntry): LedgerEntryChange;

    static ledgerEntryRemoved(value: LedgerKey): LedgerEntryChange;

    static ledgerEntryState(value: LedgerEntry): LedgerEntryChange;

    value(): LedgerEntry | LedgerEntry | LedgerKey | LedgerEntry;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerEntryChange;

    static write(value: LedgerEntryChange, io: BrowserBuffer): void;

    static isValid(value: LedgerEntryChange): boolean;

    static toXDR(value: LedgerEntryChange): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerEntryChange;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerEntryChange;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionMeta {
    switch(): number;

    operations(value?: OperationMeta[]): OperationMeta[];

    v1(value?: TransactionMetaV1): TransactionMetaV1;

    v2(value?: TransactionMetaV2): TransactionMetaV2;

    static 0(value: OperationMeta[]): TransactionMeta;

    static 1(value: TransactionMetaV1): TransactionMeta;

    static 2(value: TransactionMetaV2): TransactionMeta;

    value(): OperationMeta[] | TransactionMetaV1 | TransactionMetaV2;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionMeta;

    static write(value: TransactionMeta, io: BrowserBuffer): void;

    static isValid(value: TransactionMeta): boolean;

    static toXDR(value: TransactionMeta): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionMeta;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionMeta;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LedgerCloseMeta {
    switch(): number;

    v0(value?: LedgerCloseMetaV0): LedgerCloseMetaV0;

    v1(value?: LedgerCloseMetaV1): LedgerCloseMetaV1;

    static 0(value: LedgerCloseMetaV0): LedgerCloseMeta;

    static 1(value: LedgerCloseMetaV1): LedgerCloseMeta;

    value(): LedgerCloseMetaV0 | LedgerCloseMetaV1;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LedgerCloseMeta;

    static write(value: LedgerCloseMeta, io: BrowserBuffer): void;

    static isValid(value: LedgerCloseMeta): boolean;

    static toXDR(value: LedgerCloseMeta): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LedgerCloseMeta;

    static fromXDR(input: string, format: "hex" | "base64"): LedgerCloseMeta;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PeerAddressIp {
    switch(): IpAddrType;

    ipv4(value?: BrowserBuffer): BrowserBuffer;

    ipv6(value?: BrowserBuffer): BrowserBuffer;

    static iPv4(value: BrowserBuffer): PeerAddressIp;

    static iPv6(value: BrowserBuffer): PeerAddressIp;

    value(): BrowserBuffer | BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PeerAddressIp;

    static write(value: PeerAddressIp, io: BrowserBuffer): void;

    static isValid(value: PeerAddressIp): boolean;

    static toXDR(value: PeerAddressIp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PeerAddressIp;

    static fromXDR(input: string, format: "hex" | "base64"): PeerAddressIp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SurveyResponseBody {
    switch(): SurveyMessageCommandType;

    topologyResponseBody(value?: TopologyResponseBody): TopologyResponseBody;

    static surveyTopology(value: TopologyResponseBody): SurveyResponseBody;

    value(): TopologyResponseBody;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SurveyResponseBody;

    static write(value: SurveyResponseBody, io: BrowserBuffer): void;

    static isValid(value: SurveyResponseBody): boolean;

    static toXDR(value: SurveyResponseBody): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SurveyResponseBody;

    static fromXDR(input: string, format: "hex" | "base64"): SurveyResponseBody;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class StellarMessage {
    switch(): MessageType;

    error(value?: Error): Error;

    hello(value?: Hello): Hello;

    auth(value?: Auth): Auth;

    dontHave(value?: DontHave): DontHave;

    peers(value?: PeerAddress[]): PeerAddress[];

    txSetHash(value?: BrowserBuffer): BrowserBuffer;

    txSet(value?: TransactionSet): TransactionSet;

    generalizedTxSet(
      value?: GeneralizedTransactionSet
    ): GeneralizedTransactionSet;

    transaction(value?: TransactionEnvelope): TransactionEnvelope;

    signedSurveyRequestMessage(
      value?: SignedSurveyRequestMessage
    ): SignedSurveyRequestMessage;

    signedSurveyResponseMessage(
      value?: SignedSurveyResponseMessage
    ): SignedSurveyResponseMessage;

    qSetHash(value?: BrowserBuffer): BrowserBuffer;

    qSet(value?: ScpQuorumSet): ScpQuorumSet;

    envelope(value?: ScpEnvelope): ScpEnvelope;

    getScpLedgerSeq(value?: number): number;

    sendMoreMessage(value?: SendMore): SendMore;

    floodAdvert(value?: FloodAdvert): FloodAdvert;

    floodDemand(value?: FloodDemand): FloodDemand;

    static errorMsg(value: Error): StellarMessage;

    static hello(value: Hello): StellarMessage;

    static auth(value: Auth): StellarMessage;

    static dontHave(value: DontHave): StellarMessage;

    static getPeers(): StellarMessage;

    static peers(value: PeerAddress[]): StellarMessage;

    static getTxSet(value: BrowserBuffer): StellarMessage;

    static txSet(value: TransactionSet): StellarMessage;

    static generalizedTxSet(value: GeneralizedTransactionSet): StellarMessage;

    static transaction(value: TransactionEnvelope): StellarMessage;

    static surveyRequest(value: SignedSurveyRequestMessage): StellarMessage;

    static surveyResponse(value: SignedSurveyResponseMessage): StellarMessage;

    static getScpQuorumset(value: BrowserBuffer): StellarMessage;

    static scpQuorumset(value: ScpQuorumSet): StellarMessage;

    static scpMessage(value: ScpEnvelope): StellarMessage;

    static getScpState(value: number): StellarMessage;

    static sendMore(value: SendMore): StellarMessage;

    static floodAdvert(value: FloodAdvert): StellarMessage;

    static floodDemand(value: FloodDemand): StellarMessage;

    value():
      | Error
      | Hello
      | Auth
      | DontHave
      | PeerAddress[]
      | BrowserBuffer
      | TransactionSet
      | GeneralizedTransactionSet
      | TransactionEnvelope
      | SignedSurveyRequestMessage
      | SignedSurveyResponseMessage
      | BrowserBuffer
      | ScpQuorumSet
      | ScpEnvelope
      | number
      | SendMore
      | FloodAdvert
      | FloodDemand
      | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): StellarMessage;

    static write(value: StellarMessage, io: BrowserBuffer): void;

    static isValid(value: StellarMessage): boolean;

    static toXDR(value: StellarMessage): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): StellarMessage;

    static fromXDR(input: string, format: "hex" | "base64"): StellarMessage;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AuthenticatedMessage {
    switch(): number;

    v0(value?: AuthenticatedMessageV0): AuthenticatedMessageV0;

    static 0(value: AuthenticatedMessageV0): AuthenticatedMessage;

    value(): AuthenticatedMessageV0;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AuthenticatedMessage;

    static write(value: AuthenticatedMessage, io: BrowserBuffer): void;

    static isValid(value: AuthenticatedMessage): boolean;

    static toXDR(value: AuthenticatedMessage): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AuthenticatedMessage;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): AuthenticatedMessage;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolParameters {
    switch(): LiquidityPoolType;

    constantProduct(
      value?: LiquidityPoolConstantProductParameters
    ): LiquidityPoolConstantProductParameters;

    static liquidityPoolConstantProduct(
      value: LiquidityPoolConstantProductParameters
    ): LiquidityPoolParameters;

    value(): LiquidityPoolConstantProductParameters;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolParameters;

    static write(value: LiquidityPoolParameters, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolParameters): boolean;

    static toXDR(value: LiquidityPoolParameters): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LiquidityPoolParameters;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolParameters;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class MuxedAccount {
    switch(): CryptoKeyType;

    ed25519(value?: BrowserBuffer): BrowserBuffer;

    med25519(value?: MuxedAccountMed25519): MuxedAccountMed25519;

    static keyTypeEd25519(value: BrowserBuffer): MuxedAccount;

    static keyTypeMuxedEd25519(value: MuxedAccountMed25519): MuxedAccount;

    value(): BrowserBuffer | MuxedAccountMed25519;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): MuxedAccount;

    static write(value: MuxedAccount, io: BrowserBuffer): void;

    static isValid(value: MuxedAccount): boolean;

    static toXDR(value: MuxedAccount): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): MuxedAccount;

    static fromXDR(input: string, format: "hex" | "base64"): MuxedAccount;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ChangeTrustAsset {
    switch(): AssetType;

    alphaNum4(value?: AlphaNum4): AlphaNum4;

    alphaNum12(value?: AlphaNum12): AlphaNum12;

    liquidityPool(value?: LiquidityPoolParameters): LiquidityPoolParameters;

    static assetTypeNative(): ChangeTrustAsset;

    static assetTypeCreditAlphanum4(value: AlphaNum4): ChangeTrustAsset;

    static assetTypeCreditAlphanum12(value: AlphaNum12): ChangeTrustAsset;

    static assetTypePoolShare(value: LiquidityPoolParameters): ChangeTrustAsset;

    value(): AlphaNum4 | AlphaNum12 | LiquidityPoolParameters | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ChangeTrustAsset;

    static write(value: ChangeTrustAsset, io: BrowserBuffer): void;

    static isValid(value: ChangeTrustAsset): boolean;

    static toXDR(value: ChangeTrustAsset): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ChangeTrustAsset;

    static fromXDR(input: string, format: "hex" | "base64"): ChangeTrustAsset;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class RevokeSponsorshipOp {
    switch(): RevokeSponsorshipType;

    ledgerKey(value?: LedgerKey): LedgerKey;

    signer(value?: RevokeSponsorshipOpSigner): RevokeSponsorshipOpSigner;

    static revokeSponsorshipLedgerEntry(value: LedgerKey): RevokeSponsorshipOp;

    static revokeSponsorshipSigner(
      value: RevokeSponsorshipOpSigner
    ): RevokeSponsorshipOp;

    value(): LedgerKey | RevokeSponsorshipOpSigner;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): RevokeSponsorshipOp;

    static write(value: RevokeSponsorshipOp, io: BrowserBuffer): void;

    static isValid(value: RevokeSponsorshipOp): boolean;

    static toXDR(value: RevokeSponsorshipOp): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): RevokeSponsorshipOp;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): RevokeSponsorshipOp;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class OperationBody {
    switch(): OperationType;

    createAccountOp(value?: CreateAccountOp): CreateAccountOp;

    paymentOp(value?: PaymentOp): PaymentOp;

    pathPaymentStrictReceiveOp(
      value?: PathPaymentStrictReceiveOp
    ): PathPaymentStrictReceiveOp;

    manageSellOfferOp(value?: ManageSellOfferOp): ManageSellOfferOp;

    createPassiveSellOfferOp(
      value?: CreatePassiveSellOfferOp
    ): CreatePassiveSellOfferOp;

    setOptionsOp(value?: SetOptionsOp): SetOptionsOp;

    changeTrustOp(value?: ChangeTrustOp): ChangeTrustOp;

    allowTrustOp(value?: AllowTrustOp): AllowTrustOp;

    destination(value?: MuxedAccount): MuxedAccount;

    manageDataOp(value?: ManageDataOp): ManageDataOp;

    bumpSequenceOp(value?: BumpSequenceOp): BumpSequenceOp;

    manageBuyOfferOp(value?: ManageBuyOfferOp): ManageBuyOfferOp;

    pathPaymentStrictSendOp(
      value?: PathPaymentStrictSendOp
    ): PathPaymentStrictSendOp;

    createClaimableBalanceOp(
      value?: CreateClaimableBalanceOp
    ): CreateClaimableBalanceOp;

    claimClaimableBalanceOp(
      value?: ClaimClaimableBalanceOp
    ): ClaimClaimableBalanceOp;

    beginSponsoringFutureReservesOp(
      value?: BeginSponsoringFutureReservesOp
    ): BeginSponsoringFutureReservesOp;

    revokeSponsorshipOp(value?: RevokeSponsorshipOp): RevokeSponsorshipOp;

    clawbackOp(value?: ClawbackOp): ClawbackOp;

    clawbackClaimableBalanceOp(
      value?: ClawbackClaimableBalanceOp
    ): ClawbackClaimableBalanceOp;

    setTrustLineFlagsOp(value?: SetTrustLineFlagsOp): SetTrustLineFlagsOp;

    liquidityPoolDepositOp(
      value?: LiquidityPoolDepositOp
    ): LiquidityPoolDepositOp;

    liquidityPoolWithdrawOp(
      value?: LiquidityPoolWithdrawOp
    ): LiquidityPoolWithdrawOp;

    static createAccount(value: CreateAccountOp): OperationBody;

    static payment(value: PaymentOp): OperationBody;

    static pathPaymentStrictReceive(
      value: PathPaymentStrictReceiveOp
    ): OperationBody;

    static manageSellOffer(value: ManageSellOfferOp): OperationBody;

    static createPassiveSellOffer(
      value: CreatePassiveSellOfferOp
    ): OperationBody;

    static setOptions(value: SetOptionsOp): OperationBody;

    static changeTrust(value: ChangeTrustOp): OperationBody;

    static allowTrust(value: AllowTrustOp): OperationBody;

    static accountMerge(value: MuxedAccount): OperationBody;

    static inflation(): OperationBody;

    static manageData(value: ManageDataOp): OperationBody;

    static bumpSequence(value: BumpSequenceOp): OperationBody;

    static manageBuyOffer(value: ManageBuyOfferOp): OperationBody;

    static pathPaymentStrictSend(value: PathPaymentStrictSendOp): OperationBody;

    static createClaimableBalance(
      value: CreateClaimableBalanceOp
    ): OperationBody;

    static claimClaimableBalance(value: ClaimClaimableBalanceOp): OperationBody;

    static beginSponsoringFutureReserves(
      value: BeginSponsoringFutureReservesOp
    ): OperationBody;

    static endSponsoringFutureReserves(): OperationBody;

    static revokeSponsorship(value: RevokeSponsorshipOp): OperationBody;

    static clawback(value: ClawbackOp): OperationBody;

    static clawbackClaimableBalance(
      value: ClawbackClaimableBalanceOp
    ): OperationBody;

    static setTrustLineFlags(value: SetTrustLineFlagsOp): OperationBody;

    static liquidityPoolDeposit(value: LiquidityPoolDepositOp): OperationBody;

    static liquidityPoolWithdraw(value: LiquidityPoolWithdrawOp): OperationBody;

    value():
      | CreateAccountOp
      | PaymentOp
      | PathPaymentStrictReceiveOp
      | ManageSellOfferOp
      | CreatePassiveSellOfferOp
      | SetOptionsOp
      | ChangeTrustOp
      | AllowTrustOp
      | MuxedAccount
      | ManageDataOp
      | BumpSequenceOp
      | ManageBuyOfferOp
      | PathPaymentStrictSendOp
      | CreateClaimableBalanceOp
      | ClaimClaimableBalanceOp
      | BeginSponsoringFutureReservesOp
      | RevokeSponsorshipOp
      | ClawbackOp
      | ClawbackClaimableBalanceOp
      | SetTrustLineFlagsOp
      | LiquidityPoolDepositOp
      | LiquidityPoolWithdrawOp
      | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): OperationBody;

    static write(value: OperationBody, io: BrowserBuffer): void;

    static isValid(value: OperationBody): boolean;

    static toXDR(value: OperationBody): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): OperationBody;

    static fromXDR(input: string, format: "hex" | "base64"): OperationBody;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class HashIdPreimage {
    switch(): EnvelopeType;

    operationId(value?: HashIdPreimageOperationId): HashIdPreimageOperationId;

    revokeId(value?: HashIdPreimageRevokeId): HashIdPreimageRevokeId;

    static envelopeTypeOpId(value: HashIdPreimageOperationId): HashIdPreimage;

    static envelopeTypePoolRevokeOpId(
      value: HashIdPreimageRevokeId
    ): HashIdPreimage;

    value(): HashIdPreimageOperationId | HashIdPreimageRevokeId;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): HashIdPreimage;

    static write(value: HashIdPreimage, io: BrowserBuffer): void;

    static isValid(value: HashIdPreimage): boolean;

    static toXDR(value: HashIdPreimage): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): HashIdPreimage;

    static fromXDR(input: string, format: "hex" | "base64"): HashIdPreimage;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Memo {
    switch(): MemoType;

    text(value?: string | BrowserBuffer): string | BrowserBuffer;

    id(value?: Uint64): Uint64;

    hash(value?: BrowserBuffer): BrowserBuffer;

    retHash(value?: BrowserBuffer): BrowserBuffer;

    static memoNone(): Memo;

    static memoText(value: string | BrowserBuffer): Memo;

    static memoId(value: Uint64): Memo;

    static memoHash(value: BrowserBuffer): Memo;

    static memoReturn(value: BrowserBuffer): Memo;

    value(): string | BrowserBuffer | Uint64 | BrowserBuffer | BrowserBuffer | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Memo;

    static write(value: Memo, io: BrowserBuffer): void;

    static isValid(value: Memo): boolean;

    static toXDR(value: Memo): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Memo;

    static fromXDR(input: string, format: "hex" | "base64"): Memo;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class Preconditions {
    switch(): PreconditionType;

    timeBounds(value?: TimeBounds): TimeBounds;

    v2(value?: PreconditionsV2): PreconditionsV2;

    static precondNone(): Preconditions;

    static precondTime(value: TimeBounds): Preconditions;

    static precondV2(value: PreconditionsV2): Preconditions;

    value(): TimeBounds | PreconditionsV2 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): Preconditions;

    static write(value: Preconditions, io: BrowserBuffer): void;

    static isValid(value: Preconditions): boolean;

    static toXDR(value: Preconditions): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): Preconditions;

    static fromXDR(input: string, format: "hex" | "base64"): Preconditions;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionV0Ext {
    switch(): number;

    static 0(): TransactionV0Ext;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionV0Ext;

    static write(value: TransactionV0Ext, io: BrowserBuffer): void;

    static isValid(value: TransactionV0Ext): boolean;

    static toXDR(value: TransactionV0Ext): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionV0Ext;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionV0Ext;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionExt {
    switch(): number;

    static 0(): TransactionExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionExt;

    static write(value: TransactionExt, io: BrowserBuffer): void;

    static isValid(value: TransactionExt): boolean;

    static toXDR(value: TransactionExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionExt;

    static fromXDR(input: string, format: "hex" | "base64"): TransactionExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class FeeBumpTransactionInnerTx {
    switch(): EnvelopeType;

    v1(value?: TransactionV1Envelope): TransactionV1Envelope;

    static envelopeTypeTx(
      value: TransactionV1Envelope
    ): FeeBumpTransactionInnerTx;

    value(): TransactionV1Envelope;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): FeeBumpTransactionInnerTx;

    static write(value: FeeBumpTransactionInnerTx, io: BrowserBuffer): void;

    static isValid(value: FeeBumpTransactionInnerTx): boolean;

    static toXDR(value: FeeBumpTransactionInnerTx): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): FeeBumpTransactionInnerTx;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): FeeBumpTransactionInnerTx;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class FeeBumpTransactionExt {
    switch(): number;

    static 0(): FeeBumpTransactionExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): FeeBumpTransactionExt;

    static write(value: FeeBumpTransactionExt, io: BrowserBuffer): void;

    static isValid(value: FeeBumpTransactionExt): boolean;

    static toXDR(value: FeeBumpTransactionExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): FeeBumpTransactionExt;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): FeeBumpTransactionExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionEnvelope {
    switch(): EnvelopeType;

    v0(value?: TransactionV0Envelope): TransactionV0Envelope;

    v1(value?: TransactionV1Envelope): TransactionV1Envelope;

    feeBump(value?: FeeBumpTransactionEnvelope): FeeBumpTransactionEnvelope;

    static envelopeTypeTxV0(value: TransactionV0Envelope): TransactionEnvelope;

    static envelopeTypeTx(value: TransactionV1Envelope): TransactionEnvelope;

    static envelopeTypeTxFeeBump(
      value: FeeBumpTransactionEnvelope
    ): TransactionEnvelope;

    value():
      | TransactionV0Envelope
      | TransactionV1Envelope
      | FeeBumpTransactionEnvelope;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionEnvelope;

    static write(value: TransactionEnvelope, io: BrowserBuffer): void;

    static isValid(value: TransactionEnvelope): boolean;

    static toXDR(value: TransactionEnvelope): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionEnvelope;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionEnvelope;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionSignaturePayloadTaggedTransaction {
    switch(): EnvelopeType;

    tx(value?: Transaction): Transaction;

    feeBump(value?: FeeBumpTransaction): FeeBumpTransaction;

    static envelopeTypeTx(
      value: Transaction
    ): TransactionSignaturePayloadTaggedTransaction;

    static envelopeTypeTxFeeBump(
      value: FeeBumpTransaction
    ): TransactionSignaturePayloadTaggedTransaction;

    value(): Transaction | FeeBumpTransaction;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionSignaturePayloadTaggedTransaction;

    static write(
      value: TransactionSignaturePayloadTaggedTransaction,
      io: BrowserBuffer
    ): void;

    static isValid(
      value: TransactionSignaturePayloadTaggedTransaction
    ): boolean;

    static toXDR(value: TransactionSignaturePayloadTaggedTransaction): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): TransactionSignaturePayloadTaggedTransaction;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionSignaturePayloadTaggedTransaction;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimAtom {
    switch(): ClaimAtomType;

    v0(value?: ClaimOfferAtomV0): ClaimOfferAtomV0;

    orderBook(value?: ClaimOfferAtom): ClaimOfferAtom;

    liquidityPool(value?: ClaimLiquidityAtom): ClaimLiquidityAtom;

    static claimAtomTypeV0(value: ClaimOfferAtomV0): ClaimAtom;

    static claimAtomTypeOrderBook(value: ClaimOfferAtom): ClaimAtom;

    static claimAtomTypeLiquidityPool(value: ClaimLiquidityAtom): ClaimAtom;

    value(): ClaimOfferAtomV0 | ClaimOfferAtom | ClaimLiquidityAtom;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimAtom;

    static write(value: ClaimAtom, io: BrowserBuffer): void;

    static isValid(value: ClaimAtom): boolean;

    static toXDR(value: ClaimAtom): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimAtom;

    static fromXDR(input: string, format: "hex" | "base64"): ClaimAtom;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class CreateAccountResult {
    switch(): CreateAccountResultCode;

    static createAccountSuccess(): CreateAccountResult;

    static createAccountMalformed(): CreateAccountResult;

    static createAccountUnderfunded(): CreateAccountResult;

    static createAccountLowReserve(): CreateAccountResult;

    static createAccountAlreadyExist(): CreateAccountResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): CreateAccountResult;

    static write(value: CreateAccountResult, io: BrowserBuffer): void;

    static isValid(value: CreateAccountResult): boolean;

    static toXDR(value: CreateAccountResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): CreateAccountResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): CreateAccountResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PaymentResult {
    switch(): PaymentResultCode;

    static paymentSuccess(): PaymentResult;

    static paymentMalformed(): PaymentResult;

    static paymentUnderfunded(): PaymentResult;

    static paymentSrcNoTrust(): PaymentResult;

    static paymentSrcNotAuthorized(): PaymentResult;

    static paymentNoDestination(): PaymentResult;

    static paymentNoTrust(): PaymentResult;

    static paymentNotAuthorized(): PaymentResult;

    static paymentLineFull(): PaymentResult;

    static paymentNoIssuer(): PaymentResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PaymentResult;

    static write(value: PaymentResult, io: BrowserBuffer): void;

    static isValid(value: PaymentResult): boolean;

    static toXDR(value: PaymentResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PaymentResult;

    static fromXDR(input: string, format: "hex" | "base64"): PaymentResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PathPaymentStrictReceiveResult {
    switch(): PathPaymentStrictReceiveResultCode;

    success(
      value?: PathPaymentStrictReceiveResultSuccess
    ): PathPaymentStrictReceiveResultSuccess;

    noIssuer(value?: Asset): Asset;

    static pathPaymentStrictReceiveSuccess(
      value: PathPaymentStrictReceiveResultSuccess
    ): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveMalformed(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveUnderfunded(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveSrcNoTrust(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveSrcNotAuthorized(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveNoDestination(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveNoTrust(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveNotAuthorized(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveLineFull(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveNoIssuer(
      value: Asset
    ): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveTooFewOffers(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveOfferCrossSelf(): PathPaymentStrictReceiveResult;

    static pathPaymentStrictReceiveOverSendmax(): PathPaymentStrictReceiveResult;

    value(): PathPaymentStrictReceiveResultSuccess | Asset | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PathPaymentStrictReceiveResult;

    static write(value: PathPaymentStrictReceiveResult, io: BrowserBuffer): void;

    static isValid(value: PathPaymentStrictReceiveResult): boolean;

    static toXDR(value: PathPaymentStrictReceiveResult): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): PathPaymentStrictReceiveResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): PathPaymentStrictReceiveResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PathPaymentStrictSendResult {
    switch(): PathPaymentStrictSendResultCode;

    success(
      value?: PathPaymentStrictSendResultSuccess
    ): PathPaymentStrictSendResultSuccess;

    noIssuer(value?: Asset): Asset;

    static pathPaymentStrictSendSuccess(
      value: PathPaymentStrictSendResultSuccess
    ): PathPaymentStrictSendResult;

    static pathPaymentStrictSendMalformed(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendUnderfunded(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendSrcNoTrust(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendSrcNotAuthorized(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendNoDestination(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendNoTrust(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendNotAuthorized(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendLineFull(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendNoIssuer(
      value: Asset
    ): PathPaymentStrictSendResult;

    static pathPaymentStrictSendTooFewOffers(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendOfferCrossSelf(): PathPaymentStrictSendResult;

    static pathPaymentStrictSendUnderDestmin(): PathPaymentStrictSendResult;

    value(): PathPaymentStrictSendResultSuccess | Asset | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PathPaymentStrictSendResult;

    static write(value: PathPaymentStrictSendResult, io: BrowserBuffer): void;

    static isValid(value: PathPaymentStrictSendResult): boolean;

    static toXDR(value: PathPaymentStrictSendResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PathPaymentStrictSendResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): PathPaymentStrictSendResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageOfferSuccessResultOffer {
    switch(): ManageOfferEffect;

    offer(value?: OfferEntry): OfferEntry;

    static manageOfferCreated(value: OfferEntry): ManageOfferSuccessResultOffer;

    static manageOfferUpdated(value: OfferEntry): ManageOfferSuccessResultOffer;

    static manageOfferDeleted(): ManageOfferSuccessResultOffer;

    value(): OfferEntry | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageOfferSuccessResultOffer;

    static write(value: ManageOfferSuccessResultOffer, io: BrowserBuffer): void;

    static isValid(value: ManageOfferSuccessResultOffer): boolean;

    static toXDR(value: ManageOfferSuccessResultOffer): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): ManageOfferSuccessResultOffer;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ManageOfferSuccessResultOffer;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageSellOfferResult {
    switch(): ManageSellOfferResultCode;

    success(value?: ManageOfferSuccessResult): ManageOfferSuccessResult;

    static manageSellOfferSuccess(
      value: ManageOfferSuccessResult
    ): ManageSellOfferResult;

    static manageSellOfferMalformed(): ManageSellOfferResult;

    static manageSellOfferSellNoTrust(): ManageSellOfferResult;

    static manageSellOfferBuyNoTrust(): ManageSellOfferResult;

    static manageSellOfferSellNotAuthorized(): ManageSellOfferResult;

    static manageSellOfferBuyNotAuthorized(): ManageSellOfferResult;

    static manageSellOfferLineFull(): ManageSellOfferResult;

    static manageSellOfferUnderfunded(): ManageSellOfferResult;

    static manageSellOfferCrossSelf(): ManageSellOfferResult;

    static manageSellOfferSellNoIssuer(): ManageSellOfferResult;

    static manageSellOfferBuyNoIssuer(): ManageSellOfferResult;

    static manageSellOfferNotFound(): ManageSellOfferResult;

    static manageSellOfferLowReserve(): ManageSellOfferResult;

    value(): ManageOfferSuccessResult | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageSellOfferResult;

    static write(value: ManageSellOfferResult, io: BrowserBuffer): void;

    static isValid(value: ManageSellOfferResult): boolean;

    static toXDR(value: ManageSellOfferResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ManageSellOfferResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ManageSellOfferResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageBuyOfferResult {
    switch(): ManageBuyOfferResultCode;

    success(value?: ManageOfferSuccessResult): ManageOfferSuccessResult;

    static manageBuyOfferSuccess(
      value: ManageOfferSuccessResult
    ): ManageBuyOfferResult;

    static manageBuyOfferMalformed(): ManageBuyOfferResult;

    static manageBuyOfferSellNoTrust(): ManageBuyOfferResult;

    static manageBuyOfferBuyNoTrust(): ManageBuyOfferResult;

    static manageBuyOfferSellNotAuthorized(): ManageBuyOfferResult;

    static manageBuyOfferBuyNotAuthorized(): ManageBuyOfferResult;

    static manageBuyOfferLineFull(): ManageBuyOfferResult;

    static manageBuyOfferUnderfunded(): ManageBuyOfferResult;

    static manageBuyOfferCrossSelf(): ManageBuyOfferResult;

    static manageBuyOfferSellNoIssuer(): ManageBuyOfferResult;

    static manageBuyOfferBuyNoIssuer(): ManageBuyOfferResult;

    static manageBuyOfferNotFound(): ManageBuyOfferResult;

    static manageBuyOfferLowReserve(): ManageBuyOfferResult;

    value(): ManageOfferSuccessResult | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageBuyOfferResult;

    static write(value: ManageBuyOfferResult, io: BrowserBuffer): void;

    static isValid(value: ManageBuyOfferResult): boolean;

    static toXDR(value: ManageBuyOfferResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ManageBuyOfferResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ManageBuyOfferResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SetOptionsResult {
    switch(): SetOptionsResultCode;

    static setOptionsSuccess(): SetOptionsResult;

    static setOptionsLowReserve(): SetOptionsResult;

    static setOptionsTooManySigners(): SetOptionsResult;

    static setOptionsBadFlags(): SetOptionsResult;

    static setOptionsInvalidInflation(): SetOptionsResult;

    static setOptionsCantChange(): SetOptionsResult;

    static setOptionsUnknownFlag(): SetOptionsResult;

    static setOptionsThresholdOutOfRange(): SetOptionsResult;

    static setOptionsBadSigner(): SetOptionsResult;

    static setOptionsInvalidHomeDomain(): SetOptionsResult;

    static setOptionsAuthRevocableRequired(): SetOptionsResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SetOptionsResult;

    static write(value: SetOptionsResult, io: BrowserBuffer): void;

    static isValid(value: SetOptionsResult): boolean;

    static toXDR(value: SetOptionsResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SetOptionsResult;

    static fromXDR(input: string, format: "hex" | "base64"): SetOptionsResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ChangeTrustResult {
    switch(): ChangeTrustResultCode;

    static changeTrustSuccess(): ChangeTrustResult;

    static changeTrustMalformed(): ChangeTrustResult;

    static changeTrustNoIssuer(): ChangeTrustResult;

    static changeTrustInvalidLimit(): ChangeTrustResult;

    static changeTrustLowReserve(): ChangeTrustResult;

    static changeTrustSelfNotAllowed(): ChangeTrustResult;

    static changeTrustTrustLineMissing(): ChangeTrustResult;

    static changeTrustCannotDelete(): ChangeTrustResult;

    static changeTrustNotAuthMaintainLiabilities(): ChangeTrustResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ChangeTrustResult;

    static write(value: ChangeTrustResult, io: BrowserBuffer): void;

    static isValid(value: ChangeTrustResult): boolean;

    static toXDR(value: ChangeTrustResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ChangeTrustResult;

    static fromXDR(input: string, format: "hex" | "base64"): ChangeTrustResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AllowTrustResult {
    switch(): AllowTrustResultCode;

    static allowTrustSuccess(): AllowTrustResult;

    static allowTrustMalformed(): AllowTrustResult;

    static allowTrustNoTrustLine(): AllowTrustResult;

    static allowTrustTrustNotRequired(): AllowTrustResult;

    static allowTrustCantRevoke(): AllowTrustResult;

    static allowTrustSelfNotAllowed(): AllowTrustResult;

    static allowTrustLowReserve(): AllowTrustResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AllowTrustResult;

    static write(value: AllowTrustResult, io: BrowserBuffer): void;

    static isValid(value: AllowTrustResult): boolean;

    static toXDR(value: AllowTrustResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AllowTrustResult;

    static fromXDR(input: string, format: "hex" | "base64"): AllowTrustResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class AccountMergeResult {
    switch(): AccountMergeResultCode;

    sourceAccountBalance(value?: Int64): Int64;

    static accountMergeSuccess(value: Int64): AccountMergeResult;

    static accountMergeMalformed(): AccountMergeResult;

    static accountMergeNoAccount(): AccountMergeResult;

    static accountMergeImmutableSet(): AccountMergeResult;

    static accountMergeHasSubEntries(): AccountMergeResult;

    static accountMergeSeqnumTooFar(): AccountMergeResult;

    static accountMergeDestFull(): AccountMergeResult;

    static accountMergeIsSponsor(): AccountMergeResult;

    value(): Int64 | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): AccountMergeResult;

    static write(value: AccountMergeResult, io: BrowserBuffer): void;

    static isValid(value: AccountMergeResult): boolean;

    static toXDR(value: AccountMergeResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): AccountMergeResult;

    static fromXDR(input: string, format: "hex" | "base64"): AccountMergeResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class InflationResult {
    switch(): InflationResultCode;

    payouts(value?: InflationPayout[]): InflationPayout[];

    static inflationSuccess(value: InflationPayout[]): InflationResult;

    static inflationNotTime(): InflationResult;

    value(): InflationPayout[] | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): InflationResult;

    static write(value: InflationResult, io: BrowserBuffer): void;

    static isValid(value: InflationResult): boolean;

    static toXDR(value: InflationResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): InflationResult;

    static fromXDR(input: string, format: "hex" | "base64"): InflationResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ManageDataResult {
    switch(): ManageDataResultCode;

    static manageDataSuccess(): ManageDataResult;

    static manageDataNotSupportedYet(): ManageDataResult;

    static manageDataNameNotFound(): ManageDataResult;

    static manageDataLowReserve(): ManageDataResult;

    static manageDataInvalidName(): ManageDataResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ManageDataResult;

    static write(value: ManageDataResult, io: BrowserBuffer): void;

    static isValid(value: ManageDataResult): boolean;

    static toXDR(value: ManageDataResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ManageDataResult;

    static fromXDR(input: string, format: "hex" | "base64"): ManageDataResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class BumpSequenceResult {
    switch(): BumpSequenceResultCode;

    static bumpSequenceSuccess(): BumpSequenceResult;

    static bumpSequenceBadSeq(): BumpSequenceResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): BumpSequenceResult;

    static write(value: BumpSequenceResult, io: BrowserBuffer): void;

    static isValid(value: BumpSequenceResult): boolean;

    static toXDR(value: BumpSequenceResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): BumpSequenceResult;

    static fromXDR(input: string, format: "hex" | "base64"): BumpSequenceResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class CreateClaimableBalanceResult {
    switch(): CreateClaimableBalanceResultCode;

    balanceId(value?: ClaimableBalanceId): ClaimableBalanceId;

    static createClaimableBalanceSuccess(
      value: ClaimableBalanceId
    ): CreateClaimableBalanceResult;

    static createClaimableBalanceMalformed(): CreateClaimableBalanceResult;

    static createClaimableBalanceLowReserve(): CreateClaimableBalanceResult;

    static createClaimableBalanceNoTrust(): CreateClaimableBalanceResult;

    static createClaimableBalanceNotAuthorized(): CreateClaimableBalanceResult;

    static createClaimableBalanceUnderfunded(): CreateClaimableBalanceResult;

    value(): ClaimableBalanceId | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): CreateClaimableBalanceResult;

    static write(value: CreateClaimableBalanceResult, io: BrowserBuffer): void;

    static isValid(value: CreateClaimableBalanceResult): boolean;

    static toXDR(value: CreateClaimableBalanceResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): CreateClaimableBalanceResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): CreateClaimableBalanceResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClaimClaimableBalanceResult {
    switch(): ClaimClaimableBalanceResultCode;

    static claimClaimableBalanceSuccess(): ClaimClaimableBalanceResult;

    static claimClaimableBalanceDoesNotExist(): ClaimClaimableBalanceResult;

    static claimClaimableBalanceCannotClaim(): ClaimClaimableBalanceResult;

    static claimClaimableBalanceLineFull(): ClaimClaimableBalanceResult;

    static claimClaimableBalanceNoTrust(): ClaimClaimableBalanceResult;

    static claimClaimableBalanceNotAuthorized(): ClaimClaimableBalanceResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClaimClaimableBalanceResult;

    static write(value: ClaimClaimableBalanceResult, io: BrowserBuffer): void;

    static isValid(value: ClaimClaimableBalanceResult): boolean;

    static toXDR(value: ClaimClaimableBalanceResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClaimClaimableBalanceResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClaimClaimableBalanceResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class BeginSponsoringFutureReservesResult {
    switch(): BeginSponsoringFutureReservesResultCode;

    static beginSponsoringFutureReservesSuccess(): BeginSponsoringFutureReservesResult;

    static beginSponsoringFutureReservesMalformed(): BeginSponsoringFutureReservesResult;

    static beginSponsoringFutureReservesAlreadySponsored(): BeginSponsoringFutureReservesResult;

    static beginSponsoringFutureReservesRecursive(): BeginSponsoringFutureReservesResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): BeginSponsoringFutureReservesResult;

    static write(value: BeginSponsoringFutureReservesResult, io: BrowserBuffer): void;

    static isValid(value: BeginSponsoringFutureReservesResult): boolean;

    static toXDR(value: BeginSponsoringFutureReservesResult): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): BeginSponsoringFutureReservesResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): BeginSponsoringFutureReservesResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class EndSponsoringFutureReservesResult {
    switch(): EndSponsoringFutureReservesResultCode;

    static endSponsoringFutureReservesSuccess(): EndSponsoringFutureReservesResult;

    static endSponsoringFutureReservesNotSponsored(): EndSponsoringFutureReservesResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): EndSponsoringFutureReservesResult;

    static write(value: EndSponsoringFutureReservesResult, io: BrowserBuffer): void;

    static isValid(value: EndSponsoringFutureReservesResult): boolean;

    static toXDR(value: EndSponsoringFutureReservesResult): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): EndSponsoringFutureReservesResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): EndSponsoringFutureReservesResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class RevokeSponsorshipResult {
    switch(): RevokeSponsorshipResultCode;

    static revokeSponsorshipSuccess(): RevokeSponsorshipResult;

    static revokeSponsorshipDoesNotExist(): RevokeSponsorshipResult;

    static revokeSponsorshipNotSponsor(): RevokeSponsorshipResult;

    static revokeSponsorshipLowReserve(): RevokeSponsorshipResult;

    static revokeSponsorshipOnlyTransferable(): RevokeSponsorshipResult;

    static revokeSponsorshipMalformed(): RevokeSponsorshipResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): RevokeSponsorshipResult;

    static write(value: RevokeSponsorshipResult, io: BrowserBuffer): void;

    static isValid(value: RevokeSponsorshipResult): boolean;

    static toXDR(value: RevokeSponsorshipResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): RevokeSponsorshipResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): RevokeSponsorshipResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClawbackResult {
    switch(): ClawbackResultCode;

    static clawbackSuccess(): ClawbackResult;

    static clawbackMalformed(): ClawbackResult;

    static clawbackNotClawbackEnabled(): ClawbackResult;

    static clawbackNoTrust(): ClawbackResult;

    static clawbackUnderfunded(): ClawbackResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClawbackResult;

    static write(value: ClawbackResult, io: BrowserBuffer): void;

    static isValid(value: ClawbackResult): boolean;

    static toXDR(value: ClawbackResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ClawbackResult;

    static fromXDR(input: string, format: "hex" | "base64"): ClawbackResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ClawbackClaimableBalanceResult {
    switch(): ClawbackClaimableBalanceResultCode;

    static clawbackClaimableBalanceSuccess(): ClawbackClaimableBalanceResult;

    static clawbackClaimableBalanceDoesNotExist(): ClawbackClaimableBalanceResult;

    static clawbackClaimableBalanceNotIssuer(): ClawbackClaimableBalanceResult;

    static clawbackClaimableBalanceNotClawbackEnabled(): ClawbackClaimableBalanceResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ClawbackClaimableBalanceResult;

    static write(value: ClawbackClaimableBalanceResult, io: BrowserBuffer): void;

    static isValid(value: ClawbackClaimableBalanceResult): boolean;

    static toXDR(value: ClawbackClaimableBalanceResult): BrowserBuffer;

    static fromXDR(
      input: BrowserBuffer,
      format?: "raw"
    ): ClawbackClaimableBalanceResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): ClawbackClaimableBalanceResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SetTrustLineFlagsResult {
    switch(): SetTrustLineFlagsResultCode;

    static setTrustLineFlagsSuccess(): SetTrustLineFlagsResult;

    static setTrustLineFlagsMalformed(): SetTrustLineFlagsResult;

    static setTrustLineFlagsNoTrustLine(): SetTrustLineFlagsResult;

    static setTrustLineFlagsCantRevoke(): SetTrustLineFlagsResult;

    static setTrustLineFlagsInvalidState(): SetTrustLineFlagsResult;

    static setTrustLineFlagsLowReserve(): SetTrustLineFlagsResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SetTrustLineFlagsResult;

    static write(value: SetTrustLineFlagsResult, io: BrowserBuffer): void;

    static isValid(value: SetTrustLineFlagsResult): boolean;

    static toXDR(value: SetTrustLineFlagsResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SetTrustLineFlagsResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): SetTrustLineFlagsResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolDepositResult {
    switch(): LiquidityPoolDepositResultCode;

    static liquidityPoolDepositSuccess(): LiquidityPoolDepositResult;

    static liquidityPoolDepositMalformed(): LiquidityPoolDepositResult;

    static liquidityPoolDepositNoTrust(): LiquidityPoolDepositResult;

    static liquidityPoolDepositNotAuthorized(): LiquidityPoolDepositResult;

    static liquidityPoolDepositUnderfunded(): LiquidityPoolDepositResult;

    static liquidityPoolDepositLineFull(): LiquidityPoolDepositResult;

    static liquidityPoolDepositBadPrice(): LiquidityPoolDepositResult;

    static liquidityPoolDepositPoolFull(): LiquidityPoolDepositResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolDepositResult;

    static write(value: LiquidityPoolDepositResult, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolDepositResult): boolean;

    static toXDR(value: LiquidityPoolDepositResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LiquidityPoolDepositResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolDepositResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class LiquidityPoolWithdrawResult {
    switch(): LiquidityPoolWithdrawResultCode;

    static liquidityPoolWithdrawSuccess(): LiquidityPoolWithdrawResult;

    static liquidityPoolWithdrawMalformed(): LiquidityPoolWithdrawResult;

    static liquidityPoolWithdrawNoTrust(): LiquidityPoolWithdrawResult;

    static liquidityPoolWithdrawUnderfunded(): LiquidityPoolWithdrawResult;

    static liquidityPoolWithdrawLineFull(): LiquidityPoolWithdrawResult;

    static liquidityPoolWithdrawUnderMinimum(): LiquidityPoolWithdrawResult;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): LiquidityPoolWithdrawResult;

    static write(value: LiquidityPoolWithdrawResult, io: BrowserBuffer): void;

    static isValid(value: LiquidityPoolWithdrawResult): boolean;

    static toXDR(value: LiquidityPoolWithdrawResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): LiquidityPoolWithdrawResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): LiquidityPoolWithdrawResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class OperationResultTr {
    switch(): OperationType;

    createAccountResult(value?: CreateAccountResult): CreateAccountResult;

    paymentResult(value?: PaymentResult): PaymentResult;

    pathPaymentStrictReceiveResult(
      value?: PathPaymentStrictReceiveResult
    ): PathPaymentStrictReceiveResult;

    manageSellOfferResult(value?: ManageSellOfferResult): ManageSellOfferResult;

    createPassiveSellOfferResult(
      value?: ManageSellOfferResult
    ): ManageSellOfferResult;

    setOptionsResult(value?: SetOptionsResult): SetOptionsResult;

    changeTrustResult(value?: ChangeTrustResult): ChangeTrustResult;

    allowTrustResult(value?: AllowTrustResult): AllowTrustResult;

    accountMergeResult(value?: AccountMergeResult): AccountMergeResult;

    inflationResult(value?: InflationResult): InflationResult;

    manageDataResult(value?: ManageDataResult): ManageDataResult;

    bumpSeqResult(value?: BumpSequenceResult): BumpSequenceResult;

    manageBuyOfferResult(value?: ManageBuyOfferResult): ManageBuyOfferResult;

    pathPaymentStrictSendResult(
      value?: PathPaymentStrictSendResult
    ): PathPaymentStrictSendResult;

    createClaimableBalanceResult(
      value?: CreateClaimableBalanceResult
    ): CreateClaimableBalanceResult;

    claimClaimableBalanceResult(
      value?: ClaimClaimableBalanceResult
    ): ClaimClaimableBalanceResult;

    beginSponsoringFutureReservesResult(
      value?: BeginSponsoringFutureReservesResult
    ): BeginSponsoringFutureReservesResult;

    endSponsoringFutureReservesResult(
      value?: EndSponsoringFutureReservesResult
    ): EndSponsoringFutureReservesResult;

    revokeSponsorshipResult(
      value?: RevokeSponsorshipResult
    ): RevokeSponsorshipResult;

    clawbackResult(value?: ClawbackResult): ClawbackResult;

    clawbackClaimableBalanceResult(
      value?: ClawbackClaimableBalanceResult
    ): ClawbackClaimableBalanceResult;

    setTrustLineFlagsResult(
      value?: SetTrustLineFlagsResult
    ): SetTrustLineFlagsResult;

    liquidityPoolDepositResult(
      value?: LiquidityPoolDepositResult
    ): LiquidityPoolDepositResult;

    liquidityPoolWithdrawResult(
      value?: LiquidityPoolWithdrawResult
    ): LiquidityPoolWithdrawResult;

    static createAccount(value: CreateAccountResult): OperationResultTr;

    static payment(value: PaymentResult): OperationResultTr;

    static pathPaymentStrictReceive(
      value: PathPaymentStrictReceiveResult
    ): OperationResultTr;

    static manageSellOffer(value: ManageSellOfferResult): OperationResultTr;

    static createPassiveSellOffer(
      value: ManageSellOfferResult
    ): OperationResultTr;

    static setOptions(value: SetOptionsResult): OperationResultTr;

    static changeTrust(value: ChangeTrustResult): OperationResultTr;

    static allowTrust(value: AllowTrustResult): OperationResultTr;

    static accountMerge(value: AccountMergeResult): OperationResultTr;

    static inflation(value: InflationResult): OperationResultTr;

    static manageData(value: ManageDataResult): OperationResultTr;

    static bumpSequence(value: BumpSequenceResult): OperationResultTr;

    static manageBuyOffer(value: ManageBuyOfferResult): OperationResultTr;

    static pathPaymentStrictSend(
      value: PathPaymentStrictSendResult
    ): OperationResultTr;

    static createClaimableBalance(
      value: CreateClaimableBalanceResult
    ): OperationResultTr;

    static claimClaimableBalance(
      value: ClaimClaimableBalanceResult
    ): OperationResultTr;

    static beginSponsoringFutureReserves(
      value: BeginSponsoringFutureReservesResult
    ): OperationResultTr;

    static endSponsoringFutureReserves(
      value: EndSponsoringFutureReservesResult
    ): OperationResultTr;

    static revokeSponsorship(value: RevokeSponsorshipResult): OperationResultTr;

    static clawback(value: ClawbackResult): OperationResultTr;

    static clawbackClaimableBalance(
      value: ClawbackClaimableBalanceResult
    ): OperationResultTr;

    static setTrustLineFlags(value: SetTrustLineFlagsResult): OperationResultTr;

    static liquidityPoolDeposit(
      value: LiquidityPoolDepositResult
    ): OperationResultTr;

    static liquidityPoolWithdraw(
      value: LiquidityPoolWithdrawResult
    ): OperationResultTr;

    value():
      | CreateAccountResult
      | PaymentResult
      | PathPaymentStrictReceiveResult
      | ManageSellOfferResult
      | ManageSellOfferResult
      | SetOptionsResult
      | ChangeTrustResult
      | AllowTrustResult
      | AccountMergeResult
      | InflationResult
      | ManageDataResult
      | BumpSequenceResult
      | ManageBuyOfferResult
      | PathPaymentStrictSendResult
      | CreateClaimableBalanceResult
      | ClaimClaimableBalanceResult
      | BeginSponsoringFutureReservesResult
      | EndSponsoringFutureReservesResult
      | RevokeSponsorshipResult
      | ClawbackResult
      | ClawbackClaimableBalanceResult
      | SetTrustLineFlagsResult
      | LiquidityPoolDepositResult
      | LiquidityPoolWithdrawResult;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): OperationResultTr;

    static write(value: OperationResultTr, io: BrowserBuffer): void;

    static isValid(value: OperationResultTr): boolean;

    static toXDR(value: OperationResultTr): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): OperationResultTr;

    static fromXDR(input: string, format: "hex" | "base64"): OperationResultTr;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class OperationResult {
    switch(): OperationResultCode;

    tr(value?: OperationResultTr): OperationResultTr;

    static opInner(value: OperationResultTr): OperationResult;

    static opBadAuth(): OperationResult;

    static opNoAccount(): OperationResult;

    static opNotSupported(): OperationResult;

    static opTooManySubentries(): OperationResult;

    static opExceededWorkLimit(): OperationResult;

    static opTooManySponsoring(): OperationResult;

    value(): OperationResultTr | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): OperationResult;

    static write(value: OperationResult, io: BrowserBuffer): void;

    static isValid(value: OperationResult): boolean;

    static toXDR(value: OperationResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): OperationResult;

    static fromXDR(input: string, format: "hex" | "base64"): OperationResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class InnerTransactionResultResult {
    switch(): TransactionResultCode;

    results(value?: OperationResult[]): OperationResult[];

    static txSuccess(value: OperationResult[]): InnerTransactionResultResult;

    static txFailed(value: OperationResult[]): InnerTransactionResultResult;

    static txTooEarly(): InnerTransactionResultResult;

    static txTooLate(): InnerTransactionResultResult;

    static txMissingOperation(): InnerTransactionResultResult;

    static txBadSeq(): InnerTransactionResultResult;

    static txBadAuth(): InnerTransactionResultResult;

    static txInsufficientBalance(): InnerTransactionResultResult;

    static txNoAccount(): InnerTransactionResultResult;

    static txInsufficientFee(): InnerTransactionResultResult;

    static txBadAuthExtra(): InnerTransactionResultResult;

    static txInternalError(): InnerTransactionResultResult;

    static txNotSupported(): InnerTransactionResultResult;

    static txBadSponsorship(): InnerTransactionResultResult;

    static txBadMinSeqAgeOrGap(): InnerTransactionResultResult;

    static txMalformed(): InnerTransactionResultResult;

    value(): OperationResult[] | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): InnerTransactionResultResult;

    static write(value: InnerTransactionResultResult, io: BrowserBuffer): void;

    static isValid(value: InnerTransactionResultResult): boolean;

    static toXDR(value: InnerTransactionResultResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): InnerTransactionResultResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): InnerTransactionResultResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class InnerTransactionResultExt {
    switch(): number;

    static 0(): InnerTransactionResultExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): InnerTransactionResultExt;

    static write(value: InnerTransactionResultExt, io: BrowserBuffer): void;

    static isValid(value: InnerTransactionResultExt): boolean;

    static toXDR(value: InnerTransactionResultExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): InnerTransactionResultExt;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): InnerTransactionResultExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionResultResult {
    switch(): TransactionResultCode;

    innerResultPair(
      value?: InnerTransactionResultPair
    ): InnerTransactionResultPair;

    results(value?: OperationResult[]): OperationResult[];

    static txFeeBumpInnerSuccess(
      value: InnerTransactionResultPair
    ): TransactionResultResult;

    static txFeeBumpInnerFailed(
      value: InnerTransactionResultPair
    ): TransactionResultResult;

    static txSuccess(value: OperationResult[]): TransactionResultResult;

    static txFailed(value: OperationResult[]): TransactionResultResult;

    static txTooEarly(): TransactionResultResult;

    static txTooLate(): TransactionResultResult;

    static txMissingOperation(): TransactionResultResult;

    static txBadSeq(): TransactionResultResult;

    static txBadAuth(): TransactionResultResult;

    static txInsufficientBalance(): TransactionResultResult;

    static txNoAccount(): TransactionResultResult;

    static txInsufficientFee(): TransactionResultResult;

    static txBadAuthExtra(): TransactionResultResult;

    static txInternalError(): TransactionResultResult;

    static txNotSupported(): TransactionResultResult;

    static txBadSponsorship(): TransactionResultResult;

    static txBadMinSeqAgeOrGap(): TransactionResultResult;

    static txMalformed(): TransactionResultResult;

    value(): InnerTransactionResultPair | OperationResult[] | void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionResultResult;

    static write(value: TransactionResultResult, io: BrowserBuffer): void;

    static isValid(value: TransactionResultResult): boolean;

    static toXDR(value: TransactionResultResult): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionResultResult;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionResultResult;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class TransactionResultExt {
    switch(): number;

    static 0(): TransactionResultExt;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): TransactionResultExt;

    static write(value: TransactionResultExt, io: BrowserBuffer): void;

    static isValid(value: TransactionResultExt): boolean;

    static toXDR(value: TransactionResultExt): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): TransactionResultExt;

    static fromXDR(
      input: string,
      format: "hex" | "base64"
    ): TransactionResultExt;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class ExtensionPoint {
    switch(): number;

    static 0(): ExtensionPoint;

    value(): void;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): ExtensionPoint;

    static write(value: ExtensionPoint, io: BrowserBuffer): void;

    static isValid(value: ExtensionPoint): boolean;

    static toXDR(value: ExtensionPoint): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): ExtensionPoint;

    static fromXDR(input: string, format: "hex" | "base64"): ExtensionPoint;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class PublicKey {
    switch(): PublicKeyType;

    ed25519(value?: BrowserBuffer): BrowserBuffer;

    static publicKeyTypeEd25519(value: BrowserBuffer): PublicKey;

    value(): BrowserBuffer;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): PublicKey;

    static write(value: PublicKey, io: BrowserBuffer): void;

    static isValid(value: PublicKey): boolean;

    static toXDR(value: PublicKey): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): PublicKey;

    static fromXDR(input: string, format: "hex" | "base64"): PublicKey;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }

  class SignerKey {
    switch(): SignerKeyType;

    ed25519(value?: BrowserBuffer): BrowserBuffer;

    preAuthTx(value?: BrowserBuffer): BrowserBuffer;

    hashX(value?: BrowserBuffer): BrowserBuffer;

    ed25519SignedPayload(
      value?: SignerKeyEd25519SignedPayload
    ): SignerKeyEd25519SignedPayload;

    static signerKeyTypeEd25519(value: BrowserBuffer): SignerKey;

    static signerKeyTypePreAuthTx(value: BrowserBuffer): SignerKey;

    static signerKeyTypeHashX(value: BrowserBuffer): SignerKey;

    static signerKeyTypeEd25519SignedPayload(
      value: SignerKeyEd25519SignedPayload
    ): SignerKey;

    value(): BrowserBuffer | BrowserBuffer | BrowserBuffer | SignerKeyEd25519SignedPayload;

    toXDR(format?: "raw"): BrowserBuffer;

    toXDR(format: "hex" | "base64"): string;

    static read(io: BrowserBuffer): SignerKey;

    static write(value: SignerKey, io: BrowserBuffer): void;

    static isValid(value: SignerKey): boolean;

    static toXDR(value: SignerKey): BrowserBuffer;

    static fromXDR(input: BrowserBuffer, format?: "raw"): SignerKey;

    static fromXDR(input: string, format: "hex" | "base64"): SignerKey;

    static validateXDR(input: BrowserBuffer, format?: "raw"): boolean;

    static validateXDR(input: string, format: "hex" | "base64"): boolean;
  }
}
