export enum CertificationsCompanies {
  'Platzi' = 'platzi',
  'Udemy' = 'udemy',
  'Credly' = 'credly',
  'Coursera' = 'coursera',
  'ScrumStudy' = 'scrumstudy',
}

export interface Certification {
  company: CertificationsCompanies;
  name: string;
  link: string;
  year: number;
}

export const certificationImages: Record<string, string> = {
  platzi: 'img/certifications/platzi.webp',
  udemy: 'img/certifications/udemy.png',
  credly: 'img/certifications/credly.svg',
  coursera: 'img/certifications/coursera.png',
  scrumstudy: 'img/certifications/scrumstudy.png',
};
