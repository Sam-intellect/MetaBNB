import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components';

export const LearnMore = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 25px;

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`;

export const Main = styled.div`
  display: flex;
  margin-top: 10%;
`;
export const Left = styled.div`
  width: 50%;
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.primary};
`;
export const Head = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Content = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  text-align: justify;
  text-justify: inter-word;
  width: 80%;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 7px;
  }
`;
export const LearnBtn = styled(Link)`
  border-radius: 10px;
  width: 30%;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  @media screen and (max-width: 768px) {
    border-radius: 5px;
    width: 23px;
    height: 23px;
    font-size: 10px;
    padding: 10px 20px;
  }
`;

export const Right = styled.div`
  width: 50%;
`;
export const SideImage = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 15rem;
  }
`;
export const Side = styled.img``;
