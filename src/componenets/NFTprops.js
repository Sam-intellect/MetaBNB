import React from 'react';
import {
  NFTCont,
  NFTImage,
  Nft,
  NftLabel,
  Label1,
  Label2,
  NftDesc,
  Desc1,
  Desc2,
  NftRating,
  Star,
} from './styles/NFTsSection.styled';

const NFTcard = (props) => {
  return (
    <>
      <NFTCont>
        <NFTImage>
          <Nft src={props.img} alt="" />
        </NFTImage>
        <NftLabel>
          <Label1>Desert king</Label1>
          <Label2>1MBT per night</Label2>
        </NftLabel>
        <NftDesc>
          <Desc1>2345km away</Desc1>
          <Desc2>available for 2weeks stay</Desc2>
        </NftDesc>
        <NftRating>
          <Star src="./images/Star 2.svg" alt="" />
          <Star src="./images/Star 2.svg" alt="" />
          <Star src="./images/Star 2.svg" alt="" />
          <Star src="./images/Star 2.svg" alt="" />
          <Star src="./images/Star 2.svg" alt="" />
        </NftRating>
      </NFTCont>
    </>
  );
};

export default NFTcard;
