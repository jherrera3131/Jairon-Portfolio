import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("show");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}