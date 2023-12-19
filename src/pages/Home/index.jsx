import { Hero, Albuns, Artists, Gallery, Singles, News } from "../../components"

import bg from '../../assets/png/hero-background.png'

function Home() {

  return (
    <>
      <main>
        <Hero headline='Novo albúm do Post Malone disponível!' subheadline='Joga bola dança e joga de lado' bg={bg} buttons={true}/>
        <Albuns/>
        <Artists/>
        <Gallery/>
        <Singles/>
        <News/>
      </main>
    </>
  )
}

export default Home
