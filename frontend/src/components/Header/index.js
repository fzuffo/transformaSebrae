import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import logoVS from '~/assets/logoVS.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  // const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logoVS} alt="transformaSebrae" />
          </Link>
          <div id="divButtonMenu">
            <Link to="/dashboard">
              <div id="buttonMenu">Consultor </div>
            </Link>
            <Link to="/questions">
              <div id="buttonMenu">Empreendedor </div>
            </Link>
          </div>
        </nav>

        <aside>
          <Profile>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
