import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixedl
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(173, 216, 230, 1) 0%,
        rgba(255, 102, 102, 1) 100%
    );
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #ff6666;
    font-size: 50px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #fff;
    max-width: 1200px;
    height: 600px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 30px;
    margin-top: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
        
    }

`;

export const FormH1 = styled.h1`
    color: #ff6666;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    margin-top: -30px;

    @media screen and (max-width: 786px) {
        font-size: 35px;
    }
`;

export const Text = styled.span`
    text-align: left;
    margin-top: 12px;
    color: #60a8c4;
    font-size: 1.35rem;
    text-indent: 50px;
    @media screen and (max-width: 786px) {
        font-size: 16px;
    }
`;

export const ImgWrap = styled.div`
    display: block;
    margin: auto;
    max-width: 555px;
    margin-top: 20px;
    height: 100%;
`;

export const Img = styled.img`
    max-width: 400px;
    max-height: 400px;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 40px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    display: block;
    margin: auto;
    background: #ff6666;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const LinkA = styled.a`
    text-align: center;
    margin-top: 12px;
    color: #ff6666;
    font-size: 1.35rem;

    @media screen and (max-width: 786px) {
        font-size: 1rem;
    }
`;