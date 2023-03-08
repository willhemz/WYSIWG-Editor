import React, { useEffect, useState } from 'react';
import { useEditor, useNode } from '@craftjs/core';
import { useSelector } from 'react-redux';
import { genProps, calcSize } from '../Container/sectionData';
import SectionSettings from '../Container/SectionSettings';
import { Form } from './Form.styles';

const FormComponent = ({ children }) => {
  const { isDesktop, isTablet, isMobile, boxWidth } = useSelector((store) => ({
    isDesktop: store.isDesktop,
    isTablet: store.isTablet,
    isMobile: store.isMobile,
    boxWidth: store.boxWidth,
  }));
  const {
    connectors: { connect, drag },
    custom: { desktop, tablet, mobile },
  } = useNode((node) => ({
    custom: node.data.custom,
  }));
  const { enabled, query } = useEditor((store) => ({ enabled: store.options.enabled }));

  let view;
  if (isDesktop) {
    view =
      enabled && desktop.uW === 'px'
        ? { ...desktop, width: calcSize(desktop.width, boxWidth) }
        : { ...desktop };
  }
  if (isTablet) {
    view =
      enabled && tablet.uW === 'px'
        ? { ...tablet, width: calcSize(tablet.width, boxWidth) }
        : { ...tablet };
  }
  if (isMobile) {
    view =
      enabled && mobile.uW === 'px'
        ? { ...mobile, width: calcSize(mobile.width, boxWidth) }
        : { ...mobile };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const state = Object.values(query.getNodes())
      .map((obj) => obj.data)
      .filter((obj) => obj.name === 'Input')
      .reduce((state, { props }) => {
        const { name, text } = props;
        return (state = { ...state, [name]: text });
      }, {});

    console.log(state, 'submitted');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      variant={enabled && 'selected'}
      ref={(ref) => connect(drag(ref))}
      custom={view}
    >
      {children}
    </Form>
  );
};

FormComponent.craft = {
  props: { ...genProps, data: [] },
  custom: { mobile: {}, tablet: {}, desktop: {} },
  related: {
    settings: SectionSettings,
  },
};

export default FormComponent;
