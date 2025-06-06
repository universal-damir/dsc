import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp = ({ end, duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation
      const easing = (t: number) => --t * t * t + 1;
      const easedProgress = easing(progressPercentage);
      
      const newCount = Math.floor(easedProgress * end);
      
      if (newCount !== countRef.current) {
        countRef.current = newCount;
        setCount(newCount);
      }

      if (progressPercentage < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration]);

  return <>{count}</>;
};

export default CountUp;