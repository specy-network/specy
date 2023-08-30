/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CurrentExecutorStatus } from "./current_executor_status";
import { Deposit } from "./deposit";
import { Executor } from "./executor";
import { Params } from "./params";
import { Task } from "./task";

export const protobufPackage = "specynetwork.specy.specy";

/** GenesisState defines the specy module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  taskList: Task[];
  executorList: Executor[];
  depositList: Deposit[];
  currentExecutorStatus: CurrentExecutorStatus | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, taskList: [], executorList: [], depositList: [], currentExecutorStatus: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.taskList) {
      Task.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.executorList) {
      Executor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.depositList) {
      Deposit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.currentExecutorStatus !== undefined) {
      CurrentExecutorStatus.encode(message.currentExecutorStatus, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.taskList.push(Task.decode(reader, reader.uint32()));
          break;
        case 3:
          message.executorList.push(Executor.decode(reader, reader.uint32()));
          break;
        case 4:
          message.depositList.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.currentExecutorStatus = CurrentExecutorStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      taskList: Array.isArray(object?.taskList) ? object.taskList.map((e: any) => Task.fromJSON(e)) : [],
      executorList: Array.isArray(object?.executorList)
        ? object.executorList.map((e: any) => Executor.fromJSON(e))
        : [],
      depositList: Array.isArray(object?.depositList) ? object.depositList.map((e: any) => Deposit.fromJSON(e)) : [],
      currentExecutorStatus: isSet(object.currentExecutorStatus)
        ? CurrentExecutorStatus.fromJSON(object.currentExecutorStatus)
        : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.taskList) {
      obj.taskList = message.taskList.map((e) => e ? Task.toJSON(e) : undefined);
    } else {
      obj.taskList = [];
    }
    if (message.executorList) {
      obj.executorList = message.executorList.map((e) => e ? Executor.toJSON(e) : undefined);
    } else {
      obj.executorList = [];
    }
    if (message.depositList) {
      obj.depositList = message.depositList.map((e) => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.depositList = [];
    }
    message.currentExecutorStatus !== undefined && (obj.currentExecutorStatus = message.currentExecutorStatus
      ? CurrentExecutorStatus.toJSON(message.currentExecutorStatus)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.taskList = object.taskList?.map((e) => Task.fromPartial(e)) || [];
    message.executorList = object.executorList?.map((e) => Executor.fromPartial(e)) || [];
    message.depositList = object.depositList?.map((e) => Deposit.fromPartial(e)) || [];
    message.currentExecutorStatus =
      (object.currentExecutorStatus !== undefined && object.currentExecutorStatus !== null)
        ? CurrentExecutorStatus.fromPartial(object.currentExecutorStatus)
        : undefined;
    return message;
  },
};

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
