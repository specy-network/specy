/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Condition } from "./condition";

export const protobufPackage = "specynetwork.specy.specy";

export interface Task {
  owner: string;
  name: string;
  hash: string;
  connectionId: string;
  msg: string;
  ruleFiles: string;
  taskType: number;
  scheduleType: Condition | undefined;
  updateTime: number;
  updateBlockHeight: number;
  checkData: string;
}

function createBaseTask(): Task {
  return {
    owner: "",
    name: "",
    hash: "",
    connectionId: "",
    msg: "",
    ruleFiles: "",
    taskType: 0,
    scheduleType: undefined,
    updateTime: 0,
    updateBlockHeight: 0,
    checkData: "",
  };
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.connectionId !== "") {
      writer.uint32(34).string(message.connectionId);
    }
    if (message.msg !== "") {
      writer.uint32(42).string(message.msg);
    }
    if (message.ruleFiles !== "") {
      writer.uint32(50).string(message.ruleFiles);
    }
    if (message.taskType !== 0) {
      writer.uint32(56).uint64(message.taskType);
    }
    if (message.scheduleType !== undefined) {
      Condition.encode(message.scheduleType, writer.uint32(66).fork()).ldelim();
    }
    if (message.updateTime !== 0) {
      writer.uint32(72).uint64(message.updateTime);
    }
    if (message.updateBlockHeight !== 0) {
      writer.uint32(80).uint64(message.updateBlockHeight);
    }
    if (message.checkData !== "") {
      writer.uint32(90).string(message.checkData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.connectionId = reader.string();
          break;
        case 5:
          message.msg = reader.string();
          break;
        case 6:
          message.ruleFiles = reader.string();
          break;
        case 7:
          message.taskType = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.scheduleType = Condition.decode(reader, reader.uint32());
          break;
        case 9:
          message.updateTime = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.updateBlockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.checkData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Task {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      ruleFiles: isSet(object.ruleFiles) ? String(object.ruleFiles) : "",
      taskType: isSet(object.taskType) ? Number(object.taskType) : 0,
      scheduleType: isSet(object.scheduleType) ? Condition.fromJSON(object.scheduleType) : undefined,
      updateTime: isSet(object.updateTime) ? Number(object.updateTime) : 0,
      updateBlockHeight: isSet(object.updateBlockHeight) ? Number(object.updateBlockHeight) : 0,
      checkData: isSet(object.checkData) ? String(object.checkData) : "",
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.hash !== undefined && (obj.hash = message.hash);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.msg !== undefined && (obj.msg = message.msg);
    message.ruleFiles !== undefined && (obj.ruleFiles = message.ruleFiles);
    message.taskType !== undefined && (obj.taskType = Math.round(message.taskType));
    message.scheduleType !== undefined
      && (obj.scheduleType = message.scheduleType ? Condition.toJSON(message.scheduleType) : undefined);
    message.updateTime !== undefined && (obj.updateTime = Math.round(message.updateTime));
    message.updateBlockHeight !== undefined && (obj.updateBlockHeight = Math.round(message.updateBlockHeight));
    message.checkData !== undefined && (obj.checkData = message.checkData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.hash = object.hash ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msg = object.msg ?? "";
    message.ruleFiles = object.ruleFiles ?? "";
    message.taskType = object.taskType ?? 0;
    message.scheduleType = (object.scheduleType !== undefined && object.scheduleType !== null)
      ? Condition.fromPartial(object.scheduleType)
      : undefined;
    message.updateTime = object.updateTime ?? 0;
    message.updateBlockHeight = object.updateBlockHeight ?? 0;
    message.checkData = object.checkData ?? "";
    return message;
  },
};

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
