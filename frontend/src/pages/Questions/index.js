import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Form } from '@unform/web';
import Input from './components/Input';
// import './components/styles.css';
import api from '~/services/api';
import { Container, Separator } from './styles.js';

export default function App() {
  const [btnDisabled, setBtnDisabled] = useState();

  // async function handleSend() {
  //   await api.post('consulting');
  //   toast.success('Enviado com sucesso');
  //   setBtnDisabled(true);
  // }

  async function handleSubmit(data) {
    await api.post('/answers', {
      data,
    });
  }

  return (
    <Container>
      <strong>
        Adorariamos te ajudar, poderia nos contar um pouco sobre você e sua
        empresa?
      </strong>

      <Form onSubmit={handleSubmit}>
        <Input name="q1" label="Qual o ramo onde a sua empresa atua?" />
        <Input
          name="q2"
          label="O seu investimento é por capital próprio ou financiamento bancário?"
        />
        <Input
          name="q3"
          label="Você tem funcionários?
"
        />
        <Input name="q4" label="Você tem sócios? " />
        <Input
          name="q5"
          label="Você costuma contratar terceirizados?
"
        />
        <Input
          name="q6"
          label="Qual o seu faturamento mensal?
"
        />
        <Input name="q7" label="Você faz retiradas?" />
        <Input
          name="q8"
          label="Se sim, qual o período e valor médio das suas retiradas?"
        />
        <Input name="q9" label="Qual o seu tipo de CNPJ?" />
        <Input name="q10" label="Você sabe o que é Pró-labore?" />
        <Input name="q11" label="Se sim, você tem Pró-labore?" />
        <Input name="q12" label="Qual o valor do seu Pró-labore?" />
        <Input name="q13" label="Sua empresa tem espaço físico?" />
        <Input name="q14" label="Se sim, qual o endereço?" />
        <Input name="q15" label="Você paga aluguel?" />
        <Input
          name="q16"
          label="Você utiliza alguma ferramenta, App ou software para auxiliar na administração da sua empresa?"
        />
        <Input name="q17" label="Se sim, quais?" />
        <Input name="q18" label="Você tem contador?" />
        <Input
          name="q19"
          label="Quais são as suas principais dúvidas e dificuldades na gestão da sua empresa?"
        />
        <Input
          name="q20"
          label="Quais são as suas expectativas no programa de acompanhamento do Sebrae?"
        />
        <Input name="q21" label="Como você chegou até aqui?" />
        <Input name="q22" label="Você tem um plano de negócios?" />
        <Input
          name="q23"
          label="Você fez estudo de mercado e público-alvo antes de abrir a sua empresa?"
        />
        <Input name="q24" label="Como você lida com o setor tributário?" />
        <Input
          name="q25"
          label="Sua empresa emite nota fiscal? Você tem domínio sobre essa função?"
        />
        <Input
          name="q26"
          label="Como você lida com o setor financeiro da sua empresa? Considera que está bem administrado?"
        />
        <Input
          name="q27"
          label="Como você lida com a gestão geral da sua empresa? "
        />
        <Input
          name="q28"
          label="Você tem uma equipe ou faz alguma ação de marketing na sua empresa?"
        />
        <Input
          name="q29"
          label="Você investe na imagem e propagação e divulgação da sua empresa?"
        />
        <Input
          name="q30"
          label="Você tem dificuldades em precificar seu trabalho/serviço?"
        />

        <button type="submit" disabled={btnDisabled} onCLick={handleSubmit}>
          Salvar
        </button>
      </Form>

      {/* <button id="sendBtn" disabled={btnDisabled} onClick={handleSend}>
        Enviar
      </button> */}
      <span>* Após enviar não é possivel alterar as informações</span>
    </Container>
  );
}
