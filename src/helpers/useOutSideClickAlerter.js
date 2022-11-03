import { useEffect, useState } from "react";

export function useOutsideAlerter(ref) {
  const [isOutside, setIsOutSIde] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutSIde(true);
      } else {
        setIsOutSIde(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isOutside;
}
