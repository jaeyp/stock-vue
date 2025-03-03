import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })

  return axiosInstance.request<any, T>(config)
}
