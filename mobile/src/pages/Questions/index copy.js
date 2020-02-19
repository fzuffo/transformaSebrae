// import React, { useEffect, useState, Component, useRef } from 'react';
// import {
//   TextInput,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   View,
//   ScrollView,
// } from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container, SubmitButton, FormInput, Form } from './styles';
// import Background from '~/components/Background';

// import api from '~/services/api';

// Icon.loadFont();

// export default function Questions({ navigation }) {
//   const [questions, setQuestions] = useState('');
//   const [ans, setAns] = useState([]);

//   // state = {
//   //   answers: [],
//   // };

//   useEffect(() => {
//     async function loadQuestions() {
//       const response = await api.get('/questions');

//       setQuestions(response.data);
//     }

//     loadQuestions();
//   }, []);

//   function handleSubmit() {
//     console.tron.log('-->', ans);
//     ans.forEach(e => {
//       console.tron.log('---->', e);
//     });
//   }

//   return (
//     <Background>
//       <Container>
//         <FlatList
//           data={questions}
//           keyExtractor={item => String(item.id)}
//           renderItem={({ item }) => (
//             <Form>
//               <Text>{item.description}</Text>
//               <FormInput
//                 onChangeText={text => {
//                   let inputValues = ans;
//                   inputValues[item.id - 1] = text;
//                 }}
//               />
//             </Form>
//           )}
//         />

//         <SubmitButton onPress={handleSubmit}>Salvar</SubmitButton>
//       </Container>
//     </Background>
//   );
// }

// Questions.navigationOptions = {
//   tabBarLabel: 'Questionário',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="question-answer" size={20} color={tintColor} />
//   ),
// };
