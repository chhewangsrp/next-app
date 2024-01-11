/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, _) => ({
        ...config,
        watchOptions: {
            ...config.watchOptions,
            poll: 800,
            aggregateTimeout: 300,
        },
    }),
}
