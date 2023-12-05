import styled from "styled-components";
import { flex } from '../style'

const SModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    ${flex('column', 'center', 'center')};
    transform: translateY(-100%);
    transition: transform 0.3s ease-out;

    div{
        background-color: green;
        ${flex('column', 'center', 'center')};
    }


`




export default SModal