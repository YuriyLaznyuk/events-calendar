import React, { FC, useEffect } from 'react';
import './app.scss';
import NavBar from './components/NavBar';
import { useActions } from './hooks/useActions';
import AppRouter from './components/AppRouter';

const App: FC = () => {
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