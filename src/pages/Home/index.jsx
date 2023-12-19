import { Hero, Albuns, Artists, Gallery, Singles, News } from "../../components"

import bg from '../../assets/png/hero-background.png'

function Home() {

  return (
    <>
      <main>
        <Hero headline='Novo albúm do Post Malone disponível!' subheadline='Uma mistura hip hop, rock, country e pop no seu novo álbum inédito.' bg={bg} button={true}/>
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
