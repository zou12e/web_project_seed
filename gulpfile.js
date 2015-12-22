var old_dir = "app",
dir = "app_min",
gulp = require('gulp'),
livereload = require('gulp-livereload'),
uglify = require("gulp-uglify"),
minifyCss = require("gulp-minify-css"),
imagemin = require('gulp-imagemin'),
imageminPngquant = require('imagemin-pngquant'),
cssSpriter = require('gulp-css-spriter'),
sass = require('gulp-sass'),
compass = require('gulp-compass'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
rev = require('gulp-rev'),
revCollector = require('gulp-rev-collector'),
sequence = require('gulp-sequence'); 


gulp.task('watch', function() {
    livereload.listen();

    gulp.watch([
        old_dir + '/html/**/*.html',
        old_dir + '/css/scss.css',
        old_dir + '/js/js/*.js',
        old_dir + '/img/**/*.*',
        ], function(event) {
            livereload.changed(event.path);
        });


    gulp.watch([
        old_dir + '/scss/*.scss',
        ], function(event) {
            gulp.run('scss');
        });

});

gulp.task('task', function() {
    return gulp.src(old_dir+'/**/*.*')
    .pipe(gulp.dest(dir+"/"));
});




gulp.task('js', function() {
    return gulp.src(dir + '/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(dir + '/js'));
});

gulp.task('scss', function() {
    return gulp.src(old_dir + '/scss/scss.scss')
    .pipe(compass({
        config_file: old_dir + '/config.rb',
        sass: old_dir + '/scss'
    }))
    .pipe(gulp.dest(old_dir + '/css'));
});



gulp.task('img', function() {
    return gulp.src(old_dir + '/img/**/*.*')
    .pipe(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
        multipass: true,
        use: [imageminPngquant()]
    }))
    .pipe(gulp.dest(dir + '/img/'));
});


gulp.task('css', function() {
    return gulp.src(dir + '/scss/scss.scss')
    .pipe(compass({
        config_file: dir + '/config.rb',
        sass: dir + '/scss'
    }))
    .pipe(gulp.dest(dir + '/css'));
});


gulp.task('cssSpriter', function() {
    var timestamp = +new Date().getTime();
    return gulp.src(dir + '/css/scss.css')
    .pipe(cssSpriter({
        'spriteSheet': dir + '/img/sprite' + timestamp + '.png',
        'pathToSpriteSheetFromCSS': '../img/sprite' + timestamp + '.png'
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest(dir + '/css'));
});



gulp.task('rev-js', function() {
    return gulp.src(dir + '/js/main.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest(dir + '/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./rev'));
});

gulp.task('rev-css', function() {
   return gulp.src(dir + '/css/scss.css')
   .pipe(minifyCss())
   .pipe(rev())
   .pipe(gulp.dest(dir + '/css'))
   .pipe(rev.manifest())
   .pipe(gulp.dest('./rev'));
});

gulp.task('replace', function() {
    return gulp.src(['./rev/*.json', dir + '/**/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest(dir + '/'));
});



gulp.task('pack', function(cb) {
    sequence('task', ['js', 'img'],'cssSpriter', cb);
});


gulp.task('done', function(cb) {
    sequence('rev-js','replace','rev-css','replace', cb);
});










