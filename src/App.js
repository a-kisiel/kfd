import logo from './logo.svg';
import Slideshow from './components/Slideshow';
import Nav from './components/Nav';
import Footer from './components/Footer';
import getPage from './pages/getPage';
import './App.css';

function determinePage() {
  const path = window.location.pathname.replace(/[\/-]/g, '').toLowerCase();
  return getPage(path);
}

function App() {

  // Page 'Router'
  const page = determinePage();

  return (
    <div className="App">
      <Slideshow />
      <Nav />
      { page }
      <Footer />
    </div>
  );
}

export default App;
