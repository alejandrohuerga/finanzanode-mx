import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mxcalc.com'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, 
    },
    {
      url: `${baseUrl}/cetes-vs-sofipos`, // Nueva ruta
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, 
    },
    {
      url: `${baseUrl}/guia-afore`, // Nueva ruta
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, 
    },
    {
      url: `${baseUrl}/guia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, 
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2, 
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}