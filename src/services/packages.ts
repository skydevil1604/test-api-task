import type Api from '@/api/api'
import type { Params } from '@/types'
import type { AxiosResponse } from 'axios'

export default class PackagesApiService {
  api: Api

  constructor(api: Api) {
    this.api = api
  }

  getPackage(name: string = '', params?: Params): Promise<AxiosResponse> {
    return this.api.get(`/packages/npm/${name}`, params)
  }

  getPackageVersionInfo(
    name: string = '',
    version: string = '',
    params?: Params
  ): Promise<any> {
    return this.api.get(`/stats/packages/npm/${name}@${version}`, params)
  }
}
