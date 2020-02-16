import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

Icon.loadFont();
export default function Answers({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Pagina de Perguntas</Text>
    </SafeAreaView>
  );
}

Answers.navigationOptions = {
  tabBarLabel: 'Questionário',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="question-answer" size={20} color={tintColor} />
  ),
};
