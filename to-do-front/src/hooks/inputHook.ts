import { useState, ChangeEvent } from "react";

const useInput = (initValue: string) => {
  const [value, set] = useState<string>(initValue);
  return { value, onChange: (e: ChangeEvent<HTMLInputElement>) => set(e.target.value) };
};

export { useInput };
