import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function Details({ match }) {
  const [consulting, setConsulting] = useState();
  const [answers, setAnswers] = useState();

  const { id } = match.params;

  useEffect(() => {
    // async function loadConsulting() {
    //   const response = await api.get(`consultings/${id}`);

    //   setConsulting(response.data);
    // }

    async function loadAnswers() {
      const response = await api.get('answers');
      console.log(response.data);
      setAnswers(response.data);
    }

    loadAnswers();
    // loadConsulting();
  }, []);

  return (
    <Container>
      {!answers ? (
        <div id="infoNotFound">
          <span>Nenhum dado encontrado, tente novamente.</span>
        </div>
      ) : (
        <Content>
          {answers.map(item => (
            <ul key={item.id}>
              <p id="question">{item.question.description}</p>
              <p id="answer">{item.description}</p>
            </ul>
          ))}
        </Content>
      )}
    </Container>
  );
}
