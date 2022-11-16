import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Main = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  margin-bottom: 15rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 10.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 100%;

    margin-top: 20rem;
    margin-bottom: 20rem;
  }
`;

export const LeftMain = styled.div`
  width: 60%;
  height: 80%;
  padding: 23px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    margin-top: -20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -100px;
  }
  /* @media (min-width: 769px) {
    text-align: center;
    margin-top: -130rem;
  } */
`;
export const MainText = styled.h6`
  font-size: 6rem;
  font-weight: normal;
  /* text-align: justify;
  text-justify: inter-word; */

  @media screen and (max-width: 768px) {
    font-size: 3.3rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 4rem;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bolder;
`;

export const MainParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  font-weight: lighter;
  position: relative;
  top: -13rem;
  text-align: justify;
  text-justify: inter-word;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 15px;
    text-align: justify;
    text-justify: inter-word;
    top: -5rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 15px;
    top: -9rem;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  top: -10rem;

  @media screen and (max-width: 768px) {
    top: -4rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    top: -8rem;
  }
`;

export const SearchInput = styled.input`
  width: 50%;
  height: 5rem;
  padding: 15px 30px;
  font-size: 1.5rem;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  border: 1px solid;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 70%;
    height: 3rem;
    top: -7rem;
  }
`;

export const SearchBtnLink = styled(Link)`
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  width: 30%;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 30%;
    text-align: center;
    height: 3rem;
  }
`;

export const RightMain = styled.div`
  width: 40%;
  height: 80%;
  padding: 23px;
  display: flex;
  gap: 1rem;
  position: relative;
  top: 8rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const First = styled.div`
  position: relative;
  top: 7rem;
`;
export const Second = styled.div``;
export const NFT1 = styled.div``;
export const NFT = styled.img`
  width: 120rem;
`;

export const HeroFooter = styled.div`
  width: 100vw;
  height: 75px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const FooterLogo = styled.img``;
