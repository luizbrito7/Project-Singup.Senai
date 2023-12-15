import { Header, Hero, Albuns, Artists, Gallery, Singles, News } from "./components"


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
      </main>
    </>
  )
}

export default App
