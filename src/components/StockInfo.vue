<script setup lang="ts">
import { computed } from 'vue'
import type { StockResponse } from '../api/generated/model'

defineOptions({
  name: 'StockInfo',
})

interface Props {
  data?: StockResponse
}

const props = defineProps<Props>()

// Format current price with null check
const formattedPrice = computed(() => {
  if (!props.data?.current_price) return 'N/A'
  return `$${props.data.current_price.toFixed(2)}`
})

// Format market cap with null check
const formattedMarketCap = computed(() => {
  if (!props.data?.market_cap) return 'N/A'
  const marketCapInBillions = Number(props.data.market_cap) / 1000000000
  return `$${marketCapInBillions.toFixed(2)}B`
})

// Computed properties for data access
const company = computed(() => props.data?.company || 'Unknown Company')
const history = computed(() => props.data?.history || [])
</script>

<template>
  <div class="stock-data">
    <h2>{{ company }}</h2>
    <div class="price-info">
      <p class="current-price">
        Current Price:
        <span>{{ formattedPrice }}</span>
      </p>
      <p class="market-cap">
        Market Cap:
        <span>{{ formattedMarketCap }}</span>
      </p>
    </div>

    <!-- Historical Data -->
    <div v-if="history.length" class="history">
      <h3>Historical Data</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in history.slice(0, 5)" :key="index">
            <td>{{ record.Date || 'N/A' }}</td>
            <td>{{ record.Open ? `$${record.Open.toFixed(2)}` : 'N/A' }}</td>
            <td>{{ record.High ? `$${record.High.toFixed(2)}` : 'N/A' }}</td>
            <td>{{ record.Low ? `$${record.Low.toFixed(2)}` : 'N/A' }}</td>
            <td>{{ record.Close ? `$${record.Close.toFixed(2)}` : 'N/A' }}</td>
            <td>{{ record.Volume ? record.Volume.toLocaleString() : 'N/A' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.stock-data {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.price-info {
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
}

.current-price,
.market-cap {
  font-size: 1.2rem;
}

.current-price span,
.market-cap span {
  font-weight: bold;
  color: #2c5282;
}

.history {
  margin-top: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  padding: 0.75rem;
  text-align: right;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background: #f7fafc;
  font-weight: 600;
}

th:first-child,
td:first-child {
  text-align: left;
}
</style>
