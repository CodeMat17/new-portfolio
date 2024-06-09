import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatBtn = ({
  number,
  tag,
  classnames,
}: {
  number: number;
  tag: string;
  classnames: string;
    }) => {
    
  
    const duration = 4
    
const [count, setCount] = useState(0);
const controls = useAnimation();
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.5,
});
    
    useEffect(() => {
      if (inView) {
        const increment = number / (duration * 60); // Increment per frame (assuming 60 fps)
        let currentCount = 0;
        const step = () => {
          currentCount += increment;
          if (currentCount >= number) {
            setCount(number);
          } else {
            setCount(currentCount);
            requestAnimationFrame(step);
          }
        };
        step();
      }
    }, [inView, number, duration]);


    
  return (
    <button
      className={`flex flex-col md:flex-row p-5 ${classnames} items-center justify-center sm:gap-3 rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
      <motion.p
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className='text-center text-white text-4xl font-bold animate-pulse'>
        {Math.round(count)}
      </motion.p>
      <p className='text-center md:text-left  tracking-wider'>{tag}</p>
    </button>
  );
};

export default StatBtn;
