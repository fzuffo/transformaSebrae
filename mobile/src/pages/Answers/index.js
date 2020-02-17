import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';
import Background from '~/components/Background';
import { FlatList } from 'react-native-gesture-handler';
import api from '~/services/api';
Icon.loadFont();
export default function Answers({ navigation }) {
  useEffect(() => {
    loadAnswers();
  }, []);

  async function loadAnswers() {
    const response = await api.get('/questions');

    console.tron.log(response);
  }

  return (
    <Background>
      <SafeAreaView>
        <FlatList></FlatList>
      </SafeAreaView>
    </Background>
  );
}

Answers.navigationOptions = {
  tabBarLabel: 'Questionário',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="question-answer" size={20} color={tintColor} />
  ),
};
