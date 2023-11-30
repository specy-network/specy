/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
* - TYPE_UNSPECIFIED: Default zero value enumeration
 - TYPE_EXECUTE_TX: Execute a transaction on an interchain accounts host chain
*/
export enum InterchainAccountsv1Type {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  TYPE_EXECUTE_TX = "TYPE_EXECUTE_TX",
}

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface SpecyCondition {
  /** @format uint64 */
  intervalType?: string;

  /** @format uint64 */
  number?: string;
}

export interface SpecyCurrentExecutorStatus {
  currentExecutor?: string;

  /** @format int64 */
  changeHeight?: string;
}

export interface SpecyDeposit {
  address?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: V1Beta1Coin;
}

export interface SpecyExecuteRecord {
  owner?: string;
  name?: string;

  /** @format uint64 */
  position?: string;
  executor?: string;

  /** @format uint64 */
  timestamp?: string;
  txHash?: string;

  /** @format uint64 */
  amount?: string;
}

export interface SpecyExecutor {
  address?: string;
  iasAttestationReport?: string;
  enclavePk?: string;
  valAddr?: string;
}

export interface SpecyHistoryExecuteCount {
  /** @format uint64 */
  count?: string;
}

export type SpecyMsgCancelExecutorResponse = object;

export type SpecyMsgCancelTaskResponse = object;

export type SpecyMsgCreateExecutorResponse = object;

export type SpecyMsgCreateTaskResponse = object;

export type SpecyMsgDepositBalanceResponse = object;

export type SpecyMsgEditExecutorResponse = object;

export type SpecyMsgEditTaskResponse = object;

export type SpecyMsgExecuteTaskResponse = object;

export type SpecyMsgWithdrawBalanceResponse = object;

