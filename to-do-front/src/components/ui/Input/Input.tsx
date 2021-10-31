import React, { ChangeEvent } from "react";

type Props = {
  type: "text" | "password";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete: boolean;
};

const Input = React.memo<Props>(({ type, autoComplete, value, onChange }) => {
  console.log("rerender");
  return <input type={type} autoComplete={autoComplete ? "on" : "off"} value={value} onChange={onChange} />;
});

export { Input };
