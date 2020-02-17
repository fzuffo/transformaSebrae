import React, { useEffect, useState, Component } from 'react';
import { TextInput, FlatList, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, SubmitButton } from './styles';
import Background from '~/components/Background';

import api from '~/services/api';

Icon.loadFont();

export default function Questions({ navigation }) {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [questions, setQuestions] = useState('');
  const [answers, setAnswers] = useState([]);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get('/questions');

      setQuestions(response.data);
    }
    loadQuestions();
  }, []);

  function handleChange({ text, id }) {
    if (selectedId !== id) {
      console.tron.log('mudou', id, text);
      setAnswers({
        id,
        text,
      });
    } else {
      // when change, save the state in another place, build a object, try to use immer
      console.tron.log('continua', id, text);
    }
    setSelectedId(id);
    console.tron.log(answers);
  }

  return (
    <Background>
      <Container>
        <FlatList
          data={questions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              <Text>{item.description}</Text>
              <TextInput
                onChangeText={text => handleChange({ id: item.id, text })}
              />
            </>
          )}
        />
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
