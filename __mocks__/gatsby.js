const React = require('react');
const gatsby = jest.requireActual('gatsby');
module.exports = {
  Link: jest.fn().mockImplementation(
    ({
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  ...gatsby,
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
};
