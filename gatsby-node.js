const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    // enable sourcemaps on dev
  // https: //github.com/gatsbyjs/gatsby/issues/6278
  if (stage === 'develop') {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
    });
  }
  
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const itemTypesWithUrlSlugs = [
    "KontentItemConference",
    "KontentItemPerson",
    "KontentItemPresentation",
    "KontentItemWorkshop",
  ]
  if (itemTypesWithUrlSlugs.find(item => item === node.internal.type)) {
    const slug = node.elements.url_slug.value;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
  query {
    allKontentItemConference(filter: {fields: {slug: {ne: ""}}}) {
      nodes {
        fields {
          slug
        }
      }
    }
    allKontentItemPerson(filter: {fields: {slug: {ne: ""}}}) {
      nodes {
        fields {
          slug
        }
      }
    }
    allKontentItemPresentation(filter: {fields: {slug: {ne: ""}}}) {
      nodes {
        fields {
          slug
        }
      }
    }
    allKontentItemWorkshop(filter: {fields: {slug: {ne: ""}}}) {
      nodes {
        fields {
          slug
        }
      }
    }
  }
  `)
  if (!result.error) {
    result.data.allKontentItemConference.nodes.forEach((node) => {
      createPage({
        path: `/conferences/${node.fields.slug}`,
        component: path.resolve(`./src/templates/conference.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    });
    result.data.allKontentItemPerson.nodes.forEach((node) => {
      createPage({
        path: `/persons/${node.fields.slug}`,
        component: path.resolve(`./src/templates/person.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    });
    result.data.allKontentItemPresentation.nodes.forEach((node) => {
      createPage({
        path: `/presentations/${node.fields.slug}`,
        component: path.resolve(`./src/templates/presentation.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    });
    result.data.allKontentItemWorkshop.nodes.forEach((node) => {
      createPage({
        path: `/workshop/${node.fields.slug}`,
        component: path.resolve(`./src/templates/workshop.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    });
  }
}
