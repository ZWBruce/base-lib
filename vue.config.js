// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    lintOnSave:false,
    pages: {
        index: {
            entry: 'example/main.ts',
            template: 'example/index.html',
            filename: 'index.html',
            title: '王小钊'
        }
    },
    devServer: {
        host: "localhost",
        port: 3000,
        hot: true,
        compress: true,
        hotOnly: true,
        open: false,
        https: false,
        overlay: {
            warning: false,
            error: true
        },
        public: "0.0.0.0:3000"
    },
    chainWebpack:config=>{
        config.resolve.alias.set('@',path.resolve('./packages'))
    }
}