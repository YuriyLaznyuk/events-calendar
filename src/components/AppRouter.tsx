import React, { FC } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import EventCalendar from '../pages/EventCalendar';

const AppRouter: FC = () => {
  const { isAuth } = useAppSelector(state => state.user);
  return (
    isAuth ?
      <Switch>
        <Route exact path='/'>
          <EventCalendar/>
        </Route>
        <Redirect to='/'/>
      </Switch> :
      <Switch>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Redirect to='/login'/>
      </Switch>
  );
};

export default AppRouter;