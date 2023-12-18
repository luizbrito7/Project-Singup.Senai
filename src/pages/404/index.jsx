import SError404 from "./style" 
import errorImg from '../../assets/svg/404.svg'


import { Link } from "react-router-dom"

export default function Error404( ) {
    return(
        <SError404>

     
            <img src={errorImg} alt="Imagem ilustrando o erro de 404" />
            <Link to='/' className="link">Voltar para Home</Link>
        </SError404>
    )
}