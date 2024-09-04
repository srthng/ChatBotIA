import './App.css'
import {Outlet} from "react-router-dom"
import HeaderItem from './HeaderItem'
import { ContextProvider } from './Context/Context';

export default function App() {

  return (
    <>
      <ContextProvider>
        <HeaderItem></HeaderItem>
        <Outlet/>
      </ContextProvider>
    </>
  )
}
