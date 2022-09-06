import React, { useEffect } from "react";

export default function Info({ type, msg, removeInfo, list }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeInfo();
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [list]); // Once anything changes on the list, clear timeout and set up new one.

  return (
    <div className="info_container">
      <p className={`info info_${type} animate__animated animate__fadeOutRight`}>
        {msg}
      </p>
    </div>
  );
}
