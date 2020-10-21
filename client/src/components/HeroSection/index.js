import React, {useState} from 'react'
import Video from '../../videos/swim.mp4'
import {ButtonLink} from '../ButtonElements'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} 
                type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Dragon Swim Team</HeroH1>
                <HeroP>
                    Find out what makes 
                    this Washington DC area community so special.
                </HeroP>
                <HeroBtnWrapper>
                    <ButtonLink to="team" onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true} 
                          duration={500} 
                          spy={true}
                          exact='true' 
                          offset={-80}
                          scrollButton={false}
                          >
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </ButtonLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
