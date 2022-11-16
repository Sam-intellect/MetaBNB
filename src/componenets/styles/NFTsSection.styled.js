import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 20rem;

  @media screen and (max-width: 768px) {
    height: 100vh;
    margin-bottom: 3rem;
    height: 100%;
  }
`;
export const TitleText = styled.div`
  width: 100%;
  padding: 24px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 20vh;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  margin-top: 7rem;
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
    font-size: 2rem;
  }
`;

export const NFTs = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const NFTCont = styled.div`
  width: 292px;
  height: 372px;
  padding: 15px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 25px;
  border-style: solid;
  border-color: #d7d7d7;
`;
export const NFTImage = styled.div``;
export const Nft = styled.img``;
export const NftLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const Label1 = styled.div``;
export const Label2 = styled.div``;
export const NftDesc = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 1rem;
`;
export const Desc1 = styled.div``;
export const Desc2 = styled.div``;
export const NftRating = styled.div`
  display: flex;
  gap: 7px;
`;
export const Star = styled.img``;
