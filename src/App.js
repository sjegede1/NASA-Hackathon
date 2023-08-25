import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ImageContainer from './components/ImageContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageContainer />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
