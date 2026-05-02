import { lazy, Suspense } from "react";
import "./Home.css";
import img from "../../assets/imgs/png/hero.png"
// Lazy load images component
const LazyImage = ({ src, alt, className }) => {
  return (
    <img
      src={img}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default function Home() {
  return (
    <div>
        
    </div>
  );
}
