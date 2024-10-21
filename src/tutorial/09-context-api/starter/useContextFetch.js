import { useContext } from 'react'
import { NavbarContext } from './Navbar'

function useCustomContext() {
  const value = useContext(NavbarContext)

  return value
}

export default useCustomContext
