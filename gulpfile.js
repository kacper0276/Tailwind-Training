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

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch("./src/*.css", style);
  gulp.watch("./tailwind.config.js", style);
  gulp.watch("./dist/*.html").on("change", browserSync.reload);
}

exports.watch = watch;
exports.style = style;
