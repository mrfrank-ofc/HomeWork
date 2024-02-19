import ThemeToggle from "./components/ThemeTogle"




function App() {
 

  return (
    <>
  

      <ThemeToggle  />
      <div className="bg-light dark:bg-dark  text-textLight dark:text-textDark">

     <h1 className="font-heading text-3xl mb-4 font-bold">Hello word</h1>
     <p className="font-body text-base ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sunt id corporis ullam voluptatem. Doloremque corrupti perferendis eveniet voluptatem ex? Voluptate obcaecati rerum fuga. Expedita error magni a sit facere!</p>
     
     </div>

    </>
  )
}

export default App
