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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateExecutor(request: MsgCreateExecutor): Promise<MsgCreateExecutorResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateExecutor = this.CreateExecutor.bind(this);
  }
  CreateExecutor(request: MsgCreateExecutor): Promise<MsgCreateExecutorResponse> {
    const data = MsgCreateExecutor.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Msg", "CreateExecutor", data);
    return promise.then((data) => MsgCreateExecutorResponse.decode(new _m0.Reader(data)));
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
