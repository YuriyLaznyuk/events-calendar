import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { UserActionType } from '../store/reducers/user_reducer/type';
import './style/myModal.scss';

interface MyModalProps {
  children1: ReactElement,
  children2: ReactElement,
  modalIn: boolean,
  modalUp: boolean,
  modalVisible: boolean
}

const MyModal: FC<MyModalProps> = (props: PropsWithChildren<MyModalProps>) => {
  const dispatch = useAppDispatch();
  return (
    <div className='myModal'
         style={{display:(props.modalVisible) ?'flex':'none'}} onClick={() => {
      dispatch({ type: UserActionType.MODAL_VISIBLE, payload: false });
      dispatch({ type: UserActionType.MODAL_UP, payload: false });
      dispatch({ type: UserActionType.MODAL_IN, payload: false });

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