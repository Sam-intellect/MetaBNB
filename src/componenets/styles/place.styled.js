import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  height: 100%;
`;
export const UpperLinks = styled.div`
  width: 95%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
`;

export const Links = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  /* margin-top: 3rem; */
  cursor: pointer;

  &:hover {
    font-weight: bold;
    /* transform: scale(0.98); */
  }
`;

export const Location = styled.div`
  width: 20rem;
  height: 4rem;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  padding: 5px;
  margin-top: -1.5rem;
`;
export const LocationIcon = styled.div``;

export const LocationInput = styled.input`
  /* width: 7rem; */
  width: 15rem;
  height: 3rem;

  font-size: 13px;
  border: none;

  @media screen and (max-width: 768px) {
    font-size: 1.5px;
    width: 70%;
    height: 3rem;
    top: -7rem;
  }
`;
