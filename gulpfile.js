var gulp = require('gulp')
var ts = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var clean = require('gulp-clean')
var webpack = require('webpack-stream')
var electron = require('electron-connect').server.create()
var webpackConfig = require('./webpack.config.js')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('compile:main', function() {
    var tsResult = gulp.src(['src/main/**/*.ts', 'src/main/**/*.tsx', 'src/common/protocols/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return tsResult
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist/main/'))
})

gulp.task('compile:render', function() {
    var tsResult = gulp.src([
            'src/view/**/*.ts',
            'src/view/**/*.tsx',
            'src/common/protocols/**/*.ts'
            ])
        .pipe(webpack(webpackConfig))
    return tsResult
        .pipe(gulp.dest('dist/view/'))
})

gulp.task('copy-resources', function() {
    return gulp.src(['src/view/**/*.html'])
        .pipe(gulp.dest('dist/view/'))
})

gulp.task('clean', function() {
    return gulp.src('dist/*')
        .pipe(clean())
})

gulp.task('default', ['clean'], function() {
    gulp.start('compile:main', 'compile:render', 'copy-resources')
})

gulp.task('main', ['compile:main'], function() {
    electron.restart()
})
gulp.task('render', ['compile:render', 'copy-resources'], function() {
    electron.reload()
})

gulp.task('watch', function() {
    electron.start()
    gulp.watch(['src/main/**/*'], ['main'])
    gulp.watch(['src/view/**/*'], ['render'])
})