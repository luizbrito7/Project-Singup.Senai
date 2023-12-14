import styled from "styled-components";
import { marginTop, flex } from "../style";
const SGallery = styled.section`
    
    margin-top: ${marginTop}rem;
    ${flex('column', 'center', 'center')}

    h1, p{
        text-align: center;
    }

    h1{
        font-size: 50rem;
    }

    p{
        font-size: 18rem;   
        display: block;
        width: 613rem;
        /* background-color: yellow; */
        
    }

    .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }
  
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
    }
  
    .swiper-slide img {
        display: block;
        width: 100%;
    }
    

    @media (max-width: 750px) {
        p{  
            padding: 0 12rem;
            width: auto;
        }
    }

`

export default SGallery