export const svgVariants = {
  start: {opacity: 0, pathLength: 0},
  end: {opacity: 1, pathLength: 1, transition: {duration: 1, ease: 'easeInOut'}},
};

export const fadeInVariant = {
  hidden: {opacity: 0, y: -200},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut', type: 'tween'}},
};

export const listVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const itemVariant = {
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut', type: 'tween'}},
  hidden: {opacity: 0, y: -200},
};

export const rightToLeftVariant = {
  visible: {opacity: 1, x: 0, transition: {duration: 1.5, ease: 'easeOut', type: 'tween'}},
  hidden: {opacity: 0, x: '100%'},
};
