import ProjectCard from './ProjectCard';
import zapscaleImg from '@/assets/zapscale.png';
import tiatrosMImg from '@/assets/tiatros-m.png';
import tiatrosLtsImg from '@/assets/tiatros-lts.png';
import tiatros1Img from '@/assets/tiatros-1.png';
import solaroImg from '@/assets/solaro.png';

interface ProjectsProps {
  limit?: number;
  showHeading?: boolean;
}

const Projects = ({ limit, showHeading = true }: ProjectsProps) => {
  const projects = [
    {
      title: 'Zapscale',
      description:
        'Easiest to use and fastest to implement, ZapScale gives the deepest customer insights to growing CS teams.',
      imageUrl: zapscaleImg,
      tags: ['Node.js', 'Vue.js', 'Nest.js', 'Typescript', 'MongoDB', 'Git'],
      projectUrl: 'https://www.zapscale.com/',
    },
    {
      title: 'TEP - Tiatros mobile app',
      description:
        'TEP is the revolutionary HIPAA-Compliant Cloud based healthcare solution for medical care. Doctors & extended care teams, share medical records, collect and analyze real-time clinical information, and coordinate treatment plans with patients, their families and health providers.',
      imageUrl: tiatrosMImg,
      tags: ['React Native', 'React js', 'Typescript', 'JavaScript'],
      projectUrl: 'https://www.tiatros.com/',
    },
    {
      title: 'CBT by Tiatros',
      description:
        'CBT is a cloud-based telemedicine platform that provides secure and efficient communication between healthcare providers and patients. It offers a range of features to support telemedicine services, including video consultations, secure messaging, and patient management tools.',
      imageUrl: tiatrosLtsImg,
      tags: ['Ruby', 'Rails', 'AWS', 'Node.js', 'MySQL', 'Nessus', 'Bootstrap'],
      projectUrl: 'https://www.tiatros.com/',
    },
    {
      title: 'Tiatros',
      description:
        'Tiatros is the revolutionary HIPAA-Compliant Cloud based healthcare solution for medical care. Doctors & extended care teams, share medical records, collect and analyze real-time clinical information, and coordinate treatment plans with patients, their families and health providers.',
      imageUrl: tiatros1Img,
      tags: ['Ruby', 'Rails', 'AWS', 'Node.js', 'MySQL', 'Nessus', 'Bootstrap'],
      projectUrl: 'https://tiatrosblog.wordpress.com/',
    },
    {
      title: 'SOLARO',
      description:
        'SOLARO Helps You Study Better and Faster. Get online help in Math, Science, and English language arts; all aligned to the Alberta curriculum, with SOLARO.',
      imageUrl: solaroImg,
      tags: ['Ruby', 'Rails', 'PostgreSQL', 'jQuery', 'Bootstrap', 'cucumber', 'rspec'],
      projectUrl: 'https://www.solaro.com/',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online shopping platform with customer authentication, product catalog, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '/api/placeholder/600/400',
      projectUrl: '#',
    },
    // {
    //   title: 'Task Management App',
    //   description:
    //     'A collaborative task management tool with real-time updates, team management, and progress tracking.',
    //   tags: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    //   imageUrl: '/api/placeholder/600/400', // Placeholder image
    //   projectUrl: '#',
    // },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A modern and responsive portfolio website to showcase projects and skills.',
    //   tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    //   imageUrl: '/api/placeholder/600/400', // Placeholder image
    //   projectUrl: '#',
    // },
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="py-16 px-4 container mx-auto">
      {showHeading && (
        <h2 className="text-3xl font-bold text-center mb-12">
          {limit ? 'Featured Projects' : 'All Projects'}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
