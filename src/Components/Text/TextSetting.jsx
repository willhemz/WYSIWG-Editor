import React, { useRef, useState } from 'react';
import { Form, FormFooter, FormItem, FIDuplicate, FormGroup, FormTemp, Color } from './Text.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from './textData';
import { useNode } from '@craftjs/core';
import { RgbaColorPicker } from 'react-colorful';
import { colorToRgba } from '../colorConverter';
import { objPadding, objMargin } from '../Container/sectionData';

const TextSetting = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [palette, setPalette] = useState(false);
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({ props: node.data.props }));

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProp((props) => (props[name] = value));
  };

  return (
    <Form>
      <FormFooter>
        <FIDuplicate>
          <label htmlFor='fontSize'>Font Size:</label>
          <FormGroup variant='measure'>
            <input
              type='number'
              name='fontSize'
              id='fontSize'
              min={1}
              step={1}
              value={props.fontSize}
              onChange={handleChange}
            />
            <span>px</span>
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='lineHeight'>Line Height:</label>
          <FormGroup variant='measure'>
            <input
              type='number'
              name='lineHeight'
              id='lineHeight'
              min={1}
              step={1}
              value={props.lineHeight}
              onChange={handleChange}
            />
            <span>px</span>
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='fontFamily'>Font Family:</label>
          <FormGroup variant='resize'>
            <select
              value={props.fontFamily}
              onChange={handleChange}
              name='fontFamily'
              id='fontFamily'
            >
              <option defaultValue='Arial'>Arial</option>
              <option defaultValue='Times New Roman'>Times New Roman</option>
              <option defaultValue='Tahoma'>Tahoma</option>
              <option defaultValue='cursive'>cursive</option>
            </select>
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='fontStyle'>Font Style:</label>
          <FormGroup variant='resize'>
            <select value={props.fontStyle} onChange={handleChange} name='fontStyle' id='fontStyle'>
              <option defaultValue='normal'>normal</option>
              <option defaultValue='italic'>italic</option>
            </select>
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='fontWeight'>Font Weight:</label>
          <FormGroup variant='resize'>
            <select
              value={props.fontWeight}
              onChange={handleChange}
              name='fontWeight'
              id='fontWeight'
            >
              <option defaultValue='100'>100</option>
              <option defaultValue='200'>200</option>
              <option defaultValue='300'>300</option>
              <option defaultValue='400'>400</option>
              <option defaultValue='500'>500</option>
              <option defaultValue='600'>600</option>
              <option defaultValue='700'>700</option>
              <option defaultValue='800'>800</option>
              <option defaultValue='900'>900</option>
            </select>
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='textAlign'>Text Align</label>
          <FormGroup variant='resize'>
            <select value={props.textAlign} onChange={handleChange} name='textAlign' id='textAlign'>
              <option defaultValue='left'>left</option>
              <option defaultValue='center'>center</option>
              <option defaultValue='right'>right</option>
              <option defaultValue='justify'>justify</option>
            </select>
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='flexBasis'>Flex Basis:</label>
          <FormGroup variant='measure'>
            <input
              type='number'
              name='flexBasis'
              id='flexBasis'
              min={0}
              step={1}
              value={props.flexBasis}
              onChange={handleChange}
            />
            <span>%</span>
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='padding'>Padding:</label>
          <FormGroup variant='measure'>
            {objPadding.map((item) => {
              return (
                <FormTemp key={item.id}>
                  <input
                    min={1}
                    step={1}
                    type='number'
                    name={item.name}
                    id={item.name}
                    value={props[item.name]}
                    onChange={handleChange}
                  />
                  <span>px</span>
                </FormTemp>
              );
            })}
          </FormGroup>
        </FIDuplicate>
        <FIDuplicate>
          <label htmlFor='margin'>Margin:</label>
          <FormGroup variant='measure'>
            {objMargin.map((item) => {
              return (
                <FormTemp key={item.id}>
                  <input
                    min={1}
                    step={1}
                    type='number'
                    name={item.name}
                    id={item.name}
                    value={props[item.name]}
                    onChange={handleChange}
                  />
                  <span>px</span>
                </FormTemp>
              );
            })}
          </FormGroup>
        </FIDuplicate>
        <FormItem>
          <label htmlFor='color'>Color:</label>
          <FormGroup variant='resize'>
            <input
              readOnly
              onClick={() => setPalette(true)}
              type='text'
              name='color'
              id='color'
              value={props.color}
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
                  setProp((props) => (props.color = colorToRgba(color)));
                }}
              />
            </Color>
          )}
        </FormItem>
      </FormFooter>
    </Form>
  );
};

export default TextSetting;
