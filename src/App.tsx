import React, { FC } from 'react';
import './app.scss';
import NavBar from './components/NavBar';
import MyModal from './UI/MyModal';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { useAppSelector } from './hooks/hooks';

const App: FC = () => {
  const { modalIn, modalUp,modalVisible } = useAppSelector(state => state.user);
  return (
    <div>
      <NavBar/>
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

export default App;