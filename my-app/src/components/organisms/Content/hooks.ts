// Custom Hooks
import { useState, useCallback } from "react";

// export const useCount = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => setCount(count + 1);
//   const handleDecrement = () => setCount(count - 1);

//   return {
//     count,
//     handleIncrement,
//     handleDecrement,
//   };
// };

export const useCount = () => {
  const [count, setCount] = useState(0);
  console.log("----------useCount rendering----------");

  const handleIncrement = useCallback(() => {
    console.log("----------Count renderingI----------");
    return setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    console.log("----------Count renderingD----------");
    return setCount(count - 1);
  }, [count]);

  const resetCount = useCallback(() => {
    console.log("----------execute resetCount----------");
    return setCount(0);
  }, []);

  return { count, handleIncrement, handleDecrement, resetCount };
};
