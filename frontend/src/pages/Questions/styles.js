import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  strong {
    margin: 20px 0 50px;
    align-self: center;
    font-size: 28px;
    max-width: 600px;
    text-align: center;
    color: #133960;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 600px;
    align-self: center;
  }

  form img {
    height: 80px;
    align-self: center;
    margin-bottom: 30px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
  }

  input:focus {
    border-color: #111;
  }

  button {
    display: block;
    background: #133960;
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #000;
  }

  #sendBtn {
    margin-top: 10px;
    max-width: 600px;
    align-self: center;
    background-color: green;
  }

  span {
    margin-top: 10px;
    max-width: 600px;
    align-self: center;
    color: #000;
  }
`;
