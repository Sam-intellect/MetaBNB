import { Container } from './styles/Container.styled';
import {
  LearnMore,
  Main,
  Head,
  Left,
  Content,
  LearnBtn,
  Right,
  SideImage,
  Side,
} from './styles/LearnMore.styled';

const LearnMoreSection = () => {
  return (
    <>
      <LearnMore>
        <Container>
          <Main>
            <Left>
              <Head>Metabnb NFTs</Head>
              <Content>
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </Content>
              <LearnBtn>Learn more</LearnBtn>
            </Left>
            <Right>
              <SideImage>
                <Side src="./images/side.svg" alt="" />
              </SideImage>
            </Right>
          </Main>
        </Container>
      </LearnMore>
    </>
  );
};

export default LearnMoreSection;
