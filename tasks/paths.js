export default {
  root: './',
  entry: 'app/app.js',
  html: ['./index.html','./app/**/*.html'],
  js: './app/**/*.js',
  styles: {
    dir: './assets/css',
    scss: './app/**/*.scss',
    css: './assets/css/*.css'
  },
  build: {
    dir: './dist'
  }
}
