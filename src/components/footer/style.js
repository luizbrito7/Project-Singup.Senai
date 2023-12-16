import styled from "styled-components";

import { flex, primaryColor } from './../style';

const SFooter = styled.footer`
    margin-top: 128rem;
    padding: 12rem 250rem;
    ${flex('column', 'center', 'center')};
    gap: 32rem;
    
    
    div{
        ${flex('row', 'center', 'space-between')};
        flex-wrap: wrap;
        width: 100%;

     


        span{
            font-size: 32rem;
            transition: .2s ease-in-out;
            height: 60rem;
            font-weight: bold;
            
            a{
                color: #000;
                height: 60rem;
                ${flex('column', 'center', 'center')}
                padding: 10rem;
            }
        }

        ul{
            ${flex('row', 'center', 'flex-start')};
            gap: 12rem;
            list-style: none;
            flex-wrap: wrap;
            
            li{
                a{
                    font-size: 16rem;
                    color: #000;
                    ${flex('column', 'center', 'center')};

                    &::after{
                        content: '';
                        display: block;
                        background-color: ${primaryColor};
                        width: 0;
                        height: 2rem;
                        left: 5rem;
                        margin-top: 3rem;
                        transition: all 300ms ease-in-out;
                    }

                    &:hover::after{
                        width: 35rem;
                    }
                }

                
            }
        }

        nav{
            ${flex('row', 'center', 'center')};
            gap: 12rem;
        }
        

    }

    p{
        font-size: 14rem;
       
      
    }
    

    @media (max-width: 1100px) {
        padding: 12rem 50rem;

        div{
            ${flex('row', 'center', 'center')};
            
            ul{
                ${flex('row', 'center', 'center')};
                margin-bottom: 12rem;
                
            }
        }
    }
    `


export default SFooter