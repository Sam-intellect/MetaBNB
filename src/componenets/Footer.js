import { Container } from './styles/Container.styled';
import {
  MainFooter,
  LogoSocialMedia,
  Community,
  Places,
  About,
} from './styles/Footer.styled';

const Footer = () => {
  return (
    <>
      <MainFooter>
        <Container>
          <LogoSocialMedia></LogoSocialMedia>
          <Community></Community>
          <Places></Places>
          <About></About>
        </Container>
      </MainFooter>
    </>
  );
};

export default Footer;
