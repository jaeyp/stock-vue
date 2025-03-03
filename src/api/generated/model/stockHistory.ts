/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import type { StockHistoryDate } from './stockHistoryDate'

export interface StockHistory {
  /** Opening price of the stock */
  Open: number
  /** Highest price of the stock during the period */
  High: number
  /** Lowest price of the stock during the period */
  Low: number
  /** Closing price of the stock */
  Close: number
  /** Trading volume */
  Volume: number
  /** Dividend amount */
  Dividends: number
  /** Stock split ratio */
  StockSplits: number
  /** Date of the stock data */
  Date?: StockHistoryDate
}
