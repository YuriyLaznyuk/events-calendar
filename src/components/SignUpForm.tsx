import React, { FC } from 'react';
import "./style/signForm.scss"
import { useAppDispatch } from '../hooks/hooks';
import { UserActionType } from '../store/reducers/user_reducer/type';

const SignUpForm :FC= () => {
const dispatch=useAppDispatch();
  return (
    <div className='signForm'>
      <span
        onClick={()=>{
          dispatch({ type: UserActionType.MODAL_VISIBLE, payload: false });
          dispatch({ type: UserActionType.MODAL_UP, payload: false });
          dispatch({ type: UserActionType.MODAL_IN, payload: false });
        }}
        className='signForm__cross'>&#10006;</span>
      <h1>sign up</h1>
      <form className='signForm__form'  action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder='name'/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='email'/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='password'/>
        <input type="button" value='SEND'/>
      </form>
    </div>
  );
};

export default SignUpForm;