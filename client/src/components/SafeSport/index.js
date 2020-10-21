import React from 'react'
import SwimImg from '../../images/svg-5.svg'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    Text,
    ImgWrap,
    Img,
    NavBtn,
    NavBtnLink,
    LinkA
} from './SafeSportElements'
const index = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>SafeSport</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Safe Sport</FormH1>
                            <Text>What is Safe Sport?</Text>
                            <br></br>
                            <Text>Safe Sport is a program which calls for the ability for athletes to train in an environment free from emotional and physical abuse/misconduct.</Text>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <FormH1>Additional Resources</FormH1>
                            <Text>Find out more information at USA Swimming's Website <LinkA target="_blank" rel="noopener noreferrer" href="https://www.usaswimming.org/safe-sport">here.</LinkA></Text>
                            <NavBtn>
                                <NavBtnLink to="/contact">Contact Us</NavBtnLink>
                            </NavBtn>
                        </Form>
                        <ImgWrap>
                            <Img src={SwimImg} />
                        </ImgWrap>
                        
                    </FormContent>
                </FormWrap>

            </Container>
        </>
    )
}

export default index
