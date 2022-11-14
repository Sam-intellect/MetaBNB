import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from './styles/SideBar.styled';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SideBarLink to="/about">Home</SideBarLink>
          <SideBarLink to="/place">Place to Stay</SideBarLink>
          <SideBarLink to="/nfts">NFTs</SideBarLink>
          <SideBarLink to="/community">Community</SideBarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/wallet">Connect Wallect</SideBarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
