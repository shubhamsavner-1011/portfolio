import { Iinput } from "@/types";
import React from "react";

const InputField = ({
  type,
  placeholder,
  field,
  error,
  value,
  ...props
}: any) => {

  return (
    <div>
      <input
        type={type}
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={placeholder}
        value={value}
        {...field}
        {...props}
      />
    </div>
  );
};

export default InputField;
