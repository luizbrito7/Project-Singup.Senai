import { useState, useEffect } from "react";
import SHeader from "./style";
import data from "./data";

export default function Header({ logo }) {

    // MENU 
    const [classe, setClasse] = useState(false);
    const click = () => { setClasse(!classe) };
    const active = classe ? 'active' : '';

    // SCROLL
    const [scrollY, setScrollY] = useState(0);
    const [classeAdicionada, setClasseAdicionada] = useState(false);

    const handleScroll = () => {
        // Atualiza o estado com a posição atual de scroll
        setScrollY(window.scrollY);

        if (window.scrollY >= 100) {
            setClasseAdicionada(true);
        } else {
            setClasseAdicionada(false);
        }
    };



    useEffect(() => {
        // Adiciona o evento de scroll quando o componente é montado
        window.addEventListener('scroll', handleScroll);

        // Remove o evento de scroll quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const classeCSS = classeAdicionada ? 'headerActive' : '';





    return (
        <SHeader className={classeCSS}>
            <span className={classeCSS}><a href="/">{logo}</a></span>
            <button onClick={click} className={active} aria-label="Menu hamburguer"></button>

            <ul className={active}>
                {data.map(data => (
                    <li key={data.id}>
                        <a href={data.link}>{data.text}</a>
                    </li>
                ))}
            </ul>

        </SHeader>
    )
}