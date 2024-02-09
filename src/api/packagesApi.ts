import Api from '@/api/api'
import PackagesApiService from '@/services/packages'

const packagesApi: Api = new Api("https://data.jsdelivr.com/v1/")

const packagesService: PackagesApiService = new PackagesApiService(packagesApi)

export { packagesService }
