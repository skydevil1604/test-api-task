type Params = {
  [key: string]: string
}

type Package = {
  name: string,
  type: string,
  links: { [key: string]: string },
  tags: { [key: string]: string },
  versions: { [key: string]: any }[]
}

type packageVersionInfo = {
  hits: { [key: string]: any },
  bandwidth: { [key: string]: any },
  links: { [key: string]: any }
}

export type {
  Params,
  Package,
  packageVersionInfo
}
