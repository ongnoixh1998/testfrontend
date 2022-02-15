/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    minimumCacheTTL: 60,
    domains: ['gw.alicdn.com','caysenda.vn'],
  },
}
