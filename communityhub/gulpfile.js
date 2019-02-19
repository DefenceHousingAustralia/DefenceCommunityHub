var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')();

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;



var gulp = require('gulp'),
cssSelectorLimit = require('gulp-css-selector-limit');



gulp.task('default', ['watch']);

gulp.task('browser-sync', function() {
   //browserSync.init({
   // proxy: "localhost:8083"
  //  });

    gulp.watch('src/js/libs/**/*.js', ['squish-jquery']);
    gulp.watch('src/js/*.js', ['combine-js']).on('change', reload);
    gulp.watch('src/css/*.less', ['minify-css']).on('change', reload);
    gulp.watch("*.php").on('change', reload);

});

gulp.task('squish-jquery', function () {
    return gulp.src('src/js/libs/**/*.js')
        .pipe(plugins.uglify({
            output: {
                'ascii_only': true
            }
        }))
        .pipe(plugins.concat('jquery.plugins.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('combine-js', function () {
    return gulp.src('src/js/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.uglify({
            output: {
                'ascii_only': true
            }
        }))
        .pipe(plugins.concat('scripts.min.js'))
        .pipe(gulp.dest('dist/js'))
});


gulp.task('minify-css', function () {
    return gulp.src('src/css/*.less')
        //.pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
       // .pipe(plugins.autoprefixer({
      //      browsers: [
                //    '> 1%',
                //    'last 2 versions',
                 //   'firefox >= 4',
                //    'safari 7',
                //    'safari 8',
                //    'IE 8',
                //    'IE 9',
               //     'IE 10',
               //     'IE 11'
              //  ],
           // cascade: false
       // }))
        //.pipe(cssSelectorLimit())
        //.pipe(cssSelectorLimit.reporter('default'))
        //.pipe(cssSelectorLimit.reporter('fail'))
        .pipe(plugins.cssmin())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css')).on('error', gutil.log)
        //.pipe(reload({stream: true}));
        
});

gulp.task('start', ['browser-sync']);
