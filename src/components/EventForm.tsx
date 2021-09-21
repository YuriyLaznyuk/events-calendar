import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Button, DatePicker, Form, Input, Row } from 'antd';
import { IUser } from '../models/IUser';
import moment, { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { useAppSelector } from '../hooks/hooks';
import EventService from '../api/EventService';
import { useActions } from '../hooks/useActions';


interface EventFormProps {
  guests: IUser[],
  close: () => void

}

const EventForm: FC<EventFormProps> = (props: PropsWithChildren<EventFormProps>) => {
  const [_event, setEvent] = useState({
    author: '', guest: '', date: '', description: ''
  });
   const { user } = useAppSelector(state => state.user);
  const { event } = useAppSelector(state => state.event);

  const { changeEvents, getEvents } = useActions();

  const selectDate = (date: Moment | null) => {
    if (date) {
      // console.log(formatDate(date.toDate()));
      setEvent({ ..._event, date: formatDate(date.toDate()) });

    }
  };


  useEffect(() => {
    if (user.email) {
      getEvents(user.email);
    }
  }, [event]);


  const submitEvent = () => {
    EventService.setEvent({ ..._event, author: user.name, email: user.email, name: user.name });
    changeEvents();
    props.close();
  };

  return (
    <Form onFinish={submitEvent}>
      <Form.Item
        label="description event"
        name="description"
        rules={[{ required: true, message: 'Please input your event!' }]}
      >
        <Input
          value={_event.description}
          onChange={e => setEvent({ ..._event, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="date event"
        name="date"
        rules={[{ required: true, message: 'Please input your date!' },
          () => ({
            validator(_, value) {
              if (value.isSameOrAfter(moment())) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('cannot create an event in the past'));
            }
          })]}
      >
        <DatePicker
          onChange={date => selectDate(date)}

        />
      </Form.Item>


      <Row justify='end'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            create event
          </Button>
        </Form.Item>

      </Row>

    </Form>
  );
};

export default EventForm;