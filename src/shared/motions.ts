export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const zoomIn = {
  hidden: { scale: 0, opacity: 0 },
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
};

export const dropDown = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

export const listVariant = {
  visible: {
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
