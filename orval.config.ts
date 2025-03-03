import { defineConfig } from 'orval'

export default defineConfig({
  stock: {
    input: process.env.VITE_OPENAPI_URL,
    output: {
      mode: 'split',
      target: 'src/api/generated/stock.ts',
      schemas: 'src/api/generated/model',
      client: 'axios',
      prettier: true,
      override: {
        mutator: {
          path: 'src/api/axios-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
})
