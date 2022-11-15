import { Container } from './styles/Container.styled';
import {
  MainFooter,
  LogoSocialMedia,
  Community,
  Places,
  About,
  Logo1,
  Logo2,
  Main,
} from './styles/Footer.styled';

const Footer = () => {
  return (
    <>
      <MainFooter>
        <Container>
          <Main>
            <LogoSocialMedia>
              <Logo1 scr="./images/Logo.svg" alt="" />
              <Logo2 scr="./images/footerLogo2.svg" alt="" />
            </LogoSocialMedia>
            <Community>
              <h1>Community</h1>
              <h4>NFT</h4>
              <h4>Tokens</h4>
              <h4>Landlords</h4>
              <h4>Discord</h4>
            </Community>
            <Places>
              <h1>Places</h1>
              <h4>Castle</h4>
              <h4>Farms</h4>
              <h4>Beach</h4>
              <h4>Learn More</h4>
            </Places>
            <About>
              <h1>About Us</h1>
              <h4>Road Map</h4>
              <h4>Creators</h4>
              <h4>Career</h4>
              <h4>Contact us</h4>
            </About>
          </Main>
        </Container>
      </MainFooter>
    </>
  );
};

export default Footer;
