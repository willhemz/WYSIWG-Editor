import React from 'react';

export const Justify = () => {
  return (
    <>
      <option value='1'>flex-start</option>
      <option value='2'>flex-end</option>
      <option value='3'>center</option>
      <option value='4'>space-evenly</option>
      <option value='5'>space-between</option>
      <option value='6'>space-around</option>
    </>
  );
};

export const Align = () => {
  return (
    <>
      <option value='1'>flex-start</option>
      <option value='2'>flex-end</option>
      <option value='3'>center</option>
      <option value='4'>stretch</option>
    </>
  );
};
