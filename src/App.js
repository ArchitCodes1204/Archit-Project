import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Fade, Bounce, Rotate } from 'react-bits';

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  primary: '#FD3D0C',
  secondary: '#f5f5f5',
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#FD3D0C',
  secondary: '#2d2d2d',
};

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <ToggleButton onClick={toggleTheme}>
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </ToggleButton>
        
        <Content>
          <Fade in={true} duration={1000}>
            <Logo>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill={isDarkMode ? darkTheme.secondary : lightTheme.secondary}/>
                <path d="M50.6 85.7C45.4667 85.7 40.8667 84.8667 36.8 83.2C32.7333 81.5333 29.4667 79.0667 27 75.8C24.6 72.5333 23.3333 68.6 23.2 64H41.4C41.6667 66.6 42.5667 68.6 44.1 70C45.6333 71.3333 47.6333 72 50.1 72C52.6333 72 54.6333 71.4333 56.1 70.3C57.5667 69.1 58.3 67.4667 58.3 65.4C58.3 63.6667 57.7 62.2333 56.5 61.1C55.3667 59.9667 53.9333 59.0333 52.2 58.3C50.5333 57.5667 48.1333 56.7333 45 55.8C40.4667 54.4 36.7667 53 33.9 51.6C31.0333 50.2 28.5667 48.1333 26.5 45.4C24.4333 42.6667 23.4 39.1 23.4 34.7C23.4 28.1667 25.7667 23.0667 30.5 19.4C35.2333 15.6667 41.4 13.8 49 13.8C56.7333 13.8 62.9667 15.6667 67.7 19.4C72.4333 23.0667 74.9667 28.2 75.3 34.8H56.8C56.6667 32.5333 55.8333 30.7667 54.3 29.5C52.7667 28.1667 50.8 27.5 48.4 27.5C46.3333 27.5 44.6667 28.0667 43.4 29.2C42.1333 30.2667 41.5 31.8333 41.5 33.9C41.5 36.1667 42.5667 37.9333 44.7 39.2C46.8333 40.4667 50.1667 41.8333 54.7 43.3C59.2333 44.8333 62.9 46.3 65.7 47.7C68.5667 49.1 71.0333 51.1333 73.1 53.8C75.1667 56.4667 76.2 59.9 76.2 64.1C76.2 68.1 75.1667 71.7333 73.1 75C71.1 78.2667 68.1667 80.8667 64.3 82.8C60.4333 84.7333 55.8667 85.7 50.6 85.7Z" fill="#FD3D0C"/>
              </svg>
            </Logo>
          </Fade>

          <Bounce in={true} duration={1000}>
            <h1>Welcome to Animated Dark Mode</h1>
          </Bounce>

          <Rotate in={true} duration={1000}>
            <p>This is a demo of React Bits animations with dark mode support!</p>
          </Rotate>
        </Content>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App; 