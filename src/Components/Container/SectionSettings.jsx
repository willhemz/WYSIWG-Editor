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
import { useSelector } from 'react-redux';

const SectionSettings = () => {
  const { isDesktop, isMobile, isTablet } = useSelector((store) => ({
    isDesktop: store.isDesktop,
    isTablet: store.isTablet,
    isMobile: store.isMobile,
  }));
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [palette, setPalette] = useState(false);
  const {
    actions: { setProp, setCustom },
    props,
    custom,
  } = useNode((node) => ({ props: node.data.props, custom: node.data.custom }));

  const [data, setData] = useState(props);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (isDesktop) setCustom((custom) => (custom.desktop[name] = value));
    if (isTablet) setCustom((custom) => (custom.tablet[name] = value));
    if (isMobile) setCustom((custom) => (custom.mobile[name] = value));
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (data.height === 'auto') {
      data.uH !== 'auto' && setData({ ...data, height: 1 });
    }
    if (custom.desktop.height === 'auto')
      custom.desktop.uH !== 'auto' && setCustom((custom) => (custom.desktop.height = 1));
    if (custom.tablet.height === 'auto')
      custom.tablet.uH !== 'auto' && setCustom((custom) => (custom.tablet.height = 1));
    if (custom.tablet.height === 'auto')
      custom.tablet.uH !== 'auto' && setCustom((custom) => (custom.tablet.height = 1));
  }, [data.uH, custom]);

  useEffect(() => {
    if (isDesktop) {
      Object.keys(custom.desktop).length === 0
        ? setCustom((custom) => (custom.desktop = data))
        : (custom.desktop, setData(custom.desktop));
    }
    if (isTablet) {
      Object.keys(custom.tablet).length === 0
        ? setCustom((custom) => (custom.tablet = data))
        : (custom.tablet, setData(custom.tablet));
    }
    if (isMobile) {
      Object.keys(custom.mobile).length === 0
        ? setCustom((custom) => (custom.mobile = data))
        : (custom.mobile, setData(custom.mobile));
    }
  }, [isDesktop, isTablet, isMobile]);

  return (
    <Form>
      <FormFooter>
        <FormItem>
          <label htmlFor='width'>Width:</label>
          <FormGroup>
            <input
              min={1}
              step={1}
              max={data.uW === '%' || data.uW === 'vh' ? '100' : undefined}
              type={data.width === 'auto' || data.uW === 'auto' ? 'text' : 'number'}
              name='width'
              id='width'
              value={data.width}
              onChange={handleChange}
            />
            <select value={data.uW} onChange={handleChange} name='uW' id='uW'>
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
              type={data.uH === 'auto' || data.height === 'auto' ? 'text' : 'number'}
              name='height'
              id='height'
              value={data.height}
              onChange={handleChange}
            />
            <select value={data.uH} onChange={handleChange} name='uH' id='uH'>
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
                    value={data[item.name]}
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
                    value={data[item.name]}
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
            <select value={data.display} onChange={handleChange} name='display' id='display'>
              <option defaultValue='block'>block</option>
              <option defaultValue='inline'>inline</option>
              <option defaultValue='flex'>flex</option>
              <option defaultValue='none'>none</option>
            </select>
          </FormGroup>
        </FormItem>
        {data.display === 'flex' && (
          <>
            <FormItem>
              <label htmlFor='flexDirection'>Direction:</label>
              <FormGroup variant='resize'>
                <select
                  value={data.flexDirection}
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
                  value={data.gap}
                  onChange={handleChange}
                />
                <select value={data.uG} onChange={handleChange} name='uG' id='uG'>
                  <option defaultValue='px'>px</option>
                  <option defaultValue='%'>%</option>
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='justifyContent'>Justify:</label>
              <FormGroup variant='resize'>
                <select
                  value={data.justifyContent}
                  onChange={handleChange}
                  name='justifyContent'
                  id='justifyContent'
                >
                  {data.flexDirection === 'row' ? <Justify /> : <Align />}
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='alignItems'>Align:</label>
              <FormGroup variant='resize'>
                <select
                  value={data.alignItems}
                  onChange={handleChange}
                  name='alignItems'
                  id='alignItems'
                >
                  {data.flexDirection === 'row' ? <Align /> : <Justify />}
                </select>
              </FormGroup>
            </FormItem>
            <FormItem>
              <label htmlFor='flexWrap'>Wrap:</label>
              <FormGroup variant='resize'>
                <select value={data.flexWrap} onChange={handleChange} name='flexWrap' id='flexWrap'>
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
                  value={data.background}
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
                      setData({ ...data, background: colorToRgba(color) });
                      isDesktop &&
                        setCustom((custom) => (custom.desktop['background'] = colorToRgba(color)));
                      isTablet &&
                        setCustom((custom) => (custom.tablet['background'] = colorToRgba(color)));
                      isMobile &&
                        setCustom((custom) => (custom.mobile['background'] = colorToRgba(color)));
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
