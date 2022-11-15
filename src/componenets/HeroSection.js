import React from 'react';
import { Container } from './styles/Container.styled';
import {
  Main,
  MainText,
  MainParagraph,
  Span,
  LeftMain,
  SearchInput,
  InputField,
  SearchBtnLink,
  RightMain,
  First,
  NFT1,
  NFT,
  Second,
  HeroFooter,
  FooterLogo,
} from './styles/HeroSection.styled';

const HeroSection = () => {
  return (
    <>
      <Container>
        <Main>
          <LeftMain>
            <MainText>
              Rent a <Span>Place</Span> away from <Span>Home</Span> in the
              <Span> Metaverse</Span>
            </MainText>
            <MainParagraph>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </MainParagraph>
            <InputField>
              <SearchInput
                type="text"
                name="search"
                placeholder="search for location"
              />
              <SearchBtnLink to="/wallet">Search</SearchBtnLink>
            </InputField>
          </LeftMain>

          <RightMain>
            <First>
              <NFT1>
                <NFT src="./images/image 3.svg" alt="" />
              </NFT1>
              <NFT1>
                <NFT src="./images/image 4.svg" alt="" />
              </NFT1>
            </First>
            <Second>
              <NFT1>
                <NFT src="./images/image 5.svg" alt="" />
              </NFT1>
              <NFT1>
                <NFT src="./images/image 6.svg" alt="" />
              </NFT1>
            </Second>
          </RightMain>
        </Main>
      </Container>
      {/* Footer for the first page */}
      <HeroFooter>
        <Container>
          <FooterLogo
            src="
          ./images/Frame 137.svg"
            alt=""
          />
        </Container>
      </HeroFooter>
    </>
  );
};

export default HeroSection;
