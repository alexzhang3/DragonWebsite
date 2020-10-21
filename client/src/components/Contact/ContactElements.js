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
    max-width: 800px;
    height: 400px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 30px;
    margin-top: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400) {
        padding: 32px 32px;
    }

`;

export const FormH1 = styled.h1`
    color: #ff6666;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 12px;
    color: #ff6666;
    font-size: 2rem;
`;

export const Email = styled.a`
    text-align: center;
    margin-top: 12px;
    color: #76ceeb;
    font-size: 2rem;
`