export default {
  root: './',
  bower: './bower.json',
  entry: 'app/app.js',
  html: ['./index.html','./app/**/*.html'],
  templates: ['./app/templates','!./app/templates/*.js'],
  js: './app/**/*.js',
  styles: {
    file: 'style.css',
    dir: './assets/css',
    scss: './app/**/*.scss',
    css: './assets/css/*.css'
  }
}
