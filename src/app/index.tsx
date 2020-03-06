import { Handbook, page } from '@handbook/react';
import React from 'react';
import { render } from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import './markdown.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const StyledHandbook = styled(Handbook)`
  > nav {
    position: fixed;
    width: 200px;
    padding: 20px;
    
    font-size: 12px;
    line-height: 150%;
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      
      ul {
        padding-left: 20px;
      }
    }
  }

  > article {
    margin-left: 200px;
    padding: 20px;
    
    iframe {
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledHandbook>
        {{
          index: {
            Title1: page('./pages/Page1'),
            Title2: page('./pages/Page2'),
            Cate: {
              Gory: {
                Title3: page('./pages/Page3'),
              },
            },
          },
        }}
      </StyledHandbook>
    </div>
  );
}

render(<App />, document.querySelector('#app'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
