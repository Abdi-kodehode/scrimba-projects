import styled from "styled-components";

export const Img = styled.img `
    width: 250px;
    height: 250px;
    transition: all 0.3s ease;
    object-fit: contain;

        &:hover {
            transform: scale(1.1);
        }
        
`

export const ImgCart = styled.img `
    width: 50px;
    height: 50px;
    object-fit: contain;        
`