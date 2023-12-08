import styled from "styled-components";
import { flex, primaryColor, marginTop } from "../style";

const SAlbuns = styled.section`

    margin-top: ${marginTop}rem;

    // div título
    div{
        ${flex('column', 'center', 'center')}
        text-align: center;

        h2{
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



    div{
        ${flex('column', 'center', 'center')};
        gap: 32rem;
        margin-top: 64rem;

        #par{
            flex-wrap: wrap-reverse;
        }

        div{
            ${flex('row', 'center', 'center')};
            flex-wrap: wrap;
            width: 100%;
            padding: 10rem;

            
            img{
                box-shadow: -5px -11px 56px -25px rgba(0,0,0,0.75);
            }

            
            div{
                ${flex('column', 'flex-start', 'center')};
                gap: 12rem;
                width: auto;
                
                span{
                    color: ${primaryColor};
                    position: relative;
                }
                
                span::after{
                    content: '';
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

    @media (max-width: 650px) {

        div{

            div{
                img{
                    width: 70%;
                    height: 70%;
                }

                div{
                    ${flex('column', 'center', 'center')};
                    padding: 0 16rem;
                    
                    span::after{
                        width: 0rem;
                    }
                    p{
                        width: 100%;
                        text-align: center;
                    }
                }
            }
        }
    }

`

export default SAlbuns