import ThemeToggle from '../../components/ThemeToggle'

const HomePage = () => {
  return (
    <>
      <div className='p-4 bg-light dark:bg-dark text-textLight dark:text-textDark'>
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
    </>
  )
}

export default HomePage
