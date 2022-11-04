import styled from "@emotion/styled";
import { Link } from "wouter";

export const GifContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
`

export const GifButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
`

export const GifLink = styled(Link)`
    height: 100%;
`

export const GifImage = styled.img`
    width: 100%;
    object-fit: contain;
    vertical-align: top;
    cursor: pointer;
    height: inherit;
    object-fit: cover;
`

export const GifTitle = styled.h4`
    color: #FFF;
    padding: 2px 10px 2px 2px;
    background: #282C34;
    opacity: 50%;
    font-size: 10px;
    position: absolute;
    bottom: -15px;
    left: 0px;
`