import axios from 'axios'
import type { AxiosResponse, AxiosInstance } from 'axios'

export default class Api {
  api: AxiosInstance

  constructor (base: string) {
    this.api = axios.create({ baseURL: base })
  }

  get (url = '', params = {}): Promise<AxiosResponse> {
    return this.api.get(url, { params })
  }
}
