import React, { useState } from 'react';
import { Form, FormFooter, FormItem, FormGroup, Color } from '../Text/Text.styles';
import { RgbaColorPicker } from 'react-colorful';
import { useNode } from '@craftjs/core';
import { colorToRgba } from '../colorConverter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainSettings = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [palette, setPalette] = useState(false);
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({ props: node.data.props }));
  return (
    <Form>
      <FormFooter>
        <FormItem>
          <label htmlFor='background'>Background:</label>
          <FormGroup variant='resize'>
            <input
              readOnly
              onClick={() => setPalette(true)}
              type='text'
              name='background'
              id='background'
              value={props.background}
            />
          </FormGroup>
          {palette && (
            <Color>
              <button onClick={() => setPalette(false)}>
                <FontAwesomeIcon icon='fa-solid fa-xmark' />
              </button>
              <RgbaColorPicker
                color={color}
                onChange={(color) => {
                  setColor;
                  setProp((props) => (props.background = colorToRgba(color)));
                }}
              />
            </Color>
          )}
        </FormItem>
      </FormFooter>
    </Form>
  );
};

export default MainSettings;
