/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import type { StockResponseCurrentPrice } from './stockResponseCurrentPrice'
import type { StockResponseMarketCap } from './stockResponseMarketCap'
import type { StockHistory } from './stockHistory'

export interface StockResponse {
  /** Stock ticker symbol */
  ticker: string
  /** Company name */
  company: string
  /** Current stock price */
  current_price: StockResponseCurrentPrice
  /** Market capitalization */
  market_cap: StockResponseMarketCap
  /** Historical stock data */
  history: StockHistory[]
}
