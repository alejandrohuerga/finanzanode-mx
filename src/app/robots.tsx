import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Por si algún día tienes un panel de admin
    },
    sitemap: 'https://finanzanode-mx.vercel.app/sitemap.xml',
  }
}