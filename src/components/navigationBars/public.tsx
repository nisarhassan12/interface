import { BaseNavigationBar } from './base';
import { PublicSideNavContent } from '@components/sideNavigation/public';
import React from 'react';
import { publicLinks } from '@components/navigation/publicLinks';

export const PublicNavigationBar = () => {
  return (
    <BaseNavigationBar
      links={publicLinks}
      sideNavigationDrawer={<PublicSideNavContent />}
    />
  );
};
