import SArtists from "./style";
import imgArtist from '../../assets/png/artist.png'

import { useEffect } from "react";

//  LIB DE ANIMAÇÕES 
import AOS from "aos";
import 'aos/dist/aos.css'


export default function Artists() {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <SArtists>
            <div>
                <p>Música brasileira e internacional</p>
                <h2>Os <span>artistas</span> mais talentosos!</h2>
                <h3>Onde notas e melodias transcendem fronteiras culturais para criar uma experiência sonora única.</h3>
            </div>

            <img src={imgArtist} alt="Artistas de gêneros diversos" data-aos='zoom-in'/>
        </SArtists>
    )
}