import { PublicLinks } from '@components/navigation/publicLinks';
import React from 'react';
import { SideNavContainer } from '@components/sideNavigation/sideNavContainer';
import { SideNavContent } from '@components/sideNavigation/base';

export const PublicSideNavContent = () => {
  const publicLinks1 = PublicLinks(); //Ai
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
