/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "specy.specy";

export interface Executor {
  address: string;
  staking: Coin | undefined;
  iasAttestationReport: string;
  enclavePk: string;
}

function createBaseExecutor(): Executor {
  return { address: "", staking: undefined, iasAttestationReport: "", enclavePk: "" };
}

export const Executor = {
  encode(message: Executor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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

  fromJSON(object: any): Executor {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staking: isSet(object.staking) ? Coin.fromJSON(object.staking) : undefined,
      iasAttestationReport: isSet(object.iasAttestationReport) ? String(object.iasAttestationReport) : "",
      enclavePk: isSet(object.enclavePk) ? String(object.enclavePk) : "",
    };
  },

  toJSON(message: Executor): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.staking !== undefined && (obj.staking = message.staking ? Coin.toJSON(message.staking) : undefined);
    message.iasAttestationReport !== undefined && (obj.iasAttestationReport = message.iasAttestationReport);
    message.enclavePk !== undefined && (obj.enclavePk = message.enclavePk);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Executor>, I>>(object: I): Executor {
    const message = createBaseExecutor();
    message.address = object.address ?? "";
    message.staking = (object.staking !== undefined && object.staking !== null)
      ? Coin.fromPartial(object.staking)
      : undefined;
    message.iasAttestationReport = object.iasAttestationReport ?? "";
    message.enclavePk = object.enclavePk ?? "";
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
