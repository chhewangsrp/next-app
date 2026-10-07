/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn0.iconfinder.com",
                port: '',
                pathname: '/data/icons/**',
            },
            {
                protocol: "https",
                hostname: "cdn1.iconfinder.com",
                port: '',
                pathname: '/data/icons/**',
            },
            {
                protocol: "https",
                hostname: "cdn2.iconfinder.com",
                port: '',
                pathname: '/data/icons/**',
            },
            {
                protocol: "https",
                hostname: "cdn3.iconfinder.com",
                port: '',
                pathname: '/data/icons/**',
            },
            {
                protocol: "https",
                hostname: "cdn4.iconfinder.com",
                port: '',
                pathname: '/data/icons/**',
            },
            {
                protocol: "https",
                hostname: "cdn-icons-png.magnific.com",
                port: '',
                pathname: '/512/**',
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
                port: '',
                pathname: '/gh/**',
            },
        ],
    },

    webpack: (config, _) => ({
        ...config,
        watchOptions: {
            ...config.watchOptions,
            poll: 800,
            aggregateTimeout: 300,
        },
    }),

    turbopack: {},
    allowedDevOrigins: ['my-portfolio.local', 'localhost']
}
