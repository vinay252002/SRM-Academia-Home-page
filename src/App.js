import Header from './header/Header';
import Home from './homepage/Home';
import Content from './homepage/Content';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header title='bv4734' />
      <div className='container'>
        <Home />
        <Content/>
      </div>
    </div>
  );
}

export default App;
