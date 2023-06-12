/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "specy.specy";

export interface MsgCreateExecutor {
  creator: string;
  staking: Coin | undefined;
  iasAttestationReport: string;
  enclavePk: string;
}

export interface MsgCreateExecutorResponse {
}

export interface MsgCreateTask {
  creator: string;
  contractAddress: string;
  method: string;
  calldata: string;
  single: boolean;
  ruleFile: string;
}

export interface MsgCreateTaskResponse {
}

export interface MsgExecuteTask {
  creator: string;
  taskHash: string;
  calldata: string;
  ruleFileHash: string;
  signature: string;
}

export interface MsgExecuteTaskResponse {
}

function createBaseMsgCreateExecutor(): MsgCreateExecutor {
  return { creator: "", staking: undefined, iasAttestationReport: "", enclavePk: "" };
}

export const MsgCreateExecutor = {
  encode(message: MsgCreateExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staking !== undefined) {
      Coin.encode(message.staking, writer.uint32(18).fork()).ldelim();
    }
    if (message.iasAttestationReport !== "") {
      writer.uint32(26).string(message.iasAttestationReport);
    }
    if (message.enclavePk !== "") {
      writer.uint32(34).string(message.enclavePk);
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
          message.staking = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.iasAttestationReport = reader.string();
          break;
        case 4:
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
      staking: isSet(object.staking) ? Coin.fromJSON(object.staking) : undefined,
      iasAttestationReport: isSet(object.iasAttestationReport) ? String(object.iasAttestationReport) : "",
      enclavePk: isSet(object.enclavePk) ? String(object.enclavePk) : "",
    };
  },

  toJSON(message: MsgCreateExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.staking !== undefined && (obj.staking = message.staking ? Coin.toJSON(message.staking) : undefined);
    message.iasAttestationReport !== undefined && (obj.iasAttestationReport = message.iasAttestationReport);
    message.enclavePk !== undefined && (obj.enclavePk = message.enclavePk);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateExecutor>, I>>(object: I): MsgCreateExecutor {
    const message = createBaseMsgCreateExecutor();
    message.creator = object.creator ?? "";
    message.staking = (object.staking !== undefined && object.staking !== null)
      ? Coin.fromPartial(object.staking)
      : undefined;
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

function createBaseMsgCreateTask(): MsgCreateTask {
  return { creator: "", contractAddress: "", method: "", calldata: "", single: false, ruleFile: "" };
}

export const MsgCreateTask = {
  encode(message: MsgCreateTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.method !== "") {
      writer.uint32(26).string(message.method);
    }
    if (message.calldata !== "") {
      writer.uint32(34).string(message.calldata);
    }
    if (message.single === true) {
      writer.uint32(40).bool(message.single);
    }
    if (message.ruleFile !== "") {
      writer.uint32(50).string(message.ruleFile);
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
          message.contractAddress = reader.string();
          break;
        case 3:
          message.method = reader.string();
          break;
        case 4:
          message.calldata = reader.string();
          break;
        case 5:
          message.single = reader.bool();
          break;
        case 6:
          message.ruleFile = reader.string();
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
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      method: isSet(object.method) ? String(object.method) : "",
      calldata: isSet(object.calldata) ? String(object.calldata) : "",
      single: isSet(object.single) ? Boolean(object.single) : false,
      ruleFile: isSet(object.ruleFile) ? String(object.ruleFile) : "",
    };
  },

  toJSON(message: MsgCreateTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.method !== undefined && (obj.method = message.method);
    message.calldata !== undefined && (obj.calldata = message.calldata);
    message.single !== undefined && (obj.single = message.single);
    message.ruleFile !== undefined && (obj.ruleFile = message.ruleFile);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTask>, I>>(object: I): MsgCreateTask {
    const message = createBaseMsgCreateTask();
    message.creator = object.creator ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.method = object.method ?? "";
    message.calldata = object.calldata ?? "";
    message.single = object.single ?? false;
    message.ruleFile = object.ruleFile ?? "";
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

function createBaseMsgExecuteTask(): MsgExecuteTask {
  return { creator: "", taskHash: "", calldata: "", ruleFileHash: "", signature: "" };
}

export const MsgExecuteTask = {
  encode(message: MsgExecuteTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskHash !== "") {
      writer.uint32(18).string(message.taskHash);
    }
    if (message.calldata !== "") {
      writer.uint32(26).string(message.calldata);
    }
    if (message.ruleFileHash !== "") {
      writer.uint32(34).string(message.ruleFileHash);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
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
          message.taskHash = reader.string();
          break;
        case 3:
          message.calldata = reader.string();
          break;
        case 4:
          message.ruleFileHash = reader.string();
          break;
        case 5:
          message.signature = reader.string();
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
      taskHash: isSet(object.taskHash) ? String(object.taskHash) : "",
      calldata: isSet(object.calldata) ? String(object.calldata) : "",
      ruleFileHash: isSet(object.ruleFileHash) ? String(object.ruleFileHash) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: MsgExecuteTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.taskHash !== undefined && (obj.taskHash = message.taskHash);
    message.calldata !== undefined && (obj.calldata = message.calldata);
    message.ruleFileHash !== undefined && (obj.ruleFileHash = message.ruleFileHash);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteTask>, I>>(object: I): MsgExecuteTask {
    const message = createBaseMsgExecuteTask();
    message.creator = object.creator ?? "";
    message.taskHash = object.taskHash ?? "";
    message.calldata = object.calldata ?? "";
    message.ruleFileHash = object.ruleFileHash ?? "";
    message.signature = object.signature ?? "";
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
  CreateExecutor(request: MsgCreateExecutor): Promise<MsgCreateExecutorResponse>;
  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ExecuteTask(request: MsgExecuteTask): Promise<MsgExecuteTaskResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateExecutor = this.CreateExecutor.bind(this);
    this.CreateTask = this.CreateTask.bind(this);
    this.ExecuteTask = this.ExecuteTask.bind(this);
  }
  CreateExecutor(request: MsgCreateExecutor): Promise<MsgCreateExecutorResponse> {
    const data = MsgCreateExecutor.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Msg", "CreateExecutor", data);
    return promise.then((data) => MsgCreateExecutorResponse.decode(new _m0.Reader(data)));
  }

  CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse> {
    const data = MsgCreateTask.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Msg", "CreateTask", data);
    return promise.then((data) => MsgCreateTaskResponse.decode(new _m0.Reader(data)));
  }

  ExecuteTask(request: MsgExecuteTask): Promise<MsgExecuteTaskResponse> {
    const data = MsgExecuteTask.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Msg", "ExecuteTask", data);
    return promise.then((data) => MsgExecuteTaskResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
