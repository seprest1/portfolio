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
      'A powerful visual tool for project management featuring real-time collaboration. This feature allows teams to visually map out complex processes and dependencies, greatly improving workflow clarity.',
    tech: ['React Flow', 'TypeScript', 'Next.js'],
    imageUrl: '../flowchart.png',
  },
  {
    title: 'People Management Dashboard',
    description:
      'A performant and reusable data grid built to replace the inflexible MUI XGrid, featuring dynamic column resizing, visibility toggles, and reusable filters. Creating this custom solution provided the granular control needed for complex user management tasks, and is seen in other parts of the application.',
    tech: ['TanStack Table', 'React', 'TypeScript', 'MUI'],
    imageUrl: '../people.png',
  },
  {
    title: 'AI-Powered Site Builder',
    description:
      'A marketing site builder with OpenAI-powered content generation, responsive design, and custom media integration. This tool empowers non-technical users to create and manage their own professional, on-brand web pages effortlessly.',
    tech: ['OpenAI API', 'Next.js', 'MUI'],
    imageUrl: '../marketing.png',
  },
  {
    title: 'Location Mapping Tool',
    description:
      'A tool for documenting and visualizing project locations, with support for multiple map tiles and GeoJSON export for the Impact Inside platform. It serves as a critical feature for managing and analyzing geospatial data for carbon offset projects.',
    tech: ['Leaflet.js', 'MapTiler', 'React'],
    imageUrl: '../locations.png',
  },
  {
    title: 'Portfolio Website',
    description:
      'A clean, single-page portfolio built with modern tools to showcase my work and skills. The site is designed to be fully responsive, providing an engaging user experience on any device.',
    tech: ['Vite', 'React', 'Radix UI', 'Stitches'],
    imageUrl: '../portfolio.png',
  },
];
