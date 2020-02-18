import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 10px 20px;
`;

export const Separator = styled.View`
  margin: 20px 0 10px 0;
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const FormInput = styled(Input)``;
export const SubmitButton = styled(Button)``;
export const Form = styled.View``;
export const FormLabel = styled.Text``;
