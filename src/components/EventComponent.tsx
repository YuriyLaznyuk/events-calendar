import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { Calendar } from 'antd';

interface EventComponentProps {
  events:IEvent[]
}


const EventComponent :FC<EventComponentProps>= () => {
  return (
    <Calendar/>
  );
};

export default EventComponent;