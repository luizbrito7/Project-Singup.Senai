import styled from "styled-components";
import bg from '../../assets/png/hero-background.png'
import { flex } from "../style";

const SHero = styled.section`
    height: 100vh;
    background: url(${bg}) no-repeat center center / cover;
    ${flex('column', 'center', 'center')};
    color: #fff;
    padding: 0 150rem;

    div{
        
        width: 100%;
        h1{
            width: 630rem;
            line-height: 70rem;
            font-size: 70rem;
        }

        h2{
            margin-top: 20rem;
            font-size: 18rem;
            font-weight: 100;
            width: 500rem;
        }

        div{
            margin-top: 32rem;
            ${flex('row', 'start', 'flex-start')};
            gap: 6rem;
            flex-wrap: wrap;
        }
   }

   @media (max-width: 1100px) {
        padding: 35rem 40rem;
        div{
            height: auto;
            width: auto;

            h1, h2{
                width: auto;
            }
        }  
   }

   @media (max-width: 400px) {
        div{
            h1{
            font-size: 36rem;
            line-height: 36rem;
        }
        }
   }


`

export default SHero