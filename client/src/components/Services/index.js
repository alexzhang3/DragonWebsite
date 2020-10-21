import React from 'react'
import Icon1 from '../../images/svg-7.svg'
import Icon2 from '../../images/svg-8.svg'
import Icon3 from '../../images/svg-9.svg'
import {
    ServicesContainer, ServicesH1, ServicesWrapper,
    ServicesCard, ServicesIcon, ServicesH2, ServicesP
} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Swim Training</ServicesH2>
                    <ServicesP>Traditional swim practice, 
                        revamped with scientific theory and professional experience.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Dryland Conditioning</ServicesH2>
                    <ServicesP>From high intensity cardio to strength building calisthenics, 
                        our virtual dryland sessions have it all.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Community Events</ServicesH2>
                    <ServicesP>Instagram postings, team parties, and WeChat advice are just some of the 
                        ways we show our Dragon spirit.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
