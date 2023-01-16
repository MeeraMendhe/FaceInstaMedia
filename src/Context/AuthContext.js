import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser')) || null,
  )

  const login = () => {
    setcurrentUser({
      id: 1,
      name: 'Meera',
      profile:
        'https://media.istockphoto.com/id/1314920164/photo/low-angle-shot-of-a-diverse-group-of-businesspeople-joining-their-heads-together-in-a-huddle.jpg?s=612x612&w=0&k=20&c=nm2X1TzmK-os8W4UZoa9IdVmEYEgQVgjjzFnlfF7AIQ=',
    })
  }

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}
