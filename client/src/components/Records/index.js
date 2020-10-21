import React from 'react'
import SwimImg from '../../images/records.jpg'
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
} from './RecordsElements'
const index = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Dragon Swim</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Team Records </FormH1>
                            <Text>During the 2018 PV NCAP Invitational, Gloria Kuang won the girls 10 and under 100 fly in a time of 1:01.35, breaking a PVS Resident record of 1:01.64 from 2006. She won an additional five individual events for a total of six golds, taking the 100 free, 200 free, 100 back, 50 fly and 200 IM.</Text>
                            <br></br>
                            <Text>See our boy's records <LinkA target="_blank" rel="noopener noreferrer" href="https://www.swimmingrank.com/mdva/strokes/clubs/PVDRAG_boys.html">here.</LinkA></Text>
                            <br></br>
                            <Text>See our girl's records <LinkA target="_blank" rel="noopener noreferrer" href="https://www.swimmingrank.com/mdva/strokes/clubs/PVDRAG_girls.html">here.</LinkA></Text>
                            <br></br>
                            <Text>Find out USA Time Standards <LinkA target="_blank" rel="noopener noreferrer" href="https://www.usaswimming.org/docs/default-source/timesdocuments/time-standards/2020motivationaltimes-top16.pdf">here.</LinkA></Text>
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
