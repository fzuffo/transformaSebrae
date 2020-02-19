import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto 50px auto;
`;

export const Content = styled.div`
  max-width: 940px;
  margin: 52px auto 52px auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 32px;
      font-weight: bold;
      color: #133960;
    }

    button {
      margin: 5px 0 0;
      height: 42px;
      width: 172px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      text-align: right;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
    }

    ul {
      margin-top: 50px;
      width: 940px;
    }
  }
`;

export const List = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  max-width: 940px;
  height: 50px;
  background: #fff;
  margin-bottom: 5px;
  border: 1px inset rgba(0, 0, 0, 0.2);

  #strongList {
    color: #133960;
    font-size: 16px;
    font-weight: bold;
    margin: auto 30px;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin: auto 30px;
    opacity: ${props => (!props.isPast ? 1 : 0.2)};
  }

  svg {
    margin-right: 20px;
    font-size: 24px;
  }
`;
