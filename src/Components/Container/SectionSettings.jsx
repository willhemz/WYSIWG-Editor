import React, { useState } from 'react';
import { Form, FormFooter, FormGroup, FormItem, FormTemp } from '../Text/Text.styles';
import { RgbaColorPicker } from 'react-colorful';
import { useNode } from '@craftjs/core';
import { colorItem, objMargin, objPadding, sectionData } from './sectionData';
import { colorToRgba } from '../colorConverter';
import { Align, Justify } from './flexControl';

const SectionSettings = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [palette, setPalette] = useState({ color: false, background: false });
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

  const editColor = (item) => {
    if (item === 'color') {
      setPalette(palette.color ? { ...palette, color: false } : { ...palette, color: true });
    }
    if (item === 'background') {
      setPalette(
        palette.background ? { ...palette, background: false } : { ...palette, background: true },
      );
    }
  };

  return (
    <Form>
      <FormFooter>
        <FormItem>
          <label htmlFor='width'>Width:</label>
          <FormGroup>
            <input min={1} step={1} type='number' name='width' id='width' />
            <select defaultValue='auto' name='unit' id='unit'>
              <option value='1'>px</option>
              <option value='2'>%</option>
              <option value='3'>vw</option>
            </select>
          </FormGroup>
        </FormItem>
        <FormItem>
          <label htmlFor='height'>Height:</label>
          <FormGroup>
            <input min={1} step={1} type='number' name='height' id='height' />
            <select defaultValue='auto' name='unit' id='unit'>
              <option value='1'>px</option>
              <option value='2'>%</option>
              <option value='3'>vh</option>
            </select>
          </FormGroup>
        </FormItem>
        <FormItem>
          <label htmlFor='padding'>Padding:</label>
          <FormGroup variant='measure'>
            {objPadding.map((item) => {
              return (
                <FormTemp key={item.id}>
                  <input min={1} step={1} type='number' name={item.name} id={item.name} />
                  <span>px</span>
                </FormTemp>
              );
            })}
          </FormGroup>
        </FormItem>
        <FormItem>
          <label htmlFor='padding'>Margin:</label>
          <FormGroup variant='measure'>
            {objMargin.map((item) => {
              return (
                <FormTemp key={item.id}>
                  <input min={1} step={1} type='number' name={item.name} id={item.name} />
                  <span>px</span>
                </FormTemp>
              );
            })}
          </FormGroup>
        </FormItem>
        <FormItem>
          <label htmlFor='display'>Display:</label>
          <FormGroup variant='resize'>
            <select defaultValue='block' name='unit' id='unit'>
              <option value='1'>block</option>
              <option value='2'>inline</option>
              <option value='3'>flex</option>
              <option value='4'>none</option>
            </select>
          </FormGroup>
        </FormItem>
        {props.display === 'flex' && (
          <>
            <FormItem>
              <label htmlFor='flexDirection'>Direction:</label>
              <FormGroup variant='resize'>
                <select defaultValue='row' name='flexDirection' id='flexDirection'>
                  <option value='1'>row</option>
                  <option value='2'>column</option>
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='gap'>Gap:</label>
              <FormGroup>
                <input min={1} step={1} type='number' name='gap' id='gap' />
                <select defaultValue='auto' name='unit' id='unit'>
                  <option value='1'>px</option>
                  <option value='2'>%</option>
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='justifyContent'>Justify:</label>
              <FormGroup variant='resize'>
                <select defaultValue='row' name='justifyContent' id='justifyContent'>
                  {props.flexDirection === 'row' ? <Justify /> : <Align />}
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='alignItems'>Align:</label>
              <FormGroup variant='resize'>
                <select defaultValue='row' name='alignItems' id='alignItems'>
                  {props.flexDirection === 'row' ? <Align /> : <Justify />}
                </select>
              </FormGroup>
            </FormItem>
            {colorItem.map((item) => {
              return (
                <FormItem key={item.id}>
                  <label htmlFor={item.name}>{item.value}:</label>
                  <FormGroup>
                    <input
                      onClick={() => editColor(item.name)}
                      type='text'
                      name='color'
                      id='color'
                      // value={props.color}
                    />
                  </FormGroup>
                  {palette[item.name] && (
                    <RgbaColorPicker
                      className='colorPicker'
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
                  )}
                </FormItem>
              );
            })}
          </>
        )}
      </FormFooter>
    </Form>
  );
};

export default SectionSettings;
