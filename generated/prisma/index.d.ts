
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DataBarang
 * 
 */
export type DataBarang = $Result.DefaultSelection<Prisma.$DataBarangPayload>
/**
 * Model DataLokasi
 * 
 */
export type DataLokasi = $Result.DefaultSelection<Prisma.$DataLokasiPayload>
/**
 * Model BarangUnit
 * 
 */
export type BarangUnit = $Result.DefaultSelection<Prisma.$BarangUnitPayload>
/**
 * Model PeminjamanP
 * 
 */
export type PeminjamanP = $Result.DefaultSelection<Prisma.$PeminjamanPPayload>
/**
 * Model LogScanBMN
 * 
 */
export type LogScanBMN = $Result.DefaultSelection<Prisma.$LogScanBMNPayload>
/**
 * Model PeminjamanItem
 * 
 */
export type PeminjamanItem = $Result.DefaultSelection<Prisma.$PeminjamanItemPayload>
/**
 * Model Monitoring
 * 
 */
export type Monitoring = $Result.DefaultSelection<Prisma.$MonitoringPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  civitas_faste: 'civitas_faste',
  staff: 'staff',
  kepala_bagian_akademik: 'kepala_bagian_akademik',
  staff_prodi: 'staff_prodi'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Jurusan: {
  umum: 'umum',
  tif: 'tif'
};

export type Jurusan = (typeof Jurusan)[keyof typeof Jurusan]


export const StatusBooking: {
  pending: 'pending',
  diterima: 'diterima',
  ditolak: 'ditolak'
};

export type StatusBooking = (typeof StatusBooking)[keyof typeof StatusBooking]


export const StatusP: {
  booking: 'booking',
  aktif: 'aktif',
  selesai: 'selesai',
  batal: 'batal'
};

export type StatusP = (typeof StatusP)[keyof typeof StatusP]


export const StatusB: {
  Tersedia: 'Tersedia',
  TidakTersedia: 'TidakTersedia'
};

export type StatusB = (typeof StatusB)[keyof typeof StatusB]


export const KondisiBarangM: {
  baik: 'baik',
  rusak_ringan: 'rusak_ringan',
  rusak_berat: 'rusak_berat'
};

export type KondisiBarangM = (typeof KondisiBarangM)[keyof typeof KondisiBarangM]


export const StatusLokasi: {
  dipinjam: 'dipinjam',
  tidakDipinjam: 'tidakDipinjam',
  belumTersedia: 'belumTersedia'
};

export type StatusLokasi = (typeof StatusLokasi)[keyof typeof StatusLokasi]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Jurusan = $Enums.Jurusan

export const Jurusan: typeof $Enums.Jurusan

export type StatusBooking = $Enums.StatusBooking

export const StatusBooking: typeof $Enums.StatusBooking

export type StatusP = $Enums.StatusP

export const StatusP: typeof $Enums.StatusP

export type StatusB = $Enums.StatusB

export const StatusB: typeof $Enums.StatusB

export type KondisiBarangM = $Enums.KondisiBarangM

export const KondisiBarangM: typeof $Enums.KondisiBarangM

export type StatusLokasi = $Enums.StatusLokasi

