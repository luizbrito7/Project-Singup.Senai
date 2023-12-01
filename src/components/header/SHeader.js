import styled from "styled-components";

import { flex } from "../style";

const SHeader = styled.header`
    height: 70rem;
    background-color: black;
    ${flex('row', 'center', 'space-between')}
    position: fixed;
    inset: 0 0 0 0;
    padding-inline: 50rem;

    h1{
        font-size: 32rem;
    }

    a{
        color: #fff;
    }

    button{
        border: none;
        background: none;   
        border-top: 3px solid #fff;
        cursor: pointer;
        display: none;
        z-index: 1;
        position: relative;
        
    }
    
    button::after, button::before{
        content: '';
        display: block;
        width: 30rem;
        height: 3rem;
        background-color: #fff;
        margin-top: 5rem;
        transition: all .5s ease-in; 
    }

    ul{
        ${flex('row', 'center', 'flex-start')};
        gap: 20rem;
        list-style: none;
    }
    ul li{
        font-size: 16rem;
    }

    @media (max-width: 800px) {
        button{
            display: block;
        }

        button.active{
            border-color: transparent;
      
        }
        
        button.active::after{
            transform: rotate(135deg); 

            position: relative;
            top: -8rem;
        }
        
        button.active::before{
            transform: rotate(-135deg);    
        }

        ul{
            position: fixed;
            inset: 0 0 0 0;
            background: #000;
            width: 100vw;
            height: 100vh;
            ${flex('column', 'center', 'center')};
            clip-path: circle(100px at 90% -15%);
            pointer-events: none;
            transition: 1s ease-out;
        }
        
        ul.active{
            clip-path: circle(1500px at 90% -15%);
            pointer-events: all;
        }

        
    }
`


export default SHeader