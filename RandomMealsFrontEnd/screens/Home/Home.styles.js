import styled from 'styled-components/native';
// #81a857
export const HomeWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #3b4e76;
  align-items: center;
  justify-content: center;
  
`;

export const HomeRow = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row;
`;

export const HomeCard = styled.View`
  background-color: gray;
  padding: 5px 0 5px 0;
  flex: 2;
  align-items: center;
  width: 33%;
`;
