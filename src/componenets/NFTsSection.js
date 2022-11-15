import { Container } from './styles/Container.styled';
import { Main, Title, TitleText, NFTs } from './styles/NFTsSection.styled';
import NFTprops from './NFTprops';

const NFTsSection = () => {
  return (
    <>
      <Container>
        <Main>
          <TitleText>
            <Title>Inspiration for your next adventure</Title>
          </TitleText>

          <NFTs>
            <NFTprops img={'./images/nft1.svg'} />
            <NFTprops img={'./images/nft2.svg'} />
            <NFTprops img={'./images/nft3.svg'} />
            <NFTprops img={'./images/nft4.svg'} />
            <NFTprops img={'./images/nft5.svg'} />
            <NFTprops img={'./images/nft6.svg'} />
            <NFTprops img={'./images/nft7.svg'} />
            <NFTprops img={'./images/nft8.svg'} />
          </NFTs>
        </Main>
      </Container>
    </>
  );
};

export default NFTsSection;
