module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                ],
            },
        },
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/frontend/' : '/',
    configureWebpack: {
        devServer: {
            port: 8080,
            proxy: {
                '/fetch': {
                    target: 'http://127.0.0.1:6000',
                    changeOrigin: true,
                    pathRewrite: { '^/fetch': '/fetch' },
                },
            },

            // https://github.com/vuejs-templates/webpack/issues/378
            watchOptions: {
                poll: true
            }
        }
    }
}