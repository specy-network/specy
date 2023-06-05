/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Executor } from "./executor";
import { Params } from "./params";
import { Task } from "./task";

export const protobufPackage = "specy.specy";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetExecutorRequest {
  address: string;
}

export interface QueryGetExecutorResponse {
  executor: Executor | undefined;
}

export interface QueryAllExecutorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExecutorResponse {
  executor: Executor[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTaskRequest {
  taskHash: string;
}

export interface QueryGetTaskResponse {
  task: Task | undefined;
}

export interface QueryAllTaskRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTaskResponse {
  task: Task[];
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

function createBaseQueryGetExecutorRequest(): QueryGetExecutorRequest {
  return { address: "" };
}

export const QueryGetExecutorRequest = {
  encode(message: QueryGetExecutorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExecutorRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetExecutorRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExecutorRequest>, I>>(object: I): QueryGetExecutorRequest {
    const message = createBaseQueryGetExecutorRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetExecutorResponse(): QueryGetExecutorResponse {
  return { executor: undefined };
}

export const QueryGetExecutorResponse = {
  encode(message: QueryGetExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.executor !== undefined) {
      Executor.encode(message.executor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executor = Executor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExecutorResponse {
    return { executor: isSet(object.executor) ? Executor.fromJSON(object.executor) : undefined };
  },

  toJSON(message: QueryGetExecutorResponse): unknown {
    const obj: any = {};
    message.executor !== undefined && (obj.executor = message.executor ? Executor.toJSON(message.executor) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExecutorResponse>, I>>(object: I): QueryGetExecutorResponse {
    const message = createBaseQueryGetExecutorResponse();
    message.executor = (object.executor !== undefined && object.executor !== null)
      ? Executor.fromPartial(object.executor)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExecutorRequest(): QueryAllExecutorRequest {
  return { pagination: undefined };
}

export const QueryAllExecutorRequest = {
  encode(message: QueryAllExecutorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutorRequest();
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

  fromJSON(object: any): QueryAllExecutorRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllExecutorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExecutorRequest>, I>>(object: I): QueryAllExecutorRequest {
    const message = createBaseQueryAllExecutorRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExecutorResponse(): QueryAllExecutorResponse {
  return { executor: [], pagination: undefined };
}

export const QueryAllExecutorResponse = {
  encode(message: QueryAllExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.executor) {
      Executor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executor.push(Executor.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllExecutorResponse {
    return {
      executor: Array.isArray(object?.executor) ? object.executor.map((e: any) => Executor.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExecutorResponse): unknown {
    const obj: any = {};
    if (message.executor) {
      obj.executor = message.executor.map((e) => e ? Executor.toJSON(e) : undefined);
    } else {
      obj.executor = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllExecutorResponse>, I>>(object: I): QueryAllExecutorResponse {
    const message = createBaseQueryAllExecutorResponse();
    message.executor = object.executor?.map((e) => Executor.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTaskRequest(): QueryGetTaskRequest {
  return { taskHash: "" };
}

export const QueryGetTaskRequest = {
  encode(message: QueryGetTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskHash !== "") {
      writer.uint32(10).string(message.taskHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTaskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTaskRequest {
    return { taskHash: isSet(object.taskHash) ? String(object.taskHash) : "" };
  },

  toJSON(message: QueryGetTaskRequest): unknown {
    const obj: any = {};
    message.taskHash !== undefined && (obj.taskHash = message.taskHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTaskRequest>, I>>(object: I): QueryGetTaskRequest {
    const message = createBaseQueryGetTaskRequest();
    message.taskHash = object.taskHash ?? "";
    return message;
  },
};

function createBaseQueryGetTaskResponse(): QueryGetTaskResponse {
  return { task: undefined };
}

export const QueryGetTaskResponse = {
  encode(message: QueryGetTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.task !== undefined) {
      Task.encode(message.task, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTaskResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.task = Task.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTaskResponse {
    return { task: isSet(object.task) ? Task.fromJSON(object.task) : undefined };
  },

  toJSON(message: QueryGetTaskResponse): unknown {
    const obj: any = {};
    message.task !== undefined && (obj.task = message.task ? Task.toJSON(message.task) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTaskResponse>, I>>(object: I): QueryGetTaskResponse {
    const message = createBaseQueryGetTaskResponse();
    message.task = (object.task !== undefined && object.task !== null) ? Task.fromPartial(object.task) : undefined;
    return message;
  },
};

function createBaseQueryAllTaskRequest(): QueryAllTaskRequest {
  return { pagination: undefined };
}

export const QueryAllTaskRequest = {
  encode(message: QueryAllTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTaskRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTaskRequest();
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

  fromJSON(object: any): QueryAllTaskRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTaskRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTaskRequest>, I>>(object: I): QueryAllTaskRequest {
    const message = createBaseQueryAllTaskRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTaskResponse(): QueryAllTaskResponse {
  return { task: [], pagination: undefined };
}

export const QueryAllTaskResponse = {
  encode(message: QueryAllTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.task) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTaskResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.task.push(Task.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTaskResponse {
    return {
      task: Array.isArray(object?.task) ? object.task.map((e: any) => Task.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTaskResponse): unknown {
    const obj: any = {};
    if (message.task) {
      obj.task = message.task.map((e) => e ? Task.toJSON(e) : undefined);
    } else {
      obj.task = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTaskResponse>, I>>(object: I): QueryAllTaskResponse {
    const message = createBaseQueryAllTaskResponse();
    message.task = object.task?.map((e) => Task.fromPartial(e)) || [];
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
  /** Queries a Executor by index. */
  Executor(request: QueryGetExecutorRequest): Promise<QueryGetExecutorResponse>;
  /** Queries a list of Executor items. */
  ExecutorAll(request: QueryAllExecutorRequest): Promise<QueryAllExecutorResponse>;
  /** Queries a Task by index. */
  Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
  /** Queries a list of Task items. */
  TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Executor = this.Executor.bind(this);
    this.ExecutorAll = this.ExecutorAll.bind(this);
    this.Task = this.Task.bind(this);
    this.TaskAll = this.TaskAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Executor(request: QueryGetExecutorRequest): Promise<QueryGetExecutorResponse> {
    const data = QueryGetExecutorRequest.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Query", "Executor", data);
    return promise.then((data) => QueryGetExecutorResponse.decode(new _m0.Reader(data)));
  }

  ExecutorAll(request: QueryAllExecutorRequest): Promise<QueryAllExecutorResponse> {
    const data = QueryAllExecutorRequest.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Query", "ExecutorAll", data);
    return promise.then((data) => QueryAllExecutorResponse.decode(new _m0.Reader(data)));
  }

  Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse> {
    const data = QueryGetTaskRequest.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Query", "Task", data);
    return promise.then((data) => QueryGetTaskResponse.decode(new _m0.Reader(data)));
  }

  TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse> {
    const data = QueryAllTaskRequest.encode(request).finish();
    const promise = this.rpc.request("specy.specy.Query", "TaskAll", data);
    return promise.then((data) => QueryAllTaskResponse.decode(new _m0.Reader(data)));
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
