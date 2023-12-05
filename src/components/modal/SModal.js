import styled from "styled-components";
import { flex, primaryColor } from '../style'

const SModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    background: rgba(0, 0, 0, 0.7);
    ${flex('column', 'center', 'center')};
    transition: transform .2s ease-in-out;
    
    div{
        ${flex('column', 'center', 'center')};
        gap: 12rem;

        button{
            background-color: #fff;
            padding: 8rem 12rem;
            border-radius: 6rem;
            border:  none;
            cursor: pointer;
            font-weight: 700;
            transition: all 300ms ease-in-out;
            color: gray;

            &:hover{
                background-color: ${primaryColor};
                color: #fff;
            }
        }

        iframe{
            width: 935rem;
            height: 526rem;
        }

      
    }

    @media (max-width: 1000px) {

        div{
            iframe{
            width: 735rem;
            height: 426rem;
            }  
        }      
    }

    @media (max-width: 780px) {
        div{
            iframe{
            width: 535rem;
            height: 326rem;
            }  
        }
    }

    @media (max-width: 600px) {
        div{
            iframe{
            width: 435rem;
            height: 226rem;
            }  
        }
    }

    @media (max-width: 450px) {
        div{
            iframe{
            width: auto;
            height: auto;
            }  
        }
    }

`




export default SModal