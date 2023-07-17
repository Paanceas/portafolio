import React, { useState, useEffect, ReactElement, Children, cloneElement, CSSProperties } from 'react';

interface TextLoopProps {
  children: ReactElement[];
  interval?: number;
  animationDuration?: number;
}

export const TextLoop: React.FC<TextLoopProps> = ({ children, interval = 3000, animationDuration = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationStyle, setAnimationStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Children.count(children));
      setAnimationStyle({ animation: `fade ${animationDuration / 1000}s` });
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, interval, children, animationDuration]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentChild: any = Children.toArray(children)[currentIndex];

  return (
    <span style={animationStyle} onAnimationEnd={() => setAnimationStyle({})}>
      {cloneElement(currentChild, {
        className: `${currentChild.props.className || ''} active animate__animated animate__fadeInUp`,
      })}
    </span>
  );
};
