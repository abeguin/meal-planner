const React = require('react')
const gatsby = jest.requireActual('gatsby')
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest
    .fn()
    .mockImplementation(({ to, activeClassName, partiallyActive, ...rest }) =>
      React.createElement('a', {
        ...rest,
        href: to,
        'data-partially-active': partiallyActive,
        'data-active-class': activeClassName,
      })
    ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
