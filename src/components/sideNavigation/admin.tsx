import React from 'react';

import { SideNavContainer } from '@components/sideNavigation/sideNavContainer';
import { SideNavContent } from '@components/sideNavigation/base';

export const AdminSideNavContent = () => {
  const links = [
    { label: 'Dashboard', route: '/admin' },
    { label: 'Users', route: '/admin/users' },
    { label: 'Questions', route: '/admin/questions' },
    { label: 'Queue', route: '/admin/queue-jobs' },
    { label: 'Matters', route: '/admin/matters' },
    { label: 'Law Firms', route: '/admin/law-firms' }
  ];
  return (
    <SideNavContent links={links} />
  );
};


export const AdminSideNav = props => {
  return (
    <SideNavContainer {...props}>
      <AdminSideNavContent />
    </SideNavContainer>
  );
};
