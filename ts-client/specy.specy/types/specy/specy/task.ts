/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "specy.specy";

export interface Task {
  taskHash: string;
  contractAddress: string;
  method: string;
  calldata: string;
  single: boolean;
  ruleFile: string;
}

function createBaseTask(): Task {
  return { taskHash: "", contractAddress: "", method: "", calldata: "", single: false, ruleFile: "" };
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskHash !== "") {
      writer.uint32(10).string(message.taskHash);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskHash = reader.string();
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

  fromJSON(object: any): Task {
    return {
      taskHash: isSet(object.taskHash) ? String(object.taskHash) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      method: isSet(object.method) ? String(object.method) : "",
      calldata: isSet(object.calldata) ? String(object.calldata) : "",
      single: isSet(object.single) ? Boolean(object.single) : false,
      ruleFile: isSet(object.ruleFile) ? String(object.ruleFile) : "",
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    message.taskHash !== undefined && (obj.taskHash = message.taskHash);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.method !== undefined && (obj.method = message.method);
    message.calldata !== undefined && (obj.calldata = message.calldata);
    message.single !== undefined && (obj.single = message.single);
    message.ruleFile !== undefined && (obj.ruleFile = message.ruleFile);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask();
    message.taskHash = object.taskHash ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.method = object.method ?? "";
    message.calldata = object.calldata ?? "";
    message.single = object.single ?? false;
    message.ruleFile = object.ruleFile ?? "";
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
