import React, { FC, useEffect, useState } from 'react';
import { Layout, Row, Button, Modal } from 'antd';
import EventComponent from '../components/EventComponent';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/hooks';

const EventCalendar: FC = () => {
  const [visible, setVisible] = useState(false);
  const { getEvents } = useActions();
  const { user } = useAppSelector(state => state.user);

  useEffect(() => {
    if(user.email){
    getEvents(user.email);
    }
  },[]);


  return (
    <Layout>
      <EventComponent events={[]}/>
      <Row justify="center">
        <Button onClick={() => setVisible(true)}>Add event</Button>
      </Row>
      <Modal
        title='Add event'
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <EventForm/>
      </Modal>
    </Layout>
  );
};

export default EventCalendar;