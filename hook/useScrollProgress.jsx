import React, { useEffect, useState } from "react";



const useScrollProgress = () => {

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight  = document.body.scrollHeight - window.innerHeight;
      // Error: When saving as TSX file error on Number Value
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };
    // event

    window.addEventListener("scroll", updateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
