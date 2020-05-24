import { useIntl } from 'gatsby-plugin-intl';


export const publicLinks = () => {
  const intl = useIntl();
  // const label=intl.formatMessage({ id: 'footer.privacy_Policy' });
  const links1 = [
      { label:intl.formatMessage({ id: 'navigation_publicL.upward' }) ,
      route: '/upward-mobility' },
      { label: intl.formatMessage({ id: 'navigation_publicL.practiceAreas' }),
       route: '/practice-areas' },
      { label: intl.formatMessage({ id: 'navigation_publicL.blog' }),
      route: '/blog' },
      { label: intl.formatMessage({ id: 'navigation_publicL.contact' }),
      route: '/contact' }
    ];

  return (
    links1
  );
};

// export const publicLinks = [
//   { label: 'Upward Mobility', route: '/upward-mobility' },
//   { label: 'Practice Areas', route: '/practice-areas' },
//   { label: 'Blog', route: '/blog' },
//   { label: 'Contact', route: '/contact' }
// ];