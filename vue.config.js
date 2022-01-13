module.exports = {
    //代理
    devServer: {
        proxy: {
            '/api': {
                //目标，把 target 中的东西 代理到 /api中
                // 这里的 http://localhost:3000 是  网易云接口启动时候的 地址
                target: 'http://apibb.rjk66.cn/',
                //是否为客户端（模拟客户端）
                changeOrigin: true,
                //重写 '/api' 请求地址 为空
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}