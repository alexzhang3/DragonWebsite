import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#ff6666' : '#e5912c')};
    white-space: nowrap;
    padding: ${({big})=> (big ?'14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    visibility: ${({scrollButton}) => (scrollButton ? 'visible' : 'hidden')};
    &:hover {
        color: #000;
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' :'#fff')};
    }
`

export const ButtonLink = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#ff6666' : '#e5912c')};
    white-space: nowrap;
    padding: ${({big})=> (big ?'14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    visibility: ${({scrollButton}) => (scrollButton ? 'hidden' : 'visible')};
    &:hover {
        color: #000;
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' :'#fff')};
    }
`