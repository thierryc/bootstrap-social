import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('less', () => {
  return gulp.src('./bootstrap-social.less')
    .pipe($.less())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', () => {
  return gulp.src('./src-bootstrap-social.scss')
    .pipe($.sass())
    .pipe($.rename({
      basename: "bootstrap-social"
    }))
    .pipe(gulp.dest('./css'))
    .pipe(gulp.dest('./dist'))
    .pipe($.cleanCss({keepBreaks: true}))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('diff', () => {
  console.log('diff');
});

gulp.task('default', ['sass'], () => {
  console.log('diff');
});

gulp.task('deploy', ['sass'], () => {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages());
});

