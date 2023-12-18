import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header logo='SingUp'/>
      <Outlet/>

      <a className="toTop" href="#top">➤</a>
      <Footer/>
    </>
  )
}

export default App
