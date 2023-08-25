import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ImageContainer from './components/ImageContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageContainer />
      <Welcome />
    </div>
  );
}

export default App;
