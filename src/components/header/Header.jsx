import { useState } from "react";
import SHeader from "./SHeader"

export default function Header() {

    const [classe, setClasse] = useState(false);

    const click = () => {
        setClasse(!classe);
    };

    const active = classe ? 'active' : '';

    return(
        <SHeader>
            <h1><a href="/">SingUp</a></h1>

            <button onClick={click} className={active}></button>

            <ul className={active}>
                <li><a href="">Home</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Eventos</a></li>
                <li><a href="">Albuns</a></li>
                <li><a href="">Galeria</a></li>
                <li><a href="">Notícias</a></li>
            </ul>
        </SHeader>
    )
}