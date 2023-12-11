import styled  from "styled-components";
import { flex, primaryColor, marginTop } from "../style";


const SArtists = styled.section`
    margin-top: ${marginTop}rem;
    background: #0A1522;
    height: 925rem;
    ${flex('column', 'center', 'center')};
    gap: 92rem;
  

    div{
        width: 100%;
        text-align: center;


        p, h3{
            font-size: 16rem;
            color: ${primaryColor};
            font-weight: 600;
            text-transform: uppercase;
        }
        h2{
            color: #fff;
            font-size: 64rem;
            span{
                color: ${primaryColor};
            }
        }
        h3{
            text-transform: initial;
            color: #fff;
            font-weight: 300;
        }

       
    }
  

    @media (max-width: 1400px) {
        img{
            width: 1000rem;
            
        }
    }
    
    @media (max-width: 1050px) {
        img{
            width: 800rem;

        }
    }

    @media (max-width: 850px) {
        img{
            width: 600rem;
        }
    }

    @media (max-width: 650px) {
        img{
            width: 450rem;
        }
    }

    @media (max-width: 450px) {

        background: aqua;
        padding: 0 12rem;

        img{
            width: 100%;
        }

        div{
            h2{
                font-size: 56rem;
            }
        }
        
    
    }

`

export default SArtists