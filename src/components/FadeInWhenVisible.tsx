import { motion, useAnimation, AnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, ReactNode } from 'react';

interface FadeInWhenVisibleProps {
  children: ReactNode;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
  const controls: AnimationControls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 100 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
