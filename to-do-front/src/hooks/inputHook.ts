import { useState, useCallback, ChangeEvent } from "react";

const useInput = (initValue: string) => {
  const [value, set] = useState<string>(initValue);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    set(e.target.value);
  }, []);
  return {
    value,
    onChange,
  };
};

export { useInput };
