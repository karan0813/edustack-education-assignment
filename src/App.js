import './App.css';
import Cards from './Comp/Cards';
import Hearder from './Comp/Hearder';
import Slider from './Comp/Slider';
import Slinks from "./Comp/Slinks"
import Stikybar from './Comp/Stikybar';

function App() {
  return (
    <div className="app">
      <Hearder />
      <Slinks />
      <Slider />
      <Cards />
      <Cards />
      <Stikybar/>
    </div>
  );
}

export default App;
