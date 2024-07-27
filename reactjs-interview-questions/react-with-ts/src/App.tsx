import { useState, useContext, createContext, useEffect } from 'react'
import { ThemeContext } from "./main"

import './App.css'

interface ButtonProps {
  text?: string;
  bgColor?: string;
  children?: JSX.Element | string;
}

interface Customer {
  name: string;
  id: number;
}


const MyButton = ({ text, bgColor, children }: ButtonProps): JSX.Element => {
  return <>
    <button
      style={{ backgroundColor: bgColor ?? "black" }}
    >{children ?? text}</button >
  </>
}



function App() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const { theme } = useContext<{ theme: string }>(ThemeContext)


  useEffect(() => {
    setCustomer({
      id: 1,
      name: "chetan upreti"
    })
  }, [])

  return (
    <>
      Current Theme is : {theme}

      <MyButton text={'hye'}></MyButton>
      <br />
      <MyButton bgColor={'red'}>{customer?.name}</MyButton>
    </>
  )
}

export default App
