/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import { useInfiniteQuery, useQuery } from '@tanstack/vue-query'
import type {
  DataTag,
  InfiniteData,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query'

import { computed, unref } from 'vue'
import type { MaybeRef } from 'vue'

import type { HTTPValidationError, StockResponse } from './model'

import { customInstance } from '../axios-instance'

/**
 * @summary Get Stock Data
 */
export const getStockDataStocksTickerGet = (ticker: MaybeRef<string>, signal?: AbortSignal) => {
  ticker = unref(ticker)

  return customInstance<StockResponse>({ url: `/stocks/${ticker}`, method: 'GET', signal })
}

export const getGetStockDataStocksTickerGetQueryKey = (ticker: MaybeRef<string>) => {
  return ['stocks', ticker] as const
}

export const getGetStockDataStocksTickerGetInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getStockDataStocksTickerGet>>>,
  TError = HTTPValidationError,
>(
  ticker: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getStockDataStocksTickerGet>>,
        TError,
        TData
      >
    >
  },
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetStockDataStocksTickerGetQueryKey(ticker)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getStockDataStocksTickerGet>>> = ({
    signal,
  }) => getStockDataStocksTickerGet(ticker, signal)

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(ticker)),
    staleTime: 10000,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getStockDataStocksTickerGet>>,
    TError,
    TData
  >
}

export type GetStockDataStocksTickerGetInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getStockDataStocksTickerGet>>
>
export type GetStockDataStocksTickerGetInfiniteQueryError = HTTPValidationError

/**
 * @summary Get Stock Data
 */

export function useGetStockDataStocksTickerGetInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getStockDataStocksTickerGet>>>,
  TError = HTTPValidationError,
>(
  ticker: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getStockDataStocksTickerGet>>,
        TError,
        TData
      >
    >
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetStockDataStocksTickerGetInfiniteQueryOptions(ticker, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryReturnType<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = unref(queryOptions).queryKey as DataTag<QueryKey, TData, TError>

  return query
}

export const getGetStockDataStocksTickerGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getStockDataStocksTickerGet>>,
  TError = HTTPValidationError,
>(
  ticker: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getStockDataStocksTickerGet>>, TError, TData>
    >
  },
) => {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetStockDataStocksTickerGetQueryKey(ticker)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getStockDataStocksTickerGet>>> = ({
    signal,
  }) => getStockDataStocksTickerGet(ticker, signal)

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(ticker)),
    staleTime: 10000,
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof getStockDataStocksTickerGet>>, TError, TData>
}

export type GetStockDataStocksTickerGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getStockDataStocksTickerGet>>
>
export type GetStockDataStocksTickerGetQueryError = HTTPValidationError

/**
 * @summary Get Stock Data
 */

export function useGetStockDataStocksTickerGet<
  TData = Awaited<ReturnType<typeof getStockDataStocksTickerGet>>,
  TError = HTTPValidationError,
>(
  ticker: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getStockDataStocksTickerGet>>, TError, TData>
    >
  },
): UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetStockDataStocksTickerGetQueryOptions(ticker, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = unref(queryOptions).queryKey as DataTag<QueryKey, TData, TError>

  return query
}
