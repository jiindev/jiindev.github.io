
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
            amily: `Montserrat`,
            subsets: [`latin`],
            variants: [`100`, `400`, `700`]
          }
        ],
      },
    }
  ]
}
