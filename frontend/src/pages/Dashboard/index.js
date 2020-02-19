import React, { useState, useEffect } from 'react';

import history from '~/services/history';
import api from '~/services/api';
import { Container, Content, List } from './styles';

export default function Dashboard() {
  const [consulting, setConsulting] = useState([]);

  useEffect(() => {
    async function loadConsultings() {
      const response = await api.get('/consultings');

      setConsulting(response.data);
    }

    loadConsultings();
  }, []);

  function handleDetailPage(id) {
    console.log(id);
    return history.push(`/details/${id}`);
  }

  return (
    <Container>
      <Content>
        <div>
          <strong>Inscrições Realizadas</strong>
        </div>

        <div>
          <ul>
            {consulting.map(item => (
              <List key={item.id} onClick={() => handleDetailPage(item.id)}>
                <strong id="strongList">Status: ({item.status})</strong>
                <strong id="strongList">Nome: ({item.user.name})</strong>
                <strong id="strongList">CNPJ: ({item.user.document})</strong>
              </List>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
}
