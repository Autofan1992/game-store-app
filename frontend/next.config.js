module.exports = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'games-store-images.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
}