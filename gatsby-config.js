module.exports = {
  plugins: [
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        deliveryClientConfig: { // Configuration object
          projectId: `a07e4ffc-b3d9-01ad-8c06-65fa8d1a05f7`,
          typeResolvers: []
        },
        languageCodenames: [ // example configuration
          `default`, // default language
        ]
      }
    }
  ]
}
