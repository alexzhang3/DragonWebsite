import React from 'react'
import SwimImg from '../../images/swim.svg'
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
    NavBtnLink
} from './TeamElements'
const index = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Dragon Swim</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Welcome to Dragon Swim Team!</FormH1>
                            <Text>The Dragon Swim Team has cultivated an environment in which athletes learn sportsmanship, self-discipline, and a lifelong love for the sport of swimming. Dragon is a competitive, year around, swim team based out of Northern Virginia's Fairfax County, Loudoun County, VA, and Montgomery County, MD. </Text>
                            <br></br>
                            <Text>We offer various training programs for your preference, ranging from 3 days to 7 days a week. Our times are usually in the early morning or at night.</Text>
                            <br></br>
                            <Text>To join, please reach out to Coach Kevin Pan and give a brief description of your swimming history, age, and commitment. Pricing information and swimming schedules will also be disclosed through further contact.</Text>
                            <br></br>
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
