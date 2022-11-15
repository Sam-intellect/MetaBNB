import { Container } from './styles/Container.styled';
import {
  Main,
  UpperLinks,
  Links,
  Location,
  LocationInput,
  LocationIcon,
} from './styles/place.styled';
import { NFTs } from './styles/NFTsSection.styled';
import NFTprops from './NFTprops';

const NftLink = () => {
  return (
    <>
      <Container>
        <Main>
          <UpperLinks>
            <Links>Resturant</Links>
            <Links>Cottage</Links>
            <Links>Castle</Links>
            <Links>fantast city</Links>
            <Links>beach</Links>
            <Links>Carbins</Links>
            <Links>Off-grid</Links>
            <Links>Farm</Links>

            <Location>
              <LocationInput type="text" name="search" placeholder="Location" />
              <LocationIcon />
            </Location>
          </UpperLinks>

          <NFTs>
            <NFTprops img={'./images/n1.svg'} />
            <NFTprops img={'./images/n2.svg'} />
            <NFTprops img={'./images/n3.svg'} />
            <NFTprops img={'./images/n4.svg'} />
            <NFTprops img={'./images/n5.svg'} />
            <NFTprops img={'./images/n6.svg'} />
            <NFTprops img={'./images/n7.svg'} />
            <NFTprops img={'./images/n8.svg'} />
            <NFTprops img={'./images/n9.svg'} />
            <NFTprops img={'./images/n10.svg'} />
            <NFTprops img={'./images/n11.svg'} />
            <NFTprops img={'./images/n12.svg'} />
            <NFTprops img={'./images/n13.svg'} />
            <NFTprops img={'./images/n14.svg'} />
            <NFTprops img={'./images/n15.svg'} />
            <NFTprops img={'./images/n16.svg'} />
          </NFTs>
        </Main>
      </Container>
    </>
  );
};

export default NftLink;
