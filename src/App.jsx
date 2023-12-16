import { Header, Hero, Albuns, Artists, Gallery, Singles, News, Footer } from "./components"


function App() {

  return (
    <>
    
      <Header logo='SingUp'/>

      <main>
        <Hero/>
        <Albuns/>
        <Artists/>
        <Gallery/>
        <Singles/>
        <News/>

        <a className="toTop" href="#top">➤</a>
      </main>

      <Footer/>
    </>
  )
}

export default App
