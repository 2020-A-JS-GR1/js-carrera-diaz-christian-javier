export interface User{
  id?: number,
  DNI?:string,
  name?:string,
  last_name?:string,
  birt_date?:Date,
  isMarried?:boolean
  createdAt?:Date,
  computers?:any[],
}
