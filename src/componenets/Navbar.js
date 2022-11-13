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

export default function Navbar({ toggle }) {
  return (
    <NavbarStyled>
      <NavLogo to="/">
        <Logo src="./images/1.svg" atl="" />
        <Logo2 src="./images/2.svg" atl="" />
      </NavLogo>
      <MobileIcon onClick={toggle}>
        <Bars />
      </MobileIcon>

      <NavMenu>
        <NavLink to="/about" activeStyle>
          Home
        </NavLink>
        <NavLink to="/place" activeStyle>
          Place to Stay
        </NavLink>
        <NavLink to="/nfts" activeStyle>
          NFTs
        </NavLink>
        <NavLink to="/community" activeStyle>
          Community
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/wallet">Connect Wallect</NavBtnLink>
      </NavBtn>
    </NavbarStyled>
  );
}
