import styled from "styled-components";
import { marginTop, flex } from "../style";


const SSingles = styled.section`

    background-color: #0A1522;
    margin-top: ${marginTop}rem;
    padding: 32rem 0;

    ${flex('column', 'center', 'center')}

    h2, h3, span, p{
        text-align: center;
        color: #fff;
    }

    span{
        width: 613rem;
    }

    h2{
        font-size: 50rem;
    }

    span, h3, p{
        font-size: 18rem;   
        display: block;
    }


    div{ 
        margin-top: 32rem;
        ${flex('row', 'center', 'center')}
        gap: 32rem;
        flex-wrap: wrap;
        padding: 0 12rem;
        
        div{
        
            ${flex('column', 'center', 'center')}
            gap: 8rem;

        }
    }

    @media (max-width: 750px) {
        span, h2{  
            padding: 0 12rem;
            width: auto;
        }
    }

`


export default SSingles