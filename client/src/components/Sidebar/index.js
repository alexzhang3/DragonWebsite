import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                        <SidebarLink to="coach" onClick={toggle}>Coach</SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to="records" onClick={toggle}>Records</SidebarLink>
                        <SidebarLink to="safesport" onClick={toggle}>Safe Sport</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/contact">Contact Us</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
    )
}

export default Sidebar
