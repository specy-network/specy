/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Merkel } from "./merkel";
import { Params } from "./params";

export const protobufPackage = "specy.rewards";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMerkelRequest {
  datahash: string;
}

export interface QueryGetMerkelResponse {
  merkel: Merkel | undefined;
}

export interface QueryAllMerkelRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMerkelResponse {
  merkel: Merkel[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMerkelRequest(): QueryGetMerkelRequest {
  return { datahash: "" };
}

export const QueryGetMerkelRequest = {
  encode(message: QueryGetMerkelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datahash !== "") {
      writer.uint32(10).string(message.datahash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMerkelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMerkelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datahash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMerkelRequest {
    return { datahash: isSet(object.datahash) ? String(object.datahash) : "" };
  },

  toJSON(message: QueryGetMerkelRequest): unknown {
    const obj: any = {};
    message.datahash !== undefined && (obj.datahash = message.datahash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMerkelRequest>, I>>(object: I): QueryGetMerkelRequest {
    const message = createBaseQueryGetMerkelRequest();
    message.datahash = object.datahash ?? "";
    return message;
  },
};

function createBaseQueryGetMerkelResponse(): QueryGetMerkelResponse {
  return { merkel: undefined };
}

export const QueryGetMerkelResponse = {
  encode(message: QueryGetMerkelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merkel !== undefined) {
      Merkel.encode(message.merkel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMerkelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMerkelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkel = Merkel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMerkelResponse {
    return { merkel: isSet(object.merkel) ? Merkel.fromJSON(object.merkel) : undefined };
  },

  toJSON(message: QueryGetMerkelResponse): unknown {
    const obj: any = {};
    message.merkel !== undefined && (obj.merkel = message.merkel ? Merkel.toJSON(message.merkel) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMerkelResponse>, I>>(object: I): QueryGetMerkelResponse {
    const message = createBaseQueryGetMerkelResponse();
    message.merkel = (object.merkel !== undefined && object.merkel !== null)
      ? Merkel.fromPartial(object.merkel)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMerkelRequest(): QueryAllMerkelRequest {
  return { pagination: undefined };
}

export const QueryAllMerkelRequest = {
  encode(message: QueryAllMerkelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMerkelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMerkelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMerkelRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMerkelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMerkelRequest>, I>>(object: I): QueryAllMerkelRequest {
    const message = createBaseQueryAllMerkelRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMerkelResponse(): QueryAllMerkelResponse {
  return { merkel: [], pagination: undefined };
}

export const QueryAllMerkelResponse = {
  encode(message: QueryAllMerkelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.merkel) {
      Merkel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMerkelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMerkelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkel.push(Merkel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMerkelResponse {
    return {
      merkel: Array.isArray(object?.merkel) ? object.merkel.map((e: any) => Merkel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMerkelResponse): unknown {
    const obj: any = {};
    if (message.merkel) {
      obj.merkel = message.merkel.map((e) => e ? Merkel.toJSON(e) : undefined);
    } else {
      obj.merkel = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMerkelResponse>, I>>(object: I): QueryAllMerkelResponse {
    const message = createBaseQueryAllMerkelResponse();
    message.merkel = object.merkel?.map((e) => Merkel.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Merkel by index. */
  Merkel(request: QueryGetMerkelRequest): Promise<QueryGetMerkelResponse>;
  /** Queries a list of Merkel items. */
  MerkelAll(request: QueryAllMerkelRequest): Promise<QueryAllMerkelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Merkel = this.Merkel.bind(this);
    this.MerkelAll = this.MerkelAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("specy.rewards.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Merkel(request: QueryGetMerkelRequest): Promise<QueryGetMerkelResponse> {
    const data = QueryGetMerkelRequest.encode(request).finish();
    const promise = this.rpc.request("specy.rewards.Query", "Merkel", data);
    return promise.then((data) => QueryGetMerkelResponse.decode(new _m0.Reader(data)));
  }

  MerkelAll(request: QueryAllMerkelRequest): Promise<QueryAllMerkelResponse> {
    const data = QueryAllMerkelRequest.encode(request).finish();
    const promise = this.rpc.request("specy.rewards.Query", "MerkelAll", data);
    return promise.then((data) => QueryAllMerkelResponse.decode(new _m0.Reader(data)));
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
