const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/training/)) {
    page.matchPath = '/training/*';
    // Update the page.
    createPage(page);
  }
};
