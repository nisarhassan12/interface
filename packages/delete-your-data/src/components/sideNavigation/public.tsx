import { PublicLinks } from '../navigation/publicLinks';
import React from 'react';
import { SideNavContainer } from './sideNavContainer';
import { SideNavContent } from './base';

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
