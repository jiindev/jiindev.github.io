/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans KR`,
            subsets: [`korean`],
            variants: [`100`, `400`, `700`]
          },
          {
            family: `Inter`,
            subsets: [`latin`],
            variants: [`300`,`500`,`700`,`900`]
          },
          {
            amily: `Montserrat`,
            subsets: [`latin`],
            variants: [`100`, `400`, `700`]
          }
        ],
      },
    }
  ],
}
