import { IUser } from '../../../models/IUser';

export interface Modal_In {
  type: UserActionType.MODAL_IN,
  payload: boolean
}


export interface Modal_Up {
  type: UserActionType.MODAL_UP,
  payload: boolean
}


export interface Modal_Visible {
  type: UserActionType.MODAL_VISIBLE,
  payload: boolean
}

export interface Set_User {
  type:UserActionType.SET_USER,
  payload:IUser
}

export interface Is_Auth {
  type:UserActionType.IS_AUTH,
  payload:boolean
}

export interface UserState {
  modalIn: boolean,
  modalUp: boolean,
  modalVisible: boolean,
  isAuth:boolean,
  user: IUser

}


export enum UserActionType {
  MODAL_IN = 'MODAL_IN',
  MODAL_UP = 'MODAL_UP',
  MODAL_VISIBLE = 'MODAL_VISIBLE',
  SET_USER="SET_USER",
  IS_AUTH="IS_AUTH"

}

export type UserAction=
  Modal_In |
  Modal_Up |
  Modal_Visible |
  Set_User |
  Is_Auth