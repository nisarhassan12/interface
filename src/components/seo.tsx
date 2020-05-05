import { Helmet } from 'react-helmet';
import { Location } from '@reach/router';
import React from 'react';
import { useSiteMetadata } from '../hooks';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
  image?: string;
}

export const Seo: React.FC<SeoProps> = (
  {
    description = '',
    lang = 'en',
    meta = [],
    title,
    image = 'https://www.neonlaw.com/images/logo.png'
  }
) => {
  const {
    title: metaTitle,
    description: metaDescription,
    author: metaAuthor,
  } = useSiteMetadata();

  description = description || metaDescription;
  title = title || metaTitle;

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${metaTitle}`}
          meta={[
            {
              content: description,
              name: 'description',
            },
            {
              content: `${title} | ${metaTitle}`,
              property: 'og:title',
            },
            {
              content: `${process.env.SITE_URL}${location.pathname}`,
              property: 'og:url',
            },
            {
              content: description,
              property: 'og:description',
            },
            {
              content: 'Neon Law',
              property: 'og:site_name',
            },
            {
              content: 'website',
              property: 'og:type',
            },
            {
              content: image,
              property: 'og:image',
            },
            {
              content: 'image/png',
              property: 'og:image:type',
            },
            {
              content: metaAuthor,
              name: 'twitter:creator',
            },
            {
              content: '@NeonLaw',
              name: 'twitter:creator',
            },
          ].concat(meta)}
        />
      )}
    </Location>
  );
};
