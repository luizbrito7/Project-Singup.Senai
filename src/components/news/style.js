import styled from "styled-components";
import { flex, marginTop } from "../style";


const SNews = styled.section`
    margin-top: ${marginTop}rem;
    
    .title{
        ${flex('row', 'center', 'center')};
        gap: 600rem;
        h2{
            font-size: 50rem;
            text-align: center;
        }
        
        margin-bottom: 32rem;
    }
    
    
    div{
        gap: 24rem;
        
        ${flex('row', 'center', 'center')};
        flex-wrap: wrap;
        
        div{
            flex-wrap: nowrap;
            ${flex('column', 'center', 'center')};
            gap: 8rem;
            height: 700rem;
            max-width: 370rem;
            
            div{
                
                ${flex('column', 'flex-start', 'start')};
                text-align: left;
                h3{
                    font-size: 22rem;
                }

                p{
                    font-size: 16rem;
                }

                a{
                    font-size: 18rem;
                    color: #38214A;
                    text-decoration: underline;
                }
            }
        }
    }


    @media (max-width: 1200px) {
        .title{
            gap: 100rem;
        }
    }

    
    @media (max-width: 500px) {
        .title{
            gap: 0;
        }

        img{
            height: 400rem;
        }


        div{
            div{
                padding: 10rem;
            }
        }
    }
`


export default SNews