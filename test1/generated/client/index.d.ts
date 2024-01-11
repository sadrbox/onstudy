
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model person
 * 
 */
export type person = $Result.DefaultSelection<Prisma.$personPayload>
/**
 * Model v8users
 * 
 */
export type v8users = $Result.DefaultSelection<Prisma.$v8usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.person`: Exposes CRUD operations for the **person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.personDelegate<ExtArgs>;

  /**
   * `prisma.v8users`: Exposes CRUD operations for the **v8users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V8users
    * const v8users = await prisma.v8users.findMany()
    * ```
    */
  get v8users(): Prisma.v8usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    person: 'person',
    v8users: 'v8users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'person' | 'v8users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      person: {
        payload: Prisma.$personPayload<ExtArgs>
        fields: Prisma.personFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findFirst: {
            args: Prisma.personFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findMany: {
            args: Prisma.personFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          create: {
            args: Prisma.personCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          createMany: {
            args: Prisma.personCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.personDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          update: {
            args: Prisma.personUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          deleteMany: {
            args: Prisma.personDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.personUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.personUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.personGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.personCountArgs<ExtArgs>,
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      v8users: {
        payload: Prisma.$v8usersPayload<ExtArgs>
        fields: Prisma.v8usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.v8usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.v8usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload>
          }
          findFirst: {
            args: Prisma.v8usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.v8usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload>
          }
          findMany: {
            args: Prisma.v8usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload>[]
          }
          create: {
            args: Prisma.v8usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload>
          }
          createMany: {
            args: Prisma.v8usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.v8usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload>
          }
          update: {
            args: Prisma.v8usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload>
          }
          deleteMany: {
            args: Prisma.v8usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.v8usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.v8usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$v8usersPayload>
          }
          aggregate: {
            args: Prisma.V8usersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV8users>
          }
          groupBy: {
            args: Prisma.v8usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V8usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.v8usersCountArgs<ExtArgs>,
            result: $Utils.Optional<V8usersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    RoleID: number | null
    UsSprH: number | null
  }

  export type PersonSumAggregateOutputType = {
    RoleID: number | null
    UsSprH: number | null
  }

  export type PersonMinAggregateOutputType = {
    ID: Buffer | null
    Name: string | null
    Descr: Buffer | null
    OSName: string | null
    Changed: Date | null
    RoleID: number | null
    Show: Buffer | null
    Data: Buffer | null
    EAuth: Buffer | null
    AdmRole: Buffer | null
    UsSprH: number | null
  }

  export type PersonMaxAggregateOutputType = {
    ID: Buffer | null
    Name: string | null
    Descr: Buffer | null
    OSName: string | null
    Changed: Date | null
    RoleID: number | null
    Show: Buffer | null
    Data: Buffer | null
    EAuth: Buffer | null
    AdmRole: Buffer | null
    UsSprH: number | null
  }

  export type PersonCountAggregateOutputType = {
    ID: number
    Name: number
    Descr: number
    OSName: number
    Changed: number
    RoleID: number
    Show: number
    Data: number
    EAuth: number
    AdmRole: number
    UsSprH: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    RoleID?: true
    UsSprH?: true
  }

  export type PersonSumAggregateInputType = {
    RoleID?: true
    UsSprH?: true
  }

  export type PersonMinAggregateInputType = {
    ID?: true
    Name?: true
    Descr?: true
    OSName?: true
    Changed?: true
    RoleID?: true
    Show?: true
    Data?: true
    EAuth?: true
    AdmRole?: true
    UsSprH?: true
  }

  export type PersonMaxAggregateInputType = {
    ID?: true
    Name?: true
    Descr?: true
    OSName?: true
    Changed?: true
    RoleID?: true
    Show?: true
    Data?: true
    EAuth?: true
    AdmRole?: true
    UsSprH?: true
  }

  export type PersonCountAggregateInputType = {
    ID?: true
    Name?: true
    Descr?: true
    OSName?: true
    Changed?: true
    RoleID?: true
    Show?: true
    Data?: true
    EAuth?: true
    AdmRole?: true
    UsSprH?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which person to aggregate.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type personGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personWhereInput
    orderBy?: personOrderByWithAggregationInput | personOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: personScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    ID: Buffer
    Name: string
    Descr: Buffer
    OSName: string
    Changed: Date
    RoleID: number
    Show: Buffer
    Data: Buffer
    EAuth: Buffer
    AdmRole: Buffer
    UsSprH: number
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends personGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type personSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Name?: boolean
    Descr?: boolean
    OSName?: boolean
    Changed?: boolean
    RoleID?: boolean
    Show?: boolean
    Data?: boolean
    EAuth?: boolean
    AdmRole?: boolean
    UsSprH?: boolean
  }, ExtArgs["result"]["person"]>

  export type personSelectScalar = {
    ID?: boolean
    Name?: boolean
    Descr?: boolean
    OSName?: boolean
    Changed?: boolean
    RoleID?: boolean
    Show?: boolean
    Data?: boolean
    EAuth?: boolean
    AdmRole?: boolean
    UsSprH?: boolean
  }


  export type $personPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "person"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: Buffer
      Name: string
      Descr: Buffer
      OSName: string
      Changed: Date
      RoleID: number
      Show: Buffer
      Data: Buffer
      EAuth: Buffer
      AdmRole: Buffer
      UsSprH: number
    }, ExtArgs["result"]["person"]>
    composites: {}
  }


  type personGetPayload<S extends boolean | null | undefined | personDefaultArgs> = $Result.GetResult<Prisma.$personPayload, S>

  type personCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<personFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PersonCountAggregateInputType | true
    }

  export interface personDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['person'], meta: { name: 'person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {personFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends personFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, personFindUniqueArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {personFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends personFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, personFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends personFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, personFindFirstArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends personFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, personFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const personWithIDOnly = await prisma.person.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends personFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Person.
     * @param {personCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends personCreateArgs<ExtArgs>>(
      args: SelectSubset<T, personCreateArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many People.
     *     @param {personCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends personCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {personDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends personDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, personDeleteArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Person.
     * @param {personUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends personUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, personUpdateArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more People.
     * @param {personDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends personDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends personUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, personUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {personUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends personUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, personUpsertArgs<ExtArgs>>
    ): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends personCountArgs>(
      args?: Subset<T, personCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personGroupByArgs['orderBy'] }
        : { orderBy?: personGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the person model
   */
  readonly fields: personFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the person model
   */ 
  interface personFieldRefs {
    readonly ID: FieldRef<"person", 'Bytes'>
    readonly Name: FieldRef<"person", 'String'>
    readonly Descr: FieldRef<"person", 'Bytes'>
    readonly OSName: FieldRef<"person", 'String'>
    readonly Changed: FieldRef<"person", 'DateTime'>
    readonly RoleID: FieldRef<"person", 'Int'>
    readonly Show: FieldRef<"person", 'Bytes'>
    readonly Data: FieldRef<"person", 'Bytes'>
    readonly EAuth: FieldRef<"person", 'Bytes'>
    readonly AdmRole: FieldRef<"person", 'Bytes'>
    readonly UsSprH: FieldRef<"person", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * person findUnique
   */
  export type personFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }


  /**
   * person findUniqueOrThrow
   */
  export type personFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }


  /**
   * person findFirst
   */
  export type personFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * person findFirstOrThrow
   */
  export type personFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * person findMany
   */
  export type personFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * person create
   */
  export type personCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * The data needed to create a person.
     */
    data: XOR<personCreateInput, personUncheckedCreateInput>
  }


  /**
   * person createMany
   */
  export type personCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
  }


  /**
   * person update
   */
  export type personUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * The data needed to update a person.
     */
    data: XOR<personUpdateInput, personUncheckedUpdateInput>
    /**
     * Choose, which person to update.
     */
    where: personWhereUniqueInput
  }


  /**
   * person updateMany
   */
  export type personUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
  }


  /**
   * person upsert
   */
  export type personUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * The filter to search for the person to update in case it exists.
     */
    where: personWhereUniqueInput
    /**
     * In case the person found by the `where` argument doesn't exist, create a new person with this data.
     */
    create: XOR<personCreateInput, personUncheckedCreateInput>
    /**
     * In case the person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personUpdateInput, personUncheckedUpdateInput>
  }


  /**
   * person delete
   */
  export type personDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Filter which person to delete.
     */
    where: personWhereUniqueInput
  }


  /**
   * person deleteMany
   */
  export type personDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to delete
     */
    where?: personWhereInput
  }


  /**
   * person without action
   */
  export type personDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
  }



  /**
   * Model v8users
   */

  export type AggregateV8users = {
    _count: V8usersCountAggregateOutputType | null
    _avg: V8usersAvgAggregateOutputType | null
    _sum: V8usersSumAggregateOutputType | null
    _min: V8usersMinAggregateOutputType | null
    _max: V8usersMaxAggregateOutputType | null
  }

  export type V8usersAvgAggregateOutputType = {
    RolesID: number | null
  }

  export type V8usersSumAggregateOutputType = {
    RolesID: number | null
  }

  export type V8usersMinAggregateOutputType = {
    ID: Buffer | null
    Name: string | null
    Descr: string | null
    Changed: Date | null
    RolesID: number | null
    Show: Buffer | null
    Data: Buffer | null
  }

  export type V8usersMaxAggregateOutputType = {
    ID: Buffer | null
    Name: string | null
    Descr: string | null
    Changed: Date | null
    RolesID: number | null
    Show: Buffer | null
    Data: Buffer | null
  }

  export type V8usersCountAggregateOutputType = {
    ID: number
    Name: number
    Descr: number
    Changed: number
    RolesID: number
    Show: number
    Data: number
    _all: number
  }


  export type V8usersAvgAggregateInputType = {
    RolesID?: true
  }

  export type V8usersSumAggregateInputType = {
    RolesID?: true
  }

  export type V8usersMinAggregateInputType = {
    ID?: true
    Name?: true
    Descr?: true
    Changed?: true
    RolesID?: true
    Show?: true
    Data?: true
  }

  export type V8usersMaxAggregateInputType = {
    ID?: true
    Name?: true
    Descr?: true
    Changed?: true
    RolesID?: true
    Show?: true
    Data?: true
  }

  export type V8usersCountAggregateInputType = {
    ID?: true
    Name?: true
    Descr?: true
    Changed?: true
    RolesID?: true
    Show?: true
    Data?: true
    _all?: true
  }

  export type V8usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v8users to aggregate.
     */
    where?: v8usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v8users to fetch.
     */
    orderBy?: v8usersOrderByWithRelationInput | v8usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: v8usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v8users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v8users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned v8users
    **/
    _count?: true | V8usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V8usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V8usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V8usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V8usersMaxAggregateInputType
  }

  export type GetV8usersAggregateType<T extends V8usersAggregateArgs> = {
        [P in keyof T & keyof AggregateV8users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV8users[P]>
      : GetScalarType<T[P], AggregateV8users[P]>
  }




  export type v8usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: v8usersWhereInput
    orderBy?: v8usersOrderByWithAggregationInput | v8usersOrderByWithAggregationInput[]
    by: V8usersScalarFieldEnum[] | V8usersScalarFieldEnum
    having?: v8usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V8usersCountAggregateInputType | true
    _avg?: V8usersAvgAggregateInputType
    _sum?: V8usersSumAggregateInputType
    _min?: V8usersMinAggregateInputType
    _max?: V8usersMaxAggregateInputType
  }

  export type V8usersGroupByOutputType = {
    ID: Buffer
    Name: string
    Descr: string
    Changed: Date
    RolesID: number
    Show: Buffer | null
    Data: Buffer | null
    _count: V8usersCountAggregateOutputType | null
    _avg: V8usersAvgAggregateOutputType | null
    _sum: V8usersSumAggregateOutputType | null
    _min: V8usersMinAggregateOutputType | null
    _max: V8usersMaxAggregateOutputType | null
  }

  type GetV8usersGroupByPayload<T extends v8usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V8usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V8usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V8usersGroupByOutputType[P]>
            : GetScalarType<T[P], V8usersGroupByOutputType[P]>
        }
      >
    >


  export type v8usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Name?: boolean
    Descr?: boolean
    Changed?: boolean
    RolesID?: boolean
    Show?: boolean
    Data?: boolean
  }, ExtArgs["result"]["v8users"]>

  export type v8usersSelectScalar = {
    ID?: boolean
    Name?: boolean
    Descr?: boolean
    Changed?: boolean
    RolesID?: boolean
    Show?: boolean
    Data?: boolean
  }


  export type $v8usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "v8users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: Buffer
      Name: string
      Descr: string
      Changed: Date
      RolesID: number
      Show: Buffer | null
      Data: Buffer | null
    }, ExtArgs["result"]["v8users"]>
    composites: {}
  }


  type v8usersGetPayload<S extends boolean | null | undefined | v8usersDefaultArgs> = $Result.GetResult<Prisma.$v8usersPayload, S>

  type v8usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<v8usersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: V8usersCountAggregateInputType | true
    }

  export interface v8usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['v8users'], meta: { name: 'v8users' } }
    /**
     * Find zero or one V8users that matches the filter.
     * @param {v8usersFindUniqueArgs} args - Arguments to find a V8users
     * @example
     * // Get one V8users
     * const v8users = await prisma.v8users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends v8usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, v8usersFindUniqueArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V8users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {v8usersFindUniqueOrThrowArgs} args - Arguments to find a V8users
     * @example
     * // Get one V8users
     * const v8users = await prisma.v8users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends v8usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, v8usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V8users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v8usersFindFirstArgs} args - Arguments to find a V8users
     * @example
     * // Get one V8users
     * const v8users = await prisma.v8users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends v8usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, v8usersFindFirstArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V8users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v8usersFindFirstOrThrowArgs} args - Arguments to find a V8users
     * @example
     * // Get one V8users
     * const v8users = await prisma.v8users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends v8usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, v8usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V8users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v8usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V8users
     * const v8users = await prisma.v8users.findMany()
     * 
     * // Get first 10 V8users
     * const v8users = await prisma.v8users.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const v8usersWithIDOnly = await prisma.v8users.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends v8usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, v8usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V8users.
     * @param {v8usersCreateArgs} args - Arguments to create a V8users.
     * @example
     * // Create one V8users
     * const V8users = await prisma.v8users.create({
     *   data: {
     *     // ... data to create a V8users
     *   }
     * })
     * 
    **/
    create<T extends v8usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, v8usersCreateArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V8users.
     *     @param {v8usersCreateManyArgs} args - Arguments to create many V8users.
     *     @example
     *     // Create many V8users
     *     const v8users = await prisma.v8users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends v8usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, v8usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V8users.
     * @param {v8usersDeleteArgs} args - Arguments to delete one V8users.
     * @example
     * // Delete one V8users
     * const V8users = await prisma.v8users.delete({
     *   where: {
     *     // ... filter to delete one V8users
     *   }
     * })
     * 
    **/
    delete<T extends v8usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, v8usersDeleteArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V8users.
     * @param {v8usersUpdateArgs} args - Arguments to update one V8users.
     * @example
     * // Update one V8users
     * const v8users = await prisma.v8users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends v8usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, v8usersUpdateArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V8users.
     * @param {v8usersDeleteManyArgs} args - Arguments to filter V8users to delete.
     * @example
     * // Delete a few V8users
     * const { count } = await prisma.v8users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends v8usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, v8usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V8users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v8usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V8users
     * const v8users = await prisma.v8users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends v8usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, v8usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V8users.
     * @param {v8usersUpsertArgs} args - Arguments to update or create a V8users.
     * @example
     * // Update or create a V8users
     * const v8users = await prisma.v8users.upsert({
     *   create: {
     *     // ... data to create a V8users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V8users we want to update
     *   }
     * })
    **/
    upsert<T extends v8usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, v8usersUpsertArgs<ExtArgs>>
    ): Prisma__v8usersClient<$Result.GetResult<Prisma.$v8usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V8users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v8usersCountArgs} args - Arguments to filter V8users to count.
     * @example
     * // Count the number of V8users
     * const count = await prisma.v8users.count({
     *   where: {
     *     // ... the filter for the V8users we want to count
     *   }
     * })
    **/
    count<T extends v8usersCountArgs>(
      args?: Subset<T, v8usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V8usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V8users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V8usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends V8usersAggregateArgs>(args: Subset<T, V8usersAggregateArgs>): Prisma.PrismaPromise<GetV8usersAggregateType<T>>

    /**
     * Group by V8users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {v8usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends v8usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: v8usersGroupByArgs['orderBy'] }
        : { orderBy?: v8usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, v8usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV8usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the v8users model
   */
  readonly fields: v8usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for v8users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__v8usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the v8users model
   */ 
  interface v8usersFieldRefs {
    readonly ID: FieldRef<"v8users", 'Bytes'>
    readonly Name: FieldRef<"v8users", 'String'>
    readonly Descr: FieldRef<"v8users", 'String'>
    readonly Changed: FieldRef<"v8users", 'DateTime'>
    readonly RolesID: FieldRef<"v8users", 'Int'>
    readonly Show: FieldRef<"v8users", 'Bytes'>
    readonly Data: FieldRef<"v8users", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * v8users findUnique
   */
  export type v8usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * Filter, which v8users to fetch.
     */
    where: v8usersWhereUniqueInput
  }


  /**
   * v8users findUniqueOrThrow
   */
  export type v8usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * Filter, which v8users to fetch.
     */
    where: v8usersWhereUniqueInput
  }


  /**
   * v8users findFirst
   */
  export type v8usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * Filter, which v8users to fetch.
     */
    where?: v8usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v8users to fetch.
     */
    orderBy?: v8usersOrderByWithRelationInput | v8usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v8users.
     */
    cursor?: v8usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v8users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v8users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v8users.
     */
    distinct?: V8usersScalarFieldEnum | V8usersScalarFieldEnum[]
  }


  /**
   * v8users findFirstOrThrow
   */
  export type v8usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * Filter, which v8users to fetch.
     */
    where?: v8usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v8users to fetch.
     */
    orderBy?: v8usersOrderByWithRelationInput | v8usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for v8users.
     */
    cursor?: v8usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v8users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v8users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of v8users.
     */
    distinct?: V8usersScalarFieldEnum | V8usersScalarFieldEnum[]
  }


  /**
   * v8users findMany
   */
  export type v8usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * Filter, which v8users to fetch.
     */
    where?: v8usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of v8users to fetch.
     */
    orderBy?: v8usersOrderByWithRelationInput | v8usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing v8users.
     */
    cursor?: v8usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` v8users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` v8users.
     */
    skip?: number
    distinct?: V8usersScalarFieldEnum | V8usersScalarFieldEnum[]
  }


  /**
   * v8users create
   */
  export type v8usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * The data needed to create a v8users.
     */
    data: XOR<v8usersCreateInput, v8usersUncheckedCreateInput>
  }


  /**
   * v8users createMany
   */
  export type v8usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many v8users.
     */
    data: v8usersCreateManyInput | v8usersCreateManyInput[]
  }


  /**
   * v8users update
   */
  export type v8usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * The data needed to update a v8users.
     */
    data: XOR<v8usersUpdateInput, v8usersUncheckedUpdateInput>
    /**
     * Choose, which v8users to update.
     */
    where: v8usersWhereUniqueInput
  }


  /**
   * v8users updateMany
   */
  export type v8usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update v8users.
     */
    data: XOR<v8usersUpdateManyMutationInput, v8usersUncheckedUpdateManyInput>
    /**
     * Filter which v8users to update
     */
    where?: v8usersWhereInput
  }


  /**
   * v8users upsert
   */
  export type v8usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * The filter to search for the v8users to update in case it exists.
     */
    where: v8usersWhereUniqueInput
    /**
     * In case the v8users found by the `where` argument doesn't exist, create a new v8users with this data.
     */
    create: XOR<v8usersCreateInput, v8usersUncheckedCreateInput>
    /**
     * In case the v8users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<v8usersUpdateInput, v8usersUncheckedUpdateInput>
  }


  /**
   * v8users delete
   */
  export type v8usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
    /**
     * Filter which v8users to delete.
     */
    where: v8usersWhereUniqueInput
  }


  /**
   * v8users deleteMany
   */
  export type v8usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which v8users to delete
     */
    where?: v8usersWhereInput
  }


  /**
   * v8users without action
   */
  export type v8usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the v8users
     */
    select?: v8usersSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    Descr: 'Descr',
    OSName: 'OSName',
    Changed: 'Changed',
    RoleID: 'RoleID',
    Show: 'Show',
    Data: 'Data',
    EAuth: 'EAuth',
    AdmRole: 'AdmRole',
    UsSprH: 'UsSprH'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const V8usersScalarFieldEnum: {
    ID: 'ID',
    Name: 'Name',
    Descr: 'Descr',
    Changed: 'Changed',
    RolesID: 'RolesID',
    Show: 'Show',
    Data: 'Data'
  };

  export type V8usersScalarFieldEnum = (typeof V8usersScalarFieldEnum)[keyof typeof V8usersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type personWhereInput = {
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    ID?: BytesFilter<"person"> | Buffer
    Name?: StringFilter<"person"> | string
    Descr?: BytesFilter<"person"> | Buffer
    OSName?: StringFilter<"person"> | string
    Changed?: DateTimeFilter<"person"> | Date | string
    RoleID?: IntFilter<"person"> | number
    Show?: BytesFilter<"person"> | Buffer
    Data?: BytesFilter<"person"> | Buffer
    EAuth?: BytesFilter<"person"> | Buffer
    AdmRole?: BytesFilter<"person"> | Buffer
    UsSprH?: IntFilter<"person"> | number
  }

  export type personOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    OSName?: SortOrder
    Changed?: SortOrder
    RoleID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
    EAuth?: SortOrder
    AdmRole?: SortOrder
    UsSprH?: SortOrder
  }

  export type personWhereUniqueInput = Prisma.AtLeast<{
    ID?: Buffer
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    Name?: StringFilter<"person"> | string
    Descr?: BytesFilter<"person"> | Buffer
    OSName?: StringFilter<"person"> | string
    Changed?: DateTimeFilter<"person"> | Date | string
    RoleID?: IntFilter<"person"> | number
    Show?: BytesFilter<"person"> | Buffer
    Data?: BytesFilter<"person"> | Buffer
    EAuth?: BytesFilter<"person"> | Buffer
    AdmRole?: BytesFilter<"person"> | Buffer
    UsSprH?: IntFilter<"person"> | number
  }, "ID">

  export type personOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    OSName?: SortOrder
    Changed?: SortOrder
    RoleID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
    EAuth?: SortOrder
    AdmRole?: SortOrder
    UsSprH?: SortOrder
    _count?: personCountOrderByAggregateInput
    _avg?: personAvgOrderByAggregateInput
    _max?: personMaxOrderByAggregateInput
    _min?: personMinOrderByAggregateInput
    _sum?: personSumOrderByAggregateInput
  }

  export type personScalarWhereWithAggregatesInput = {
    AND?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    OR?: personScalarWhereWithAggregatesInput[]
    NOT?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    ID?: BytesWithAggregatesFilter<"person"> | Buffer
    Name?: StringWithAggregatesFilter<"person"> | string
    Descr?: BytesWithAggregatesFilter<"person"> | Buffer
    OSName?: StringWithAggregatesFilter<"person"> | string
    Changed?: DateTimeWithAggregatesFilter<"person"> | Date | string
    RoleID?: IntWithAggregatesFilter<"person"> | number
    Show?: BytesWithAggregatesFilter<"person"> | Buffer
    Data?: BytesWithAggregatesFilter<"person"> | Buffer
    EAuth?: BytesWithAggregatesFilter<"person"> | Buffer
    AdmRole?: BytesWithAggregatesFilter<"person"> | Buffer
    UsSprH?: IntWithAggregatesFilter<"person"> | number
  }

  export type v8usersWhereInput = {
    AND?: v8usersWhereInput | v8usersWhereInput[]
    OR?: v8usersWhereInput[]
    NOT?: v8usersWhereInput | v8usersWhereInput[]
    ID?: BytesFilter<"v8users"> | Buffer
    Name?: StringFilter<"v8users"> | string
    Descr?: StringFilter<"v8users"> | string
    Changed?: DateTimeFilter<"v8users"> | Date | string
    RolesID?: IntFilter<"v8users"> | number
    Show?: BytesNullableFilter<"v8users"> | Buffer | null
    Data?: BytesNullableFilter<"v8users"> | Buffer | null
  }

  export type v8usersOrderByWithRelationInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    Changed?: SortOrder
    RolesID?: SortOrder
    Show?: SortOrderInput | SortOrder
    Data?: SortOrderInput | SortOrder
  }

  export type v8usersWhereUniqueInput = Prisma.AtLeast<{
    ID?: Buffer
    AND?: v8usersWhereInput | v8usersWhereInput[]
    OR?: v8usersWhereInput[]
    NOT?: v8usersWhereInput | v8usersWhereInput[]
    Name?: StringFilter<"v8users"> | string
    Descr?: StringFilter<"v8users"> | string
    Changed?: DateTimeFilter<"v8users"> | Date | string
    RolesID?: IntFilter<"v8users"> | number
    Show?: BytesNullableFilter<"v8users"> | Buffer | null
    Data?: BytesNullableFilter<"v8users"> | Buffer | null
  }, "ID">

  export type v8usersOrderByWithAggregationInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    Changed?: SortOrder
    RolesID?: SortOrder
    Show?: SortOrderInput | SortOrder
    Data?: SortOrderInput | SortOrder
    _count?: v8usersCountOrderByAggregateInput
    _avg?: v8usersAvgOrderByAggregateInput
    _max?: v8usersMaxOrderByAggregateInput
    _min?: v8usersMinOrderByAggregateInput
    _sum?: v8usersSumOrderByAggregateInput
  }

  export type v8usersScalarWhereWithAggregatesInput = {
    AND?: v8usersScalarWhereWithAggregatesInput | v8usersScalarWhereWithAggregatesInput[]
    OR?: v8usersScalarWhereWithAggregatesInput[]
    NOT?: v8usersScalarWhereWithAggregatesInput | v8usersScalarWhereWithAggregatesInput[]
    ID?: BytesWithAggregatesFilter<"v8users"> | Buffer
    Name?: StringWithAggregatesFilter<"v8users"> | string
    Descr?: StringWithAggregatesFilter<"v8users"> | string
    Changed?: DateTimeWithAggregatesFilter<"v8users"> | Date | string
    RolesID?: IntWithAggregatesFilter<"v8users"> | number
    Show?: BytesNullableWithAggregatesFilter<"v8users"> | Buffer | null
    Data?: BytesNullableWithAggregatesFilter<"v8users"> | Buffer | null
  }

  export type personCreateInput = {
    ID: Buffer
    Name: string
    Descr: Buffer
    OSName: string
    Changed: Date | string
    RoleID: number
    Show: Buffer
    Data: Buffer
    EAuth: Buffer
    AdmRole: Buffer
    UsSprH: number
  }

  export type personUncheckedCreateInput = {
    ID: Buffer
    Name: string
    Descr: Buffer
    OSName: string
    Changed: Date | string
    RoleID: number
    Show: Buffer
    Data: Buffer
    EAuth: Buffer
    AdmRole: Buffer
    UsSprH: number
  }

  export type personUpdateInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: BytesFieldUpdateOperationsInput | Buffer
    OSName?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Show?: BytesFieldUpdateOperationsInput | Buffer
    Data?: BytesFieldUpdateOperationsInput | Buffer
    EAuth?: BytesFieldUpdateOperationsInput | Buffer
    AdmRole?: BytesFieldUpdateOperationsInput | Buffer
    UsSprH?: IntFieldUpdateOperationsInput | number
  }

  export type personUncheckedUpdateInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: BytesFieldUpdateOperationsInput | Buffer
    OSName?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Show?: BytesFieldUpdateOperationsInput | Buffer
    Data?: BytesFieldUpdateOperationsInput | Buffer
    EAuth?: BytesFieldUpdateOperationsInput | Buffer
    AdmRole?: BytesFieldUpdateOperationsInput | Buffer
    UsSprH?: IntFieldUpdateOperationsInput | number
  }

  export type personCreateManyInput = {
    ID: Buffer
    Name: string
    Descr: Buffer
    OSName: string
    Changed: Date | string
    RoleID: number
    Show: Buffer
    Data: Buffer
    EAuth: Buffer
    AdmRole: Buffer
    UsSprH: number
  }

  export type personUpdateManyMutationInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: BytesFieldUpdateOperationsInput | Buffer
    OSName?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Show?: BytesFieldUpdateOperationsInput | Buffer
    Data?: BytesFieldUpdateOperationsInput | Buffer
    EAuth?: BytesFieldUpdateOperationsInput | Buffer
    AdmRole?: BytesFieldUpdateOperationsInput | Buffer
    UsSprH?: IntFieldUpdateOperationsInput | number
  }

  export type personUncheckedUpdateManyInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: BytesFieldUpdateOperationsInput | Buffer
    OSName?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RoleID?: IntFieldUpdateOperationsInput | number
    Show?: BytesFieldUpdateOperationsInput | Buffer
    Data?: BytesFieldUpdateOperationsInput | Buffer
    EAuth?: BytesFieldUpdateOperationsInput | Buffer
    AdmRole?: BytesFieldUpdateOperationsInput | Buffer
    UsSprH?: IntFieldUpdateOperationsInput | number
  }

  export type v8usersCreateInput = {
    ID: Buffer
    Name: string
    Descr: string
    Changed?: Date | string
    RolesID?: number
    Show?: Buffer | null
    Data?: Buffer | null
  }

  export type v8usersUncheckedCreateInput = {
    ID: Buffer
    Name: string
    Descr: string
    Changed?: Date | string
    RolesID?: number
    Show?: Buffer | null
    Data?: Buffer | null
  }

  export type v8usersUpdateInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RolesID?: IntFieldUpdateOperationsInput | number
    Show?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type v8usersUncheckedUpdateInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RolesID?: IntFieldUpdateOperationsInput | number
    Show?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type v8usersCreateManyInput = {
    ID: Buffer
    Name: string
    Descr: string
    Changed?: Date | string
    RolesID?: number
    Show?: Buffer | null
    Data?: Buffer | null
  }

  export type v8usersUpdateManyMutationInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RolesID?: IntFieldUpdateOperationsInput | number
    Show?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type v8usersUncheckedUpdateManyInput = {
    ID?: BytesFieldUpdateOperationsInput | Buffer
    Name?: StringFieldUpdateOperationsInput | string
    Descr?: StringFieldUpdateOperationsInput | string
    Changed?: DateTimeFieldUpdateOperationsInput | Date | string
    RolesID?: IntFieldUpdateOperationsInput | number
    Show?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type personCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    OSName?: SortOrder
    Changed?: SortOrder
    RoleID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
    EAuth?: SortOrder
    AdmRole?: SortOrder
    UsSprH?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    RoleID?: SortOrder
    UsSprH?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    OSName?: SortOrder
    Changed?: SortOrder
    RoleID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
    EAuth?: SortOrder
    AdmRole?: SortOrder
    UsSprH?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    OSName?: SortOrder
    Changed?: SortOrder
    RoleID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
    EAuth?: SortOrder
    AdmRole?: SortOrder
    UsSprH?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    RoleID?: SortOrder
    UsSprH?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type v8usersCountOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    Changed?: SortOrder
    RolesID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
  }

  export type v8usersAvgOrderByAggregateInput = {
    RolesID?: SortOrder
  }

  export type v8usersMaxOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    Changed?: SortOrder
    RolesID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
  }

  export type v8usersMinOrderByAggregateInput = {
    ID?: SortOrder
    Name?: SortOrder
    Descr?: SortOrder
    Changed?: SortOrder
    RolesID?: SortOrder
    Show?: SortOrder
    Data?: SortOrder
  }

  export type v8usersSumOrderByAggregateInput = {
    RolesID?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use personDefaultArgs instead
     */
    export type personArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = personDefaultArgs<ExtArgs>
    /**
     * @deprecated Use v8usersDefaultArgs instead
     */
    export type v8usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = v8usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}