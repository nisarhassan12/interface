import { BaseNavigationBar } from './base';
import { PublicLinks } from '@components/navigation/publicLinks';
import { PublicSideNavContent } from '@components/sideNavigation/public';
import React from 'react';

export const PublicNavigationBar = () => {
  const publicLinks1 = PublicLinks(); //Ai
  return (
    <BaseNavigationBar
      links={publicLinks1}
      sideNavigationDrawer={<PublicSideNavContent />}
    />
  );
};
