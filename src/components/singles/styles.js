import styled from "styled-components";
import { marginTop, flex } from "../style";


const SSingles = styled.section`

    background-color: #0A1522;
    margin-top: ${marginTop}rem;
    padding: 32rem 0;

    ${flex('column', 'center', 'center')}

    h2, h3, p{
        text-align: center;
        color: #fff;
    }

    h2{
        font-size: 50rem;
    }

    p, h3{
        font-size: 18rem;   
        display: block;
    }


    div{ 
        margin-top: 32rem;
        ${flex('row', 'center', 'center')}
        gap: 32rem;
        flex-wrap: wrap;
        
        div{
        
            ${flex('column', 'center', 'center')}
            gap: 8rem;

        }
    }

`


export default SSingles