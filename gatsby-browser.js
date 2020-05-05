import React from 'react';
import { RenderLayout } from './src/utils/renderLayout';

export const wrapRootElement = ({ element }) => {
  return <RenderLayout>{element}</RenderLayout>;
};
