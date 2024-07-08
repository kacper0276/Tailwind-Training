const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();

function css() {
  return gulp
    .src("src/css/style.css")
    .pipe(postcss([tailwindcss, autoprefixer]))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

function copyHtml() {
  return gulp.src("src/**/*.html").pipe(gulp.dest("dist"));
}

function serve() {
  browserSync.init({
    server: "./dist",
  });

  gulp.watch("src/styles/**/*.css", css);
  gulp
    .watch("src/**/*.html", gulp.series(copyHtml))
    .on("change", browserSync.reload);
}

exports.css = css;
exports.serve = gulp.series(css, copyHtml, serve);
