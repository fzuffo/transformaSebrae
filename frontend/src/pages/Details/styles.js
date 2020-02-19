import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 52px;

  div#infoNotFound {
    display: flex;
    justify-content: center;
    align-content: center;

    span {
      color: #133960;
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const Content = styled.div`
  max-width: 940px;
  margin: 0px auto;

  ul {
    background: rgba(0, 0, 0, 0.2);
    height: 60px;
    padding: 0 10px;
  }

  #question {
    color: #133960;
    font-size: 18px;
    font-weight: bold;
  }

  #answer {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
