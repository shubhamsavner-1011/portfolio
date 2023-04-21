import React from "react";
import { Form } from "react-bootstrap";

const TextArea = ({
  rows,
  type,
  placeholder,
  field,
  error,
  value,
  ...props
}: any) => {
  return (
    <div>
      <Form.Control
        as={type}
        rows={rows}
        placeholder={placeholder}
        value={value}
        {...field}
        {...props}
      />
    </div>
  );
};

export default TextArea;
