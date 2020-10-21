import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import Logo from '../../images/dragon.png'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    MobileIcon, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    Img,
    ImgWrap
} from './NavbarElements'
const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false) 

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value = {{color: '#ff6666'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to="/" onClick={toggleHome}>Dragon Swim <ImgWrap>
                            <Img src={Logo} />
                        </ImgWrap></NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about"
                          smooth={true} 
                          duration={1000} 
                          spy={true}
                          exact='true' 
                          offset={-80}
                          >About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="coach"
                          smooth={true} 
                          duration={1000} 
                          spy={true}
                          exact='true' 
                          offset={-80}
                          >Coach</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="services"
                          smooth={true} 
                          duration={1000} 
                          spy={true}
                          exact='true' 
                          offset={-80}
                          >Services</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="records"
                          smooth={true} 
                          duration={1000} 
                          spy={true}
                          exact='true' 
                          offset={-80}
                          >Records</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="safesport"
                          smooth={true} 
                          duration={1000} 
                          spy={true}
                          exact='true' 
                          offset={-80}
                          >Safe Sport</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/contact">Contact Us</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    );
}

export default Navbar
