import SHero from "./SHero"
import { Button } from '../'
import { primaryColor } from "../style";

export default function Hero() {
    return (
        <SHero>
            <div>
                <h1>Ouça novo álbum e músicas do Post Malone</h1>
                <h2>Ouça mais de 80 milhões de músicas, lançamentos exclusivos e vídeos musicais.</h2>

                <div>
                    <Button bg='#595959' border='#595959' txt='Ouça novo Album!' color='#fff' hover='#747474' />
                    <Button bg={primaryColor} border={primaryColor} txt='Sobre' color='#fff' hover='#3cb7ff'/>
                </div>
            </div>
        </SHero>
    )
}