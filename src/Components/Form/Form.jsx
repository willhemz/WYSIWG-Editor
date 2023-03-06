import { useEditor, useNode } from '@craftjs/core';
import React, { useEffect, useState } from 'react';
import { genProps } from '../Container/Container';
import SectionSettings from '../Container/SectionSettings';
import { Form } from './Form.styles';

const FormComponent = ({ children, ...props }) => {
  const [data, setData] = useState([]);
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      variant={enabled && 'selected'}
      ref={(ref) => connect(drag(ref))}
      {...props}
    >
      {children}
    </Form>
  );
};

FormComponent.craft = {
  props: { ...genProps, data: [] },
  related: {
    settings: SectionSettings,
  },
};

export default FormComponent;
