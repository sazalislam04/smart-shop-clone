import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(!time);
    }, 3000);
  }, [time]);

  return (
    <div>
      {time ? (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      ) : undefined}
    </div>
  );
};

export default PreLoader;
