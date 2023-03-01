import React, { useState } from 'react';
import { Form, FormFooter, FormItem } from '../Text/Text.styles';
import { RgbaColorPicker } from 'react-colorful';
import { useNode } from '@craftjs/core';
import { sectionData } from './sectionData';
import { colorToRgba } from '../colorConverter';

const SectionSettings = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const {
    actions: { setProp },
    props,
    nodeName,
  } = useNode((node) => ({ props: node.data.props, nodeName: node.data.displayName }));

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProp((props) => (props[name] = value));
  };

  return (
    <Form>
      <FormFooter>
        {sectionData.map((item) => {
          return (
            <FormItem key={item.id}>
              <label htmlFor={item.name}>{item.value}:</label>
              {item.name === 'background' || item.name === 'color' ? (
                <RgbaColorPicker
                  name={item.name}
                  color={color}
                  onChange={(color) => {
                    setColor;
                    setProp((props) =>
                      item.name === 'color'
                        ? (props.color = colorToRgba(color))
                        : (props.background = colorToRgba(color)),
                    );
                  }}
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