import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0%' : '-100')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  gap: 10px;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-right: 3rem;
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-docoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRoute = styled(LinkR)`
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
    transition: all 0.2s ease-in-out;
  }
`;
