/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { CurrentExecutorStatus } from "./current_executor_status";
import { Deposit } from "./deposit";
import { Executor } from "./executor";
import { Params } from "./params";
import { Task } from "./task";

export const protobufPackage = "specynetwork.specy.specy";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetTaskRequest {
  owner: string;
  name: string;
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

export interface QueryGetDepositRequest {
  address: string;
}

export interface QueryGetDepositResponse {
  deposit: Deposit | undefined;
}

export interface QueryAllDepositRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDepositResponse {
  deposit: Deposit[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCurrentExecutorStatusRequest {
}

export interface QueryGetCurrentExecutorStatusResponse {
  CurrentExecutorStatus: CurrentExecutorStatus | undefined;
}

export interface QueryPoolRequest {
}

export interface QueryPoolResponse {
  totalDeposit: Coin | undefined;
  currentReward: Coin | undefined;
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

function createBaseQueryGetTaskRequest(): QueryGetTaskRequest {
  return { owner: "", name: "" };
}

export const QueryGetTaskRequest = {
  encode(message: QueryGetTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
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
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTaskRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QueryGetTaskRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTaskRequest>, I>>(object: I): QueryGetTaskRequest {
    const message = createBaseQueryGetTaskRequest();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
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

function createBaseQueryGetDepositRequest(): QueryGetDepositRequest {
  return { address: "" };
}

export const QueryGetDepositRequest = {
  encode(message: QueryGetDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRequest();
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

  fromJSON(object: any): QueryGetDepositRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetDepositRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDepositRequest>, I>>(object: I): QueryGetDepositRequest {
    const message = createBaseQueryGetDepositRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetDepositResponse(): QueryGetDepositResponse {
  return { deposit: undefined };
}

export const QueryGetDepositResponse = {
  encode(message: QueryGetDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDepositResponse {
    return { deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined };
  },

  toJSON(message: QueryGetDepositResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDepositResponse>, I>>(object: I): QueryGetDepositResponse {
    const message = createBaseQueryGetDepositResponse();
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? Deposit.fromPartial(object.deposit)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDepositRequest(): QueryAllDepositRequest {
  return { pagination: undefined };
}

export const QueryAllDepositRequest = {
  encode(message: QueryAllDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRequest();
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

  fromJSON(object: any): QueryAllDepositRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllDepositRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDepositRequest>, I>>(object: I): QueryAllDepositRequest {
    const message = createBaseQueryAllDepositRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDepositResponse(): QueryAllDepositResponse {
  return { deposit: [], pagination: undefined };
}

export const QueryAllDepositResponse = {
  encode(message: QueryAllDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposit) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit.push(Deposit.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllDepositResponse {
    return {
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Deposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDepositResponse): unknown {
    const obj: any = {};
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDepositResponse>, I>>(object: I): QueryAllDepositResponse {
    const message = createBaseQueryAllDepositResponse();
    message.deposit = object.deposit?.map((e) => Deposit.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCurrentExecutorStatusRequest(): QueryGetCurrentExecutorStatusRequest {
  return {};
}

export const QueryGetCurrentExecutorStatusRequest = {
  encode(_: QueryGetCurrentExecutorStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentExecutorStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentExecutorStatusRequest();
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

  fromJSON(_: any): QueryGetCurrentExecutorStatusRequest {
    return {};
  },

  toJSON(_: QueryGetCurrentExecutorStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentExecutorStatusRequest>, I>>(
    _: I,
  ): QueryGetCurrentExecutorStatusRequest {
    const message = createBaseQueryGetCurrentExecutorStatusRequest();
    return message;
  },
};

function createBaseQueryGetCurrentExecutorStatusResponse(): QueryGetCurrentExecutorStatusResponse {
  return { CurrentExecutorStatus: undefined };
}

export const QueryGetCurrentExecutorStatusResponse = {
  encode(message: QueryGetCurrentExecutorStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CurrentExecutorStatus !== undefined) {
      CurrentExecutorStatus.encode(message.CurrentExecutorStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentExecutorStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentExecutorStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CurrentExecutorStatus = CurrentExecutorStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCurrentExecutorStatusResponse {
    return {
      CurrentExecutorStatus: isSet(object.CurrentExecutorStatus)
        ? CurrentExecutorStatus.fromJSON(object.CurrentExecutorStatus)
        : undefined,
    };
  },

  toJSON(message: QueryGetCurrentExecutorStatusResponse): unknown {
    const obj: any = {};
    message.CurrentExecutorStatus !== undefined && (obj.CurrentExecutorStatus = message.CurrentExecutorStatus
      ? CurrentExecutorStatus.toJSON(message.CurrentExecutorStatus)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentExecutorStatusResponse>, I>>(
    object: I,
  ): QueryGetCurrentExecutorStatusResponse {
    const message = createBaseQueryGetCurrentExecutorStatusResponse();
    message.CurrentExecutorStatus =
      (object.CurrentExecutorStatus !== undefined && object.CurrentExecutorStatus !== null)
        ? CurrentExecutorStatus.fromPartial(object.CurrentExecutorStatus)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}

export const QueryPoolRequest = {
  encode(_: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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

  fromJSON(_: any): QueryPoolRequest {
    return {};
  },

  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(_: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { totalDeposit: undefined, currentReward: undefined };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalDeposit !== undefined) {
      Coin.encode(message.totalDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentReward !== undefined) {
      Coin.encode(message.currentReward, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.currentReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      totalDeposit: isSet(object.totalDeposit) ? Coin.fromJSON(object.totalDeposit) : undefined,
      currentReward: isSet(object.currentReward) ? Coin.fromJSON(object.currentReward) : undefined,
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.totalDeposit !== undefined
      && (obj.totalDeposit = message.totalDeposit ? Coin.toJSON(message.totalDeposit) : undefined);
    message.currentReward !== undefined
      && (obj.currentReward = message.currentReward ? Coin.toJSON(message.currentReward) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.totalDeposit = (object.totalDeposit !== undefined && object.totalDeposit !== null)
      ? Coin.fromPartial(object.totalDeposit)
      : undefined;
    message.currentReward = (object.currentReward !== undefined && object.currentReward !== null)
      ? Coin.fromPartial(object.currentReward)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Task items. */
  Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
  TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
  /** Queries a list of Executor items. */
  Executor(request: QueryGetExecutorRequest): Promise<QueryGetExecutorResponse>;
  ExecutorAll(request: QueryAllExecutorRequest): Promise<QueryAllExecutorResponse>;
  /** Queries a list of Deposit items. */
  Deposit(request: QueryGetDepositRequest): Promise<QueryGetDepositResponse>;
  DepositAll(request: QueryAllDepositRequest): Promise<QueryAllDepositResponse>;
  /** Queries a CurrentExecutorStatus by index. */
  CurrentExecutorStatus(request: QueryGetCurrentExecutorStatusRequest): Promise<QueryGetCurrentExecutorStatusResponse>;
  /** Queries a list of Pool items. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Task = this.Task.bind(this);
    this.TaskAll = this.TaskAll.bind(this);
    this.Executor = this.Executor.bind(this);
    this.ExecutorAll = this.ExecutorAll.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.DepositAll = this.DepositAll.bind(this);
    this.CurrentExecutorStatus = this.CurrentExecutorStatus.bind(this);
    this.Pool = this.Pool.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse> {
    const data = QueryGetTaskRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "Task", data);
    return promise.then((data) => QueryGetTaskResponse.decode(new _m0.Reader(data)));
  }

  TaskAll(request: QueryAllTaskRequest): Promise<QueryAllTaskResponse> {
    const data = QueryAllTaskRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "TaskAll", data);
    return promise.then((data) => QueryAllTaskResponse.decode(new _m0.Reader(data)));
  }

  Executor(request: QueryGetExecutorRequest): Promise<QueryGetExecutorResponse> {
    const data = QueryGetExecutorRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "Executor", data);
    return promise.then((data) => QueryGetExecutorResponse.decode(new _m0.Reader(data)));
  }

  ExecutorAll(request: QueryAllExecutorRequest): Promise<QueryAllExecutorResponse> {
    const data = QueryAllExecutorRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "ExecutorAll", data);
    return promise.then((data) => QueryAllExecutorResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: QueryGetDepositRequest): Promise<QueryGetDepositResponse> {
    const data = QueryGetDepositRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "Deposit", data);
    return promise.then((data) => QueryGetDepositResponse.decode(new _m0.Reader(data)));
  }

  DepositAll(request: QueryAllDepositRequest): Promise<QueryAllDepositResponse> {
    const data = QueryAllDepositRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "DepositAll", data);
    return promise.then((data) => QueryAllDepositResponse.decode(new _m0.Reader(data)));
  }

  CurrentExecutorStatus(request: QueryGetCurrentExecutorStatusRequest): Promise<QueryGetCurrentExecutorStatusResponse> {
    const data = QueryGetCurrentExecutorStatusRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "CurrentExecutorStatus", data);
    return promise.then((data) => QueryGetCurrentExecutorStatusResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("specynetwork.specy.specy.Query", "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
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
