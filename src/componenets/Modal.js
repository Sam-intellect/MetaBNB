import React from 'react';
import {
  Overlay,
  ModalContainer,
  CloseModal,
  Upper,
  ConnectWallet,
  Divider,
  Option,
  MetamaskBtn,
  Lower,
  MetaImg,
  MetaDesc,
  MetaArrow,
  Btt,
  Choose,
} from './styles/Modal.styled';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <Overlay onClick={onClose}>
        <ModalContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Upper>
            <ConnectWallet>Connect Wallet</ConnectWallet>
            <CloseModal onClick={onClose}>
              <IoCloseSharp />
            </CloseModal>
          </Upper>

          <Divider></Divider>
          <Lower>
            <Option>Choose your preferred wallet:</Option>
            <Choose>
              <MetamaskBtn onClick={() => console.log('Xup')}>
                <Btt>
                  <MetaImg src="./images/meta.svg" />
                  <MetaDesc>Metamask</MetaDesc>
                </Btt>

                <MetaArrow src="./images/arrow.svg" />
              </MetamaskBtn>
              <MetamaskBtn onClick={() => console.log('Xup')}>
                <Btt>
                  <MetaImg src="./images/connect.svg" />
                  <MetaDesc>WalletConnect</MetaDesc>
                </Btt>

                <MetaArrow src="./images/arrow.svg" />
              </MetamaskBtn>
            </Choose>
          </Lower>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
