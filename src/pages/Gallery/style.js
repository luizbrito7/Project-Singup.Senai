import styled from "styled-components";
import { flex, marginTop, primaryColor } from '../../components/style'


const SGallery = styled.section`
    margin-top: ${marginTop}rem ;

    gap: 24rem;

    // div título
    ${flex('column', 'center', 'center')}

    div{
        ${flex('column', 'center', 'center')}
        text-align: center;

        
        h1{
            color: ${primaryColor};
            font-size:64rem;
            line-height: 64rem;
            font-weight: 600;
            
            span{
                font-size:64rem;
                color: #373737;

            }
        }
        
        span{
            font-size: 18rem;
        }
    }

    .box-img{
        ${flex('row', 'center', 'center')};
        flex-wrap: wrap;
        gap: 12rem;

        max-width: 1100px;

        div{
            width: 325px;
            height: 200px; 
            position: relative;
            overflow: hidden;
            border-radius: 12rem;
            transition: transform  0.5s ease-in-out;
            color: #fff;
            
            img{
                transition: transform  0.5s ease-in-out;
                border-radius: 12rem;
                width: 100%;
                height: 100%;
                position: absolute;
            }

            p{
                font-size: 18rem;

            }

            h3{
                font-size: 24rem;
            }
            
            p, h3{
                transition: opacity 0.5s ease-in-out;
                opacity: 0;
                z-index: 4;
                cursor: default;
            }
            
            
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4); 
                border-radius: 12rem;
                opacity: 0; 
                transition: opacity 0.5s ease-in-out; 
            }       

            &:hover::before {
                opacity: 1; /* Torna a camada escura visível durante o hover */
            }

            &:hover img{
                transform: scale(1.2);

            }

            &:hover p, &:hover h3{
                opacity: 1;
    
            }
        }




    }

`


export default SGallery