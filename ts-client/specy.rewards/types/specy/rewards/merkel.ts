/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "specy.rewards";

export interface Merkel {
  datahash: string;
  merkelRoot: string;
}

function createBaseMerkel(): Merkel {
  return { datahash: "", merkelRoot: "" };
}

export const Merkel = {
  encode(message: Merkel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datahash !== "") {
      writer.uint32(10).string(message.datahash);
    }
    if (message.merkelRoot !== "") {
      writer.uint32(18).string(message.merkelRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Merkel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datahash = reader.string();
          break;
        case 2:
          message.merkelRoot = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Merkel {
    return {
      datahash: isSet(object.datahash) ? String(object.datahash) : "",
      merkelRoot: isSet(object.merkelRoot) ? String(object.merkelRoot) : "",
    };
  },

  toJSON(message: Merkel): unknown {
    const obj: any = {};
    message.datahash !== undefined && (obj.datahash = message.datahash);
    message.merkelRoot !== undefined && (obj.merkelRoot = message.merkelRoot);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Merkel>, I>>(object: I): Merkel {
    const message = createBaseMerkel();
    message.datahash = object.datahash ?? "";
    message.merkelRoot = object.merkelRoot ?? "";
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
