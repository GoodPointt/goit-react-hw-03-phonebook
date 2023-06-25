import styled from '@emotion/styled';

export const ErrorMsg = styled.p`
  font-style: italic;
  color: red;
  font-size: 10px;
`;

export const StyledInput = styled.input`
  font-size: 20px;
  background-color: #212121;
  color: #ffffff;

  max-width: 100%;
  height: 40px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;

  &:focus {
    color: rgb(0, 255, 255);
    background-color: #212121;
    outline-color: rgb(0, 255, 255);
    box-shadow: -3px -3px 15px rgb(0, 255, 255);
    transition: 0.1s;
    transition-property: box-shadow;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge white;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #252525;
    transition: 0.5s;
    transform-origin: center;
  }

  &::before {
    content: '';
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #252525;
    transition: 0.5s;
  }

  &:hover::before,
  :hover::after,
  :active::before,
  :active::after {
    transform: scale(0);
    color: rgb(0, 255, 255);
  }

  &:hover,
  :active,
  :focus {
    box-shadow: inset 0px 0px 25px rgb(0, 255, 255);
    color: rgb(0, 255, 255);
  }
`;

export const StyledItem = styled.li``;

export const StyledItemBtn = styled(Btn)`
  margin-left: 20px;
  width: 3em;
  height: 2em;
  &:hover,
  :active,
  :focus {
    box-shadow: inset 0px 0px 25px rgb(97, 1, 1);
    color: rgb(255, 0, 0);
  }
`;

export const StyledList = styled.ul`
  padding: 0;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;
