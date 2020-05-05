import { AdminLayout } from '@layouts/admin';
import { LawyersLayout } from '@layouts/lawyers';
import { Location } from '@reach/router';
import { PortalLayout } from '@layouts/portal';
import { PublicLayout } from '@layouts/public';
import React from 'react';

export class RenderLayout extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          if (location.pathname.match('/portal')) {
            return <PortalLayout>{this.props.children}</PortalLayout>;
          }
          if (location.pathname.match('/lawyers')) {
            return <LawyersLayout>{this.props.children}</LawyersLayout>;
          }
          if (location.pathname.match('/admin')) {
            return <AdminLayout>{this.props.children}</AdminLayout>;
          }
          return <PublicLayout>{this.props.children}</PublicLayout>;
        }}
      </Location>
    );
  }
}
