// import React, { useState, useRef } from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Background from '~/components/Background';
// import Header from '~/components/Header';

// import { View, SafeAreaView } from 'react-native';

// import api from '~/services/api';

// import {
//   Container,
//   Form,
//   FormInput,
//   Separator,
//   SubmitButton,
//   LogoutButton,
//   FormLabel,
// } from './styles';

// Icon.loadFont();
// export default function Questions() {
//   const nameRef = useRef();
//   const docRef = useRef();
//   const phoneRef = useRef();
//   const q1Ref = useRef();
//   const q2Ref = useRef();
//   const q3Ref = useRef();
//   const q4Ref = useRef();
//   const q5Ref = useRef();
//   const q6Ref = useRef();
//   const q7Ref = useRef();
//   const q8Ref = useRef();
//   const q9Ref = useRef();
//   const q10Ref = useRef();
//   const q11Ref = useRef();
//   const q12Ref = useRef();
//   const q13Ref = useRef();
//   const q14Ref = useRef();
//   const q15Ref = useRef();
//   const q16Ref = useRef();
//   const q17Ref = useRef();
//   const q18Ref = useRef();
//   const q19Ref = useRef();
//   const q20Ref = useRef();
//   const q21Ref = useRef();
//   const q22Ref = useRef();
//   const q23Ref = useRef();
//   const q24Ref = useRef();
//   const q25Ref = useRef();
//   const q26Ref = useRef();
//   const q27Ref = useRef();
//   const q28Ref = useRef();
//   const q29Ref = useRef();
//   const q30Ref = useRef();

//   const [name, setName] = useState();
//   const [doc, setDoc] = useState();
//   const [phone, setPhone] = useState();
//   const [q1, setQ1] = useState();
//   const [q2, setQ2] = useState();
//   const [q3, setQ3] = useState();
//   const [q4, setQ4] = useState();
//   const [q5, setQ5] = useState();
//   const [q6, setQ6] = useState();
//   const [q7, setQ7] = useState();
//   const [q8, setQ8] = useState();
//   const [q9, setQ9] = useState();
//   const [q10, setQ10] = useState();
//   const [q11, setQ11] = useState();
//   const [q12, setQ12] = useState();
//   const [q13, setQ13] = useState();
//   const [q14, setQ14] = useState();
//   const [q15, setQ15] = useState();
//   const [q16, setQ16] = useState();
//   const [q17, setQ17] = useState();
//   const [q18, setQ18] = useState();
//   const [q19, setQ19] = useState();
//   const [q20, setQ20] = useState();
//   const [q21, setQ21] = useState();
//   const [q22, setQ22] = useState();
//   const [q23, setQ23] = useState();
//   const [q24, setQ24] = useState();
//   const [q25, setQ25] = useState();
//   const [q26, setQ26] = useState();
//   const [q27, setQ27] = useState();
//   const [q28, setQ28] = useState();
//   const [q29, setQ29] = useState();
//   const [q30, setQ30] = useState();

//   function handleSubmit() {
//     // dispatch(
//     //   updateProfileRequest({
//     //     name,
//     //     email,
//     //     document,
//     //   })
//     // );
//   }

//   return (
//     <Background>
//       <Header />
//       <Container>
//         <FormLabel>Nome Completo</FormLabel>
//         <FormInput
//           autoCorrect={false}
//           autoCapitalize="none"
//           returnKeyType="next"
//           onSubmitEditing={() => docRef.current.focus()}
//           value={name}
//           onChangeText={setName}
//           required
//         />

//         <FormLabel>CNPJ</FormLabel>
//         <FormInput
//           autoCorrect={false}
//           autoCapitalize="none"
//           ref={docRef}
//           returnKeyType="next"
//           onSubmitEditing={() => phoneRef.current.focus()}
//           value={doc}
//           onChangeText={setDoc}
//         />

//         <FormLabel>Telefone</FormLabel>
//         <FormInput
//           autoCorrect={false}
//           autoCapitalize="none"
//           ref={phoneRef}
//           returnKeyType="next"
//           onSubmitEditing={() => q1Ref.current.focus()}
//           value={phone}
//           onChangeText={setPhone}
//         />

//         <Separator />

//         <FormLabel>1. Ramo onde a sua empresa atua</FormLabel>
//         <FormInput
//           secureTextEntry
//           autoCorrect={false}
//           autoCapitalize="none"
//           ref={q1Ref}
//           returnKeyType="next"
//           onSubmitEditing={() => q2Ref.current.focus()}
//           value={q1}
//           onChangeText={setQ1}
//         />

//         <FormLabel>
//           2. O seu investimento é por capital próprio ou financiamento bancário?
//         </FormLabel>
//         <FormInput
//           secureTextEntry
//           autoCorrect={false}
//           autoCapitalize="none"
//           ref={q2Ref}
//           returnKeyType="next"
//           onSubmitEditing={() => q3Ref.current.focus()}
//           value={q2}
//           onChangeText={setQ2}
//         />

//         <FormLabel>3. Você tem funcionários? Se sim, quantos?</FormLabel>
//         <FormInput
//           secureTextEntry
//           autoCorrect={false}
//           autoCapitalize="none"
//           ref={q3Ref}
//           returnKeyType="next"
//           onSubmitEditing={() => q4Ref.current.focus()}
//           value={q3}
//           onChangeText={setQ3}
//         />

//         <FormLabel>4. Você tem sócios?</FormLabel>
//         <FormInput
//           secureTextEntry
//           autoCorrect={false}
//           autoCapitalize="none"
//           ref={q4Ref}
//           returnKeyType="next"
//           onSubmitEditing={() => q5Ref.current.focus()}
//           value={q4}
//           onChangeText={setQ4}
//         />
//         {/*
//       <FormLabel>5. Você costuma contratar terceirizados?</FormLabel>
//       <FormInput
//         secureTextEntry
//         autoCorrect={false}
//         autoCapitalize="none"
//         ref={q5Ref}
//         returnKeyType="next"
//         onSubmitEditing={() => q6Ref.current.focus()}
//         value={q5}
//         onChangeText={setQ5}
//       /> */}
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
