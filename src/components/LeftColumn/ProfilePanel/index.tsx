import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/LucasAnselmoSilva12345.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Lucas Anselmo</h1>
        <h2>Desenvolvedor Full Stack</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">2.020</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">222</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
