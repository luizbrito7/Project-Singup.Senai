import styled from "styled-components";
import { flex, primaryColor, marginTop } from "../style";

const SAlbuns = styled.section`


    div{
        margin-top: ${marginTop}rem;
        ${flex('column', 'center', 'center')}
        text-align: center;

        h2{
            color: ${primaryColor};
            font-size:64rem;
            line-height: 64rem;
            
            span{
                font-size:64rem;
                color: #373737;

            }
        }
        
        span{
            font-size: 18rem;
        }
    }

    section{

        ${flex('column', 'center', 'center')};
        gap: 32rem;
        margin-top: 64rem;
        
        div{
            ${flex('row', 'center', 'center')};
            gap: 48rem;
            flex-wrap: wrap;
            
            img{
                box-shadow: -5px -11px 56px -25px rgba(0,0,0,0.75);
            }
            div{
                ${flex('column', 'flex-start', 'center')};
                gap: 12rem;
                
                
                span{
                    color: ${primaryColor};
                    position: relative;
                }

                span::after{
                    content: '';
                    background-color: red;
                    width: 170rem;
                    height: 1rem;
                    position: absolute;
                    left: 100%;
                    top: 14rem;
                    margin-left: 32rem;
                    background: ${primaryColor};
                }

                h3{
                    color: #373737;
                    font-size: 43rem;
                    font-weight: 200;
                }

                p{
                    font-size: 18rem;
                    width: 500rem;
                    text-align: left;
                }
            }

        }
    }

`

export default SAlbuns