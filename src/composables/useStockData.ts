import { computed } from 'vue'
import type { Ref } from 'vue'
import type { HTTPValidationError, StockResponse } from '../api/generated/model'
import { useGetStockDataStocksTickerGet } from '../api/generated/stock'

export function useStockData(ticker: Ref<string>) {
  const query = useGetStockDataStocksTickerGet<{ data: StockResponse }, HTTPValidationError>(ticker)
  return {
    ...query,
    data: computed(() => query.data.value?.data),
  }
}
