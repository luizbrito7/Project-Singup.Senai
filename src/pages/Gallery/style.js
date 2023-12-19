import styled from "styled-components";
import { flex, marginTop, primaryColor } from '../../components/style'


const SGallery = styled.section`
    margin-top: calc(${marginTop}rem + 100rem);
    height: 100vh;


    // div título
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

`


export default SGallery