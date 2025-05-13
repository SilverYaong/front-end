import axios from "axios"
import type { AxiosInstance } from "axios"

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient