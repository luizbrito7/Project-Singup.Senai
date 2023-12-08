import { styled, css } from "styled-components";
import { flex, primaryColor } from "../style";


const SHeader = styled.header`
    height: 60rem;
    ${flex('row', 'center', 'space-between')}
    position: fixed;
    inset: 0 0 0 0;
    padding-inline: 70rem;
    z-index: 2;

    .headerActive{
        font-size: 24rem;
    }

    span{
        font-size: 32rem;
        transition: .2s ease-in-out;
        background: transparent;
        height: 60rem;
        font-weight: bold;
    }

    a{
        color: #fff;
        height: 60rem;
        ${flex('column', 'center', 'center')}
        padding: 10rem;
    }

    button{
        border: none;
        background: none;   
        border-top: 3rem solid #fff;
        cursor: pointer;
        display: none;
        z-index: 2;
        position: relative;        
    }
    
    button::after, button::before{
        content: '';
        display: block;
        width: 25rem;
        height: 3rem;
        background-color: #fff;
        margin-top: 5rem;
        transition: all .3s ease-in-out; 
    }

    button::before{
        width: 25rem;
    }

    ul{
        ${flex('row', 'center', 'flex-start')};
        gap: 12rem;
        list-style: none;
    }

    ul li a{
        font-size: 16rem;
    }

    ul li a::after{
        content: '';
        display: block;
        background-color: ${primaryColor};
        width: 0;
        height: 2rem;
        left: 5rem;
        margin-top: 3rem;
        transition: all 300ms ease-in-out;
    }

    ul li a:hover::after{
        width: 35rem;
    }

    @media (max-width: 800px) {
        padding-inline: 50rem;
        button{
            display: block;
            transition: all .8s ease-out;
        }

        button.active{
            border-color: transparent;
            border: none;
      
        }
        
        button.active::after{
            transform: rotate(-135deg); 

            position: relative;
            top: -8rem;
        }
        
        button.active::before{
            transform: rotate(135deg);    
        }

        ul{
            position: fixed;
            inset: 0 0 0 0;
            width: 100vw;
            height: 100vh;
            ${flex('column', 'center', 'center')};
            clip-path: circle(100px at 90% -15%);
            pointer-events: none;
            transition: .5s ease-in-out;
        }
        
        ul.active{
            clip-path: circle(1500px at 90% -15%);
            pointer-events: all;
            background: #000;
        }

        
    }
`


export default SHeader