import React, { FC, useEffect } from 'react';
import { Calendar, Badge } from 'antd';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import './style/eventComponent.scss';
import EventService from '../api/EventService';
import { useActions } from '../hooks/useActions';
import { IEventRedux } from '../models/IEventRedux';
import { useAppSelector } from '../hooks/hooks';

interface EventComponentProps {
  events: IEventRedux[]
}


const EventComponent: FC<EventComponentProps> = (prors) => {
  const { changeEvents,getEvents } = useActions();
  const{user}=useAppSelector(state => state.user);
  const{event}=useAppSelector(state => state.event);


  function deleteEvent(id: string) {
    EventService.deleteEvent(id);
    changeEvents();
  }

  useEffect(()=>{
    if (user.email){
      getEvents(user.email)
    }
  },[event]);

  function dateCellRender(value: Moment) {
    const formaterDate = formatDate(value.toDate());
    const currentDeyEvents = prors.events.filter(event =>
      event.date === formaterDate);
    return (
      <ul style={{ padding: 0 }}>
        {currentDeyEvents.map(ev =>
          <li key={ev._id}><span className='EventComponent__btn'
            onClick={()=>deleteEvent(ev._id)} title='delete'>
    ✖</span>
            <Badge status={'success'} text={ev.description}/>
          </li>)}
      </ul>
    );
  }

  return (
    <Calendar dateCellRender={dateCellRender}/>
  );
};

export default EventComponent;