var path = {
    img: 'img',
    imgSource: 'img-source/**/*',

    css: 'style/*.css',
    cssBuild: 'build/style',

    js: {
        src: 'src/blocks/**/*.js',
        vendor: 'src/vendors/scripts/**/*.js',
        build: 'build/scripts'
    },

    html: 'html/**/*.html',
    htmlBuild: 'build/html',

    assets: ['img', 'fonts', 'vendors', 'video'],
    assetsBuild: 'build',

    server: {
        baseDir: 'build/**/*',
        proxyUrl: 'localhost:3000'
    }
};

module.exports = path;
