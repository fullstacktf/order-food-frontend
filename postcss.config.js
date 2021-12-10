module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('cssnano')({
        preset: 'default',
    }),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nesting'),
    require('postcss-extend'),
    require('postcss-bem'),
    require('postcss-conditionals'),
    require('postcss-nested'),
    require('postcss-nested-vars'),
    require('postcss-pxtorem'),
    require('postcss-simple-vars'),
    require('postcss-use'),
    require('postcss-color-emoji'),
  ]
};
