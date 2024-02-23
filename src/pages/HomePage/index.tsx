
import Header from '../../components/common/Header';
import AboutMe from '../../components/sections/AboutMe';
import About from '../../components/sections/Home';
import ProjectsScreen from '../../components/sections/ProjectCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className='flex flex-col pt-32   '>
       
        <section  id='home'>

          <About name='João' bio="I'm a front End developer" />
          <AboutMe />
        
          </section>
        <section>
        <ProjectsScreen/>
        </section>

         
        {/* Adicione mais seções conforme necessário, cada uma ocupando 100vh */}
      </main>
    </div>
  );
}

export default HomePage;
