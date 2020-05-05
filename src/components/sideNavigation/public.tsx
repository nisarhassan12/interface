import React from 'react';
import { SideNavContainer } from '@components/sideNavigation/sideNavContainer';
import { SideNavContent } from '@components/sideNavigation/base';
import { publicLinks } from '@components/navigation/publicLinks';

export const PublicSideNavContent = () => {
  return (
    <SideNavContent links={publicLinks} />
  );
};

export const PublicSideNav = () => {
  return (
    <SideNavContainer>
      <PublicSideNavContent />
    </SideNavContainer>
  );
};
