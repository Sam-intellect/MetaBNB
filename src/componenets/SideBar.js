import React, { useState } from 'react';
import Modal from './Modal';
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
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SideBarLink onClick={toggle} to="/">
              Home
            </SideBarLink>
            <SideBarLink onClick={toggle} to="/">
              Place to Stay
            </SideBarLink>
            <SideBarLink onClick={toggle} to="/nfts">
              NFTs
            </SideBarLink>
            <SideBarLink onClick={toggle} to="/">
              Community
            </SideBarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SideBarRoute onClick={() => setOpenModal(true)}>
              Connect Wallect
            </SideBarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SideBarContainer>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default SideBar;
