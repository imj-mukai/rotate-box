var gulp = require('gulp'),
    $    = require('gulp-load-plugins')(),
    p    = require('node-sass-package-importer');

gulp.task('css', function() {
  gulp.src('src/scss/*.scss')
      .pipe($.plumber())
      .pipe($.sass({
        importer: p({
          extensions: ['.scss', '.css']
        })
      }))
      .pipe($.pleeease({
          "autoprefixer": { "browsers": ["last 3 versions"] },
          "filters": false,
          "rem": false,
          "mqpacker": true
      }))
      .pipe(gulp.dest('public/'));
})

gulp.task('watch', function(){
  gulp.watch('src/scss/*', ['css']);
})

gulp.task('default', ['css','watch']);