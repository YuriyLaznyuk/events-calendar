import React, { FC, PropsWithChildren, ReactElement } from 'react';
import './style/myModal.scss';
import { useActions } from '../hooks/useActions';

interface MyModalProps {
  children1: ReactElement,
  children2: ReactElement,
  modalIn: boolean,
  modalUp: boolean,
  modalVisible: boolean
}

const MyModal: FC<MyModalProps> = (props: PropsWithChildren<MyModalProps>) => {
  const { modalVisible } = useActions();
  return (
    <div className='myModal'
         style={{ display: (props.modalVisible) ? 'flex' : 'none' }} onClick={() => {

      modalVisible(false);

    }}>
      <div className="myModal__container"
           onClick={e => e.stopPropagation()}>

        {(props.modalUp) && props.children1}
        {(props.modalIn) && props.children2}
      </div>


    </div>
  );
};

export default MyModal;