import React from 'react';
import { Form, FormHeader, FormFooter, FormItem } from '../Text/Text.styles';
import { CirclePicker } from 'react-colorful';
import { useNode } from '@craftjs/core';
import { sectionData } from './sectionData';

const SectionSettings = () => {
  const {
    actions: { setProp },
    props,
    nodeName,
  } = useNode((node) => ({ props: node.data.props, nodeName: node.data.displayName }));

  const handleChange = (e, color) => {
    const name = e.target.name;
    const value = name === 'background' || name === 'color' ? color : e.target.value;
    setProp((props) => (props[name] = value));
  };

  return (
    <Form>
      <FormHeader>
        <p>Selected:</p>
        <h3>{nodeName}</h3>
      </FormHeader>
      <FormFooter>
        {sectionData.map((item) => {
          return (
            <FormItem key={item.id}>
              <label htmlFor={item.name}>{item.value}:</label>
              {item.name === 'background' || item.name === 'color' ? (
                <CirclePicker
                  name={item.name}
                  colors={['#fff', '#ff0000', '#00ff00', '#0000ff', '#000']}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type='text'
                  name={item.name}
                  id={item.name}
                  value={props[item.name]}
                  onChange={handleChange}
                />
              )}
            </FormItem>
          );
        })}
      </FormFooter>
    </Form>
  );
};

export default SectionSettings;
