import React from 'react';

export const Justify = () => {
  return (
    <>
      <option defaultValue='flex-start'>flex-start</option>
      <option defaultValue='flex-end'>flex-end</option>
      <option defaultValue='center'>center</option>
      <option defaultValue='space-evenly'>space-evenly</option>
      <option defaultValue='space-between'>space-between</option>
      <option defaultValue='space-around'>space-around</option>
    </>
  );
};

export const Align = () => {
  return (
    <>
      <option defaultValue='flex-start'>flex-start</option>
      <option defaultValue='flex-end'>flex-end</option>
      <option defaultValue='center'>center</option>
      <option defaultValue='stretch'>stretch</option>
    </>
  );
};
