/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'http://wilmarcs.marketbytes.in/',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'out',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: '/',
            },
        ],
    },
}
