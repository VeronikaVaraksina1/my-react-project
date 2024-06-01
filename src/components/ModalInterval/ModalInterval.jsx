import { useEffect } from "react";

export const ModalInterval = () => {
useEffect(() => {
  console.log("Start the interval");

  const interval = setInterval(() => {
    console.log(`Date now: ${Date.now()}`);
  }, 2000)

  return () => {
    clearInterval(interval);
    console.log("Clear the interval");
  }

}, [])

  return <div>Open Interval</div>;
};
