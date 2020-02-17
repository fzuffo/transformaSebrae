import React, { useEffect, useState, Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Form,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, SubmitButton } from './styles';
import Background from '~/components/Background';

import api from '~/services/api';

Icon.loadFont();

export default function Questions({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [newtext, setNewtext] = useState();
  const [nowId, setNowId] = useState();

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    const response = await api.get('/questions');

    setQuestions(response.data);
    // console.tron.log(questions);
  }

  function handleTextChange(id, text) {
    console.tron.log(nowId, id);
    setNewtext(text);

    if (nowId !== id) {
      console.tron.log('mudou');
    } else {
      console.tron.log('não');
    }
    setNowId(id);
  }

  return (
    <Background>
      <Container>
        <FlatList
          horizontal={false}
          data={questions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              <Text>{item.description}</Text>
              <TextInput
                onChangeText={text => handleTextChange(item.id, text)}
              />
            </>
          )}
        />

        <SubmitButton>Salvar e enviar depois</SubmitButton>
        {/* <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton> */}
      </Container>
    </Background>
  );
}

Questions.navigationOptions = {
  tabBarLabel: 'Questionário',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="question-answer" size={20} color={tintColor} />
  ),
};
