import React, { useRef, useState } from 'react';
import { Form, FormFooter, FormItem } from './Text.styles';
import { data } from './textData';
import { useNode } from '@craftjs/core';
import { RgbaColorPicker } from 'react-colorful';

const TextSetting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({ props: node.data.props }));

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProp((props) => (props[name] = value));
  };

  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });

  return (
    <Form>
      <FormFooter>
        {data.map((item) => {
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

export const colorToRgba = (color) => {
  let { r, g, b, a } = color;

  if (a === 'NaN') a = 1;
  return `rgba(${r},${g},${b},${a})`;
};

export default TextSetting;
