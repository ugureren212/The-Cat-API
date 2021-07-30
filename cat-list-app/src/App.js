import './App.css';
import Heading from './Heading'
import CatList from './CatList'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <div className="content">
          <CatList />
        </div>
      </div>
    </div>
  );
}

export default App;
