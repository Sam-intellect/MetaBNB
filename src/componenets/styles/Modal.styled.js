import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 999;
  overflow: hidden;
`;
export const ModalContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 24rem;
  position: fixed;
  top: 40%;
  left: 35%;
  transform: translate(-50% -50%);
  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 24px;

  @media screen and (max-width: 768px) {
    height: 50vh;
    top: 0;
    left: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 30%;
    left: 15%;
  }
`;
export const CloseModal = styled.div`
  font-size: 2rem;
  cursor: pointer;
`;
export const ConnectWallet = styled.h6`
  font-size: 24px;
  margin-top: -0.5rem;
`;
export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 3rem;
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Footer};
  margin-top: -3rem;
  margin-botton: 5rem;
`;
export const Lower = styled.div`
  padding: 20px;
`;
export const Option = styled.h2`
  font-size: 10px;
  font-weight: lighter;
`;

export const Choose = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const MetamaskBtn = styled.div`
  width: 100%;
  height: 4rem;
  border: 1px solid;
  border-color: #cfd8dc;
  border-radius: 10px;
  background-color: #f8f9fa;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
`;
export const Btt = styled.div`
  display: flex;
  gap: 10px;
`;

export const MetaImg = styled.img`
  width: 44px;
`;
export const MetaDesc = styled.h4``;
export const MetaArrow = styled.img`
  width: 15px;
`;
