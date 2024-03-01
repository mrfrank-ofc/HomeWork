import Header from '../../components/common/Header'
import MyStack from '../../components/sections/MyStack'
import About from '../../components/sections/Home'
import ProjectsScreen from '../../components/sections/ProjectCard'
import AboutMe from '../../components/sections/AboutMe'
import Contact from '../../components/sections/Contact'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className='flex flex-col pt-20   '>
        <section id='home'>
          <About name='João' bio="I'm a front End developer" />
          <MyStack />
          <section id='about'>
            <AboutMe />
          </section>
        </section>
        <section id='projects'>
          <ProjectsScreen />
        </section> <br />

        <section id='contact'>
          <Contact />
        </section>

      </main>
    </div>
  )
}

export default HomePage
