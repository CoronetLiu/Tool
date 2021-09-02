const gulp = require('gulp'),
  //编译ES6
  babel = require('gulp-babel'),
  //压缩js
  uglify = require('gulp-uglify'),
  //编译Less
  less = require('gulp-less'),
  //压缩css
  minifyCss = require('gulp-minify-css'),
  //自动前缀补全
  autoprefixer = require('gulp-autoprefixer'),
  //压缩HTML
  minifyHtml = require('gulp-minify-html'),
  //压缩图片
  imagemin = require('gulp-imagemin'),
  //文件重命名
  rename = require('gulp-rename'),
  //错误处理提示插件
  plumber = require('gulp-plumber'),

  //用来删除文件
  clean = require('gulp-clean'),

  connect = require('gulp-connect');

//创建一个名为js的任务
gulp.task('js', function () {
  // 获取src/js下的所有.js文件（包含所有子文件夹)
  return gulp.src('src/js/**/*.js')
    .pipe(connect.reload()) //重新加载
    //错误管理模块
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//创建一个名为utils的任务
gulp.task('utils', function () {
  return gulp.src('src/utils/**/*')
    .pipe(connect.reload()) //重新加载
    //错误管理模块
    .pipe(plumber())
    .pipe(gulp.dest('dist/utils'));
});

//创建一个名为asset的任务
gulp.task('asset', function () {
  return gulp.src('src/asset/**/*')
    .pipe(connect.reload()) //重新加载
    //错误管理模块
    .pipe(plumber())
    .pipe(gulp.dest('dist/asset'));
});

//创建一个名为less的任务
gulp.task('less', function () {
  // 获取src/less下的所有.less文件（包含所有子文件夹)
  return gulp.src('src/less/**/*')
    .pipe(connect.reload()) //重新加载
    //错误管理模块
    .pipe(plumber())
    //编译less文件转为css文件
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(rename((path) => {
      path.extname = '.css'
      return path
    }))
    .pipe(gulp.dest('dist/css'));
});

//创建一个名为html的任务
gulp.task('html', function () {
  // 获取src/pages下的所有.html文件（包含所有子文件夹)
  return gulp.src('src/pages/**/*.html')
    .pipe(connect.reload()) //重新加载
    //错误管理模块（有错误时会自动输出提示到终端上）
    .pipe(plumber())
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/pages'));
});

//创建一个名为images的任务
gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(connect.reload()) //重新加载
    //错误管理模块
    .pipe(plumber())
    .pipe(gulp.dest('dist/images'));
});

//创建一个名为clean的任务
gulp.task('clean', function () {
  return gulp.src('dist/*', {read: false})
    .pipe(clean())
});

gulp.task('build', gulp.parallel('js', 'images', 'less', 'html', 'utils', 'asset'));

//创建一个名为watch的任务
gulp.task('watch', function (done) {
  //监听各个目录的文件，如果有变动则执行相应的任务操作文件
  gulp.watch('src/js/**/*.js', gulp.series('build'));
  gulp.watch('src/less/**/*.less', gulp.series('build'));
  gulp.watch('src/pages/**/*.html', gulp.series('build'));
  done()
});

//创建一个名为start的任务
gulp.task('start', function (done) {
  //先运行clean，然后并行运行html,js,less,images,打包完毕后再监听watch
  gulp.parallel('html', 'less', 'js', 'images', 'utils');
  done()
});

//创建一个名为default的任务（这个任务必须有，不然在终端执行gulp命令会报错）
gulp.task('default', gulp.series('clean', 'start', 'build', 'watch', function (done) {
  connect.server({
    root: 'dist',
    port: 8000,
    livereload: true,
  });
  require('opn')('http://localhost:8000');
  done()
}));