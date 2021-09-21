import React, { FC } from 'react';
import './style/navBar.scss';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/hooks';

const NavBar: FC = () => {
  const { user, isAuth } = useAppSelector(state => state.user);
  const { modalVisibleIn, modalVisibleUp, logout } = useActions();
  return (
    <div className='navBar'>
      <div className='navBar__container'>
        <ul className='navBar__container_menu'>
          {!isAuth && <li className='sign_log' onClick={() => modalVisibleUp(true)}>Sign up</li>}
          {!isAuth && <li className='sign_log' onClick={() => modalVisibleIn(true)}>Sign in</li>}
          {isAuth && <li className='sign_log' onClick={()=>logout()}>log out</li>}
          {isAuth && <li id='user'>{user.name}</li>}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;