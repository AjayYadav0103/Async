import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import * as Router from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import {sidebarData} from './sidebarData';
const Nav = styled.div`
    background: #15171c;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items:center
`;
const NavIcon = styled(Router.Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display:flex;
    justify-content: flex-start;
    align-items: center; 
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width:250px;
    height:100vh;
    display:flex;
    justify-content:flex-start;
    position:fixed;
    top: 0;
    left:${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition:350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
  width:100%;
`;

const Sidebar = () => {
    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar);
    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSideBar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSideBar} />
                    </NavIcon>
                    {sidebarData.map((item,index)=>{
                        return <SubMenu item={item} key={index}/>
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar;