import styled from "styled-components";
import { flex, marginTop } from '../../components/style'


const SGallery = styled.section`
margin-top: ${marginTop}rem;
    ${flex('column', 'center', 'center')}
    align-self: center;

    .img{
        background-color: aqua;
        height: 500rem;
    }

    .img01{
        width: 440px;
    }
`


export default SGallery