export const StatusLokasi: typeof $Enums.StatusLokasi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataBarang`: Exposes CRUD operations for the **DataBarang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataBarangs
    * const dataBarangs = await prisma.dataBarang.findMany()
    * ```
    */
  get dataBarang(): Prisma.DataBarangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataLokasi`: Exposes CRUD operations for the **DataLokasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataLokasis
    * const dataLokasis = await prisma.dataLokasi.findMany()
    * ```
    */
  get dataLokasi(): Prisma.DataLokasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barangUnit`: Exposes CRUD operations for the **BarangUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarangUnits
    * const barangUnits = await prisma.barangUnit.findMany()
    * ```
    */
  get barangUnit(): Prisma.BarangUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjamanP`: Exposes CRUD operations for the **PeminjamanP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeminjamanPS
    * const peminjamanPS = await prisma.peminjamanP.findMany()
    * ```
    */
  get peminjamanP(): Prisma.PeminjamanPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logScanBMN`: Exposes CRUD operations for the **LogScanBMN** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogScanBMNS
    * const logScanBMNS = await prisma.logScanBMN.findMany()
    * ```
    */
  get logScanBMN(): Prisma.LogScanBMNDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjamanItem`: Exposes CRUD operations for the **PeminjamanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeminjamanItems
    * const peminjamanItems = await prisma.peminjamanItem.findMany()
    * ```
    */
  get peminjamanItem(): Prisma.PeminjamanItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monitoring`: Exposes CRUD operations for the **Monitoring** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monitorings
    * const monitorings = await prisma.monitoring.findMany()
    * ```
    */
  get monitoring(): Prisma.MonitoringDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    DataBarang: 'DataBarang',
    DataLokasi: 'DataLokasi',
    BarangUnit: 'BarangUnit',
    PeminjamanP: 'PeminjamanP',
    LogScanBMN: 'LogScanBMN',
    PeminjamanItem: 'PeminjamanItem',
    Monitoring: 'Monitoring'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "dataBarang" | "dataLokasi" | "barangUnit" | "peminjamanP" | "logScanBMN" | "peminjamanItem" | "monitoring"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DataBarang: {
        payload: Prisma.$DataBarangPayload<ExtArgs>
        fields: Prisma.DataBarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataBarangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataBarangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>
          }
          findFirst: {
            args: Prisma.DataBarangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataBarangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>
          }
          findMany: {
            args: Prisma.DataBarangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>[]
          }
          create: {
            args: Prisma.DataBarangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>
          }
          createMany: {
            args: Prisma.DataBarangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataBarangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>[]
          }
          delete: {
            args: Prisma.DataBarangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>
          }
          update: {
            args: Prisma.DataBarangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>
          }
          deleteMany: {
            args: Prisma.DataBarangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataBarangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataBarangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>[]
          }
          upsert: {
            args: Prisma.DataBarangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataBarangPayload>
          }
          aggregate: {
            args: Prisma.DataBarangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataBarang>
          }
          groupBy: {
            args: Prisma.DataBarangGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataBarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataBarangCountArgs<ExtArgs>
            result: $Utils.Optional<DataBarangCountAggregateOutputType> | number
          }
        }
      }
      DataLokasi: {
        payload: Prisma.$DataLokasiPayload<ExtArgs>
        fields: Prisma.DataLokasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataLokasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataLokasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>
          }
          findFirst: {
            args: Prisma.DataLokasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataLokasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>
          }
          findMany: {
            args: Prisma.DataLokasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>[]
          }
          create: {
            args: Prisma.DataLokasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>
          }
          createMany: {
            args: Prisma.DataLokasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataLokasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>[]
          }
          delete: {
            args: Prisma.DataLokasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>
          }
          update: {
            args: Prisma.DataLokasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>
          }
          deleteMany: {
            args: Prisma.DataLokasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataLokasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataLokasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>[]
          }
          upsert: {
            args: Prisma.DataLokasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataLokasiPayload>
          }
          aggregate: {
            args: Prisma.DataLokasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataLokasi>
          }
          groupBy: {
            args: Prisma.DataLokasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataLokasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataLokasiCountArgs<ExtArgs>
            result: $Utils.Optional<DataLokasiCountAggregateOutputType> | number
          }
        }
      }
      BarangUnit: {
        payload: Prisma.$BarangUnitPayload<ExtArgs>
        fields: Prisma.BarangUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>
          }
          findFirst: {
            args: Prisma.BarangUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>
          }
          findMany: {
            args: Prisma.BarangUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>[]
          }
          create: {
            args: Prisma.BarangUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>
          }
          createMany: {
            args: Prisma.BarangUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarangUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>[]
          }
          delete: {
            args: Prisma.BarangUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>
          }
          update: {
            args: Prisma.BarangUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>
          }
          deleteMany: {
            args: Prisma.BarangUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarangUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarangUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>[]
          }
          upsert: {
            args: Prisma.BarangUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangUnitPayload>
          }
          aggregate: {
            args: Prisma.BarangUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarangUnit>
          }
          groupBy: {
            args: Prisma.BarangUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangUnitCountArgs<ExtArgs>
            result: $Utils.Optional<BarangUnitCountAggregateOutputType> | number
          }
        }
      }
      PeminjamanP: {
        payload: Prisma.$PeminjamanPPayload<ExtArgs>
        fields: Prisma.PeminjamanPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeminjamanPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeminjamanPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>
          }
          findFirst: {
            args: Prisma.PeminjamanPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeminjamanPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>
          }
          findMany: {
            args: Prisma.PeminjamanPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>[]
          }
          create: {
            args: Prisma.PeminjamanPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>
          }
          createMany: {
            args: Prisma.PeminjamanPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeminjamanPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>[]
          }
          delete: {
            args: Prisma.PeminjamanPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>
          }
          update: {
            args: Prisma.PeminjamanPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>
          }
          deleteMany: {
            args: Prisma.PeminjamanPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeminjamanPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeminjamanPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>[]
          }
          upsert: {
            args: Prisma.PeminjamanPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjamanP>
          }
          groupBy: {
            args: Prisma.PeminjamanPGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanPGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeminjamanPCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanPCountAggregateOutputType> | number
          }
        }
      }
      LogScanBMN: {
        payload: Prisma.$LogScanBMNPayload<ExtArgs>
        fields: Prisma.LogScanBMNFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogScanBMNFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogScanBMNFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>
          }
          findFirst: {
            args: Prisma.LogScanBMNFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogScanBMNFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>
          }
          findMany: {
            args: Prisma.LogScanBMNFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>[]
          }
          create: {
            args: Prisma.LogScanBMNCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>
          }
          createMany: {
            args: Prisma.LogScanBMNCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogScanBMNCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>[]
          }
          delete: {
            args: Prisma.LogScanBMNDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>
          }
          update: {
            args: Prisma.LogScanBMNUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>
          }
          deleteMany: {
            args: Prisma.LogScanBMNDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogScanBMNUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogScanBMNUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>[]
          }
          upsert: {
            args: Prisma.LogScanBMNUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogScanBMNPayload>
          }
          aggregate: {
            args: Prisma.LogScanBMNAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogScanBMN>
          }
          groupBy: {
            args: Prisma.LogScanBMNGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogScanBMNGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogScanBMNCountArgs<ExtArgs>
            result: $Utils.Optional<LogScanBMNCountAggregateOutputType> | number
          }
        }
      }
      PeminjamanItem: {
        payload: Prisma.$PeminjamanItemPayload<ExtArgs>
        fields: Prisma.PeminjamanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeminjamanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeminjamanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>
          }
          findFirst: {
            args: Prisma.PeminjamanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeminjamanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>
          }
          findMany: {
            args: Prisma.PeminjamanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>[]
          }
          create: {
            args: Prisma.PeminjamanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>
          }
          createMany: {
            args: Prisma.PeminjamanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeminjamanItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>[]
          }
          delete: {
            args: Prisma.PeminjamanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>
          }
          update: {
            args: Prisma.PeminjamanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>
          }
          deleteMany: {
            args: Prisma.PeminjamanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeminjamanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeminjamanItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>[]
          }
          upsert: {
            args: Prisma.PeminjamanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanItemPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjamanItem>
          }
          groupBy: {
            args: Prisma.PeminjamanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeminjamanItemCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanItemCountAggregateOutputType> | number
          }
        }
      }
      Monitoring: {
        payload: Prisma.$MonitoringPayload<ExtArgs>
        fields: Prisma.MonitoringFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitoringFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitoringFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>
          }
          findFirst: {
            args: Prisma.MonitoringFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitoringFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>
          }
          findMany: {
            args: Prisma.MonitoringFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>[]
          }
          create: {
            args: Prisma.MonitoringCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>
          }
          createMany: {
            args: Prisma.MonitoringCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitoringCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>[]
          }
          delete: {
            args: Prisma.MonitoringDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>
          }
          update: {
            args: Prisma.MonitoringUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>
          }
          deleteMany: {
            args: Prisma.MonitoringDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitoringUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonitoringUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>[]
          }
          upsert: {
            args: Prisma.MonitoringUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringPayload>
          }
          aggregate: {
            args: Prisma.MonitoringAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoring>
          }
          groupBy: {
            args: Prisma.MonitoringGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitoringGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitoringCountArgs<ExtArgs>
            result: $Utils.Optional<MonitoringCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    dataBarang?: DataBarangOmit
    dataLokasi?: DataLokasiOmit
    barangUnit?: BarangUnitOmit
    peminjamanP?: PeminjamanPOmit
    logScanBMN?: LogScanBMNOmit
    peminjamanItem?: PeminjamanItemOmit
    monitoring?: MonitoringOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    barangUnit: number
    peminjamanP: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | UserCountOutputTypeCountBarangUnitArgs
    peminjamanP?: boolean | UserCountOutputTypeCountPeminjamanPArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBarangUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangUnitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPeminjamanPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanPWhereInput
  }


  /**
   * Count Type DataBarangCountOutputType
   */

  export type DataBarangCountOutputType = {
    barangUnit: number
  }

  export type DataBarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | DataBarangCountOutputTypeCountBarangUnitArgs
  }

  // Custom InputTypes
  /**
   * DataBarangCountOutputType without action
   */
  export type DataBarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarangCountOutputType
     */
    select?: DataBarangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataBarangCountOutputType without action
   */
  export type DataBarangCountOutputTypeCountBarangUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangUnitWhereInput
  }


  /**
   * Count Type DataLokasiCountOutputType
   */

  export type DataLokasiCountOutputType = {
    barangUnit: number
    monitoring: number
    peminjamanP: number
  }

  export type DataLokasiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | DataLokasiCountOutputTypeCountBarangUnitArgs
    monitoring?: boolean | DataLokasiCountOutputTypeCountMonitoringArgs
    peminjamanP?: boolean | DataLokasiCountOutputTypeCountPeminjamanPArgs
  }

  // Custom InputTypes
  /**
   * DataLokasiCountOutputType without action
   */
  export type DataLokasiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasiCountOutputType
     */
    select?: DataLokasiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataLokasiCountOutputType without action
   */
  export type DataLokasiCountOutputTypeCountBarangUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangUnitWhereInput
  }

  /**
   * DataLokasiCountOutputType without action
   */
  export type DataLokasiCountOutputTypeCountMonitoringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringWhereInput
  }

  /**
   * DataLokasiCountOutputType without action
   */
  export type DataLokasiCountOutputTypeCountPeminjamanPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanPWhereInput
  }


  /**
   * Count Type BarangUnitCountOutputType
   */

  export type BarangUnitCountOutputType = {
    monitoring: number
    peminjamanItems: number
  }

  export type BarangUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoring?: boolean | BarangUnitCountOutputTypeCountMonitoringArgs
    peminjamanItems?: boolean | BarangUnitCountOutputTypeCountPeminjamanItemsArgs
  }

  // Custom InputTypes
  /**
   * BarangUnitCountOutputType without action
   */
  export type BarangUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnitCountOutputType
     */
    select?: BarangUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangUnitCountOutputType without action
   */
  export type BarangUnitCountOutputTypeCountMonitoringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringWhereInput
  }

  /**
   * BarangUnitCountOutputType without action
   */
  export type BarangUnitCountOutputTypeCountPeminjamanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanItemWhereInput
  }


  /**
   * Count Type PeminjamanPCountOutputType
   */

  export type PeminjamanPCountOutputType = {
    logScanBMN: number
    items: number
  }

  export type PeminjamanPCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logScanBMN?: boolean | PeminjamanPCountOutputTypeCountLogScanBMNArgs
    items?: boolean | PeminjamanPCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PeminjamanPCountOutputType without action
   */
  export type PeminjamanPCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanPCountOutputType
     */
    select?: PeminjamanPCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeminjamanPCountOutputType without action
   */
  export type PeminjamanPCountOutputTypeCountLogScanBMNArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogScanBMNWhereInput
  }

  /**
   * PeminjamanPCountOutputType without action
   */
  export type PeminjamanPCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    nama: string | null
    nik: string | null
    email: string | null
    password: string | null
    jurusan: $Enums.Jurusan | null
    role: $Enums.Role | null
    createdAt: Date | null
    updateAt: Date | null
    nomor_identitas_tunggal: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    nama: string | null
    nik: string | null
    email: string | null
    password: string | null
    jurusan: $Enums.Jurusan | null
    role: $Enums.Role | null
    createdAt: Date | null
    updateAt: Date | null
    nomor_identitas_tunggal: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    nama: number
    nik: number
    email: number
    password: number
    jurusan: number
    role: number
    createdAt: number
    updateAt: number
    nomor_identitas_tunggal: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    nama?: true
    nik?: true
    email?: true
    password?: true
    jurusan?: true
    role?: true
    createdAt?: true
    updateAt?: true
    nomor_identitas_tunggal?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    nama?: true
    nik?: true
    email?: true
    password?: true
    jurusan?: true
    role?: true
    createdAt?: true
    updateAt?: true
    nomor_identitas_tunggal?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    nama?: true
    nik?: true
    email?: true
    password?: true
    jurusan?: true
    role?: true
    createdAt?: true
    updateAt?: true
    nomor_identitas_tunggal?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan: $Enums.Jurusan
    role: $Enums.Role
    createdAt: Date
    updateAt: Date
    nomor_identitas_tunggal: string
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
    nik?: boolean
    email?: boolean
    password?: boolean
    jurusan?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    nomor_identitas_tunggal?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    barangUnit?: boolean | User$barangUnitArgs<ExtArgs>
    peminjamanP?: boolean | User$peminjamanPArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
    nik?: boolean
    email?: boolean
    password?: boolean
    jurusan?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    nomor_identitas_tunggal?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
    nik?: boolean
    email?: boolean
    password?: boolean
    jurusan?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    nomor_identitas_tunggal?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    nama?: boolean
    nik?: boolean
    email?: boolean
    password?: boolean
    jurusan?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    nomor_identitas_tunggal?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nama" | "nik" | "email" | "password" | "jurusan" | "role" | "createdAt" | "updateAt" | "nomor_identitas_tunggal" | "resetToken" | "resetTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | User$barangUnitArgs<ExtArgs>
    peminjamanP?: boolean | User$peminjamanPArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      barangUnit: Prisma.$BarangUnitPayload<ExtArgs>[]
      peminjamanP: Prisma.$PeminjamanPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nama: string
      nik: string
      email: string
      password: string
      jurusan: $Enums.Jurusan
      role: $Enums.Role
      createdAt: Date
      updateAt: Date
      nomor_identitas_tunggal: string
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `nama`
     * const userWithNamaOnly = await prisma.user.findMany({ select: { nama: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `nama`
     * const userWithNamaOnly = await prisma.user.createManyAndReturn({
     *   select: { nama: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `nama`
     * const userWithNamaOnly = await prisma.user.updateManyAndReturn({
     *   select: { nama: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barangUnit<T extends User$barangUnitArgs<ExtArgs> = {}>(args?: Subset<T, User$barangUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peminjamanP<T extends User$peminjamanPArgs<ExtArgs> = {}>(args?: Subset<T, User$peminjamanPArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly nama: FieldRef<"User", 'String'>
    readonly nik: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly jurusan: FieldRef<"User", 'Jurusan'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly nomor_identitas_tunggal: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.barangUnit
   */
  export type User$barangUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    where?: BarangUnitWhereInput
    orderBy?: BarangUnitOrderByWithRelationInput | BarangUnitOrderByWithRelationInput[]
    cursor?: BarangUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangUnitScalarFieldEnum | BarangUnitScalarFieldEnum[]
  }

  /**
   * User.peminjamanP
   */
  export type User$peminjamanPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    where?: PeminjamanPWhereInput
    orderBy?: PeminjamanPOrderByWithRelationInput | PeminjamanPOrderByWithRelationInput[]
    cursor?: PeminjamanPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanPScalarFieldEnum | PeminjamanPScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DataBarang
   */

  export type AggregateDataBarang = {
    _count: DataBarangCountAggregateOutputType | null
    _min: DataBarangMinAggregateOutputType | null
    _max: DataBarangMaxAggregateOutputType | null
  }

  export type DataBarangMinAggregateOutputType = {
    kode_barang: string | null
    jenis_barang: string | null
    merek: string | null
  }

  export type DataBarangMaxAggregateOutputType = {
    kode_barang: string | null
    jenis_barang: string | null
    merek: string | null
  }

  export type DataBarangCountAggregateOutputType = {
    kode_barang: number
    jenis_barang: number
    merek: number
    _all: number
  }


  export type DataBarangMinAggregateInputType = {
    kode_barang?: true
    jenis_barang?: true
    merek?: true
  }

  export type DataBarangMaxAggregateInputType = {
    kode_barang?: true
    jenis_barang?: true
    merek?: true
  }

  export type DataBarangCountAggregateInputType = {
    kode_barang?: true
    jenis_barang?: true
    merek?: true
    _all?: true
  }

  export type DataBarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataBarang to aggregate.
     */
    where?: DataBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataBarangs to fetch.
     */
    orderBy?: DataBarangOrderByWithRelationInput | DataBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataBarangs
    **/
    _count?: true | DataBarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataBarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataBarangMaxAggregateInputType
  }

  export type GetDataBarangAggregateType<T extends DataBarangAggregateArgs> = {
        [P in keyof T & keyof AggregateDataBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataBarang[P]>
      : GetScalarType<T[P], AggregateDataBarang[P]>
  }




  export type DataBarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataBarangWhereInput
    orderBy?: DataBarangOrderByWithAggregationInput | DataBarangOrderByWithAggregationInput[]
    by: DataBarangScalarFieldEnum[] | DataBarangScalarFieldEnum
    having?: DataBarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataBarangCountAggregateInputType | true
    _min?: DataBarangMinAggregateInputType
    _max?: DataBarangMaxAggregateInputType
  }

  export type DataBarangGroupByOutputType = {
    kode_barang: string
    jenis_barang: string
    merek: string
    _count: DataBarangCountAggregateOutputType | null
    _min: DataBarangMinAggregateOutputType | null
    _max: DataBarangMaxAggregateOutputType | null
  }

  type GetDataBarangGroupByPayload<T extends DataBarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataBarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataBarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataBarangGroupByOutputType[P]>
            : GetScalarType<T[P], DataBarangGroupByOutputType[P]>
        }
      >
    >


  export type DataBarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_barang?: boolean
    jenis_barang?: boolean
    merek?: boolean
    barangUnit?: boolean | DataBarang$barangUnitArgs<ExtArgs>
    _count?: boolean | DataBarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataBarang"]>

  export type DataBarangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_barang?: boolean
    jenis_barang?: boolean
    merek?: boolean
  }, ExtArgs["result"]["dataBarang"]>

  export type DataBarangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_barang?: boolean
    jenis_barang?: boolean
    merek?: boolean
  }, ExtArgs["result"]["dataBarang"]>

  export type DataBarangSelectScalar = {
    kode_barang?: boolean
    jenis_barang?: boolean
    merek?: boolean
  }

  export type DataBarangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode_barang" | "jenis_barang" | "merek", ExtArgs["result"]["dataBarang"]>
  export type DataBarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | DataBarang$barangUnitArgs<ExtArgs>
    _count?: boolean | DataBarangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DataBarangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DataBarangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DataBarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataBarang"
    objects: {
      barangUnit: Prisma.$BarangUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kode_barang: string
      jenis_barang: string
      merek: string
    }, ExtArgs["result"]["dataBarang"]>
    composites: {}
  }

  type DataBarangGetPayload<S extends boolean | null | undefined | DataBarangDefaultArgs> = $Result.GetResult<Prisma.$DataBarangPayload, S>

  type DataBarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataBarangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataBarangCountAggregateInputType | true
    }

  export interface DataBarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataBarang'], meta: { name: 'DataBarang' } }
    /**
     * Find zero or one DataBarang that matches the filter.
     * @param {DataBarangFindUniqueArgs} args - Arguments to find a DataBarang
     * @example
     * // Get one DataBarang
     * const dataBarang = await prisma.dataBarang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataBarangFindUniqueArgs>(args: SelectSubset<T, DataBarangFindUniqueArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataBarang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataBarangFindUniqueOrThrowArgs} args - Arguments to find a DataBarang
     * @example
     * // Get one DataBarang
     * const dataBarang = await prisma.dataBarang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataBarangFindUniqueOrThrowArgs>(args: SelectSubset<T, DataBarangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataBarang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataBarangFindFirstArgs} args - Arguments to find a DataBarang
     * @example
     * // Get one DataBarang
     * const dataBarang = await prisma.dataBarang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataBarangFindFirstArgs>(args?: SelectSubset<T, DataBarangFindFirstArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataBarang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataBarangFindFirstOrThrowArgs} args - Arguments to find a DataBarang
     * @example
     * // Get one DataBarang
     * const dataBarang = await prisma.dataBarang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataBarangFindFirstOrThrowArgs>(args?: SelectSubset<T, DataBarangFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataBarangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataBarangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataBarangs
     * const dataBarangs = await prisma.dataBarang.findMany()
     * 
     * // Get first 10 DataBarangs
     * const dataBarangs = await prisma.dataBarang.findMany({ take: 10 })
     * 
     * // Only select the `kode_barang`
     * const dataBarangWithKode_barangOnly = await prisma.dataBarang.findMany({ select: { kode_barang: true } })
     * 
     */
    findMany<T extends DataBarangFindManyArgs>(args?: SelectSubset<T, DataBarangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataBarang.
     * @param {DataBarangCreateArgs} args - Arguments to create a DataBarang.
     * @example
     * // Create one DataBarang
     * const DataBarang = await prisma.dataBarang.create({
     *   data: {
     *     // ... data to create a DataBarang
     *   }
     * })
     * 
     */
    create<T extends DataBarangCreateArgs>(args: SelectSubset<T, DataBarangCreateArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataBarangs.
     * @param {DataBarangCreateManyArgs} args - Arguments to create many DataBarangs.
     * @example
     * // Create many DataBarangs
     * const dataBarang = await prisma.dataBarang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataBarangCreateManyArgs>(args?: SelectSubset<T, DataBarangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataBarangs and returns the data saved in the database.
     * @param {DataBarangCreateManyAndReturnArgs} args - Arguments to create many DataBarangs.
     * @example
     * // Create many DataBarangs
     * const dataBarang = await prisma.dataBarang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataBarangs and only return the `kode_barang`
     * const dataBarangWithKode_barangOnly = await prisma.dataBarang.createManyAndReturn({
     *   select: { kode_barang: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataBarangCreateManyAndReturnArgs>(args?: SelectSubset<T, DataBarangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataBarang.
     * @param {DataBarangDeleteArgs} args - Arguments to delete one DataBarang.
     * @example
     * // Delete one DataBarang
     * const DataBarang = await prisma.dataBarang.delete({
     *   where: {
     *     // ... filter to delete one DataBarang
     *   }
     * })
     * 
     */
    delete<T extends DataBarangDeleteArgs>(args: SelectSubset<T, DataBarangDeleteArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataBarang.
     * @param {DataBarangUpdateArgs} args - Arguments to update one DataBarang.
     * @example
     * // Update one DataBarang
     * const dataBarang = await prisma.dataBarang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataBarangUpdateArgs>(args: SelectSubset<T, DataBarangUpdateArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataBarangs.
     * @param {DataBarangDeleteManyArgs} args - Arguments to filter DataBarangs to delete.
     * @example
     * // Delete a few DataBarangs
     * const { count } = await prisma.dataBarang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataBarangDeleteManyArgs>(args?: SelectSubset<T, DataBarangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataBarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataBarangs
     * const dataBarang = await prisma.dataBarang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataBarangUpdateManyArgs>(args: SelectSubset<T, DataBarangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataBarangs and returns the data updated in the database.
     * @param {DataBarangUpdateManyAndReturnArgs} args - Arguments to update many DataBarangs.
     * @example
     * // Update many DataBarangs
     * const dataBarang = await prisma.dataBarang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataBarangs and only return the `kode_barang`
     * const dataBarangWithKode_barangOnly = await prisma.dataBarang.updateManyAndReturn({
     *   select: { kode_barang: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataBarangUpdateManyAndReturnArgs>(args: SelectSubset<T, DataBarangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataBarang.
     * @param {DataBarangUpsertArgs} args - Arguments to update or create a DataBarang.
     * @example
     * // Update or create a DataBarang
     * const dataBarang = await prisma.dataBarang.upsert({
     *   create: {
     *     // ... data to create a DataBarang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataBarang we want to update
     *   }
     * })
     */
    upsert<T extends DataBarangUpsertArgs>(args: SelectSubset<T, DataBarangUpsertArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataBarangCountArgs} args - Arguments to filter DataBarangs to count.
     * @example
     * // Count the number of DataBarangs
     * const count = await prisma.dataBarang.count({
     *   where: {
     *     // ... the filter for the DataBarangs we want to count
     *   }
     * })
    **/
    count<T extends DataBarangCountArgs>(
      args?: Subset<T, DataBarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataBarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataBarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataBarangAggregateArgs>(args: Subset<T, DataBarangAggregateArgs>): Prisma.PrismaPromise<GetDataBarangAggregateType<T>>

    /**
     * Group by DataBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataBarangGroupByArgs} args - Group by arguments.
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
      T extends DataBarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataBarangGroupByArgs['orderBy'] }
        : { orderBy?: DataBarangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataBarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataBarang model
   */
  readonly fields: DataBarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataBarang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataBarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barangUnit<T extends DataBarang$barangUnitArgs<ExtArgs> = {}>(args?: Subset<T, DataBarang$barangUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataBarang model
   */
  interface DataBarangFieldRefs {
    readonly kode_barang: FieldRef<"DataBarang", 'String'>
    readonly jenis_barang: FieldRef<"DataBarang", 'String'>
    readonly merek: FieldRef<"DataBarang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataBarang findUnique
   */
  export type DataBarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * Filter, which DataBarang to fetch.
     */
    where: DataBarangWhereUniqueInput
  }

  /**
   * DataBarang findUniqueOrThrow
   */
  export type DataBarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * Filter, which DataBarang to fetch.
     */
    where: DataBarangWhereUniqueInput
  }

  /**
   * DataBarang findFirst
   */
  export type DataBarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * Filter, which DataBarang to fetch.
     */
    where?: DataBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataBarangs to fetch.
     */
    orderBy?: DataBarangOrderByWithRelationInput | DataBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataBarangs.
     */
    cursor?: DataBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataBarangs.
     */
    distinct?: DataBarangScalarFieldEnum | DataBarangScalarFieldEnum[]
  }

  /**
   * DataBarang findFirstOrThrow
   */
  export type DataBarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * Filter, which DataBarang to fetch.
     */
    where?: DataBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataBarangs to fetch.
     */
    orderBy?: DataBarangOrderByWithRelationInput | DataBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataBarangs.
     */
    cursor?: DataBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataBarangs.
     */
    distinct?: DataBarangScalarFieldEnum | DataBarangScalarFieldEnum[]
  }

  /**
   * DataBarang findMany
   */
  export type DataBarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * Filter, which DataBarangs to fetch.
     */
    where?: DataBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataBarangs to fetch.
     */
    orderBy?: DataBarangOrderByWithRelationInput | DataBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataBarangs.
     */
    cursor?: DataBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataBarangs.
     */
    skip?: number
    distinct?: DataBarangScalarFieldEnum | DataBarangScalarFieldEnum[]
  }

  /**
   * DataBarang create
   */
  export type DataBarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * The data needed to create a DataBarang.
     */
    data: XOR<DataBarangCreateInput, DataBarangUncheckedCreateInput>
  }

  /**
   * DataBarang createMany
   */
  export type DataBarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataBarangs.
     */
    data: DataBarangCreateManyInput | DataBarangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataBarang createManyAndReturn
   */
  export type DataBarangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * The data used to create many DataBarangs.
     */
    data: DataBarangCreateManyInput | DataBarangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataBarang update
   */
  export type DataBarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * The data needed to update a DataBarang.
     */
    data: XOR<DataBarangUpdateInput, DataBarangUncheckedUpdateInput>
    /**
     * Choose, which DataBarang to update.
     */
    where: DataBarangWhereUniqueInput
  }

  /**
   * DataBarang updateMany
   */
  export type DataBarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataBarangs.
     */
    data: XOR<DataBarangUpdateManyMutationInput, DataBarangUncheckedUpdateManyInput>
    /**
     * Filter which DataBarangs to update
     */
    where?: DataBarangWhereInput
    /**
     * Limit how many DataBarangs to update.
     */
    limit?: number
  }

  /**
   * DataBarang updateManyAndReturn
   */
  export type DataBarangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * The data used to update DataBarangs.
     */
    data: XOR<DataBarangUpdateManyMutationInput, DataBarangUncheckedUpdateManyInput>
    /**
     * Filter which DataBarangs to update
     */
    where?: DataBarangWhereInput
    /**
     * Limit how many DataBarangs to update.
     */
    limit?: number
  }

  /**
   * DataBarang upsert
   */
  export type DataBarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * The filter to search for the DataBarang to update in case it exists.
     */
    where: DataBarangWhereUniqueInput
    /**
     * In case the DataBarang found by the `where` argument doesn't exist, create a new DataBarang with this data.
     */
    create: XOR<DataBarangCreateInput, DataBarangUncheckedCreateInput>
    /**
     * In case the DataBarang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataBarangUpdateInput, DataBarangUncheckedUpdateInput>
  }

  /**
   * DataBarang delete
   */
  export type DataBarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
    /**
     * Filter which DataBarang to delete.
     */
    where: DataBarangWhereUniqueInput
  }

  /**
   * DataBarang deleteMany
   */
  export type DataBarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataBarangs to delete
     */
    where?: DataBarangWhereInput
    /**
     * Limit how many DataBarangs to delete.
     */
    limit?: number
  }

  /**
   * DataBarang.barangUnit
   */
  export type DataBarang$barangUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    where?: BarangUnitWhereInput
    orderBy?: BarangUnitOrderByWithRelationInput | BarangUnitOrderByWithRelationInput[]
    cursor?: BarangUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangUnitScalarFieldEnum | BarangUnitScalarFieldEnum[]
  }

  /**
   * DataBarang without action
   */
  export type DataBarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataBarang
     */
    select?: DataBarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataBarang
     */
    omit?: DataBarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataBarangInclude<ExtArgs> | null
  }


  /**
   * Model DataLokasi
   */

  export type AggregateDataLokasi = {
    _count: DataLokasiCountAggregateOutputType | null
    _min: DataLokasiMinAggregateOutputType | null
    _max: DataLokasiMaxAggregateOutputType | null
  }

  export type DataLokasiMinAggregateOutputType = {
    kode_lokasi: string | null
    lokasi: string | null
    jurusan: $Enums.Jurusan | null
    status: $Enums.StatusLokasi | null
  }

  export type DataLokasiMaxAggregateOutputType = {
    kode_lokasi: string | null
    lokasi: string | null
    jurusan: $Enums.Jurusan | null
    status: $Enums.StatusLokasi | null
  }

  export type DataLokasiCountAggregateOutputType = {
    kode_lokasi: number
    lokasi: number
    jurusan: number
    status: number
    _all: number
  }


  export type DataLokasiMinAggregateInputType = {
    kode_lokasi?: true
    lokasi?: true
    jurusan?: true
    status?: true
  }

  export type DataLokasiMaxAggregateInputType = {
    kode_lokasi?: true
    lokasi?: true
    jurusan?: true
    status?: true
  }

  export type DataLokasiCountAggregateInputType = {
    kode_lokasi?: true
    lokasi?: true
    jurusan?: true
    status?: true
    _all?: true
  }

  export type DataLokasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataLokasi to aggregate.
     */
    where?: DataLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLokasis to fetch.
     */
    orderBy?: DataLokasiOrderByWithRelationInput | DataLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataLokasis
    **/
    _count?: true | DataLokasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataLokasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataLokasiMaxAggregateInputType
  }

  export type GetDataLokasiAggregateType<T extends DataLokasiAggregateArgs> = {
        [P in keyof T & keyof AggregateDataLokasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataLokasi[P]>
      : GetScalarType<T[P], AggregateDataLokasi[P]>
  }




  export type DataLokasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataLokasiWhereInput
    orderBy?: DataLokasiOrderByWithAggregationInput | DataLokasiOrderByWithAggregationInput[]
    by: DataLokasiScalarFieldEnum[] | DataLokasiScalarFieldEnum
    having?: DataLokasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataLokasiCountAggregateInputType | true
    _min?: DataLokasiMinAggregateInputType
    _max?: DataLokasiMaxAggregateInputType
  }

  export type DataLokasiGroupByOutputType = {
    kode_lokasi: string
    lokasi: string
    jurusan: $Enums.Jurusan
    status: $Enums.StatusLokasi
    _count: DataLokasiCountAggregateOutputType | null
    _min: DataLokasiMinAggregateOutputType | null
    _max: DataLokasiMaxAggregateOutputType | null
  }

  type GetDataLokasiGroupByPayload<T extends DataLokasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataLokasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataLokasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataLokasiGroupByOutputType[P]>
            : GetScalarType<T[P], DataLokasiGroupByOutputType[P]>
        }
      >
    >


  export type DataLokasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_lokasi?: boolean
    lokasi?: boolean
    jurusan?: boolean
    status?: boolean
    barangUnit?: boolean | DataLokasi$barangUnitArgs<ExtArgs>
    monitoring?: boolean | DataLokasi$monitoringArgs<ExtArgs>
    peminjamanP?: boolean | DataLokasi$peminjamanPArgs<ExtArgs>
    _count?: boolean | DataLokasiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataLokasi"]>

  export type DataLokasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_lokasi?: boolean
    lokasi?: boolean
    jurusan?: boolean
    status?: boolean
  }, ExtArgs["result"]["dataLokasi"]>

  export type DataLokasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_lokasi?: boolean
    lokasi?: boolean
    jurusan?: boolean
    status?: boolean
  }, ExtArgs["result"]["dataLokasi"]>

  export type DataLokasiSelectScalar = {
    kode_lokasi?: boolean
    lokasi?: boolean
    jurusan?: boolean
    status?: boolean
  }

  export type DataLokasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode_lokasi" | "lokasi" | "jurusan" | "status", ExtArgs["result"]["dataLokasi"]>
  export type DataLokasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | DataLokasi$barangUnitArgs<ExtArgs>
    monitoring?: boolean | DataLokasi$monitoringArgs<ExtArgs>
    peminjamanP?: boolean | DataLokasi$peminjamanPArgs<ExtArgs>
    _count?: boolean | DataLokasiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DataLokasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DataLokasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DataLokasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataLokasi"
    objects: {
      barangUnit: Prisma.$BarangUnitPayload<ExtArgs>[]
      monitoring: Prisma.$MonitoringPayload<ExtArgs>[]
      peminjamanP: Prisma.$PeminjamanPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kode_lokasi: string
      lokasi: string
      jurusan: $Enums.Jurusan
      status: $Enums.StatusLokasi
    }, ExtArgs["result"]["dataLokasi"]>
    composites: {}
  }

  type DataLokasiGetPayload<S extends boolean | null | undefined | DataLokasiDefaultArgs> = $Result.GetResult<Prisma.$DataLokasiPayload, S>

  type DataLokasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataLokasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataLokasiCountAggregateInputType | true
    }

  export interface DataLokasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataLokasi'], meta: { name: 'DataLokasi' } }
    /**
     * Find zero or one DataLokasi that matches the filter.
     * @param {DataLokasiFindUniqueArgs} args - Arguments to find a DataLokasi
     * @example
     * // Get one DataLokasi
     * const dataLokasi = await prisma.dataLokasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataLokasiFindUniqueArgs>(args: SelectSubset<T, DataLokasiFindUniqueArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataLokasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataLokasiFindUniqueOrThrowArgs} args - Arguments to find a DataLokasi
     * @example
     * // Get one DataLokasi
     * const dataLokasi = await prisma.dataLokasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataLokasiFindUniqueOrThrowArgs>(args: SelectSubset<T, DataLokasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataLokasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLokasiFindFirstArgs} args - Arguments to find a DataLokasi
     * @example
     * // Get one DataLokasi
     * const dataLokasi = await prisma.dataLokasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataLokasiFindFirstArgs>(args?: SelectSubset<T, DataLokasiFindFirstArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataLokasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLokasiFindFirstOrThrowArgs} args - Arguments to find a DataLokasi
     * @example
     * // Get one DataLokasi
     * const dataLokasi = await prisma.dataLokasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataLokasiFindFirstOrThrowArgs>(args?: SelectSubset<T, DataLokasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataLokasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLokasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataLokasis
     * const dataLokasis = await prisma.dataLokasi.findMany()
     * 
     * // Get first 10 DataLokasis
     * const dataLokasis = await prisma.dataLokasi.findMany({ take: 10 })
     * 
     * // Only select the `kode_lokasi`
     * const dataLokasiWithKode_lokasiOnly = await prisma.dataLokasi.findMany({ select: { kode_lokasi: true } })
     * 
     */
    findMany<T extends DataLokasiFindManyArgs>(args?: SelectSubset<T, DataLokasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataLokasi.
     * @param {DataLokasiCreateArgs} args - Arguments to create a DataLokasi.
     * @example
     * // Create one DataLokasi
     * const DataLokasi = await prisma.dataLokasi.create({
     *   data: {
     *     // ... data to create a DataLokasi
     *   }
     * })
     * 
     */
    create<T extends DataLokasiCreateArgs>(args: SelectSubset<T, DataLokasiCreateArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataLokasis.
     * @param {DataLokasiCreateManyArgs} args - Arguments to create many DataLokasis.
     * @example
     * // Create many DataLokasis
     * const dataLokasi = await prisma.dataLokasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataLokasiCreateManyArgs>(args?: SelectSubset<T, DataLokasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataLokasis and returns the data saved in the database.
     * @param {DataLokasiCreateManyAndReturnArgs} args - Arguments to create many DataLokasis.
     * @example
     * // Create many DataLokasis
     * const dataLokasi = await prisma.dataLokasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataLokasis and only return the `kode_lokasi`
     * const dataLokasiWithKode_lokasiOnly = await prisma.dataLokasi.createManyAndReturn({
     *   select: { kode_lokasi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataLokasiCreateManyAndReturnArgs>(args?: SelectSubset<T, DataLokasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataLokasi.
     * @param {DataLokasiDeleteArgs} args - Arguments to delete one DataLokasi.
     * @example
     * // Delete one DataLokasi
     * const DataLokasi = await prisma.dataLokasi.delete({
     *   where: {
     *     // ... filter to delete one DataLokasi
     *   }
     * })
     * 
     */
    delete<T extends DataLokasiDeleteArgs>(args: SelectSubset<T, DataLokasiDeleteArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataLokasi.
     * @param {DataLokasiUpdateArgs} args - Arguments to update one DataLokasi.
     * @example
     * // Update one DataLokasi
     * const dataLokasi = await prisma.dataLokasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataLokasiUpdateArgs>(args: SelectSubset<T, DataLokasiUpdateArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataLokasis.
     * @param {DataLokasiDeleteManyArgs} args - Arguments to filter DataLokasis to delete.
     * @example
     * // Delete a few DataLokasis
     * const { count } = await prisma.dataLokasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataLokasiDeleteManyArgs>(args?: SelectSubset<T, DataLokasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataLokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLokasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataLokasis
     * const dataLokasi = await prisma.dataLokasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataLokasiUpdateManyArgs>(args: SelectSubset<T, DataLokasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataLokasis and returns the data updated in the database.
     * @param {DataLokasiUpdateManyAndReturnArgs} args - Arguments to update many DataLokasis.
     * @example
     * // Update many DataLokasis
     * const dataLokasi = await prisma.dataLokasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataLokasis and only return the `kode_lokasi`
     * const dataLokasiWithKode_lokasiOnly = await prisma.dataLokasi.updateManyAndReturn({
     *   select: { kode_lokasi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataLokasiUpdateManyAndReturnArgs>(args: SelectSubset<T, DataLokasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataLokasi.
     * @param {DataLokasiUpsertArgs} args - Arguments to update or create a DataLokasi.
     * @example
     * // Update or create a DataLokasi
     * const dataLokasi = await prisma.dataLokasi.upsert({
     *   create: {
     *     // ... data to create a DataLokasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataLokasi we want to update
     *   }
     * })
     */
    upsert<T extends DataLokasiUpsertArgs>(args: SelectSubset<T, DataLokasiUpsertArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataLokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLokasiCountArgs} args - Arguments to filter DataLokasis to count.
     * @example
     * // Count the number of DataLokasis
     * const count = await prisma.dataLokasi.count({
     *   where: {
     *     // ... the filter for the DataLokasis we want to count
     *   }
     * })
    **/
    count<T extends DataLokasiCountArgs>(
      args?: Subset<T, DataLokasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataLokasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataLokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLokasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataLokasiAggregateArgs>(args: Subset<T, DataLokasiAggregateArgs>): Prisma.PrismaPromise<GetDataLokasiAggregateType<T>>

    /**
     * Group by DataLokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataLokasiGroupByArgs} args - Group by arguments.
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
      T extends DataLokasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataLokasiGroupByArgs['orderBy'] }
        : { orderBy?: DataLokasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataLokasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataLokasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataLokasi model
   */
  readonly fields: DataLokasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataLokasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataLokasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barangUnit<T extends DataLokasi$barangUnitArgs<ExtArgs> = {}>(args?: Subset<T, DataLokasi$barangUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monitoring<T extends DataLokasi$monitoringArgs<ExtArgs> = {}>(args?: Subset<T, DataLokasi$monitoringArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peminjamanP<T extends DataLokasi$peminjamanPArgs<ExtArgs> = {}>(args?: Subset<T, DataLokasi$peminjamanPArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataLokasi model
   */
  interface DataLokasiFieldRefs {
    readonly kode_lokasi: FieldRef<"DataLokasi", 'String'>
    readonly lokasi: FieldRef<"DataLokasi", 'String'>
    readonly jurusan: FieldRef<"DataLokasi", 'Jurusan'>
    readonly status: FieldRef<"DataLokasi", 'StatusLokasi'>
  }
    

  // Custom InputTypes
  /**
   * DataLokasi findUnique
   */
  export type DataLokasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * Filter, which DataLokasi to fetch.
     */
    where: DataLokasiWhereUniqueInput
  }

  /**
   * DataLokasi findUniqueOrThrow
   */
  export type DataLokasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * Filter, which DataLokasi to fetch.
     */
    where: DataLokasiWhereUniqueInput
  }

  /**
   * DataLokasi findFirst
   */
  export type DataLokasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * Filter, which DataLokasi to fetch.
     */
    where?: DataLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLokasis to fetch.
     */
    orderBy?: DataLokasiOrderByWithRelationInput | DataLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataLokasis.
     */
    cursor?: DataLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataLokasis.
     */
    distinct?: DataLokasiScalarFieldEnum | DataLokasiScalarFieldEnum[]
  }

  /**
   * DataLokasi findFirstOrThrow
   */
  export type DataLokasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * Filter, which DataLokasi to fetch.
     */
    where?: DataLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLokasis to fetch.
     */
    orderBy?: DataLokasiOrderByWithRelationInput | DataLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataLokasis.
     */
    cursor?: DataLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataLokasis.
     */
    distinct?: DataLokasiScalarFieldEnum | DataLokasiScalarFieldEnum[]
  }

  /**
   * DataLokasi findMany
   */
  export type DataLokasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * Filter, which DataLokasis to fetch.
     */
    where?: DataLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataLokasis to fetch.
     */
    orderBy?: DataLokasiOrderByWithRelationInput | DataLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataLokasis.
     */
    cursor?: DataLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataLokasis.
     */
    skip?: number
    distinct?: DataLokasiScalarFieldEnum | DataLokasiScalarFieldEnum[]
  }

  /**
   * DataLokasi create
   */
  export type DataLokasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * The data needed to create a DataLokasi.
     */
    data: XOR<DataLokasiCreateInput, DataLokasiUncheckedCreateInput>
  }

  /**
   * DataLokasi createMany
   */
  export type DataLokasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataLokasis.
     */
    data: DataLokasiCreateManyInput | DataLokasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataLokasi createManyAndReturn
   */
  export type DataLokasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * The data used to create many DataLokasis.
     */
    data: DataLokasiCreateManyInput | DataLokasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataLokasi update
   */
  export type DataLokasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * The data needed to update a DataLokasi.
     */
    data: XOR<DataLokasiUpdateInput, DataLokasiUncheckedUpdateInput>
    /**
     * Choose, which DataLokasi to update.
     */
    where: DataLokasiWhereUniqueInput
  }

  /**
   * DataLokasi updateMany
   */
  export type DataLokasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataLokasis.
     */
    data: XOR<DataLokasiUpdateManyMutationInput, DataLokasiUncheckedUpdateManyInput>
    /**
     * Filter which DataLokasis to update
     */
    where?: DataLokasiWhereInput
    /**
     * Limit how many DataLokasis to update.
     */
    limit?: number
  }

  /**
   * DataLokasi updateManyAndReturn
   */
  export type DataLokasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * The data used to update DataLokasis.
     */
    data: XOR<DataLokasiUpdateManyMutationInput, DataLokasiUncheckedUpdateManyInput>
    /**
     * Filter which DataLokasis to update
     */
    where?: DataLokasiWhereInput
    /**
     * Limit how many DataLokasis to update.
     */
    limit?: number
  }

  /**
   * DataLokasi upsert
   */
  export type DataLokasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * The filter to search for the DataLokasi to update in case it exists.
     */
    where: DataLokasiWhereUniqueInput
    /**
     * In case the DataLokasi found by the `where` argument doesn't exist, create a new DataLokasi with this data.
     */
    create: XOR<DataLokasiCreateInput, DataLokasiUncheckedCreateInput>
    /**
     * In case the DataLokasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataLokasiUpdateInput, DataLokasiUncheckedUpdateInput>
  }

  /**
   * DataLokasi delete
   */
  export type DataLokasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    /**
     * Filter which DataLokasi to delete.
     */
    where: DataLokasiWhereUniqueInput
  }

  /**
   * DataLokasi deleteMany
   */
  export type DataLokasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataLokasis to delete
     */
    where?: DataLokasiWhereInput
    /**
     * Limit how many DataLokasis to delete.
     */
    limit?: number
  }

  /**
   * DataLokasi.barangUnit
   */
  export type DataLokasi$barangUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    where?: BarangUnitWhereInput
    orderBy?: BarangUnitOrderByWithRelationInput | BarangUnitOrderByWithRelationInput[]
    cursor?: BarangUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangUnitScalarFieldEnum | BarangUnitScalarFieldEnum[]
  }

  /**
   * DataLokasi.monitoring
   */
  export type DataLokasi$monitoringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    where?: MonitoringWhereInput
    orderBy?: MonitoringOrderByWithRelationInput | MonitoringOrderByWithRelationInput[]
    cursor?: MonitoringWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonitoringScalarFieldEnum | MonitoringScalarFieldEnum[]
  }

  /**
   * DataLokasi.peminjamanP
   */
  export type DataLokasi$peminjamanPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    where?: PeminjamanPWhereInput
    orderBy?: PeminjamanPOrderByWithRelationInput | PeminjamanPOrderByWithRelationInput[]
    cursor?: PeminjamanPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanPScalarFieldEnum | PeminjamanPScalarFieldEnum[]
  }

  /**
   * DataLokasi without action
   */
  export type DataLokasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
  }


  /**
   * Model BarangUnit
   */

  export type AggregateBarangUnit = {
    _count: BarangUnitCountAggregateOutputType | null
    _min: BarangUnitMinAggregateOutputType | null
    _max: BarangUnitMaxAggregateOutputType | null
  }

  export type BarangUnitMinAggregateOutputType = {
    nup: string | null
    kodeBarang: string | null
    lokasi: string | null
    nikUser: string | null
    status: $Enums.StatusB | null
    jurusan: $Enums.Jurusan | null
    createdAt: Date | null
  }

  export type BarangUnitMaxAggregateOutputType = {
    nup: string | null
    kodeBarang: string | null
    lokasi: string | null
    nikUser: string | null
    status: $Enums.StatusB | null
    jurusan: $Enums.Jurusan | null
    createdAt: Date | null
  }

  export type BarangUnitCountAggregateOutputType = {
    nup: number
    kodeBarang: number
    lokasi: number
    nikUser: number
    status: number
    jurusan: number
    createdAt: number
    _all: number
  }


  export type BarangUnitMinAggregateInputType = {
    nup?: true
    kodeBarang?: true
    lokasi?: true
    nikUser?: true
    status?: true
    jurusan?: true
    createdAt?: true
  }

  export type BarangUnitMaxAggregateInputType = {
    nup?: true
    kodeBarang?: true
    lokasi?: true
    nikUser?: true
    status?: true
    jurusan?: true
    createdAt?: true
  }

  export type BarangUnitCountAggregateInputType = {
    nup?: true
    kodeBarang?: true
    lokasi?: true
    nikUser?: true
    status?: true
    jurusan?: true
    createdAt?: true
    _all?: true
  }

  export type BarangUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangUnit to aggregate.
     */
    where?: BarangUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangUnits to fetch.
     */
    orderBy?: BarangUnitOrderByWithRelationInput | BarangUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarangUnits
    **/
    _count?: true | BarangUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangUnitMaxAggregateInputType
  }

  export type GetBarangUnitAggregateType<T extends BarangUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateBarangUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarangUnit[P]>
      : GetScalarType<T[P], AggregateBarangUnit[P]>
  }




  export type BarangUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangUnitWhereInput
    orderBy?: BarangUnitOrderByWithAggregationInput | BarangUnitOrderByWithAggregationInput[]
    by: BarangUnitScalarFieldEnum[] | BarangUnitScalarFieldEnum
    having?: BarangUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangUnitCountAggregateInputType | true
    _min?: BarangUnitMinAggregateInputType
    _max?: BarangUnitMaxAggregateInputType
  }

  export type BarangUnitGroupByOutputType = {
    nup: string
    kodeBarang: string
    lokasi: string
    nikUser: string
    status: $Enums.StatusB
    jurusan: $Enums.Jurusan
    createdAt: Date
    _count: BarangUnitCountAggregateOutputType | null
    _min: BarangUnitMinAggregateOutputType | null
    _max: BarangUnitMaxAggregateOutputType | null
  }

  type GetBarangUnitGroupByPayload<T extends BarangUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangUnitGroupByOutputType[P]>
            : GetScalarType<T[P], BarangUnitGroupByOutputType[P]>
        }
      >
    >


  export type BarangUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nup?: boolean
    kodeBarang?: boolean
    lokasi?: boolean
    nikUser?: boolean
    status?: boolean
    jurusan?: boolean
    createdAt?: boolean
    dataBarang?: boolean | DataBarangDefaultArgs<ExtArgs>
    dataLokasi?: boolean | DataLokasiDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    monitoring?: boolean | BarangUnit$monitoringArgs<ExtArgs>
    peminjamanItems?: boolean | BarangUnit$peminjamanItemsArgs<ExtArgs>
    _count?: boolean | BarangUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangUnit"]>

  export type BarangUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nup?: boolean
    kodeBarang?: boolean
    lokasi?: boolean
    nikUser?: boolean
    status?: boolean
    jurusan?: boolean
    createdAt?: boolean
    dataBarang?: boolean | DataBarangDefaultArgs<ExtArgs>
    dataLokasi?: boolean | DataLokasiDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangUnit"]>

  export type BarangUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nup?: boolean
    kodeBarang?: boolean
    lokasi?: boolean
    nikUser?: boolean
    status?: boolean
    jurusan?: boolean
    createdAt?: boolean
    dataBarang?: boolean | DataBarangDefaultArgs<ExtArgs>
    dataLokasi?: boolean | DataLokasiDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangUnit"]>

  export type BarangUnitSelectScalar = {
    nup?: boolean
    kodeBarang?: boolean
    lokasi?: boolean
    nikUser?: boolean
    status?: boolean
    jurusan?: boolean
    createdAt?: boolean
  }

  export type BarangUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nup" | "kodeBarang" | "lokasi" | "nikUser" | "status" | "jurusan" | "createdAt", ExtArgs["result"]["barangUnit"]>
  export type BarangUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataBarang?: boolean | DataBarangDefaultArgs<ExtArgs>
    dataLokasi?: boolean | DataLokasiDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    monitoring?: boolean | BarangUnit$monitoringArgs<ExtArgs>
    peminjamanItems?: boolean | BarangUnit$peminjamanItemsArgs<ExtArgs>
    _count?: boolean | BarangUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarangUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataBarang?: boolean | DataBarangDefaultArgs<ExtArgs>
    dataLokasi?: boolean | DataLokasiDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BarangUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataBarang?: boolean | DataBarangDefaultArgs<ExtArgs>
    dataLokasi?: boolean | DataLokasiDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BarangUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarangUnit"
    objects: {
      dataBarang: Prisma.$DataBarangPayload<ExtArgs>
      dataLokasi: Prisma.$DataLokasiPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      monitoring: Prisma.$MonitoringPayload<ExtArgs>[]
      peminjamanItems: Prisma.$PeminjamanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nup: string
      kodeBarang: string
      lokasi: string
      nikUser: string
      status: $Enums.StatusB
      jurusan: $Enums.Jurusan
      createdAt: Date
    }, ExtArgs["result"]["barangUnit"]>
    composites: {}
  }

  type BarangUnitGetPayload<S extends boolean | null | undefined | BarangUnitDefaultArgs> = $Result.GetResult<Prisma.$BarangUnitPayload, S>

  type BarangUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarangUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarangUnitCountAggregateInputType | true
    }

  export interface BarangUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarangUnit'], meta: { name: 'BarangUnit' } }
    /**
     * Find zero or one BarangUnit that matches the filter.
     * @param {BarangUnitFindUniqueArgs} args - Arguments to find a BarangUnit
     * @example
     * // Get one BarangUnit
     * const barangUnit = await prisma.barangUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarangUnitFindUniqueArgs>(args: SelectSubset<T, BarangUnitFindUniqueArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarangUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarangUnitFindUniqueOrThrowArgs} args - Arguments to find a BarangUnit
     * @example
     * // Get one BarangUnit
     * const barangUnit = await prisma.barangUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarangUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, BarangUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarangUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUnitFindFirstArgs} args - Arguments to find a BarangUnit
     * @example
     * // Get one BarangUnit
     * const barangUnit = await prisma.barangUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarangUnitFindFirstArgs>(args?: SelectSubset<T, BarangUnitFindFirstArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarangUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUnitFindFirstOrThrowArgs} args - Arguments to find a BarangUnit
     * @example
     * // Get one BarangUnit
     * const barangUnit = await prisma.barangUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarangUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, BarangUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarangUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarangUnits
     * const barangUnits = await prisma.barangUnit.findMany()
     * 
     * // Get first 10 BarangUnits
     * const barangUnits = await prisma.barangUnit.findMany({ take: 10 })
     * 
     * // Only select the `nup`
     * const barangUnitWithNupOnly = await prisma.barangUnit.findMany({ select: { nup: true } })
     * 
     */
    findMany<T extends BarangUnitFindManyArgs>(args?: SelectSubset<T, BarangUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarangUnit.
     * @param {BarangUnitCreateArgs} args - Arguments to create a BarangUnit.
     * @example
     * // Create one BarangUnit
     * const BarangUnit = await prisma.barangUnit.create({
     *   data: {
     *     // ... data to create a BarangUnit
     *   }
     * })
     * 
     */
    create<T extends BarangUnitCreateArgs>(args: SelectSubset<T, BarangUnitCreateArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarangUnits.
     * @param {BarangUnitCreateManyArgs} args - Arguments to create many BarangUnits.
     * @example
     * // Create many BarangUnits
     * const barangUnit = await prisma.barangUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarangUnitCreateManyArgs>(args?: SelectSubset<T, BarangUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarangUnits and returns the data saved in the database.
     * @param {BarangUnitCreateManyAndReturnArgs} args - Arguments to create many BarangUnits.
     * @example
     * // Create many BarangUnits
     * const barangUnit = await prisma.barangUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarangUnits and only return the `nup`
     * const barangUnitWithNupOnly = await prisma.barangUnit.createManyAndReturn({
     *   select: { nup: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarangUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, BarangUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarangUnit.
     * @param {BarangUnitDeleteArgs} args - Arguments to delete one BarangUnit.
     * @example
     * // Delete one BarangUnit
     * const BarangUnit = await prisma.barangUnit.delete({
     *   where: {
     *     // ... filter to delete one BarangUnit
     *   }
     * })
     * 
     */
    delete<T extends BarangUnitDeleteArgs>(args: SelectSubset<T, BarangUnitDeleteArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarangUnit.
     * @param {BarangUnitUpdateArgs} args - Arguments to update one BarangUnit.
     * @example
     * // Update one BarangUnit
     * const barangUnit = await prisma.barangUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarangUnitUpdateArgs>(args: SelectSubset<T, BarangUnitUpdateArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarangUnits.
     * @param {BarangUnitDeleteManyArgs} args - Arguments to filter BarangUnits to delete.
     * @example
     * // Delete a few BarangUnits
     * const { count } = await prisma.barangUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarangUnitDeleteManyArgs>(args?: SelectSubset<T, BarangUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarangUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarangUnits
     * const barangUnit = await prisma.barangUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarangUnitUpdateManyArgs>(args: SelectSubset<T, BarangUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarangUnits and returns the data updated in the database.
     * @param {BarangUnitUpdateManyAndReturnArgs} args - Arguments to update many BarangUnits.
     * @example
     * // Update many BarangUnits
     * const barangUnit = await prisma.barangUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarangUnits and only return the `nup`
     * const barangUnitWithNupOnly = await prisma.barangUnit.updateManyAndReturn({
     *   select: { nup: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarangUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, BarangUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarangUnit.
     * @param {BarangUnitUpsertArgs} args - Arguments to update or create a BarangUnit.
     * @example
     * // Update or create a BarangUnit
     * const barangUnit = await prisma.barangUnit.upsert({
     *   create: {
     *     // ... data to create a BarangUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarangUnit we want to update
     *   }
     * })
     */
    upsert<T extends BarangUnitUpsertArgs>(args: SelectSubset<T, BarangUnitUpsertArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarangUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUnitCountArgs} args - Arguments to filter BarangUnits to count.
     * @example
     * // Count the number of BarangUnits
     * const count = await prisma.barangUnit.count({
     *   where: {
     *     // ... the filter for the BarangUnits we want to count
     *   }
     * })
    **/
    count<T extends BarangUnitCountArgs>(
      args?: Subset<T, BarangUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarangUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarangUnitAggregateArgs>(args: Subset<T, BarangUnitAggregateArgs>): Prisma.PrismaPromise<GetBarangUnitAggregateType<T>>

    /**
     * Group by BarangUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUnitGroupByArgs} args - Group by arguments.
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
      T extends BarangUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangUnitGroupByArgs['orderBy'] }
        : { orderBy?: BarangUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarangUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarangUnit model
   */
  readonly fields: BarangUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarangUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataBarang<T extends DataBarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DataBarangDefaultArgs<ExtArgs>>): Prisma__DataBarangClient<$Result.GetResult<Prisma.$DataBarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataLokasi<T extends DataLokasiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DataLokasiDefaultArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    monitoring<T extends BarangUnit$monitoringArgs<ExtArgs> = {}>(args?: Subset<T, BarangUnit$monitoringArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peminjamanItems<T extends BarangUnit$peminjamanItemsArgs<ExtArgs> = {}>(args?: Subset<T, BarangUnit$peminjamanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BarangUnit model
   */
  interface BarangUnitFieldRefs {
    readonly nup: FieldRef<"BarangUnit", 'String'>
    readonly kodeBarang: FieldRef<"BarangUnit", 'String'>
    readonly lokasi: FieldRef<"BarangUnit", 'String'>
    readonly nikUser: FieldRef<"BarangUnit", 'String'>
    readonly status: FieldRef<"BarangUnit", 'StatusB'>
    readonly jurusan: FieldRef<"BarangUnit", 'Jurusan'>
    readonly createdAt: FieldRef<"BarangUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BarangUnit findUnique
   */
  export type BarangUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * Filter, which BarangUnit to fetch.
     */
    where: BarangUnitWhereUniqueInput
  }

  /**
   * BarangUnit findUniqueOrThrow
   */
  export type BarangUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * Filter, which BarangUnit to fetch.
     */
    where: BarangUnitWhereUniqueInput
  }

  /**
   * BarangUnit findFirst
   */
  export type BarangUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * Filter, which BarangUnit to fetch.
     */
    where?: BarangUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangUnits to fetch.
     */
    orderBy?: BarangUnitOrderByWithRelationInput | BarangUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangUnits.
     */
    cursor?: BarangUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangUnits.
     */
    distinct?: BarangUnitScalarFieldEnum | BarangUnitScalarFieldEnum[]
  }

  /**
   * BarangUnit findFirstOrThrow
   */
  export type BarangUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * Filter, which BarangUnit to fetch.
     */
    where?: BarangUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangUnits to fetch.
     */
    orderBy?: BarangUnitOrderByWithRelationInput | BarangUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangUnits.
     */
    cursor?: BarangUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangUnits.
     */
    distinct?: BarangUnitScalarFieldEnum | BarangUnitScalarFieldEnum[]
  }

  /**
   * BarangUnit findMany
   */
  export type BarangUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * Filter, which BarangUnits to fetch.
     */
    where?: BarangUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangUnits to fetch.
     */
    orderBy?: BarangUnitOrderByWithRelationInput | BarangUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarangUnits.
     */
    cursor?: BarangUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangUnits.
     */
    skip?: number
    distinct?: BarangUnitScalarFieldEnum | BarangUnitScalarFieldEnum[]
  }

  /**
   * BarangUnit create
   */
  export type BarangUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a BarangUnit.
     */
    data: XOR<BarangUnitCreateInput, BarangUnitUncheckedCreateInput>
  }

  /**
   * BarangUnit createMany
   */
  export type BarangUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarangUnits.
     */
    data: BarangUnitCreateManyInput | BarangUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarangUnit createManyAndReturn
   */
  export type BarangUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * The data used to create many BarangUnits.
     */
    data: BarangUnitCreateManyInput | BarangUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarangUnit update
   */
  export type BarangUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a BarangUnit.
     */
    data: XOR<BarangUnitUpdateInput, BarangUnitUncheckedUpdateInput>
    /**
     * Choose, which BarangUnit to update.
     */
    where: BarangUnitWhereUniqueInput
  }

  /**
   * BarangUnit updateMany
   */
  export type BarangUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarangUnits.
     */
    data: XOR<BarangUnitUpdateManyMutationInput, BarangUnitUncheckedUpdateManyInput>
    /**
     * Filter which BarangUnits to update
     */
    where?: BarangUnitWhereInput
    /**
     * Limit how many BarangUnits to update.
     */
    limit?: number
  }

  /**
   * BarangUnit updateManyAndReturn
   */
  export type BarangUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * The data used to update BarangUnits.
     */
    data: XOR<BarangUnitUpdateManyMutationInput, BarangUnitUncheckedUpdateManyInput>
    /**
     * Filter which BarangUnits to update
     */
    where?: BarangUnitWhereInput
    /**
     * Limit how many BarangUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarangUnit upsert
   */
  export type BarangUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the BarangUnit to update in case it exists.
     */
    where: BarangUnitWhereUniqueInput
    /**
     * In case the BarangUnit found by the `where` argument doesn't exist, create a new BarangUnit with this data.
     */
    create: XOR<BarangUnitCreateInput, BarangUnitUncheckedCreateInput>
    /**
     * In case the BarangUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangUnitUpdateInput, BarangUnitUncheckedUpdateInput>
  }

  /**
   * BarangUnit delete
   */
  export type BarangUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
    /**
     * Filter which BarangUnit to delete.
     */
    where: BarangUnitWhereUniqueInput
  }

  /**
   * BarangUnit deleteMany
   */
  export type BarangUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangUnits to delete
     */
    where?: BarangUnitWhereInput
    /**
     * Limit how many BarangUnits to delete.
     */
    limit?: number
  }

  /**
   * BarangUnit.monitoring
   */
  export type BarangUnit$monitoringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    where?: MonitoringWhereInput
    orderBy?: MonitoringOrderByWithRelationInput | MonitoringOrderByWithRelationInput[]
    cursor?: MonitoringWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonitoringScalarFieldEnum | MonitoringScalarFieldEnum[]
  }

  /**
   * BarangUnit.peminjamanItems
   */
  export type BarangUnit$peminjamanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    where?: PeminjamanItemWhereInput
    orderBy?: PeminjamanItemOrderByWithRelationInput | PeminjamanItemOrderByWithRelationInput[]
    cursor?: PeminjamanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanItemScalarFieldEnum | PeminjamanItemScalarFieldEnum[]
  }

  /**
   * BarangUnit without action
   */
  export type BarangUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangUnit
     */
    select?: BarangUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarangUnit
     */
    omit?: BarangUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangUnitInclude<ExtArgs> | null
  }


  /**
   * Model PeminjamanP
   */

  export type AggregatePeminjamanP = {
    _count: PeminjamanPCountAggregateOutputType | null
    _avg: PeminjamanPAvgAggregateOutputType | null
    _sum: PeminjamanPSumAggregateOutputType | null
    _min: PeminjamanPMinAggregateOutputType | null
    _max: PeminjamanPMaxAggregateOutputType | null
  }

  export type PeminjamanPAvgAggregateOutputType = {
    id: number | null
  }

  export type PeminjamanPSumAggregateOutputType = {
    id: number | null
  }

  export type PeminjamanPMinAggregateOutputType = {
    id: number | null
    userNik: string | null
    barangUnitId: string | null
    kodeLokasi: string | null
    lokasiTambahan: string | null
    no_hp: string | null
    createdAt: Date | null
    Agenda: string | null
    waktuMulai: Date | null
    waktuSelesai: Date | null
    verifikasi: $Enums.StatusBooking | null
    status: $Enums.StatusP | null
    qrCode: string | null
    waktuAmbil: Date | null
    waktuKembali: Date | null
  }

  export type PeminjamanPMaxAggregateOutputType = {
    id: number | null
    userNik: string | null
    barangUnitId: string | null
    kodeLokasi: string | null
    lokasiTambahan: string | null
    no_hp: string | null
    createdAt: Date | null
    Agenda: string | null
    waktuMulai: Date | null
    waktuSelesai: Date | null
    verifikasi: $Enums.StatusBooking | null
    status: $Enums.StatusP | null
    qrCode: string | null
    waktuAmbil: Date | null
    waktuKembali: Date | null
  }

  export type PeminjamanPCountAggregateOutputType = {
    id: number
    userNik: number
    barangUnitId: number
    kodeLokasi: number
    lokasiTambahan: number
    no_hp: number
    createdAt: number
    Agenda: number
    waktuMulai: number
    waktuSelesai: number
    verifikasi: number
    status: number
    qrCode: number
    waktuAmbil: number
    waktuKembali: number
    _all: number
  }


  export type PeminjamanPAvgAggregateInputType = {
    id?: true
  }

  export type PeminjamanPSumAggregateInputType = {
    id?: true
  }

  export type PeminjamanPMinAggregateInputType = {
    id?: true
    userNik?: true
    barangUnitId?: true
    kodeLokasi?: true
    lokasiTambahan?: true
    no_hp?: true
    createdAt?: true
    Agenda?: true
    waktuMulai?: true
    waktuSelesai?: true
    verifikasi?: true
    status?: true
    qrCode?: true
    waktuAmbil?: true
    waktuKembali?: true
  }

  export type PeminjamanPMaxAggregateInputType = {
    id?: true
    userNik?: true
    barangUnitId?: true
    kodeLokasi?: true
    lokasiTambahan?: true
    no_hp?: true
    createdAt?: true
    Agenda?: true
    waktuMulai?: true
    waktuSelesai?: true
    verifikasi?: true
    status?: true
    qrCode?: true
    waktuAmbil?: true
    waktuKembali?: true
  }

  export type PeminjamanPCountAggregateInputType = {
    id?: true
    userNik?: true
    barangUnitId?: true
    kodeLokasi?: true
    lokasiTambahan?: true
    no_hp?: true
    createdAt?: true
    Agenda?: true
    waktuMulai?: true
    waktuSelesai?: true
    verifikasi?: true
    status?: true
    qrCode?: true
    waktuAmbil?: true
    waktuKembali?: true
    _all?: true
  }

  export type PeminjamanPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeminjamanP to aggregate.
     */
    where?: PeminjamanPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanPS to fetch.
     */
    orderBy?: PeminjamanPOrderByWithRelationInput | PeminjamanPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeminjamanPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeminjamanPS
    **/
    _count?: true | PeminjamanPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeminjamanPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeminjamanPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanPMaxAggregateInputType
  }

  export type GetPeminjamanPAggregateType<T extends PeminjamanPAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjamanP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjamanP[P]>
      : GetScalarType<T[P], AggregatePeminjamanP[P]>
  }




  export type PeminjamanPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanPWhereInput
    orderBy?: PeminjamanPOrderByWithAggregationInput | PeminjamanPOrderByWithAggregationInput[]
    by: PeminjamanPScalarFieldEnum[] | PeminjamanPScalarFieldEnum
    having?: PeminjamanPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanPCountAggregateInputType | true
    _avg?: PeminjamanPAvgAggregateInputType
    _sum?: PeminjamanPSumAggregateInputType
    _min?: PeminjamanPMinAggregateInputType
    _max?: PeminjamanPMaxAggregateInputType
  }

  export type PeminjamanPGroupByOutputType = {
    id: number
    userNik: string
    barangUnitId: string | null
    kodeLokasi: string | null
    lokasiTambahan: string | null
    no_hp: string
    createdAt: Date
    Agenda: string
    waktuMulai: Date
    waktuSelesai: Date
    verifikasi: $Enums.StatusBooking
    status: $Enums.StatusP
    qrCode: string | null
    waktuAmbil: Date | null
    waktuKembali: Date | null
    _count: PeminjamanPCountAggregateOutputType | null
    _avg: PeminjamanPAvgAggregateOutputType | null
    _sum: PeminjamanPSumAggregateOutputType | null
    _min: PeminjamanPMinAggregateOutputType | null
    _max: PeminjamanPMaxAggregateOutputType | null
  }

  type GetPeminjamanPGroupByPayload<T extends PeminjamanPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanPGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanPGroupByOutputType[P]>
        }
      >
    >


  export type PeminjamanPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userNik?: boolean
    barangUnitId?: boolean
    kodeLokasi?: boolean
    lokasiTambahan?: boolean
    no_hp?: boolean
    createdAt?: boolean
    Agenda?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    verifikasi?: boolean
    status?: boolean
    qrCode?: boolean
    waktuAmbil?: boolean
    waktuKembali?: boolean
    logScanBMN?: boolean | PeminjamanP$logScanBMNArgs<ExtArgs>
    items?: boolean | PeminjamanP$itemsArgs<ExtArgs>
    lokasi?: boolean | PeminjamanP$lokasiArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PeminjamanPCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjamanP"]>

  export type PeminjamanPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userNik?: boolean
    barangUnitId?: boolean
    kodeLokasi?: boolean
    lokasiTambahan?: boolean
    no_hp?: boolean
    createdAt?: boolean
    Agenda?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    verifikasi?: boolean
    status?: boolean
    qrCode?: boolean
    waktuAmbil?: boolean
    waktuKembali?: boolean
    lokasi?: boolean | PeminjamanP$lokasiArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjamanP"]>

  export type PeminjamanPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userNik?: boolean
    barangUnitId?: boolean
    kodeLokasi?: boolean
    lokasiTambahan?: boolean
    no_hp?: boolean
    createdAt?: boolean
    Agenda?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    verifikasi?: boolean
    status?: boolean
    qrCode?: boolean
    waktuAmbil?: boolean
    waktuKembali?: boolean
    lokasi?: boolean | PeminjamanP$lokasiArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjamanP"]>

  export type PeminjamanPSelectScalar = {
    id?: boolean
    userNik?: boolean
    barangUnitId?: boolean
    kodeLokasi?: boolean
    lokasiTambahan?: boolean
    no_hp?: boolean
    createdAt?: boolean
    Agenda?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    verifikasi?: boolean
    status?: boolean
    qrCode?: boolean
    waktuAmbil?: boolean
    waktuKembali?: boolean
  }

  export type PeminjamanPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userNik" | "barangUnitId" | "kodeLokasi" | "lokasiTambahan" | "no_hp" | "createdAt" | "Agenda" | "waktuMulai" | "waktuSelesai" | "verifikasi" | "status" | "qrCode" | "waktuAmbil" | "waktuKembali", ExtArgs["result"]["peminjamanP"]>
  export type PeminjamanPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logScanBMN?: boolean | PeminjamanP$logScanBMNArgs<ExtArgs>
    items?: boolean | PeminjamanP$itemsArgs<ExtArgs>
    lokasi?: boolean | PeminjamanP$lokasiArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PeminjamanPCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeminjamanPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | PeminjamanP$lokasiArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PeminjamanPIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | PeminjamanP$lokasiArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PeminjamanPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeminjamanP"
    objects: {
      logScanBMN: Prisma.$LogScanBMNPayload<ExtArgs>[]
      items: Prisma.$PeminjamanItemPayload<ExtArgs>[]
      lokasi: Prisma.$DataLokasiPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userNik: string
      barangUnitId: string | null
      kodeLokasi: string | null
      lokasiTambahan: string | null
      no_hp: string
      createdAt: Date
      Agenda: string
      waktuMulai: Date
      waktuSelesai: Date
      verifikasi: $Enums.StatusBooking
      status: $Enums.StatusP
      qrCode: string | null
      waktuAmbil: Date | null
      waktuKembali: Date | null
    }, ExtArgs["result"]["peminjamanP"]>
    composites: {}
  }

  type PeminjamanPGetPayload<S extends boolean | null | undefined | PeminjamanPDefaultArgs> = $Result.GetResult<Prisma.$PeminjamanPPayload, S>

  type PeminjamanPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeminjamanPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanPCountAggregateInputType | true
    }

  export interface PeminjamanPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeminjamanP'], meta: { name: 'PeminjamanP' } }
    /**
     * Find zero or one PeminjamanP that matches the filter.
     * @param {PeminjamanPFindUniqueArgs} args - Arguments to find a PeminjamanP
     * @example
     * // Get one PeminjamanP
     * const peminjamanP = await prisma.peminjamanP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeminjamanPFindUniqueArgs>(args: SelectSubset<T, PeminjamanPFindUniqueArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeminjamanP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeminjamanPFindUniqueOrThrowArgs} args - Arguments to find a PeminjamanP
     * @example
     * // Get one PeminjamanP
     * const peminjamanP = await prisma.peminjamanP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeminjamanPFindUniqueOrThrowArgs>(args: SelectSubset<T, PeminjamanPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeminjamanP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanPFindFirstArgs} args - Arguments to find a PeminjamanP
     * @example
     * // Get one PeminjamanP
     * const peminjamanP = await prisma.peminjamanP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeminjamanPFindFirstArgs>(args?: SelectSubset<T, PeminjamanPFindFirstArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeminjamanP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanPFindFirstOrThrowArgs} args - Arguments to find a PeminjamanP
     * @example
     * // Get one PeminjamanP
     * const peminjamanP = await prisma.peminjamanP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeminjamanPFindFirstOrThrowArgs>(args?: SelectSubset<T, PeminjamanPFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeminjamanPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeminjamanPS
     * const peminjamanPS = await prisma.peminjamanP.findMany()
     * 
     * // Get first 10 PeminjamanPS
     * const peminjamanPS = await prisma.peminjamanP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peminjamanPWithIdOnly = await prisma.peminjamanP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeminjamanPFindManyArgs>(args?: SelectSubset<T, PeminjamanPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeminjamanP.
     * @param {PeminjamanPCreateArgs} args - Arguments to create a PeminjamanP.
     * @example
     * // Create one PeminjamanP
     * const PeminjamanP = await prisma.peminjamanP.create({
     *   data: {
     *     // ... data to create a PeminjamanP
     *   }
     * })
     * 
     */
    create<T extends PeminjamanPCreateArgs>(args: SelectSubset<T, PeminjamanPCreateArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeminjamanPS.
     * @param {PeminjamanPCreateManyArgs} args - Arguments to create many PeminjamanPS.
     * @example
     * // Create many PeminjamanPS
     * const peminjamanP = await prisma.peminjamanP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeminjamanPCreateManyArgs>(args?: SelectSubset<T, PeminjamanPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeminjamanPS and returns the data saved in the database.
     * @param {PeminjamanPCreateManyAndReturnArgs} args - Arguments to create many PeminjamanPS.
     * @example
     * // Create many PeminjamanPS
     * const peminjamanP = await prisma.peminjamanP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeminjamanPS and only return the `id`
     * const peminjamanPWithIdOnly = await prisma.peminjamanP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeminjamanPCreateManyAndReturnArgs>(args?: SelectSubset<T, PeminjamanPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeminjamanP.
     * @param {PeminjamanPDeleteArgs} args - Arguments to delete one PeminjamanP.
     * @example
     * // Delete one PeminjamanP
     * const PeminjamanP = await prisma.peminjamanP.delete({
     *   where: {
     *     // ... filter to delete one PeminjamanP
     *   }
     * })
     * 
     */
    delete<T extends PeminjamanPDeleteArgs>(args: SelectSubset<T, PeminjamanPDeleteArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeminjamanP.
     * @param {PeminjamanPUpdateArgs} args - Arguments to update one PeminjamanP.
     * @example
     * // Update one PeminjamanP
     * const peminjamanP = await prisma.peminjamanP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeminjamanPUpdateArgs>(args: SelectSubset<T, PeminjamanPUpdateArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeminjamanPS.
     * @param {PeminjamanPDeleteManyArgs} args - Arguments to filter PeminjamanPS to delete.
     * @example
     * // Delete a few PeminjamanPS
     * const { count } = await prisma.peminjamanP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeminjamanPDeleteManyArgs>(args?: SelectSubset<T, PeminjamanPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeminjamanPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeminjamanPS
     * const peminjamanP = await prisma.peminjamanP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeminjamanPUpdateManyArgs>(args: SelectSubset<T, PeminjamanPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeminjamanPS and returns the data updated in the database.
     * @param {PeminjamanPUpdateManyAndReturnArgs} args - Arguments to update many PeminjamanPS.
     * @example
     * // Update many PeminjamanPS
     * const peminjamanP = await prisma.peminjamanP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeminjamanPS and only return the `id`
     * const peminjamanPWithIdOnly = await prisma.peminjamanP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeminjamanPUpdateManyAndReturnArgs>(args: SelectSubset<T, PeminjamanPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeminjamanP.
     * @param {PeminjamanPUpsertArgs} args - Arguments to update or create a PeminjamanP.
     * @example
     * // Update or create a PeminjamanP
     * const peminjamanP = await prisma.peminjamanP.upsert({
     *   create: {
     *     // ... data to create a PeminjamanP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeminjamanP we want to update
     *   }
     * })
     */
    upsert<T extends PeminjamanPUpsertArgs>(args: SelectSubset<T, PeminjamanPUpsertArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeminjamanPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanPCountArgs} args - Arguments to filter PeminjamanPS to count.
     * @example
     * // Count the number of PeminjamanPS
     * const count = await prisma.peminjamanP.count({
     *   where: {
     *     // ... the filter for the PeminjamanPS we want to count
     *   }
     * })
    **/
    count<T extends PeminjamanPCountArgs>(
      args?: Subset<T, PeminjamanPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeminjamanP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanPAggregateArgs>(args: Subset<T, PeminjamanPAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanPAggregateType<T>>

    /**
     * Group by PeminjamanP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanPGroupByArgs} args - Group by arguments.
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
      T extends PeminjamanPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeminjamanPGroupByArgs['orderBy'] }
        : { orderBy?: PeminjamanPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeminjamanPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeminjamanP model
   */
  readonly fields: PeminjamanPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeminjamanP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeminjamanPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logScanBMN<T extends PeminjamanP$logScanBMNArgs<ExtArgs> = {}>(args?: Subset<T, PeminjamanP$logScanBMNArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends PeminjamanP$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PeminjamanP$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lokasi<T extends PeminjamanP$lokasiArgs<ExtArgs> = {}>(args?: Subset<T, PeminjamanP$lokasiArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeminjamanP model
   */
  interface PeminjamanPFieldRefs {
    readonly id: FieldRef<"PeminjamanP", 'Int'>
    readonly userNik: FieldRef<"PeminjamanP", 'String'>
    readonly barangUnitId: FieldRef<"PeminjamanP", 'String'>
    readonly kodeLokasi: FieldRef<"PeminjamanP", 'String'>
    readonly lokasiTambahan: FieldRef<"PeminjamanP", 'String'>
    readonly no_hp: FieldRef<"PeminjamanP", 'String'>
    readonly createdAt: FieldRef<"PeminjamanP", 'DateTime'>
    readonly Agenda: FieldRef<"PeminjamanP", 'String'>
    readonly waktuMulai: FieldRef<"PeminjamanP", 'DateTime'>
    readonly waktuSelesai: FieldRef<"PeminjamanP", 'DateTime'>
    readonly verifikasi: FieldRef<"PeminjamanP", 'StatusBooking'>
    readonly status: FieldRef<"PeminjamanP", 'StatusP'>
    readonly qrCode: FieldRef<"PeminjamanP", 'String'>
    readonly waktuAmbil: FieldRef<"PeminjamanP", 'DateTime'>
    readonly waktuKembali: FieldRef<"PeminjamanP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeminjamanP findUnique
   */
  export type PeminjamanPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanP to fetch.
     */
    where: PeminjamanPWhereUniqueInput
  }

  /**
   * PeminjamanP findUniqueOrThrow
   */
  export type PeminjamanPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanP to fetch.
     */
    where: PeminjamanPWhereUniqueInput
  }

  /**
   * PeminjamanP findFirst
   */
  export type PeminjamanPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanP to fetch.
     */
    where?: PeminjamanPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanPS to fetch.
     */
    orderBy?: PeminjamanPOrderByWithRelationInput | PeminjamanPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeminjamanPS.
     */
    cursor?: PeminjamanPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeminjamanPS.
     */
    distinct?: PeminjamanPScalarFieldEnum | PeminjamanPScalarFieldEnum[]
  }

  /**
   * PeminjamanP findFirstOrThrow
   */
  export type PeminjamanPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanP to fetch.
     */
    where?: PeminjamanPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanPS to fetch.
     */
    orderBy?: PeminjamanPOrderByWithRelationInput | PeminjamanPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeminjamanPS.
     */
    cursor?: PeminjamanPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeminjamanPS.
     */
    distinct?: PeminjamanPScalarFieldEnum | PeminjamanPScalarFieldEnum[]
  }

  /**
   * PeminjamanP findMany
   */
  export type PeminjamanPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanPS to fetch.
     */
    where?: PeminjamanPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanPS to fetch.
     */
    orderBy?: PeminjamanPOrderByWithRelationInput | PeminjamanPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeminjamanPS.
     */
    cursor?: PeminjamanPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanPS.
     */
    skip?: number
    distinct?: PeminjamanPScalarFieldEnum | PeminjamanPScalarFieldEnum[]
  }

  /**
   * PeminjamanP create
   */
  export type PeminjamanPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * The data needed to create a PeminjamanP.
     */
    data: XOR<PeminjamanPCreateInput, PeminjamanPUncheckedCreateInput>
  }

  /**
   * PeminjamanP createMany
   */
  export type PeminjamanPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeminjamanPS.
     */
    data: PeminjamanPCreateManyInput | PeminjamanPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeminjamanP createManyAndReturn
   */
  export type PeminjamanPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * The data used to create many PeminjamanPS.
     */
    data: PeminjamanPCreateManyInput | PeminjamanPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeminjamanP update
   */
  export type PeminjamanPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * The data needed to update a PeminjamanP.
     */
    data: XOR<PeminjamanPUpdateInput, PeminjamanPUncheckedUpdateInput>
    /**
     * Choose, which PeminjamanP to update.
     */
    where: PeminjamanPWhereUniqueInput
  }

  /**
   * PeminjamanP updateMany
   */
  export type PeminjamanPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeminjamanPS.
     */
    data: XOR<PeminjamanPUpdateManyMutationInput, PeminjamanPUncheckedUpdateManyInput>
    /**
     * Filter which PeminjamanPS to update
     */
    where?: PeminjamanPWhereInput
    /**
     * Limit how many PeminjamanPS to update.
     */
    limit?: number
  }

  /**
   * PeminjamanP updateManyAndReturn
   */
  export type PeminjamanPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * The data used to update PeminjamanPS.
     */
    data: XOR<PeminjamanPUpdateManyMutationInput, PeminjamanPUncheckedUpdateManyInput>
    /**
     * Filter which PeminjamanPS to update
     */
    where?: PeminjamanPWhereInput
    /**
     * Limit how many PeminjamanPS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeminjamanP upsert
   */
  export type PeminjamanPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * The filter to search for the PeminjamanP to update in case it exists.
     */
    where: PeminjamanPWhereUniqueInput
    /**
     * In case the PeminjamanP found by the `where` argument doesn't exist, create a new PeminjamanP with this data.
     */
    create: XOR<PeminjamanPCreateInput, PeminjamanPUncheckedCreateInput>
    /**
     * In case the PeminjamanP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeminjamanPUpdateInput, PeminjamanPUncheckedUpdateInput>
  }

  /**
   * PeminjamanP delete
   */
  export type PeminjamanPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
    /**
     * Filter which PeminjamanP to delete.
     */
    where: PeminjamanPWhereUniqueInput
  }

  /**
   * PeminjamanP deleteMany
   */
  export type PeminjamanPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeminjamanPS to delete
     */
    where?: PeminjamanPWhereInput
    /**
     * Limit how many PeminjamanPS to delete.
     */
    limit?: number
  }

  /**
   * PeminjamanP.logScanBMN
   */
  export type PeminjamanP$logScanBMNArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    where?: LogScanBMNWhereInput
    orderBy?: LogScanBMNOrderByWithRelationInput | LogScanBMNOrderByWithRelationInput[]
    cursor?: LogScanBMNWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScanBMNScalarFieldEnum | LogScanBMNScalarFieldEnum[]
  }

  /**
   * PeminjamanP.items
   */
  export type PeminjamanP$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    where?: PeminjamanItemWhereInput
    orderBy?: PeminjamanItemOrderByWithRelationInput | PeminjamanItemOrderByWithRelationInput[]
    cursor?: PeminjamanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanItemScalarFieldEnum | PeminjamanItemScalarFieldEnum[]
  }

  /**
   * PeminjamanP.lokasi
   */
  export type PeminjamanP$lokasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    where?: DataLokasiWhereInput
  }

  /**
   * PeminjamanP without action
   */
  export type PeminjamanPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanP
     */
    select?: PeminjamanPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanP
     */
    omit?: PeminjamanPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanPInclude<ExtArgs> | null
  }


  /**
   * Model LogScanBMN
   */

  export type AggregateLogScanBMN = {
    _count: LogScanBMNCountAggregateOutputType | null
    _avg: LogScanBMNAvgAggregateOutputType | null
    _sum: LogScanBMNSumAggregateOutputType | null
    _min: LogScanBMNMinAggregateOutputType | null
    _max: LogScanBMNMaxAggregateOutputType | null
  }

  export type LogScanBMNAvgAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
  }

  export type LogScanBMNSumAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
  }

  export type LogScanBMNMinAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
    jenis: string | null
    waktuScan: Date | null
    petugasNik: string | null
    keterangan: string | null
  }

  export type LogScanBMNMaxAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
    jenis: string | null
    waktuScan: Date | null
    petugasNik: string | null
    keterangan: string | null
  }

  export type LogScanBMNCountAggregateOutputType = {
    id: number
    peminjamanId: number
    jenis: number
    waktuScan: number
    petugasNik: number
    keterangan: number
    _all: number
  }


  export type LogScanBMNAvgAggregateInputType = {
    id?: true
    peminjamanId?: true
  }

  export type LogScanBMNSumAggregateInputType = {
    id?: true
    peminjamanId?: true
  }

  export type LogScanBMNMinAggregateInputType = {
    id?: true
    peminjamanId?: true
    jenis?: true
    waktuScan?: true
    petugasNik?: true
    keterangan?: true
  }

  export type LogScanBMNMaxAggregateInputType = {
    id?: true
    peminjamanId?: true
    jenis?: true
    waktuScan?: true
    petugasNik?: true
    keterangan?: true
  }

  export type LogScanBMNCountAggregateInputType = {
    id?: true
    peminjamanId?: true
    jenis?: true
    waktuScan?: true
    petugasNik?: true
    keterangan?: true
    _all?: true
  }

  export type LogScanBMNAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogScanBMN to aggregate.
     */
    where?: LogScanBMNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogScanBMNS to fetch.
     */
    orderBy?: LogScanBMNOrderByWithRelationInput | LogScanBMNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogScanBMNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogScanBMNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogScanBMNS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogScanBMNS
    **/
    _count?: true | LogScanBMNCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogScanBMNAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogScanBMNSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogScanBMNMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogScanBMNMaxAggregateInputType
  }

  export type GetLogScanBMNAggregateType<T extends LogScanBMNAggregateArgs> = {
        [P in keyof T & keyof AggregateLogScanBMN]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogScanBMN[P]>
      : GetScalarType<T[P], AggregateLogScanBMN[P]>
  }




  export type LogScanBMNGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogScanBMNWhereInput
    orderBy?: LogScanBMNOrderByWithAggregationInput | LogScanBMNOrderByWithAggregationInput[]
    by: LogScanBMNScalarFieldEnum[] | LogScanBMNScalarFieldEnum
    having?: LogScanBMNScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogScanBMNCountAggregateInputType | true
    _avg?: LogScanBMNAvgAggregateInputType
    _sum?: LogScanBMNSumAggregateInputType
    _min?: LogScanBMNMinAggregateInputType
    _max?: LogScanBMNMaxAggregateInputType
  }

  export type LogScanBMNGroupByOutputType = {
    id: number
    peminjamanId: number
    jenis: string
    waktuScan: Date
    petugasNik: string
    keterangan: string | null
    _count: LogScanBMNCountAggregateOutputType | null
    _avg: LogScanBMNAvgAggregateOutputType | null
    _sum: LogScanBMNSumAggregateOutputType | null
    _min: LogScanBMNMinAggregateOutputType | null
    _max: LogScanBMNMaxAggregateOutputType | null
  }

  type GetLogScanBMNGroupByPayload<T extends LogScanBMNGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogScanBMNGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogScanBMNGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogScanBMNGroupByOutputType[P]>
            : GetScalarType<T[P], LogScanBMNGroupByOutputType[P]>
        }
      >
    >


  export type LogScanBMNSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    jenis?: boolean
    waktuScan?: boolean
    petugasNik?: boolean
    keterangan?: boolean
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logScanBMN"]>

  export type LogScanBMNSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    jenis?: boolean
    waktuScan?: boolean
    petugasNik?: boolean
    keterangan?: boolean
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logScanBMN"]>

  export type LogScanBMNSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    jenis?: boolean
    waktuScan?: boolean
    petugasNik?: boolean
    keterangan?: boolean
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logScanBMN"]>

  export type LogScanBMNSelectScalar = {
    id?: boolean
    peminjamanId?: boolean
    jenis?: boolean
    waktuScan?: boolean
    petugasNik?: boolean
    keterangan?: boolean
  }

  export type LogScanBMNOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peminjamanId" | "jenis" | "waktuScan" | "petugasNik" | "keterangan", ExtArgs["result"]["logScanBMN"]>
  export type LogScanBMNInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }
  export type LogScanBMNIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }
  export type LogScanBMNIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }

  export type $LogScanBMNPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogScanBMN"
    objects: {
      peminjaman: Prisma.$PeminjamanPPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      peminjamanId: number
      jenis: string
      waktuScan: Date
      petugasNik: string
      keterangan: string | null
    }, ExtArgs["result"]["logScanBMN"]>
    composites: {}
  }

  type LogScanBMNGetPayload<S extends boolean | null | undefined | LogScanBMNDefaultArgs> = $Result.GetResult<Prisma.$LogScanBMNPayload, S>

  type LogScanBMNCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogScanBMNFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogScanBMNCountAggregateInputType | true
    }

  export interface LogScanBMNDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogScanBMN'], meta: { name: 'LogScanBMN' } }
    /**
     * Find zero or one LogScanBMN that matches the filter.
     * @param {LogScanBMNFindUniqueArgs} args - Arguments to find a LogScanBMN
     * @example
     * // Get one LogScanBMN
     * const logScanBMN = await prisma.logScanBMN.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogScanBMNFindUniqueArgs>(args: SelectSubset<T, LogScanBMNFindUniqueArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogScanBMN that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogScanBMNFindUniqueOrThrowArgs} args - Arguments to find a LogScanBMN
     * @example
     * // Get one LogScanBMN
     * const logScanBMN = await prisma.logScanBMN.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogScanBMNFindUniqueOrThrowArgs>(args: SelectSubset<T, LogScanBMNFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogScanBMN that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogScanBMNFindFirstArgs} args - Arguments to find a LogScanBMN
     * @example
     * // Get one LogScanBMN
     * const logScanBMN = await prisma.logScanBMN.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogScanBMNFindFirstArgs>(args?: SelectSubset<T, LogScanBMNFindFirstArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogScanBMN that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogScanBMNFindFirstOrThrowArgs} args - Arguments to find a LogScanBMN
     * @example
     * // Get one LogScanBMN
     * const logScanBMN = await prisma.logScanBMN.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogScanBMNFindFirstOrThrowArgs>(args?: SelectSubset<T, LogScanBMNFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogScanBMNS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogScanBMNFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogScanBMNS
     * const logScanBMNS = await prisma.logScanBMN.findMany()
     * 
     * // Get first 10 LogScanBMNS
     * const logScanBMNS = await prisma.logScanBMN.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logScanBMNWithIdOnly = await prisma.logScanBMN.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogScanBMNFindManyArgs>(args?: SelectSubset<T, LogScanBMNFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogScanBMN.
     * @param {LogScanBMNCreateArgs} args - Arguments to create a LogScanBMN.
     * @example
     * // Create one LogScanBMN
     * const LogScanBMN = await prisma.logScanBMN.create({
     *   data: {
     *     // ... data to create a LogScanBMN
     *   }
     * })
     * 
     */
    create<T extends LogScanBMNCreateArgs>(args: SelectSubset<T, LogScanBMNCreateArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogScanBMNS.
     * @param {LogScanBMNCreateManyArgs} args - Arguments to create many LogScanBMNS.
     * @example
     * // Create many LogScanBMNS
     * const logScanBMN = await prisma.logScanBMN.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogScanBMNCreateManyArgs>(args?: SelectSubset<T, LogScanBMNCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogScanBMNS and returns the data saved in the database.
     * @param {LogScanBMNCreateManyAndReturnArgs} args - Arguments to create many LogScanBMNS.
     * @example
     * // Create many LogScanBMNS
     * const logScanBMN = await prisma.logScanBMN.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogScanBMNS and only return the `id`
     * const logScanBMNWithIdOnly = await prisma.logScanBMN.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogScanBMNCreateManyAndReturnArgs>(args?: SelectSubset<T, LogScanBMNCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogScanBMN.
     * @param {LogScanBMNDeleteArgs} args - Arguments to delete one LogScanBMN.
     * @example
     * // Delete one LogScanBMN
     * const LogScanBMN = await prisma.logScanBMN.delete({
     *   where: {
     *     // ... filter to delete one LogScanBMN
     *   }
     * })
     * 
     */
    delete<T extends LogScanBMNDeleteArgs>(args: SelectSubset<T, LogScanBMNDeleteArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogScanBMN.
     * @param {LogScanBMNUpdateArgs} args - Arguments to update one LogScanBMN.
     * @example
     * // Update one LogScanBMN
     * const logScanBMN = await prisma.logScanBMN.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogScanBMNUpdateArgs>(args: SelectSubset<T, LogScanBMNUpdateArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogScanBMNS.
     * @param {LogScanBMNDeleteManyArgs} args - Arguments to filter LogScanBMNS to delete.
     * @example
     * // Delete a few LogScanBMNS
     * const { count } = await prisma.logScanBMN.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogScanBMNDeleteManyArgs>(args?: SelectSubset<T, LogScanBMNDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogScanBMNS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogScanBMNUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogScanBMNS
     * const logScanBMN = await prisma.logScanBMN.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogScanBMNUpdateManyArgs>(args: SelectSubset<T, LogScanBMNUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogScanBMNS and returns the data updated in the database.
     * @param {LogScanBMNUpdateManyAndReturnArgs} args - Arguments to update many LogScanBMNS.
     * @example
     * // Update many LogScanBMNS
     * const logScanBMN = await prisma.logScanBMN.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogScanBMNS and only return the `id`
     * const logScanBMNWithIdOnly = await prisma.logScanBMN.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogScanBMNUpdateManyAndReturnArgs>(args: SelectSubset<T, LogScanBMNUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogScanBMN.
     * @param {LogScanBMNUpsertArgs} args - Arguments to update or create a LogScanBMN.
     * @example
     * // Update or create a LogScanBMN
     * const logScanBMN = await prisma.logScanBMN.upsert({
     *   create: {
     *     // ... data to create a LogScanBMN
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogScanBMN we want to update
     *   }
     * })
     */
    upsert<T extends LogScanBMNUpsertArgs>(args: SelectSubset<T, LogScanBMNUpsertArgs<ExtArgs>>): Prisma__LogScanBMNClient<$Result.GetResult<Prisma.$LogScanBMNPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogScanBMNS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogScanBMNCountArgs} args - Arguments to filter LogScanBMNS to count.
     * @example
     * // Count the number of LogScanBMNS
     * const count = await prisma.logScanBMN.count({
     *   where: {
     *     // ... the filter for the LogScanBMNS we want to count
     *   }
     * })
    **/
    count<T extends LogScanBMNCountArgs>(
      args?: Subset<T, LogScanBMNCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogScanBMNCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogScanBMN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogScanBMNAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogScanBMNAggregateArgs>(args: Subset<T, LogScanBMNAggregateArgs>): Prisma.PrismaPromise<GetLogScanBMNAggregateType<T>>

    /**
     * Group by LogScanBMN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogScanBMNGroupByArgs} args - Group by arguments.
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
      T extends LogScanBMNGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogScanBMNGroupByArgs['orderBy'] }
        : { orderBy?: LogScanBMNGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogScanBMNGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogScanBMNGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogScanBMN model
   */
  readonly fields: LogScanBMNFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogScanBMN.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogScanBMNClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends PeminjamanPDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeminjamanPDefaultArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogScanBMN model
   */
  interface LogScanBMNFieldRefs {
    readonly id: FieldRef<"LogScanBMN", 'Int'>
    readonly peminjamanId: FieldRef<"LogScanBMN", 'Int'>
    readonly jenis: FieldRef<"LogScanBMN", 'String'>
    readonly waktuScan: FieldRef<"LogScanBMN", 'DateTime'>
    readonly petugasNik: FieldRef<"LogScanBMN", 'String'>
    readonly keterangan: FieldRef<"LogScanBMN", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LogScanBMN findUnique
   */
  export type LogScanBMNFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * Filter, which LogScanBMN to fetch.
     */
    where: LogScanBMNWhereUniqueInput
  }

  /**
   * LogScanBMN findUniqueOrThrow
   */
  export type LogScanBMNFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * Filter, which LogScanBMN to fetch.
     */
    where: LogScanBMNWhereUniqueInput
  }

  /**
   * LogScanBMN findFirst
   */
  export type LogScanBMNFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * Filter, which LogScanBMN to fetch.
     */
    where?: LogScanBMNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogScanBMNS to fetch.
     */
    orderBy?: LogScanBMNOrderByWithRelationInput | LogScanBMNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogScanBMNS.
     */
    cursor?: LogScanBMNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogScanBMNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogScanBMNS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogScanBMNS.
     */
    distinct?: LogScanBMNScalarFieldEnum | LogScanBMNScalarFieldEnum[]
  }

  /**
   * LogScanBMN findFirstOrThrow
   */
  export type LogScanBMNFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * Filter, which LogScanBMN to fetch.
     */
    where?: LogScanBMNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogScanBMNS to fetch.
     */
    orderBy?: LogScanBMNOrderByWithRelationInput | LogScanBMNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogScanBMNS.
     */
    cursor?: LogScanBMNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogScanBMNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogScanBMNS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogScanBMNS.
     */
    distinct?: LogScanBMNScalarFieldEnum | LogScanBMNScalarFieldEnum[]
  }

  /**
   * LogScanBMN findMany
   */
  export type LogScanBMNFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * Filter, which LogScanBMNS to fetch.
     */
    where?: LogScanBMNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogScanBMNS to fetch.
     */
    orderBy?: LogScanBMNOrderByWithRelationInput | LogScanBMNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogScanBMNS.
     */
    cursor?: LogScanBMNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogScanBMNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogScanBMNS.
     */
    skip?: number
    distinct?: LogScanBMNScalarFieldEnum | LogScanBMNScalarFieldEnum[]
  }

  /**
   * LogScanBMN create
   */
  export type LogScanBMNCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * The data needed to create a LogScanBMN.
     */
    data: XOR<LogScanBMNCreateInput, LogScanBMNUncheckedCreateInput>
  }

  /**
   * LogScanBMN createMany
   */
  export type LogScanBMNCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogScanBMNS.
     */
    data: LogScanBMNCreateManyInput | LogScanBMNCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogScanBMN createManyAndReturn
   */
  export type LogScanBMNCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * The data used to create many LogScanBMNS.
     */
    data: LogScanBMNCreateManyInput | LogScanBMNCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogScanBMN update
   */
  export type LogScanBMNUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * The data needed to update a LogScanBMN.
     */
    data: XOR<LogScanBMNUpdateInput, LogScanBMNUncheckedUpdateInput>
    /**
     * Choose, which LogScanBMN to update.
     */
    where: LogScanBMNWhereUniqueInput
  }

  /**
   * LogScanBMN updateMany
   */
  export type LogScanBMNUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogScanBMNS.
     */
    data: XOR<LogScanBMNUpdateManyMutationInput, LogScanBMNUncheckedUpdateManyInput>
    /**
     * Filter which LogScanBMNS to update
     */
    where?: LogScanBMNWhereInput
    /**
     * Limit how many LogScanBMNS to update.
     */
    limit?: number
  }

  /**
   * LogScanBMN updateManyAndReturn
   */
  export type LogScanBMNUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * The data used to update LogScanBMNS.
     */
    data: XOR<LogScanBMNUpdateManyMutationInput, LogScanBMNUncheckedUpdateManyInput>
    /**
     * Filter which LogScanBMNS to update
     */
    where?: LogScanBMNWhereInput
    /**
     * Limit how many LogScanBMNS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogScanBMN upsert
   */
  export type LogScanBMNUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * The filter to search for the LogScanBMN to update in case it exists.
     */
    where: LogScanBMNWhereUniqueInput
    /**
     * In case the LogScanBMN found by the `where` argument doesn't exist, create a new LogScanBMN with this data.
     */
    create: XOR<LogScanBMNCreateInput, LogScanBMNUncheckedCreateInput>
    /**
     * In case the LogScanBMN was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogScanBMNUpdateInput, LogScanBMNUncheckedUpdateInput>
  }

  /**
   * LogScanBMN delete
   */
  export type LogScanBMNDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
    /**
     * Filter which LogScanBMN to delete.
     */
    where: LogScanBMNWhereUniqueInput
  }

  /**
   * LogScanBMN deleteMany
   */
  export type LogScanBMNDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogScanBMNS to delete
     */
    where?: LogScanBMNWhereInput
    /**
     * Limit how many LogScanBMNS to delete.
     */
    limit?: number
  }

  /**
   * LogScanBMN without action
   */
  export type LogScanBMNDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogScanBMN
     */
    select?: LogScanBMNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogScanBMN
     */
    omit?: LogScanBMNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogScanBMNInclude<ExtArgs> | null
  }


  /**
   * Model PeminjamanItem
   */

  export type AggregatePeminjamanItem = {
    _count: PeminjamanItemCountAggregateOutputType | null
    _avg: PeminjamanItemAvgAggregateOutputType | null
    _sum: PeminjamanItemSumAggregateOutputType | null
    _min: PeminjamanItemMinAggregateOutputType | null
    _max: PeminjamanItemMaxAggregateOutputType | null
  }

  export type PeminjamanItemAvgAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
  }

  export type PeminjamanItemSumAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
  }

  export type PeminjamanItemMinAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
    nupBarang: string | null
  }

  export type PeminjamanItemMaxAggregateOutputType = {
    id: number | null
    peminjamanId: number | null
    nupBarang: string | null
  }

  export type PeminjamanItemCountAggregateOutputType = {
    id: number
    peminjamanId: number
    nupBarang: number
    _all: number
  }


  export type PeminjamanItemAvgAggregateInputType = {
    id?: true
    peminjamanId?: true
  }

  export type PeminjamanItemSumAggregateInputType = {
    id?: true
    peminjamanId?: true
  }

  export type PeminjamanItemMinAggregateInputType = {
    id?: true
    peminjamanId?: true
    nupBarang?: true
  }

  export type PeminjamanItemMaxAggregateInputType = {
    id?: true
    peminjamanId?: true
    nupBarang?: true
  }

  export type PeminjamanItemCountAggregateInputType = {
    id?: true
    peminjamanId?: true
    nupBarang?: true
    _all?: true
  }

  export type PeminjamanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeminjamanItem to aggregate.
     */
    where?: PeminjamanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanItems to fetch.
     */
    orderBy?: PeminjamanItemOrderByWithRelationInput | PeminjamanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeminjamanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeminjamanItems
    **/
    _count?: true | PeminjamanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeminjamanItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeminjamanItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanItemMaxAggregateInputType
  }

  export type GetPeminjamanItemAggregateType<T extends PeminjamanItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjamanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjamanItem[P]>
      : GetScalarType<T[P], AggregatePeminjamanItem[P]>
  }




  export type PeminjamanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanItemWhereInput
    orderBy?: PeminjamanItemOrderByWithAggregationInput | PeminjamanItemOrderByWithAggregationInput[]
    by: PeminjamanItemScalarFieldEnum[] | PeminjamanItemScalarFieldEnum
    having?: PeminjamanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanItemCountAggregateInputType | true
    _avg?: PeminjamanItemAvgAggregateInputType
    _sum?: PeminjamanItemSumAggregateInputType
    _min?: PeminjamanItemMinAggregateInputType
    _max?: PeminjamanItemMaxAggregateInputType
  }

  export type PeminjamanItemGroupByOutputType = {
    id: number
    peminjamanId: number
    nupBarang: string
    _count: PeminjamanItemCountAggregateOutputType | null
    _avg: PeminjamanItemAvgAggregateOutputType | null
    _sum: PeminjamanItemSumAggregateOutputType | null
    _min: PeminjamanItemMinAggregateOutputType | null
    _max: PeminjamanItemMaxAggregateOutputType | null
  }

  type GetPeminjamanItemGroupByPayload<T extends PeminjamanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanItemGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanItemGroupByOutputType[P]>
        }
      >
    >


  export type PeminjamanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    nupBarang?: boolean
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjamanItem"]>

  export type PeminjamanItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    nupBarang?: boolean
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjamanItem"]>

  export type PeminjamanItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peminjamanId?: boolean
    nupBarang?: boolean
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjamanItem"]>

  export type PeminjamanItemSelectScalar = {
    id?: boolean
    peminjamanId?: boolean
    nupBarang?: boolean
  }

  export type PeminjamanItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peminjamanId" | "nupBarang", ExtArgs["result"]["peminjamanItem"]>
  export type PeminjamanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }
  export type PeminjamanItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }
  export type PeminjamanItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
    peminjaman?: boolean | PeminjamanPDefaultArgs<ExtArgs>
  }

  export type $PeminjamanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeminjamanItem"
    objects: {
      barangUnit: Prisma.$BarangUnitPayload<ExtArgs>
      peminjaman: Prisma.$PeminjamanPPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      peminjamanId: number
      nupBarang: string
    }, ExtArgs["result"]["peminjamanItem"]>
    composites: {}
  }

  type PeminjamanItemGetPayload<S extends boolean | null | undefined | PeminjamanItemDefaultArgs> = $Result.GetResult<Prisma.$PeminjamanItemPayload, S>

  type PeminjamanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeminjamanItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanItemCountAggregateInputType | true
    }

  export interface PeminjamanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeminjamanItem'], meta: { name: 'PeminjamanItem' } }
    /**
     * Find zero or one PeminjamanItem that matches the filter.
     * @param {PeminjamanItemFindUniqueArgs} args - Arguments to find a PeminjamanItem
     * @example
     * // Get one PeminjamanItem
     * const peminjamanItem = await prisma.peminjamanItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeminjamanItemFindUniqueArgs>(args: SelectSubset<T, PeminjamanItemFindUniqueArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeminjamanItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeminjamanItemFindUniqueOrThrowArgs} args - Arguments to find a PeminjamanItem
     * @example
     * // Get one PeminjamanItem
     * const peminjamanItem = await prisma.peminjamanItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeminjamanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PeminjamanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeminjamanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanItemFindFirstArgs} args - Arguments to find a PeminjamanItem
     * @example
     * // Get one PeminjamanItem
     * const peminjamanItem = await prisma.peminjamanItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeminjamanItemFindFirstArgs>(args?: SelectSubset<T, PeminjamanItemFindFirstArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeminjamanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanItemFindFirstOrThrowArgs} args - Arguments to find a PeminjamanItem
     * @example
     * // Get one PeminjamanItem
     * const peminjamanItem = await prisma.peminjamanItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeminjamanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PeminjamanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeminjamanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeminjamanItems
     * const peminjamanItems = await prisma.peminjamanItem.findMany()
     * 
     * // Get first 10 PeminjamanItems
     * const peminjamanItems = await prisma.peminjamanItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peminjamanItemWithIdOnly = await prisma.peminjamanItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeminjamanItemFindManyArgs>(args?: SelectSubset<T, PeminjamanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeminjamanItem.
     * @param {PeminjamanItemCreateArgs} args - Arguments to create a PeminjamanItem.
     * @example
     * // Create one PeminjamanItem
     * const PeminjamanItem = await prisma.peminjamanItem.create({
     *   data: {
     *     // ... data to create a PeminjamanItem
     *   }
     * })
     * 
     */
    create<T extends PeminjamanItemCreateArgs>(args: SelectSubset<T, PeminjamanItemCreateArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeminjamanItems.
     * @param {PeminjamanItemCreateManyArgs} args - Arguments to create many PeminjamanItems.
     * @example
     * // Create many PeminjamanItems
     * const peminjamanItem = await prisma.peminjamanItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeminjamanItemCreateManyArgs>(args?: SelectSubset<T, PeminjamanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeminjamanItems and returns the data saved in the database.
     * @param {PeminjamanItemCreateManyAndReturnArgs} args - Arguments to create many PeminjamanItems.
     * @example
     * // Create many PeminjamanItems
     * const peminjamanItem = await prisma.peminjamanItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeminjamanItems and only return the `id`
     * const peminjamanItemWithIdOnly = await prisma.peminjamanItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeminjamanItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PeminjamanItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeminjamanItem.
     * @param {PeminjamanItemDeleteArgs} args - Arguments to delete one PeminjamanItem.
     * @example
     * // Delete one PeminjamanItem
     * const PeminjamanItem = await prisma.peminjamanItem.delete({
     *   where: {
     *     // ... filter to delete one PeminjamanItem
     *   }
     * })
     * 
     */
    delete<T extends PeminjamanItemDeleteArgs>(args: SelectSubset<T, PeminjamanItemDeleteArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeminjamanItem.
     * @param {PeminjamanItemUpdateArgs} args - Arguments to update one PeminjamanItem.
     * @example
     * // Update one PeminjamanItem
     * const peminjamanItem = await prisma.peminjamanItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeminjamanItemUpdateArgs>(args: SelectSubset<T, PeminjamanItemUpdateArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeminjamanItems.
     * @param {PeminjamanItemDeleteManyArgs} args - Arguments to filter PeminjamanItems to delete.
     * @example
     * // Delete a few PeminjamanItems
     * const { count } = await prisma.peminjamanItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeminjamanItemDeleteManyArgs>(args?: SelectSubset<T, PeminjamanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeminjamanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeminjamanItems
     * const peminjamanItem = await prisma.peminjamanItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeminjamanItemUpdateManyArgs>(args: SelectSubset<T, PeminjamanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeminjamanItems and returns the data updated in the database.
     * @param {PeminjamanItemUpdateManyAndReturnArgs} args - Arguments to update many PeminjamanItems.
     * @example
     * // Update many PeminjamanItems
     * const peminjamanItem = await prisma.peminjamanItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeminjamanItems and only return the `id`
     * const peminjamanItemWithIdOnly = await prisma.peminjamanItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeminjamanItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PeminjamanItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeminjamanItem.
     * @param {PeminjamanItemUpsertArgs} args - Arguments to update or create a PeminjamanItem.
     * @example
     * // Update or create a PeminjamanItem
     * const peminjamanItem = await prisma.peminjamanItem.upsert({
     *   create: {
     *     // ... data to create a PeminjamanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeminjamanItem we want to update
     *   }
     * })
     */
    upsert<T extends PeminjamanItemUpsertArgs>(args: SelectSubset<T, PeminjamanItemUpsertArgs<ExtArgs>>): Prisma__PeminjamanItemClient<$Result.GetResult<Prisma.$PeminjamanItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeminjamanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanItemCountArgs} args - Arguments to filter PeminjamanItems to count.
     * @example
     * // Count the number of PeminjamanItems
     * const count = await prisma.peminjamanItem.count({
     *   where: {
     *     // ... the filter for the PeminjamanItems we want to count
     *   }
     * })
    **/
    count<T extends PeminjamanItemCountArgs>(
      args?: Subset<T, PeminjamanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeminjamanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanItemAggregateArgs>(args: Subset<T, PeminjamanItemAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanItemAggregateType<T>>

    /**
     * Group by PeminjamanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanItemGroupByArgs} args - Group by arguments.
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
      T extends PeminjamanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeminjamanItemGroupByArgs['orderBy'] }
        : { orderBy?: PeminjamanItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeminjamanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeminjamanItem model
   */
  readonly fields: PeminjamanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeminjamanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeminjamanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barangUnit<T extends BarangUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangUnitDefaultArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peminjaman<T extends PeminjamanPDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeminjamanPDefaultArgs<ExtArgs>>): Prisma__PeminjamanPClient<$Result.GetResult<Prisma.$PeminjamanPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeminjamanItem model
   */
  interface PeminjamanItemFieldRefs {
    readonly id: FieldRef<"PeminjamanItem", 'Int'>
    readonly peminjamanId: FieldRef<"PeminjamanItem", 'Int'>
    readonly nupBarang: FieldRef<"PeminjamanItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PeminjamanItem findUnique
   */
  export type PeminjamanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanItem to fetch.
     */
    where: PeminjamanItemWhereUniqueInput
  }

  /**
   * PeminjamanItem findUniqueOrThrow
   */
  export type PeminjamanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanItem to fetch.
     */
    where: PeminjamanItemWhereUniqueInput
  }

  /**
   * PeminjamanItem findFirst
   */
  export type PeminjamanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanItem to fetch.
     */
    where?: PeminjamanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanItems to fetch.
     */
    orderBy?: PeminjamanItemOrderByWithRelationInput | PeminjamanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeminjamanItems.
     */
    cursor?: PeminjamanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeminjamanItems.
     */
    distinct?: PeminjamanItemScalarFieldEnum | PeminjamanItemScalarFieldEnum[]
  }

  /**
   * PeminjamanItem findFirstOrThrow
   */
  export type PeminjamanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanItem to fetch.
     */
    where?: PeminjamanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanItems to fetch.
     */
    orderBy?: PeminjamanItemOrderByWithRelationInput | PeminjamanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeminjamanItems.
     */
    cursor?: PeminjamanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeminjamanItems.
     */
    distinct?: PeminjamanItemScalarFieldEnum | PeminjamanItemScalarFieldEnum[]
  }

  /**
   * PeminjamanItem findMany
   */
  export type PeminjamanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * Filter, which PeminjamanItems to fetch.
     */
    where?: PeminjamanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeminjamanItems to fetch.
     */
    orderBy?: PeminjamanItemOrderByWithRelationInput | PeminjamanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeminjamanItems.
     */
    cursor?: PeminjamanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeminjamanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeminjamanItems.
     */
    skip?: number
    distinct?: PeminjamanItemScalarFieldEnum | PeminjamanItemScalarFieldEnum[]
  }

  /**
   * PeminjamanItem create
   */
  export type PeminjamanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PeminjamanItem.
     */
    data: XOR<PeminjamanItemCreateInput, PeminjamanItemUncheckedCreateInput>
  }

  /**
   * PeminjamanItem createMany
   */
  export type PeminjamanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeminjamanItems.
     */
    data: PeminjamanItemCreateManyInput | PeminjamanItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeminjamanItem createManyAndReturn
   */
  export type PeminjamanItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * The data used to create many PeminjamanItems.
     */
    data: PeminjamanItemCreateManyInput | PeminjamanItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeminjamanItem update
   */
  export type PeminjamanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PeminjamanItem.
     */
    data: XOR<PeminjamanItemUpdateInput, PeminjamanItemUncheckedUpdateInput>
    /**
     * Choose, which PeminjamanItem to update.
     */
    where: PeminjamanItemWhereUniqueInput
  }

  /**
   * PeminjamanItem updateMany
   */
  export type PeminjamanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeminjamanItems.
     */
    data: XOR<PeminjamanItemUpdateManyMutationInput, PeminjamanItemUncheckedUpdateManyInput>
    /**
     * Filter which PeminjamanItems to update
     */
    where?: PeminjamanItemWhereInput
    /**
     * Limit how many PeminjamanItems to update.
     */
    limit?: number
  }

  /**
   * PeminjamanItem updateManyAndReturn
   */
  export type PeminjamanItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * The data used to update PeminjamanItems.
     */
    data: XOR<PeminjamanItemUpdateManyMutationInput, PeminjamanItemUncheckedUpdateManyInput>
    /**
     * Filter which PeminjamanItems to update
     */
    where?: PeminjamanItemWhereInput
    /**
     * Limit how many PeminjamanItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeminjamanItem upsert
   */
  export type PeminjamanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PeminjamanItem to update in case it exists.
     */
    where: PeminjamanItemWhereUniqueInput
    /**
     * In case the PeminjamanItem found by the `where` argument doesn't exist, create a new PeminjamanItem with this data.
     */
    create: XOR<PeminjamanItemCreateInput, PeminjamanItemUncheckedCreateInput>
    /**
     * In case the PeminjamanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeminjamanItemUpdateInput, PeminjamanItemUncheckedUpdateInput>
  }

  /**
   * PeminjamanItem delete
   */
  export type PeminjamanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
    /**
     * Filter which PeminjamanItem to delete.
     */
    where: PeminjamanItemWhereUniqueInput
  }

  /**
   * PeminjamanItem deleteMany
   */
  export type PeminjamanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeminjamanItems to delete
     */
    where?: PeminjamanItemWhereInput
    /**
     * Limit how many PeminjamanItems to delete.
     */
    limit?: number
  }

  /**
   * PeminjamanItem without action
   */
  export type PeminjamanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamanItem
     */
    select?: PeminjamanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeminjamanItem
     */
    omit?: PeminjamanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanItemInclude<ExtArgs> | null
  }


  /**
   * Model Monitoring
   */

  export type AggregateMonitoring = {
    _count: MonitoringCountAggregateOutputType | null
    _min: MonitoringMinAggregateOutputType | null
    _max: MonitoringMaxAggregateOutputType | null
  }

  export type MonitoringMinAggregateOutputType = {
    id: string | null
    nupBarang: string | null
    waktu: Date | null
    plt: string | null
    kondisiBarang: $Enums.KondisiBarangM | null
    lokasiBarang: string | null
    lokasiTambahan: string | null
    foto: string | null
    keterangan: string | null
  }

  export type MonitoringMaxAggregateOutputType = {
    id: string | null
    nupBarang: string | null
    waktu: Date | null
    plt: string | null
    kondisiBarang: $Enums.KondisiBarangM | null
    lokasiBarang: string | null
    lokasiTambahan: string | null
    foto: string | null
    keterangan: string | null
  }

  export type MonitoringCountAggregateOutputType = {
    id: number
    nupBarang: number
    waktu: number
    plt: number
    kondisiBarang: number
    lokasiBarang: number
    lokasiTambahan: number
    foto: number
    keterangan: number
    _all: number
  }


  export type MonitoringMinAggregateInputType = {
    id?: true
    nupBarang?: true
    waktu?: true
    plt?: true
    kondisiBarang?: true
    lokasiBarang?: true
    lokasiTambahan?: true
    foto?: true
    keterangan?: true
  }

  export type MonitoringMaxAggregateInputType = {
    id?: true
    nupBarang?: true
    waktu?: true
    plt?: true
    kondisiBarang?: true
    lokasiBarang?: true
    lokasiTambahan?: true
    foto?: true
    keterangan?: true
  }

  export type MonitoringCountAggregateInputType = {
    id?: true
    nupBarang?: true
    waktu?: true
    plt?: true
    kondisiBarang?: true
    lokasiBarang?: true
    lokasiTambahan?: true
    foto?: true
    keterangan?: true
    _all?: true
  }

  export type MonitoringAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitoring to aggregate.
     */
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     */
    orderBy?: MonitoringOrderByWithRelationInput | MonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monitorings
    **/
    _count?: true | MonitoringCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringMaxAggregateInputType
  }

  export type GetMonitoringAggregateType<T extends MonitoringAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoring]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoring[P]>
      : GetScalarType<T[P], AggregateMonitoring[P]>
  }




  export type MonitoringGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringWhereInput
    orderBy?: MonitoringOrderByWithAggregationInput | MonitoringOrderByWithAggregationInput[]
    by: MonitoringScalarFieldEnum[] | MonitoringScalarFieldEnum
    having?: MonitoringScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitoringCountAggregateInputType | true
    _min?: MonitoringMinAggregateInputType
    _max?: MonitoringMaxAggregateInputType
  }

  export type MonitoringGroupByOutputType = {
    id: string
    nupBarang: string
    waktu: Date
    plt: string
    kondisiBarang: $Enums.KondisiBarangM
    lokasiBarang: string | null
    lokasiTambahan: string | null
    foto: string
    keterangan: string | null
    _count: MonitoringCountAggregateOutputType | null
    _min: MonitoringMinAggregateOutputType | null
    _max: MonitoringMaxAggregateOutputType | null
  }

  type GetMonitoringGroupByPayload<T extends MonitoringGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitoringGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitoringGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitoringGroupByOutputType[P]>
            : GetScalarType<T[P], MonitoringGroupByOutputType[P]>
        }
      >
    >


  export type MonitoringSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nupBarang?: boolean
    waktu?: boolean
    plt?: boolean
    kondisiBarang?: boolean
    lokasiBarang?: boolean
    lokasiTambahan?: boolean
    foto?: boolean
    keterangan?: boolean
    dataLokasi?: boolean | Monitoring$dataLokasiArgs<ExtArgs>
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoring"]>

  export type MonitoringSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nupBarang?: boolean
    waktu?: boolean
    plt?: boolean
    kondisiBarang?: boolean
    lokasiBarang?: boolean
    lokasiTambahan?: boolean
    foto?: boolean
    keterangan?: boolean
    dataLokasi?: boolean | Monitoring$dataLokasiArgs<ExtArgs>
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoring"]>

  export type MonitoringSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nupBarang?: boolean
    waktu?: boolean
    plt?: boolean
    kondisiBarang?: boolean
    lokasiBarang?: boolean
    lokasiTambahan?: boolean
    foto?: boolean
    keterangan?: boolean
    dataLokasi?: boolean | Monitoring$dataLokasiArgs<ExtArgs>
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoring"]>

  export type MonitoringSelectScalar = {
    id?: boolean
    nupBarang?: boolean
    waktu?: boolean
    plt?: boolean
    kondisiBarang?: boolean
    lokasiBarang?: boolean
    lokasiTambahan?: boolean
    foto?: boolean
    keterangan?: boolean
  }

  export type MonitoringOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nupBarang" | "waktu" | "plt" | "kondisiBarang" | "lokasiBarang" | "lokasiTambahan" | "foto" | "keterangan", ExtArgs["result"]["monitoring"]>
  export type MonitoringInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataLokasi?: boolean | Monitoring$dataLokasiArgs<ExtArgs>
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
  }
  export type MonitoringIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataLokasi?: boolean | Monitoring$dataLokasiArgs<ExtArgs>
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
  }
  export type MonitoringIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataLokasi?: boolean | Monitoring$dataLokasiArgs<ExtArgs>
    barangUnit?: boolean | BarangUnitDefaultArgs<ExtArgs>
  }

  export type $MonitoringPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monitoring"
    objects: {
      dataLokasi: Prisma.$DataLokasiPayload<ExtArgs> | null
      barangUnit: Prisma.$BarangUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nupBarang: string
      waktu: Date
      plt: string
      kondisiBarang: $Enums.KondisiBarangM
      lokasiBarang: string | null
      lokasiTambahan: string | null
      foto: string
      keterangan: string | null
    }, ExtArgs["result"]["monitoring"]>
    composites: {}
  }

  type MonitoringGetPayload<S extends boolean | null | undefined | MonitoringDefaultArgs> = $Result.GetResult<Prisma.$MonitoringPayload, S>

  type MonitoringCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonitoringFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonitoringCountAggregateInputType | true
    }

  export interface MonitoringDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monitoring'], meta: { name: 'Monitoring' } }
    /**
     * Find zero or one Monitoring that matches the filter.
     * @param {MonitoringFindUniqueArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitoringFindUniqueArgs>(args: SelectSubset<T, MonitoringFindUniqueArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monitoring that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitoringFindUniqueOrThrowArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitoringFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitoringFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitoring that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringFindFirstArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitoringFindFirstArgs>(args?: SelectSubset<T, MonitoringFindFirstArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitoring that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringFindFirstOrThrowArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitoringFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitoringFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monitorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monitorings
     * const monitorings = await prisma.monitoring.findMany()
     * 
     * // Get first 10 Monitorings
     * const monitorings = await prisma.monitoring.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoringWithIdOnly = await prisma.monitoring.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitoringFindManyArgs>(args?: SelectSubset<T, MonitoringFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monitoring.
     * @param {MonitoringCreateArgs} args - Arguments to create a Monitoring.
     * @example
     * // Create one Monitoring
     * const Monitoring = await prisma.monitoring.create({
     *   data: {
     *     // ... data to create a Monitoring
     *   }
     * })
     * 
     */
    create<T extends MonitoringCreateArgs>(args: SelectSubset<T, MonitoringCreateArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monitorings.
     * @param {MonitoringCreateManyArgs} args - Arguments to create many Monitorings.
     * @example
     * // Create many Monitorings
     * const monitoring = await prisma.monitoring.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitoringCreateManyArgs>(args?: SelectSubset<T, MonitoringCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monitorings and returns the data saved in the database.
     * @param {MonitoringCreateManyAndReturnArgs} args - Arguments to create many Monitorings.
     * @example
     * // Create many Monitorings
     * const monitoring = await prisma.monitoring.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monitorings and only return the `id`
     * const monitoringWithIdOnly = await prisma.monitoring.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitoringCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitoringCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monitoring.
     * @param {MonitoringDeleteArgs} args - Arguments to delete one Monitoring.
     * @example
     * // Delete one Monitoring
     * const Monitoring = await prisma.monitoring.delete({
     *   where: {
     *     // ... filter to delete one Monitoring
     *   }
     * })
     * 
     */
    delete<T extends MonitoringDeleteArgs>(args: SelectSubset<T, MonitoringDeleteArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monitoring.
     * @param {MonitoringUpdateArgs} args - Arguments to update one Monitoring.
     * @example
     * // Update one Monitoring
     * const monitoring = await prisma.monitoring.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitoringUpdateArgs>(args: SelectSubset<T, MonitoringUpdateArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monitorings.
     * @param {MonitoringDeleteManyArgs} args - Arguments to filter Monitorings to delete.
     * @example
     * // Delete a few Monitorings
     * const { count } = await prisma.monitoring.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitoringDeleteManyArgs>(args?: SelectSubset<T, MonitoringDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monitorings
     * const monitoring = await prisma.monitoring.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitoringUpdateManyArgs>(args: SelectSubset<T, MonitoringUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitorings and returns the data updated in the database.
     * @param {MonitoringUpdateManyAndReturnArgs} args - Arguments to update many Monitorings.
     * @example
     * // Update many Monitorings
     * const monitoring = await prisma.monitoring.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monitorings and only return the `id`
     * const monitoringWithIdOnly = await prisma.monitoring.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonitoringUpdateManyAndReturnArgs>(args: SelectSubset<T, MonitoringUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monitoring.
     * @param {MonitoringUpsertArgs} args - Arguments to update or create a Monitoring.
     * @example
     * // Update or create a Monitoring
     * const monitoring = await prisma.monitoring.upsert({
     *   create: {
     *     // ... data to create a Monitoring
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monitoring we want to update
     *   }
     * })
     */
    upsert<T extends MonitoringUpsertArgs>(args: SelectSubset<T, MonitoringUpsertArgs<ExtArgs>>): Prisma__MonitoringClient<$Result.GetResult<Prisma.$MonitoringPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monitorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringCountArgs} args - Arguments to filter Monitorings to count.
     * @example
     * // Count the number of Monitorings
     * const count = await prisma.monitoring.count({
     *   where: {
     *     // ... the filter for the Monitorings we want to count
     *   }
     * })
    **/
    count<T extends MonitoringCountArgs>(
      args?: Subset<T, MonitoringCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitoringCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monitoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonitoringAggregateArgs>(args: Subset<T, MonitoringAggregateArgs>): Prisma.PrismaPromise<GetMonitoringAggregateType<T>>

    /**
     * Group by Monitoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringGroupByArgs} args - Group by arguments.
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
      T extends MonitoringGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitoringGroupByArgs['orderBy'] }
        : { orderBy?: MonitoringGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonitoringGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monitoring model
   */
  readonly fields: MonitoringFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monitoring.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitoringClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataLokasi<T extends Monitoring$dataLokasiArgs<ExtArgs> = {}>(args?: Subset<T, Monitoring$dataLokasiArgs<ExtArgs>>): Prisma__DataLokasiClient<$Result.GetResult<Prisma.$DataLokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    barangUnit<T extends BarangUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangUnitDefaultArgs<ExtArgs>>): Prisma__BarangUnitClient<$Result.GetResult<Prisma.$BarangUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Monitoring model
   */
  interface MonitoringFieldRefs {
    readonly id: FieldRef<"Monitoring", 'String'>
    readonly nupBarang: FieldRef<"Monitoring", 'String'>
    readonly waktu: FieldRef<"Monitoring", 'DateTime'>
    readonly plt: FieldRef<"Monitoring", 'String'>
    readonly kondisiBarang: FieldRef<"Monitoring", 'KondisiBarangM'>
    readonly lokasiBarang: FieldRef<"Monitoring", 'String'>
    readonly lokasiTambahan: FieldRef<"Monitoring", 'String'>
    readonly foto: FieldRef<"Monitoring", 'String'>
    readonly keterangan: FieldRef<"Monitoring", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Monitoring findUnique
   */
  export type MonitoringFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * Filter, which Monitoring to fetch.
     */
    where: MonitoringWhereUniqueInput
  }

  /**
   * Monitoring findUniqueOrThrow
   */
  export type MonitoringFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * Filter, which Monitoring to fetch.
     */
    where: MonitoringWhereUniqueInput
  }

  /**
   * Monitoring findFirst
   */
  export type MonitoringFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * Filter, which Monitoring to fetch.
     */
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     */
    orderBy?: MonitoringOrderByWithRelationInput | MonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitorings.
     */
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitorings.
     */
    distinct?: MonitoringScalarFieldEnum | MonitoringScalarFieldEnum[]
  }

  /**
   * Monitoring findFirstOrThrow
   */
  export type MonitoringFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * Filter, which Monitoring to fetch.
     */
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     */
    orderBy?: MonitoringOrderByWithRelationInput | MonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitorings.
     */
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitorings.
     */
    distinct?: MonitoringScalarFieldEnum | MonitoringScalarFieldEnum[]
  }

  /**
   * Monitoring findMany
   */
  export type MonitoringFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * Filter, which Monitorings to fetch.
     */
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     */
    orderBy?: MonitoringOrderByWithRelationInput | MonitoringOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monitorings.
     */
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     */
    skip?: number
    distinct?: MonitoringScalarFieldEnum | MonitoringScalarFieldEnum[]
  }

  /**
   * Monitoring create
   */
  export type MonitoringCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * The data needed to create a Monitoring.
     */
    data: XOR<MonitoringCreateInput, MonitoringUncheckedCreateInput>
  }

  /**
   * Monitoring createMany
   */
  export type MonitoringCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monitorings.
     */
    data: MonitoringCreateManyInput | MonitoringCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monitoring createManyAndReturn
   */
  export type MonitoringCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * The data used to create many Monitorings.
     */
    data: MonitoringCreateManyInput | MonitoringCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monitoring update
   */
  export type MonitoringUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * The data needed to update a Monitoring.
     */
    data: XOR<MonitoringUpdateInput, MonitoringUncheckedUpdateInput>
    /**
     * Choose, which Monitoring to update.
     */
    where: MonitoringWhereUniqueInput
  }

  /**
   * Monitoring updateMany
   */
  export type MonitoringUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monitorings.
     */
    data: XOR<MonitoringUpdateManyMutationInput, MonitoringUncheckedUpdateManyInput>
    /**
     * Filter which Monitorings to update
     */
    where?: MonitoringWhereInput
    /**
     * Limit how many Monitorings to update.
     */
    limit?: number
  }

  /**
   * Monitoring updateManyAndReturn
   */
  export type MonitoringUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * The data used to update Monitorings.
     */
    data: XOR<MonitoringUpdateManyMutationInput, MonitoringUncheckedUpdateManyInput>
    /**
     * Filter which Monitorings to update
     */
    where?: MonitoringWhereInput
    /**
     * Limit how many Monitorings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monitoring upsert
   */
  export type MonitoringUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * The filter to search for the Monitoring to update in case it exists.
     */
    where: MonitoringWhereUniqueInput
    /**
     * In case the Monitoring found by the `where` argument doesn't exist, create a new Monitoring with this data.
     */
    create: XOR<MonitoringCreateInput, MonitoringUncheckedCreateInput>
    /**
     * In case the Monitoring was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitoringUpdateInput, MonitoringUncheckedUpdateInput>
  }

  /**
   * Monitoring delete
   */
  export type MonitoringDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
    /**
     * Filter which Monitoring to delete.
     */
    where: MonitoringWhereUniqueInput
  }

  /**
   * Monitoring deleteMany
   */
  export type MonitoringDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitorings to delete
     */
    where?: MonitoringWhereInput
    /**
     * Limit how many Monitorings to delete.
     */
    limit?: number
  }

  /**
   * Monitoring.dataLokasi
   */
  export type Monitoring$dataLokasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataLokasi
     */
    select?: DataLokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataLokasi
     */
    omit?: DataLokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataLokasiInclude<ExtArgs> | null
    where?: DataLokasiWhereInput
  }

  /**
   * Monitoring without action
   */
  export type MonitoringDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitoring
     */
    select?: MonitoringSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitoring
     */
    omit?: MonitoringOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    nama: 'nama',
    nik: 'nik',
    email: 'email',
    password: 'password',
    jurusan: 'jurusan',
    role: 'role',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    nomor_identitas_tunggal: 'nomor_identitas_tunggal',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DataBarangScalarFieldEnum: {
    kode_barang: 'kode_barang',
    jenis_barang: 'jenis_barang',
    merek: 'merek'
  };

  export type DataBarangScalarFieldEnum = (typeof DataBarangScalarFieldEnum)[keyof typeof DataBarangScalarFieldEnum]


  export const DataLokasiScalarFieldEnum: {
    kode_lokasi: 'kode_lokasi',
    lokasi: 'lokasi',
    jurusan: 'jurusan',
    status: 'status'
  };

  export type DataLokasiScalarFieldEnum = (typeof DataLokasiScalarFieldEnum)[keyof typeof DataLokasiScalarFieldEnum]


  export const BarangUnitScalarFieldEnum: {
    nup: 'nup',
    kodeBarang: 'kodeBarang',
    lokasi: 'lokasi',
    nikUser: 'nikUser',
    status: 'status',
    jurusan: 'jurusan',
    createdAt: 'createdAt'
  };

  export type BarangUnitScalarFieldEnum = (typeof BarangUnitScalarFieldEnum)[keyof typeof BarangUnitScalarFieldEnum]


  export const PeminjamanPScalarFieldEnum: {
    id: 'id',
    userNik: 'userNik',
    barangUnitId: 'barangUnitId',
    kodeLokasi: 'kodeLokasi',
    lokasiTambahan: 'lokasiTambahan',
    no_hp: 'no_hp',
    createdAt: 'createdAt',
    Agenda: 'Agenda',
    waktuMulai: 'waktuMulai',
    waktuSelesai: 'waktuSelesai',
    verifikasi: 'verifikasi',
    status: 'status',
    qrCode: 'qrCode',
    waktuAmbil: 'waktuAmbil',
    waktuKembali: 'waktuKembali'
  };

  export type PeminjamanPScalarFieldEnum = (typeof PeminjamanPScalarFieldEnum)[keyof typeof PeminjamanPScalarFieldEnum]


  export const LogScanBMNScalarFieldEnum: {
    id: 'id',
    peminjamanId: 'peminjamanId',
    jenis: 'jenis',
    waktuScan: 'waktuScan',
    petugasNik: 'petugasNik',
    keterangan: 'keterangan'
  };

  export type LogScanBMNScalarFieldEnum = (typeof LogScanBMNScalarFieldEnum)[keyof typeof LogScanBMNScalarFieldEnum]


  export const PeminjamanItemScalarFieldEnum: {
    id: 'id',
    peminjamanId: 'peminjamanId',
    nupBarang: 'nupBarang'
  };

  export type PeminjamanItemScalarFieldEnum = (typeof PeminjamanItemScalarFieldEnum)[keyof typeof PeminjamanItemScalarFieldEnum]


  export const MonitoringScalarFieldEnum: {
    id: 'id',
    nupBarang: 'nupBarang',
    waktu: 'waktu',
    plt: 'plt',
    kondisiBarang: 'kondisiBarang',
    lokasiBarang: 'lokasiBarang',
    lokasiTambahan: 'lokasiTambahan',
    foto: 'foto',
    keterangan: 'keterangan'
  };

  export type MonitoringScalarFieldEnum = (typeof MonitoringScalarFieldEnum)[keyof typeof MonitoringScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Jurusan'
   */
  export type EnumJurusanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jurusan'>
    


  /**
   * Reference to a field of type 'Jurusan[]'
   */
  export type ListEnumJurusanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jurusan[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusLokasi'
   */
  export type EnumStatusLokasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusLokasi'>
    


  /**
   * Reference to a field of type 'StatusLokasi[]'
   */
  export type ListEnumStatusLokasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusLokasi[]'>
    


  /**
   * Reference to a field of type 'StatusB'
   */
  export type EnumStatusBFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusB'>
    


  /**
   * Reference to a field of type 'StatusB[]'
   */
  export type ListEnumStatusBFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusB[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusBooking'
   */
  export type EnumStatusBookingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusBooking'>
    


  /**
   * Reference to a field of type 'StatusBooking[]'
   */
  export type ListEnumStatusBookingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusBooking[]'>
    


  /**
   * Reference to a field of type 'StatusP'
   */
  export type EnumStatusPFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusP'>
    


  /**
   * Reference to a field of type 'StatusP[]'
   */
  export type ListEnumStatusPFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusP[]'>
    


  /**
   * Reference to a field of type 'KondisiBarangM'
   */
  export type EnumKondisiBarangMFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KondisiBarangM'>
    


  /**
   * Reference to a field of type 'KondisiBarangM[]'
   */
  export type ListEnumKondisiBarangMFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KondisiBarangM[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    nik?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    jurusan?: EnumJurusanFilter<"User"> | $Enums.Jurusan
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    nomor_identitas_tunggal?: StringFilter<"User"> | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    barangUnit?: BarangUnitListRelationFilter
    peminjamanP?: PeminjamanPListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    nama?: SortOrder
    nik?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jurusan?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    nomor_identitas_tunggal?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    barangUnit?: BarangUnitOrderByRelationAggregateInput
    peminjamanP?: PeminjamanPOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    nik?: string
    email?: string
    nomor_identitas_tunggal?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    jurusan?: EnumJurusanFilter<"User"> | $Enums.Jurusan
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    barangUnit?: BarangUnitListRelationFilter
    peminjamanP?: PeminjamanPListRelationFilter
  }, "nik" | "email" | "nomor_identitas_tunggal">

  export type UserOrderByWithAggregationInput = {
    nama?: SortOrder
    nik?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jurusan?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    nomor_identitas_tunggal?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    nama?: StringWithAggregatesFilter<"User"> | string
    nik?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    jurusan?: EnumJurusanWithAggregatesFilter<"User"> | $Enums.Jurusan
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    nomor_identitas_tunggal?: StringWithAggregatesFilter<"User"> | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type DataBarangWhereInput = {
    AND?: DataBarangWhereInput | DataBarangWhereInput[]
    OR?: DataBarangWhereInput[]
    NOT?: DataBarangWhereInput | DataBarangWhereInput[]
    kode_barang?: StringFilter<"DataBarang"> | string
    jenis_barang?: StringFilter<"DataBarang"> | string
    merek?: StringFilter<"DataBarang"> | string
    barangUnit?: BarangUnitListRelationFilter
  }

  export type DataBarangOrderByWithRelationInput = {
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    merek?: SortOrder
    barangUnit?: BarangUnitOrderByRelationAggregateInput
  }

  export type DataBarangWhereUniqueInput = Prisma.AtLeast<{
    kode_barang?: string
    AND?: DataBarangWhereInput | DataBarangWhereInput[]
    OR?: DataBarangWhereInput[]
    NOT?: DataBarangWhereInput | DataBarangWhereInput[]
    jenis_barang?: StringFilter<"DataBarang"> | string
    merek?: StringFilter<"DataBarang"> | string
    barangUnit?: BarangUnitListRelationFilter
  }, "kode_barang">

  export type DataBarangOrderByWithAggregationInput = {
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    merek?: SortOrder
    _count?: DataBarangCountOrderByAggregateInput
    _max?: DataBarangMaxOrderByAggregateInput
    _min?: DataBarangMinOrderByAggregateInput
  }

  export type DataBarangScalarWhereWithAggregatesInput = {
    AND?: DataBarangScalarWhereWithAggregatesInput | DataBarangScalarWhereWithAggregatesInput[]
    OR?: DataBarangScalarWhereWithAggregatesInput[]
    NOT?: DataBarangScalarWhereWithAggregatesInput | DataBarangScalarWhereWithAggregatesInput[]
    kode_barang?: StringWithAggregatesFilter<"DataBarang"> | string
    jenis_barang?: StringWithAggregatesFilter<"DataBarang"> | string
    merek?: StringWithAggregatesFilter<"DataBarang"> | string
  }

  export type DataLokasiWhereInput = {
    AND?: DataLokasiWhereInput | DataLokasiWhereInput[]
    OR?: DataLokasiWhereInput[]
    NOT?: DataLokasiWhereInput | DataLokasiWhereInput[]
    kode_lokasi?: StringFilter<"DataLokasi"> | string
    lokasi?: StringFilter<"DataLokasi"> | string
    jurusan?: EnumJurusanFilter<"DataLokasi"> | $Enums.Jurusan
    status?: EnumStatusLokasiFilter<"DataLokasi"> | $Enums.StatusLokasi
    barangUnit?: BarangUnitListRelationFilter
    monitoring?: MonitoringListRelationFilter
    peminjamanP?: PeminjamanPListRelationFilter
  }

  export type DataLokasiOrderByWithRelationInput = {
    kode_lokasi?: SortOrder
    lokasi?: SortOrder
    jurusan?: SortOrder
    status?: SortOrder
    barangUnit?: BarangUnitOrderByRelationAggregateInput
    monitoring?: MonitoringOrderByRelationAggregateInput
    peminjamanP?: PeminjamanPOrderByRelationAggregateInput
  }

  export type DataLokasiWhereUniqueInput = Prisma.AtLeast<{
    kode_lokasi?: string
    AND?: DataLokasiWhereInput | DataLokasiWhereInput[]
    OR?: DataLokasiWhereInput[]
    NOT?: DataLokasiWhereInput | DataLokasiWhereInput[]
    lokasi?: StringFilter<"DataLokasi"> | string
    jurusan?: EnumJurusanFilter<"DataLokasi"> | $Enums.Jurusan
    status?: EnumStatusLokasiFilter<"DataLokasi"> | $Enums.StatusLokasi
    barangUnit?: BarangUnitListRelationFilter
    monitoring?: MonitoringListRelationFilter
    peminjamanP?: PeminjamanPListRelationFilter
  }, "kode_lokasi">

  export type DataLokasiOrderByWithAggregationInput = {
    kode_lokasi?: SortOrder
    lokasi?: SortOrder
    jurusan?: SortOrder
    status?: SortOrder
    _count?: DataLokasiCountOrderByAggregateInput
    _max?: DataLokasiMaxOrderByAggregateInput
    _min?: DataLokasiMinOrderByAggregateInput
  }

  export type DataLokasiScalarWhereWithAggregatesInput = {
    AND?: DataLokasiScalarWhereWithAggregatesInput | DataLokasiScalarWhereWithAggregatesInput[]
    OR?: DataLokasiScalarWhereWithAggregatesInput[]
    NOT?: DataLokasiScalarWhereWithAggregatesInput | DataLokasiScalarWhereWithAggregatesInput[]
    kode_lokasi?: StringWithAggregatesFilter<"DataLokasi"> | string
    lokasi?: StringWithAggregatesFilter<"DataLokasi"> | string
    jurusan?: EnumJurusanWithAggregatesFilter<"DataLokasi"> | $Enums.Jurusan
    status?: EnumStatusLokasiWithAggregatesFilter<"DataLokasi"> | $Enums.StatusLokasi
  }

  export type BarangUnitWhereInput = {
    AND?: BarangUnitWhereInput | BarangUnitWhereInput[]
    OR?: BarangUnitWhereInput[]
    NOT?: BarangUnitWhereInput | BarangUnitWhereInput[]
    nup?: StringFilter<"BarangUnit"> | string
    kodeBarang?: StringFilter<"BarangUnit"> | string
    lokasi?: StringFilter<"BarangUnit"> | string
    nikUser?: StringFilter<"BarangUnit"> | string
    status?: EnumStatusBFilter<"BarangUnit"> | $Enums.StatusB
    jurusan?: EnumJurusanFilter<"BarangUnit"> | $Enums.Jurusan
    createdAt?: DateTimeFilter<"BarangUnit"> | Date | string
    dataBarang?: XOR<DataBarangScalarRelationFilter, DataBarangWhereInput>
    dataLokasi?: XOR<DataLokasiScalarRelationFilter, DataLokasiWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    monitoring?: MonitoringListRelationFilter
    peminjamanItems?: PeminjamanItemListRelationFilter
  }

  export type BarangUnitOrderByWithRelationInput = {
    nup?: SortOrder
    kodeBarang?: SortOrder
    lokasi?: SortOrder
    nikUser?: SortOrder
    status?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
    dataBarang?: DataBarangOrderByWithRelationInput
    dataLokasi?: DataLokasiOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    monitoring?: MonitoringOrderByRelationAggregateInput
    peminjamanItems?: PeminjamanItemOrderByRelationAggregateInput
  }

  export type BarangUnitWhereUniqueInput = Prisma.AtLeast<{
    nup?: string
    AND?: BarangUnitWhereInput | BarangUnitWhereInput[]
    OR?: BarangUnitWhereInput[]
    NOT?: BarangUnitWhereInput | BarangUnitWhereInput[]
    kodeBarang?: StringFilter<"BarangUnit"> | string
    lokasi?: StringFilter<"BarangUnit"> | string
    nikUser?: StringFilter<"BarangUnit"> | string
    status?: EnumStatusBFilter<"BarangUnit"> | $Enums.StatusB
    jurusan?: EnumJurusanFilter<"BarangUnit"> | $Enums.Jurusan
    createdAt?: DateTimeFilter<"BarangUnit"> | Date | string
    dataBarang?: XOR<DataBarangScalarRelationFilter, DataBarangWhereInput>
    dataLokasi?: XOR<DataLokasiScalarRelationFilter, DataLokasiWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    monitoring?: MonitoringListRelationFilter
    peminjamanItems?: PeminjamanItemListRelationFilter
  }, "nup">

  export type BarangUnitOrderByWithAggregationInput = {
    nup?: SortOrder
    kodeBarang?: SortOrder
    lokasi?: SortOrder
    nikUser?: SortOrder
    status?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
    _count?: BarangUnitCountOrderByAggregateInput
    _max?: BarangUnitMaxOrderByAggregateInput
    _min?: BarangUnitMinOrderByAggregateInput
  }

  export type BarangUnitScalarWhereWithAggregatesInput = {
    AND?: BarangUnitScalarWhereWithAggregatesInput | BarangUnitScalarWhereWithAggregatesInput[]
    OR?: BarangUnitScalarWhereWithAggregatesInput[]
    NOT?: BarangUnitScalarWhereWithAggregatesInput | BarangUnitScalarWhereWithAggregatesInput[]
    nup?: StringWithAggregatesFilter<"BarangUnit"> | string
    kodeBarang?: StringWithAggregatesFilter<"BarangUnit"> | string
    lokasi?: StringWithAggregatesFilter<"BarangUnit"> | string
    nikUser?: StringWithAggregatesFilter<"BarangUnit"> | string
    status?: EnumStatusBWithAggregatesFilter<"BarangUnit"> | $Enums.StatusB
    jurusan?: EnumJurusanWithAggregatesFilter<"BarangUnit"> | $Enums.Jurusan
    createdAt?: DateTimeWithAggregatesFilter<"BarangUnit"> | Date | string
  }

  export type PeminjamanPWhereInput = {
    AND?: PeminjamanPWhereInput | PeminjamanPWhereInput[]
    OR?: PeminjamanPWhereInput[]
    NOT?: PeminjamanPWhereInput | PeminjamanPWhereInput[]
    id?: IntFilter<"PeminjamanP"> | number
    userNik?: StringFilter<"PeminjamanP"> | string
    barangUnitId?: StringNullableFilter<"PeminjamanP"> | string | null
    kodeLokasi?: StringNullableFilter<"PeminjamanP"> | string | null
    lokasiTambahan?: StringNullableFilter<"PeminjamanP"> | string | null
    no_hp?: StringFilter<"PeminjamanP"> | string
    createdAt?: DateTimeFilter<"PeminjamanP"> | Date | string
    Agenda?: StringFilter<"PeminjamanP"> | string
    waktuMulai?: DateTimeFilter<"PeminjamanP"> | Date | string
    waktuSelesai?: DateTimeFilter<"PeminjamanP"> | Date | string
    verifikasi?: EnumStatusBookingFilter<"PeminjamanP"> | $Enums.StatusBooking
    status?: EnumStatusPFilter<"PeminjamanP"> | $Enums.StatusP
    qrCode?: StringNullableFilter<"PeminjamanP"> | string | null
    waktuAmbil?: DateTimeNullableFilter<"PeminjamanP"> | Date | string | null
    waktuKembali?: DateTimeNullableFilter<"PeminjamanP"> | Date | string | null
    logScanBMN?: LogScanBMNListRelationFilter
    items?: PeminjamanItemListRelationFilter
    lokasi?: XOR<DataLokasiNullableScalarRelationFilter, DataLokasiWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PeminjamanPOrderByWithRelationInput = {
    id?: SortOrder
    userNik?: SortOrder
    barangUnitId?: SortOrderInput | SortOrder
    kodeLokasi?: SortOrderInput | SortOrder
    lokasiTambahan?: SortOrderInput | SortOrder
    no_hp?: SortOrder
    createdAt?: SortOrder
    Agenda?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    verifikasi?: SortOrder
    status?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    waktuAmbil?: SortOrderInput | SortOrder
    waktuKembali?: SortOrderInput | SortOrder
    logScanBMN?: LogScanBMNOrderByRelationAggregateInput
    items?: PeminjamanItemOrderByRelationAggregateInput
    lokasi?: DataLokasiOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PeminjamanPWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeminjamanPWhereInput | PeminjamanPWhereInput[]
    OR?: PeminjamanPWhereInput[]
    NOT?: PeminjamanPWhereInput | PeminjamanPWhereInput[]
    userNik?: StringFilter<"PeminjamanP"> | string
    barangUnitId?: StringNullableFilter<"PeminjamanP"> | string | null
    kodeLokasi?: StringNullableFilter<"PeminjamanP"> | string | null
    lokasiTambahan?: StringNullableFilter<"PeminjamanP"> | string | null
    no_hp?: StringFilter<"PeminjamanP"> | string
    createdAt?: DateTimeFilter<"PeminjamanP"> | Date | string
    Agenda?: StringFilter<"PeminjamanP"> | string
    waktuMulai?: DateTimeFilter<"PeminjamanP"> | Date | string
    waktuSelesai?: DateTimeFilter<"PeminjamanP"> | Date | string
    verifikasi?: EnumStatusBookingFilter<"PeminjamanP"> | $Enums.StatusBooking
    status?: EnumStatusPFilter<"PeminjamanP"> | $Enums.StatusP
    qrCode?: StringNullableFilter<"PeminjamanP"> | string | null
    waktuAmbil?: DateTimeNullableFilter<"PeminjamanP"> | Date | string | null
    waktuKembali?: DateTimeNullableFilter<"PeminjamanP"> | Date | string | null
    logScanBMN?: LogScanBMNListRelationFilter
    items?: PeminjamanItemListRelationFilter
    lokasi?: XOR<DataLokasiNullableScalarRelationFilter, DataLokasiWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PeminjamanPOrderByWithAggregationInput = {
    id?: SortOrder
    userNik?: SortOrder
    barangUnitId?: SortOrderInput | SortOrder
    kodeLokasi?: SortOrderInput | SortOrder
    lokasiTambahan?: SortOrderInput | SortOrder
    no_hp?: SortOrder
    createdAt?: SortOrder
    Agenda?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    verifikasi?: SortOrder
    status?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    waktuAmbil?: SortOrderInput | SortOrder
    waktuKembali?: SortOrderInput | SortOrder
    _count?: PeminjamanPCountOrderByAggregateInput
    _avg?: PeminjamanPAvgOrderByAggregateInput
    _max?: PeminjamanPMaxOrderByAggregateInput
    _min?: PeminjamanPMinOrderByAggregateInput
    _sum?: PeminjamanPSumOrderByAggregateInput
  }

  export type PeminjamanPScalarWhereWithAggregatesInput = {
    AND?: PeminjamanPScalarWhereWithAggregatesInput | PeminjamanPScalarWhereWithAggregatesInput[]
    OR?: PeminjamanPScalarWhereWithAggregatesInput[]
    NOT?: PeminjamanPScalarWhereWithAggregatesInput | PeminjamanPScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PeminjamanP"> | number
    userNik?: StringWithAggregatesFilter<"PeminjamanP"> | string
    barangUnitId?: StringNullableWithAggregatesFilter<"PeminjamanP"> | string | null
    kodeLokasi?: StringNullableWithAggregatesFilter<"PeminjamanP"> | string | null
    lokasiTambahan?: StringNullableWithAggregatesFilter<"PeminjamanP"> | string | null
    no_hp?: StringWithAggregatesFilter<"PeminjamanP"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PeminjamanP"> | Date | string
    Agenda?: StringWithAggregatesFilter<"PeminjamanP"> | string
    waktuMulai?: DateTimeWithAggregatesFilter<"PeminjamanP"> | Date | string
    waktuSelesai?: DateTimeWithAggregatesFilter<"PeminjamanP"> | Date | string
    verifikasi?: EnumStatusBookingWithAggregatesFilter<"PeminjamanP"> | $Enums.StatusBooking
    status?: EnumStatusPWithAggregatesFilter<"PeminjamanP"> | $Enums.StatusP
    qrCode?: StringNullableWithAggregatesFilter<"PeminjamanP"> | string | null
    waktuAmbil?: DateTimeNullableWithAggregatesFilter<"PeminjamanP"> | Date | string | null
    waktuKembali?: DateTimeNullableWithAggregatesFilter<"PeminjamanP"> | Date | string | null
  }

  export type LogScanBMNWhereInput = {
    AND?: LogScanBMNWhereInput | LogScanBMNWhereInput[]
    OR?: LogScanBMNWhereInput[]
    NOT?: LogScanBMNWhereInput | LogScanBMNWhereInput[]
    id?: IntFilter<"LogScanBMN"> | number
    peminjamanId?: IntFilter<"LogScanBMN"> | number
    jenis?: StringFilter<"LogScanBMN"> | string
    waktuScan?: DateTimeFilter<"LogScanBMN"> | Date | string
    petugasNik?: StringFilter<"LogScanBMN"> | string
    keterangan?: StringNullableFilter<"LogScanBMN"> | string | null
    peminjaman?: XOR<PeminjamanPScalarRelationFilter, PeminjamanPWhereInput>
  }

  export type LogScanBMNOrderByWithRelationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    jenis?: SortOrder
    waktuScan?: SortOrder
    petugasNik?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    peminjaman?: PeminjamanPOrderByWithRelationInput
  }

  export type LogScanBMNWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogScanBMNWhereInput | LogScanBMNWhereInput[]
    OR?: LogScanBMNWhereInput[]
    NOT?: LogScanBMNWhereInput | LogScanBMNWhereInput[]
    peminjamanId?: IntFilter<"LogScanBMN"> | number
    jenis?: StringFilter<"LogScanBMN"> | string
    waktuScan?: DateTimeFilter<"LogScanBMN"> | Date | string
    petugasNik?: StringFilter<"LogScanBMN"> | string
    keterangan?: StringNullableFilter<"LogScanBMN"> | string | null
    peminjaman?: XOR<PeminjamanPScalarRelationFilter, PeminjamanPWhereInput>
  }, "id">

  export type LogScanBMNOrderByWithAggregationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    jenis?: SortOrder
    waktuScan?: SortOrder
    petugasNik?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    _count?: LogScanBMNCountOrderByAggregateInput
    _avg?: LogScanBMNAvgOrderByAggregateInput
    _max?: LogScanBMNMaxOrderByAggregateInput
    _min?: LogScanBMNMinOrderByAggregateInput
    _sum?: LogScanBMNSumOrderByAggregateInput
  }

  export type LogScanBMNScalarWhereWithAggregatesInput = {
    AND?: LogScanBMNScalarWhereWithAggregatesInput | LogScanBMNScalarWhereWithAggregatesInput[]
    OR?: LogScanBMNScalarWhereWithAggregatesInput[]
    NOT?: LogScanBMNScalarWhereWithAggregatesInput | LogScanBMNScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogScanBMN"> | number
    peminjamanId?: IntWithAggregatesFilter<"LogScanBMN"> | number
    jenis?: StringWithAggregatesFilter<"LogScanBMN"> | string
    waktuScan?: DateTimeWithAggregatesFilter<"LogScanBMN"> | Date | string
    petugasNik?: StringWithAggregatesFilter<"LogScanBMN"> | string
    keterangan?: StringNullableWithAggregatesFilter<"LogScanBMN"> | string | null
  }

  export type PeminjamanItemWhereInput = {
    AND?: PeminjamanItemWhereInput | PeminjamanItemWhereInput[]
    OR?: PeminjamanItemWhereInput[]
    NOT?: PeminjamanItemWhereInput | PeminjamanItemWhereInput[]
    id?: IntFilter<"PeminjamanItem"> | number
    peminjamanId?: IntFilter<"PeminjamanItem"> | number
    nupBarang?: StringFilter<"PeminjamanItem"> | string
    barangUnit?: XOR<BarangUnitScalarRelationFilter, BarangUnitWhereInput>
    peminjaman?: XOR<PeminjamanPScalarRelationFilter, PeminjamanPWhereInput>
  }

  export type PeminjamanItemOrderByWithRelationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    nupBarang?: SortOrder
    barangUnit?: BarangUnitOrderByWithRelationInput
    peminjaman?: PeminjamanPOrderByWithRelationInput
  }

  export type PeminjamanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeminjamanItemWhereInput | PeminjamanItemWhereInput[]
    OR?: PeminjamanItemWhereInput[]
    NOT?: PeminjamanItemWhereInput | PeminjamanItemWhereInput[]
    peminjamanId?: IntFilter<"PeminjamanItem"> | number
    nupBarang?: StringFilter<"PeminjamanItem"> | string
    barangUnit?: XOR<BarangUnitScalarRelationFilter, BarangUnitWhereInput>
    peminjaman?: XOR<PeminjamanPScalarRelationFilter, PeminjamanPWhereInput>
  }, "id">

  export type PeminjamanItemOrderByWithAggregationInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    nupBarang?: SortOrder
    _count?: PeminjamanItemCountOrderByAggregateInput
    _avg?: PeminjamanItemAvgOrderByAggregateInput
    _max?: PeminjamanItemMaxOrderByAggregateInput
    _min?: PeminjamanItemMinOrderByAggregateInput
    _sum?: PeminjamanItemSumOrderByAggregateInput
  }

  export type PeminjamanItemScalarWhereWithAggregatesInput = {
    AND?: PeminjamanItemScalarWhereWithAggregatesInput | PeminjamanItemScalarWhereWithAggregatesInput[]
    OR?: PeminjamanItemScalarWhereWithAggregatesInput[]
    NOT?: PeminjamanItemScalarWhereWithAggregatesInput | PeminjamanItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PeminjamanItem"> | number
    peminjamanId?: IntWithAggregatesFilter<"PeminjamanItem"> | number
    nupBarang?: StringWithAggregatesFilter<"PeminjamanItem"> | string
  }

  export type MonitoringWhereInput = {
    AND?: MonitoringWhereInput | MonitoringWhereInput[]
    OR?: MonitoringWhereInput[]
    NOT?: MonitoringWhereInput | MonitoringWhereInput[]
    id?: StringFilter<"Monitoring"> | string
    nupBarang?: StringFilter<"Monitoring"> | string
    waktu?: DateTimeFilter<"Monitoring"> | Date | string
    plt?: StringFilter<"Monitoring"> | string
    kondisiBarang?: EnumKondisiBarangMFilter<"Monitoring"> | $Enums.KondisiBarangM
    lokasiBarang?: StringNullableFilter<"Monitoring"> | string | null
    lokasiTambahan?: StringNullableFilter<"Monitoring"> | string | null
    foto?: StringFilter<"Monitoring"> | string
    keterangan?: StringNullableFilter<"Monitoring"> | string | null
    dataLokasi?: XOR<DataLokasiNullableScalarRelationFilter, DataLokasiWhereInput> | null
    barangUnit?: XOR<BarangUnitScalarRelationFilter, BarangUnitWhereInput>
  }

  export type MonitoringOrderByWithRelationInput = {
    id?: SortOrder
    nupBarang?: SortOrder
    waktu?: SortOrder
    plt?: SortOrder
    kondisiBarang?: SortOrder
    lokasiBarang?: SortOrderInput | SortOrder
    lokasiTambahan?: SortOrderInput | SortOrder
    foto?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    dataLokasi?: DataLokasiOrderByWithRelationInput
    barangUnit?: BarangUnitOrderByWithRelationInput
  }

  export type MonitoringWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonitoringWhereInput | MonitoringWhereInput[]
    OR?: MonitoringWhereInput[]
    NOT?: MonitoringWhereInput | MonitoringWhereInput[]
    nupBarang?: StringFilter<"Monitoring"> | string
    waktu?: DateTimeFilter<"Monitoring"> | Date | string
    plt?: StringFilter<"Monitoring"> | string
    kondisiBarang?: EnumKondisiBarangMFilter<"Monitoring"> | $Enums.KondisiBarangM
    lokasiBarang?: StringNullableFilter<"Monitoring"> | string | null
    lokasiTambahan?: StringNullableFilter<"Monitoring"> | string | null
    foto?: StringFilter<"Monitoring"> | string
    keterangan?: StringNullableFilter<"Monitoring"> | string | null
    dataLokasi?: XOR<DataLokasiNullableScalarRelationFilter, DataLokasiWhereInput> | null
    barangUnit?: XOR<BarangUnitScalarRelationFilter, BarangUnitWhereInput>
  }, "id">

  export type MonitoringOrderByWithAggregationInput = {
    id?: SortOrder
    nupBarang?: SortOrder
    waktu?: SortOrder
    plt?: SortOrder
    kondisiBarang?: SortOrder
    lokasiBarang?: SortOrderInput | SortOrder
    lokasiTambahan?: SortOrderInput | SortOrder
    foto?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    _count?: MonitoringCountOrderByAggregateInput
    _max?: MonitoringMaxOrderByAggregateInput
    _min?: MonitoringMinOrderByAggregateInput
  }

  export type MonitoringScalarWhereWithAggregatesInput = {
    AND?: MonitoringScalarWhereWithAggregatesInput | MonitoringScalarWhereWithAggregatesInput[]
    OR?: MonitoringScalarWhereWithAggregatesInput[]
    NOT?: MonitoringScalarWhereWithAggregatesInput | MonitoringScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monitoring"> | string
    nupBarang?: StringWithAggregatesFilter<"Monitoring"> | string
    waktu?: DateTimeWithAggregatesFilter<"Monitoring"> | Date | string
    plt?: StringWithAggregatesFilter<"Monitoring"> | string
    kondisiBarang?: EnumKondisiBarangMWithAggregatesFilter<"Monitoring"> | $Enums.KondisiBarangM
    lokasiBarang?: StringNullableWithAggregatesFilter<"Monitoring"> | string | null
    lokasiTambahan?: StringNullableWithAggregatesFilter<"Monitoring"> | string | null
    foto?: StringWithAggregatesFilter<"Monitoring"> | string
    keterangan?: StringNullableWithAggregatesFilter<"Monitoring"> | string | null
  }

  export type UserCreateInput = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan?: $Enums.Jurusan
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    nomor_identitas_tunggal: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    barangUnit?: BarangUnitCreateNestedManyWithoutUserInput
    peminjamanP?: PeminjamanPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan?: $Enums.Jurusan
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    nomor_identitas_tunggal: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    barangUnit?: BarangUnitUncheckedCreateNestedManyWithoutUserInput
    peminjamanP?: PeminjamanPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barangUnit?: BarangUnitUpdateManyWithoutUserNestedInput
    peminjamanP?: PeminjamanPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barangUnit?: BarangUnitUncheckedUpdateManyWithoutUserNestedInput
    peminjamanP?: PeminjamanPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan?: $Enums.Jurusan
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    nomor_identitas_tunggal: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DataBarangCreateInput = {
    kode_barang: string
    jenis_barang: string
    merek: string
    barangUnit?: BarangUnitCreateNestedManyWithoutDataBarangInput
  }

  export type DataBarangUncheckedCreateInput = {
    kode_barang: string
    jenis_barang: string
    merek: string
    barangUnit?: BarangUnitUncheckedCreateNestedManyWithoutDataBarangInput
  }

  export type DataBarangUpdateInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    barangUnit?: BarangUnitUpdateManyWithoutDataBarangNestedInput
  }

  export type DataBarangUncheckedUpdateInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    barangUnit?: BarangUnitUncheckedUpdateManyWithoutDataBarangNestedInput
  }

  export type DataBarangCreateManyInput = {
    kode_barang: string
    jenis_barang: string
    merek: string
  }

  export type DataBarangUpdateManyMutationInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type DataBarangUncheckedUpdateManyInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type DataLokasiCreateInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    barangUnit?: BarangUnitCreateNestedManyWithoutDataLokasiInput
    monitoring?: MonitoringCreateNestedManyWithoutDataLokasiInput
    peminjamanP?: PeminjamanPCreateNestedManyWithoutLokasiInput
  }

  export type DataLokasiUncheckedCreateInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    barangUnit?: BarangUnitUncheckedCreateNestedManyWithoutDataLokasiInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutDataLokasiInput
    peminjamanP?: PeminjamanPUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type DataLokasiUpdateInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    barangUnit?: BarangUnitUpdateManyWithoutDataLokasiNestedInput
    monitoring?: MonitoringUpdateManyWithoutDataLokasiNestedInput
    peminjamanP?: PeminjamanPUpdateManyWithoutLokasiNestedInput
  }

  export type DataLokasiUncheckedUpdateInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    barangUnit?: BarangUnitUncheckedUpdateManyWithoutDataLokasiNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutDataLokasiNestedInput
    peminjamanP?: PeminjamanPUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type DataLokasiCreateManyInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
  }

  export type DataLokasiUpdateManyMutationInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
  }

  export type DataLokasiUncheckedUpdateManyInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
  }

  export type BarangUnitCreateInput = {
    nup: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    dataBarang: DataBarangCreateNestedOneWithoutBarangUnitInput
    dataLokasi: DataLokasiCreateNestedOneWithoutBarangUnitInput
    user: UserCreateNestedOneWithoutBarangUnitInput
    monitoring?: MonitoringCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitUncheckedCreateInput = {
    nup: string
    kodeBarang: string
    lokasi: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemUncheckedCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitUpdateInput = {
    nup?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataBarang?: DataBarangUpdateOneRequiredWithoutBarangUnitNestedInput
    dataLokasi?: DataLokasiUpdateOneRequiredWithoutBarangUnitNestedInput
    user?: UserUpdateOneRequiredWithoutBarangUnitNestedInput
    monitoring?: MonitoringUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoring?: MonitoringUncheckedUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUncheckedUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitCreateManyInput = {
    nup: string
    kodeBarang: string
    lokasi: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
  }

  export type BarangUnitUpdateManyMutationInput = {
    nup?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangUnitUncheckedUpdateManyInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanPCreateInput = {
    barangUnitId?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNCreateNestedManyWithoutPeminjamanInput
    items?: PeminjamanItemCreateNestedManyWithoutPeminjamanInput
    lokasi?: DataLokasiCreateNestedOneWithoutPeminjamanPInput
    user: UserCreateNestedOneWithoutPeminjamanPInput
  }

  export type PeminjamanPUncheckedCreateInput = {
    id?: number
    userNik: string
    barangUnitId?: string | null
    kodeLokasi?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNUncheckedCreateNestedManyWithoutPeminjamanInput
    items?: PeminjamanItemUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanPUpdateInput = {
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUpdateManyWithoutPeminjamanNestedInput
    items?: PeminjamanItemUpdateManyWithoutPeminjamanNestedInput
    lokasi?: DataLokasiUpdateOneWithoutPeminjamanPNestedInput
    user?: UserUpdateOneRequiredWithoutPeminjamanPNestedInput
  }

  export type PeminjamanPUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userNik?: StringFieldUpdateOperationsInput | string
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    kodeLokasi?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUncheckedUpdateManyWithoutPeminjamanNestedInput
    items?: PeminjamanItemUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanPCreateManyInput = {
    id?: number
    userNik: string
    barangUnitId?: string | null
    kodeLokasi?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
  }

  export type PeminjamanPUpdateManyMutationInput = {
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PeminjamanPUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userNik?: StringFieldUpdateOperationsInput | string
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    kodeLokasi?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LogScanBMNCreateInput = {
    jenis: string
    waktuScan?: Date | string
    petugasNik: string
    keterangan?: string | null
    peminjaman: PeminjamanPCreateNestedOneWithoutLogScanBMNInput
  }

  export type LogScanBMNUncheckedCreateInput = {
    id?: number
    peminjamanId: number
    jenis: string
    waktuScan?: Date | string
    petugasNik: string
    keterangan?: string | null
  }

  export type LogScanBMNUpdateInput = {
    jenis?: StringFieldUpdateOperationsInput | string
    waktuScan?: DateTimeFieldUpdateOperationsInput | Date | string
    petugasNik?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    peminjaman?: PeminjamanPUpdateOneRequiredWithoutLogScanBMNNestedInput
  }

  export type LogScanBMNUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    peminjamanId?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    waktuScan?: DateTimeFieldUpdateOperationsInput | Date | string
    petugasNik?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogScanBMNCreateManyInput = {
    id?: number
    peminjamanId: number
    jenis: string
    waktuScan?: Date | string
    petugasNik: string
    keterangan?: string | null
  }

  export type LogScanBMNUpdateManyMutationInput = {
    jenis?: StringFieldUpdateOperationsInput | string
    waktuScan?: DateTimeFieldUpdateOperationsInput | Date | string
    petugasNik?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogScanBMNUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    peminjamanId?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    waktuScan?: DateTimeFieldUpdateOperationsInput | Date | string
    petugasNik?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeminjamanItemCreateInput = {
    barangUnit: BarangUnitCreateNestedOneWithoutPeminjamanItemsInput
    peminjaman: PeminjamanPCreateNestedOneWithoutItemsInput
  }

  export type PeminjamanItemUncheckedCreateInput = {
    id?: number
    peminjamanId: number
    nupBarang: string
  }

  export type PeminjamanItemUpdateInput = {
    barangUnit?: BarangUnitUpdateOneRequiredWithoutPeminjamanItemsNestedInput
    peminjaman?: PeminjamanPUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PeminjamanItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    peminjamanId?: IntFieldUpdateOperationsInput | number
    nupBarang?: StringFieldUpdateOperationsInput | string
  }

  export type PeminjamanItemCreateManyInput = {
    id?: number
    peminjamanId: number
    nupBarang: string
  }

  export type PeminjamanItemUpdateManyMutationInput = {

  }

  export type PeminjamanItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    peminjamanId?: IntFieldUpdateOperationsInput | number
    nupBarang?: StringFieldUpdateOperationsInput | string
  }

  export type MonitoringCreateInput = {
    id: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
    dataLokasi?: DataLokasiCreateNestedOneWithoutMonitoringInput
    barangUnit: BarangUnitCreateNestedOneWithoutMonitoringInput
  }

  export type MonitoringUncheckedCreateInput = {
    id: string
    nupBarang: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiBarang?: string | null
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
  }

  export type MonitoringUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    dataLokasi?: DataLokasiUpdateOneWithoutMonitoringNestedInput
    barangUnit?: BarangUnitUpdateOneRequiredWithoutMonitoringNestedInput
  }

  export type MonitoringUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nupBarang?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiBarang?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonitoringCreateManyInput = {
    id: string
    nupBarang: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiBarang?: string | null
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
  }

  export type MonitoringUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonitoringUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nupBarang?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiBarang?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumJurusanFilter<$PrismaModel = never> = {
    equals?: $Enums.Jurusan | EnumJurusanFieldRefInput<$PrismaModel>
    in?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    not?: NestedEnumJurusanFilter<$PrismaModel> | $Enums.Jurusan
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BarangUnitListRelationFilter = {
    every?: BarangUnitWhereInput
    some?: BarangUnitWhereInput
    none?: BarangUnitWhereInput
  }

  export type PeminjamanPListRelationFilter = {
    every?: PeminjamanPWhereInput
    some?: PeminjamanPWhereInput
    none?: PeminjamanPWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BarangUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeminjamanPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    nama?: SortOrder
    nik?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jurusan?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    nomor_identitas_tunggal?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    nama?: SortOrder
    nik?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jurusan?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    nomor_identitas_tunggal?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    nama?: SortOrder
    nik?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jurusan?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    nomor_identitas_tunggal?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumJurusanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jurusan | EnumJurusanFieldRefInput<$PrismaModel>
    in?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    not?: NestedEnumJurusanWithAggregatesFilter<$PrismaModel> | $Enums.Jurusan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJurusanFilter<$PrismaModel>
    _max?: NestedEnumJurusanFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DataBarangCountOrderByAggregateInput = {
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    merek?: SortOrder
  }

  export type DataBarangMaxOrderByAggregateInput = {
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    merek?: SortOrder
  }

  export type DataBarangMinOrderByAggregateInput = {
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    merek?: SortOrder
  }

  export type EnumStatusLokasiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLokasi | EnumStatusLokasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusLokasiFilter<$PrismaModel> | $Enums.StatusLokasi
  }

  export type MonitoringListRelationFilter = {
    every?: MonitoringWhereInput
    some?: MonitoringWhereInput
    none?: MonitoringWhereInput
  }

  export type MonitoringOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataLokasiCountOrderByAggregateInput = {
    kode_lokasi?: SortOrder
    lokasi?: SortOrder
    jurusan?: SortOrder
    status?: SortOrder
  }

  export type DataLokasiMaxOrderByAggregateInput = {
    kode_lokasi?: SortOrder
    lokasi?: SortOrder
    jurusan?: SortOrder
    status?: SortOrder
  }

  export type DataLokasiMinOrderByAggregateInput = {
    kode_lokasi?: SortOrder
    lokasi?: SortOrder
    jurusan?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusLokasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLokasi | EnumStatusLokasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusLokasiWithAggregatesFilter<$PrismaModel> | $Enums.StatusLokasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusLokasiFilter<$PrismaModel>
    _max?: NestedEnumStatusLokasiFilter<$PrismaModel>
  }

  export type EnumStatusBFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusB | EnumStatusBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBFilter<$PrismaModel> | $Enums.StatusB
  }

  export type DataBarangScalarRelationFilter = {
    is?: DataBarangWhereInput
    isNot?: DataBarangWhereInput
  }

  export type DataLokasiScalarRelationFilter = {
    is?: DataLokasiWhereInput
    isNot?: DataLokasiWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PeminjamanItemListRelationFilter = {
    every?: PeminjamanItemWhereInput
    some?: PeminjamanItemWhereInput
    none?: PeminjamanItemWhereInput
  }

  export type PeminjamanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangUnitCountOrderByAggregateInput = {
    nup?: SortOrder
    kodeBarang?: SortOrder
    lokasi?: SortOrder
    nikUser?: SortOrder
    status?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
  }

  export type BarangUnitMaxOrderByAggregateInput = {
    nup?: SortOrder
    kodeBarang?: SortOrder
    lokasi?: SortOrder
    nikUser?: SortOrder
    status?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
  }

  export type BarangUnitMinOrderByAggregateInput = {
    nup?: SortOrder
    kodeBarang?: SortOrder
    lokasi?: SortOrder
    nikUser?: SortOrder
    status?: SortOrder
    jurusan?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusBWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusB | EnumStatusBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBWithAggregatesFilter<$PrismaModel> | $Enums.StatusB
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBFilter<$PrismaModel>
    _max?: NestedEnumStatusBFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusBookingFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBooking | EnumStatusBookingFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBookingFilter<$PrismaModel> | $Enums.StatusBooking
  }

  export type EnumStatusPFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusP | EnumStatusPFieldRefInput<$PrismaModel>
    in?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPFilter<$PrismaModel> | $Enums.StatusP
  }

  export type LogScanBMNListRelationFilter = {
    every?: LogScanBMNWhereInput
    some?: LogScanBMNWhereInput
    none?: LogScanBMNWhereInput
  }

  export type DataLokasiNullableScalarRelationFilter = {
    is?: DataLokasiWhereInput | null
    isNot?: DataLokasiWhereInput | null
  }

  export type LogScanBMNOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeminjamanPCountOrderByAggregateInput = {
    id?: SortOrder
    userNik?: SortOrder
    barangUnitId?: SortOrder
    kodeLokasi?: SortOrder
    lokasiTambahan?: SortOrder
    no_hp?: SortOrder
    createdAt?: SortOrder
    Agenda?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    verifikasi?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    waktuAmbil?: SortOrder
    waktuKembali?: SortOrder
  }

  export type PeminjamanPAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PeminjamanPMaxOrderByAggregateInput = {
    id?: SortOrder
    userNik?: SortOrder
    barangUnitId?: SortOrder
    kodeLokasi?: SortOrder
    lokasiTambahan?: SortOrder
    no_hp?: SortOrder
    createdAt?: SortOrder
    Agenda?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    verifikasi?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    waktuAmbil?: SortOrder
    waktuKembali?: SortOrder
  }

  export type PeminjamanPMinOrderByAggregateInput = {
    id?: SortOrder
    userNik?: SortOrder
    barangUnitId?: SortOrder
    kodeLokasi?: SortOrder
    lokasiTambahan?: SortOrder
    no_hp?: SortOrder
    createdAt?: SortOrder
    Agenda?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    verifikasi?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    waktuAmbil?: SortOrder
    waktuKembali?: SortOrder
  }

  export type PeminjamanPSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumStatusBookingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBooking | EnumStatusBookingFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBookingWithAggregatesFilter<$PrismaModel> | $Enums.StatusBooking
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBookingFilter<$PrismaModel>
    _max?: NestedEnumStatusBookingFilter<$PrismaModel>
  }

  export type EnumStatusPWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusP | EnumStatusPFieldRefInput<$PrismaModel>
    in?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPWithAggregatesFilter<$PrismaModel> | $Enums.StatusP
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPFilter<$PrismaModel>
    _max?: NestedEnumStatusPFilter<$PrismaModel>
  }

  export type PeminjamanPScalarRelationFilter = {
    is?: PeminjamanPWhereInput
    isNot?: PeminjamanPWhereInput
  }

  export type LogScanBMNCountOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    jenis?: SortOrder
    waktuScan?: SortOrder
    petugasNik?: SortOrder
    keterangan?: SortOrder
  }

  export type LogScanBMNAvgOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
  }

  export type LogScanBMNMaxOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    jenis?: SortOrder
    waktuScan?: SortOrder
    petugasNik?: SortOrder
    keterangan?: SortOrder
  }

  export type LogScanBMNMinOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    jenis?: SortOrder
    waktuScan?: SortOrder
    petugasNik?: SortOrder
    keterangan?: SortOrder
  }

  export type LogScanBMNSumOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
  }

  export type BarangUnitScalarRelationFilter = {
    is?: BarangUnitWhereInput
    isNot?: BarangUnitWhereInput
  }

  export type PeminjamanItemCountOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    nupBarang?: SortOrder
  }

  export type PeminjamanItemAvgOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
  }

  export type PeminjamanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    nupBarang?: SortOrder
  }

  export type PeminjamanItemMinOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
    nupBarang?: SortOrder
  }

  export type PeminjamanItemSumOrderByAggregateInput = {
    id?: SortOrder
    peminjamanId?: SortOrder
  }

  export type EnumKondisiBarangMFilter<$PrismaModel = never> = {
    equals?: $Enums.KondisiBarangM | EnumKondisiBarangMFieldRefInput<$PrismaModel>
    in?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    notIn?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiBarangMFilter<$PrismaModel> | $Enums.KondisiBarangM
  }

  export type MonitoringCountOrderByAggregateInput = {
    id?: SortOrder
    nupBarang?: SortOrder
    waktu?: SortOrder
    plt?: SortOrder
    kondisiBarang?: SortOrder
    lokasiBarang?: SortOrder
    lokasiTambahan?: SortOrder
    foto?: SortOrder
    keterangan?: SortOrder
  }

  export type MonitoringMaxOrderByAggregateInput = {
    id?: SortOrder
    nupBarang?: SortOrder
    waktu?: SortOrder
    plt?: SortOrder
    kondisiBarang?: SortOrder
    lokasiBarang?: SortOrder
    lokasiTambahan?: SortOrder
    foto?: SortOrder
    keterangan?: SortOrder
  }

  export type MonitoringMinOrderByAggregateInput = {
    id?: SortOrder
    nupBarang?: SortOrder
    waktu?: SortOrder
    plt?: SortOrder
    kondisiBarang?: SortOrder
    lokasiBarang?: SortOrder
    lokasiTambahan?: SortOrder
    foto?: SortOrder
    keterangan?: SortOrder
  }

  export type EnumKondisiBarangMWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KondisiBarangM | EnumKondisiBarangMFieldRefInput<$PrismaModel>
    in?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    notIn?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiBarangMWithAggregatesFilter<$PrismaModel> | $Enums.KondisiBarangM
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKondisiBarangMFilter<$PrismaModel>
    _max?: NestedEnumKondisiBarangMFilter<$PrismaModel>
  }

  export type BarangUnitCreateNestedManyWithoutUserInput = {
    create?: XOR<BarangUnitCreateWithoutUserInput, BarangUnitUncheckedCreateWithoutUserInput> | BarangUnitCreateWithoutUserInput[] | BarangUnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutUserInput | BarangUnitCreateOrConnectWithoutUserInput[]
    createMany?: BarangUnitCreateManyUserInputEnvelope
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
  }

  export type PeminjamanPCreateNestedManyWithoutUserInput = {
    create?: XOR<PeminjamanPCreateWithoutUserInput, PeminjamanPUncheckedCreateWithoutUserInput> | PeminjamanPCreateWithoutUserInput[] | PeminjamanPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutUserInput | PeminjamanPCreateOrConnectWithoutUserInput[]
    createMany?: PeminjamanPCreateManyUserInputEnvelope
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
  }

  export type BarangUnitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BarangUnitCreateWithoutUserInput, BarangUnitUncheckedCreateWithoutUserInput> | BarangUnitCreateWithoutUserInput[] | BarangUnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutUserInput | BarangUnitCreateOrConnectWithoutUserInput[]
    createMany?: BarangUnitCreateManyUserInputEnvelope
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
  }

  export type PeminjamanPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PeminjamanPCreateWithoutUserInput, PeminjamanPUncheckedCreateWithoutUserInput> | PeminjamanPCreateWithoutUserInput[] | PeminjamanPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutUserInput | PeminjamanPCreateOrConnectWithoutUserInput[]
    createMany?: PeminjamanPCreateManyUserInputEnvelope
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumJurusanFieldUpdateOperationsInput = {
    set?: $Enums.Jurusan
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BarangUnitUpdateManyWithoutUserNestedInput = {
    create?: XOR<BarangUnitCreateWithoutUserInput, BarangUnitUncheckedCreateWithoutUserInput> | BarangUnitCreateWithoutUserInput[] | BarangUnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutUserInput | BarangUnitCreateOrConnectWithoutUserInput[]
    upsert?: BarangUnitUpsertWithWhereUniqueWithoutUserInput | BarangUnitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BarangUnitCreateManyUserInputEnvelope
    set?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    disconnect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    delete?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    update?: BarangUnitUpdateWithWhereUniqueWithoutUserInput | BarangUnitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BarangUnitUpdateManyWithWhereWithoutUserInput | BarangUnitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
  }

  export type PeminjamanPUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeminjamanPCreateWithoutUserInput, PeminjamanPUncheckedCreateWithoutUserInput> | PeminjamanPCreateWithoutUserInput[] | PeminjamanPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutUserInput | PeminjamanPCreateOrConnectWithoutUserInput[]
    upsert?: PeminjamanPUpsertWithWhereUniqueWithoutUserInput | PeminjamanPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeminjamanPCreateManyUserInputEnvelope
    set?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    disconnect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    delete?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    update?: PeminjamanPUpdateWithWhereUniqueWithoutUserInput | PeminjamanPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeminjamanPUpdateManyWithWhereWithoutUserInput | PeminjamanPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeminjamanPScalarWhereInput | PeminjamanPScalarWhereInput[]
  }

  export type BarangUnitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BarangUnitCreateWithoutUserInput, BarangUnitUncheckedCreateWithoutUserInput> | BarangUnitCreateWithoutUserInput[] | BarangUnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutUserInput | BarangUnitCreateOrConnectWithoutUserInput[]
    upsert?: BarangUnitUpsertWithWhereUniqueWithoutUserInput | BarangUnitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BarangUnitCreateManyUserInputEnvelope
    set?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    disconnect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    delete?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    update?: BarangUnitUpdateWithWhereUniqueWithoutUserInput | BarangUnitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BarangUnitUpdateManyWithWhereWithoutUserInput | BarangUnitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
  }

  export type PeminjamanPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeminjamanPCreateWithoutUserInput, PeminjamanPUncheckedCreateWithoutUserInput> | PeminjamanPCreateWithoutUserInput[] | PeminjamanPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutUserInput | PeminjamanPCreateOrConnectWithoutUserInput[]
    upsert?: PeminjamanPUpsertWithWhereUniqueWithoutUserInput | PeminjamanPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeminjamanPCreateManyUserInputEnvelope
    set?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    disconnect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    delete?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    update?: PeminjamanPUpdateWithWhereUniqueWithoutUserInput | PeminjamanPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeminjamanPUpdateManyWithWhereWithoutUserInput | PeminjamanPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeminjamanPScalarWhereInput | PeminjamanPScalarWhereInput[]
  }

  export type BarangUnitCreateNestedManyWithoutDataBarangInput = {
    create?: XOR<BarangUnitCreateWithoutDataBarangInput, BarangUnitUncheckedCreateWithoutDataBarangInput> | BarangUnitCreateWithoutDataBarangInput[] | BarangUnitUncheckedCreateWithoutDataBarangInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataBarangInput | BarangUnitCreateOrConnectWithoutDataBarangInput[]
    createMany?: BarangUnitCreateManyDataBarangInputEnvelope
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
  }

  export type BarangUnitUncheckedCreateNestedManyWithoutDataBarangInput = {
    create?: XOR<BarangUnitCreateWithoutDataBarangInput, BarangUnitUncheckedCreateWithoutDataBarangInput> | BarangUnitCreateWithoutDataBarangInput[] | BarangUnitUncheckedCreateWithoutDataBarangInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataBarangInput | BarangUnitCreateOrConnectWithoutDataBarangInput[]
    createMany?: BarangUnitCreateManyDataBarangInputEnvelope
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
  }

  export type BarangUnitUpdateManyWithoutDataBarangNestedInput = {
    create?: XOR<BarangUnitCreateWithoutDataBarangInput, BarangUnitUncheckedCreateWithoutDataBarangInput> | BarangUnitCreateWithoutDataBarangInput[] | BarangUnitUncheckedCreateWithoutDataBarangInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataBarangInput | BarangUnitCreateOrConnectWithoutDataBarangInput[]
    upsert?: BarangUnitUpsertWithWhereUniqueWithoutDataBarangInput | BarangUnitUpsertWithWhereUniqueWithoutDataBarangInput[]
    createMany?: BarangUnitCreateManyDataBarangInputEnvelope
    set?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    disconnect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    delete?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    update?: BarangUnitUpdateWithWhereUniqueWithoutDataBarangInput | BarangUnitUpdateWithWhereUniqueWithoutDataBarangInput[]
    updateMany?: BarangUnitUpdateManyWithWhereWithoutDataBarangInput | BarangUnitUpdateManyWithWhereWithoutDataBarangInput[]
    deleteMany?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
  }

  export type BarangUnitUncheckedUpdateManyWithoutDataBarangNestedInput = {
    create?: XOR<BarangUnitCreateWithoutDataBarangInput, BarangUnitUncheckedCreateWithoutDataBarangInput> | BarangUnitCreateWithoutDataBarangInput[] | BarangUnitUncheckedCreateWithoutDataBarangInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataBarangInput | BarangUnitCreateOrConnectWithoutDataBarangInput[]
    upsert?: BarangUnitUpsertWithWhereUniqueWithoutDataBarangInput | BarangUnitUpsertWithWhereUniqueWithoutDataBarangInput[]
    createMany?: BarangUnitCreateManyDataBarangInputEnvelope
    set?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    disconnect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    delete?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    update?: BarangUnitUpdateWithWhereUniqueWithoutDataBarangInput | BarangUnitUpdateWithWhereUniqueWithoutDataBarangInput[]
    updateMany?: BarangUnitUpdateManyWithWhereWithoutDataBarangInput | BarangUnitUpdateManyWithWhereWithoutDataBarangInput[]
    deleteMany?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
  }

  export type BarangUnitCreateNestedManyWithoutDataLokasiInput = {
    create?: XOR<BarangUnitCreateWithoutDataLokasiInput, BarangUnitUncheckedCreateWithoutDataLokasiInput> | BarangUnitCreateWithoutDataLokasiInput[] | BarangUnitUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataLokasiInput | BarangUnitCreateOrConnectWithoutDataLokasiInput[]
    createMany?: BarangUnitCreateManyDataLokasiInputEnvelope
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
  }

  export type MonitoringCreateNestedManyWithoutDataLokasiInput = {
    create?: XOR<MonitoringCreateWithoutDataLokasiInput, MonitoringUncheckedCreateWithoutDataLokasiInput> | MonitoringCreateWithoutDataLokasiInput[] | MonitoringUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutDataLokasiInput | MonitoringCreateOrConnectWithoutDataLokasiInput[]
    createMany?: MonitoringCreateManyDataLokasiInputEnvelope
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
  }

  export type PeminjamanPCreateNestedManyWithoutLokasiInput = {
    create?: XOR<PeminjamanPCreateWithoutLokasiInput, PeminjamanPUncheckedCreateWithoutLokasiInput> | PeminjamanPCreateWithoutLokasiInput[] | PeminjamanPUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutLokasiInput | PeminjamanPCreateOrConnectWithoutLokasiInput[]
    createMany?: PeminjamanPCreateManyLokasiInputEnvelope
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
  }

  export type BarangUnitUncheckedCreateNestedManyWithoutDataLokasiInput = {
    create?: XOR<BarangUnitCreateWithoutDataLokasiInput, BarangUnitUncheckedCreateWithoutDataLokasiInput> | BarangUnitCreateWithoutDataLokasiInput[] | BarangUnitUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataLokasiInput | BarangUnitCreateOrConnectWithoutDataLokasiInput[]
    createMany?: BarangUnitCreateManyDataLokasiInputEnvelope
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
  }

  export type MonitoringUncheckedCreateNestedManyWithoutDataLokasiInput = {
    create?: XOR<MonitoringCreateWithoutDataLokasiInput, MonitoringUncheckedCreateWithoutDataLokasiInput> | MonitoringCreateWithoutDataLokasiInput[] | MonitoringUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutDataLokasiInput | MonitoringCreateOrConnectWithoutDataLokasiInput[]
    createMany?: MonitoringCreateManyDataLokasiInputEnvelope
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
  }

  export type PeminjamanPUncheckedCreateNestedManyWithoutLokasiInput = {
    create?: XOR<PeminjamanPCreateWithoutLokasiInput, PeminjamanPUncheckedCreateWithoutLokasiInput> | PeminjamanPCreateWithoutLokasiInput[] | PeminjamanPUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutLokasiInput | PeminjamanPCreateOrConnectWithoutLokasiInput[]
    createMany?: PeminjamanPCreateManyLokasiInputEnvelope
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
  }

  export type EnumStatusLokasiFieldUpdateOperationsInput = {
    set?: $Enums.StatusLokasi
  }

  export type BarangUnitUpdateManyWithoutDataLokasiNestedInput = {
    create?: XOR<BarangUnitCreateWithoutDataLokasiInput, BarangUnitUncheckedCreateWithoutDataLokasiInput> | BarangUnitCreateWithoutDataLokasiInput[] | BarangUnitUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataLokasiInput | BarangUnitCreateOrConnectWithoutDataLokasiInput[]
    upsert?: BarangUnitUpsertWithWhereUniqueWithoutDataLokasiInput | BarangUnitUpsertWithWhereUniqueWithoutDataLokasiInput[]
    createMany?: BarangUnitCreateManyDataLokasiInputEnvelope
    set?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    disconnect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    delete?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    update?: BarangUnitUpdateWithWhereUniqueWithoutDataLokasiInput | BarangUnitUpdateWithWhereUniqueWithoutDataLokasiInput[]
    updateMany?: BarangUnitUpdateManyWithWhereWithoutDataLokasiInput | BarangUnitUpdateManyWithWhereWithoutDataLokasiInput[]
    deleteMany?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
  }

  export type MonitoringUpdateManyWithoutDataLokasiNestedInput = {
    create?: XOR<MonitoringCreateWithoutDataLokasiInput, MonitoringUncheckedCreateWithoutDataLokasiInput> | MonitoringCreateWithoutDataLokasiInput[] | MonitoringUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutDataLokasiInput | MonitoringCreateOrConnectWithoutDataLokasiInput[]
    upsert?: MonitoringUpsertWithWhereUniqueWithoutDataLokasiInput | MonitoringUpsertWithWhereUniqueWithoutDataLokasiInput[]
    createMany?: MonitoringCreateManyDataLokasiInputEnvelope
    set?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    disconnect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    delete?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    update?: MonitoringUpdateWithWhereUniqueWithoutDataLokasiInput | MonitoringUpdateWithWhereUniqueWithoutDataLokasiInput[]
    updateMany?: MonitoringUpdateManyWithWhereWithoutDataLokasiInput | MonitoringUpdateManyWithWhereWithoutDataLokasiInput[]
    deleteMany?: MonitoringScalarWhereInput | MonitoringScalarWhereInput[]
  }

  export type PeminjamanPUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<PeminjamanPCreateWithoutLokasiInput, PeminjamanPUncheckedCreateWithoutLokasiInput> | PeminjamanPCreateWithoutLokasiInput[] | PeminjamanPUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutLokasiInput | PeminjamanPCreateOrConnectWithoutLokasiInput[]
    upsert?: PeminjamanPUpsertWithWhereUniqueWithoutLokasiInput | PeminjamanPUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: PeminjamanPCreateManyLokasiInputEnvelope
    set?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    disconnect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    delete?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    update?: PeminjamanPUpdateWithWhereUniqueWithoutLokasiInput | PeminjamanPUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: PeminjamanPUpdateManyWithWhereWithoutLokasiInput | PeminjamanPUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: PeminjamanPScalarWhereInput | PeminjamanPScalarWhereInput[]
  }

  export type BarangUnitUncheckedUpdateManyWithoutDataLokasiNestedInput = {
    create?: XOR<BarangUnitCreateWithoutDataLokasiInput, BarangUnitUncheckedCreateWithoutDataLokasiInput> | BarangUnitCreateWithoutDataLokasiInput[] | BarangUnitUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: BarangUnitCreateOrConnectWithoutDataLokasiInput | BarangUnitCreateOrConnectWithoutDataLokasiInput[]
    upsert?: BarangUnitUpsertWithWhereUniqueWithoutDataLokasiInput | BarangUnitUpsertWithWhereUniqueWithoutDataLokasiInput[]
    createMany?: BarangUnitCreateManyDataLokasiInputEnvelope
    set?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    disconnect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    delete?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    connect?: BarangUnitWhereUniqueInput | BarangUnitWhereUniqueInput[]
    update?: BarangUnitUpdateWithWhereUniqueWithoutDataLokasiInput | BarangUnitUpdateWithWhereUniqueWithoutDataLokasiInput[]
    updateMany?: BarangUnitUpdateManyWithWhereWithoutDataLokasiInput | BarangUnitUpdateManyWithWhereWithoutDataLokasiInput[]
    deleteMany?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
  }

  export type MonitoringUncheckedUpdateManyWithoutDataLokasiNestedInput = {
    create?: XOR<MonitoringCreateWithoutDataLokasiInput, MonitoringUncheckedCreateWithoutDataLokasiInput> | MonitoringCreateWithoutDataLokasiInput[] | MonitoringUncheckedCreateWithoutDataLokasiInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutDataLokasiInput | MonitoringCreateOrConnectWithoutDataLokasiInput[]
    upsert?: MonitoringUpsertWithWhereUniqueWithoutDataLokasiInput | MonitoringUpsertWithWhereUniqueWithoutDataLokasiInput[]
    createMany?: MonitoringCreateManyDataLokasiInputEnvelope
    set?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    disconnect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    delete?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    update?: MonitoringUpdateWithWhereUniqueWithoutDataLokasiInput | MonitoringUpdateWithWhereUniqueWithoutDataLokasiInput[]
    updateMany?: MonitoringUpdateManyWithWhereWithoutDataLokasiInput | MonitoringUpdateManyWithWhereWithoutDataLokasiInput[]
    deleteMany?: MonitoringScalarWhereInput | MonitoringScalarWhereInput[]
  }

  export type PeminjamanPUncheckedUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<PeminjamanPCreateWithoutLokasiInput, PeminjamanPUncheckedCreateWithoutLokasiInput> | PeminjamanPCreateWithoutLokasiInput[] | PeminjamanPUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutLokasiInput | PeminjamanPCreateOrConnectWithoutLokasiInput[]
    upsert?: PeminjamanPUpsertWithWhereUniqueWithoutLokasiInput | PeminjamanPUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: PeminjamanPCreateManyLokasiInputEnvelope
    set?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    disconnect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    delete?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    connect?: PeminjamanPWhereUniqueInput | PeminjamanPWhereUniqueInput[]
    update?: PeminjamanPUpdateWithWhereUniqueWithoutLokasiInput | PeminjamanPUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: PeminjamanPUpdateManyWithWhereWithoutLokasiInput | PeminjamanPUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: PeminjamanPScalarWhereInput | PeminjamanPScalarWhereInput[]
  }

  export type DataBarangCreateNestedOneWithoutBarangUnitInput = {
    create?: XOR<DataBarangCreateWithoutBarangUnitInput, DataBarangUncheckedCreateWithoutBarangUnitInput>
    connectOrCreate?: DataBarangCreateOrConnectWithoutBarangUnitInput
    connect?: DataBarangWhereUniqueInput
  }

  export type DataLokasiCreateNestedOneWithoutBarangUnitInput = {
    create?: XOR<DataLokasiCreateWithoutBarangUnitInput, DataLokasiUncheckedCreateWithoutBarangUnitInput>
    connectOrCreate?: DataLokasiCreateOrConnectWithoutBarangUnitInput
    connect?: DataLokasiWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBarangUnitInput = {
    create?: XOR<UserCreateWithoutBarangUnitInput, UserUncheckedCreateWithoutBarangUnitInput>
    connectOrCreate?: UserCreateOrConnectWithoutBarangUnitInput
    connect?: UserWhereUniqueInput
  }

  export type MonitoringCreateNestedManyWithoutBarangUnitInput = {
    create?: XOR<MonitoringCreateWithoutBarangUnitInput, MonitoringUncheckedCreateWithoutBarangUnitInput> | MonitoringCreateWithoutBarangUnitInput[] | MonitoringUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutBarangUnitInput | MonitoringCreateOrConnectWithoutBarangUnitInput[]
    createMany?: MonitoringCreateManyBarangUnitInputEnvelope
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
  }

  export type PeminjamanItemCreateNestedManyWithoutBarangUnitInput = {
    create?: XOR<PeminjamanItemCreateWithoutBarangUnitInput, PeminjamanItemUncheckedCreateWithoutBarangUnitInput> | PeminjamanItemCreateWithoutBarangUnitInput[] | PeminjamanItemUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutBarangUnitInput | PeminjamanItemCreateOrConnectWithoutBarangUnitInput[]
    createMany?: PeminjamanItemCreateManyBarangUnitInputEnvelope
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
  }

  export type MonitoringUncheckedCreateNestedManyWithoutBarangUnitInput = {
    create?: XOR<MonitoringCreateWithoutBarangUnitInput, MonitoringUncheckedCreateWithoutBarangUnitInput> | MonitoringCreateWithoutBarangUnitInput[] | MonitoringUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutBarangUnitInput | MonitoringCreateOrConnectWithoutBarangUnitInput[]
    createMany?: MonitoringCreateManyBarangUnitInputEnvelope
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
  }

  export type PeminjamanItemUncheckedCreateNestedManyWithoutBarangUnitInput = {
    create?: XOR<PeminjamanItemCreateWithoutBarangUnitInput, PeminjamanItemUncheckedCreateWithoutBarangUnitInput> | PeminjamanItemCreateWithoutBarangUnitInput[] | PeminjamanItemUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutBarangUnitInput | PeminjamanItemCreateOrConnectWithoutBarangUnitInput[]
    createMany?: PeminjamanItemCreateManyBarangUnitInputEnvelope
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
  }

  export type EnumStatusBFieldUpdateOperationsInput = {
    set?: $Enums.StatusB
  }

  export type DataBarangUpdateOneRequiredWithoutBarangUnitNestedInput = {
    create?: XOR<DataBarangCreateWithoutBarangUnitInput, DataBarangUncheckedCreateWithoutBarangUnitInput>
    connectOrCreate?: DataBarangCreateOrConnectWithoutBarangUnitInput
    upsert?: DataBarangUpsertWithoutBarangUnitInput
    connect?: DataBarangWhereUniqueInput
    update?: XOR<XOR<DataBarangUpdateToOneWithWhereWithoutBarangUnitInput, DataBarangUpdateWithoutBarangUnitInput>, DataBarangUncheckedUpdateWithoutBarangUnitInput>
  }

  export type DataLokasiUpdateOneRequiredWithoutBarangUnitNestedInput = {
    create?: XOR<DataLokasiCreateWithoutBarangUnitInput, DataLokasiUncheckedCreateWithoutBarangUnitInput>
    connectOrCreate?: DataLokasiCreateOrConnectWithoutBarangUnitInput
    upsert?: DataLokasiUpsertWithoutBarangUnitInput
    connect?: DataLokasiWhereUniqueInput
    update?: XOR<XOR<DataLokasiUpdateToOneWithWhereWithoutBarangUnitInput, DataLokasiUpdateWithoutBarangUnitInput>, DataLokasiUncheckedUpdateWithoutBarangUnitInput>
  }

  export type UserUpdateOneRequiredWithoutBarangUnitNestedInput = {
    create?: XOR<UserCreateWithoutBarangUnitInput, UserUncheckedCreateWithoutBarangUnitInput>
    connectOrCreate?: UserCreateOrConnectWithoutBarangUnitInput
    upsert?: UserUpsertWithoutBarangUnitInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBarangUnitInput, UserUpdateWithoutBarangUnitInput>, UserUncheckedUpdateWithoutBarangUnitInput>
  }

  export type MonitoringUpdateManyWithoutBarangUnitNestedInput = {
    create?: XOR<MonitoringCreateWithoutBarangUnitInput, MonitoringUncheckedCreateWithoutBarangUnitInput> | MonitoringCreateWithoutBarangUnitInput[] | MonitoringUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutBarangUnitInput | MonitoringCreateOrConnectWithoutBarangUnitInput[]
    upsert?: MonitoringUpsertWithWhereUniqueWithoutBarangUnitInput | MonitoringUpsertWithWhereUniqueWithoutBarangUnitInput[]
    createMany?: MonitoringCreateManyBarangUnitInputEnvelope
    set?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    disconnect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    delete?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    update?: MonitoringUpdateWithWhereUniqueWithoutBarangUnitInput | MonitoringUpdateWithWhereUniqueWithoutBarangUnitInput[]
    updateMany?: MonitoringUpdateManyWithWhereWithoutBarangUnitInput | MonitoringUpdateManyWithWhereWithoutBarangUnitInput[]
    deleteMany?: MonitoringScalarWhereInput | MonitoringScalarWhereInput[]
  }

  export type PeminjamanItemUpdateManyWithoutBarangUnitNestedInput = {
    create?: XOR<PeminjamanItemCreateWithoutBarangUnitInput, PeminjamanItemUncheckedCreateWithoutBarangUnitInput> | PeminjamanItemCreateWithoutBarangUnitInput[] | PeminjamanItemUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutBarangUnitInput | PeminjamanItemCreateOrConnectWithoutBarangUnitInput[]
    upsert?: PeminjamanItemUpsertWithWhereUniqueWithoutBarangUnitInput | PeminjamanItemUpsertWithWhereUniqueWithoutBarangUnitInput[]
    createMany?: PeminjamanItemCreateManyBarangUnitInputEnvelope
    set?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    disconnect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    delete?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    update?: PeminjamanItemUpdateWithWhereUniqueWithoutBarangUnitInput | PeminjamanItemUpdateWithWhereUniqueWithoutBarangUnitInput[]
    updateMany?: PeminjamanItemUpdateManyWithWhereWithoutBarangUnitInput | PeminjamanItemUpdateManyWithWhereWithoutBarangUnitInput[]
    deleteMany?: PeminjamanItemScalarWhereInput | PeminjamanItemScalarWhereInput[]
  }

  export type MonitoringUncheckedUpdateManyWithoutBarangUnitNestedInput = {
    create?: XOR<MonitoringCreateWithoutBarangUnitInput, MonitoringUncheckedCreateWithoutBarangUnitInput> | MonitoringCreateWithoutBarangUnitInput[] | MonitoringUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: MonitoringCreateOrConnectWithoutBarangUnitInput | MonitoringCreateOrConnectWithoutBarangUnitInput[]
    upsert?: MonitoringUpsertWithWhereUniqueWithoutBarangUnitInput | MonitoringUpsertWithWhereUniqueWithoutBarangUnitInput[]
    createMany?: MonitoringCreateManyBarangUnitInputEnvelope
    set?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    disconnect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    delete?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    connect?: MonitoringWhereUniqueInput | MonitoringWhereUniqueInput[]
    update?: MonitoringUpdateWithWhereUniqueWithoutBarangUnitInput | MonitoringUpdateWithWhereUniqueWithoutBarangUnitInput[]
    updateMany?: MonitoringUpdateManyWithWhereWithoutBarangUnitInput | MonitoringUpdateManyWithWhereWithoutBarangUnitInput[]
    deleteMany?: MonitoringScalarWhereInput | MonitoringScalarWhereInput[]
  }

  export type PeminjamanItemUncheckedUpdateManyWithoutBarangUnitNestedInput = {
    create?: XOR<PeminjamanItemCreateWithoutBarangUnitInput, PeminjamanItemUncheckedCreateWithoutBarangUnitInput> | PeminjamanItemCreateWithoutBarangUnitInput[] | PeminjamanItemUncheckedCreateWithoutBarangUnitInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutBarangUnitInput | PeminjamanItemCreateOrConnectWithoutBarangUnitInput[]
    upsert?: PeminjamanItemUpsertWithWhereUniqueWithoutBarangUnitInput | PeminjamanItemUpsertWithWhereUniqueWithoutBarangUnitInput[]
    createMany?: PeminjamanItemCreateManyBarangUnitInputEnvelope
    set?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    disconnect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    delete?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    update?: PeminjamanItemUpdateWithWhereUniqueWithoutBarangUnitInput | PeminjamanItemUpdateWithWhereUniqueWithoutBarangUnitInput[]
    updateMany?: PeminjamanItemUpdateManyWithWhereWithoutBarangUnitInput | PeminjamanItemUpdateManyWithWhereWithoutBarangUnitInput[]
    deleteMany?: PeminjamanItemScalarWhereInput | PeminjamanItemScalarWhereInput[]
  }

  export type LogScanBMNCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<LogScanBMNCreateWithoutPeminjamanInput, LogScanBMNUncheckedCreateWithoutPeminjamanInput> | LogScanBMNCreateWithoutPeminjamanInput[] | LogScanBMNUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: LogScanBMNCreateOrConnectWithoutPeminjamanInput | LogScanBMNCreateOrConnectWithoutPeminjamanInput[]
    createMany?: LogScanBMNCreateManyPeminjamanInputEnvelope
    connect?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
  }

  export type PeminjamanItemCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<PeminjamanItemCreateWithoutPeminjamanInput, PeminjamanItemUncheckedCreateWithoutPeminjamanInput> | PeminjamanItemCreateWithoutPeminjamanInput[] | PeminjamanItemUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutPeminjamanInput | PeminjamanItemCreateOrConnectWithoutPeminjamanInput[]
    createMany?: PeminjamanItemCreateManyPeminjamanInputEnvelope
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
  }

  export type DataLokasiCreateNestedOneWithoutPeminjamanPInput = {
    create?: XOR<DataLokasiCreateWithoutPeminjamanPInput, DataLokasiUncheckedCreateWithoutPeminjamanPInput>
    connectOrCreate?: DataLokasiCreateOrConnectWithoutPeminjamanPInput
    connect?: DataLokasiWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPeminjamanPInput = {
    create?: XOR<UserCreateWithoutPeminjamanPInput, UserUncheckedCreateWithoutPeminjamanPInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeminjamanPInput
    connect?: UserWhereUniqueInput
  }

  export type LogScanBMNUncheckedCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<LogScanBMNCreateWithoutPeminjamanInput, LogScanBMNUncheckedCreateWithoutPeminjamanInput> | LogScanBMNCreateWithoutPeminjamanInput[] | LogScanBMNUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: LogScanBMNCreateOrConnectWithoutPeminjamanInput | LogScanBMNCreateOrConnectWithoutPeminjamanInput[]
    createMany?: LogScanBMNCreateManyPeminjamanInputEnvelope
    connect?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
  }

  export type PeminjamanItemUncheckedCreateNestedManyWithoutPeminjamanInput = {
    create?: XOR<PeminjamanItemCreateWithoutPeminjamanInput, PeminjamanItemUncheckedCreateWithoutPeminjamanInput> | PeminjamanItemCreateWithoutPeminjamanInput[] | PeminjamanItemUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutPeminjamanInput | PeminjamanItemCreateOrConnectWithoutPeminjamanInput[]
    createMany?: PeminjamanItemCreateManyPeminjamanInputEnvelope
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
  }

  export type EnumStatusBookingFieldUpdateOperationsInput = {
    set?: $Enums.StatusBooking
  }

  export type EnumStatusPFieldUpdateOperationsInput = {
    set?: $Enums.StatusP
  }

  export type LogScanBMNUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<LogScanBMNCreateWithoutPeminjamanInput, LogScanBMNUncheckedCreateWithoutPeminjamanInput> | LogScanBMNCreateWithoutPeminjamanInput[] | LogScanBMNUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: LogScanBMNCreateOrConnectWithoutPeminjamanInput | LogScanBMNCreateOrConnectWithoutPeminjamanInput[]
    upsert?: LogScanBMNUpsertWithWhereUniqueWithoutPeminjamanInput | LogScanBMNUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: LogScanBMNCreateManyPeminjamanInputEnvelope
    set?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    disconnect?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    delete?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    connect?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    update?: LogScanBMNUpdateWithWhereUniqueWithoutPeminjamanInput | LogScanBMNUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: LogScanBMNUpdateManyWithWhereWithoutPeminjamanInput | LogScanBMNUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: LogScanBMNScalarWhereInput | LogScanBMNScalarWhereInput[]
  }

  export type PeminjamanItemUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<PeminjamanItemCreateWithoutPeminjamanInput, PeminjamanItemUncheckedCreateWithoutPeminjamanInput> | PeminjamanItemCreateWithoutPeminjamanInput[] | PeminjamanItemUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutPeminjamanInput | PeminjamanItemCreateOrConnectWithoutPeminjamanInput[]
    upsert?: PeminjamanItemUpsertWithWhereUniqueWithoutPeminjamanInput | PeminjamanItemUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: PeminjamanItemCreateManyPeminjamanInputEnvelope
    set?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    disconnect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    delete?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    update?: PeminjamanItemUpdateWithWhereUniqueWithoutPeminjamanInput | PeminjamanItemUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: PeminjamanItemUpdateManyWithWhereWithoutPeminjamanInput | PeminjamanItemUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: PeminjamanItemScalarWhereInput | PeminjamanItemScalarWhereInput[]
  }

  export type DataLokasiUpdateOneWithoutPeminjamanPNestedInput = {
    create?: XOR<DataLokasiCreateWithoutPeminjamanPInput, DataLokasiUncheckedCreateWithoutPeminjamanPInput>
    connectOrCreate?: DataLokasiCreateOrConnectWithoutPeminjamanPInput
    upsert?: DataLokasiUpsertWithoutPeminjamanPInput
    disconnect?: DataLokasiWhereInput | boolean
    delete?: DataLokasiWhereInput | boolean
    connect?: DataLokasiWhereUniqueInput
    update?: XOR<XOR<DataLokasiUpdateToOneWithWhereWithoutPeminjamanPInput, DataLokasiUpdateWithoutPeminjamanPInput>, DataLokasiUncheckedUpdateWithoutPeminjamanPInput>
  }

  export type UserUpdateOneRequiredWithoutPeminjamanPNestedInput = {
    create?: XOR<UserCreateWithoutPeminjamanPInput, UserUncheckedCreateWithoutPeminjamanPInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeminjamanPInput
    upsert?: UserUpsertWithoutPeminjamanPInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPeminjamanPInput, UserUpdateWithoutPeminjamanPInput>, UserUncheckedUpdateWithoutPeminjamanPInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LogScanBMNUncheckedUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<LogScanBMNCreateWithoutPeminjamanInput, LogScanBMNUncheckedCreateWithoutPeminjamanInput> | LogScanBMNCreateWithoutPeminjamanInput[] | LogScanBMNUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: LogScanBMNCreateOrConnectWithoutPeminjamanInput | LogScanBMNCreateOrConnectWithoutPeminjamanInput[]
    upsert?: LogScanBMNUpsertWithWhereUniqueWithoutPeminjamanInput | LogScanBMNUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: LogScanBMNCreateManyPeminjamanInputEnvelope
    set?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    disconnect?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    delete?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    connect?: LogScanBMNWhereUniqueInput | LogScanBMNWhereUniqueInput[]
    update?: LogScanBMNUpdateWithWhereUniqueWithoutPeminjamanInput | LogScanBMNUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: LogScanBMNUpdateManyWithWhereWithoutPeminjamanInput | LogScanBMNUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: LogScanBMNScalarWhereInput | LogScanBMNScalarWhereInput[]
  }

  export type PeminjamanItemUncheckedUpdateManyWithoutPeminjamanNestedInput = {
    create?: XOR<PeminjamanItemCreateWithoutPeminjamanInput, PeminjamanItemUncheckedCreateWithoutPeminjamanInput> | PeminjamanItemCreateWithoutPeminjamanInput[] | PeminjamanItemUncheckedCreateWithoutPeminjamanInput[]
    connectOrCreate?: PeminjamanItemCreateOrConnectWithoutPeminjamanInput | PeminjamanItemCreateOrConnectWithoutPeminjamanInput[]
    upsert?: PeminjamanItemUpsertWithWhereUniqueWithoutPeminjamanInput | PeminjamanItemUpsertWithWhereUniqueWithoutPeminjamanInput[]
    createMany?: PeminjamanItemCreateManyPeminjamanInputEnvelope
    set?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    disconnect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    delete?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    connect?: PeminjamanItemWhereUniqueInput | PeminjamanItemWhereUniqueInput[]
    update?: PeminjamanItemUpdateWithWhereUniqueWithoutPeminjamanInput | PeminjamanItemUpdateWithWhereUniqueWithoutPeminjamanInput[]
    updateMany?: PeminjamanItemUpdateManyWithWhereWithoutPeminjamanInput | PeminjamanItemUpdateManyWithWhereWithoutPeminjamanInput[]
    deleteMany?: PeminjamanItemScalarWhereInput | PeminjamanItemScalarWhereInput[]
  }

  export type PeminjamanPCreateNestedOneWithoutLogScanBMNInput = {
    create?: XOR<PeminjamanPCreateWithoutLogScanBMNInput, PeminjamanPUncheckedCreateWithoutLogScanBMNInput>
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutLogScanBMNInput
    connect?: PeminjamanPWhereUniqueInput
  }

  export type PeminjamanPUpdateOneRequiredWithoutLogScanBMNNestedInput = {
    create?: XOR<PeminjamanPCreateWithoutLogScanBMNInput, PeminjamanPUncheckedCreateWithoutLogScanBMNInput>
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutLogScanBMNInput
    upsert?: PeminjamanPUpsertWithoutLogScanBMNInput
    connect?: PeminjamanPWhereUniqueInput
    update?: XOR<XOR<PeminjamanPUpdateToOneWithWhereWithoutLogScanBMNInput, PeminjamanPUpdateWithoutLogScanBMNInput>, PeminjamanPUncheckedUpdateWithoutLogScanBMNInput>
  }

  export type BarangUnitCreateNestedOneWithoutPeminjamanItemsInput = {
    create?: XOR<BarangUnitCreateWithoutPeminjamanItemsInput, BarangUnitUncheckedCreateWithoutPeminjamanItemsInput>
    connectOrCreate?: BarangUnitCreateOrConnectWithoutPeminjamanItemsInput
    connect?: BarangUnitWhereUniqueInput
  }

  export type PeminjamanPCreateNestedOneWithoutItemsInput = {
    create?: XOR<PeminjamanPCreateWithoutItemsInput, PeminjamanPUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutItemsInput
    connect?: PeminjamanPWhereUniqueInput
  }

  export type BarangUnitUpdateOneRequiredWithoutPeminjamanItemsNestedInput = {
    create?: XOR<BarangUnitCreateWithoutPeminjamanItemsInput, BarangUnitUncheckedCreateWithoutPeminjamanItemsInput>
    connectOrCreate?: BarangUnitCreateOrConnectWithoutPeminjamanItemsInput
    upsert?: BarangUnitUpsertWithoutPeminjamanItemsInput
    connect?: BarangUnitWhereUniqueInput
    update?: XOR<XOR<BarangUnitUpdateToOneWithWhereWithoutPeminjamanItemsInput, BarangUnitUpdateWithoutPeminjamanItemsInput>, BarangUnitUncheckedUpdateWithoutPeminjamanItemsInput>
  }

  export type PeminjamanPUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PeminjamanPCreateWithoutItemsInput, PeminjamanPUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PeminjamanPCreateOrConnectWithoutItemsInput
    upsert?: PeminjamanPUpsertWithoutItemsInput
    connect?: PeminjamanPWhereUniqueInput
    update?: XOR<XOR<PeminjamanPUpdateToOneWithWhereWithoutItemsInput, PeminjamanPUpdateWithoutItemsInput>, PeminjamanPUncheckedUpdateWithoutItemsInput>
  }

  export type DataLokasiCreateNestedOneWithoutMonitoringInput = {
    create?: XOR<DataLokasiCreateWithoutMonitoringInput, DataLokasiUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: DataLokasiCreateOrConnectWithoutMonitoringInput
    connect?: DataLokasiWhereUniqueInput
  }

  export type BarangUnitCreateNestedOneWithoutMonitoringInput = {
    create?: XOR<BarangUnitCreateWithoutMonitoringInput, BarangUnitUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: BarangUnitCreateOrConnectWithoutMonitoringInput
    connect?: BarangUnitWhereUniqueInput
  }

  export type EnumKondisiBarangMFieldUpdateOperationsInput = {
    set?: $Enums.KondisiBarangM
  }

  export type DataLokasiUpdateOneWithoutMonitoringNestedInput = {
    create?: XOR<DataLokasiCreateWithoutMonitoringInput, DataLokasiUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: DataLokasiCreateOrConnectWithoutMonitoringInput
    upsert?: DataLokasiUpsertWithoutMonitoringInput
    disconnect?: DataLokasiWhereInput | boolean
    delete?: DataLokasiWhereInput | boolean
    connect?: DataLokasiWhereUniqueInput
    update?: XOR<XOR<DataLokasiUpdateToOneWithWhereWithoutMonitoringInput, DataLokasiUpdateWithoutMonitoringInput>, DataLokasiUncheckedUpdateWithoutMonitoringInput>
  }

  export type BarangUnitUpdateOneRequiredWithoutMonitoringNestedInput = {
    create?: XOR<BarangUnitCreateWithoutMonitoringInput, BarangUnitUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: BarangUnitCreateOrConnectWithoutMonitoringInput
    upsert?: BarangUnitUpsertWithoutMonitoringInput
    connect?: BarangUnitWhereUniqueInput
    update?: XOR<XOR<BarangUnitUpdateToOneWithWhereWithoutMonitoringInput, BarangUnitUpdateWithoutMonitoringInput>, BarangUnitUncheckedUpdateWithoutMonitoringInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumJurusanFilter<$PrismaModel = never> = {
    equals?: $Enums.Jurusan | EnumJurusanFieldRefInput<$PrismaModel>
    in?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    not?: NestedEnumJurusanFilter<$PrismaModel> | $Enums.Jurusan
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumJurusanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jurusan | EnumJurusanFieldRefInput<$PrismaModel>
    in?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Jurusan[] | ListEnumJurusanFieldRefInput<$PrismaModel>
    not?: NestedEnumJurusanWithAggregatesFilter<$PrismaModel> | $Enums.Jurusan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJurusanFilter<$PrismaModel>
    _max?: NestedEnumJurusanFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusLokasiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLokasi | EnumStatusLokasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusLokasiFilter<$PrismaModel> | $Enums.StatusLokasi
  }

  export type NestedEnumStatusLokasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLokasi | EnumStatusLokasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusLokasi[] | ListEnumStatusLokasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusLokasiWithAggregatesFilter<$PrismaModel> | $Enums.StatusLokasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusLokasiFilter<$PrismaModel>
    _max?: NestedEnumStatusLokasiFilter<$PrismaModel>
  }

  export type NestedEnumStatusBFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusB | EnumStatusBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBFilter<$PrismaModel> | $Enums.StatusB
  }

  export type NestedEnumStatusBWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusB | EnumStatusBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusB[] | ListEnumStatusBFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBWithAggregatesFilter<$PrismaModel> | $Enums.StatusB
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBFilter<$PrismaModel>
    _max?: NestedEnumStatusBFilter<$PrismaModel>
  }

  export type NestedEnumStatusBookingFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBooking | EnumStatusBookingFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBookingFilter<$PrismaModel> | $Enums.StatusBooking
  }

  export type NestedEnumStatusPFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusP | EnumStatusPFieldRefInput<$PrismaModel>
    in?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPFilter<$PrismaModel> | $Enums.StatusP
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusBookingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBooking | EnumStatusBookingFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBooking[] | ListEnumStatusBookingFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBookingWithAggregatesFilter<$PrismaModel> | $Enums.StatusBooking
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBookingFilter<$PrismaModel>
    _max?: NestedEnumStatusBookingFilter<$PrismaModel>
  }

  export type NestedEnumStatusPWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusP | EnumStatusPFieldRefInput<$PrismaModel>
    in?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusP[] | ListEnumStatusPFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPWithAggregatesFilter<$PrismaModel> | $Enums.StatusP
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPFilter<$PrismaModel>
    _max?: NestedEnumStatusPFilter<$PrismaModel>
  }

  export type NestedEnumKondisiBarangMFilter<$PrismaModel = never> = {
    equals?: $Enums.KondisiBarangM | EnumKondisiBarangMFieldRefInput<$PrismaModel>
    in?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    notIn?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiBarangMFilter<$PrismaModel> | $Enums.KondisiBarangM
  }

  export type NestedEnumKondisiBarangMWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KondisiBarangM | EnumKondisiBarangMFieldRefInput<$PrismaModel>
    in?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    notIn?: $Enums.KondisiBarangM[] | ListEnumKondisiBarangMFieldRefInput<$PrismaModel>
    not?: NestedEnumKondisiBarangMWithAggregatesFilter<$PrismaModel> | $Enums.KondisiBarangM
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKondisiBarangMFilter<$PrismaModel>
    _max?: NestedEnumKondisiBarangMFilter<$PrismaModel>
  }

  export type BarangUnitCreateWithoutUserInput = {
    nup: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    dataBarang: DataBarangCreateNestedOneWithoutBarangUnitInput
    dataLokasi: DataLokasiCreateNestedOneWithoutBarangUnitInput
    monitoring?: MonitoringCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitUncheckedCreateWithoutUserInput = {
    nup: string
    kodeBarang: string
    lokasi: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemUncheckedCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitCreateOrConnectWithoutUserInput = {
    where: BarangUnitWhereUniqueInput
    create: XOR<BarangUnitCreateWithoutUserInput, BarangUnitUncheckedCreateWithoutUserInput>
  }

  export type BarangUnitCreateManyUserInputEnvelope = {
    data: BarangUnitCreateManyUserInput | BarangUnitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanPCreateWithoutUserInput = {
    barangUnitId?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNCreateNestedManyWithoutPeminjamanInput
    items?: PeminjamanItemCreateNestedManyWithoutPeminjamanInput
    lokasi?: DataLokasiCreateNestedOneWithoutPeminjamanPInput
  }

  export type PeminjamanPUncheckedCreateWithoutUserInput = {
    id?: number
    barangUnitId?: string | null
    kodeLokasi?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNUncheckedCreateNestedManyWithoutPeminjamanInput
    items?: PeminjamanItemUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanPCreateOrConnectWithoutUserInput = {
    where: PeminjamanPWhereUniqueInput
    create: XOR<PeminjamanPCreateWithoutUserInput, PeminjamanPUncheckedCreateWithoutUserInput>
  }

  export type PeminjamanPCreateManyUserInputEnvelope = {
    data: PeminjamanPCreateManyUserInput | PeminjamanPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BarangUnitUpsertWithWhereUniqueWithoutUserInput = {
    where: BarangUnitWhereUniqueInput
    update: XOR<BarangUnitUpdateWithoutUserInput, BarangUnitUncheckedUpdateWithoutUserInput>
    create: XOR<BarangUnitCreateWithoutUserInput, BarangUnitUncheckedCreateWithoutUserInput>
  }

  export type BarangUnitUpdateWithWhereUniqueWithoutUserInput = {
    where: BarangUnitWhereUniqueInput
    data: XOR<BarangUnitUpdateWithoutUserInput, BarangUnitUncheckedUpdateWithoutUserInput>
  }

  export type BarangUnitUpdateManyWithWhereWithoutUserInput = {
    where: BarangUnitScalarWhereInput
    data: XOR<BarangUnitUpdateManyMutationInput, BarangUnitUncheckedUpdateManyWithoutUserInput>
  }

  export type BarangUnitScalarWhereInput = {
    AND?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
    OR?: BarangUnitScalarWhereInput[]
    NOT?: BarangUnitScalarWhereInput | BarangUnitScalarWhereInput[]
    nup?: StringFilter<"BarangUnit"> | string
    kodeBarang?: StringFilter<"BarangUnit"> | string
    lokasi?: StringFilter<"BarangUnit"> | string
    nikUser?: StringFilter<"BarangUnit"> | string
    status?: EnumStatusBFilter<"BarangUnit"> | $Enums.StatusB
    jurusan?: EnumJurusanFilter<"BarangUnit"> | $Enums.Jurusan
    createdAt?: DateTimeFilter<"BarangUnit"> | Date | string
  }

  export type PeminjamanPUpsertWithWhereUniqueWithoutUserInput = {
    where: PeminjamanPWhereUniqueInput
    update: XOR<PeminjamanPUpdateWithoutUserInput, PeminjamanPUncheckedUpdateWithoutUserInput>
    create: XOR<PeminjamanPCreateWithoutUserInput, PeminjamanPUncheckedCreateWithoutUserInput>
  }

  export type PeminjamanPUpdateWithWhereUniqueWithoutUserInput = {
    where: PeminjamanPWhereUniqueInput
    data: XOR<PeminjamanPUpdateWithoutUserInput, PeminjamanPUncheckedUpdateWithoutUserInput>
  }

  export type PeminjamanPUpdateManyWithWhereWithoutUserInput = {
    where: PeminjamanPScalarWhereInput
    data: XOR<PeminjamanPUpdateManyMutationInput, PeminjamanPUncheckedUpdateManyWithoutUserInput>
  }

  export type PeminjamanPScalarWhereInput = {
    AND?: PeminjamanPScalarWhereInput | PeminjamanPScalarWhereInput[]
    OR?: PeminjamanPScalarWhereInput[]
    NOT?: PeminjamanPScalarWhereInput | PeminjamanPScalarWhereInput[]
    id?: IntFilter<"PeminjamanP"> | number
    userNik?: StringFilter<"PeminjamanP"> | string
    barangUnitId?: StringNullableFilter<"PeminjamanP"> | string | null
    kodeLokasi?: StringNullableFilter<"PeminjamanP"> | string | null
    lokasiTambahan?: StringNullableFilter<"PeminjamanP"> | string | null
    no_hp?: StringFilter<"PeminjamanP"> | string
    createdAt?: DateTimeFilter<"PeminjamanP"> | Date | string
    Agenda?: StringFilter<"PeminjamanP"> | string
    waktuMulai?: DateTimeFilter<"PeminjamanP"> | Date | string
    waktuSelesai?: DateTimeFilter<"PeminjamanP"> | Date | string
    verifikasi?: EnumStatusBookingFilter<"PeminjamanP"> | $Enums.StatusBooking
    status?: EnumStatusPFilter<"PeminjamanP"> | $Enums.StatusP
    qrCode?: StringNullableFilter<"PeminjamanP"> | string | null
    waktuAmbil?: DateTimeNullableFilter<"PeminjamanP"> | Date | string | null
    waktuKembali?: DateTimeNullableFilter<"PeminjamanP"> | Date | string | null
  }

  export type BarangUnitCreateWithoutDataBarangInput = {
    nup: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    dataLokasi: DataLokasiCreateNestedOneWithoutBarangUnitInput
    user: UserCreateNestedOneWithoutBarangUnitInput
    monitoring?: MonitoringCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitUncheckedCreateWithoutDataBarangInput = {
    nup: string
    lokasi: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemUncheckedCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitCreateOrConnectWithoutDataBarangInput = {
    where: BarangUnitWhereUniqueInput
    create: XOR<BarangUnitCreateWithoutDataBarangInput, BarangUnitUncheckedCreateWithoutDataBarangInput>
  }

  export type BarangUnitCreateManyDataBarangInputEnvelope = {
    data: BarangUnitCreateManyDataBarangInput | BarangUnitCreateManyDataBarangInput[]
    skipDuplicates?: boolean
  }

  export type BarangUnitUpsertWithWhereUniqueWithoutDataBarangInput = {
    where: BarangUnitWhereUniqueInput
    update: XOR<BarangUnitUpdateWithoutDataBarangInput, BarangUnitUncheckedUpdateWithoutDataBarangInput>
    create: XOR<BarangUnitCreateWithoutDataBarangInput, BarangUnitUncheckedCreateWithoutDataBarangInput>
  }

  export type BarangUnitUpdateWithWhereUniqueWithoutDataBarangInput = {
    where: BarangUnitWhereUniqueInput
    data: XOR<BarangUnitUpdateWithoutDataBarangInput, BarangUnitUncheckedUpdateWithoutDataBarangInput>
  }

  export type BarangUnitUpdateManyWithWhereWithoutDataBarangInput = {
    where: BarangUnitScalarWhereInput
    data: XOR<BarangUnitUpdateManyMutationInput, BarangUnitUncheckedUpdateManyWithoutDataBarangInput>
  }

  export type BarangUnitCreateWithoutDataLokasiInput = {
    nup: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    dataBarang: DataBarangCreateNestedOneWithoutBarangUnitInput
    user: UserCreateNestedOneWithoutBarangUnitInput
    monitoring?: MonitoringCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitUncheckedCreateWithoutDataLokasiInput = {
    nup: string
    kodeBarang: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemUncheckedCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitCreateOrConnectWithoutDataLokasiInput = {
    where: BarangUnitWhereUniqueInput
    create: XOR<BarangUnitCreateWithoutDataLokasiInput, BarangUnitUncheckedCreateWithoutDataLokasiInput>
  }

  export type BarangUnitCreateManyDataLokasiInputEnvelope = {
    data: BarangUnitCreateManyDataLokasiInput | BarangUnitCreateManyDataLokasiInput[]
    skipDuplicates?: boolean
  }

  export type MonitoringCreateWithoutDataLokasiInput = {
    id: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
    barangUnit: BarangUnitCreateNestedOneWithoutMonitoringInput
  }

  export type MonitoringUncheckedCreateWithoutDataLokasiInput = {
    id: string
    nupBarang: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
  }

  export type MonitoringCreateOrConnectWithoutDataLokasiInput = {
    where: MonitoringWhereUniqueInput
    create: XOR<MonitoringCreateWithoutDataLokasiInput, MonitoringUncheckedCreateWithoutDataLokasiInput>
  }

  export type MonitoringCreateManyDataLokasiInputEnvelope = {
    data: MonitoringCreateManyDataLokasiInput | MonitoringCreateManyDataLokasiInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanPCreateWithoutLokasiInput = {
    barangUnitId?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNCreateNestedManyWithoutPeminjamanInput
    items?: PeminjamanItemCreateNestedManyWithoutPeminjamanInput
    user: UserCreateNestedOneWithoutPeminjamanPInput
  }

  export type PeminjamanPUncheckedCreateWithoutLokasiInput = {
    id?: number
    userNik: string
    barangUnitId?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNUncheckedCreateNestedManyWithoutPeminjamanInput
    items?: PeminjamanItemUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanPCreateOrConnectWithoutLokasiInput = {
    where: PeminjamanPWhereUniqueInput
    create: XOR<PeminjamanPCreateWithoutLokasiInput, PeminjamanPUncheckedCreateWithoutLokasiInput>
  }

  export type PeminjamanPCreateManyLokasiInputEnvelope = {
    data: PeminjamanPCreateManyLokasiInput | PeminjamanPCreateManyLokasiInput[]
    skipDuplicates?: boolean
  }

  export type BarangUnitUpsertWithWhereUniqueWithoutDataLokasiInput = {
    where: BarangUnitWhereUniqueInput
    update: XOR<BarangUnitUpdateWithoutDataLokasiInput, BarangUnitUncheckedUpdateWithoutDataLokasiInput>
    create: XOR<BarangUnitCreateWithoutDataLokasiInput, BarangUnitUncheckedCreateWithoutDataLokasiInput>
  }

  export type BarangUnitUpdateWithWhereUniqueWithoutDataLokasiInput = {
    where: BarangUnitWhereUniqueInput
    data: XOR<BarangUnitUpdateWithoutDataLokasiInput, BarangUnitUncheckedUpdateWithoutDataLokasiInput>
  }

  export type BarangUnitUpdateManyWithWhereWithoutDataLokasiInput = {
    where: BarangUnitScalarWhereInput
    data: XOR<BarangUnitUpdateManyMutationInput, BarangUnitUncheckedUpdateManyWithoutDataLokasiInput>
  }

  export type MonitoringUpsertWithWhereUniqueWithoutDataLokasiInput = {
    where: MonitoringWhereUniqueInput
    update: XOR<MonitoringUpdateWithoutDataLokasiInput, MonitoringUncheckedUpdateWithoutDataLokasiInput>
    create: XOR<MonitoringCreateWithoutDataLokasiInput, MonitoringUncheckedCreateWithoutDataLokasiInput>
  }

  export type MonitoringUpdateWithWhereUniqueWithoutDataLokasiInput = {
    where: MonitoringWhereUniqueInput
    data: XOR<MonitoringUpdateWithoutDataLokasiInput, MonitoringUncheckedUpdateWithoutDataLokasiInput>
  }

  export type MonitoringUpdateManyWithWhereWithoutDataLokasiInput = {
    where: MonitoringScalarWhereInput
    data: XOR<MonitoringUpdateManyMutationInput, MonitoringUncheckedUpdateManyWithoutDataLokasiInput>
  }

  export type MonitoringScalarWhereInput = {
    AND?: MonitoringScalarWhereInput | MonitoringScalarWhereInput[]
    OR?: MonitoringScalarWhereInput[]
    NOT?: MonitoringScalarWhereInput | MonitoringScalarWhereInput[]
    id?: StringFilter<"Monitoring"> | string
    nupBarang?: StringFilter<"Monitoring"> | string
    waktu?: DateTimeFilter<"Monitoring"> | Date | string
    plt?: StringFilter<"Monitoring"> | string
    kondisiBarang?: EnumKondisiBarangMFilter<"Monitoring"> | $Enums.KondisiBarangM
    lokasiBarang?: StringNullableFilter<"Monitoring"> | string | null
    lokasiTambahan?: StringNullableFilter<"Monitoring"> | string | null
    foto?: StringFilter<"Monitoring"> | string
    keterangan?: StringNullableFilter<"Monitoring"> | string | null
  }

  export type PeminjamanPUpsertWithWhereUniqueWithoutLokasiInput = {
    where: PeminjamanPWhereUniqueInput
    update: XOR<PeminjamanPUpdateWithoutLokasiInput, PeminjamanPUncheckedUpdateWithoutLokasiInput>
    create: XOR<PeminjamanPCreateWithoutLokasiInput, PeminjamanPUncheckedCreateWithoutLokasiInput>
  }

  export type PeminjamanPUpdateWithWhereUniqueWithoutLokasiInput = {
    where: PeminjamanPWhereUniqueInput
    data: XOR<PeminjamanPUpdateWithoutLokasiInput, PeminjamanPUncheckedUpdateWithoutLokasiInput>
  }

  export type PeminjamanPUpdateManyWithWhereWithoutLokasiInput = {
    where: PeminjamanPScalarWhereInput
    data: XOR<PeminjamanPUpdateManyMutationInput, PeminjamanPUncheckedUpdateManyWithoutLokasiInput>
  }

  export type DataBarangCreateWithoutBarangUnitInput = {
    kode_barang: string
    jenis_barang: string
    merek: string
  }

  export type DataBarangUncheckedCreateWithoutBarangUnitInput = {
    kode_barang: string
    jenis_barang: string
    merek: string
  }

  export type DataBarangCreateOrConnectWithoutBarangUnitInput = {
    where: DataBarangWhereUniqueInput
    create: XOR<DataBarangCreateWithoutBarangUnitInput, DataBarangUncheckedCreateWithoutBarangUnitInput>
  }

  export type DataLokasiCreateWithoutBarangUnitInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    monitoring?: MonitoringCreateNestedManyWithoutDataLokasiInput
    peminjamanP?: PeminjamanPCreateNestedManyWithoutLokasiInput
  }

  export type DataLokasiUncheckedCreateWithoutBarangUnitInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutDataLokasiInput
    peminjamanP?: PeminjamanPUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type DataLokasiCreateOrConnectWithoutBarangUnitInput = {
    where: DataLokasiWhereUniqueInput
    create: XOR<DataLokasiCreateWithoutBarangUnitInput, DataLokasiUncheckedCreateWithoutBarangUnitInput>
  }

  export type UserCreateWithoutBarangUnitInput = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan?: $Enums.Jurusan
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    nomor_identitas_tunggal: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    peminjamanP?: PeminjamanPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBarangUnitInput = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan?: $Enums.Jurusan
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    nomor_identitas_tunggal: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    peminjamanP?: PeminjamanPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBarangUnitInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBarangUnitInput, UserUncheckedCreateWithoutBarangUnitInput>
  }

  export type MonitoringCreateWithoutBarangUnitInput = {
    id: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
    dataLokasi?: DataLokasiCreateNestedOneWithoutMonitoringInput
  }

  export type MonitoringUncheckedCreateWithoutBarangUnitInput = {
    id: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiBarang?: string | null
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
  }

  export type MonitoringCreateOrConnectWithoutBarangUnitInput = {
    where: MonitoringWhereUniqueInput
    create: XOR<MonitoringCreateWithoutBarangUnitInput, MonitoringUncheckedCreateWithoutBarangUnitInput>
  }

  export type MonitoringCreateManyBarangUnitInputEnvelope = {
    data: MonitoringCreateManyBarangUnitInput | MonitoringCreateManyBarangUnitInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanItemCreateWithoutBarangUnitInput = {
    peminjaman: PeminjamanPCreateNestedOneWithoutItemsInput
  }

  export type PeminjamanItemUncheckedCreateWithoutBarangUnitInput = {
    id?: number
    peminjamanId: number
  }

  export type PeminjamanItemCreateOrConnectWithoutBarangUnitInput = {
    where: PeminjamanItemWhereUniqueInput
    create: XOR<PeminjamanItemCreateWithoutBarangUnitInput, PeminjamanItemUncheckedCreateWithoutBarangUnitInput>
  }

  export type PeminjamanItemCreateManyBarangUnitInputEnvelope = {
    data: PeminjamanItemCreateManyBarangUnitInput | PeminjamanItemCreateManyBarangUnitInput[]
    skipDuplicates?: boolean
  }

  export type DataBarangUpsertWithoutBarangUnitInput = {
    update: XOR<DataBarangUpdateWithoutBarangUnitInput, DataBarangUncheckedUpdateWithoutBarangUnitInput>
    create: XOR<DataBarangCreateWithoutBarangUnitInput, DataBarangUncheckedCreateWithoutBarangUnitInput>
    where?: DataBarangWhereInput
  }

  export type DataBarangUpdateToOneWithWhereWithoutBarangUnitInput = {
    where?: DataBarangWhereInput
    data: XOR<DataBarangUpdateWithoutBarangUnitInput, DataBarangUncheckedUpdateWithoutBarangUnitInput>
  }

  export type DataBarangUpdateWithoutBarangUnitInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type DataBarangUncheckedUpdateWithoutBarangUnitInput = {
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type DataLokasiUpsertWithoutBarangUnitInput = {
    update: XOR<DataLokasiUpdateWithoutBarangUnitInput, DataLokasiUncheckedUpdateWithoutBarangUnitInput>
    create: XOR<DataLokasiCreateWithoutBarangUnitInput, DataLokasiUncheckedCreateWithoutBarangUnitInput>
    where?: DataLokasiWhereInput
  }

  export type DataLokasiUpdateToOneWithWhereWithoutBarangUnitInput = {
    where?: DataLokasiWhereInput
    data: XOR<DataLokasiUpdateWithoutBarangUnitInput, DataLokasiUncheckedUpdateWithoutBarangUnitInput>
  }

  export type DataLokasiUpdateWithoutBarangUnitInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    monitoring?: MonitoringUpdateManyWithoutDataLokasiNestedInput
    peminjamanP?: PeminjamanPUpdateManyWithoutLokasiNestedInput
  }

  export type DataLokasiUncheckedUpdateWithoutBarangUnitInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    monitoring?: MonitoringUncheckedUpdateManyWithoutDataLokasiNestedInput
    peminjamanP?: PeminjamanPUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type UserUpsertWithoutBarangUnitInput = {
    update: XOR<UserUpdateWithoutBarangUnitInput, UserUncheckedUpdateWithoutBarangUnitInput>
    create: XOR<UserCreateWithoutBarangUnitInput, UserUncheckedCreateWithoutBarangUnitInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBarangUnitInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBarangUnitInput, UserUncheckedUpdateWithoutBarangUnitInput>
  }

  export type UserUpdateWithoutBarangUnitInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peminjamanP?: PeminjamanPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBarangUnitInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peminjamanP?: PeminjamanPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MonitoringUpsertWithWhereUniqueWithoutBarangUnitInput = {
    where: MonitoringWhereUniqueInput
    update: XOR<MonitoringUpdateWithoutBarangUnitInput, MonitoringUncheckedUpdateWithoutBarangUnitInput>
    create: XOR<MonitoringCreateWithoutBarangUnitInput, MonitoringUncheckedCreateWithoutBarangUnitInput>
  }

  export type MonitoringUpdateWithWhereUniqueWithoutBarangUnitInput = {
    where: MonitoringWhereUniqueInput
    data: XOR<MonitoringUpdateWithoutBarangUnitInput, MonitoringUncheckedUpdateWithoutBarangUnitInput>
  }

  export type MonitoringUpdateManyWithWhereWithoutBarangUnitInput = {
    where: MonitoringScalarWhereInput
    data: XOR<MonitoringUpdateManyMutationInput, MonitoringUncheckedUpdateManyWithoutBarangUnitInput>
  }

  export type PeminjamanItemUpsertWithWhereUniqueWithoutBarangUnitInput = {
    where: PeminjamanItemWhereUniqueInput
    update: XOR<PeminjamanItemUpdateWithoutBarangUnitInput, PeminjamanItemUncheckedUpdateWithoutBarangUnitInput>
    create: XOR<PeminjamanItemCreateWithoutBarangUnitInput, PeminjamanItemUncheckedCreateWithoutBarangUnitInput>
  }

  export type PeminjamanItemUpdateWithWhereUniqueWithoutBarangUnitInput = {
    where: PeminjamanItemWhereUniqueInput
    data: XOR<PeminjamanItemUpdateWithoutBarangUnitInput, PeminjamanItemUncheckedUpdateWithoutBarangUnitInput>
  }

  export type PeminjamanItemUpdateManyWithWhereWithoutBarangUnitInput = {
    where: PeminjamanItemScalarWhereInput
    data: XOR<PeminjamanItemUpdateManyMutationInput, PeminjamanItemUncheckedUpdateManyWithoutBarangUnitInput>
  }

  export type PeminjamanItemScalarWhereInput = {
    AND?: PeminjamanItemScalarWhereInput | PeminjamanItemScalarWhereInput[]
    OR?: PeminjamanItemScalarWhereInput[]
    NOT?: PeminjamanItemScalarWhereInput | PeminjamanItemScalarWhereInput[]
    id?: IntFilter<"PeminjamanItem"> | number
    peminjamanId?: IntFilter<"PeminjamanItem"> | number
    nupBarang?: StringFilter<"PeminjamanItem"> | string
  }

  export type LogScanBMNCreateWithoutPeminjamanInput = {
    jenis: string
    waktuScan?: Date | string
    petugasNik: string
    keterangan?: string | null
  }

  export type LogScanBMNUncheckedCreateWithoutPeminjamanInput = {
    id?: number
    jenis: string
    waktuScan?: Date | string
    petugasNik: string
    keterangan?: string | null
  }

  export type LogScanBMNCreateOrConnectWithoutPeminjamanInput = {
    where: LogScanBMNWhereUniqueInput
    create: XOR<LogScanBMNCreateWithoutPeminjamanInput, LogScanBMNUncheckedCreateWithoutPeminjamanInput>
  }

  export type LogScanBMNCreateManyPeminjamanInputEnvelope = {
    data: LogScanBMNCreateManyPeminjamanInput | LogScanBMNCreateManyPeminjamanInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanItemCreateWithoutPeminjamanInput = {
    barangUnit: BarangUnitCreateNestedOneWithoutPeminjamanItemsInput
  }

  export type PeminjamanItemUncheckedCreateWithoutPeminjamanInput = {
    id?: number
    nupBarang: string
  }

  export type PeminjamanItemCreateOrConnectWithoutPeminjamanInput = {
    where: PeminjamanItemWhereUniqueInput
    create: XOR<PeminjamanItemCreateWithoutPeminjamanInput, PeminjamanItemUncheckedCreateWithoutPeminjamanInput>
  }

  export type PeminjamanItemCreateManyPeminjamanInputEnvelope = {
    data: PeminjamanItemCreateManyPeminjamanInput | PeminjamanItemCreateManyPeminjamanInput[]
    skipDuplicates?: boolean
  }

  export type DataLokasiCreateWithoutPeminjamanPInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    barangUnit?: BarangUnitCreateNestedManyWithoutDataLokasiInput
    monitoring?: MonitoringCreateNestedManyWithoutDataLokasiInput
  }

  export type DataLokasiUncheckedCreateWithoutPeminjamanPInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    barangUnit?: BarangUnitUncheckedCreateNestedManyWithoutDataLokasiInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutDataLokasiInput
  }

  export type DataLokasiCreateOrConnectWithoutPeminjamanPInput = {
    where: DataLokasiWhereUniqueInput
    create: XOR<DataLokasiCreateWithoutPeminjamanPInput, DataLokasiUncheckedCreateWithoutPeminjamanPInput>
  }

  export type UserCreateWithoutPeminjamanPInput = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan?: $Enums.Jurusan
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    nomor_identitas_tunggal: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    barangUnit?: BarangUnitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPeminjamanPInput = {
    nama: string
    nik: string
    email: string
    password: string
    jurusan?: $Enums.Jurusan
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    nomor_identitas_tunggal: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    barangUnit?: BarangUnitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPeminjamanPInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPeminjamanPInput, UserUncheckedCreateWithoutPeminjamanPInput>
  }

  export type LogScanBMNUpsertWithWhereUniqueWithoutPeminjamanInput = {
    where: LogScanBMNWhereUniqueInput
    update: XOR<LogScanBMNUpdateWithoutPeminjamanInput, LogScanBMNUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<LogScanBMNCreateWithoutPeminjamanInput, LogScanBMNUncheckedCreateWithoutPeminjamanInput>
  }

  export type LogScanBMNUpdateWithWhereUniqueWithoutPeminjamanInput = {
    where: LogScanBMNWhereUniqueInput
    data: XOR<LogScanBMNUpdateWithoutPeminjamanInput, LogScanBMNUncheckedUpdateWithoutPeminjamanInput>
  }

  export type LogScanBMNUpdateManyWithWhereWithoutPeminjamanInput = {
    where: LogScanBMNScalarWhereInput
    data: XOR<LogScanBMNUpdateManyMutationInput, LogScanBMNUncheckedUpdateManyWithoutPeminjamanInput>
  }

  export type LogScanBMNScalarWhereInput = {
    AND?: LogScanBMNScalarWhereInput | LogScanBMNScalarWhereInput[]
    OR?: LogScanBMNScalarWhereInput[]
    NOT?: LogScanBMNScalarWhereInput | LogScanBMNScalarWhereInput[]
    id?: IntFilter<"LogScanBMN"> | number
    peminjamanId?: IntFilter<"LogScanBMN"> | number
    jenis?: StringFilter<"LogScanBMN"> | string
    waktuScan?: DateTimeFilter<"LogScanBMN"> | Date | string
    petugasNik?: StringFilter<"LogScanBMN"> | string
    keterangan?: StringNullableFilter<"LogScanBMN"> | string | null
  }

  export type PeminjamanItemUpsertWithWhereUniqueWithoutPeminjamanInput = {
    where: PeminjamanItemWhereUniqueInput
    update: XOR<PeminjamanItemUpdateWithoutPeminjamanInput, PeminjamanItemUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<PeminjamanItemCreateWithoutPeminjamanInput, PeminjamanItemUncheckedCreateWithoutPeminjamanInput>
  }

  export type PeminjamanItemUpdateWithWhereUniqueWithoutPeminjamanInput = {
    where: PeminjamanItemWhereUniqueInput
    data: XOR<PeminjamanItemUpdateWithoutPeminjamanInput, PeminjamanItemUncheckedUpdateWithoutPeminjamanInput>
  }

  export type PeminjamanItemUpdateManyWithWhereWithoutPeminjamanInput = {
    where: PeminjamanItemScalarWhereInput
    data: XOR<PeminjamanItemUpdateManyMutationInput, PeminjamanItemUncheckedUpdateManyWithoutPeminjamanInput>
  }

  export type DataLokasiUpsertWithoutPeminjamanPInput = {
    update: XOR<DataLokasiUpdateWithoutPeminjamanPInput, DataLokasiUncheckedUpdateWithoutPeminjamanPInput>
    create: XOR<DataLokasiCreateWithoutPeminjamanPInput, DataLokasiUncheckedCreateWithoutPeminjamanPInput>
    where?: DataLokasiWhereInput
  }

  export type DataLokasiUpdateToOneWithWhereWithoutPeminjamanPInput = {
    where?: DataLokasiWhereInput
    data: XOR<DataLokasiUpdateWithoutPeminjamanPInput, DataLokasiUncheckedUpdateWithoutPeminjamanPInput>
  }

  export type DataLokasiUpdateWithoutPeminjamanPInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    barangUnit?: BarangUnitUpdateManyWithoutDataLokasiNestedInput
    monitoring?: MonitoringUpdateManyWithoutDataLokasiNestedInput
  }

  export type DataLokasiUncheckedUpdateWithoutPeminjamanPInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    barangUnit?: BarangUnitUncheckedUpdateManyWithoutDataLokasiNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutDataLokasiNestedInput
  }

  export type UserUpsertWithoutPeminjamanPInput = {
    update: XOR<UserUpdateWithoutPeminjamanPInput, UserUncheckedUpdateWithoutPeminjamanPInput>
    create: XOR<UserCreateWithoutPeminjamanPInput, UserUncheckedCreateWithoutPeminjamanPInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPeminjamanPInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPeminjamanPInput, UserUncheckedUpdateWithoutPeminjamanPInput>
  }

  export type UserUpdateWithoutPeminjamanPInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barangUnit?: BarangUnitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPeminjamanPInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nomor_identitas_tunggal?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barangUnit?: BarangUnitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PeminjamanPCreateWithoutLogScanBMNInput = {
    barangUnitId?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    items?: PeminjamanItemCreateNestedManyWithoutPeminjamanInput
    lokasi?: DataLokasiCreateNestedOneWithoutPeminjamanPInput
    user: UserCreateNestedOneWithoutPeminjamanPInput
  }

  export type PeminjamanPUncheckedCreateWithoutLogScanBMNInput = {
    id?: number
    userNik: string
    barangUnitId?: string | null
    kodeLokasi?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    items?: PeminjamanItemUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanPCreateOrConnectWithoutLogScanBMNInput = {
    where: PeminjamanPWhereUniqueInput
    create: XOR<PeminjamanPCreateWithoutLogScanBMNInput, PeminjamanPUncheckedCreateWithoutLogScanBMNInput>
  }

  export type PeminjamanPUpsertWithoutLogScanBMNInput = {
    update: XOR<PeminjamanPUpdateWithoutLogScanBMNInput, PeminjamanPUncheckedUpdateWithoutLogScanBMNInput>
    create: XOR<PeminjamanPCreateWithoutLogScanBMNInput, PeminjamanPUncheckedCreateWithoutLogScanBMNInput>
    where?: PeminjamanPWhereInput
  }

  export type PeminjamanPUpdateToOneWithWhereWithoutLogScanBMNInput = {
    where?: PeminjamanPWhereInput
    data: XOR<PeminjamanPUpdateWithoutLogScanBMNInput, PeminjamanPUncheckedUpdateWithoutLogScanBMNInput>
  }

  export type PeminjamanPUpdateWithoutLogScanBMNInput = {
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: PeminjamanItemUpdateManyWithoutPeminjamanNestedInput
    lokasi?: DataLokasiUpdateOneWithoutPeminjamanPNestedInput
    user?: UserUpdateOneRequiredWithoutPeminjamanPNestedInput
  }

  export type PeminjamanPUncheckedUpdateWithoutLogScanBMNInput = {
    id?: IntFieldUpdateOperationsInput | number
    userNik?: StringFieldUpdateOperationsInput | string
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    kodeLokasi?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: PeminjamanItemUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type BarangUnitCreateWithoutPeminjamanItemsInput = {
    nup: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    dataBarang: DataBarangCreateNestedOneWithoutBarangUnitInput
    dataLokasi: DataLokasiCreateNestedOneWithoutBarangUnitInput
    user: UserCreateNestedOneWithoutBarangUnitInput
    monitoring?: MonitoringCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitUncheckedCreateWithoutPeminjamanItemsInput = {
    nup: string
    kodeBarang: string
    lokasi: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitCreateOrConnectWithoutPeminjamanItemsInput = {
    where: BarangUnitWhereUniqueInput
    create: XOR<BarangUnitCreateWithoutPeminjamanItemsInput, BarangUnitUncheckedCreateWithoutPeminjamanItemsInput>
  }

  export type PeminjamanPCreateWithoutItemsInput = {
    barangUnitId?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNCreateNestedManyWithoutPeminjamanInput
    lokasi?: DataLokasiCreateNestedOneWithoutPeminjamanPInput
    user: UserCreateNestedOneWithoutPeminjamanPInput
  }

  export type PeminjamanPUncheckedCreateWithoutItemsInput = {
    id?: number
    userNik: string
    barangUnitId?: string | null
    kodeLokasi?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
    logScanBMN?: LogScanBMNUncheckedCreateNestedManyWithoutPeminjamanInput
  }

  export type PeminjamanPCreateOrConnectWithoutItemsInput = {
    where: PeminjamanPWhereUniqueInput
    create: XOR<PeminjamanPCreateWithoutItemsInput, PeminjamanPUncheckedCreateWithoutItemsInput>
  }

  export type BarangUnitUpsertWithoutPeminjamanItemsInput = {
    update: XOR<BarangUnitUpdateWithoutPeminjamanItemsInput, BarangUnitUncheckedUpdateWithoutPeminjamanItemsInput>
    create: XOR<BarangUnitCreateWithoutPeminjamanItemsInput, BarangUnitUncheckedCreateWithoutPeminjamanItemsInput>
    where?: BarangUnitWhereInput
  }

  export type BarangUnitUpdateToOneWithWhereWithoutPeminjamanItemsInput = {
    where?: BarangUnitWhereInput
    data: XOR<BarangUnitUpdateWithoutPeminjamanItemsInput, BarangUnitUncheckedUpdateWithoutPeminjamanItemsInput>
  }

  export type BarangUnitUpdateWithoutPeminjamanItemsInput = {
    nup?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataBarang?: DataBarangUpdateOneRequiredWithoutBarangUnitNestedInput
    dataLokasi?: DataLokasiUpdateOneRequiredWithoutBarangUnitNestedInput
    user?: UserUpdateOneRequiredWithoutBarangUnitNestedInput
    monitoring?: MonitoringUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateWithoutPeminjamanItemsInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoring?: MonitoringUncheckedUpdateManyWithoutBarangUnitNestedInput
  }

  export type PeminjamanPUpsertWithoutItemsInput = {
    update: XOR<PeminjamanPUpdateWithoutItemsInput, PeminjamanPUncheckedUpdateWithoutItemsInput>
    create: XOR<PeminjamanPCreateWithoutItemsInput, PeminjamanPUncheckedCreateWithoutItemsInput>
    where?: PeminjamanPWhereInput
  }

  export type PeminjamanPUpdateToOneWithWhereWithoutItemsInput = {
    where?: PeminjamanPWhereInput
    data: XOR<PeminjamanPUpdateWithoutItemsInput, PeminjamanPUncheckedUpdateWithoutItemsInput>
  }

  export type PeminjamanPUpdateWithoutItemsInput = {
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUpdateManyWithoutPeminjamanNestedInput
    lokasi?: DataLokasiUpdateOneWithoutPeminjamanPNestedInput
    user?: UserUpdateOneRequiredWithoutPeminjamanPNestedInput
  }

  export type PeminjamanPUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userNik?: StringFieldUpdateOperationsInput | string
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    kodeLokasi?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type DataLokasiCreateWithoutMonitoringInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    barangUnit?: BarangUnitCreateNestedManyWithoutDataLokasiInput
    peminjamanP?: PeminjamanPCreateNestedManyWithoutLokasiInput
  }

  export type DataLokasiUncheckedCreateWithoutMonitoringInput = {
    kode_lokasi: string
    lokasi: string
    jurusan?: $Enums.Jurusan
    status?: $Enums.StatusLokasi
    barangUnit?: BarangUnitUncheckedCreateNestedManyWithoutDataLokasiInput
    peminjamanP?: PeminjamanPUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type DataLokasiCreateOrConnectWithoutMonitoringInput = {
    where: DataLokasiWhereUniqueInput
    create: XOR<DataLokasiCreateWithoutMonitoringInput, DataLokasiUncheckedCreateWithoutMonitoringInput>
  }

  export type BarangUnitCreateWithoutMonitoringInput = {
    nup: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    dataBarang: DataBarangCreateNestedOneWithoutBarangUnitInput
    dataLokasi: DataLokasiCreateNestedOneWithoutBarangUnitInput
    user: UserCreateNestedOneWithoutBarangUnitInput
    peminjamanItems?: PeminjamanItemCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitUncheckedCreateWithoutMonitoringInput = {
    nup: string
    kodeBarang: string
    lokasi: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
    peminjamanItems?: PeminjamanItemUncheckedCreateNestedManyWithoutBarangUnitInput
  }

  export type BarangUnitCreateOrConnectWithoutMonitoringInput = {
    where: BarangUnitWhereUniqueInput
    create: XOR<BarangUnitCreateWithoutMonitoringInput, BarangUnitUncheckedCreateWithoutMonitoringInput>
  }

  export type DataLokasiUpsertWithoutMonitoringInput = {
    update: XOR<DataLokasiUpdateWithoutMonitoringInput, DataLokasiUncheckedUpdateWithoutMonitoringInput>
    create: XOR<DataLokasiCreateWithoutMonitoringInput, DataLokasiUncheckedCreateWithoutMonitoringInput>
    where?: DataLokasiWhereInput
  }

  export type DataLokasiUpdateToOneWithWhereWithoutMonitoringInput = {
    where?: DataLokasiWhereInput
    data: XOR<DataLokasiUpdateWithoutMonitoringInput, DataLokasiUncheckedUpdateWithoutMonitoringInput>
  }

  export type DataLokasiUpdateWithoutMonitoringInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    barangUnit?: BarangUnitUpdateManyWithoutDataLokasiNestedInput
    peminjamanP?: PeminjamanPUpdateManyWithoutLokasiNestedInput
  }

  export type DataLokasiUncheckedUpdateWithoutMonitoringInput = {
    kode_lokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    status?: EnumStatusLokasiFieldUpdateOperationsInput | $Enums.StatusLokasi
    barangUnit?: BarangUnitUncheckedUpdateManyWithoutDataLokasiNestedInput
    peminjamanP?: PeminjamanPUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type BarangUnitUpsertWithoutMonitoringInput = {
    update: XOR<BarangUnitUpdateWithoutMonitoringInput, BarangUnitUncheckedUpdateWithoutMonitoringInput>
    create: XOR<BarangUnitCreateWithoutMonitoringInput, BarangUnitUncheckedCreateWithoutMonitoringInput>
    where?: BarangUnitWhereInput
  }

  export type BarangUnitUpdateToOneWithWhereWithoutMonitoringInput = {
    where?: BarangUnitWhereInput
    data: XOR<BarangUnitUpdateWithoutMonitoringInput, BarangUnitUncheckedUpdateWithoutMonitoringInput>
  }

  export type BarangUnitUpdateWithoutMonitoringInput = {
    nup?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataBarang?: DataBarangUpdateOneRequiredWithoutBarangUnitNestedInput
    dataLokasi?: DataLokasiUpdateOneRequiredWithoutBarangUnitNestedInput
    user?: UserUpdateOneRequiredWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateWithoutMonitoringInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjamanItems?: PeminjamanItemUncheckedUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitCreateManyUserInput = {
    nup: string
    kodeBarang: string
    lokasi: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
  }

  export type PeminjamanPCreateManyUserInput = {
    id?: number
    barangUnitId?: string | null
    kodeLokasi?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
  }

  export type BarangUnitUpdateWithoutUserInput = {
    nup?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataBarang?: DataBarangUpdateOneRequiredWithoutBarangUnitNestedInput
    dataLokasi?: DataLokasiUpdateOneRequiredWithoutBarangUnitNestedInput
    monitoring?: MonitoringUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateWithoutUserInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoring?: MonitoringUncheckedUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUncheckedUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateManyWithoutUserInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanPUpdateWithoutUserInput = {
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUpdateManyWithoutPeminjamanNestedInput
    items?: PeminjamanItemUpdateManyWithoutPeminjamanNestedInput
    lokasi?: DataLokasiUpdateOneWithoutPeminjamanPNestedInput
  }

  export type PeminjamanPUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    kodeLokasi?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUncheckedUpdateManyWithoutPeminjamanNestedInput
    items?: PeminjamanItemUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanPUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    kodeLokasi?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BarangUnitCreateManyDataBarangInput = {
    nup: string
    lokasi: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
  }

  export type BarangUnitUpdateWithoutDataBarangInput = {
    nup?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataLokasi?: DataLokasiUpdateOneRequiredWithoutBarangUnitNestedInput
    user?: UserUpdateOneRequiredWithoutBarangUnitNestedInput
    monitoring?: MonitoringUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateWithoutDataBarangInput = {
    nup?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoring?: MonitoringUncheckedUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUncheckedUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateManyWithoutDataBarangInput = {
    nup?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangUnitCreateManyDataLokasiInput = {
    nup: string
    kodeBarang: string
    nikUser: string
    status?: $Enums.StatusB
    jurusan?: $Enums.Jurusan
    createdAt?: Date | string
  }

  export type MonitoringCreateManyDataLokasiInput = {
    id: string
    nupBarang: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
  }

  export type PeminjamanPCreateManyLokasiInput = {
    id?: number
    userNik: string
    barangUnitId?: string | null
    lokasiTambahan?: string | null
    no_hp: string
    createdAt?: Date | string
    Agenda: string
    waktuMulai: Date | string
    waktuSelesai: Date | string
    verifikasi?: $Enums.StatusBooking
    status?: $Enums.StatusP
    qrCode?: string | null
    waktuAmbil?: Date | string | null
    waktuKembali?: Date | string | null
  }

  export type BarangUnitUpdateWithoutDataLokasiInput = {
    nup?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataBarang?: DataBarangUpdateOneRequiredWithoutBarangUnitNestedInput
    user?: UserUpdateOneRequiredWithoutBarangUnitNestedInput
    monitoring?: MonitoringUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateWithoutDataLokasiInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoring?: MonitoringUncheckedUpdateManyWithoutBarangUnitNestedInput
    peminjamanItems?: PeminjamanItemUncheckedUpdateManyWithoutBarangUnitNestedInput
  }

  export type BarangUnitUncheckedUpdateManyWithoutDataLokasiInput = {
    nup?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    nikUser?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusBFieldUpdateOperationsInput | $Enums.StatusB
    jurusan?: EnumJurusanFieldUpdateOperationsInput | $Enums.Jurusan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringUpdateWithoutDataLokasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    barangUnit?: BarangUnitUpdateOneRequiredWithoutMonitoringNestedInput
  }

  export type MonitoringUncheckedUpdateWithoutDataLokasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nupBarang?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonitoringUncheckedUpdateManyWithoutDataLokasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nupBarang?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeminjamanPUpdateWithoutLokasiInput = {
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUpdateManyWithoutPeminjamanNestedInput
    items?: PeminjamanItemUpdateManyWithoutPeminjamanNestedInput
    user?: UserUpdateOneRequiredWithoutPeminjamanPNestedInput
  }

  export type PeminjamanPUncheckedUpdateWithoutLokasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    userNik?: StringFieldUpdateOperationsInput | string
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logScanBMN?: LogScanBMNUncheckedUpdateManyWithoutPeminjamanNestedInput
    items?: PeminjamanItemUncheckedUpdateManyWithoutPeminjamanNestedInput
  }

  export type PeminjamanPUncheckedUpdateManyWithoutLokasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    userNik?: StringFieldUpdateOperationsInput | string
    barangUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    no_hp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Agenda?: StringFieldUpdateOperationsInput | string
    waktuMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    verifikasi?: EnumStatusBookingFieldUpdateOperationsInput | $Enums.StatusBooking
    status?: EnumStatusPFieldUpdateOperationsInput | $Enums.StatusP
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    waktuAmbil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waktuKembali?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MonitoringCreateManyBarangUnitInput = {
    id: string
    waktu: Date | string
    plt: string
    kondisiBarang?: $Enums.KondisiBarangM
    lokasiBarang?: string | null
    lokasiTambahan?: string | null
    foto: string
    keterangan?: string | null
  }

  export type PeminjamanItemCreateManyBarangUnitInput = {
    id?: number
    peminjamanId: number
  }

  export type MonitoringUpdateWithoutBarangUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    dataLokasi?: DataLokasiUpdateOneWithoutMonitoringNestedInput
  }

  export type MonitoringUncheckedUpdateWithoutBarangUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiBarang?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonitoringUncheckedUpdateManyWithoutBarangUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    plt?: StringFieldUpdateOperationsInput | string
    kondisiBarang?: EnumKondisiBarangMFieldUpdateOperationsInput | $Enums.KondisiBarangM
    lokasiBarang?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiTambahan?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeminjamanItemUpdateWithoutBarangUnitInput = {
    peminjaman?: PeminjamanPUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PeminjamanItemUncheckedUpdateWithoutBarangUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    peminjamanId?: IntFieldUpdateOperationsInput | number
  }

  export type PeminjamanItemUncheckedUpdateManyWithoutBarangUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    peminjamanId?: IntFieldUpdateOperationsInput | number
  }

  export type LogScanBMNCreateManyPeminjamanInput = {
    id?: number
    jenis: string
    waktuScan?: Date | string
    petugasNik: string
    keterangan?: string | null
  }

  export type PeminjamanItemCreateManyPeminjamanInput = {
    id?: number
    nupBarang: string
  }

  export type LogScanBMNUpdateWithoutPeminjamanInput = {
    jenis?: StringFieldUpdateOperationsInput | string
    waktuScan?: DateTimeFieldUpdateOperationsInput | Date | string
    petugasNik?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogScanBMNUncheckedUpdateWithoutPeminjamanInput = {
    id?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    waktuScan?: DateTimeFieldUpdateOperationsInput | Date | string
    petugasNik?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogScanBMNUncheckedUpdateManyWithoutPeminjamanInput = {
    id?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    waktuScan?: DateTimeFieldUpdateOperationsInput | Date | string
    petugasNik?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeminjamanItemUpdateWithoutPeminjamanInput = {
    barangUnit?: BarangUnitUpdateOneRequiredWithoutPeminjamanItemsNestedInput
  }

  export type PeminjamanItemUncheckedUpdateWithoutPeminjamanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nupBarang?: StringFieldUpdateOperationsInput | string
  }

  export type PeminjamanItemUncheckedUpdateManyWithoutPeminjamanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nupBarang?: StringFieldUpdateOperationsInput | string
  }



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