export interface SpecyQueryAllDepositResponse {
  deposit?: SpecyDeposit[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface SpecyQueryAllExecuteRecordResponse {
  executeRecord?: SpecyExecuteRecord[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface SpecyQueryAllExecutorResponse {
  executor?: SpecyExecutor[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface SpecyQueryAllTaskResponse {
  task?: SpecyTask[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface SpecyQueryExecuteRecordAllByOwnerAndNameResponse {
  records?: SpecyExecuteRecord[];
}

export interface SpecyQueryGetCurrentExecutorStatusResponse {
  CurrentExecutorStatus?: SpecyCurrentExecutorStatus;
}

export interface SpecyQueryGetDepositResponse {
  deposit?: SpecyDeposit;
}

export interface SpecyQueryGetExecuteRecordResponse {
  executeRecord?: SpecyExecuteRecord;
}

export interface SpecyQueryGetExecutorResponse {
  executor?: SpecyExecutor;
}

export interface SpecyQueryGetHistoryExecuteCountResponse {
  HistoryExecuteCount?: SpecyHistoryExecuteCount;
}

export interface SpecyQueryGetTaskResponse {
  task?: SpecyTask;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface SpecyQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: SpecyspecyParams;
}

export interface SpecyQueryPoolResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  totalDeposit?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  currentReward?: V1Beta1Coin;
}

export interface SpecyQueryTaskAllByOwnerResponse {
  tasks?: SpecyTask[];
}

export interface SpecyTask {
  owner?: string;
  name?: string;
  hash?: string;
  connectionId?: string;
  msg?: string;
  ruleFiles?: string;

  /** @format uint64 */
  taskType?: string;
  scheduleType?: SpecyCondition;

  /** @format uint64 */
  updateTime?: string;

  /** @format uint64 */
  updateBlockHeight?: string;
  checkData?: string;
}

/**
 * Params defines the parameters for the module.
 */
export interface SpecyspecyParams {
  /** @format uint64 */
  intervalBlock?: string;
  commissionDenom?: string;

  /** @format uint64 */
  amount?: string;
}

/**
 * InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field.
 */
export interface V1InterchainAccountPacketData {
  /**
   * - TYPE_UNSPECIFIED: Default zero value enumeration
   *  - TYPE_EXECUTE_TX: Execute a transaction on an interchain accounts host chain
   */
  type?: InterchainAccountsv1Type;

  /** @format byte */
  data?: string;
  memo?: string;
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title specy/specy/condition.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCurrentExecutorStatus
   * @summary Queries a CurrentExecutorStatus by index.
   * @request GET:/specy-network/specy/specy/current_executor_status
   */
  queryCurrentExecutorStatus = (params: RequestParams = {}) =>
    this.request<SpecyQueryGetCurrentExecutorStatusResponse, RpcStatus>({
      path: `/specy-network/specy/specy/current_executor_status`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDepositAll
   * @request GET:/specy-network/specy/specy/deposit
   */
  queryDepositAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<SpecyQueryAllDepositResponse, RpcStatus>({
      path: `/specy-network/specy/specy/deposit`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDeposit
   * @summary Queries a list of Deposit items.
   * @request GET:/specy-network/specy/specy/deposit/{address}
   */
  queryDeposit = (address: string, params: RequestParams = {}) =>
    this.request<SpecyQueryGetDepositResponse, RpcStatus>({
      path: `/specy-network/specy/specy/deposit/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecuteRecordAll
   * @request GET:/specy-network/specy/specy/execute_record
   */
  queryExecuteRecordAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<SpecyQueryAllExecuteRecordResponse, RpcStatus>({
      path: `/specy-network/specy/specy/execute_record`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecuteRecord
   * @summary Queries a list of ExecuteRecord items.
   * @request GET:/specy-network/specy/specy/execute_record/{owner}/{name}/{position}
   */
  queryExecuteRecord = (owner: string, name: string, position: string, params: RequestParams = {}) =>
    this.request<SpecyQueryGetExecuteRecordResponse, RpcStatus>({
      path: `/specy-network/specy/specy/execute_record/${owner}/${name}/${position}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecuteRecordAllByOwnerAndName
   * @summary Queries a list of ExecuteRecordAllByOwnerAndName items.
   * @request GET:/specy-network/specy/specy/execute_record_all_by_owner_and_name/{owner}/{name}
   */
  queryExecuteRecordAllByOwnerAndName = (owner: string, name: string, params: RequestParams = {}) =>
    this.request<SpecyQueryExecuteRecordAllByOwnerAndNameResponse, RpcStatus>({
      path: `/specy-network/specy/specy/execute_record_all_by_owner_and_name/${owner}/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecutorAll
   * @request GET:/specy-network/specy/specy/executor
   */
  queryExecutorAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<SpecyQueryAllExecutorResponse, RpcStatus>({
      path: `/specy-network/specy/specy/executor`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExecutor
   * @summary Queries a list of Executor items.
   * @request GET:/specy-network/specy/specy/executor/{address}
   */
  queryExecutor = (address: string, params: RequestParams = {}) =>
    this.request<SpecyQueryGetExecutorResponse, RpcStatus>({
      path: `/specy-network/specy/specy/executor/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHistoryExecuteCount
   * @summary Queries a HistoryExecuteCount by index.
   * @request GET:/specy-network/specy/specy/history_execute_count
   */
  queryHistoryExecuteCount = (params: RequestParams = {}) =>
    this.request<SpecyQueryGetHistoryExecuteCountResponse, RpcStatus>({
      path: `/specy-network/specy/specy/history_execute_count`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/specy-network/specy/specy/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<SpecyQueryParamsResponse, RpcStatus>({
      path: `/specy-network/specy/specy/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPool
   * @summary Queries a list of Pool items.
   * @request GET:/specy-network/specy/specy/pool
   */
  queryPool = (params: RequestParams = {}) =>
    this.request<SpecyQueryPoolResponse, RpcStatus>({
      path: `/specy-network/specy/specy/pool`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTaskAll
   * @request GET:/specy-network/specy/specy/task
   */
  queryTaskAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<SpecyQueryAllTaskResponse, RpcStatus>({
      path: `/specy-network/specy/specy/task`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTask
   * @summary Queries a list of Task items.
   * @request GET:/specy-network/specy/specy/task/{owner}/{name}
   */
  queryTask = (owner: string, name: string, params: RequestParams = {}) =>
    this.request<SpecyQueryGetTaskResponse, RpcStatus>({
      path: `/specy-network/specy/specy/task/${owner}/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTaskAllByOwner
   * @summary Queries a list of TaskAllByOwner items.
   * @request GET:/specy-network/specy/specy/task_all_by_owner/{owner}
   */
  queryTaskAllByOwner = (owner: string, params: RequestParams = {}) =>
    this.request<SpecyQueryTaskAllByOwnerResponse, RpcStatus>({
      path: `/specy-network/specy/specy/task_all_by_owner/${owner}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
