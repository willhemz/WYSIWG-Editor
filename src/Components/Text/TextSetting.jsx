import React, { useState } from 'react';
import { Form, FormHeader, FormFooter, FormItem } from './Text.styles';
import { data } from './textData';
import { useNode } from '@craftjs/core';

const TextSetting = () => {
  const {
    actions: { setProp },
    props,
    nodeName,
  } = useNode((node) => ({ props: node.data.props, nodeName: node.data.displayName }));

  const [data, setData] = useState({ ...props });
  console.log(data);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProp((props) => (props[name] = value));
  };

  return (
    <Form>
      <FormHeader>
        <p>Selected:</p>
        <h3>{nodeName}</h3>
      </FormHeader>
      <FormFooter>
        {data.map((item) => {
          return (
            <FormItem key={item.id}>
              <label htmlFor={item.name}>{item.value}:</label>
              <input
                type='text'
                name={item.name}
                id={item.name}
                value={props[item.name]}
                onChange={handleChange}
              />
            </FormItem>
          );
        })}
      </FormFooter>
    </Form>
  );
};

export default TextSetting;
