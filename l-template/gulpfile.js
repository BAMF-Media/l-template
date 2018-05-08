const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
gulp.src('lp-assets/css/*.css')
    .pipe(autoprefixer({
        browsers:  [
            'last 16 versions',
            'safari >= 8',
            'ie >= 10',
            'ff >= 20',
            'ios 6',
            'android 4'
        ],
        cascade: false
    }))
    .pipe(gulp.dest('cssPrefixed/'))
);