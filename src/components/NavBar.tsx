import React, { FC } from 'react';
import './style/navBar.scss';
import { useActions } from '../hooks/useActions';

const NavBar :FC = () => {

  const {modalVisibleIn,modalVisibleUp }=useActions();
  return (
    <div className='navBar'>
      <div className='navBar__container'>
        <ul className='navBar__container_menu'>
          <li onClick={()=>{
            modalVisibleUp(true);

          }}>Sign up</li>
          <li onClick={()=>{
            modalVisibleIn(true);

          }}
          >Sign in</li>
          <li>Sign out</li>
          <li>User name</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;