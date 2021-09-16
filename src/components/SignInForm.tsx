import React, { FC } from 'react';
import './style/signForm.scss';
import { useActions } from '../hooks/useActions';

const SignInForm :FC= () => {
  const {modalVisible}=useActions();
  return (
    <div className='signForm'>
      <span onClick={()=>{
        modalVisible(false);

      }}

        className='signForm__cross'>&#10006;</span>
      <h1>sign in</h1>
      <form className='signForm__form' action="">
        <label htmlFor="">Email</label>
        <input type="email" placeholder='email'/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='password'/>
        <input type="button" value='SEND'/>
      </form>
    </div>
  );
};

export default SignInForm;