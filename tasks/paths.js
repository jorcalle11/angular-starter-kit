export default {
  root: './',
  entry: 'app/app.js',
  html: ['./index.html','./app/**/*.html'],
  js: './app/**/*.js',
  build: {
    dir: './dist'
  }
}
