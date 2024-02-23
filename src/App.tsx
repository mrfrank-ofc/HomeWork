import { MenuProvider } from './context/MenuContext'
import HomePage from './pages/HomePage'

function App() {
  return (
    <MenuProvider>
      <HomePage />
    </MenuProvider>
  )
}

export default App
