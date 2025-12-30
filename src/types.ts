import type { components } from "./generated-types/openai-types.ts"
// deno-lint-ignore-file no-namespace
import type { Logger } from "./log.ts"

export declare namespace OpenAI {
  namespace Chat {
    type ChatCompletionCreateParams = components["schemas"]["CreateChatCompletionRequest"]
    type ChatCompletionChunk = components["schemas"]["CreateChatCompletionStreamResponse"]
    type ChatCompletion = components["schemas"]["CreateChatCompletionResponse"]
    type ChatCompletionMessageParam = components["schemas"]["ChatCompletionRequestMessage"]
    type CreateEmbeddingRequest = components["schemas"]["CreateEmbeddingRequest"]
    type FunctionObject = components["schemas"]["FunctionObject"]
  }
  namespace Models {
    type ModelsPage = components["schemas"]["ListModelsResponse"]
    type Model = components["schemas"]["Model"]
  }
  namespace Embeddings {
    type EmbeddingCreateParams = components["schemas"]["CreateEmbeddingRequest"]
    type CreateEmbeddingResponse = components["schemas"]["CreateEmbeddingResponse"]
  }
}

// export type { OpenAI } from "https://deno.land/x/openai@v4.28.0/mod.ts"

declare global {
  interface Request {
    logger: Logger | undefined
  }
}


/**
 * Types for Hono.
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Context } from "./context.ts"
import type {
  IfAnyThenEmptyObject,
  IsAny,
  JSONValue,
  RemoveBlankRecord,
  Simplify,
  UnionToIntersection,
} from "./utils/types.ts"
import type { CustomHeader, RequestHeader } from "./utils/headers.ts"
import type { StatusCode } from "./utils/http-status.ts"
////////////////////////////////////////
//////                            //////
//////           Values           //////
//////                            //////
////////////////////////////////////////

export type Bindings = object
export type Variables = object

export type BlankEnv = {}
export type Env = {
  Bindings?: Bindings
  Variables?: Variables
}

export type Next = () => Promise<void>

export type ExtractInput<I extends Input | Input['in']> = I extends Input
  ? unknown extends I['in']
    ? {}
    : I['in']
  : I
export type Input = {
  in?: {}
  out?: {}
  outputFormat?: ResponseFormat
}

export type BlankSchema = {}
export type BlankInput = {}

////////////////////////////////////////
//////                            //////
//////          Routes            //////
//////                            //////
////////////////////////////////////////

export interface RouterRoute {
  basePath: string
  path: string
  method: string
  handler: H
}

////////////////////////////////////////
//////                            //////
//////          Handlers          //////
//////                            //////
////////////////////////////////////////

export type HandlerResponse<O> =
  | Response
  | TypedResponse<O>
  | Promise<Response | TypedResponse<O>>
  | Promise<void>

export type Handler<
  E extends Env = any,
  P extends string = any,
  I extends Input = BlankInput,
  R extends HandlerResponse<any> = any,
> = (c: Context<E, P, I>, next: Next) => R

export type MiddlewareHandler<
  E extends Env = any,
  P extends string = string,
  I extends Input = {},
  R extends HandlerResponse<any> = Response,
> = (c: Context<E, P, I>, next: Next) => Promise<R | void>

export type H<
  E extends Env = any,
  P extends string = any,
  I extends Input = BlankInput,
  R extends HandlerResponse<any> = any,
> = Handler<E, P, I, R> | MiddlewareHandler<E, P, I, R>

/**
 * You can extend this interface to define a custom `c.notFound()` Response type.
 *
 * @example
 * declare module 'hono' {
 *   interface NotFoundResponse extends Response, TypedResponse<string, 404, 'text'> {}
 * }
 */
export interface NotFoundResponse {}

export type NotFoundHandler<E extends Env = any> = (
  c: Context<E>
) => NotFoundResponse extends Response
  ? NotFoundResponse | Promise<NotFoundResponse>
  : Response | Promise<Response>

export interface HTTPResponseError extends Error {
  getResponse: () => Response
}
export type ErrorHandler<E extends Env = any> = (
  err: Error | HTTPResponseError,
  c: Context<E>
) => Response | Promise<Response>



////////////////////////////////////////
//////                            //////
//////        TypedResponse       //////
//////                            //////
////////////////////////////////////////

export type KnownResponseFormat = 'json' | 'text' | 'redirect'
export type ResponseFormat = KnownResponseFormat | string


export type TypedResponse<
  T = unknown,
  U extends StatusCode = StatusCode,
  F extends ResponseFormat = T extends string
    ? 'text'
    : T extends JSONValue
      ? 'json'
      : ResponseFormat,
> = {
  _data: T
  _status: U
  _format: F
}


////////////////////////////////////////
//////                            //////
//////         FetchEvent         //////
//////                            //////
////////////////////////////////////////

export abstract class FetchEventLike {
  abstract readonly request: Request
  abstract respondWith(promise: Response | Promise<Response>): void
  abstract passThroughOnException(): void
  abstract waitUntil(promise: Promise<void>): void
}

////////////////////////////////////////
//////                            //////
//////          Routes            //////
//////                            //////
////////////////////////////////////////

export interface RouterRoute {
  basePath: string
  path: string
  method: string
  handler: H
}


////////////////////////////////////////
//////                            //////
//////         Router.ts          //////
//////                            //////
////////////////////////////////////////

/**
 * Type representing a map of parameter indices.
 */
export type ParamIndexMap = Record<string, number>
/**
 * Type representing a stash of parameters.
 */
export type ParamStash = string[]
/**
 * Type representing a map of parameters.
 */
export type Params = Record<string, string>
/**
 * Type representing the result of a route match.
 *
 * The result can be in one of two formats:
 * 1. An array of handlers with their corresponding parameter index maps, followed by a parameter stash.
 * 2. An array of handlers with their corresponding parameter maps.
 *
 * Example:
 *
 * [[handler, paramIndexMap][], paramArray]
 * ```typescript
 * [
 *   [
 *     [middlewareA, {}],                     // '*'
 *     [funcA,       {'id': 0}],              // '/user/:id/*'
 *     [funcB,       {'id': 0, 'action': 1}], // '/user/:id/:action'
 *   ],
 *   ['123', 'abc']
 * ]
 * ```
 *
 * [[handler, params][]]
 * ```typescript
 * [
 *   [
 *     [middlewareA, {}],                             // '*'
 *     [funcA,       {'id': '123'}],                  // '/user/:id/*'
 *     [funcB,       {'id': '123', 'action': 'abc'}], // '/user/:id/:action'
 *   ]
 * ]
 * ```
 */
export type Result<T> = [[T, ParamIndexMap][], ParamStash] | [[T, Params][]]

/**
 * Error class representing an unsupported path error.
 */
export class UnsupportedPathError extends Error {}