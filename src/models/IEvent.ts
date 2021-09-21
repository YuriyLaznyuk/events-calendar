export interface IEvent {
  author: string | undefined,
  guest?: string,
  date: string,
  description: string,
  email?:string,
  name?:string,

}