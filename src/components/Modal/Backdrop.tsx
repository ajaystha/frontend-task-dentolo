import { ReactElement, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '@shared/motions';

import s from './Modal.module.css';

interface BackdropProps {
  children: ReactNode;
  hideOnClickOutside: boolean;
  onClose: () => void;
}

export default function Backdrop(props: BackdropProps): ReactElement {
  const { children, hideOnClickOutside, onClose } = props;

  const handleClickOutside = () => {
    if (!hideOnClickOutside) return;

    onClose();
  };

  return (
    <motion.div
      className={s.Backdrop}
      onClick={handleClickOutside}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
}

Backdrop.defaultProps = {
  hideOnClickOutside: true,
};
