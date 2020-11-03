import React, { useState } from 'react';
import Switch from 'react-input-switch';

const Switch2 = () => {
  const [value, setValue] = useState(0);

  return <Switch value={value} onChange={setValue} />;
};

export default Switch2 