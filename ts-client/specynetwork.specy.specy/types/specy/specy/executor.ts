/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "specynetwork.specy.specy";

export interface Executor {
  address: string;
  iasAttestationReport: string;
  enclavePk: string;
  valAddr: string;
}

function createBaseExecutor(): Executor {
  return { address: "", iasAttestationReport: "", enclavePk: "", valAddr: "" };
}

export const Executor = {
  encode(message: Executor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.iasAttestationReport !== "") {
      writer.uint32(18).string(message.iasAttestationReport);
    }
    if (message.enclavePk !== "") {
      writer.uint32(26).string(message.enclavePk);
    }
    if (message.valAddr !== "") {
      writer.uint32(34).string(message.valAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Executor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.iasAttestationReport = reader.string();
          break;
        case 3:
          message.enclavePk = reader.string();
          break;
        case 4:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Executor {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      iasAttestationReport: isSet(object.iasAttestationReport) ? String(object.iasAttestationReport) : "",
      enclavePk: isSet(object.enclavePk) ? String(object.enclavePk) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
    };
  },

  toJSON(message: Executor): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.iasAttestationReport !== undefined && (obj.iasAttestationReport = message.iasAttestationReport);
    message.enclavePk !== undefined && (obj.enclavePk = message.enclavePk);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Executor>, I>>(object: I): Executor {
    const message = createBaseExecutor();
    message.address = object.address ?? "";
    message.iasAttestationReport = object.iasAttestationReport ?? "";
    message.enclavePk = object.enclavePk ?? "";
    message.valAddr = object.valAddr ?? "";
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
