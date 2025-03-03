import { defineConfig } from 'orval'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), 'VITE_')
const OPENAPI_URL = env.VITE_OPENAPI_URL || 'http://localhost:8000/openapi.json'

export default defineConfig({
  stock: {
    input: OPENAPI_URL,
    output: {
      mode: 'split',
      target: 'src/api/generated/stock.ts',
      schemas: 'src/api/generated/model',
      client: 'vue-query',
      prettier: true,
      override: {
        mutator: {
          path: 'src/api/axios-instance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: 'page',
          options: {
            staleTime: 10000,
          },
        },
      },
    },
  },
})
