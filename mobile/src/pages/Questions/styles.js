import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const QuestionsFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  flex: 1;
  width: auto;
  margin: 0 20px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;

  margin: 0 20px;
`;

export const FormInput = styled(Input)``;
export const SubmitButton = styled(Button)``;
export const Form = styled.View``;
export const FormLabel = styled.Text``;
