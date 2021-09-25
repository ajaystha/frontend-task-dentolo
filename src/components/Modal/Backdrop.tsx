import { ReactElement, ReactNode } from 'react';

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
    <div className={s.Backdrop} onClick={handleClickOutside}>
      {children}
    </div>
  );
}

Backdrop.defaultProps = {
  hideOnClickOutside: true,
};
