import styled from 'styled-components';

export const Button = styled.button`
  appearance: none;
  box-shadow: none;
  outline: none;

  cursor: pointer;

  border-radius: 10px;
  border: 1px solid #000;

  color: black;
  font-weight: 600;
  font-size: 16px;

  padding: 10px 30px;
  margin: 10px auto;

  flex: 1;
  min-width: 200px;

  overflow: hidden;

  font-family: 'Inconsolata';

  transition: background-color 250ms linear;

  &.good {
    background-color: #29fd298b;
  }
  &.neutral {
    background-color: #0c8eff8b;
  }
  &.bad {
    background-color: #ff00008b;
  }

  &:hover {
    &.good {
      background-color: #29fd29ee;
    }
    &.neutral {
      background-color: #0c8effee;
    }
    &.bad {
      background-color: #ff0000ee;
    }
  }
`;
