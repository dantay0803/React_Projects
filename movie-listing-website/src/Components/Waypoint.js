import React, { useState, useEffect, useRef } from 'react';

export default function Waypoint(props) {
  const [seen, setSeen] = useState(false);
  const ref = useRef(null);

  const { callback } = props;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!seen && entry.isIntersecting) {
          setSeen(true);
          callback();
        }
      },
      {
        rootMargin: '0px'
      }
    );
    if (ref.current && !seen) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [seen]);

  return <div ref={ref}></div>;
}
