var
gulp = require("gulp"),
browserify = require("browserify"),
tsify = require("tsify"),
react = require('gulp-react'),
browserify = require('gulp-browserify'),
rename = require("gulp-rename"),
uglify = require('gulp-uglify'),
gif = require('gulp-if');

var sourceDir = "./src", destinDir = "./wwwroot";

gulp.task('build', function() {
  var development = true;
  return gulp.src(sourceDir + '/file.jsx')
        .pipe(react())
        .pipe(browserify({
          insertGlobals : true,
          debug : development
        }))
        // .pipe(gif(!development, uglify()))
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest(destinDir));

});
