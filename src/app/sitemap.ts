import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://finanzanode-mx.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // La joya de la corona
    },
    {
      url: `${baseUrl}/guia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // Contenido de valor para SEO
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2, // Importante legalmente, pero no para atraer tráfico
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}