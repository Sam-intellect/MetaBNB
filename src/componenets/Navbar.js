import { Container } from './styles/Container.styled';
import {
  NavbarStyled,
  Logo,
  Logo2,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MobileIcon,
  NavLogo,
} from './styles/Navbar.styled';
import React, { useState } from 'react';
import Modal from './Modal';

export default function Navbar({ toggle }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <NavbarStyled>
          <NavLogo to="/">
            <Logo src="./images/1.svg" atl="" />
            <Logo2 src="./images/2.svg" atl="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <Bars />
          </MobileIcon>

          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/" activeStyle>
              Place to Stay
            </NavLink>
            <NavLink to="/nfts" activeStyle>
              NFTs
            </NavLink>
            <NavLink to="/" activeStyle>
              Community
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={() => setOpenModal(true)}>
              Connect Wallect
            </NavBtnLink>
          </NavBtn>
        </NavbarStyled>
      </Container>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
