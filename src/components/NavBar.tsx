import React, { FC } from 'react';
import './style/navBar.scss'
import { useAppDispatch } from '../hooks/hooks';
import { UserActionType } from '../store/reducers/user_reducer/type';

const NavBar :FC = () => {
  const dispatch=useAppDispatch();
  return (
    <div className='navBar'>
      <div className='navBar__container'>
        <ul className='navBar__container_menu'>
          <li onClick={()=>{
            dispatch({type:UserActionType.MODAL_VISIBLE,payload:true});
            dispatch({type:UserActionType.MODAL_UP,payload:true})
          }}>Sign up</li>
          <li onClick={()=>{
            dispatch({type:UserActionType.MODAL_VISIBLE,payload:true});
            dispatch({type:UserActionType.MODAL_IN,payload:true})
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