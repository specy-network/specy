/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { InterchainAccountPacketData } from "../../ibc/applications/interchain_accounts/v1/packet";

export const protobufPackage = "specynetwork.specy.specy";

export interface MsgCreateTask {
  creator: string;
  name: string;
  connectionId: string;
  msg: string;
  ruleFiles: string;
  taskType: number;
  intervalType: number;
  number: number;
  checkData: string;
}

export interface MsgCreateTaskResponse {
}

export interface MsgCancelTask {
  creator: string;
  name: string;
}

export interface MsgCancelTaskResponse {
}

export interface MsgEditTask {
  creator: string;
  name: string;
  connectionId: string;
  msg: string;
  ruleFiles: string;
  taskType: number;
  intervalType: number;
  number: number;
}

export interface MsgEditTaskResponse {
}

export interface MsgCreateExecutor {
  creator: string;
  iasAttestationReport: string;
  enclavePk: string;
}

export interface MsgCreateExecutorResponse {
}

export interface MsgCancelExecutor {
  creator: string;
}

export interface MsgCancelExecutorResponse {
}

export interface MsgEditExecutor {
  creator: string;
  iasAttestationReport: string;
  enclavePk: string;
}

export interface MsgEditExecutorResponse {
}

export interface MsgDepositBalance {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgDepositBalanceResponse {
}

export interface MsgWithdrawBalance {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgWithdrawBalanceResponse {
}

export interface MsgExecuteTask {
  creator: string;
  owner: string;
  name: string;
  cproof: string;
  packetData: InterchainAccountPacketData | undefined;
}

export interface MsgExecuteTaskResponse {
}

function createBaseMsgCreateTask(): MsgCreateTask {
  return {
    creator: "",
    name: "",
    connectionId: "",
    msg: "",
    ruleFiles: "",
    taskType: 0,
    intervalType: 0,
    number: 0,
    checkData: "",
  };
}

export const MsgCreateTask = {
  encode(message: MsgCreateTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.msg !== "") {
      writer.uint32(34).string(message.msg);
    }
    if (message.ruleFiles !== "") {
      writer.uint32(42).string(message.ruleFiles);
    }
    if (message.taskType !== 0) {
      writer.uint32(48).uint64(message.taskType);
    }
    if (message.intervalType !== 0) {
      writer.uint32(56).uint64(message.intervalType);
    }
    if (message.number !== 0) {
      writer.uint32(64).uint64(message.number);
    }
    if (message.checkData !== "") {
      writer.uint32(74).string(message.checkData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTask {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.msg = reader.string();
          break;
        case 5:
          message.ruleFiles = reader.string();
          break;
        case 6:
          message.taskType = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.intervalType = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.number = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.checkData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      ruleFiles: isSet(object.ruleFiles) ? String(object.ruleFiles) : "",
      taskType: isSet(object.taskType) ? Number(object.taskType) : 0,
      intervalType: isSet(object.intervalType) ? Number(object.intervalType) : 0,
      number: isSet(object.number) ? Number(object.number) : 0,
      checkData: isSet(object.checkData) ? String(object.checkData) : "",
    };
  },

  toJSON(message: MsgCreateTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.msg !== undefined && (obj.msg = message.msg);
    message.ruleFiles !== undefined && (obj.ruleFiles = message.ruleFiles);
    message.taskType !== undefined && (obj.taskType = Math.round(message.taskType));
    message.intervalType !== undefined && (obj.intervalType = Math.round(message.intervalType));
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.checkData !== undefined && (obj.checkData = message.checkData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTask>, I>>(object: I): MsgCreateTask {
    const message = createBaseMsgCreateTask();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msg = object.msg ?? "";
    message.ruleFiles = object.ruleFiles ?? "";
    message.taskType = object.taskType ?? 0;
    message.intervalType = object.intervalType ?? 0;
    message.number = object.number ?? 0;
    message.checkData = object.checkData ?? "";
    return message;
  },
};

function createBaseMsgCreateTaskResponse(): MsgCreateTaskResponse {
  return {};
}

export const MsgCreateTaskResponse = {
  encode(_: MsgCreateTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTaskResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateTaskResponse {
    return {};
  },

  toJSON(_: MsgCreateTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTaskResponse>, I>>(_: I): MsgCreateTaskResponse {
    const message = createBaseMsgCreateTaskResponse();
    return message;
  },
};

function createBaseMsgCancelTask(): MsgCancelTask {
  return { creator: "", name: "" };
}

export const MsgCancelTask = {
  encode(message: MsgCancelTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTask {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgCancelTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTask>, I>>(object: I): MsgCancelTask {
    const message = createBaseMsgCancelTask();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgCancelTaskResponse(): MsgCancelTaskResponse {
  return {};
}

export const MsgCancelTaskResponse = {
  encode(_: MsgCancelTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTaskResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelTaskResponse {
    return {};
  },

  toJSON(_: MsgCancelTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTaskResponse>, I>>(_: I): MsgCancelTaskResponse {
    const message = createBaseMsgCancelTaskResponse();
    return message;
  },
};

function createBaseMsgEditTask(): MsgEditTask {
  return { creator: "", name: "", connectionId: "", msg: "", ruleFiles: "", taskType: 0, intervalType: 0, number: 0 };
}

export const MsgEditTask = {
  encode(message: MsgEditTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.msg !== "") {
      writer.uint32(34).string(message.msg);
    }
    if (message.ruleFiles !== "") {
      writer.uint32(42).string(message.ruleFiles);
    }
    if (message.taskType !== 0) {
      writer.uint32(48).uint64(message.taskType);
    }
    if (message.intervalType !== 0) {
      writer.uint32(56).uint64(message.intervalType);
    }
    if (message.number !== 0) {
      writer.uint32(64).uint64(message.number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditTask {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.msg = reader.string();
          break;
        case 5:
          message.ruleFiles = reader.string();
          break;
        case 6:
          message.taskType = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.intervalType = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.number = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      ruleFiles: isSet(object.ruleFiles) ? String(object.ruleFiles) : "",
      taskType: isSet(object.taskType) ? Number(object.taskType) : 0,
      intervalType: isSet(object.intervalType) ? Number(object.intervalType) : 0,
      number: isSet(object.number) ? Number(object.number) : 0,
    };
  },

  toJSON(message: MsgEditTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.msg !== undefined && (obj.msg = message.msg);
    message.ruleFiles !== undefined && (obj.ruleFiles = message.ruleFiles);
    message.taskType !== undefined && (obj.taskType = Math.round(message.taskType));
    message.intervalType !== undefined && (obj.intervalType = Math.round(message.intervalType));
    message.number !== undefined && (obj.number = Math.round(message.number));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditTask>, I>>(object: I): MsgEditTask {
    const message = createBaseMsgEditTask();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msg = object.msg ?? "";
    message.ruleFiles = object.ruleFiles ?? "";
    message.taskType = object.taskType ?? 0;
    message.intervalType = object.intervalType ?? 0;
    message.number = object.number ?? 0;
    return message;
  },
};

function createBaseMsgEditTaskResponse(): MsgEditTaskResponse {
  return {};
}

export const MsgEditTaskResponse = {
  encode(_: MsgEditTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditTaskResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditTaskResponse {
    return {};
  },

  toJSON(_: MsgEditTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditTaskResponse>, I>>(_: I): MsgEditTaskResponse {
    const message = createBaseMsgEditTaskResponse();
    return message;
  },
};

function createBaseMsgCreateExecutor(): MsgCreateExecutor {
  return { creator: "", iasAttestationReport: "", enclavePk: "" };
}

export const MsgCreateExecutor = {
  encode(message: MsgCreateExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.iasAttestationReport !== "") {
      writer.uint32(18).string(message.iasAttestationReport);
    }
    if (message.enclavePk !== "") {
      writer.uint32(26).string(message.enclavePk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.iasAttestationReport = reader.string();
          break;
        case 3:
          message.enclavePk = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateExecutor {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      iasAttestationReport: isSet(object.iasAttestationReport) ? String(object.iasAttestationReport) : "",
      enclavePk: isSet(object.enclavePk) ? String(object.enclavePk) : "",
    };
  },

  toJSON(message: MsgCreateExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.iasAttestationReport !== undefined && (obj.iasAttestationReport = message.iasAttestationReport);
    message.enclavePk !== undefined && (obj.enclavePk = message.enclavePk);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateExecutor>, I>>(object: I): MsgCreateExecutor {
    const message = createBaseMsgCreateExecutor();
    message.creator = object.creator ?? "";
    message.iasAttestationReport = object.iasAttestationReport ?? "";
    message.enclavePk = object.enclavePk ?? "";
    return message;
  },
};

function createBaseMsgCreateExecutorResponse(): MsgCreateExecutorResponse {
  return {};
}

export const MsgCreateExecutorResponse = {
  encode(_: MsgCreateExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateExecutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateExecutorResponse {
    return {};
  },

  toJSON(_: MsgCreateExecutorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateExecutorResponse>, I>>(_: I): MsgCreateExecutorResponse {
    const message = createBaseMsgCreateExecutorResponse();
    return message;
  },
};

function createBaseMsgCancelExecutor(): MsgCancelExecutor {
  return { creator: "" };
}

export const MsgCancelExecutor = {
  encode(message: MsgCancelExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelExecutor {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgCancelExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelExecutor>, I>>(object: I): MsgCancelExecutor {
    const message = createBaseMsgCancelExecutor();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCancelExecutorResponse(): MsgCancelExecutorResponse {
  return {};
}

export const MsgCancelExecutorResponse = {
  encode(_: MsgCancelExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelExecutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelExecutorResponse {
    return {};
  },

  toJSON(_: MsgCancelExecutorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelExecutorResponse>, I>>(_: I): MsgCancelExecutorResponse {
    const message = createBaseMsgCancelExecutorResponse();
    return message;
  },
};

function createBaseMsgEditExecutor(): MsgEditExecutor {
  return { creator: "", iasAttestationReport: "", enclavePk: "" };
}

export const MsgEditExecutor = {
  encode(message: MsgEditExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.iasAttestationReport !== "") {
      writer.uint32(18).string(message.iasAttestationReport);
    }
    if (message.enclavePk !== "") {
      writer.uint32(26).string(message.enclavePk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.iasAttestationReport = reader.string();
          break;
        case 3:
          message.enclavePk = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditExecutor {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      iasAttestationReport: isSet(object.iasAttestationReport) ? String(object.iasAttestationReport) : "",
      enclavePk: isSet(object.enclavePk) ? String(object.enclavePk) : "",
    };
  },

  toJSON(message: MsgEditExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.iasAttestationReport !== undefined && (obj.iasAttestationReport = message.iasAttestationReport);
    message.enclavePk !== undefined && (obj.enclavePk = message.enclavePk);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditExecutor>, I>>(object: I): MsgEditExecutor {
    const message = createBaseMsgEditExecutor();
    message.creator = object.creator ?? "";
    message.iasAttestationReport = object.iasAttestationReport ?? "";
    message.enclavePk = object.enclavePk ?? "";
    return message;
  },
};

function createBaseMsgEditExecutorResponse(): MsgEditExecutorResponse {
  return {};
}

export const MsgEditExecutorResponse = {
  encode(_: MsgEditExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditExecutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditExecutorResponse {
    return {};
  },

  toJSON(_: MsgEditExecutorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditExecutorResponse>, I>>(_: I): MsgEditExecutorResponse {
    const message = createBaseMsgEditExecutorResponse();
    return message;
  },
};

function createBaseMsgDepositBalance(): MsgDepositBalance {
  return { creator: "", amount: undefined };
}

export const MsgDepositBalance = {
  encode(message: MsgDepositBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDepositBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositBalance>, I>>(object: I): MsgDepositBalance {
    const message = createBaseMsgDepositBalance();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgDepositBalanceResponse(): MsgDepositBalanceResponse {
  return {};
}

export const MsgDepositBalanceResponse = {
  encode(_: MsgDepositBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDepositBalanceResponse {
    return {};
  },

  toJSON(_: MsgDepositBalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositBalanceResponse>, I>>(_: I): MsgDepositBalanceResponse {
    const message = createBaseMsgDepositBalanceResponse();
    return message;
  },
};

function createBaseMsgWithdrawBalance(): MsgWithdrawBalance {
  return { creator: "", amount: undefined };
}

export const MsgWithdrawBalance = {
  encode(message: MsgWithdrawBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgWithdrawBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawBalance>, I>>(object: I): MsgWithdrawBalance {
    const message = createBaseMsgWithdrawBalance();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgWithdrawBalanceResponse(): MsgWithdrawBalanceResponse {
  return {};
}

export const MsgWithdrawBalanceResponse = {
  encode(_: MsgWithdrawBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawBalanceResponse {
    return {};
  },

  toJSON(_: MsgWithdrawBalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawBalanceResponse>, I>>(_: I): MsgWithdrawBalanceResponse {
    const message = createBaseMsgWithdrawBalanceResponse();
    return message;
  },
};

function createBaseMsgExecuteTask(): MsgExecuteTask {
  return { creator: "", owner: "", name: "", cproof: "", packetData: undefined };
}

export const MsgExecuteTask = {
  encode(message: MsgExecuteTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.cproof !== "") {
      writer.uint32(34).string(message.cproof);
    }
    if (message.packetData !== undefined) {
      InterchainAccountPacketData.encode(message.packetData, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteTask {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.cproof = reader.string();
          break;
        case 5:
          message.packetData = InterchainAccountPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      cproof: isSet(object.cproof) ? String(object.cproof) : "",
      packetData: isSet(object.packetData) ? InterchainAccountPacketData.fromJSON(object.packetData) : undefined,
    };
  },

  toJSON(message: MsgExecuteTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.cproof !== undefined && (obj.cproof = message.cproof);
    message.packetData !== undefined
      && (obj.packetData = message.packetData ? InterchainAccountPacketData.toJSON(message.packetData) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteTask>, I>>(object: I): MsgExecuteTask {
    const message = createBaseMsgExecuteTask();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.cproof = object.cproof ?? "";
    message.packetData = (object.packetData !== undefined && object.packetData !== null)
      ? InterchainAccountPacketData.fromPartial(object.packetData)
      : undefined;
    return message;
  },
};

function createBaseMsgExecuteTaskResponse(): MsgExecuteTaskResponse {
  return {};
}

export const MsgExecuteTaskResponse = {
  encode(_: MsgExecuteTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteTaskResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExecuteTaskResponse {
    return {};
  },

  toJSON(_: MsgExecuteTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteTaskResponse>, I>>(_: I): MsgExecuteTaskResponse {
    const message = createBaseMsgExecuteTaskResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
  CancelTask(request: MsgCancelTask): Promise<MsgCancelTaskResponse>;
  EditTask(request: MsgEditTask): Promise<MsgEditTaskResponse>;
  CreateExecutor(request: MsgCreateExecutor): Promise<MsgCreateExecutorResponse>;
  CancelExecutor(request: MsgCancelExecutor): Promise<MsgCancelExecutorResponse>;
  EditExecutor(request: MsgEditExecutor): Promise<MsgEditExecutorResponse>;
  DepositBalance(request: MsgDepositBalance): Promise<MsgDepositBalanceResponse>;
  WithdrawBalance(request: MsgWithdrawBalance): Promise<MsgWithdrawBalanceResponse>;
  ExecuteTask(request: MsgExecuteTask): Promise<MsgExecuteTaskResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateTask = this.CreateTask.bind(this);
    this.CancelTask = this.CancelTask.bind(this);
    this.EditTask = this.EditTask.bind(this);
    this.CreateExecutor = this.CreateExecutor.bind(this);
    this.CancelExecutor = this.CancelExecutor.bind(this);
    this.EditExecutor = this.EditExecutor.bind(this);
    this.DepositBalance = this.DepositBalance.bind(this);
    this.WithdrawBalance = this.WithdrawBalance.bind(this);
    this.ExecuteTask = this.ExecuteTask.bind(this);
  }
  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse> {
    const data = MsgCreateTask.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "CreateTask", data);
    return promise.then((data) => MsgCreateTaskResponse.decode(new _m0.Reader(data)));
  }

  CancelTask(request: MsgCancelTask): Promise<MsgCancelTaskResponse> {
    const data = MsgCancelTask.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "CancelTask", data);
    return promise.then((data) => MsgCancelTaskResponse.decode(new _m0.Reader(data)));
  }

  EditTask(request: MsgEditTask): Promise<MsgEditTaskResponse> {
    const data = MsgEditTask.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "EditTask", data);
    return promise.then((data) => MsgEditTaskResponse.decode(new _m0.Reader(data)));
  }

  CreateExecutor(request: MsgCreateExecutor): Promise<MsgCreateExecutorResponse> {
    const data = MsgCreateExecutor.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "CreateExecutor", data);
    return promise.then((data) => MsgCreateExecutorResponse.decode(new _m0.Reader(data)));
  }

  CancelExecutor(request: MsgCancelExecutor): Promise<MsgCancelExecutorResponse> {
    const data = MsgCancelExecutor.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "CancelExecutor", data);
    return promise.then((data) => MsgCancelExecutorResponse.decode(new _m0.Reader(data)));
  }

  EditExecutor(request: MsgEditExecutor): Promise<MsgEditExecutorResponse> {
    const data = MsgEditExecutor.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "EditExecutor", data);
    return promise.then((data) => MsgEditExecutorResponse.decode(new _m0.Reader(data)));
  }

  DepositBalance(request: MsgDepositBalance): Promise<MsgDepositBalanceResponse> {
    const data = MsgDepositBalance.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "DepositBalance", data);
    return promise.then((data) => MsgDepositBalanceResponse.decode(new _m0.Reader(data)));
  }

  WithdrawBalance(request: MsgWithdrawBalance): Promise<MsgWithdrawBalanceResponse> {
    const data = MsgWithdrawBalance.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "WithdrawBalance", data);
    return promise.then((data) => MsgWithdrawBalanceResponse.decode(new _m0.Reader(data)));
  }

  ExecuteTask(request: MsgExecuteTask): Promise<MsgExecuteTaskResponse> {
    const data = MsgExecuteTask.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Msg", "ExecuteTask", data);
    return promise.then((data) => MsgExecuteTaskResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
