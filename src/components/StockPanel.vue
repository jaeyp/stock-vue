<script setup lang="ts">
import { ref } from 'vue'
import StockInfo from './StockInfo.vue'
import { useStockData } from '../composables/useStockData'

const ticker = ref('AAPL')
const { data, isLoading, error } = useStockData(ticker)
</script>

<template>
  <div class="stock-panel">
    <h1>Stock Information</h1>

    <!-- Ticker Input -->
    <div class="ticker-input">
      <label for="ticker">Stock Ticker:</label>
      <input
        id="ticker"
        v-model="ticker"
        type="text"
        placeholder="Enter stock ticker (e.g., AAPL)"
      />
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading">Loading stock data...</div>

    <!-- Error State -->
    <div v-else-if="error" class="error">
      <p>Error loading stock data:</p>
      <p>{{ error.message }}</p>
    </div>

    <!-- Stock Info Component -->
    <StockInfo v-else-if="data" :data="data" />

    <!-- No Data State -->
    <div v-else class="no-data">No stock data available</div>
  </div>
</template>

<style scoped>
.stock-panel {
  max-width: 1000px;
  margin: 0 auto;
}

.ticker-input {
  margin: 2rem 0;
}

.ticker-input label {
  margin-right: 1rem;
}

.ticker-input input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.loading,
.error,
.no-data {
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 2rem 0;
}

.error {
  background: #fff5f5;
  color: #e53e3e;
}
</style>

<script lang="ts">
export default {
  name: 'StockPanel',
}
</script>
