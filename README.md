# Stock Frontend

A Vue 3 + TypeScript based frontend application for viewing stock information.

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Pinia (State Management)
- Axios (HTTP Client)
- Orval (API Client Generator)

## Getting Started

1. Configure environment variables:
   Create a `.env` file in the root directory with the following content:

```bash
VITE_API_URL=http://localhost:8000
VITE_OPENAPI_URL=http://localhost:8000/openapi.json
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Generate API client code:

```bash
npm run generate-api
```

> Note: The stock-api server must be running before generating the API client code.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run type-check`: Run TypeScript type checking
- `npm run lint`: Lint code with ESLint
- `npm run format`: Format code with Prettier
- `npm run generate-api`: Generate API client code from OpenAPI spec

## API Client

This project uses Orval to automatically generate TypeScript API client code from OpenAPI specifications. The generated code is located in the `src/api/generated` directory.

### Usage Example

```typescript
import { getFastAPI } from '@/api/generated/stock'

const api = getFastAPI()
const stockData = await api.getStockDataStocksTickerGet('AAPL')
```

## Environment Variables

The following environment variables are required:

- `VITE_API_URL`: Base URL for the API (e.g., http://localhost:8000)
- `VITE_OPENAPI_URL`: URL for the OpenAPI specification (e.g., http://localhost:8000/openapi.json)

You can set these variables in `.env` or `.env.development` files.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
