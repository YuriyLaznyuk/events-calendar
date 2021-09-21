import React, { FC } from 'react';
import MyModal from '../UI/MyModal';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import { useAppSelector } from '../hooks/hooks';

const Login :FC= () => {
  const {modalIn,modalUp,modalVisible}=useAppSelector(state => state.user)
  return (
    <div>
      <h1>Page Login</h1>
      <h1>Event Calendar</h1>
      <MyModal
        modalIn={modalIn}
        modalUp={modalUp}
        modalVisible={modalVisible}
        children1={<SignUpForm/>}
        children2={<SignInForm/>}
      >
      </MyModal>

    </div>
  );
};

export default Login;