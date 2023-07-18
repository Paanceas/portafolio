import React, { useEffect, useState } from 'react';

interface ScrollSpyProps {
  className: string;
  items: string[];
  currentClassName: string;
  offset: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({ className, items, currentClassName, offset, children }) => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      for (const item of items) {
        const element = document.getElementById(item);

        if (element) {
          const { top, height } = element.getBoundingClientRect();
          const elementTop = top + scrollPosition;
          const elementBottom = elementTop + height;

          if (scrollPosition >= elementTop - offset && scrollPosition < elementBottom - offset) {
            setActiveItem(item);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, offset]);

  return (
    <ul className={className}>
      {React.Children.map(children, (child) => {
        const childClassName = child.props.className || '';

        const childrenProps = child.props?.children?.props || '';

        if (activeItem === childrenProps.href?.substr(1)) {
          return React.cloneElement(child, {
            className: `${childClassName} ${currentClassName}`,
          });
        }

        return child;
      })}
    </ul>
  );
};
