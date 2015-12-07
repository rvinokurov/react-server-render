const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');
const sequence = require('gulp-sequence');
const ignore = require('gulp-ignore');
const fs = require('fs');
const gulpConfig = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));

const babelPaths = [
    'bin/**/*.js',
    'routes/**/*.js',
    'components/**/*.jsx',
    'app.js'
];

const copyPaths = [
    'public/**/*',
    'views/**/*',
    'fast-react/**/*'
];

const filterJsx = [
    'components/**/*.jsx',
]

const watchDirectories = [
    'src/**/*'
];

const buildPath = './build/';

gulp.task('js', () => {
    return gulp.src(watchDirectories)
        .pipe(plumber())
        .pipe(ignore.include(babelPaths))
        .pipe(babel(gulpConfig))
        .pipe(ignore.exclude(filterJsx))
        .pipe(gulp.dest(buildPath));
});


gulp.task('clean', () => {
    return gulp.src(buildPath, {
            read: false
        })
        .pipe(clean());
});

gulp.task('copy', () => {
    return gulp.src(watchDirectories)
        .pipe(plumber())
        .pipe(ignore.include(copyPaths))
        .pipe(gulp.dest(buildPath));
});

gulp.task('default', sequence('clean', ['js', 'copy']));


gulp.task('watch', () => {
    gulp.watch('src/**/*', ['js', 'copy']);

});
