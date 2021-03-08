import { useState } from "react";
import useIncrementModel from "../models/hooks/useIncrement.model";

function useIncrement(): useIncrementModel {
  const [increament, setIncrement] = useState(0);

  const setIncrementByVal = (): void => {
    setIncrement((oldState) => ++oldState);
  };

  return [increament, setIncrementByVal];
}

export default useIncrement;
