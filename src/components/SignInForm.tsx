import React, { FC, useState } from 'react';
import './style/signForm.scss';
import { useActions } from '../hooks/useActions';

const SignInForm: FC = () => {
  const { modalVisible, login } = useActions();
  const [user, setUser] = useState({ email: '', password: '' });
  const testEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user.email);
  const testPassword = /^\d{5,}$/.test(user.password);

  return (
    <div className='signForm'>
      <span onClick={() => {
        modalVisible(false);

      }}

            className='signForm__cross'>&#10006;</span>
      <h1>sign in</h1>
      <form className='signForm__form' action="">
        <label htmlFor="">Email</label>

        {(!testEmail && user.email.length > 0) &&
        <span className='signForm__form-valid'>invalid email</span>}

        <input className='signForm__form-input' type="email" placeholder='email'
               value={user.email}
               onChange={e => setUser({ ...user, email: e.target.value })}/>
        <label htmlFor="">Password</label>
        {(!testPassword && user.password.length > 0) &&
        <span className='signForm__form-valid'>invalid password</span>}
        <input className='signForm__form-input' type="password" placeholder='password'
               value={user.password}
               onChange={e => setUser({ ...user, password: e.target.value })}/>
        <input type="button" value='SEND' onClick={() => {
          login(user);
          setUser({ ...user, email: '', password: '' });
        }
        } disabled={!(testPassword && testEmail)}/>
      </form>
    </div>
  );
};

export default SignInForm;