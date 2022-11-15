import { ThemeProvider } from 'styled-components';
import GlobalStyles from './componenets/styles/Global';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './componenets/Home';

const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#A02279',
    text: '#434343',
    footer: '#1D1D1E',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <GlobalStyles />
          <Home />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
