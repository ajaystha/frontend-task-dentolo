import { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { dropDown } from '@shared/motions';

import Backdrop from './Backdrop';

import s from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  hideOnClickOutside?: boolean;
  onClose: () => void;
}

function Modal(props: ModalProps): ReactElement {
  const { children, isOpen, className, onClose, hideOnClickOutside } = props;

  const modalRoot = document.getElementById('portal') as HTMLElement;

  return ReactDOM.createPortal(
    <AnimatePresence initial={false} exitBeforeEnter={false}>
      {isOpen && (
        <Backdrop hideOnClickOutside={hideOnClickOutside} onClose={onClose}>
          <motion.div
            className={`${s.Modal} ${className || ''}`}
            onClick={(ev) => ev.stopPropagation()}
            variants={dropDown}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>,
    modalRoot
  );
}

export default Modal;
