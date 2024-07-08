const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const browserSync = require("browser-sync").create();

function css() {
  return gulp
    .src("src/style.css")
    .pipe(postcss([tailwindcss, require("autoprefixer")]))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: "./dist",
  });

  gulp.watch("src/styles/**/*.css", css);
  gulp
    .watch("src/**/*.html")
    .on("change", gulp.series(copyHtml, browserSync.reload));
}

function copyHtml() {
  return gulp.src("src/**/*.html").pipe(gulp.dest("dist"));
}

exports.css = css;
exports.serve = gulp.series(css, copyHtml, serve);
