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
        rgba(0, 92, 230, 1) 100%
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
    height: 500px;
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
        height: 600px;
    }

`;

export const FormH1 = styled.h1`
    color: #ff6666;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    margin-top: -40px;

    @media screen and (max-width: 786px) {
        font-size: 35px;
    }
    @media screen and (max-width: 400px) {
        margin-top: -20px;
    }
`;

export const Text = styled.span`
    margin-top: 12px;
    color: #60a8c4;
    font-size: 1.5rem;
    text-indent: 50px;
    @media screen and (max-width: 786px) {
        font-size: 16px;
    }
    @media screen and (max-width: 400px) {
        overflow-y: hidden;
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
    max-width: 200px;
    max-height: 200px;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 40px;

`