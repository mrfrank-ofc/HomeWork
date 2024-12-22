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
      ' Desenvolver um site moderno e intuitivo para seu curso premium de polimento e vitrificação. Estou muito satisfeito por ajudar a trazer esse resultado que o cliente adorou.   ',
    imageUrl: vassen,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://mrfrankinc.vercel.app/projects.html',
    codeUrl: 'https://mrfrankinc.vercel.app/projects.html',
  },
  {
    id: 2,
    title: 'EcoBot ',
    description:
      'WEB APP com realidade aumentada da Serra da Barriga - Patrimônio Cultural Brasileiro inscrito no Livro do Tombo Histórico. ',
    imageUrl: serra,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://mrfrankinc.vercel.app/projects.html',
    codeUrl: 'https://mrfrankinc.vercel.app/projects.html',
  },
  {
    id: 3,
    title: 'School DBMS',
    description:
      ' Dashboard para monitorar a carteira de investimentos pessoais, feito de forma responsiva e intuitiva',
    imageUrl: gif,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://mrfrankinc.vercel.app/projects.html',
    codeUrl: 'https://mrfrankinc.vercel.app/projects.html',
  },
  {
    id: 4,
    title: 'SubZero AI',
    description:
      'OpineWeb é uma plataforma web para avaliação de serviços, permitindo que clientes forneçam feedbacks rápidos e diretos sobre serviços recebidos. Desenvolvida com React e Node.js, e utilizando MySQL para gestão de dados, a aplicação foca na melhoria contínua da qualidade de serviços através de avaliações claras e eficientes.',
    imageUrl: opiniao,
    techStack: ['HTML', 'JavaScript', 'Sass', 'React'],
    previewUrl: 'https://mrfrankinc.vercel.app/projects.html',
    codeUrl: 'https://mrfrankinc.vercel.app/projects.html',
  },
]
