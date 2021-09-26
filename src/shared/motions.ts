export const fadeIn = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: { opacity: 0 },
};

export const zoomIn = {
  initial: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transform: 'translateX(-50%)',
    transition: {
      type: 'spring',
      duration: 0.3,
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

export const dropDown = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  visible: {
    top: '50%',
    transform: 'translateY(-125%)',
  },
  exit: { top: '-50%' },
};

export const listVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const listItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
