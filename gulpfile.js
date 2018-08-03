var gulp = require("gulp");
var concat = require("gulp-concat");// 合并文件
// var uglify = require("gulp-uglify");// 压缩文件
// var rename = require("gulp-rename");

//复制文件文件任务
gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("D:\\\phpStudy\\WWW\\gulp1803"));
});