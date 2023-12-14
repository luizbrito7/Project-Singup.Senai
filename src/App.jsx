import { Header, Hero, Albuns, Artists, Gallery } from "./components"

function App() {

  return (
    <>
      <Header logo='SingUp' />
      <main>
        <Hero/>
        <Albuns/>
        <Artists/>
        <Gallery/>
      </main>
    </>
  )
}

export default App
