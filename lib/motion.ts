export const svgVariants = {
  start: {opacity: 0, pathLength: 0},
  end: {opacity: 1, pathLength: 1, transition: {duration: 1, ease: 'easeInOut'}},
};

export const fadeInVariant = {
  hidden: {opacity: 0, y: -200},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut', type: 'tween'}},
};
