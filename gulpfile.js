var gulp = require('gulp')
var ts = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var clean = require('gulp-clean')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('compile', function() {
    var tsResult = gulp.src(['src/**/*.ts', 'src/**/*.tsx', '!src/view/**/*.ts', '!src/view/**/*.tsx'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return tsResult
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'))
})

gulp.task('webpack', function() {
    var tsResult = gulp.src(['src/view/**/*.ts', 'src/view/**/*.tsx'])
        .pipe(webpack(webpackConfig))
    return tsResult
        .pipe(gulp.dest('dist/view/scripts/'))
})

gulp.task('copy-resources', function() {
    return gulp.src(['src/**/*.html'])
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function() {
    return gulp.src('dist/*')
        .pipe(clean())
})

gulp.task('default', ['clean'], function() {
    gulp.start('compile', 'webpack', 'copy-resources')
})

gulp.task('watch', function() {
    return gulp.watch('src/**/*', ['default'])
})