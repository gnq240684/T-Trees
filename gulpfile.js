var gulp = require('gulp')
var ts = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var clean = require('gulp-clean')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('compile', function() {
    var tsResult = gulp.src(['src/**/*.ts', 'src/**/*.tsx'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return tsResult
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'))
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
    gulp.start('compile', 'copy-resources')
})