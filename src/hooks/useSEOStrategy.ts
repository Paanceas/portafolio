import { useEffect } from 'react';
import seo from '../data/seo.json';
import { useDocumentTitle } from '.';

export const useSEOStrategy = () => {
  // Extraer los datos del archivo JSON
  const { name, description, keywords, links } = seo;
  useDocumentTitle(name);

  useEffect(() => {
    // Actualizar el título de la página
    // Actualizar las etiquetas <meta> y <link> en el encabezado del documento
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ];

    const linkTags = links.map((enlace) => ({ rel: 'canonical', href: enlace }));

    // Función para actualizar las etiquetas en el encabezado
    const updateHeaderTags = () => {
      metaTags.forEach((tag) => {
        const metaTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', tag.content);
        } else {
          const newMetaTag = document.createElement('meta');
          newMetaTag.setAttribute('name', tag.name);
          newMetaTag.setAttribute('content', tag.content);
          document.head.appendChild(newMetaTag);
        }
      });

      linkTags.forEach((tag) => {
        const linkTag = document.querySelector(`link[rel="${tag.rel}"]`);
        if (linkTag) {
          linkTag.setAttribute('href', tag.href);
        } else {
          const newLinkTag = document.createElement('link');
          newLinkTag.setAttribute('rel', tag.rel);
          newLinkTag.setAttribute('href', tag.href);
          document.head.appendChild(newLinkTag);
        }
      });
    };

    // Llamar a la función de actualización al montar el componente
    updateHeaderTags();

    // Limpiar las etiquetas al desmontar el componente
    return () => {
      metaTags.forEach((tag) => {
        const metaTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (metaTag) {
          document.head.removeChild(metaTag);
        }
      });

      linkTags.forEach((tag) => {
        const linkTag = document.querySelector(`link[rel="${tag.rel}"]`);
        if (linkTag) {
          document.head.removeChild(linkTag);
        }
      });
    };
  }, [name, description, keywords, links]);

  // No es necesario devolver ningún componente
  return null;
};