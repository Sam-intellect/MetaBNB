import styled from 'styled-components';

export const MainFooter = styled.section`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.footer};
`;
export const Main = styled.footer`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Other = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 2rem;
    width: 60%;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 15px;
  color: white;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
  }
`;
export const LogoSocialMedia = styled.div`
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Logo1 = styled.div``;
export const Logo2 = styled.div``;
export const SocialLink = styled.div`
  display: flex;
  gap: 2rem;
  color: white;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    margin-top: 13px;
    align-items: center;
    justify-content: center;
  }
`;
export const FaceB = styled.div``;
export const Copyright = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 13px;
    align-items: center;
    justify-content: center;
  }
`;
export const CopyrightLogo = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: -15px;
  }
`;
export const CopyrightText = styled.h4`
  margin-top: 0;
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
