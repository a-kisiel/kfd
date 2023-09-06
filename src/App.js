import Slideshow from './components/Slideshow';
import Nav from './components/Nav';
import Footer from './components/Footer';
import getPage from './pages/getPage';

function determinePage() {
  const path = window.location.pathname.replace(/[/-]/g, '').toLowerCase();
  return {
    page: getPage(path),
    name: path
  };
}

function supportsWebp() {
  var elem = document.createElement('canvas')
  if (!!(elem.getContext && elem.getContext('2d')))
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;

  return false;
};

function App() {

  // Page 'Router'
  const page = determinePage();

  return (
    <div className="App">
      <Slideshow webpSupport={supportsWebp}/>
      <Nav pageName={page.name}/>
      { page.page }
      <Footer />
    </div>
  );
}

export default App;
