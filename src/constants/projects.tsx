export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Interactive Flowchart Editor',
    description:
      'A powerful visual tool for project management and stakeholder collaboration, built with React Flow for the Impact Inside platform.',
    tech: ['React Flow', 'TypeScript', 'Next.js'],
    imageUrl:
      '../flowchart.png',
  },
  {
    title: 'AI-Powered Site Builder',
    description:
      'A marketing site builder with OpenAI-powered content generation and image upload functionality for the Impact Inside platform.',
    tech: ['OpenAI API', 'Next.js', 'MUI'],
    imageUrl:
      '../marketing.png',
  },
  {
    title: 'Location Mapping Tool',
    description:
      'A critical tool for visualizing project locations, with support for multiple map tiles and GeoJSON export, built for the Impact Inside platform.',
    tech: ['Leaflet.js', 'MapTiler', 'React'],
    imageUrl:
      '../locations.png',
  },
  {
    title: 'Portfolio Website',
    description:
      'A clean, single-page portfolio built with modern tools to showcase my work and skills.',
    tech: ['Vite', 'React', 'Radix UI', 'Stitches'],
    imageUrl:
      '../portfolio.png',
  },
];
