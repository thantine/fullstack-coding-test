import React, { useState, useImperativeHandle, forwardRef } from "react";

import { Heading } from "@chakra-ui/react";

const DynamicText = (props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  useImperativeHandle(ref, () => ({
    changeValue
  }));

  return <Heading as="h1">{value}</Heading>;
};

export default forwardRef(DynamicText);
