var gulp = require('gulp'),
    del = require('del'),
    webpack = require('webpack-stream');

var webpackOptions = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}

gulp.task('clean', function() {
    return del(['js/', "ts/**/*.js"]);
});

gulp.task('build-main', function() {
  return builder(['ts/*.ts'], 'js/', './ts/main.ts', 'main.js')
});

gulp.task('build-services', function() {
  return builder(['ts/*.ts'], 'js/', './ts/services.ts', 'services.js')
});

gulp.task('default', ['clean', 'build-main', 'build-services']);

function builder(files, dest, entrypoint, outfile) {
  var opts = webpackOptions;
  opts.entry = entrypoint;
  opts.output = { filename: outfile };

  return gulp.src(files)
    .pipe(webpack(webpackOptions))
    .pipe(gulp.dest(dest));
}
