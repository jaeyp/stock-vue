import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

// Create a base axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return axiosInstance.request<any, T>(config)
}
