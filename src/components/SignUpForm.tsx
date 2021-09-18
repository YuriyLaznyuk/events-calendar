import React, { FC, useState } from 'react';
import './style/signForm.scss';
import { useActions } from '../hooks/useActions';

const SignUpForm: FC = () => {
  const { modalVisible,registration } = useActions();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  console.log(user.name);
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
        <input type="text" placeholder='name'
        value={user.name} onChange={e=>setUser({...user,name: e.target.value})}/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='email'
        value={user.email} onChange={e=>setUser({...user,email: e.target.value})}/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='password'
        value={user.password} onChange={e=>setUser({...user,password: e.target.value})}/>
        <input type="button" value='SEND'
        onClick={()=>registration(user)}/>
      </form>
    </div>
  );
};

export default SignUpForm;