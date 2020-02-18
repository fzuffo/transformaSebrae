import styled from 'styled-components';

export const Container = styled.div`
  height: 92px;
  background: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      height: 90px;
      width: auto;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }

  #divButtonMenu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 5px;
      width: 120px;
      height: 42px;

      text-align: center;

      background: #133960;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #000;
      font-size: 14px;
      font-weight: bold;
    }
    a {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      color: #999;
    }
  }
  button {
    width: 71px;
    height: 42px;
    text-align: center;
    line-height: 0;
    background: #133960;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
  }
`;
