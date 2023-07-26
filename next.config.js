/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"]
    },
    cache: {
        type: 'filesystem',
    },
}


module.exports = nextConfig
