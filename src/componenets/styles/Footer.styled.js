import styled from 'styled-components';

export const MainFooter = styled.section`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.footer};
`;
export const Main = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const LogoSocialMedia = styled.div`
  display: flex;
  gap: 2px;
  color: white;
`;

export const Logo1 = styled.div`
  width: 7rem;
  margin-top: 1rem;
`;
export const Logo2 = styled.div`
  width: 3rem;
  margin-top: 1rem;
  fill: 'white';
`;
export const Community = styled.a`
  color: white;
  cursor: pointer;
  margin-top: 2%;

  h4 {
    font-weight: lighter;
    gap: 5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 10px;
    }
    h4 {
      font-size: 5px;
    }
  }
`;
export const Places = styled.div`
  color: white;
  cursor: pointer;
  margin-top: 2%;

  h4 {
    font-weight: lighter;
    gap: 5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 10px;
    }
    h4 {
      font-size: 5px;
    }
  }
`;
export const About = styled.div`
  color: white;
  cursor: pointer;
  margin-top: 2%;

  h4 {
    font-weight: lighter;
    gap: 5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 10px;
    }
    h4 {
      font-size: 5px;
    }
  }
`;
