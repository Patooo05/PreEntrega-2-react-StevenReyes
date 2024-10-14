import Footer from "./Footer"
import NavBar from "./NavBar"



export const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <div>{children}</div>
    <Footer/>
    </> 
  )
  
}


export default Layout