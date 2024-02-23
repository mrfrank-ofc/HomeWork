import React, { useState, createContext, useContext, ReactNode } from 'react'

interface MenuContextType {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

interface MenuProviderProps {
  children: ReactNode
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider')
  }
  return context
}
