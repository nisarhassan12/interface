import { BaseNavigationBar } from './base';
import { PublicSideNavContent } from '@components/sideNavigation/public';
import React from 'react';
import { publicLinks } from '@components/navigation/publicLinks';

export const PublicNavigationBar = () => {
  const publicLinks1 = publicLinks() //Ai
  return (
    <BaseNavigationBar
      links={publicLinks1}
      sideNavigationDrawer={<PublicSideNavContent />}
    />
  );
};
