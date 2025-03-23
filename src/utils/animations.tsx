
import { useEffect, useState, useRef } from 'react';

export const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isInView };
};

export const AnimateOnScroll = ({ 
  children,
  animation = 'animate-fade-in',
  className = '',
  delay = '',
  once = true
}: { 
  children: React.ReactNode,
  animation?: string,
  className?: string,
  delay?: string,
  once?: boolean
}) => {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref} 
      className={`${className} ${isInView ? `${animation} ${delay}` : 'opacity-0'}`}
      style={{ 
        animationFillMode: 'both',
        animationPlayState: isInView ? 'running' : 'paused'
      }}
    >
      {children}
    </div>
  );
};
