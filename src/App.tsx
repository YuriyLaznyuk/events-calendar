import React, { FC, useEffect } from 'react';
import './app.scss';
import NavBar from './components/NavBar';
import { useAppSelector } from './hooks/hooks';
import { useActions } from './hooks/useActions';
import AppRouter from './components/AppRouter';

const App: FC = () => {
  const { modalIn, modalUp, modalVisible } = useAppSelector(state => state.user);
  const { auth } = useActions();

  useEffect(() => {
    if(localStorage.getItem('token')){
    auth();
    }
  }, []);
  return (
    <div>
      <NavBar/>
<AppRouter/>
    </div>
  );
};

export default App;