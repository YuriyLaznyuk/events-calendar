export interface IUser {
  name?: string,
  email: string
  password?: string
}

export type ResUser = {
  errors?: any,
  message: string,
  status?: string,
  user?: IUser
}

