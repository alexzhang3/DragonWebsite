

import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    Text,
    Email
} from './ContactElements'
const Contact = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>Dragon Swim</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Contact Information</FormH1>
                        <Text>Email: <Email href="mailto:dragonswim@outlook.com">dragonswim@outlook.com</Email></Text>
                        <Text>Phone: 703-953-8533</Text>
                        <Text>Send us a message!</Text>
                    </Form>
                </FormContent>
            </FormWrap>

        </Container>
        </>
    )
}

export default Contact
