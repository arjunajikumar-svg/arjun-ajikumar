import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
        return () => clearTimeout(t);
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);

  return null;
}
