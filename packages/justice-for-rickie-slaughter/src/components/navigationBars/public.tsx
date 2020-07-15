import { BaseNavigationBar } from './base';
import { PublicSideNavContent } from '../sideNavigation/public';
import React from 'react';

export const PublicNavigationBar = () => {
  return (
    <BaseNavigationBar
      sideNavigationDrawer={<PublicSideNavContent />}
    />
  );
};
