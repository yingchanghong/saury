import type { App,Plugin } from "vue"; // 只是导入类型不是导入App的值

export type SFCInstall<T> = T & Plugin


export const Install = <T>(comp:T)=>{
  (comp as SFCInstall<T>).install = (app:App)=>{
    app.component((comp as any).name , comp as any)
  }
  return comp as SFCInstall<T>
}
