const autoprefixer = require("autoprefixer");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const browserSync = require("browser-sync").create();

// Kompilacja stylów
function style() {
  return gulp
    .src("./src/*.css")
    .pipe(postcss())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
}

exports.style = style;
