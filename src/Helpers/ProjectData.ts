import { Project } from './ProjectTypes'
import vassen from '../assets/images/vassen.jpeg'
import serra from '../assets/images/serra.png'
import gif from '../assets/images/logo.svg'
import opiniao from '../assets/images/opiniao.png'

export const projects: Project[] = [
  // Adicione seus projetos aqui
  {
    id: 1,
    title: 'DevFolio',
    description:
      'The is a cutting age web portifolio showcasing a programmers talent ..   ',
    imageUrl: vassen,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://darrel-mucheri.vercel.app',
    codeUrl: 'https://mrfrankinc.vercel.app/projects.html',
  },
  {
    id: 2,
    title: 'E-commerce Website ',
    description:
      'A web Application designed to make trading easier, faster & reliable. Inspired by Mbare Musika ',
    imageUrl: serra,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://mrfrankinc.vercel.app/projects.html',
    codeUrl: 'https://mrfrank-ofc/e-commerce-website',
  },
  {
    id: 3,
    title: 'School DBMS',
    description:
      'A school management Systen with many functions depending on user role like admin, student, parent & Dashboard',
    imageUrl: gif,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://var-2.vercel.app/',
    codeUrl: 'https://mrfrank-ofc/school-management-system',
  },
  {
    id: 4,
    title: 'SubZero AI',
    description:
      'A robust whatsapp chat bot that uses API endpoints to download media & use AI features through ChatGpt Tokens.',
    imageUrl: opiniao,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://wa.me/2637196473303/?text=Hi+Darrell+Can+I+Use+SubZero+AI',
    codeUrl: 'https://mrfrank-ofc/SUBZERO-V2',
  },
]
