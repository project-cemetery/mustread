module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    require('postcss-custom-media')({
      importFrom: './src/custom-media.css',
    }),
    require('postcss-scrollbar'),
    require('postcss-color-mod-function'),
  ],
};
