import React from 'react'
import CoachImg from '../../images/coach.svg'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    Text,
    ImgWrap,
    Img
} from './CoachElements'
const Coach = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>Dragon Swim</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Coach Kevin Pan</FormH1>
                        <Text>Coach Kevin is the only ASCA (American Swim Coach Association) Age Group Level 5 coach (highest level) in the DC area.  He was recognized as 2018-2019 USA national top 50 coaches. </Text>
                        <br></br>
                        <Text>Coach Kevin's dedication in swim helps Dragon Swim Team reach over 15% AAAA ratio in age groups.  In 2018-2019, Dragon Swim Team had dozens of Junior Olympic champions, 2 PVS records, 5 nationally ranked 1. </Text>
                        <br></br>
                        <Text>In Coach Kevin's over 35 year swim professional career, he pushes his swimmers to excellence and will do what it takes to help them achieve it. He has high standards for his swimmers which are reflected by their performance in the pool.</Text>
                    </Form>
                    <ImgWrap>
                <Img src={CoachImg}/>
            </ImgWrap>
                </FormContent>
            </FormWrap>
            
        </Container>
        </>
    )
}

export default Coach
