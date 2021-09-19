import React, { FC, useState } from 'react';
import './style/signForm.scss';
import { useActions } from '../hooks/useActions';

const SignUpForm: FC = () => {
  const { modalVisible, registration } = useActions();
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const testEmail: boolean = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user.email);
  const testPassword: boolean = /^\d{5,}$/.test(user.password);
  const testName: boolean = /^[A-Za-z0-9]\w{1,}$/g.test(user.name);
  return (
    <div className='signForm'>
      <span
        onClick={() => {
          modalVisible(false);
        }}
        className='signForm__cross'>&#10006;</span>
      <h1>sign up</h1>
      <form className='signForm__form' action="">
        <label htmlFor="">Name</label>
        {(!testName && user.name.length>0)&&
        <span className='signForm__form-valid'>invalid name</span>}
        <input className='signForm__form-input' type="text" placeholder='name'
               value={user.name} onChange={e => setUser({ ...user, name: e.target.value })}/>
        <label htmlFor="">Email</label>
        {(!testEmail && user.email.length>0)&&
        <span className='signForm__form-valid'>invalid email</span>}
        <input className='signForm__form-input' type="email" placeholder='email'
               value={user.email} onChange={e => setUser({ ...user, email: e.target.value })}/>
        <label htmlFor="">Password</label>
        {(!testPassword && user.password.length>0)&&
        <span className='signForm__form-valid'>invalid password</span>}
        <input className='signForm__form-input' type="password" placeholder='password'
               value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}/>
        <input type="button" value='SEND'
               onClick={() => {
                 registration(user);
                 setUser({ ...user, email: '', password: '', name: '' });
               }}
               disabled={!(testEmail && testPassword && testName)}/>
      </form>
    </div>
  );
};

export default SignUpForm;