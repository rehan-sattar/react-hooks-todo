import React from "react";
import useToggle from "./hooks/useToggle";

const Toggler = () => {
  const [isHappy, setIsHappy] = useToggle(true);
  const [isHeartBroken, setHeartBroken] = useToggle(false);
  return (
    <div>
      <h1 onClick={() => setIsHappy(!isHappy)}>
        Emoji: {isHappy ? ":)" : ":("}
      </h1>

      <h1 onClick={() => setHeartBroken(!isHeartBroken)}>
        Emoji: {isHeartBroken ? "</3" : "<3"}
      </h1>
    </div>
  );
};

export default Toggler;
