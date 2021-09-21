import React, { FC, useEffect, useState, CSSProperties } from 'react';
import { Layout, Row, Button, Modal } from 'antd';
import EventComponent from '../components/EventComponent';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/hooks';


const EventCalendar: FC = () => {
  const [visible, setVisible] = useState(false);
  const { getEvents } = useActions();
  const { user } = useAppSelector(state => state.user);
  const { events } = useAppSelector(state => state.event);


  useEffect(() => {
    if (user.email) {
      getEvents(user.email);
    }
  }, []);
  const closeModal = () => {
    setVisible(false);
  };
  const style: CSSProperties = {
    height: '40px',
    padding: '0 15px',
    fontSize: '20px',
    fontWeight: 700

  };
  return (
    <Layout>
      <Row justify="center">
        <Button style={style} type={'primary'} onClick={() => setVisible(true)}>Add event</Button>
      </Row>
      <EventComponent events={events}/>
      <Modal
        title='Add event'
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <EventForm guests={[]} close={closeModal}/>
      </Modal>
    </Layout>
  );
};

export default EventCalendar;