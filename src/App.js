import { ThemeProvider } from 'styled-components';
import GlobalStyles from './componenets/styles/Global';
import { Routes, Route } from 'react-router-dom';
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import NftLink from './componenets/NftLink';
import NavigationBar from './componenets/NavigationBar';

const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#A02279',
    text: '#434343',
    footer: 'black',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavigationBar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/nfts" element={<NftLink />} />
          </Route>
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
