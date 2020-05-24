import React from 'react';
import { SideNavContainer } from '@components/sideNavigation/sideNavContainer';
import { SideNavContent } from '@components/sideNavigation/base';
import { publicLinks } from '@components/navigation/publicLinks';

export const PublicSideNavContent = () => {
  const publicLinks1 = publicLinks() //Ai
  return (
    <SideNavContent links={publicLinks1} />
  );
};

export const PublicSideNav = () => {
  return (
    <SideNavContainer>
      <PublicSideNavContent />
    </SideNavContainer>
  );
};
