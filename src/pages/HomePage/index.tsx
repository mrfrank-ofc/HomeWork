import ThemeToggle from '../../components/ThemeToggle'
import Header from '../../components/common/Header'

const HomePage = () => {
  return (
    <main className='flex flex-col'>
    
    <Header />
    
      <div className='p-4 bg-light dark:bg-dark text-textLight dark:text-textDark mt-16 '>
        <ThemeToggle></ThemeToggle>

        <h1 className='font-heading text-3xl text-headingLight font-bold dark:text-headingDark'>
          Bem-vindo ao Meu Portfólio
        </h1>
        <p className='font-body text-textLight dark:text-textDark'>
          Aqui você encontrará informações sobre meus projetos, habilidades e
          experiência profissional.
        </p>
        {/* Adicione mais conteúdo e componentes aqui conforme necessário */}
      </div>
    </main>
  )
}

export default HomePage
