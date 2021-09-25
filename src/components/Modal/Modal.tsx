import { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';

import s from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
  className?: string;
  hideOnClickOutside?: boolean;
  onClose: () => void;
}

function Modal(props: ModalProps): ReactElement {
  const { children, className, onClose, hideOnClickOutside } = props;

  const modalRoot = document.getElementById('portal') as HTMLElement;

  return ReactDOM.createPortal(
    <Backdrop hideOnClickOutside={hideOnClickOutside} onClose={onClose}>
      <div className={`${s.Modal} ${className || ''}`} onClick={(ev) => ev.stopPropagation()}>
        {children}
      </div>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;
