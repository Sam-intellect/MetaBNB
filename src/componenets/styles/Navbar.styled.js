import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const NavbarStyled = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem calc((100vw-1000px) / 2);
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 20px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  /* margin-top: 3rem; */
  cursor: pointer;

  &:hover {
    font-weight: bold;
    transform: scale(0.98);
  }
`;

export const MobileIcon = styled.div``;

export const Bars = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
    transform: translate(-100% 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18rem;
  gap: 3rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* margin-right: 24px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 13px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const Logo = styled.img`
  width: 3rem;
  margin-top: 1rem;
`;
export const Logo2 = styled.img`
  width: 12rem;
  margin-top: 1rem;
`;

export const NavLogo = styled(Link)`
  display: flex;
  gap: 2px;
`;
