import React, { FC, useState } from 'react';
import { Button, DatePicker,
  Form, Input, Row,Select} from 'antd';

const EventForm: FC = () => {
  const [event, setEvent] = useState({
    author: '', guest: '', date: '', description: ''
  });
  return (
    <Form>
      <Form.Item
        label="description event"
        name="description"
        rules={[{ required: true, message: 'Please input your event!' }]}
      >
        <Input
          value={event.description}
          onChange={e => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="date event"
        name="date"
        rules={[{ required: true, message: 'Please input your date!' }]}
      >
        <DatePicker/>
      </Form.Item>

      <Form.Item>
        <Select>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
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