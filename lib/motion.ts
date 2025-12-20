import type {Variants} from 'framer-motion';

export const svgVariants: Variants = {
  start: {opacity: 0, pathLength: 0},
  end: {opacity: 1, pathLength: 1, transition: {duration: 2, ease: 'easeInOut' as const}},
};

export const fadeInVariant: Variants = {
  hidden: {opacity: 0, y: -200},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut' as const, type: 'tween' as const}},
};

export const listVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren' as const,
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren' as const,
    },
  },
};

export const itemVariant: Variants = {
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut' as const, type: 'tween' as const}},
  hidden: {opacity: 0, y: -200},
};

export const rightToLeftVariant: Variants = {
  visible: {opacity: 1, x: 0, transition: {duration: 1.5, ease: 'easeOut' as const, type: 'tween' as const}},
  hidden: {opacity: 0, x: '100%'},
};
