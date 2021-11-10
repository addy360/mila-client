import React, { useEffect, useState } from "react";

function TimeToday() {
  const [time, setTime] = useState(Date());
  useEffect(() => {
    const th = setInterval(() => setTime((prev) => Date()), 0.11);

    return () => clearTimeout(th);
  }, []);
  return (
    <div className="w-full bg-prisec-50 rounded-md p-4 grid place-content-center">
      <small className="text-yellow-800 text-sm font-semibold">{time}</small>
    </div>
  );
}

export default TimeToday;
