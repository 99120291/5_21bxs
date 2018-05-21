var gulp = require("gulp"),

    sass = require("gulp-sass"),

    server = require("gulp-webserver");

gulp.task("css", function() {
    gulp.src("./bxs/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("bxs/css"))
})

gulp.task("server", ["css"], function() {
    gulp.src("bxs")
        .pipe(server({
            port: 8080
        }))
})
gulp.task("watch", function() {
    gulp.watch("bxs/scss/*.scss", ["css"])
})

gulp.task("build", function() {
    gulp.src("bxs/**/*")
        .pipe(gulp.dest("build"))
})
gulp.task("default", ["server", "watch", "build"])