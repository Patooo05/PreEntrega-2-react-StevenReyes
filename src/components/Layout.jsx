import Footer from "./Footer"
import NavBar from "./NavBar"
import { useContext } from "react"
import { Theme } from "../context/ThemeProvider";
import styles from '../styles/layout.module.css'; 


export const Layout = ({children}) => {
  const { dark } = useContext(Theme)


  return (
    <>
    <NavBar/>
    <div className={styles[`main-container-${dark ? "dark" : "light"}`]}>{children}
    </div>
    <Footer/>
    </> 
  )
  
}


export default Layout