import { graphql, useStaticQuery } from 'gatsby';

interface ISiteMedata {
  title: string;
  description: string;
  author: string;
}

export const useSiteMetadata = (): ISiteMedata => {
  const {
    site: {
      siteMetadata = {} as ISiteMedata,
    } = {},
  } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return siteMetadata;
};
