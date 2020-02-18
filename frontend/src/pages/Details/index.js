import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function Details({ match }) {
  const [consulting, setConsulting] = useState();

  const { id } = match.params;

  useEffect(() => {
    async function loadConsulting() {
      const response = await api.get(`consultings/${id}`);

      setConsulting(response.data);
    }

    loadConsulting();
  }, []);

  return (
    <Container>
      {!consulting ? (
        <div id="infoNotFound">
          <span>Nenhum dado encontrado, tente novamente.</span>
        </div>
      ) : (
        <Content>
          <div>consulting.</div>
        </Content>
      )}
    </Container>
  );
}
