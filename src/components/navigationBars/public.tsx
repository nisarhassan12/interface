import { BaseNavigationBar } from './base';
import { PublicSideNavContent } from '@components/sideNavigation/public';
import React from 'react';
import { PublicLinks } from '@components/navigation/publicLinks';

export const PublicNavigationBar = () => {
  const publicLinks1 = PublicLinks(); //Ai
  return (
    <BaseNavigationBar
      links={publicLinks1}
      sideNavigationDrawer={<PublicSideNavContent />}
    />
  );
};
