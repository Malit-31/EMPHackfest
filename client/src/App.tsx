import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PageHome from './pages/PageHome.tsx';


import { THEME_COLORS } from './utils/theme.ts';
import { INTERNAL_LINKS } from './utils/links.ts';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* space-between */
  font-family: "Times New Roman", serif;
  color: ${THEME_COLORS.brandDark};

  @keyframes fade-in {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fade04 {
    opacity: 0;
    animation: fade-in 0.4s normal both;
  }

  .fade08 {
    opacity: 0;
    animation: fade-in 0.8s normal both;
  }

  .fade12 {
    opacity: 0;
    animation: fade-in 1.2s normal both;
  }

  .fade16 {
    opacity: 0;
    animation: fade-in 1.6s normal both;
  }

  .fade20 {
    opacity: 0;
    animation: fade-in 2.0s normal both;
  }

  .fade24 {
    opacity: 0;
    animation: fade-in 2.4s normal both;
  }

  .fade28 {
    opacity: 0;
    animation: fade-in 2.8s normal both;
  }

  .fade35 {
    opacity: 0;
    animation: fade-in 3.5s normal both;
  }

  .fade40 {
    opacity: 0;
    animation: fade-in 3.0s 1s normal both;
  }
`;


function App() {
  return (
    <BrowserRouter>
          <Container>

                <Routes>
                  <Route path={INTERNAL_LINKS.HOME} element={<PageHome />} />
                </Routes>
              
          </Container>
    </BrowserRouter>
  );
}

export default App;
