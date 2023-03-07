import React, { useEffect, useState } from 'react';
import { useNode } from '@craftjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Color,
  FIDuplicate,
  Form,
  FormFooter,
  FormGroup,
  FormItem,
  FormTemp,
} from '../Text/Text.styles';
import { RgbaColorPicker } from 'react-colorful';
import { objMargin, objPadding } from './sectionData';
import { colorToRgba } from '../colorConverter';
import { Align, Justify } from './flexControl';

const SectionSettings = () => {
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

  useEffect(() => {
    if (props.height === 'auto') {
      props.uH !== 'auto' && setProp((props) => (props.height = 1));
    }
  }, [props.uH]);

  return (
    <Form>
      <FormFooter>
        <FormItem>
          <label htmlFor='width'>Width:</label>
          <FormGroup>
            <input
              min={1}
              step={1}
              max={(props.uW === '%' || props.uW === 'vh') && 100}
              type={props.width === 'auto' || props.uW === 'auto' ? 'text' : 'number'}
              name='width'
              id='width'
              value={props.width}
              onChange={handleChange}
            />
            <select value={props.uW} onChange={handleChange} name='uW' id='uW'>
              <option defaultValue='px'>px</option>
              <option defaultValue='%'>%</option>
              <option defaultValue='vw'>vw</option>
              <option defaultValue='auto'>auto</option>
            </select>
          </FormGroup>
        </FormItem>
        <FormItem>
          <label htmlFor='height'>Height:</label>
          <FormGroup>
            <input
              min={1}
              step={1}
              type={props.uH === 'auto' || props.height === 'auto' ? 'text' : 'number'}
              name='height'
              id='height'
              value={props.height}
              onChange={handleChange}
            />
            <select value={props.uH} onChange={handleChange} name='uH' id='uH'>
              <option defaultValue='px'>px</option>
              <option defaultValue='%'>%</option>
              <option defaultValue='vh'>vh</option>
              <option defaultValue='auto'>auto</option>
            </select>
          </FormGroup>
        </FormItem>
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
          <label htmlFor='display'>Display:</label>
          <FormGroup variant='resize'>
            <select value={props.display} onChange={handleChange} name='display' id='display'>
              <option defaultValue='block'>block</option>
              <option defaultValue='inline'>inline</option>
              <option defaultValue='flex'>flex</option>
              <option defaultValue='none'>none</option>
            </select>
          </FormGroup>
        </FormItem>
        {props.display === 'flex' && (
          <>
            <FormItem>
              <label htmlFor='flexDirection'>Direction:</label>
              <FormGroup variant='resize'>
                <select
                  value={props.flexDirection}
                  onChange={handleChange}
                  name='flexDirection'
                  id='flexDirection'
                >
                  <option defaultValue='row'>row</option>
                  <option defaultValue='column'>column</option>
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='gap'>Gap:</label>
              <FormGroup>
                <input
                  min={1}
                  step={1}
                  type='number'
                  name='gap'
                  id='gap'
                  value={props.gap}
                  onChange={handleChange}
                />
                <select value={props.uG} onChange={handleChange} name='uG' id='uG'>
                  <option defaultValue='px'>px</option>
                  <option defaultValue='%'>%</option>
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='justifyContent'>Justify:</label>
              <FormGroup variant='resize'>
                <select
                  value={props.justifyContent}
                  onChange={handleChange}
                  name='justifyContent'
                  id='justifyContent'
                >
                  {props.flexDirection === 'row' ? <Justify /> : <Align />}
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='alignItems'>Align:</label>
              <FormGroup variant='resize'>
                <select
                  value={props.alignItems}
                  onChange={handleChange}
                  name='alignItems'
                  id='alignItems'
                >
                  {props.flexDirection === 'row' ? <Align /> : <Justify />}
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='flexWrap'>Wrap:</label>
              <FormGroup variant='resize'>
                <select
                  value={props.flexWrap}
                  onChange={handleChange}
                  name='flexWrap'
                  id='flexWrap'
                >
                  <option defaultValue='wrap'>wrap</option>
                  <option defaultValue='nowrap'>nowrap</option>
                </select>
              </FormGroup>
            </FormItem>
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
          </>
        )}
      </FormFooter>
    </Form>
  );
};

export default SectionSettings;
