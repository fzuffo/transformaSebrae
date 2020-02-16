import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: #133960;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
