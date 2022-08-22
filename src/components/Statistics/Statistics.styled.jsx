import styled from 'styled-components';

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const StatisticItem = styled.li`
  display: flex;
  font-size: 18px;

  &.total {
    display: block;
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
  }
`;
