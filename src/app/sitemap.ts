import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Aquí definimos la URL base de tu producción
  // Cuando tengas tu dominio .mx, cámbialo aquí.
  const baseUrl = 'https://finanzanode-mx.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si en el futuro creas /blog o /contacto, los añadirías aquí:
    /*
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    */
  ];
}