import React from 'react';

import { Container, Wrapper, LinkedInIcon, SearchInput, HomeIcon, NotificationsIcon, ProfileCircle, CareDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return(
      <Container>
          <Wrapper>
              <div className="left">
                  <LinkedInIcon />
                  <SearchInput placeholder="Pesquisar"/>
              </div>

              <div className="right">
                  <nav>
                      <button className="active">
                          <HomeIcon/>
                          <span>Início</span>
                      </button>
                      <button>
                          <NotificationsIcon/>
                          <span>Notificações</span>
                      </button>
                      <button>
                          <ProfileCircle src="https://github.com/LucasAnselmoSilva12345.png"/>
                          <span>
                              Eu <CareDownIcon/>
                          </span>
                      </button>
                  </nav>
              </div>
          </Wrapper>
      </Container>
  );
}

export default DesktopHeader;