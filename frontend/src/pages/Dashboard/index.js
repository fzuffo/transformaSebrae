import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Content, List } from './styles';
import Header from '~/components/Header';
import DataTable from '~/components/DataTable';

export default function Dashboard() {
  const [consult, setConsult] = useState();

  useEffect(() => {
    async function loadConsulting() {
      const response = await api.get('/consulting', {
        params: {
          page: 1,
        },
      });

      setConsult(response.data);

      console.log(consult);
    }

    loadConsulting();
  }, []);

  function handleDetailPage(data) {
    console.log(data);
  }

  return (
    <>
      <DataTable />
    </>
  );
}
