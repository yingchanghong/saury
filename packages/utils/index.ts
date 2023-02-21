export const defaultNamespace = 'sy'
const statePrefix = 'is-'

const nameSplice = (nameSpace, block, b?: string, e?: string, m?: string) => {
  let cls = `${nameSpace}-${block}`
  if (b) cls += `-${b}`
  if (e) cls += `__${e}`
  if (m) cls += `--${m}`
  return cls
}

export const useNameSpace = (compentName: string) => {
  let cmName = compentName

  const b = (name = '') => nameSplice(defaultNamespace, cmName, name)
  const e = (element?: string) => {}
  const m = (modifier?: string) => (modifier ? nameSplice(defaultNamespace, cmName, '', '', modifier) : '')
  const be = () => {}
  const em = () => {}
  const bm = () => {}
  const bem = () => {}
  const is = (name: string, status: boolean = true) => {
    return name && status ? `${statePrefix}${name}` : ''
  }
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}
