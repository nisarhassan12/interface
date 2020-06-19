import { PortalLayout } from '@layouts/portal';
import { PortalProfileForm } from '@forms/portalProfileForm';
import React from 'react';

const PortalPage = () => {
  return (
    <PortalLayout>
      <PortalProfileForm />
    </PortalLayout>
  );
};

export default PortalPage;
